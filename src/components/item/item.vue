<template>
  <div class="item">
    <div class="item__element">
      <input type="checkbox" v-model="checked" @click="checkboxClick" />
      {{number && `Item ${number}`}}
    </div>

    <div class="item__info">
      <input
        type="number"
        class="count"
        placeholder="0"
        min="0"
        max="100"
        maxlength="100"
        :value="value"
        ref="input"
        @input="valueChanged" />
      <input type="color" class="color" :value="color" @change="colorValueChanged" ref="color">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'item',
  props: {
    number: Number,
    color: String,
    value: Number,
    check: Boolean,
  },
  data() {
    return {
      checked: this.check || false,
    };
  },
  methods: {
    ...mapActions({
      changeColorCount: 'colors/changeColorCount',
      changeColor: 'colors/changeColor',
    }),
    checkboxClick() {
      this.$emit('checkboxChanged', this.color);
      // console.log(!this.checked ? 'Включилось' : 'отключилось');
    },
    valueChanged() {
      const amount = this.$refs.input.value * 1;
      const data = { color: this.color, amount };
      this.changeColorCount(data);
    },
    colorValueChanged() {
      const color = this.$refs.color.value;
      const data = { old: this.color, new: color };
      this.changeColor(data);
    },
  },
  updated() {
    this.checked = this.check;
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

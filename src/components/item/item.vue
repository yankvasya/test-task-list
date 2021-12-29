<template>
  <div class="item">
    <div class="item__element">
      <input type="checkbox" v-model="checked" />
      {{number && `Item ${number}`}}
    </div>

    <div class="item__info">
      <input type="number" class="count" placeholder="0" :value="value" min="0" max="100" />
      <input type="color" class="color" :value="color">
    </div>
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" src="./style.scss" scoped />

<template>
  <div class="list">
    <div class="list__title">
      <a href="#" @click="arrowClick">
        <icon
          name="arrow"
          :class="['arrow ', {'closed': !isArrowOpen}]"
        />
      </a>
      <checkbox />
      <div>List {{number}}</div>
    </div>
    <div v-if="isArrowOpen">
      <item
        v-for="(i, npx) in currentList"
        :key="i"
        :number="npx+1"
        :color="i.color"
        :value="i.num"
        :check="i.checked"
      />
    </div>
  </div>
</template>

<script>
import icon from '../../icons/icon.vue';
import checkbox from '../checkbox/checkbox.vue';
import item from '../item/item.vue';

export default {
  name: 'list',
  props: {
    number: Number,
    currentList: Object,
  },
  components: {
    icon,
    checkbox,
    item,
  },
  data() {
    return {
      isArrowOpen: true,
    };
  },
  methods: {
    arrowClick() {
      this.isArrowOpen = !this.isArrowOpen;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

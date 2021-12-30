<template>
  <div class="list">
    <div class="list__title">
      <a href="#" @click="arrowClick">
        <icon
          name="arrow"
          :class="['arrow ', {'closed': !isArrowOpen}]"
        />
      </a>
      <checkbox
        @listCheckboxChanged="listCheckboxClick"
        :not-full="checkAmountVisibleItems()"
        :active="isAllActive()"
      />
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
        @checkboxChanged="checkboxClick"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import icon from '../../icons/icon.vue';
import checkbox from '../checkbox/checkbox.vue';
import item from '../item/item.vue';

export default {
  name: 'list',
  emits: ['listCheckboxChanged, checkboxChanged'],
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
    ...mapActions({
      changeVisible: 'colors/changeVisible',
      changeListVisible: 'colors/changeListVisible',
    }),
    arrowClick() {
      this.isArrowOpen = !this.isArrowOpen;
    },
    checkboxClick(color) {
      this.changeVisible(color);
    },
    listCheckboxClick() {
      this.changeListVisible(this.currentList);
    },
    checkAmountVisibleItems() {
      return !(this.currentList.every((i) => i.checked) || this.currentList.every((i) => !i.checked));
    },
    isAllActive() {
      return this.currentList.every((i) => i.checked);
    },
  },
  computed: {
    ...mapGetters({
      checkAmount: 'colors/checkAmount',
    }),
  },
  updated() {
    this.checkAmountVisibleItems();
    this.isAllActive();
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

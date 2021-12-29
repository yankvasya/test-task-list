<template>
  <div class="menu">
    <list
      v-for="(l,npx) in listsData"
      :key="l"
      :number="npx+1"
      :current-list="l.items"
    />
  </div>
</template>

<script>
import list from '../list/list.vue';

export default {
  name: 'Menu',
  props: {
    listsData: Object,
  },
  components: {
    list,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

<template>
  <div class="menu">
    <list
      v-for="l in 5"
      :key="l"
      :number="l"
    >
    </list>
  </div>
</template>

<script>
import list from '../list/list.vue';

export default {
  name: 'Menu',
  components: {
    list,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

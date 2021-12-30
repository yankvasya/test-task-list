<template>
  <div class="menu">
    <list
      v-for="(l,npx) in colors"
      :key="l"
      :number="npx+1"
      :current-list="l.items"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import list from '../list/list.vue';

export default {
  name: 'Menu',
  components: {
    list,
  },
  computed: {
    ...mapState({
      colors: (state) => state.colors,
    }),
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

<template>
 <div class="wrapper">
   <Menu
     :lists-data="colors"
   />
   <Display
    :lists-data="colors"
   />
 </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Menu from './components/Menu/Menu.vue';
import Display from './components/Display/Display.vue';
import { createRandomLists } from './random';

export default {
  name: 'App',
  components: {
    Menu,
    Display,
  },
  methods: {
    ...mapActions({
      setDefaultColors: 'colors/setDefaultColors',
    }),
    checkLocalStorage() {
      if (!localStorage.getItem('lists')) {
        const lists = createRandomLists();
        this.setLocalStorage(lists);
      }

      const colors = JSON.parse(localStorage.getItem('lists'));
      this.setDefaultColors(colors);
    },
    setLocalStorage(lists) {
      localStorage.setItem('lists', JSON.stringify(lists));
    },
  },
  computed: {
    ...mapState({
      colors: (state) => state.colors,
    }),
  },
  created() {
    this.checkLocalStorage();
  },
};
</script>

<style lang="scss" src="./styles/global.scss" />

<template>
 <div class="wrapper">
   <Menu />
   <Display />
 </div>
</template>

<script>
import Menu from './components/Menu/Menu.vue';
import Display from './components/Display/Display.vue';
import { createRandomLists } from './random';

export default {
  name: 'App',
  components: {
    Menu,
    Display,
  },
  data() {
    return {
      lists: null,
    };
  },
  methods: {
    checkLocalStorage() {
      if (!localStorage.getItem('lists')) {
        const lists = createRandomLists();
        this.setLocalStorage(lists);
      }

      this.lists = JSON.parse(localStorage.getItem('lists'));
    },
    setLocalStorage(lists) {
      localStorage.setItem('lists', JSON.stringify(lists));
    },
  },
  created() {
    this.checkLocalStorage();

    console.log(this.lists);
  },
};
</script>

<style lang="scss" src="./styles/global.scss" />

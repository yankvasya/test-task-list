<template>
 <div class="wrapper">
   <Menu
     :lists-data="lists"
   />
   <Display
    :lists-data="lists"
   />
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
      lists: [],
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
  },
};
</script>

<style lang="scss" src="./styles/global.scss" />

<template>
 <div class="wrapper">
   <Menu />
   <Display />
 </div>
</template>

<script>
import Menu from './components/Menu/Menu.vue';
import Display from './components/Display/Display.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Display,
  },
};
</script>

<style lang="scss" src="./styles/global.scss" />

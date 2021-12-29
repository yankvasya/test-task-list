<template>
  <div class="display">
    <list-box />
  </div>
</template>

<script>
import listBox from '../listBox/listBox.vue';

export default {
  name: 'Display',
  components: {
    listBox,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

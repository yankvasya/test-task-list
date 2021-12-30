<template>
  <div class="display">
    <list-box/>
  </div>
</template>

<script>
import listBox from '../listBox/listBox.vue';

export default {
  name: 'Display',
  props: {
    listsData: Object,
  },
  components: {
    listBox,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

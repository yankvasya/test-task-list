<template>
  <a href="#" class="color" :style="`background: ${color}`" />
</template>

<script>
export default {
  name: 'Color',
  props: {
    color: String,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

<template>
  <a href="#" class="color" :style="`background: ${color}`" @click="colorClick" />
</template>

<script>
export default {
  name: 'Color',
  props: {
    color: String,
  },
  methods: {
    colorClick() {
      this.$emit('reduceColors');
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

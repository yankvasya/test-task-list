<template>
  <div class="list">
    <div class="list__title">
      <slot name="arrow" />
      <slot name="checkbox" />
      <div>List {{number}}</div>
    </div>
    <slot name="item" />
  </div>
</template>

<script>

export default {
  name: 'list',
  props: {
    number: Number,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

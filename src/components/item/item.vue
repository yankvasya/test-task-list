<template>
  <div class="item">
    <div class="item__element">
      <input type="checkbox" />
      {{number && `Item ${number}`}}
    </div>

    <div class="item__info">
      <input type="number" class="count" placeholder="0" value="1" min="0" max="100" />
      <input type="color" class="color">
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    number: Number,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

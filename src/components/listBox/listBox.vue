<template>
  <div
    class="colors"
    v-for="l in 5"
        :key="l"
  >
    List {{l}}
    <div class="colors__list"
         v-for="a in 5"
         :key="a"
    >
      <color
        v-for="c in 50"
        :key="c"
      />
    </div>
  </div>
</template>

<script>
import color from '../color/color.vue';

export default {
  name: 'listBox',
  components: {
    color,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

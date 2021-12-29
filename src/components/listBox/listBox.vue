<template>
  <div
    class="colors"
    v-for="(l, npx) in listsData"
        :key="l"
  >
    List {{npx+1}}
    <div
      v-for="a in l.items"
      :class="['colors__list',  {'none': !a.num }]"
     :key="a"
    >
      <color
       v-for="c in a.num"
       :key="c"
       :color="a.color"
      />
    </div>
  </div>
</template>

<script>
import color from '../color/color.vue';

export default {
  name: 'listBox',
  props: {
    listsData: Object,
  },
  components: {
    color,
  },
  mounted() {
    console.log(this.listsData);
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

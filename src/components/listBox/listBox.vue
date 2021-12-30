<template>
  <div
    class="colors"
    v-for="(l, npx) in colors"
    :key="l"
  >
    List {{npx+1}}
    <div
      v-for="a in l.items"
      :class="['colors__list',  {'none': (!a.num || !a.checked) }]"
      :key="a"
    >
      <color
       v-for="c in a.num"
       :key="c"
       :color="a.color"
       :is-active="a.checked"
       @reduceColors="reduceColors(a.color)"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import color from '../color/color.vue';

export default {
  name: 'listBox',
  emits: ['reduceColors'],
  components: {
    color,
  },
  methods: {
    ...mapActions({
      changeColorCount: 'colors/changeColorCount',
    }),
    reduceColors(colorValue) {
      const data = { color: colorValue };
      this.changeColorCount(data);
    },
  },
  computed: {
    ...mapState({
      colors: (state) => state.colors,
    }),
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

<template>
  <div class="display">
    <list
      class="colors"
      v-for="l in 5"
      :key="l"
      :number="l"
    >
      <template #item>
        <div class="colors__list"
             v-for="a in 5"
             :key="a"
        >
          <color
            v-for="c in 50"
            :key="c"
          />
        </div>
      </template>
    </list>
  </div>
</template>

<script>
import list from '../list/list.vue';
import color from '../color/color.vue';

export default {
  name: 'Display',
  components: {
    list,
    color,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

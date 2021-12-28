<template>
  <div class="menu">
    <list
      v-for="l in 5"
      :key="l"
      :number="l"
    >
      <template #arrow>
        <icon name="arrow" class="arrow" />
        <checkbox />
      </template>
      <template #item>
        <item
          v-for="i in 4"
          :key="i"
          :number="i"
        />
      </template>
    </list>
  </div>
</template>

<script>
import list from '../list/list.vue';
import item from '../item/item.vue';
import icon from '../../icons/icon.vue';
import checkbox from '../checkbox/checkbox.vue';

export default {
  name: 'Menu',
  components: {
    list,
    item,
    icon,
    checkbox,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

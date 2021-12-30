<template>
  <div :class="['checkbox', {'active': isActive}, {'not-full': isNotFull}]" @click="setCheck" />
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    active: Boolean,
    notFull: Boolean,
  },
  data() {
    return {
      isActive: this.active,
      isNotFull: !this.active && this.notFull,
    };
  },
  methods: {
    setCheck() {
      const info = { active: this.isActive, full: this.isNotFull };
      this.isActive = !this.isActive;
      this.$emit('listCheckboxChanged', info);
    },
  },
  updated() {
    this.isNotFull = this.notFull;
    this.isActive = this.active;
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

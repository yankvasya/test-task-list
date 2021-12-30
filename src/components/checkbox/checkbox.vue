<template>
  <div :class="['checkbox', {'active': isActive}, {'not-full': isNotFull}]" @click="setCheck" />
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    active: Boolean,
    full: Boolean,
  },
  data() {
    return {
      isActive: this.active || false,
      isNotFull: this.full || false,
    };
  },
  methods: {
    setCheck() {
      const info = { active: this.isActive, full: this.isNotFull };
      this.isActive = !this.isActive;
      this.$emit('listCheckboxChanged', info);
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

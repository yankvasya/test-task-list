<template>
  <div :class="['checkbox', {'active': isActive}, {'not-full': notFull}]" @click="setCheck" />
</template>

<script>
export default {
  name: 'checkbox',
  data() {
    return {
      isActive: false,
      notFull: false,
    };
  },
  methods: {
    setCheck() {
      this.isActive = !this.isActive;
    },
    setFullOrNot() {
      this.notFull = !this.notFull;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />

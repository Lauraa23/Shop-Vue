<template>
  <button type="submit" class="standardButton" @click="onClick">
    {{ buttonText }}
  </button>
</template>
<script>
export default {
  props: {
    buttonText: String,
    submit: String,
    standardButton: String,
  },
  methods: {
    onClick() {},
  },
};
</script>
<style lang=""></style>

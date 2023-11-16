<template>
  <button type="submit" class="shopNow" @click="onClick">Shop Now →</button>
</template>
<script>
export default {
  props: {
    submit: String,
    shopNow: String,
  },
  methods: {
    onClick() {},
  },
};
</script>
<style lang="scss" scoped src="./_ShopNow.scss"></style>

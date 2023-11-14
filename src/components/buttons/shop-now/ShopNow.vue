<template>
  <button type="submit" class="shopNow" @click="onClick">
    {{ buttonShop }}
  </button>
</template>
<script>
export default {
  props: {
    buttonShop: String,
    submit: String,
    shopNow: String,
  },
  methods: {
    onClick() {},
  },
};
</script>
<style lang="scss" scoped src="./_ShopNow.scss"></style>

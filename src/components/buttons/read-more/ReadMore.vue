<template>
  <button type="submit" class="readMore" @click="onClick">Read More →</button>
</template>
<script>
export default {
  props: {
    submit: String,
    readMore: String,
  },
  methods: {
    onClick() {},
  },
};
</script>
<style lang="scss" scoped src="./_ReadMore.scss"></style>

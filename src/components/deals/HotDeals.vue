<template>
  <div class="dealsCard">
    <p class="dealsCard__tag">{{ data.tag }}</p>
    <h3 class="dealsCard__title">{{ data.title }}</h3>
    <p class="dealsCard__content">{{ data.content }}</p>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./_HotDeals.scss"></style>

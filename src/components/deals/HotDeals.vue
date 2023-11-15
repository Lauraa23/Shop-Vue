<template>
  <div class="dealsCard">
    <p class="dealsCard__tag">{{ data.tag }}</p>
    <h3 class="dealsCard__title">{{ data.title }}</h3>
    <p class="dealsCard__content">{{ data.content }}</p>
    <ShopNow type="submit" />
  </div>
</template>
<script>
import ShopNow from "../buttons/shop-now/ShopNow.vue";

export default {
  props: {
    data: {
      required: true,
    },
  },
  components: { ShopNow },
};
</script>
<style lang="scss" scoped src="./_HotDeals.scss"></style>

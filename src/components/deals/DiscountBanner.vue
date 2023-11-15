<template>
  <div class="discountCard">
    <div class="discountCard__info">
      <p class="discountCard__info__tag">Summer Sale</p>
      <h3 class="discountCard__info__title">37% off</h3>
      <p class="discountCard__info__resume">
        Free on all your order. Free Shipping and 30 days money-back guarantee
      </p>
      <div class="discountCard__info__button">
        <ShopNow type="submit" style="width: 8.5vw" />
      </div>
    </div>
  </div>
</template>
<script>
import ShopNow from "../buttons/shop-now/ShopNow.vue";

export default { components: { ShopNow } };
</script>
<style lang="scss" scoped src="./_DiscountBanner.scss"></style>

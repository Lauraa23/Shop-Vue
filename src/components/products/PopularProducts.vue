<template>
  <div class="productsCard">
    <img :src="data.image" class="productsCard__img" />
    <h5 class="productsCard__name">{{ data.name }}</h5>
    <h6 class="productsCard__price">{{ data.price }}</h6>
    <h6 class="productsCard__valoration">{{ data.valoration }}</h6>
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
<style lang="scss" scoped src="./_PopularProducts.scss"></style>

<template>
  <div class="productsCard">
    <img class="productsCard__img" src="../../assets/flowers.jpg" />
    <div class="productsCard__description">
      <div class="productsCard__description__left">
        <p class="productsCard__description__left__name">{{ data.name }}</p>
        <p class="productsCard__description__left__price">{{ data.price }}</p>
        <p class="productsCard__description__left__valoration">
          {{ data.valoration }}
        </p>
      </div>
      <div class="productsCard__description__right">
        <button class="productsCard__description__right__button">
          <font-awesome-icon
            class="header__main__views__icons"
            icon="fa-solid fa-bag-shopping"
          />
        </button>
      </div>
    </div>
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

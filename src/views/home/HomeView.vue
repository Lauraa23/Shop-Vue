<template>
  <div class="banners">
    <div class="banners__left">
      <img class="banners__left__item" src="../../assets/suculentas.jpg" />
      <h1 class="banners__left__text">Welcome!</h1>
    </div>
    <div class="banners__right">
      <div class="banners__right__top">
        <img
          class="banners__right__top__item"
          src="../../assets/interior.jpg"
        />
        <p class="banners__right__top__text">Test</p>
      </div>
      <div class="banners__right__bottom">
        <img
          class="banners__right__bottom__item"
          src="../../assets/flowers.jpg"
        />
        <p class="banners__right__bottom__text">Test</p>
      </div>
    </div>
  </div>
  <h1>Categories</h1>
  <div>
    <Categorie
      :data="categorie"
      v-for="categorie in categories"
      :key="categorie.name"
    />
  </div>
  <h1>Products</h1>
  <div>
    <PopularProducts
      :data="product"
      v-for="product in products"
      :key="product.name"
    />
  </div>
</template>
<script>
import Categories from "../../mocks/Categories.js";
import Categorie from "../../components/categorie/Categorie.vue";
import PopularProducts from "../../components/products/PopularProducts.vue";
import Products from "../../mocks/Products.js";

export default {
  components: { Categorie, PopularProducts },
  data() {
    return {
      categories: Categories,
      products: Products,
    };
  },
};
</script>
<style lang="scss" scoped src="./_HomeView.scss"></style>

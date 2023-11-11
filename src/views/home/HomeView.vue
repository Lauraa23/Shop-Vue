<template>
  <div class="homeMain">
    <div class="homeMain__banners">
      <div class="homeMain__banners__left">
        <div class="homeMain__banners__left__image"></div>
        <p class="homeMain__banners__left__text">
          Welcome! With a plant everything is fun
        </p>
      </div>
      <div class="homeMain__banners__right">
        <div class="homeMain__banners__right__top">
          <div class="homeMain__banners__right__top__image"></div>
          <p class="homeMain__banners__right__top__text">Sets & Plots</p>
        </div>
        <div class="homeMain__banners__right__bottom">
          <div class="homeMain__banners__right__bottom__image"></div>
          <p class="homeMain__banners__right__bottom__text">Special Deals</p>
        </div>
      </div>
    </div>
    <div class="head">
      <h1 class="head__name">Popular Categories</h1>
      <a class="head__anchor">View All →</a>
    </div>
    <div class="categories">
      <Categorie
        :data="categorie"
        v-for="categorie in categories"
        :key="categorie.name"
      />
    </div>
    <div class="head">
      <h1 class="head__name">Popular Products</h1>
      <a class="head__anchor">View All →</a>
    </div>
    <div class="popularProducts">
      <PopularProducts
        :data="product"
        v-for="product in products"
        :key="product.name"
      />
    </div>
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

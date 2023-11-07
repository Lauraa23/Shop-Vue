<template>
  <div class="homeMain">
    <div class="homeMain__banners">
      <div class="homeMain__banners__left">
        <img
          class="homeMain__banners__left__item"
          src="../../assets/suculentas.jpg"
        />
        <h1 class="homeMain__banners__left__text">
          Welcome! With a plant, everything is fun
        </h1>
        <StandardButton
          class="homeMain__banners__left__button"
          buttonText="Shop Now →"
          type="submit"
        />
      </div>
      <div class="homeMain__banners__right">
        <div class="homeMain__banners__right__top">
          <img
            class="homeMain__banners__right__top__item"
            src="../../assets/maceta2.jpg"
          />
          <p class="homeMain__banners__right__top__text">Sets & Plots</p>
          <StandardButton
            class="homeMain__banners__right__top__button"
            buttonText="Shop Now →"
            type="submit"
          />
        </div>
        <div class="homeMain__banners__right__bottom">
          <img
            class="homeMain__banners__right__bottom__item"
            src="../../assets/plantbackground.jpg"
          />
          <p class="homeMain__banners__right__bottom__text">Special Products</p>
          <StandardButton
            class="homeMain__banners__right__bottom__button"
            buttonText="Shop Now →"
            type="submit"
          />
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
  </div>
</template>
<script>
import Categories from "../../mocks/Categories.js";
import Categorie from "../../components/categorie/Categorie.vue";
import PopularProducts from "../../components/products/PopularProducts.vue";
import Products from "../../mocks/Products.js";
import StandardButton from "@/components/buttons/Standard-button.vue";

export default {
  components: { Categorie, PopularProducts, StandardButton },
  data() {
    return {
      categories: Categories,
      products: Products,
    };
  },
};
</script>
<style lang="scss" scoped src="./_HomeView.scss"></style>

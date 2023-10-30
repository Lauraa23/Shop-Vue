<template>
  <div class="home">
    <h2 class="home__text">Welcome!</h2>
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

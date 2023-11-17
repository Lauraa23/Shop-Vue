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
          <p class="homeMain__banners__right__top__text">Sets & Pots</p>
        </div>
        <div class="homeMain__banners__right__bottom">
          <div class="homeMain__banners__right__bottom__image"></div>
          <p class="homeMain__banners__right__bottom__text">Accessories</p>
        </div>
      </div>
    </div>
    <div class="categories">
      <div class="categories__head">
        <h1 class="categories__head__name">Popular Categories</h1>
        <a class="categories__head__anchor">View All →</a>
      </div>
      <div class="categories__cards">
        <Categorie
          :data="categorie"
          v-for="categorie in categories"
          :key="categorie.name"
        />
      </div>
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
    <h2 class="hotDeals__title">Hot Deals</h2>
    <div class="hotDeals">
      <HotDeals :data="deal" v-for="deal in deals" :key="deal.name" />
    </div>
    <div class="discountBanner">
      <DiscountBanner />
    </div>
    <div class="blogCards">
      <BlogCards
        :data="blog"
        v-for="(blog, index) in blogs.slice(0, 3)"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import Categories from "../../mocks/Categories.js";
import Categorie from "../../components/categorie/Categorie.vue";
import PopularProducts from "../../components/products/PopularProducts.vue";
import Products from "../../mocks/Products.js";
import HotDeals from "../../components/deals/HotDeals.vue";
import Deals from "../../mocks/Deals.js";
import DiscountBanner from "@/components/deals/DiscountBanner.vue";
import BlogCards from "@/components/cards/BlogCards.vue";
import Blogs from "../../mocks/Blogs.js";

export default {
  components: {
    Categorie,
    PopularProducts,
    HotDeals,
    DiscountBanner,
    BlogCards,
  },
  data() {
    return {
      categories: Categories,
      products: Products,
      deals: Deals,
      blogs: Blogs,
    };
  },
};
</script>
<style lang="scss" scoped src="./_HomeView.scss"></style>

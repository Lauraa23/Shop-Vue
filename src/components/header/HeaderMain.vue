<template>
  <div class="header">
    <div class="header__title">
      <h1 class="header__title__text">
        Plants for You<font-awesome-icon
          class="header__title__text__logo"
          icon="fa-brands fa-pagelines"
        />
      </h1>
    </div>
    <select>
      <option>EUR</option>
      <option>USD</option>
    </select>
    <select>
      <option>SPA</option>
      <option>ENG</option>
    </select>
    <SearchBar />
    <div class="header__views">
      <router-link to="/wishlist">
        <font-awesome-icon
          class="header__views__icons"
          icon="fa-solid fa-heart"
          style="color: #000000"
        ></font-awesome-icon>
      </router-link>
      <router-link to="/shopcart">
        <font-awesome-icon
          class="header__views__icons"
          icon="fa-solid fa-cart-shopping"
          style="color: #000000"
        />
      </router-link>
    </div>
  </div>
  <NavBar />
</template>
<script>
import SearchBar from "../searchbar/SearchBar.vue";
import NavBar from "../navbar/NavBar.vue";
export default {
  name: "HeaderMain",
  components: { SearchBar, NavBar },
};
</script>
<style></style>

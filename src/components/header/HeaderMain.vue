<template>
  <div class="header">
    <div class="header__options">
      <select class="header__options__coins">
        <option>EUR</option>
        <option>USD</option>
      </select>
      <select class="header__options__lang">
        <option>SPA</option>
        <option>ENG</option>
      </select>
      <router-link
        class="header__options__form"
        to="/login"
        style="text-decoration: none"
        >Sign in /</router-link
      >
      <router-link
        class="header__options__form"
        to="/register"
        style="text-decoration: dashed"
        >Sign up</router-link
      >
    </div>
    <div class="header__main">
      <div class="header__main__title">
        <router-link to="/home" style="text-decoration: none">
          <h1 class="header__main__title__text">Plants for You</h1>
        </router-link>
        <font-awesome-icon
          class="header__main__title__logo"
          icon="fa-brands fa-pagelines"
        />
      </div>
      <SearchBar />
      <div class="header__main__views">
        <router-link to="/wishlist">
          <font-awesome-icon
            class="header__main__views__icons"
            icon="fa-solid fa-heart"
          ></font-awesome-icon>
        </router-link>
        <router-link to="/shopcart">
          <font-awesome-icon
            class="header__main__views__icons"
            icon="fa-solid fa-bag-shopping"
          />
        </router-link>
        <router-link to="/profileview">
          <font-awesome-icon
            class="header__main__views__icons"
            icon="fa-solid fa-user"
          />
        </router-link>
      </div>
    </div>
    <NavBar />
  </div>
</template>
<script>
import SearchBar from "../searchbar/SearchBar.vue";
import NavBar from "../navbar/NavBar.vue";
export default {
  name: "HeaderMain",
  components: { SearchBar, NavBar },
};
</script>
<style lang="scss" scoped src="./_HeaderMain.scss"></style>

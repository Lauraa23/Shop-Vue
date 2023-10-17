<template>
  <div class="title">
    <h1>CyberMarket</h1>
  </div>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list__item">Home</li>
      <li class="navbar__list__item">
        <select>
          <option>Shop</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </li>
      <li class="navbar__list__item">Page 3</li>
      <li class="navbar__list__item">Page 4</li>
    </ul>
    <SearchBarVue />
  </nav>
</template>
<script>
import SearchBarVue from "../searchbar/SearchBar.vue";

export default {
  name: "NavBar",
  components: { SearchBarVue },
};
</script>

<style lang="scss" scoped src="./_NavBar.scss"></style>

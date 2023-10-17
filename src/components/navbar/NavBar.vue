<template>
  <div class="title">
    <h1>CyberMarket</h1>
  </div>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list__item">Home</li>
      <li class="navbar__list__item">
        <select>
          <option>Shop-test</option>
          <option>Option</option>
          <option>Option 3</option>
        </select>
      </li>
      <li class="navbar__list__item">Page 3</li>
      <li class="navbar__list__item">Page 4</li>
    </ul>
    <SearchBarVue />
    <IconsBar />
  </nav>
</template>
<script>
import SearchBarVue from "../searchbar/SearchBar.vue";
import IconsBar from "./IconsBar.vue";

export default {
  name: "NavBar",
  components: { SearchBarVue, IconsBar },
};
</script>

<style lang="scss" scoped src="./_NavBar.scss"></style>

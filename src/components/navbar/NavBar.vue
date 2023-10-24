<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list__item">
        <router-link to="/home" style="text-decoration: none; color: inherit"
          >Home</router-link
        >
      </li>
      <li class="navbar__list__item">
        <DropDownMenu />
      </li>
      <li class="navbar__list__item">
        <router-link
          to="/aboutview"
          style="text-decoration: none; color: inherit"
          >About us</router-link
        >
      </li>
      <li class="navbar__list__item">
        <router-link
          to="/contactview"
          style="text-decoration: none; color: inherit"
          >Contact</router-link
        >
      </li>
      <li class="navbar__list__item">
        <router-link
          to="/blogview"
          style="text-decoration: none; color: inherit"
          >Blog</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import DropDownMenu from "./DropDownMenu.vue";

export default {
  name: "NavBar",
  components: { DropDownMenu },
};
</script>

<style lang="scss" scoped src="./_NavBar.scss"></style>

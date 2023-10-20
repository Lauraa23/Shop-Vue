<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__list__item">
        <router-link to="/home" style="text-decoration: none; color: inherit"
          >Home</router-link
        >
      </li>
      <li class="navbar__list__item">
        <select class="navbar__list__item__menu">
          <option style="font-family: inherit">Shop</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </li>
      <li class="navbar__list__item">
        <router-link
          to="/aboutview"
          style="text-decoration: none; color: inherit"
          >About us</router-link
        >
      </li>
      <li class="navbar__list__item">Page 4</li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped src="./_NavBar.scss"></style>

<template>
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
    <standard-button buttonText="text" />
  </nav>
</template>
<script>
import StandardButton from "../buttons/Standard-button.vue";

export default {
  name: "NavBar",
  components: { StandardButton },
};
</script>

<style lang="scss" scoped src="./_NavBar.scss"></style>

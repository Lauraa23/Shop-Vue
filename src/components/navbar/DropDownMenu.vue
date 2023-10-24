<template>
  <div class="dropdown">
    <button @click="toggleMenu" class="dropdown__toggle">
      {{ isOpen ? "Shop▲" : "Shop▼" }}
    </button>
    <ul v-if="isOpen" class="dropdown__list">
      <li class="dropdown__list__options" style="list-style: none">
        <router-link
          to="/productsview1"
          style="text-decoration: none; color: inherit"
          >Plants</router-link
        >
      </li>
      <li class="dropdown__list__options" style="list-style: none">
        <router-link
          to="/productsview2"
          style="text-decoration: none; color: inherit"
          >Plots</router-link
        >
      </li>
      <li class="dropdown__list__options" style="list-style: none">
        <router-link
          to="/productsview3"
          style="text-decoration: none; color: inherit"
          >Sets</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DropDownMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped src="./_DropDownMenu.scss"></style>

<template>
  <div class="dropdown-menu">
    <ul v-if="isOpen" class="dropdown-list">
      <li>
        <router-link
          to="/productsview2"
          style="text-decoration: none; color: inherit"
          >Plots</router-link
        >
      </li>
      <li>
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
<style lang=""></style>

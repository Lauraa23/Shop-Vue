<template>
  <div class="search">
    <font-awesome-icon
      class="search__item"
      icon="fa-solid fa-magnifying-glass"
    />
    <input
      class="search__bar"
      type="text"
      v-model="searchQuery"
      placeholder="Search..."
    />
    <StandardButton class="search__button" buttonText="Search" type="submit" />
  </div>
</template>
<script>
import StandardButton from "../buttons/Standard-button.vue";

export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    performSearch() {
      this.$emit("search", this.searchQuery);
    },
  },
  components: { StandardButton },
};
</script>
<style lang="scss" scoped src="./_SearchBar.scss"></style>

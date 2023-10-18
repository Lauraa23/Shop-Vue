<template>
  <div class="search">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <input
      class="search__bar"
      type="text"
      v-model="searchQuery"
      placeholder="Search..."
    />
  </div>
</template>
<script>
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
};
</script>
<style lang="scss" scoped src="./_SearchBar.scss"></style>

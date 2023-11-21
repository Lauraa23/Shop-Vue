<template>
  <ul>
    <li v-for="category in uniqueCategories" :key="category">{{ category }}</li>
  </ul>
</template>
<script>
export default {
  props: {
    blogs: Array,
  },
  computed: {
    uniqueCategories() {
      const allCategories = this.blogs.reduce((categories, blog) => {
        const blogCategories = blog.categories
          .split(",")
          .map((category) => category.trim());
        return categories.concat(blogCategories);
      }, []);
      return Array.from(new Set(allCategories));
    },
  },
};
</script>
<style lang="css">
li {
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-size: 0.8vw;
  font-style: normal;
}
</style>

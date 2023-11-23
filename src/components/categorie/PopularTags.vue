<template>
  <button class="tags" v-for="tag in uniqueTags" :key="tag">{{ tag }}</button>
</template>
<script>
import blogs from "@/mocks/Blogs";
export default {
  data() {
    return {
      blogs: blogs,
    };
  },
  computed: {
    uniqueTags() {
      const allTags = this.blogs.reduce(
        (tags, blog) => [...tags, ...blog.tags],
        []
      );
      const uniqueTags = [...new Set(allTags)];
      return uniqueTags;
    },
  },
};
</script>
<style lang="css">
.tags {
  border: none;
  border-radius: 30px;
  padding: 6px 16px;
  background: var(--gray-scale-gray-50, #f2f2f2);
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: #1a1a1a;
  cursor: pointer;
}
.tags:hover {
  background: var(--branding-success, #00b207);
  color: #f2f2f2;
}
</style>

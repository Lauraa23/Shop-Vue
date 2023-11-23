<template>
  <div>
    <h1>Single Blog</h1>
    <p>{{ blog.type }}</p>
    <p>{{ blog.resume }}</p>
  </div>
</template>

<script>
import Blogs from "@/mocks/Blogs";

export default {
  data() {
    return {
      blogs: Blogs,
    };
  },
  computed: {
    blog() {
      const blogId = this.$route.params.id;
      return this.blogs.find((blog) => blog.id === blogId) || {};
    },
  },
};
</script>

<style lang=""></style>

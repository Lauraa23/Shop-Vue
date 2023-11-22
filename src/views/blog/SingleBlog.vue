<template>
  <div>
    <h1>Single Blog</h1>
  </div>
</template>

<script>
export default {
  props: {
    blogs: Array,
  },
  computed: {
    blog() {
      const blogId = this.$route.params.id;
      console.log("Blog ID:", blogId);
      return blogId;
    },
  },
};
</script>

<style lang=""></style>

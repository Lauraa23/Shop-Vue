<template>
  <div class="blogMain">
    <div class="blogMain__center">
      <BlogCards :data="blog" v-for="blog in blogs" :key="blog.name" />
    </div>
    <div class="blogMain__left">
      <div class="blogMain__left__categories">
        <h3>Top Categories</h3>
        <TopCategories :blogs="blogs" />
      </div>
      <div class="blogMain__left__tags">
        <h3>Popular Tags</h3>
      </div>
    </div>
  </div>
</template>
<script>
import BlogCards from "@/components/cards/BlogCards.vue";
import TopCategories from "@/components/categorie/TopCategories.vue";
import Blogs from "@/mocks/Blogs";

export default {
  components: { BlogCards, TopCategories },
  data() {
    return {
      blogs: Blogs,
    };
  },
};
</script>
<style lang=""></style>

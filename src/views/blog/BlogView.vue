<template>
  <div class="blogMain">
    <div class="blogMain__center">
      <BlogCards :data="blog" v-for="blog in blogs" :key="blog.name" />
    </div>
    <div class="blogMain__left">
      <hr />
      <div class="blogMain__left__categories">
        <h3>Top Categories</h3>
        <TopCategories :blogs="blogs" />
      </div>
      <div class="blogMain__left__tags">
        <h3>Popular Tags</h3>
        <PopularTags :blogs="blogs" />
      </div>
    </div>
  </div>
</template>
<script>
import BlogCards from "@/components/cards/BlogCards.vue";
import PopularTags from "@/components/categorie/PopularTags.vue";
import TopCategories from "@/components/categorie/TopCategories.vue";
import Blogs from "@/mocks/Blogs";

export default {
  components: { BlogCards, TopCategories, PopularTags },
  data() {
    return {
      blogs: Blogs,
    };
  },
};
</script>
<style lang="scss" scoped src="./_BlogView.scss"></style>

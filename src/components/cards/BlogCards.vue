<template>
  <div class="blogCard">
    <img class="blogCard__img" src="../../assets/apples.jpg" />
    <p class="blogCard__date">{{ data.date }}</p>
    <div class="blogCard__description">
      <div class="blogCard__description__tags">
        <p class="blogCard__description__tags__text">
          <font-awesome-icon
            class="blogCard__description__tags__text__icon"
            icon="fa-solid fa-tag"
          />{{ data.type }}
        </p>
        <p class="blogCard__description__tags__text">
          <font-awesome-icon
            class="blogCard__description__tags__text__icon"
            icon="fa-solid fa-user"
          />{{ data.by }}
        </p>
      </div>
      <p class="blogCard__description__resume">{{ data.resume }}</p>
      <router-link
        :to="{ name: 'single-blog', params: { id: data.id } }"
        @click="handleReadMoreClick"
      >
        <ReadMore type="submit" />
      </router-link>
    </div>
  </div>
</template>
<script>
import ReadMore from "../buttons/read-more/ReadMore.vue";
export default {
  props: {
    data: {
      required: true,
    },
  },
  components: { ReadMore },
  methods: {
    handleReadMoreClick() {
      console.log("Clicked Read More. ID:", this.data.id);
    },
  },
};
</script>
<style lang="scss" scoped src="./_BlogCards.scss"></style>

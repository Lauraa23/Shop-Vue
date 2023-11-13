<template>
  <div class="dealsCard">
    <img class="dealsCard__img" src="../../assets/plantbackground.jpg" />
    <div class="dealsCard__description">
      <p class="dealsCard__description__tag">{{ data.tag }}</p>
      <h3 class="dealsCard__description__title">{{ data.title }}</h3>
      <p class="dealsCard__description__content">{{ data.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./_HotDeals.scss"></style>

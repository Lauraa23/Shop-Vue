<template>
  <div class="categorieCard">
    <img class="categorieCard__img" />
    <h5 class="categorieCard__name">{{ data.name }}</h5>
  </div>
</template>
<script>
export default {
  name: "Categorie-item",
  props: {
    data: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./_Categorie.scss"></style>

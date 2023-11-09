<template>
  <div class="categorieCard">
    <img src="../../assets/pimiento.jpg" class="categorieCard__img" />
    <p class="categorieCard__name">{{ data.name }}</p>
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

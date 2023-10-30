<template>
  <div class="categorieCard">
    <img :src="data.image" class="categorieCard__img" />
    <h5 class="categorieCard__name">{{ data.name }}</h5>
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
<style lang="scss" scoped src="./_Categorie.scss">
.categorieCard {
  width: 300px;
  height: 300px;
  background-color: red;
}
</style>

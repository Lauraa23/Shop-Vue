<template>
  <div class="card">
    <div class="card__photo">
      <img
        class="card__photo__image"
        src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
      />
    </div>
    <div class="card__description">
      <h1 class="card__description__name">Popular House Plant</h1>
      <h2 class="card__description__price">18€</h2>
      <p class="card__description__text">
        Spathiphyllum floor plant arranged in a bamboo planter with a blue & red
        ribbom and butterfly pick.
      </p>
      <button class="card__description__button">Add to Cart</button>
      <button class="card__description__button">
        <font-awesome-icon
          class="header__main__views__icons"
          icon="fa-solid fa-heart"
        ></font-awesome-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped src="./_InformationCards.scss"></style>

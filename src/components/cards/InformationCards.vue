<template>
  <div class="cardsContainer">
    <div class="cardsContainer__card">
      <div class="cardsContainer__card__image">
        <img src="../../assets/maceta.webp" />
      </div>
      <div class="cardsContainer__card__buttons">
        <button>Añadir al carrito</button>
        <font-awesome-icon
          class="header__main__views__icons"
          icon="fa-solid fa-heart"
        ></font-awesome-icon>
      </div>
      <div class="cardsContainer__card__text">
        <h2>Product Name</h2>
      </div>
      <div class="cardsContainer__card__stats">
        <div class="cardsContainer__card__stats__price">9,99€</div>
        <div class="cardsContainer__card__stats__value">8/10</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped src="./_InformationCards.scss"></style>

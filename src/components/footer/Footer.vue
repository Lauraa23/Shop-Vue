<template>
  <footer class="content">
    <div class="content__top">
      <span class="content__top__name">Plants for You</span>
      <font-awesome-icon
        class="content__top__icon"
        icon="fa-brands fa-pagelines"
      />
    </div>
    <div class="content__link-boxes">
      <ul class="content__link-boxes__box">
        <li class="content__link-boxes__box__link-name">My Account</li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">My Account</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Order History</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Shopping Cart</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Wishlist</a>
        </li>
      </ul>
      <ul class="content__link-boxes__box">
        <li class="content__link-boxes__box__link-name">Services</li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Contact</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Faqs</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#"
            >Terms & Conditions</a
          >
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#"
            >Privacy Policy</a
          >
        </li>
      </ul>
      <ul class="content__link-boxes__box">
        <li class="content__link-boxes__box__link-name">Proxy</li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">About</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Shop</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Product</a>
        </li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Track Order</a>
        </li>
      </ul>
      <ul class="content__link-boxes__box">
        <li class="content__link-boxes__box__link-name">Categories</li>
        <li><a class="content__link-boxes__box__anchor" href="#">Plants</a></li>
        <li><a class="content__link-boxes__box__anchor" href="#">Plots</a></li>
        <li><a class="content__link-boxes__box__anchor" href="#">Sets</a></li>
        <li>
          <a class="content__link-boxes__box__anchor" href="#">Accesories</a>
        </li>
      </ul>
      <ul class="content__link-boxes__input">
        <li class="content__link-boxes__input__link-name">Subscribe to News</li>
        <li>
          <input
            class="content__link-boxes__input__mail"
            type="text"
            placeholder="Enter your email"
          />
        </li>
        <li>
          <input
            class="content__link-boxes__input__button"
            type="button"
            value="Subscribe"
          />
        </li>
      </ul>
    </div>
    <div class="content__bottom">
      <a class="content__bottom__left" href="#">Plants for You</a>
      <div class="content__bottom__right">
        <a class="content__bottom__right__link" href="#">Privacy Policy|</a>
        <a class="content__bottom__right__link" href="#">Terms & Conditions</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterResponsive",
};
</script>
<style lang="scss" scoped src="./_FooterStyle.scss"></style>

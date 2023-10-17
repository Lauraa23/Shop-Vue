<template>
  <div class="authMain">
    <h2 class="authMain__title">Sign Up</h2>
    <form name="register-form" class="authMain__form">
      <label class="authMain__form__label" for="username"></label>
      <input
        class="authMain__form__input"
        id="username"
        type="text"
        placeholder="Username"
      />
      <label class="authMain__form__label" for="password"></label>
      <input
        class="authMain__form__input"
        type="password"
        id="password"
        placeholder="Password"
      />
      <label class="authMain__form__label" for="password-confirmation"></label>
      <input
        class="authMain__form__input"
        type="password-confirmation"
        id="password-confirmation"
        placeholder="Repeat Password"
      />
      <div class="authMain__form__buttons">
        <button class="authMain__form__buttons__button" type="submit">
          Sign Up
        </button>
        <button class="authMain__form__buttons__button" type="reset">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "RegisterForm",
};
</script>
<style lang="scss" scoped src="./_FormsStyle.scss"></style>

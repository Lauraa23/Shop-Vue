<template>
  <div class="authMain">
    <h2 class="authMain__title">Sign In</h2>
    <form name="login-form" class="authMain__form">
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
      <div class="authMain__form__buttons">
        <button class="authMain__form__buttons__button" type="submit">
          Sign In
        </button>
        <button class="authMain__form__buttons__button" type="reset">
          Reset
        </button>
        <button class="authMain__form__buttons__button">Sign Out</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
};
</script>
<style lang="scss" scoped src="./_FormsStyle.scss"></style>

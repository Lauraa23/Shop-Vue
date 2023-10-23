<template>
  <div class="authMain">
    <h2 class="authMain__title">Sign In</h2>
    <form name="login-form" class="authMain__form">
      <label class="authMain__form__label" for="username"></label>
      <input
        class="authMain__form__input"
        id="username"
        type="text"
        v-model="input.username"
        placeholder="Username"
      />
      <label class="authMain__form__label" for="password"></label>
      <input
        class="authMain__form__input"
        type="password"
        id="password"
        v-model="input.password"
        placeholder="Password"
      />
      <div class="authMain__form__buttons">
        <button class="authMain__form__buttons__button" type="submit">
          Sign In
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
  name: "LoginForm",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (
        localStorage.getItem("username") === this.input.username &&
        localStorage.getItem("password") === this.input.password
      ) {
        localStorage.setItem("active", "true");
        console.log("Login ok");
      } else {
        console.log("Login ko");
      }
    },
    resetForm() {
      this.input.username = "";
      this.input.password = "";
    },
  },
};
</script>
<style lang="scss" scoped src="./_FormsStyle.scss"></style>

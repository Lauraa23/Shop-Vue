<template>
  <div class="authMain">
    <h2 class="authMain__title">Sign Up</h2>
    <form name="register-form" class="authMain__form">
      <label class="authMain__form__label" for="username"></label>
      <input
        class="authMain__form__input"
        id="username"
        type="text"
        v-model="input.username"
        placeholder="Username*"
      />
      <label class="authMain__form__label" for="password"></label>
      <input
        class="authMain__form__input"
        type="password"
        id="password"
        v-model="input.password"
        placeholder="Password*"
      />
      <label class="authMain__form__label" for="password-confirmation"></label>
      <input
        class="authMain__form__input"
        type="password-confirmation"
        id="password-confirmation"
        v-model="input.passwordConfirmation"
        placeholder="Repeat Password*"
      />
      <div class="authMain__form__buttons">
        <button
          class="authMain__form__buttons__button"
          v-on:click.prevent="signup"
          type="submit"
        >
          Sign Up
        </button>
        <button
          class="authMain__form__buttons__button"
          v-on:click.prevent="resetForm"
          type="reset"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      input: {
        username: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {
    signup() {
      if (this.input.password === this.input.passwordConfirmation) {
        localStorage.setItem("username", this.input.username);
        localStorage.setItem("password", this.input.password);
        console.log("Register ok");
      } else {
        console.log("Register ko");
      }
    },
    resetForm() {
      this.input.username = "";
      this.input.password = "";
      (this.input.passwordConfirmation = ""),
        localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("passwordConfirmation");
    },
  },
};
</script>
<style lang="scss" scoped src="./_FormsStyle.scss"></style>

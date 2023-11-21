<template>
  <div class="authMain">
    <h2 class="authMain__title">Sign Up</h2>
    <form name="register-form" class="authMain__form">
      <label class="authMain__form__label" for="email"></label>
      <input
        class="authMain__form__input"
        id="email"
        type="email"
        v-model="input.email"
        placeholder="Enter your email*"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
        required
      />
      <label class="authMain__form__label" for="password"></label>
      <input
        class="authMain__form__input"
        type="password"
        id="password"
        v-model="input.password"
        placeholder="Password*"
        pattern=".{6,}"
        required
      />
      <label class="authMain__form__label" for="password-confirmation"></label>
      <input
        class="authMain__form__input"
        type="password"
        id="password-confirmation"
        v-model="input.passwordConfirmation"
        placeholder="Repeat Password*"
        pattern=".{6,}"
        required
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
        email: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },
  methods: {
    signup() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.input.email)) {
        alert("Invalid email format!");
        return;
      }
      if (this.input.password !== this.input.passwordConfirmation) {
        alert("Passwords do not match!");
        return;
      }

      if (this.input.password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
      }
    },

    resetForm() {
      this.input.email = "";
      this.input.password = "";
      this.input.passwordConfirmation = "";
    },
  },
};
</script>
<style lang="scss" scoped src="./_FormsStyle.scss"></style>

<template>
  <div class="authMain">
    <h2 class="authMain__title">Sign In</h2>
    <form name="login-form" class="authMain__form">
      <label class="authMain__form__label" for="email"></label>
      <input
        class="authMain__form__input"
        id="email"
        type="text"
        v-model="input.email"
        placeholder="Email"
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
        <button
          class="authMain__form__buttons__button"
          type="submit"
          v-on:click.prevent="loginIn"
        >
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
import { loginUser } from "@/services/http/user/Login";
export default {
  name: "LoginForm",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginIn() {
      try {
        const response = await loginUser(this.input.email, this.input.password);
        console.log(response);
      } catch (error) {
        console.error("Error login user:", error);
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

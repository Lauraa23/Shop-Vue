<template>
  <router-view />
  <nav-bar />
</template>
<script>
import NavBar from "./components/navbar/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>
<style lang="scss"></style>

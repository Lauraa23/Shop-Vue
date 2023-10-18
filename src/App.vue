<template>
  <HeaderMain />
  <home-view />
  <router-view />
</template>
<script>
import HomeView from "./views/home/HomeView.vue";
import HeaderMain from "./components/header/HeaderMain.vue";

export default {
  name: "App",
  components: { HomeView, HeaderMain },
};
</script>
<style lang="scss"></style>

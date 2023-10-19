<template>
  <HeaderMain />
  <router-view />
</template>
<script>
import HeaderMain from "./components/header/HeaderMain.vue";

export default {
  name: "App",
  components: { HeaderMain },
};
</script>
<style lang="scss"></style>

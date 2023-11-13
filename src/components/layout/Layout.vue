<template>
  <HeaderMain />
  <RouterView />
  <Footer></Footer>
</template>
<script>
import HeaderMain from "../header/HeaderMain.vue";
import Footer from "../footer/Footer.vue";

export default {
  name: "Layout-vue",
  components: { HeaderMain, Footer },
};
</script>
<style></style>

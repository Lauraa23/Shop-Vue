const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: "http://localhost:8080",
  },
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/_Variables.scss";',
        implementation: require("sass"),
      },
    },
  },
});

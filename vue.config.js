const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/assets/scss/vars/_colors.scss';
          @import '@/assets/scss/_functions.scss';
          @import '@/assets/scss/_mixins.scss';
        `,
      },
    },
  },
  pwa: {
    meta: {
      title: "Sdui Task",
      author: "Olusola",
    },
    manifest: {
      name: "Sdui Task FrontEnd Developer Test",
      short_name: "Sdui Task",
      lang: "en",
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
});

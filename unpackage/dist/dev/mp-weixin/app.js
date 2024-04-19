"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_user = require("./store/user.js");
require("./api/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/toplist/toplist.js";
  "./pages/search/search.js";
  "./pages/songlist/songlist.js";
  "./pages/player/player.js";
  "./pages/mine/mine.js";
  "./pages/podcast/podcast.js";
  "./pages/community/community.js";
  "./pages/recommend/recommend.js";
  "./pages/personalfm/personalfm.js";
  "./pages/login/login.js";
}
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const userStore = store_user.useUserStore();
    common_vendor.onLaunch(() => {
      userStore.getProfile();
    });
    return () => {
    };
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;

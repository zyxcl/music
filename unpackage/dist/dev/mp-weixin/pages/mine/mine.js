"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
require("../../api/index.js");
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const userStore = store_user.useUserStore();
    return (_ctx, _cache) => {
      var _a;
      return {
        a: (_a = common_vendor.unref(userStore).profile) == null ? void 0 : _a.backgroundUrl
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);

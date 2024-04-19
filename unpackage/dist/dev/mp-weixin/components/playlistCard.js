"use strict";
const common_vendor = require("../common/vendor.js");
const store_music = require("../store/music.js");
require("../api/index.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_section2 + _easycom_uni_popup2)();
}
const _easycom_uni_list_item = () => "../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_section = () => "../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_popup = () => "../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_section + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "playlistCard",
  props: ["visible"],
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const musicStore = store_music.useMusicStore();
    const popup = common_vendor.ref(null);
    common_vendor.watchEffect(() => {
      var _a, _b;
      if (props.visible) {
        (_a = popup.value) == null ? void 0 : _a.open();
      } else {
        (_b = popup.value) == null ? void 0 : _b.close();
      }
    });
    const change = (e) => {
      if (!e.show) {
        emits("update:visible", false);
      }
    };
    const formatAr = (ar) => {
      return ar.map((v) => v.name).join("/");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(musicStore).playlist, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.unref(musicStore).currentIndex === index
          }, common_vendor.unref(musicStore).currentIndex === index ? {} : {}, {
            b: item.id,
            c: common_vendor.o(($event) => common_vendor.unref(musicStore).changeMusic(index), item.id),
            d: "88947759-3-" + i0 + ",88947759-2",
            e: common_vendor.p({
              title: item.name,
              note: formatAr(item.ar),
              showArrow: true,
              thumb: item.al.picUrl,
              ["thumb-size"]: "base",
              clickable: true
            })
          });
        }),
        b: common_vendor.p({
          title: "播放列表",
          type: "line"
        }),
        c: common_vendor.sr(popup, "88947759-0", {
          "k": "popup"
        }),
        d: common_vendor.o(change),
        e: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-88947759"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/components/playlistCard.vue"]]);
wx.createComponent(Component);

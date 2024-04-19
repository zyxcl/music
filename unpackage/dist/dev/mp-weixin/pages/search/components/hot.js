"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_index = require("../../../api/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_icons2 + _easycom_uni_tag2 + _easycom_uni_section2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_tag + _easycom_uni_section)();
}
const _sfc_main = {
  __name: "hot",
  props: ["historyList"],
  emits: ["clearHistory", "startSearch"],
  setup(__props, { emit: emits }) {
    const hotList = common_vendor.ref([]);
    api_index.searchHotApi().then((res) => {
      hotList.value = res.data;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.historyList.length > 0
      }, __props.historyList.length > 0 ? {
        b: common_vendor.o(($event) => _ctx.$emit("clearHistory")),
        c: common_vendor.p({
          type: "trash",
          size: "20"
        }),
        d: common_vendor.f(__props.historyList, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(($event) => _ctx.$emit("startSearch", item), item),
            c: "5cc7049c-2-" + i0 + ",5cc7049c-0",
            d: common_vendor.p({
              circle: true,
              text: item,
              type: "primary",
              size: "small"
            })
          };
        }),
        e: common_vendor.p({
          title: "搜索历史",
          type: "line",
          padding: true
        })
      } : {}, {
        f: common_vendor.f(hotList.value, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(index + 1),
            b: common_vendor.n({
              red: index < 3
            }),
            c: common_vendor.t(item.searchWord),
            d: item.iconUrl
          }, item.iconUrl ? {
            e: item.iconUrl
          } : {}, {
            f: item.searchWord,
            g: common_vendor.o(($event) => _ctx.$emit("startSearch", item.searchWord), item.searchWord)
          });
        }),
        g: common_vendor.p({
          title: "热门搜索",
          type: "line",
          padding: true
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/search/components/hot.vue"]]);
wx.createComponent(Component);

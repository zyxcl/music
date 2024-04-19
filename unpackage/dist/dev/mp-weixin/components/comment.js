"use strict";
const common_vendor = require("../common/vendor.js");
const store_music = require("../store/music.js");
const api_index = require("../api/index.js");
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
  __name: "comment",
  props: ["visible", "type", "id"],
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    store_music.useMusicStore();
    const popup = common_vendor.ref(null);
    const hotComments = common_vendor.ref([]);
    const comments = common_vendor.ref([]);
    common_vendor.watchEffect(async () => {
      var _a, _b;
      if (props.visible) {
        (_a = popup.value) == null ? void 0 : _a.open();
        console.log("获取评论");
        const res = await api_index.commentApi(props.type, props.id);
        console.log(res);
        comments.value = res.comments;
        hotComments.value = res.hotComments;
      } else {
        (_b = popup.value) == null ? void 0 : _b.close();
      }
    });
    const change = (e) => {
      if (!e.show) {
        emits("update:visible", false);
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: hotComments.value.length > 0
      }, hotComments.value.length > 0 ? {
        b: common_vendor.f(hotComments.value, (item, index, i0) => {
          return {
            a: item.commentId,
            b: "18bffc6f-3-" + i0 + ",18bffc6f-2",
            c: common_vendor.p({
              title: item.user.nickname,
              note: item.content,
              showArrow: true,
              thumb: item.user.avatarUrl,
              ["thumb-size"]: "base",
              clickable: true
            })
          };
        }),
        c: common_vendor.p({
          title: "热门评论",
          type: "line"
        })
      } : {}, {
        d: common_vendor.f(comments.value, (item, index, i0) => {
          return {
            a: item.commentId,
            b: "18bffc6f-6-" + i0 + ",18bffc6f-5",
            c: common_vendor.p({
              title: item.user.nickname,
              note: item.content,
              showArrow: true,
              thumb: item.user.avatarUrl,
              ["thumb-size"]: "base",
              clickable: true
            })
          };
        }),
        e: common_vendor.p({
          title: "最新评论",
          type: "line"
        }),
        f: common_vendor.sr(popup, "18bffc6f-0", {
          "k": "popup"
        }),
        g: common_vendor.o(change),
        h: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18bffc6f"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/components/comment.vue"]]);
wx.createComponent(Component);

"use strict";
const common_vendor = require("../common/vendor.js");
const store_music = require("../store/music.js");
require("../api/index.js");
if (!Array) {
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_chat2 + _easycom_uni_list2)();
}
const _easycom_uni_list_chat = () => "../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
const _easycom_uni_list = () => "../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_chat + _easycom_uni_list + PlaylistCard)();
}
const PlaylistCard = () => "./playlistCard.js";
const _sfc_main = {
  __name: "playerBar",
  props: ["padding"],
  setup(__props) {
    const musicStore = store_music.useMusicStore();
    const visible = common_vendor.ref(false);
    const goPlayer = () => {
      common_vendor.index.navigateTo({
        url: "/pages/player/player"
      });
    };
    return (_ctx, _cache) => {
      var _a;
      return common_vendor.e({
        a: common_vendor.unref(musicStore).curSongDetail.name
      }, common_vendor.unref(musicStore).curSongDetail.name ? {
        b: common_vendor.o(($event) => common_vendor.unref(musicStore).play()),
        c: common_vendor.o(($event) => visible.value = true),
        d: common_vendor.o(goPlayer),
        e: common_vendor.p({
          title: common_vendor.unref(musicStore).curSongDetail.name,
          avatar: (_a = common_vendor.unref(musicStore).curSongDetail.al) == null ? void 0 : _a.picUrl,
          note: common_vendor.unref(musicStore).curSongDetail.arStr,
          clickable: true
        }),
        f: common_vendor.p({
          border: true
        }),
        g: common_vendor.n({
          padding: __props.padding
        })
      } : {}, {
        h: common_vendor.o(($event) => visible.value = $event),
        i: common_vendor.p({
          visible: visible.value
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5247c6cd"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/components/playerBar.vue"]]);
wx.createComponent(Component);

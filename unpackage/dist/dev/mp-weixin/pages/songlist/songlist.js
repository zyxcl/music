"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
const store_music = require("../../store/music.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + PlayBar + Comment)();
}
const PlayBar = () => "../../components/playerBar.js";
const Comment = () => "../../components/comment.js";
const _sfc_main = {
  __name: "songlist",
  setup(__props) {
    const musicStore = store_music.useMusicStore();
    const playlist = common_vendor.ref({});
    const showComment = common_vendor.ref(false);
    const id = common_vendor.ref("");
    const getDetail = async (id2) => {
      const res = await api_index.playlistDetailApi(id2);
      playlist.value = res.playlist;
    };
    common_vendor.onLoad((options) => {
      id.value = options.id;
      getDetail(options.id);
    });
    const goPlayer = (item) => {
      musicStore.addSong(item);
      common_vendor.index.navigateTo({
        url: `/pages/player/player`
      });
    };
    const playAll = () => {
      const ids = playlist.value.trackIds.map((v) => v.id);
      musicStore.playAllSongs(ids);
      common_vendor.index.navigateTo({
        url: `/pages/player/player`
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: playlist.value.coverImgUrl,
        b: common_vendor.t(playlist.value.name),
        c: (_a = playlist.value.creator) == null ? void 0 : _a.avatarUrl,
        d: common_vendor.t((_b = playlist.value.creator) == null ? void 0 : _b.nickname),
        e: common_vendor.t(playlist.value.description),
        f: common_vendor.p({
          type: "redo-filled",
          size: "20",
          color: "#ffffff"
        }),
        g: common_vendor.t(playlist.value.shareCount),
        h: common_vendor.p({
          type: "chat-filled",
          size: "20",
          color: "#ffffff"
        }),
        i: common_vendor.t(playlist.value.commentCount),
        j: common_vendor.o(($event) => showComment.value = true),
        k: common_vendor.p({
          type: "folder-add-filled",
          size: "20",
          color: "#ffffff"
        }),
        l: common_vendor.t(playlist.value.subscribedCount),
        m: common_vendor.o(playAll),
        n: common_vendor.f(playlist.value.tracks, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.name),
            c: item.id,
            d: common_vendor.o(($event) => goPlayer(item), item.id)
          };
        }),
        o: id.value,
        p: common_vendor.o(($event) => showComment.value = $event),
        q: common_vendor.p({
          type: "playlist",
          id: id.value,
          visible: showComment.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c5f28ce6"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/songlist/songlist.vue"]]);
wx.createPage(MiniProgramPage);

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
  (_easycom_uni_icons + Comment + PlaylistCard)();
}
const PlaylistCard = () => "../../components/playlistCard.js";
const Comment = () => "../../components/comment.js";
const _sfc_main = {
  __name: "player",
  setup(__props) {
    const musicStore = store_music.useMusicStore();
    const showCard = common_vendor.ref(false);
    const showComment = common_vendor.ref(false);
    const songLyric = common_vendor.ref([]);
    const showLyric = common_vendor.ref(false);
    const lyricActiveIndex = common_vendor.ref(0);
    common_vendor.watch(() => musicStore.currentTime, () => {
      songLyric.value.forEach((item, index) => {
        if (musicStore.currentTime >= item[0] && musicStore.currentTime < songLyric.value[index + 1][0]) {
          lyricActiveIndex.value = index;
        }
      });
    });
    const getLyric = async () => {
      const res = await api_index.lyricApi(musicStore.curSongDetail.id);
      const lyric = res.lrc.lyric.split(/\n/).map((item) => {
        let [time, text] = item.split("]");
        let [m, s] = time.slice(1).split(":");
        time = m * 60 + s * 1;
        return [time, text];
      });
      songLyric.value = lyric;
    };
    common_vendor.watch(
      () => musicStore.curSongDetail,
      () => {
        var _a;
        if (musicStore.curSongDetail.id) {
          getLyric();
          common_vendor.index.setNavigationBarTitle({
            title: musicStore.curSongDetail.name + " - " + ((_a = musicStore.curSongDetail.ar) == null ? void 0 : _a.map((v) => v.name).join("/"))
          });
        }
      },
      {
        immediate: true
      }
    );
    const playBtnSrc = common_vendor.computed(() => {
      return musicStore.isPlay ? "../../static/icon/zanting.png" : "../../static/icon/bofang.png";
    });
    const addZero = (n) => n >= 10 ? n : "0" + n;
    const formatTime = (time) => {
      const m = Math.floor(time / 60);
      const s = addZero(parseInt(time % 60));
      return `${m}:${s}`;
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: `url(${(_a = common_vendor.unref(musicStore).curSongDetail.al) == null ? void 0 : _a.picUrl})`,
        b: showLyric.value
      }, showLyric.value ? {
        c: common_vendor.f(songLyric.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item[1]),
            b: index,
            c: common_vendor.n({
              active: lyricActiveIndex.value === index
            })
          };
        }),
        d: lyricActiveIndex.value * 30
      } : {
        e: (_b = common_vendor.unref(musicStore).curSongDetail.al) == null ? void 0 : _b.picUrl
      }, {
        f: common_vendor.o(($event) => showLyric.value = !showLyric.value),
        g: common_vendor.p({
          type: "heart",
          size: "40",
          color: "#ffffff"
        }),
        h: common_vendor.o(($event) => showComment.value = true),
        i: common_vendor.p({
          type: "chat",
          size: "40",
          color: "#ffffff"
        }),
        j: common_vendor.t(formatTime(common_vendor.unref(musicStore).currentTime)),
        k: common_vendor.unref(musicStore).currentTime / common_vendor.unref(musicStore).duration * 100,
        l: common_vendor.o((e) => common_vendor.unref(musicStore).changeCurrent(e.detail.value)),
        m: common_vendor.t(formatTime(common_vendor.unref(musicStore).duration)),
        n: common_vendor.unref(musicStore).isRandom
      }, common_vendor.unref(musicStore).isRandom ? {
        o: common_vendor.o(($event) => common_vendor.unref(musicStore).isRandom = false)
      } : {
        p: common_vendor.o(($event) => common_vendor.unref(musicStore).isRandom = true),
        q: common_vendor.p({
          type: "loop",
          color: "#ffffff"
        })
      }, {
        r: common_vendor.o(($event) => common_vendor.unref(musicStore).changeMusic(common_vendor.unref(musicStore).currentIndex - 1)),
        s: common_vendor.p({
          type: "arrow-left",
          color: "#ffffff"
        }),
        t: common_vendor.unref(playBtnSrc),
        v: common_vendor.o(($event) => common_vendor.unref(musicStore).play()),
        w: common_vendor.o(($event) => common_vendor.unref(musicStore).changeMusic(common_vendor.unref(musicStore).currentIndex + 1)),
        x: common_vendor.p({
          type: "arrow-right",
          color: "#ffffff"
        }),
        y: common_vendor.o(($event) => showCard.value = true),
        z: common_vendor.p({
          type: "list",
          color: "#ffffff"
        }),
        A: common_vendor.unref(musicStore).curSongDetail.id,
        B: common_vendor.o(($event) => showComment.value = $event),
        C: common_vendor.p({
          type: "music",
          id: common_vendor.unref(musicStore).curSongDetail.id,
          visible: showComment.value
        }),
        D: common_vendor.o(($event) => showCard.value = $event),
        E: common_vendor.p({
          visible: showCard.value
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0391012f"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/player/player.vue"]]);
wx.createPage(MiniProgramPage);

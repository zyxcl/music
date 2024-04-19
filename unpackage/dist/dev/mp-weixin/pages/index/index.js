"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  (_easycom_uni_icons2 + _easycom_uni_search_bar2 + _easycom_uni_section2 + _easycom_uni_drawer2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_search_bar + _easycom_uni_section + _easycom_uni_drawer + PlayBar)();
}
const PlayBar = () => "../../components/playerBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const banners = common_vendor.ref([]);
    const playlist = common_vendor.ref([]);
    const navIcons = [
      {
        "id": -1,
        "name": "每日推荐",
        "iconUrl": "http://p1.music.126.net/4DpSgAVpJny4Ewf-Xw_WQQ==/109951163986641971.jpg",
        "url": "/pages/recommend/recommend"
      },
      {
        "id": -6,
        "name": "私人FM",
        "iconUrl": "http://p1.music.126.net/Shi7cRT1bDhwpVDM7AOFXg==/109951165265330616.jpg",
        "url": "/pages/personalfm/personalfm"
      },
      {
        "id": -2,
        "name": "歌单",
        "iconUrl": "http://p1.music.126.net/uG5p6CnwAHrLqOkaSeRlnA==/109951163986649164.jpg",
        "url": ""
      },
      {
        "id": -3,
        "name": "排行榜",
        "iconUrl": "http://p1.music.126.net/SDFC6A3X2wzUCavYyeGIOg==/109951163986649670.jpg",
        "url": "/pages/toplist/toplist"
      },
      {
        "id": 1025001,
        "name": "有声书",
        "iconUrl": "http://p1.music.126.net/Kb4oK0m_ocs3FR3lo-r9yg==/109951167319110429.jpg",
        "url": ""
      },
      {
        "id": 13e3,
        "name": "数字专辑",
        "iconUrl": "http://p1.music.126.net/nRWhsf3P7r7eqHz-v61VBg==/109951166989045593.jpg",
        "url": ""
      },
      {
        "id": 11e3,
        "name": "直播",
        "iconUrl": "http://p1.music.126.net/2JvVZZjcjyCE72fGMsC1hg==/109951166989043011.jpg",
        "url": ""
      },
      {
        "id": 1025e3,
        "name": "关注新歌",
        "iconUrl": "http://p1.music.126.net/BAOWsqZmmxL8JIH-wejMmQ==/109951167294312390.jpg",
        "url": ""
      },
      {
        "id": 1027e3,
        "name": "收藏家",
        "iconUrl": "http://p1.music.126.net/gk99UFRasebERf38t6A1kA==/109951168168319514.jpg",
        "url": ""
      }
    ];
    api_index.bannerApi().then((res) => {
      banners.value = res.banners;
    });
    api_index.topPlaylistApi({ limit: 6 }).then((res) => {
      playlist.value = res.playlists;
    });
    const goSearch = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    const link = (url) => {
      if (!url)
        return;
      common_vendor.index.navigateTo({
        url
      });
    };
    const userDrawer = common_vendor.ref(null);
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/songlist/songlist?id=${id}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => userDrawer.value.open()),
        b: common_vendor.p({
          type: "bars",
          size: "24"
        }),
        c: common_vendor.p({
          placeholder: "搜索",
          bgColor: "#EEEEEE",
          readonly: true
        }),
        d: common_vendor.o(goSearch),
        e: common_vendor.f(banners.value, (item, k0, i0) => {
          return {
            a: item.imageUrl,
            b: item.targetId
          };
        }),
        f: common_vendor.f(navIcons, (item, k0, i0) => {
          return {
            a: item.iconUrl,
            b: common_vendor.o(($event) => link(item.url), item.id),
            c: common_vendor.t(item.name),
            d: item.id
          };
        }),
        g: common_vendor.f(playlist.value, (item, k0, i0) => {
          return {
            a: item.coverImgUrl,
            b: common_vendor.t(item.name),
            c: item.id,
            d: common_vendor.o(($event) => goDetail(item.id), item.id)
          };
        }),
        h: common_vendor.p({
          type: "line",
          title: "推荐歌单"
        }),
        i: common_vendor.unref(userStore).profile
      }, common_vendor.unref(userStore).profile ? {
        j: common_vendor.t(common_vendor.unref(userStore).profile.nickname),
        k: common_vendor.unref(userStore).profile.avatarUrl,
        l: common_vendor.t(common_vendor.unref(userStore).profile)
      } : {}, {
        m: common_vendor.sr(userDrawer, "1cf27b2a-3", {
          "k": "userDrawer"
        }),
        n: common_vendor.p({
          mode: "left",
          width: 320
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

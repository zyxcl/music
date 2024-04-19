"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_card2 + _easycom_uni_section2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_section + _easycom_uni_grid_item + _easycom_uni_grid)();
}
const _sfc_main = {
  __name: "toplist",
  setup(__props) {
    const toplist = common_vendor.ref([]);
    const otherlist = common_vendor.ref([]);
    api_index.toplistApi().then((res) => {
      toplist.value = res.list.filter((v) => v.tracks.length > 0);
      otherlist.value = res.list.filter((v) => v.tracks.length === 0);
    });
    const goDetail = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/songlist/songlist?id=${id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(toplist.value, (item, k0, i0) => {
          return {
            a: common_vendor.f(item.tracks, (song, index, i1) => {
              return {
                a: common_vendor.t(index + 1),
                b: common_vendor.t(song.first),
                c: common_vendor.t(song.second)
              };
            }),
            b: item.first,
            c: item.id,
            d: common_vendor.o(($event) => goDetail(item.id), item.id),
            e: "4437daa4-1-" + i0 + ",4437daa4-0",
            f: common_vendor.p({
              title: item.name,
              ["sub-title"]: item.playCount,
              extra: item.updateFrequency,
              thumbnail: item.coverImgUrl
            })
          };
        }),
        b: common_vendor.p({
          title: "官方榜",
          type: "line"
        }),
        c: common_vendor.f(otherlist.value, (item, index, i0) => {
          return {
            a: item.coverImgUrl,
            b: common_vendor.o(($event) => goDetail(item.id), item.id),
            c: item.id,
            d: "4437daa4-4-" + i0 + ",4437daa4-3"
          };
        }),
        d: common_vendor.p({
          column: 3,
          highlight: true,
          showBorder: false
        }),
        e: common_vendor.p({
          title: "其他榜单",
          type: "line",
          padding: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/toplist/toplist.vue"]]);
wx.createPage(MiniProgramPage);

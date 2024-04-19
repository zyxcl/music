"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_search_bar + Hot)();
}
const Hot = () => "./components/hot.js";
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const searchHistory = common_vendor.ref(common_vendor.index.getStorageSync("searchHistory") || []);
    const showSuggest = common_vendor.ref(false);
    const suggestList = common_vendor.ref([]);
    const showResult = common_vendor.ref(false);
    const resultList = common_vendor.ref([]);
    const startSuggest = async () => {
      const res = await api_index.searchSuggestApi(searchValue.value);
      suggestList.value = res.result.allMatch;
      console.log("触发搜索建议");
    };
    const debounceSuggest = common_vendor._.debounce(startSuggest, 1e3);
    const input = async (val) => {
      if (val.length > 0) {
        showSuggest.value = true;
        showResult.value = false;
        debounceSuggest();
      }
    };
    const cancel = () => {
      showSuggest.value = false;
      showResult.value = false;
      resultList.value = [];
      suggestList.value = [];
    };
    const search = async () => {
      console.log("确定搜索", searchValue.value);
      showSuggest.value = false;
      showResult.value = true;
      const res = await api_index.searchApi(searchValue.value);
      console.log(res);
      resultList.value = res.result.songs;
      const index = searchHistory.value.indexOf(searchValue.value);
      if (index > -1) {
        searchHistory.value.splice(index, 1);
      }
      searchHistory.value.unshift(searchValue.value);
      common_vendor.index.setStorageSync("searchHistory", searchHistory.value);
    };
    const clearHistory = () => {
      searchHistory.value = [];
      common_vendor.index.setStorageSync("searchHistory", searchHistory.value);
    };
    const startSearch = (keyword) => {
      searchValue.value = keyword;
      setTimeout(() => {
        search();
      });
    };
    const goPlay = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/player/player?id=${id}`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(search),
        b: common_vendor.o(cancel),
        c: common_vendor.o(input),
        d: common_vendor.o(($event) => searchValue.value = $event),
        e: common_vendor.p({
          placeholder: "请输入要搜索的歌曲/歌手",
          modelValue: searchValue.value
        }),
        f: showSuggest.value
      }, showSuggest.value ? {
        g: common_vendor.f(suggestList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.keyword),
            b: item.keyword,
            c: common_vendor.o(($event) => startSearch(item.keyword), item.keyword)
          };
        })
      } : showResult.value ? {
        i: common_vendor.f(resultList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.album.name),
            c: common_vendor.f(item.artists, (val, k1, i1) => {
              return {
                a: common_vendor.t(val.name),
                b: val.id
              };
            }),
            d: item.id,
            e: common_vendor.o(($event) => goPlay(item.id), item.id)
          };
        })
      } : {
        j: common_vendor.o(clearHistory),
        k: common_vendor.o(startSearch),
        l: common_vendor.p({
          historyList: searchHistory.value
        })
      }, {
        h: showResult.value
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);

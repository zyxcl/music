"use strict";
const common_vendor = require("../common/vendor.js");
const BaseURL = "https://zyxcl.xyz/music_api";
const request = ({ url, method = "GET", data = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BaseURL + url,
      method,
      data: {
        cookie: common_vendor.index.getStorageSync("curCookie") || "",
        ...data
      },
      header,
      withCredentials: true,
      // 跨域请求携带 cookie
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
const bannerApi = () => {
  return request({ url: "/banner" });
};
const topPlaylistApi = (data = {}) => {
  return request({ url: "/top/playlist", data });
};
const toplistApi = () => {
  return request({ url: "/toplist/detail" });
};
const playlistDetailApi = (id) => {
  return request({ url: "/playlist/detail", data: { id } });
};
const searchHotApi = () => {
  return request({ url: "/search/hot/detail" });
};
const searchSuggestApi = (keywords) => {
  return request({
    url: "/search/suggest",
    data: {
      keywords,
      type: "mobile"
    }
  });
};
const searchApi = (keywords) => {
  return request({
    url: "/search",
    data: {
      keywords
    }
  });
};
const loginApi = ({ email, password }) => {
  return request({
    url: "/login",
    method: "GET",
    data: {
      email,
      password
    }
  });
};
const loginStatusApi = () => {
  return request({
    url: "/login/status"
  });
};
const songDetailApi = (ids) => {
  return request({
    url: "/song/detail",
    data: {
      ids
    }
  });
};
const lyricApi = (id) => {
  return request({
    url: "/lyric",
    data: {
      id
    }
  });
};
const songUrlApi = (id) => {
  return request({
    url: "/song/url",
    data: {
      id
    }
  });
};
const commentApi = (type, id) => {
  return request({
    url: `/comment/${type}`,
    data: {
      id
    }
  });
};
exports.bannerApi = bannerApi;
exports.commentApi = commentApi;
exports.loginApi = loginApi;
exports.loginStatusApi = loginStatusApi;
exports.lyricApi = lyricApi;
exports.playlistDetailApi = playlistDetailApi;
exports.searchApi = searchApi;
exports.searchHotApi = searchHotApi;
exports.searchSuggestApi = searchSuggestApi;
exports.songDetailApi = songDetailApi;
exports.songUrlApi = songUrlApi;
exports.topPlaylistApi = topPlaylistApi;
exports.toplistApi = toplistApi;

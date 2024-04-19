"use strict";
const common_vendor = require("../common/vendor.js");
const api_index = require("../api/index.js");
const useUserStore = common_vendor.defineStore("user", () => {
  const profile = common_vendor.ref(null);
  const getProfile = () => {
    api_index.loginStatusApi().then((res) => {
      profile.value = res.data.profile;
    });
  };
  return {
    profile,
    getProfile
  };
});
exports.useUserStore = useUserStore;

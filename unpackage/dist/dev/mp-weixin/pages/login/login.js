"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
const store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const form = common_vendor.ref(null);
    const formData = common_vendor.ref({
      email: "",
      password: ""
    });
    const rules = {
      email: {
        rules: [
          { required: true, errorMessage: "邮箱不能为空" },
          { format: "email", errorMessage: "邮箱格式错误" }
        ]
      },
      password: {
        rules: [{
          required: true,
          errorMessage: "密码不能为空"
        }]
      }
    };
    const submit = async () => {
      try {
        await form.value.validate();
        const res = await api_index.loginApi(formData.value);
        if (res.code === 200) {
          common_vendor.index.setStorageSync("curCookie", res.cookie);
          userStore.profile = res.profile;
          common_vendor.index.showToast({
            title: "登录成功",
            icon: "success"
          });
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
        } else {
          common_vendor.index.showToast({
            title: res.msg,
            icon: "error"
          });
        }
      } catch (e) {
        common_vendor.index.showToast({
          title: e,
          icon: "error"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => formData.value.email = $event),
        b: common_vendor.p({
          prefixIcon: "email",
          placeholder: "请输入邮箱",
          modelValue: formData.value.email
        }),
        c: common_vendor.p({
          name: "email"
        }),
        d: common_vendor.o(($event) => formData.value.password = $event),
        e: common_vendor.p({
          prefixIcon: "locked",
          type: "password",
          placeholder: "请输入密码",
          modelValue: formData.value.password
        }),
        f: common_vendor.p({
          name: "password"
        }),
        g: common_vendor.sr(form, "e4e4508d-0", {
          "k": "form"
        }),
        h: common_vendor.p({
          rules,
          modelValue: formData.value
        }),
        i: common_vendor.o(submit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "UniDrawer",
  components: {},
  emits: ["change"],
  props: {
    /**
     * 显示模式（左、右），只在初始化生效
     */
    mode: {
      type: String,
      default: ""
    },
    /**
     * 蒙层显示状态
     */
    mask: {
      type: Boolean,
      default: true
    },
    /**
     * 遮罩是否可点击关闭
     */
    maskClick: {
      type: Boolean,
      default: true
    },
    /**
     * 抽屉宽度
     */
    width: {
      type: Number,
      default: 220
    }
  },
  data() {
    return {
      visibleSync: false,
      showDrawer: false,
      rightMode: false,
      watchTimer: null,
      drawerWidth: 220
    };
  },
  created() {
    this.drawerWidth = this.width;
    this.rightMode = this.mode === "right";
  },
  methods: {
    clear() {
    },
    close(type) {
      if (type === "mask" && !this.maskClick || !this.visibleSync)
        return;
      this._change("showDrawer", "visibleSync", false);
    },
    open() {
      if (this.visibleSync)
        return;
      this._change("visibleSync", "showDrawer", true);
    },
    _change(param1, param2, status) {
      this[param1] = status;
      if (this.watchTimer) {
        clearTimeout(this.watchTimer);
      }
      this.watchTimer = setTimeout(() => {
        this[param2] = status;
        this.$emit("change", status);
      }, status ? 50 : 300);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.visibleSync
  }, $data.visibleSync ? {
    b: $data.showDrawer && $props.mask ? 1 : "",
    c: common_vendor.o(($event) => $options.close("mask")),
    d: $data.rightMode ? 1 : "",
    e: !$data.rightMode ? 1 : "",
    f: $data.showDrawer ? 1 : "",
    g: $data.drawerWidth + "px",
    h: $data.showDrawer ? 1 : "",
    i: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/zhaoyaxiang/Desktop/2306/wxmini/mqq-music/uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue"]]);
wx.createComponent(Component);

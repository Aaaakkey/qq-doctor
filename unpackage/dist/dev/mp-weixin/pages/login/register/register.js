"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: 0,
      range: [{
        "value": 0,
        "text": "我已阅读并同意《用户协议》、《隐私政策》"
      }]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  _easycom_uni_data_checkbox2();
}
const _easycom_uni_data_checkbox = () => "../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  _easycom_uni_data_checkbox();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
    b: common_vendor.o((...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
    c: common_vendor.o(_ctx.change),
    d: common_vendor.o(($event) => $data.value = $event),
    e: common_vendor.p({
      multiple: true,
      localdata: $data.range,
      modelValue: $data.value
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be2e578e"], ["__file", "F:/code/qq-doctor/pages/login/register/register.vue"]]);
wx.createPage(MiniProgramPage);

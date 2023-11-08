if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1j = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "bgicon" }, [
        vue.createElementVNode("image", {
          class: "icon",
          src: "/static/img/login/bg1.jpg",
          mode: "scaleToFill"
        })
      ]),
      vue.createElementVNode("view", { class: "f1" }, [
        vue.createElementVNode("view", { class: "f11" }, [
          vue.createElementVNode("view", { class: "t1" }, [
            vue.createElementVNode("text", { class: "t11" }, "企桥医健APP"),
            vue.createElementVNode("view", { class: "t2" }, [
              vue.createElementVNode("text", { class: "t21" }, "欢迎您使用")
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "f2" }, [
          vue.createElementVNode("text", { class: "f21" }, "呵护您的健康生活")
        ]),
        vue.createElementVNode("view", { class: "f3" }, [
          vue.createElementVNode("view", { class: "f31" }, [
            vue.createElementVNode("navigator", {
              url: "/pages/login/passwordLogin/passwordLogin",
              "animation-type": "slide-in-bottom",
              "animation-duration": "300"
            }, [
              vue.createElementVNode("button", { class: "b1" }, [
                vue.createElementVNode("view", { class: "t3" }, "登录")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "f32" }, [
            vue.createElementVNode("navigator", {
              url: "/pages/login/register/register",
              "animation-type": "slide-in-bottom",
              "animation-duration": "300"
            }, [
              vue.createElementVNode("button", {
                type: "default",
                class: "b2"
              }, [
                vue.createElementVNode("view", { class: "t4" }, "创建账户")
              ])
            ])
          ])
        ]),
        vue.createCommentVNode(' <view style="height: 20vh; width:100%; background-color: rebeccapurple;"></view> ')
      ])
    ]);
  }
  const PagesLoginStartStart = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["render", _sfc_render$1i], ["__scopeId", "data-v-96390ece"], ["__file", "F:/code/qq-doctor/pages/login/start/start.vue"]]);
  const _sfc_main$1i = {
    data() {
      return {
        agreementChecked: false
      };
    },
    methods: {}
  };
  function _sfc_render$1h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "nav1" }, [
        vue.createElementVNode("navigator", { url: "/pages/login/start/start" }, [
          vue.createElementVNode("image", {
            mode: "scaleToFill",
            class: "i1",
            src: "/static/img/login/goback2.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "a1" }),
        vue.createElementVNode("view", { class: "t1" }, " 创建用户 "),
        vue.createElementVNode("view", { class: "i1" }, [
          vue.createElementVNode(
            "input",
            {
              class: "i11",
              ref: "input1",
              onInput: _cache[0] || (_cache[0] = (...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
              placeholder: "    手机号"
            },
            null,
            544
            /* HYDRATE_EVENTS, NEED_PATCH */
          )
        ]),
        vue.createElementVNode("view", { class: "i2" }, [
          vue.createElementVNode(
            "input",
            {
              class: "i21",
              ref: "input1",
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
              placeholder: "    6位验证码"
            },
            null,
            544
            /* HYDRATE_EVENTS, NEED_PATCH */
          ),
          vue.createElementVNode("button", { class: "btn1" }, [
            vue.createElementVNode("view", null, "获取验证码")
          ])
        ]),
        vue.createElementVNode("view", { class: "i3" }),
        vue.createElementVNode("view", { class: "i4" }, [
          vue.createCommentVNode(' <uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox> '),
          vue.createElementVNode("checkbox", { style: { "margin-left": "90rpx" } }),
          vue.createElementVNode("text", { style: { "font-size": "28rpx", "transform": "translateY(5rpx)", "padding-left": "4rpx" } }, "我已阅读并同意"),
          vue.createElementVNode("navigator", {
            url: "/pages/login/userAgreement/userAgreement",
            style: { "font-size": "28rpx", "transform": "translateY(5rpx)" }
          }, "《用户协议》 "),
          vue.createElementVNode("text", null, "、"),
          vue.createElementVNode("navigator", {
            url: "/pages/login/privacyPolicy/privacyPolicy",
            style: { "font-size": "28rpx", "transform": "translateY(5rpx)" }
          }, "《隐私政策》 ")
        ])
      ]),
      vue.createElementVNode("view", { class: "f1" }, [
        vue.createElementVNode("view", { class: "f11" }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "transform": "translateY(150%)", "color": "#FFFFFF", "font-size": "28rpx" }
          }, [
            vue.createElementVNode("text", null, "请阅读用户协议以及隐私政策")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "f2" }, [
        vue.createElementVNode("navigator", { url: "/pages/registrationWizard/slideWizard/slideWizard" }, [
          vue.createElementVNode("button", {
            type: "default",
            class: "btn2"
          }, [
            vue.createElementVNode("view", { class: "f22" }, "登录")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["render", _sfc_render$1h], ["__scopeId", "data-v-be2e578e"], ["__file", "F:/code/qq-doctor/pages/login/register/register.vue"]]);
  const _sfc_main$1h = {
    data() {
      return {
        agreementChecked: false,
        password: "",
        passwordNotShowFlag: true
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.passwordNotShowFlag = !this.passwordNotShowFlag;
      },
      navTo() {
        uni.reLaunch({
          url: "/pages/main/mainfront"
        });
      }
    }
  };
  function _sfc_render$1g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "nav1" }, [
        vue.createElementVNode("navigator", { url: "/pages/login/start/start" }, [
          vue.createElementVNode("image", {
            mode: "scaleToFill",
            class: "i1",
            src: "/static/img/login/goback2.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "a1" }),
        vue.createElementVNode("view", { class: "t1" }, " 密码登录 "),
        vue.createElementVNode("view", { class: "i1" }, [
          vue.createElementVNode(
            "input",
            {
              class: "i11",
              ref: "input1",
              onInput: _cache[0] || (_cache[0] = (...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
              placeholder: "    手机号"
            },
            null,
            544
            /* HYDRATE_EVENTS, NEED_PATCH */
          )
        ]),
        vue.createElementVNode("view", { class: "i2" }, [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "i21",
            onInput: _cache[1] || (_cache[1] = (...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
            password: $data.passwordNotShowFlag,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.password = $event),
            "cursor-spacing": "10rpx",
            placeholder: "    密码"
          }, null, 40, ["password"]), [
            [vue.vModelText, $data.password]
          ]),
          vue.createElementVNode("image", {
            class: "i-show",
            src: "/static/img/login/show.png",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.togglePasswordVisibility && $options.togglePasswordVisibility(...args))
          })
        ]),
        vue.createElementVNode("view", { class: "i3" })
      ]),
      vue.createElementVNode("view", { class: "f1" }),
      vue.createElementVNode("view", { class: "f2" }, [
        vue.createCommentVNode(' 		<navigator url="/pages/login/start/start"> '),
        vue.createElementVNode("button", {
          type: "default",
          class: "btn2",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.navTo())
        }, [
          vue.createElementVNode("view", { class: "f22" }, " 登录 ")
        ]),
        vue.createCommentVNode(" 			</navigator> ")
      ]),
      vue.createElementVNode("view", { class: "f3" }, [
        vue.createElementVNode("navigator", { url: "/pages/login/phoneLogin/phoneLogin" }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "margin-left": "100rpx", "color": "#FFFFFF", "font-size": "30rpx" }
          }, [
            vue.createElementVNode("text", null, "忘记密码?试试手机号登录")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginPasswordLoginPasswordLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["render", _sfc_render$1g], ["__scopeId", "data-v-57b412fb"], ["__file", "F:/code/qq-doctor/pages/login/passwordLogin/passwordLogin.vue"]]);
  const _sfc_main$1g = {
    data() {
      return {
        agreementChecked: false
      };
    },
    methods: {
      navTo() {
        uni.reLaunch({
          url: "/pages/main/mainfront"
        });
      }
    }
  };
  function _sfc_render$1f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "nav1" }, [
        vue.createElementVNode("navigator", { url: "/pages/login/start/start" }, [
          vue.createElementVNode("image", {
            mode: "scaleToFill",
            class: "i1",
            src: "/static/img/login/goback2.png"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "a1" }),
        vue.createElementVNode("view", { class: "t1" }, " 手机号登录 "),
        vue.createElementVNode("view", { class: "i1" }, [
          vue.createElementVNode(
            "input",
            {
              class: "i11",
              ref: "input1",
              onInput: _cache[0] || (_cache[0] = (...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
              placeholder: "    手机号"
            },
            null,
            544
            /* HYDRATE_EVENTS, NEED_PATCH */
          )
        ]),
        vue.createCommentVNode(' 	<view class="" style="height: 10%; width: 100%;"></view> '),
        vue.createElementVNode("view", { class: "i2" }, [
          vue.createElementVNode(
            "input",
            {
              class: "i21",
              ref: "input1",
              onInput: _cache[1] || (_cache[1] = (...args) => _ctx.hideKeyboard && _ctx.hideKeyboard(...args)),
              placeholder: "    6位验证码"
            },
            null,
            544
            /* HYDRATE_EVENTS, NEED_PATCH */
          ),
          vue.createElementVNode("button", { class: "btn1" }, [
            vue.createElementVNode("view", null, "获取验证码")
          ])
        ]),
        vue.createElementVNode("view", { class: "i3" }),
        vue.createElementVNode("view", { class: "i4" })
      ]),
      vue.createElementVNode("view", { class: "f1" }),
      vue.createElementVNode("view", { class: "f2" }, [
        vue.createElementVNode("button", {
          type: "default",
          class: "btn2",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.navTo())
        }, [
          vue.createElementVNode("view", { class: "f22" }, "登录")
        ])
      ]),
      vue.createElementVNode("view", { class: "f3" }, [
        vue.createElementVNode("navigator", { url: "/pages/login/passwordLogin/passwordLogin" }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "margin-left": "100rpx", "color": "#FFFFFF", "font-size": "30rpx" }
          }, [
            vue.createElementVNode("text", null, "密码登录")
          ])
        ])
      ])
    ]);
  }
  const PagesLoginPhoneLoginPhoneLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["render", _sfc_render$1f], ["__scopeId", "data-v-44c963fe"], ["__file", "F:/code/qq-doctor/pages/login/phoneLogin/phoneLogin.vue"]]);
  const _sfc_main$1f = {
    name: "DoctorBaseInfo",
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        default() {
          return {
            pic: "../../static/img/doctor2.png",
            name: "赵熙蒙",
            hospital: "赣州市第一人民医院",
            depart: "眼科"
          };
        }
      }
    }
  };
  function _sfc_render$1e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "DoctorBaseInfo-doctor" }, [
        vue.createElementVNode("view", { class: "DoctorBaseInfo-doctor-left" }, [
          vue.createElementVNode("image", {
            src: $props.item.pic
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "DoctorBaseInfo-doctor-right" }, [
          vue.createElementVNode(
            "view",
            { class: "DoctorBaseInfo-doctor-right-text1" },
            vue.toDisplayString($props.item.name) + "医生 ",
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "DoctorBaseInfo-doctor-right-text2" },
            vue.toDisplayString($props.item.hospital) + vue.toDisplayString($props.item.depart),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const __easycom_0$d = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["render", _sfc_render$1e], ["__scopeId", "data-v-02b9e5eb"], ["__file", "F:/code/qq-doctor/components/DoctorBaseInfo/DoctorBaseInfo.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
      return null;
    }
    const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
      date = time;
    } else {
      if (typeof time === "string" && /^[0-9]+$/.test(time)) {
        time = parseInt(time);
      } else if (typeof time === "string") {
        time = time.replace(new RegExp(/-/gm), "/").replace("T", " ").replace(new RegExp(/\.[\d]{3}/gm), "");
      }
      if (typeof time === "number" && time.toString().length === 10) {
        time = time * 1e3;
      }
      date = new Date(time);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key];
      if (key === "a") {
        return ["日", "一", "二", "三", "四", "五", "六"][value];
      }
      if (result.length > 0 && value < 10) {
        value = "0" + value;
      }
      return value || 0;
    });
    return time_str;
  }
  function getGreeting() {
    const date = /* @__PURE__ */ new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours < 12) {
      return 0;
    } else if (hours >= 12 && hours < 18) {
      return 1;
    } else {
      return 2;
    }
  }
  function getDateList() {
    const dateList = [];
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    for (let i2 = -1; i2 <= 6; i2++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i2);
      const day = date.getDate();
      dateList.push(day);
    }
    return dateList;
  }
  function getThreeDate() {
    const today = /* @__PURE__ */ new Date();
    const threeDays = [];
    for (let i2 = 0; i2 < 3; i2++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i2);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      threeDays.push(`${month}月${day}日`);
    }
    return threeDays;
  }
  const _sfc_main$1e = {
    name: "MessageLine",
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        default() {
          return {
            message: "默认消息",
            sender: "0",
            time: "1698672207",
            picurl: ""
          };
        }
      },
      user: {
        type: Object,
        default() {
          return {
            name: "赵熙蒙",
            picurl: "../../static/img/doctor2.png"
          };
        }
      }
    },
    computed: {
      transTime() {
        return parseTime(this.item.time);
      }
    }
  };
  function _sfc_render$1d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "messageline-body" }, [
      $props.item.picurl == "" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "messageline-block"
      }, [
        vue.createElementVNode("view", { class: "messageline-context" }, [
          vue.createElementVNode(
            "view",
            { class: "messageline-time" },
            vue.toDisplayString($options.transTime),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "messageline" }, [
            vue.createElementVNode(
              "view",
              { class: "messageline-text" },
              vue.toDisplayString($props.item.message),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "messageline-image" }, [
          vue.createElementVNode("image", {
            src: $props.user.picurl
          }, null, 8, ["src"])
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "picline-block"
      }, [
        vue.createElementVNode("view", { class: "picline-context" }, [
          vue.createElementVNode(
            "view",
            { class: "picline-time" },
            vue.toDisplayString($options.transTime),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "picline-block-image" }, [
            vue.createElementVNode("image", {
              src: $props.item.picurl,
              mode: "aspectFill"
            }, null, 8, ["src"])
          ])
        ]),
        vue.createElementVNode("view", { class: "picline-image" }, [
          vue.createElementVNode("image", {
            src: $props.user.picurl
          }, null, 8, ["src"])
        ])
      ]))
    ]);
  }
  const __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["render", _sfc_render$1d], ["__scopeId", "data-v-8b1e6fc4"], ["__file", "F:/code/qq-doctor/components/MessageLine/MessageLine.vue"]]);
  const _sfc_main$1d = {
    name: "ReceiveLine",
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        default() {
          return {
            message: "默认消息",
            sender: "1",
            time: "1698672207"
          };
        }
      },
      user: {
        type: Object,
        default() {
          return {
            name: "安俊禹",
            picurl: "../../static/img/doctor3.png"
          };
        }
      }
    },
    computed: {
      transTime() {
        return parseTime(this.item.time);
      }
    }
  };
  function _sfc_render$1c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "receiveline-body" }, [
      $props.item.picurl == "" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "receiveline-block"
      }, [
        vue.createElementVNode("view", { class: "receiveline-image" }, [
          vue.createElementVNode("image", {
            src: $props.user.picurl,
            mode: ""
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "receive-context" }, [
          vue.createElementVNode(
            "view",
            { class: "receiveline-time" },
            vue.toDisplayString($options.transTime),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "receiveline" }, [
            vue.createElementVNode(
              "view",
              { class: "receiveline-text" },
              vue.toDisplayString($props.item.message),
              1
              /* TEXT */
            )
          ])
        ])
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "recpicline-block"
      }, [
        vue.createElementVNode("view", { class: "recpicline-image" }, [
          vue.createElementVNode("image", {
            src: $props.user.picurl
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "recpicline-context" }, [
          vue.createElementVNode(
            "view",
            { class: "recpicline-time" },
            vue.toDisplayString($options.transTime),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "recpicline-block-image" }, [
            vue.createElementVNode("image", {
              src: $props.item.picurl,
              mode: ""
            }, null, 8, ["src"])
          ])
        ])
      ]))
    ]);
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["render", _sfc_render$1c], ["__scopeId", "data-v-1155e762"], ["__file", "F:/code/qq-doctor/components/ReceiveLine/ReceiveLine.vue"]]);
  const _sfc_main$1c = {
    name: "MessageTab",
    data() {
      return {};
    }
  };
  function _sfc_render$1b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "message-tab" }, [
      vue.createElementVNode("view", { class: "message-tab-block" }, [
        vue.createElementVNode("view", { class: "message-tab-image" }, [
          vue.createElementVNode("image", {
            src: "/static/img/talk.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("input", {
          class: "send-input",
          "confirm-type": "send"
        }),
        vue.createElementVNode("view", { class: "message-tab-image" }, [
          vue.createElementVNode("image", {
            src: "/static/img/smile.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "message-tab-image1" }, [
          vue.createElementVNode("image", {
            src: "/static/img/pic.png",
            mode: ""
          })
        ])
      ])
    ]);
  }
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["render", _sfc_render$1b], ["__scopeId", "data-v-9ea06745"], ["__file", "F:/code/qq-doctor/components/MessageTab/MessageTab.vue"]]);
  const _sfc_main$1b = {
    data() {
      return {
        doctormessageinfo: {
          pic: "../../static/img/doctor3.png",
          name: "安俊禹",
          hospital: "赣州市第一人民医院",
          depart: "眼科"
        },
        messageList: [
          {
            message: "安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？安子哥你怎么了？",
            sender: 0,
            time: "1698672207",
            picurl: "../../static/img/sendpic.png"
          },
          {
            message: "我想当香蕉猫了",
            sender: 1,
            time: "1698672209",
            picurl: ""
          },
          {
            message: "香蕉猫是什么？",
            sender: 0,
            time: "1698672307",
            picurl: ""
          },
          {
            message: "",
            sender: 1,
            time: "1698672317",
            picurl: "../../static/img/sendpic.png"
          },
          {
            message: "这个我也不知道",
            sender: 1,
            time: "1698672317",
            picurl: ""
          },
          {
            message: "这个我也不知道",
            sender: 1,
            time: "1698672317",
            picurl: ""
          },
          {
            message: "这个我也不知道",
            sender: 1,
            time: "1698672317",
            picurl: ""
          }
        ]
      };
    },
    computed: {
      filteredMyMessages() {
        return this.messageList.filter((message) => message.sender === 0);
      },
      filteredOtherMessages() {
        return this.messageList.filter((message) => message.sender === 1);
      }
    }
  };
  function _sfc_render$1a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DoctorBaseInfo = resolveEasycom(vue.resolveDynamicComponent("DoctorBaseInfo"), __easycom_0$d);
    const _component_MessageLine = resolveEasycom(vue.resolveDynamicComponent("MessageLine"), __easycom_1$8);
    const _component_ReceiveLine = resolveEasycom(vue.resolveDynamicComponent("ReceiveLine"), __easycom_2$3);
    const _component_MessageTab = resolveEasycom(vue.resolveDynamicComponent("MessageTab"), __easycom_3$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "message-table" }, [
      vue.createVNode(_component_DoctorBaseInfo, { item: $data.doctormessageinfo }, null, 8, ["item"]),
      vue.createElementVNode("view", { class: "message-table-begin-nullblock" }),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.messageList, (item) => {
          return vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            [
              item.sender === 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_MessageLine, { item }, null, 8, ["item"])
              ])) : vue.createCommentVNode("v-if", true),
              item.sender === 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                vue.createVNode(_component_ReceiveLine, { item }, null, 8, ["item"])
              ])) : vue.createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          );
        }),
        256
        /* UNKEYED_FRAGMENT */
      )),
      vue.createElementVNode("view", { class: "message-table-end-nullblock" }),
      vue.createVNode(_component_MessageTab)
    ]);
  }
  const PagesMainMessagetable = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["render", _sfc_render$1a], ["__scopeId", "data-v-160538d4"], ["__file", "F:/code/qq-doctor/pages/main/messagetable.vue"]]);
  const _sfc_main$1a = {
    methods: {
      onAgree() {
      }
    }
  };
  function _sfc_render$19(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "user-agreement" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("view", {
          class: "titleContent",
          style: { "height": "100%", "width": "100%" }
        }, "用户协议")
      ]),
      vue.createElementVNode("scroll-view", {
        class: "content",
        "scroll-y": ""
      }, [
        vue.createElementVNode("view", { class: "agreement-content" }, " Privacy Policy Dr. Little’s vision is to make healthcare more efficient and effective through machine learning technology, connected care, and research products. Naturally, this involves working with data that is important to a hospital. We appreciate the trust placed in us to protect patient’s privacy. Please carefully read this “privacy policy” before using our services. This Privacy Policy applies to data collected or processed by the Dr. Little system via X hospital and alliances devices, applications, software, websites, APIs, and our general dealings with customers through email and other forms of communication regarding our products and services and also our future services (the “Services”). This policy is not applied to the data collected from outside of our system, for example, such as data collected by other applications and websites within each hospital. This policy is a part of the agreement in using our application and receiving treatments at X hospital. By using our application, we assume that you have read and agreed with this policy. This policy explains what data we collect, how we use it, and the measures we take to keep the data safe. The details about this policy will be described as followed. For your medical records, apart from this policy, we will strictly comply with governmental regulations on how we handle it. What kind of data do we collect from patients? We collect data from patients to track medical treatments and services (this includes preventing and following up symptoms). The data we collect is general data and patient data (medical records) essential for medical services. Patients data is data that can identify both directly and indirectly, for example, data that could identify patient, such as name, gender, date of birth, and identification number data concerning patients contact such as an address, phone number, and email data concerning patients emergency contact such as relationship and contact number of a person hospitals could contact in case of emergency data concerning patient physical and mental health data concerning patient allergy of medicines/ food and their side effects data concerning patient feedbacks and comments data concerning patients diagnosis (for medical personnel users) data concerning patient activity log on our application (for medical personnel users) Why data matter to us? It is essential to collect, update, process, and use patient data to provide our services continuously. Our services will include informing patient diagnosis results, providing data concerning patient interests, improving the accuracy of software we use to facilitate diagnosis and legal purposes. This policy will collect, store, update, process, and make use of data (personal data, X-ray pictures, and other relevant data) for medical education and treatments, application improvement, and increasing the accuracy of our software and the ML diagnosis model. How long would we keep patient data? We will keep patient personal data for at least five years since we collect the data or make adjustments/updates. We expect that within this timeframe, we would be able to aid a diagnosis ultimately. However, we may keep the data longer than the expected five years if a patient is still ongoing diagnosis or the laws allow us to keep their data. Your data will be deleted from our database after the set timeframe. Who has access to patient data? Only us and X hospital have access to patient data. To protect the anonymity of this data, we do not send the third parties’ analytics companies any data that identifies the patients. The third parties with whom we share data include our medical alliances and cloud computing providers. We may need to reveal data for legal purposes, which we would inform X hospital every time before handing the data to responsible governmental officials. How do we secure data? We value privacy and will always do our best to protect data. Pattern Health products are designed for use by healthcare organizations subject to the privacy and security standards defined by the U.S. Health Insurance Portability and Accountability Act (HIPAA) and the E.U. General Data Protection Regulation (GDPR) 2016/679. We will store our data by using a cybersecurity company Cloudflare to ensure optimal precautions are taken into account. Additionally, we provide physical, electronic, and procedural safeguards to protect the data we process and maintain. For example, we limit access to authorized employees and contractors who need to know data to operate, develop or improve our products. Please be aware that, although we endeavor to provide excellent security for the data we process and maintain, no security system can prevent all potential security breaches. Should a breach occur, the hospital will be notified within a reasonable time via email and a prominent notice on our website. Future development of our system will incorporate blockchain to decentralize information so that data will not be tied back to the patient. We need to utilize the data to train our ML diagnosis model; however, we want to take the necessary steps to anonymize the scans. Changes This Privacy Policy may be updated from time to time for undisclosed reasons. We will notify the hospital of any changes to our Privacy Policy by posting the new Privacy Policy to https://doctorlittle.org/ and informing via email or within the appliaction. Hospitals are advised to consult this Privacy Policy regularly for any changes. What are user rights? Hospital has the right to access the data, ask for copies, and update the data. Hospital has the right to oppose, suspend, and revoke its consent regarding our collection, use, and data revelation. Hospital has the right to delete, destroy, and reveal the source of data. However, we assume that by suspending and revoking consent, X hospital recognizes that it might affect its access to our services and the quality of treatments received within our system. Your Consent Dr Little and X hospital are the controllers of patient data provided to us, which means determining the purposes and how personal data is processed. Using our Services, X hospital is consenting to our processing of user-provided and automatically collected data. “Processing” means using data in any way, including, but not limited to, collecting, storing, deleting, combining, and disclosing data, all of which activities will take place in Kenya. If X hospital resides outside Kenya, the data will be transferred to Kenya and processed and stored there. Using our products and providing data to us, you consent to such transfer to and processing in Kenya. ")
      ]),
      vue.createElementVNode("view", { class: "wrapp" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/login/register/register",
          style: { "height": "100%", "width": "80%" }
        }, [
          vue.createElementVNode("view", {
            class: "agree-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onAgree && $options.onAgree(...args))
          }, "同意")
        ])
      ])
    ]);
  }
  const PagesLoginUserAgreementUserAgreement = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["render", _sfc_render$19], ["__scopeId", "data-v-249c4fe7"], ["__file", "F:/code/qq-doctor/pages/login/userAgreement/userAgreement.vue"]]);
  const _sfc_main$19 = {
    methods: {
      onAgree() {
      }
    }
  };
  function _sfc_render$18(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "privacyPolicy" }, [
      vue.createElementVNode("view", { class: "title" }, [
        vue.createElementVNode("view", {
          class: "titleContent",
          style: { "height": "100%", "width": "100%" }
        }, "privacyPolicy")
      ]),
      vue.createElementVNode("scroll-view", {
        class: "content",
        "scroll-y": ""
      }, [
        vue.createElementVNode("view", { class: "privacyPolicy-content" }, " Dr. Little’s vision is to make healthcare more efficient and effective through machine learning technology, connected care, and research products. Naturally, this involves working with data that is important to a hospital. We appreciate the trust placed in us to protect patient’s privacy. Please carefully read this “privacy policy” before using our services. This Privacy Policy applies to data collected or processed by the Dr. Little system via X hospital and alliances devices, applications, software, websites, APIs, and our general dealings with customers through email and other forms of communication regarding our products and services and also our future services (the “Services”). This policy is not applied to the data collected from outside of our system, for example, such as data collected by other applications and websites within each hospital. This policy is a part of the agreement in using our application and receiving treatments at X hospital. By using our application, we assume that you have read and agreed with this policy. This policy explains what data we collect, how we use it, and the measures we take to keep the data safe. The details about this policy will be described as followed. For your medical records, apart from this policy, we will strictly comply with governmental regulations on how we handle it. What kind of data do we collect from patients? We collect data from patients to track medical treatments and services (this includes preventing and following up symptoms). The data we collect is general data and patient data (medical records) essential for medical services. Patients data is data that can identify both directly and indirectly, for example, data that could identify patient, such as name, gender, date of birth, and identification number data concerning patients contact such as an address, phone number, and email data concerning patients emergency contact such as relationship and contact number of a person hospitals could contact in case of emergency data concerning patient physical and mental health data concerning patient allergy of medicines/ food and their side effects data concerning patient feedbacks and comments data concerning patients diagnosis (for medical personnel users) data concerning patient activity log on our application (for medical personnel users) Why data matter to us? It is essential to collect, update, process, and use patient data to provide our services continuously. Our services will include informing patient diagnosis results, providing data concerning patient interests, improving the accuracy of software we use to facilitate diagnosis and legal purposes. This policy will collect, store, update, process, and make use of data (personal data, X-ray pictures, and other relevant data) for medical education and treatments, application improvement, and increasing the accuracy of our software and the ML diagnosis model. How long would we keep patient data? We will keep patient personal data for at least five years since we collect the data or make adjustments/updates. We expect that within this timeframe, we would be able to aid a diagnosis ultimately. However, we may keep the data longer than the expected five years if a patient is still ongoing diagnosis or the laws allow us to keep their data. Your data will be deleted from our database after the set timeframe. Who has access to patient data? Only us and X hospital have access to patient data. To protect the anonymity of this data, we do not send the third parties’ analytics companies any data that identifies the patients. The third parties with whom we share data include our medical alliances and cloud computing providers. We may need to reveal data for legal purposes, which we would inform X hospital every time before handing the data to responsible governmental officials. How do we secure data? We value privacy and will always do our best to protect data. Pattern Health products are designed for use by healthcare organizations subject to the privacy and security standards defined by the U.S. Health Insurance Portability and Accountability Act (HIPAA) and the E.U. General Data Protection Regulation (GDPR) 2016/679. We will store our data by using a cybersecurity company Cloudflare to ensure optimal precautions are taken into account. Additionally, we provide physical, electronic, and procedural safeguards to protect the data we process and maintain. For example, we limit access to authorized employees and contractors who need to know data to operate, develop or improve our products. Please be aware that, although we endeavor to provide excellent security for the data we process and maintain, no security system can prevent all potential security breaches. Should a breach occur, the hospital will be notified within a reasonable time via email and a prominent notice on our website. Future development of our system will incorporate blockchain to decentralize information so that data will not be tied back to the patient. We need to utilize the data to train our ML diagnosis model; however, we want to take the necessary steps to anonymize the scans. Changes This Privacy Policy may be updated from time to time for undisclosed reasons. We will notify the hospital of any changes to our Privacy Policy by posting the new Privacy Policy to https://doctorlittle.org/ and informing via email or within the appliaction. Hospitals are advised to consult this Privacy Policy regularly for any changes. What are user rights? Hospital has the right to access the data, ask for copies, and update the data. Hospital has the right to oppose, suspend, and revoke its consent regarding our collection, use, and data revelation. Hospital has the right to delete, destroy, and reveal the source of data. However, we assume that by suspending and revoking consent, X hospital recognizes that it might affect its access to our services and the quality of treatments received within our system. Your Consent Dr Little and X hospital are the controllers of patient data provided to us, which means determining the purposes and how personal data is processed. Using our Services, X hospital is consenting to our processing of user-provided and automatically collected data. “Processing” means using data in any way, including, but not limited to, collecting, storing, deleting, combining, and disclosing data, all of which activities will take place in Kenya. If X hospital resides outside Kenya, the data will be transferred to Kenya and processed and stored there. Using our products and providing data to us, you consent to such transfer to and processing in Kenya. ")
      ]),
      vue.createElementVNode("view", { class: "wrapp" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/login/register/register",
          style: { "height": "100%", "width": "80%" }
        }, [
          vue.createElementVNode("view", {
            class: "privacyPolicy-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onAgree && $options.onAgree(...args))
          }, "同意")
        ])
      ])
    ]);
  }
  const PagesLoginPrivacyPolicyPrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["render", _sfc_render$18], ["__scopeId", "data-v-a8203ef9"], ["__file", "F:/code/qq-doctor/pages/login/privacyPolicy/privacyPolicy.vue"]]);
  const _sfc_main$18 = {
    props: {
      current: Number
      //
    },
    data() {
      return {
        // index: this.$props.current
      };
    },
    methods: {
      handleClick() {
        let index = this.$props.current + 1;
        this.$emit("processedIndex", index);
      }
    }
  };
  function _sfc_render$17(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "firstStep" }, [
      vue.createElementVNode("view", { class: "containerUp" }, [
        vue.createElementVNode("image", {
          src: "/static/img/guide/guide1.png",
          style: { "width": "100%", "height": "976rpx" }
        })
      ]),
      vue.createElementVNode("view", { class: "content1" }, [
        vue.createElementVNode("text", { class: "text1" }, "欢迎您来到企桥医健"),
        vue.createElementVNode("text", { class: "text2" }, "\\n您的线上问诊专家"),
        vue.createElementVNode("text", { class: "text2" }, "\\n全国27W+医生入驻在线问诊"),
        vue.createElementVNode("text", { class: "text2" }, "\\n早发现 早治疗 您身边的健康呵护使者 ")
      ]),
      vue.createElementVNode("view", { style: { "height": "5.5%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "buttonNextWrapp" }, [
        vue.createElementVNode("button", {
          class: "buttonNext",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
        }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "font-size": "32rpx", "line-height": "22px", "font-weight": "600" }
          }, "下一步")
        ])
      ])
    ]);
  }
  const __easycom_0$c = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$17], ["__scopeId", "data-v-dcaec3a2"], ["__file", "F:/code/qq-doctor/components/stepOne/stepOne.vue"]]);
  const _sfc_main$17 = {
    props: {
      current: Number
      //
    },
    data() {
      return {};
    },
    methods: {
      handleClick() {
        let index = this.$props.current + 1;
        this.$emit("processedIndex", index);
      }
    }
  };
  function _sfc_render$16(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "secondStep" }, [
      vue.createCommentVNode(' 		<view class="goBackIcon">\r\n			<navigator url="/pages/registrationWizard/firstStep/firstStep">\r\n				<image mode="scaleToFill" class="i1" src="../../../static/img/guide/goback.png"></image>\r\n			</navigator>\r\n		</view> '),
      vue.createElementVNode("view", { class: "containerUp" }, [
        vue.createElementVNode("image", {
          src: "/static/img/guide/guide2.png",
          style: { "width": "100%", "height": "100%" }
        })
      ]),
      vue.createCommentVNode(" 空白填充 "),
      vue.createElementVNode("view", { style: { "height": "3.5%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "content1" }, [
        vue.createElementVNode("text", { class: "text1" }, "功能齐全"),
        vue.createElementVNode("text", { class: "text2" }, "\\n以病人的需求全方面的为你提供就诊"),
        vue.createElementVNode("text", { class: "text2" }, "\\n以及挂号服务")
      ]),
      vue.createCommentVNode(" 空白填充 "),
      vue.createElementVNode("view", { style: { "height": "10.2%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "buttonNextWrapp" }, [
        vue.createElementVNode("button", {
          class: "buttonNext",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
        }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "font-size": "32rpx", "line-height": "22px", "font-weight": "600" }
          }, "下一步")
        ])
      ])
    ]);
  }
  const __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$16], ["__scopeId", "data-v-bb0d5cf2"], ["__file", "F:/code/qq-doctor/components/stepTwo/stepTwo.vue"]]);
  const _sfc_main$16 = {
    props: {
      current: Number
      //
    },
    data() {
      return {};
    },
    methods: {
      handleClick() {
        let index = this.$props.current + 1;
        this.$emit("processedIndex", index);
      }
    }
  };
  function _sfc_render$15(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "thirdStep" }, [
      vue.createElementVNode("view", { class: "containerUp" }, [
        vue.createElementVNode("image", {
          src: "/static/img/guide/guide3.png",
          style: { "width": "100%", "height": "100%" }
        })
      ]),
      vue.createCommentVNode(" 空白填充 "),
      vue.createElementVNode("view", { style: { "height": "3.5%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "content1" }, [
        vue.createElementVNode("text", { class: "text1" }, "剖析您的X光图片"),
        vue.createElementVNode("text", { class: "text2" }, "\\n优化您的就诊体验,医生得以有更加全面的"),
        vue.createElementVNode("text", { class: "text2" }, "\\n认识病情的方式")
      ]),
      vue.createCommentVNode(" 空白填充 "),
      vue.createElementVNode("view", { style: { "height": "10.2%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "buttonNextWrapp" }, [
        vue.createElementVNode("button", {
          class: "buttonNext",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
        }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "font-size": "32rpx", "line-height": "22px", "font-weight": "600" }
          }, "下一步")
        ])
      ])
    ]);
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["render", _sfc_render$15], ["__scopeId", "data-v-7ad89ffa"], ["__file", "F:/code/qq-doctor/components/stepThree/stepThree.vue"]]);
  const _sfc_main$15 = {
    data() {
      return {
        current: 0
        // 当前轮播图索引
      };
    },
    methods: {
      goToNext() {
        this.current += 1;
      },
      navTo() {
        uni.reLaunch({
          url: "/pages/main/mainfront"
        });
      }
    }
  };
  function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "fourthStep" }, [
      vue.createElementVNode("view", { class: "containerUp" }, [
        vue.createElementVNode("image", {
          src: "/static/img/guide/guide4.png",
          style: { "width": "100%", "height": "100%" }
        })
      ]),
      vue.createCommentVNode(" 		空白填充 "),
      vue.createElementVNode("view", { style: { "height": "1.5%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "content1" }, [
        vue.createElementVNode("text", { class: "text1" }, "线下挂号与治疗"),
        vue.createElementVNode("text", { class: "text2" }, "\\n线上在线交流诊断全免费,初步确认病情并"),
        vue.createElementVNode("text", { class: "text2" }, "\\n预约线下挂号与治疗")
      ]),
      vue.createCommentVNode(" 空白填充 "),
      vue.createElementVNode("view", { style: { "height": "9.5%", "width": "100%" } }),
      vue.createElementVNode("view", { class: "buttonNextWrapp" }, [
        vue.createElementVNode("button", {
          class: "buttonNext",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.navTo())
        }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "font-size": "32rpx", "line-height": "22px", "font-weight": "600" }
          }, "开始您的体验")
        ])
      ])
    ]);
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["render", _sfc_render$14], ["__scopeId", "data-v-fcd045e2"], ["__file", "F:/code/qq-doctor/components/stepFour/stepFour.vue"]]);
  const _sfc_main$14 = {
    name: "UniSwiperDot",
    emits: ["clickItem"],
    props: {
      info: {
        type: Array,
        default() {
          return [];
        }
      },
      current: {
        type: Number,
        default: 0
      },
      dotsStyles: {
        type: Object,
        default() {
          return {};
        }
      },
      // 类型 ：default(默认) indexes long nav
      mode: {
        type: String,
        default: "default"
      },
      // 只在 nav 模式下生效，变量名称
      field: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dots: {
          width: 6,
          height: 6,
          bottom: 10,
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, .3)",
          border: "1px rgba(0, 0, 0, .3) solid",
          selectedBackgroundColor: "#333",
          selectedBorder: "1px rgba(0, 0, 0, .9) solid"
        }
      };
    },
    watch: {
      dotsStyles(newVal) {
        this.dots = Object.assign(this.dots, this.dotsStyles);
      },
      mode(newVal) {
        if (newVal === "indexes") {
          this.dots.width = 14;
          this.dots.height = 14;
        } else {
          this.dots.width = 6;
          this.dots.height = 6;
        }
      }
    },
    created() {
      if (this.mode === "indexes") {
        this.dots.width = 12;
        this.dots.height = 12;
      }
      this.dots = Object.assign(this.dots, this.dotsStyles);
    },
    methods: {
      clickItem(index) {
        this.$emit("clickItem", index);
      }
    }
  };
  function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-swiper__warp" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.mode === "default" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "default"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                style: vue.normalizeStyle({
                  "width": (index === $props.current ? $data.dots.width * 2 : $data.dots.width) + "px",
                  "height": $data.dots.width / 2 + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border-radius": "0px"
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-bar"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "dot" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "dot"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                style: vue.normalizeStyle({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item"
              }, null, 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "round" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box",
          key: "round"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                class: vue.normalizeClass([[index === $props.current && "uni-swiper__dots-long"], "uni-swiper__dots-item"]),
                style: vue.normalizeStyle({
                  "width": (index === $props.current ? $data.dots.width * 3 : $data.dots.width) + "px",
                  "height": $data.dots.height + "px",
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index
              }, null, 14, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "nav" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: "nav",
          style: vue.normalizeStyle({ "background-color": $props.dotsStyles.backgroundColor, "bottom": "0" }),
          class: "uni-swiper__dots-box uni-swiper__dots-nav"
        },
        [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "color": $props.dotsStyles.color }),
              class: "uni-swiper__dots-nav-item"
            },
            vue.toDisplayString($props.current + 1 + "/" + $props.info.length + " " + $props.info[$props.current][$props.field]),
            5
            /* TEXT, STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.mode === "indexes" ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: "indexes",
          style: vue.normalizeStyle({ "bottom": $data.dots.bottom + "px" }),
          class: "uni-swiper__dots-box"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.info, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                onClick: ($event) => $options.clickItem(index),
                style: vue.normalizeStyle({
                  "width": $data.dots.width + "px",
                  "height": $data.dots.height + "px",
                  "color": index === $props.current ? $data.dots.selectedColor : $data.dots.color,
                  "background-color": index !== $props.current ? $data.dots.backgroundColor : $data.dots.selectedBackgroundColor,
                  "border": index !== $props.current ? $data.dots.border : $data.dots.selectedBorder
                }),
                key: index,
                class: "uni-swiper__dots-item uni-swiper__dots-indexes"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-swiper__dots-indexes-text" },
                  vue.toDisplayString(index + 1),
                  1
                  /* TEXT */
                )
              ], 12, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$13], ["__scopeId", "data-v-0667e3db"], ["__file", "F:/code/qq-doctor/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  const _sfc_main$13 = {
    data() {
      return {
        info: [
          {
            content: "内容 A"
          },
          {
            content: "内容 B"
          },
          {
            content: "内容 C"
          },
          {
            content: "内容 D"
          }
        ],
        current: 0,
        mode: "round"
      };
    },
    methods: {
      change(e2) {
        this.current = e2.detail.current;
      },
      handleProcessedIndex(Index) {
        this.current = Index;
      }
    }
  };
  function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_stepOne = resolveEasycom(vue.resolveDynamicComponent("stepOne"), __easycom_0$c);
    const _component_stepTwo = resolveEasycom(vue.resolveDynamicComponent("stepTwo"), __easycom_1$7);
    const _component_stepThree = resolveEasycom(vue.resolveDynamicComponent("stepThree"), __easycom_2$2);
    const _component_stepFour = resolveEasycom(vue.resolveDynamicComponent("stepFour"), __easycom_3$2);
    const _component_uni_swiper_dot = resolveEasycom(vue.resolveDynamicComponent("uni-swiper-dot"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(_component_uni_swiper_dot, {
        info: $data.info,
        current: $data.current,
        field: "content",
        mode: $data.mode,
        style: { "height": "100%" }
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("swiper", {
            class: "swiper-box",
            onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
            current: $data.current
          }, [
            vue.createElementVNode("swiper-item", {
              class: "swi-item1",
              key: "0"
            }, [
              vue.createVNode(_component_stepOne, {
                style: {},
                current: $data.current,
                onProcessedIndex: $options.handleProcessedIndex
              }, null, 8, ["current", "onProcessedIndex"])
            ]),
            vue.createElementVNode("swiper-item", {
              class: "swi-item1",
              key: "0"
            }, [
              vue.createVNode(_component_stepTwo, {
                current: $data.current,
                onProcessedIndex: $options.handleProcessedIndex
              }, null, 8, ["current", "onProcessedIndex"])
            ]),
            vue.createElementVNode("swiper-item", {
              class: "swi-item1",
              key: "0"
            }, [
              vue.createVNode(_component_stepThree, {
                current: $data.current,
                onProcessedIndex: $options.handleProcessedIndex
              }, null, 8, ["current", "onProcessedIndex"])
            ]),
            vue.createElementVNode("swiper-item", {
              class: "swi-item1",
              key: "0"
            }, [
              vue.createVNode(_component_stepFour, {
                current: $data.current,
                onProcessedIndex: $options.handleProcessedIndex
              }, null, 8, ["current", "onProcessedIndex"])
            ])
          ], 40, ["current"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["info", "current", "mode"])
    ]);
  }
  const PagesRegistrationWizardSlideWizardSlideWizard = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$12], ["__file", "F:/code/qq-doctor/pages/registrationWizard/slideWizard/slideWizard.vue"]]);
  const _sfc_main$12 = {
    name: "selectfront",
    props: {
      selectfrontword: {
        type: String
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "select-front" }, [
      vue.createElementVNode("image", {
        src: "/static/img/select-image1.png",
        mode: "aspectFill",
        class: "left-image"
      }),
      vue.createElementVNode("view", { class: "select-block" }, [
        vue.createElementVNode(
          "text",
          { class: "context" },
          vue.toDisplayString($props.selectfrontword),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("image", {
        src: "/static/img/select-image2.png",
        mode: "aspectFill",
        class: "right-image"
      })
    ]);
  }
  const __easycom_0$b = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$11], ["__scopeId", "data-v-759a3c2f"], ["__file", "F:/code/qq-doctor/components/SelectFront/SelectFront.vue"]]);
  const _sfc_main$11 = {
    name: "todayorder",
    props: {
      item: {
        type: Object,
        default() {
          return {
            pic: "../../static/img/doctor1.png",
            name: "周嘉兴",
            depart: "皮肤科医生",
            ordertime: "18:00-19:00",
            form: "线上问诊"
          };
        }
      }
    },
    data() {
      return {};
    },
    onLoad() {
    }
  };
  function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "today-order" }, [
      vue.createElementVNode("view", { class: "today-block" }, [
        vue.createElementVNode("view", { class: "today-block-left" }, [
          vue.createElementVNode("image", {
            src: $props.item.pic,
            mode: "",
            class: "today-image"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "today-block-right" }, [
          vue.createElementVNode("view", { class: "today-right-up" }, [
            vue.createElementVNode(
              "text",
              { class: "today-name" },
              vue.toDisplayString($props.item.name),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "text",
              { class: "today-depart" },
              vue.toDisplayString($props.item.depart),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "today-right-down" }, [
            vue.createElementVNode("view", { class: "today-right-content" }, [
              vue.createElementVNode("image", {
                src: "/static/img/time.png",
                mode: "aspectFill"
              }),
              vue.createElementVNode(
                "text",
                null,
                "今日" + vue.toDisplayString($props.item.ordertime),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "today-right-content" }, [
              vue.createElementVNode("image", {
                src: "/static/img/form.png",
                mode: "aspectFill"
              }),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.item.form),
                1
                /* TEXT */
              )
            ])
          ])
        ])
      ])
    ]);
  }
  const __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$10], ["__scopeId", "data-v-8878a3e9"], ["__file", "F:/code/qq-doctor/components/TodayOrder/TodayOrder.vue"]]);
  const _sfc_main$10 = {
    name: "funcselect",
    data() {
      return {};
    },
    props: {
      pic: {
        type: String,
        default: "../../static/img/func1.png"
      },
      word: {
        type: String,
        default: "线上咨询"
      }
    }
  };
  function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "func-select" }, [
      vue.createElementVNode("image", { src: $props.pic }, null, 8, ["src"]),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($props.word),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$$], ["__scopeId", "data-v-b5005949"], ["__file", "F:/code/qq-doctor/components/FuncSelect/FuncSelect.vue"]]);
  const _sfc_main$$ = {
    props: {
      item: {
        type: Object,
        default() {
          return {
            id: "1",
            pic: "../../static/img/doctor2.png",
            name: "赵熙蒙",
            depart: "眼科",
            hospital: "赣州市第一人民医院",
            evaluate: "5",
            evaluatenum: "762",
            status: "0"
          };
        }
      }
    },
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {
      evaluateValue() {
        return parseInt(this.item.evaluate);
      },
      getStarImage(index) {
        if (index <= this.evaluateValue()) {
          return "../../static/img/stars.png";
        } else {
          return "../../static/img/star.png";
        }
      },
      statusValue() {
        return parseInt(this.item.status);
      }
    }
  };
  function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "doctor-info" }, [
      vue.createElementVNode("image", {
        src: $props.item.pic,
        mode: "aspectFit"
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "doctor-info-detail" }, [
        vue.createElementVNode(
          "view",
          { class: "doctor-info-detail-title" },
          vue.toDisplayString($props.item.name) + "医生",
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          { class: "doctor-info-detail-content" },
          vue.toDisplayString($props.item.depart) + " " + vue.toDisplayString($props.item.hospital),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "doctor-info-detail-footer" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(5, (index) => {
              return vue.createElementVNode("image", {
                key: index,
                src: $options.getStarImage(index),
                mode: "aspectFill"
              }, null, 8, ["src"]);
            }),
            64
            /* STABLE_FRAGMENT */
          )),
          vue.createElementVNode(
            "text",
            null,
            "(" + vue.toDisplayString($props.item.evaluatenum) + ")",
            1
            /* TEXT */
          ),
          $options.statusValue() == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "doctor-online"
          }, " 在线 ")) : vue.createCommentVNode("v-if", true),
          $options.statusValue() == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "doctor-line"
          }, " 离线 ")) : vue.createCommentVNode("v-if", true)
        ])
      ])
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$_], ["__scopeId", "data-v-ea8344e9"], ["__file", "F:/code/qq-doctor/components/DoctorInfo/DoctorInfo.vue"]]);
  const _sfc_main$_ = {
    data() {
      return {
        time: 0,
        username: "熙蒙",
        doctorinfolist: [
          {
            //6位医院号码以及其注册顺序（例如这个就是31511所医院的第一名医生）
            did: "0315111",
            pic: "../../static/img/doctor3.png",
            name: "安俊禹",
            depart: "神经内科",
            hospital: "赣州市第二人民医院",
            evaluate: "4",
            evaluatenum: "223",
            status: "1"
          },
          {
            did: "0315121",
            pic: "../../static/img/doctor2.png",
            name: "赵熙蒙",
            depart: "眼科",
            hospital: "赣州市第一人民医院",
            evaluate: "5",
            evaluatenum: "762",
            status: "0"
          }
        ]
      };
    },
    onLoad() {
      this.time = getGreeting();
    },
    methods: {
      getDetail(id) {
        uni.navigateTo({
          url: `../../pages/main/doctordetail?did=${id}`
        });
      },
      goVac() {
        uni.navigateTo({
          url: "/pages/main/vaccine"
        });
      },
      goDis() {
        uni.navigateTo({
          url: "/pages/main/diseaseknowledge"
        });
      },
      goHos() {
        uni.switchTab({
          url: "/pages/map/mapfront"
        });
      },
      goChe() {
        uni.navigateTo({
          url: "/pages/main/check"
        });
      },
      goTreat() {
        uni.navigateTo({
          url: "/pages/main/treatment"
        });
      },
      goOnl() {
        uni.navigateTo({
          url: "/pages/main/doctoronline"
        });
      },
      goIsbn() {
        uni.navigateTo({
          url: "/pages/main/isbn"
        });
      }
    }
  };
  function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SelectFront = resolveEasycom(vue.resolveDynamicComponent("SelectFront"), __easycom_0$b);
    const _component_TodayOrder = resolveEasycom(vue.resolveDynamicComponent("TodayOrder"), __easycom_1$6);
    const _component_FuncSelect = resolveEasycom(vue.resolveDynamicComponent("FuncSelect"), __easycom_2$1);
    const _component_DoctorInfo = resolveEasycom(vue.resolveDynamicComponent("DoctorInfo"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainfront" }, [
      vue.createVNode(_component_SelectFront, { selectfrontword: "请输入您的病症或者病情" }),
      vue.createElementVNode("view", { class: "nullblock" }),
      vue.createElementVNode("view", { class: "title" }, [
        $data.time == 0 ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "time-title"
        }, "早上")) : vue.createCommentVNode("v-if", true),
        $data.time == 1 ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "time-title"
        }, "下午")) : vue.createCommentVNode("v-if", true),
        $data.time == 2 ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 2,
          class: "time-title"
        }, "晚上")) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "text",
          { class: "notime-title" },
          "好 " + vue.toDisplayString($data.username),
          1
          /* TEXT */
        ),
        vue.createElementVNode("p"),
        vue.createElementVNode("text", { class: "title-word" }, "今天感觉怎么样?")
      ]),
      (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList(2, (item, index) => {
          return vue.createVNode(_component_TodayOrder);
        }),
        64
        /* STABLE_FRAGMENT */
      )),
      vue.createElementVNode("view", { class: "func-block" }, [
        vue.createVNode(_component_FuncSelect, { onClick: $options.goOnl }, null, 8, ["onClick"]),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func2.png",
          word: "疾病知识",
          onClick: $options.goDis
        }, null, 8, ["onClick"]),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func3.png",
          word: "诊断结果"
        }),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func4.png",
          word: "附近医院",
          onClick: $options.goHos
        }, null, 8, ["onClick"]),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func5.png",
          word: "检查",
          onClick: $options.goChe
        }, null, 8, ["onClick"]),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func6.png",
          word: "治疗",
          onClick: $options.goTreat
        }, null, 8, ["onClick"]),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func7.png",
          word: "科普号",
          onClick: $options.goIsbn
        }, null, 8, ["onClick"]),
        vue.createVNode(_component_FuncSelect, {
          pic: "../../static/img/func8.png",
          word: "疫苗",
          onClick: $options.goVac
        }, null, 8, ["onClick"])
      ]),
      vue.createElementVNode("view", { class: "mid-word" }, [
        vue.createElementVNode("text", { class: "mid-word1" }, "本地医生"),
        vue.createElementVNode("text", { class: "mid-word2" }, "附近")
      ]),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.doctorinfolist, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.id
          }, [
            vue.createVNode(_component_DoctorInfo, {
              item,
              onClick: ($event) => $options.getDetail(item.did)
            }, null, 8, ["item", "onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesMainMainfront = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$Z], ["__scopeId", "data-v-c9934975"], ["__file", "F:/code/qq-doctor/pages/main/mainfront.vue"]]);
  const _sfc_main$Z = {
    name: "selectfront",
    props: {
      selectfrontword: String,
      title: String,
      prompt: String
    },
    data() {
      return {
        keyword: ""
      };
    },
    methods: {
      search() {
        formatAppLog("log", "at components/SelectFrontBlue/SelectFrontBlue.vue:38", "Searching:", this.keyword);
        uni.navigateTo({
          url: "/pages/map/nearHosp/nearHosp"
        });
      }
    }
  };
  function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "SFBcontainerWrapp" }, [
      vue.createCommentVNode('   <view class="sfbTob">\r\n			<view class="">{{title}}</view>\r\n			\r\n		</view> '),
      vue.createElementVNode("view", { class: "SFBcontainer" }, [
        vue.createElementVNode("image", {
          src: "/static/img/nearHosp/shizi1.png",
          mode: "aspectFill",
          class: "left-image"
        }),
        vue.createElementVNode("input", {
          type: "text",
          class: "select-block",
          placeholder: $props.prompt,
          "confirm-type": "search",
          onConfirm: _cache[0] || (_cache[0] = (...args) => $options.search && $options.search(...args)),
          value: $data.keyword,
          onInput: _cache[1] || (_cache[1] = ($event) => $data.keyword = $event.target.value)
        }, null, 40, ["placeholder", "value"]),
        vue.createElementVNode("image", {
          src: "/static/img/nearHosp/loudou1.png",
          mode: "aspectFill",
          class: "right-image"
        })
      ])
    ]);
  }
  const __easycom_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Y], ["__scopeId", "data-v-528a3c29"], ["__file", "F:/code/qq-doctor/components/SelectFrontBlue/SelectFrontBlue.vue"]]);
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$Y = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$X], ["__scopeId", "data-v-d31e1c47"], ["__file", "F:/code/qq-doctor/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$X = {
    name: "UniRate",
    props: {
      isFill: {
        // 星星的类型，是否镂空
        type: [Boolean, String],
        default: true
      },
      color: {
        // 星星未选中的颜色
        type: String,
        default: "#ececec"
      },
      activeColor: {
        // 星星选中状态颜色
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        // 星星禁用状态颜色
        type: String,
        default: "#c0c0c0"
      },
      size: {
        // 星星的大小
        type: [Number, String],
        default: 24
      },
      value: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      modelValue: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      max: {
        // 最大评分
        type: [Number, String],
        default: 5
      },
      margin: {
        // 星星的间距
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否可点击
        type: [Boolean, String],
        default: false
      },
      readonly: {
        // 是否只读
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        // 是否显示半星
        type: [Boolean, String],
        default: false
      },
      touchable: {
        // 是否支持滑动手势
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i2 = 0; i2 < this.max; i2++) {
          if (floorValue > i2) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i2) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e2) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e2) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e2.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e2) {
      },
      mousemove(e2) {
      },
      mouseleave(e2) {
      },
      /**
       * 获取星星个数
       */
      _getRateCount(clientX) {
        const _this = this;
        this._getSize(function() {
          const size = Number(_this.size);
          if (isNaN(size)) {
            return new Error("size 属性只能设置为数字");
          }
          const rateMoveRange = clientX - _this._rateBoxLeft;
          let index = parseInt(rateMoveRange / (size + _this.marginNumber));
          index = index < 0 ? 0 : index;
          index = index > _this.max ? _this.max : index;
          const range = parseInt(rateMoveRange - (size + _this.marginNumber) * index);
          let value = 0;
          if (_this._oldValue === index && !_this.PC)
            return;
          _this._oldValue = index;
          if (_this.allowHalf) {
            if (range > size / 2) {
              value = index + 1;
            } else {
              value = index + 0.5;
            }
          } else {
            value = index + 1;
          }
          value = Math.max(0.5, Math.min(value, _this.max));
          _this.valueSync = value;
          _this._onChange();
        });
      },
      /**
       * 触发动态修改
       */
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      /**
       * 获取星星距离屏幕左侧距离
       */
      _getSize(fn) {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
            fn && fn();
          }
        });
      }
    }
  };
  function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          ref: "uni-rate",
          class: "uni-rate"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.stars, (star, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
                  style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
                  key: index,
                  onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
                  onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
                  onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
                  onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    size: $props.size,
                    type: $props.isFill ? "star-filled" : "star"
                  }, null, 8, ["color", "size", "type"]),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ width: star.activeWitch }),
                      class: "uni-rate__icon-on"
                    },
                    [
                      vue.createVNode(_component_uni_icons, {
                        color: $props.disabled ? $props.disabledColor : $props.activeColor,
                        size: $props.size,
                        type: "star-filled"
                      }, null, 8, ["color", "size"])
                    ],
                    4
                    /* STYLE */
                  )
                ],
                38
                /* CLASS, STYLE, HYDRATE_EVENTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$W], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "F:/code/qq-doctor/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const _sfc_main$W = {
    props: {
      item: {
        hid: "2",
        pic: "../../static/img/nearHosp/hosp2.png",
        hospital: "赣州市第二人民医院",
        distance: 2.5,
        evaluate: "5",
        status: "0",
        address: "江西省赣州市章贡区789号"
      }
    },
    data() {
      return {};
    },
    methods: {
      statusValue() {
        return parseInt(this.item.status);
      }
    }
  };
  function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "hospInfoWrapp" }, [
      vue.createCommentVNode(" 医院图片 "),
      vue.createElementVNode("image", {
        src: $props.item.pic,
        mode: "",
        class: "hospIcon"
      }, null, 8, ["src"]),
      vue.createCommentVNode(" 总体右侧的医院信息 "),
      vue.createElementVNode("view", { class: "hospTextContain" }, [
        vue.createCommentVNode(" 医院文字信息 "),
        vue.createElementVNode("view", { class: "hospText" }, [
          vue.createElementVNode(
            "text",
            { class: "hospText1" },
            vue.toDisplayString($props.item.hospital),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "text",
            { class: "hospText2" },
            "\\n" + vue.toDisplayString($props.item.address),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "hopsFucWrapp" }, [
          vue.createElementVNode("view", { class: "hospRateAndLocation" }, [
            vue.createCommentVNode(" 评分 "),
            vue.createElementVNode("view", { class: "rate" }, [
              vue.createVNode(_component_uni_rate, {
                readonly: true,
                value: $props.item.evaluate,
                "uni-rate": "",
                size: "15",
                class: "rateSy"
              }, null, 8, ["value"])
            ]),
            vue.createCommentVNode(" 定位 "),
            vue.createElementVNode("image", {
              src: "/static/img/nearHosp/location.png",
              mode: "",
              class: "locationIcon"
            }),
            vue.createCommentVNode(" 距离 "),
            vue.createElementVNode(
              "text",
              { class: "locationText" },
              vue.toDisplayString($props.item.distance) + "km",
              1
              /* TEXT */
            )
          ]),
          vue.createCommentVNode(" 是否营业的展示 "),
          vue.createElementVNode("view", { class: "hospLineWarpp" }, [
            $options.statusValue() == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "hosp-online"
            }, " 营业 ")) : vue.createCommentVNode("v-if", true),
            $options.statusValue() == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "hosp-line"
            }, " 未开放 ")) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ])
    ]);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$V], ["__scopeId", "data-v-9da5c65f"], ["__file", "F:/code/qq-doctor/components/hospitalInfo/hospitalInfo.vue"]]);
  const _sfc_main$V = {
    data() {
      return {
        // // 医院信息列表、
        hospitalInfoList: [
          {
            hid: "1",
            pic: "../../static/img/nearHosp/hosp2.png",
            hospital: "赣州市第一人民医院",
            distance: "2.5",
            evaluate: "4",
            status: "0",
            address: "江西省赣州市章贡区789号"
          },
          {
            hid: "2",
            pic: "../../static/img/nearHosp/hosp2.png",
            hospital: "赣州市第二人民医院",
            distance: "5",
            evaluate: "5",
            status: "1",
            address: "江西省赣州市章贡区787号"
          },
          {
            hid: "3",
            pic: "../../static/img/nearHosp/hosp2.png",
            hospital: "赣州市第三人民医院",
            distance: "4",
            evaluate: "3",
            status: "1",
            address: "江西省赣州市章贡区786号"
          },
          {
            hid: "4",
            pic: "../../static/img/nearHosp/hosp2.png",
            hospital: "赣州市第四人民医院",
            distance: "25",
            evaluate: "3",
            status: "1",
            address: "江西省赣州市章贡区766号"
          }
        ],
        // 地图
        id: 0,
        // 使用 marker点击事件 需要填写id
        title: "map",
        latitude: 39.909,
        longitude: 116.39742,
        covers: [{
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: "../../../static/location.png"
        }, {
          latitude: 39.9,
          longitude: 116.39,
          iconPath: "../../../static/location.png"
        }]
      };
    },
    methods: {
      navDetail(hid) {
        uni.navigateTo({
          url: "/pages/map/hospDetails/hospDetails?hid=" + hid
        });
      }
    }
  };
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SelectFrontBlue = resolveEasycom(vue.resolveDynamicComponent("SelectFrontBlue"), __easycom_0$a);
    const _component_hospitalInfo = resolveEasycom(vue.resolveDynamicComponent("hospitalInfo"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_SelectFrontBlue, {
        prompt: "  请输入医院名",
        class: "setFront"
      }),
      vue.createCommentVNode(' 	<SelectFront selectfrontword="请输入您的病症或者病情"></Selectfront> '),
      vue.createCommentVNode(" 空白填充 "),
      vue.createElementVNode("view", { style: { "height": "125rpx", "width": "100%" } }),
      vue.createCommentVNode(" 地图 "),
      vue.createElementVNode("view", { class: "mapWrapp" }, [
        vue.createElementVNode("map", {
          class: "mapGD",
          latitude: $data.latitude,
          longitude: $data.longitude,
          markers: $data.covers
        }, null, 8, ["latitude", "longitude", "markers"])
      ]),
      vue.createElementVNode("view", { class: "nearTextWrapp" }, [
        vue.createElementVNode("text", { class: "nearText-word1" }, "附近医院"),
        vue.createElementVNode("text", { class: "nearText-word2" }, "附近")
      ]),
      vue.createCommentVNode(' @click.native="getDetail(item.hid)" '),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.hospitalInfoList, (item) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "hospWarpp",
            key: item.hid
          }, [
            vue.createVNode(_component_hospitalInfo, {
              item,
              onClick: ($event) => $options.navDetail(item.hid)
            }, null, 8, ["item", "onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesMapMapfront = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$U], ["__scopeId", "data-v-f549c52e"], ["__file", "F:/code/qq-doctor/pages/map/mapfront.vue"]]);
  const _sfc_main$U = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMedicalMedicalfront = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$T], ["__file", "F:/code/qq-doctor/pages/medical/medicalfront.vue"]]);
  const _sfc_main$T = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index) {
        if (this.currentIndex !== index) {
          this.currentIndex = index;
          this.$emit("clickItem", {
            currentIndex: index
          });
        }
      }
    }
  };
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
        style: vue.normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor })
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.values, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass([[
                $props.styleType === "text" ? "" : "segmented-control__item--button",
                index === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
                index === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
                index === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
              ], "segmented-control__item"]),
              key: index,
              style: vue.normalizeStyle({ backgroundColor: index === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index === $data.currentIndex && ($props.styleType === "text" || $props.styleType === "button") ? $props.activeColor : "#d9d9d9" }),
              onClick: ($event) => $options._onClick(index)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  {
                    style: vue.normalizeStyle({ color: index === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
                    class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index === $data.currentIndex ? "segmented-control__item--text" : ""])
                  },
                  vue.toDisplayString(item),
                  7
                  /* TEXT, CLASS, STYLE */
                )
              ])
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$S], ["__scopeId", "data-v-86aa1171"], ["__file", "F:/code/qq-doctor/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  const _sfc_main$S = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$R], ["__scopeId", "data-v-637fd36b"], ["__file", "F:/code/qq-doctor/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const _sfc_main$R = {
    data() {
      return {
        items: ["全部", "待付款", "待就诊", "待评价", "退款"],
        current: 0,
        // 订单是否完成
        state1: true,
        // 订单是否使用
        state2: false,
        //  退款中
        state3: false,
        // 待付款
        state4: false,
        // 待评价
        state5: false,
        keyword: "",
        // 订单是否支付
        isPay: false,
        // 是否退款
        refund: false,
        // 查看详情
        detail: false,
        list: ["1", "2", "3", "4", "5"]
      };
    },
    methods: {
      onClickItem(e2) {
        if (this.current !== e2.currentIndex) {
          this.current = e2.currentIndex;
        }
      },
      navToOrderDetails() {
        uni.navigateTo({
          url: "orderDetail/orderDetail"
        });
      },
      navToDigRes() {
        uni.navigateTo({
          url: "/pages/order/diagnosticResults/diagnosticResults"
        });
      },
      navToRate() {
        uni.navigateTo({
          url: "evaluateOrders/evaluateOrders"
        });
      }
    }
  };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0$7);
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "uni-padding-wrap" }, [
        vue.createElementVNode("view", { class: "seachWrapp" }, [
          vue.createElementVNode("view", { class: "SFBcontainer" }, [
            vue.createElementVNode("image", {
              src: "/static/img/nearHosp/shizi1.png",
              mode: "aspectFill",
              class: "left-image"
            }),
            vue.createElementVNode("input", {
              type: "text",
              class: "select-block",
              placeholder: " 搜索我的订单",
              "confirm-type": "search",
              value: $data.keyword,
              onInput: _cache[0] || (_cache[0] = ($event) => $data.keyword = $event.target.value)
            }, null, 40, ["value"]),
            vue.createElementVNode("image", {
              src: "/static/img/order/vector.png",
              mode: "",
              class: "right-image"
            })
          ])
        ]),
        vue.createVNode(_component_uni_segmented_control, {
          current: $data.current,
          values: $data.items,
          onClickItem: $options.onClickItem,
          styleType: "text",
          style: { "z-index": "1" }
        }, null, 8, ["current", "values", "onClickItem"])
      ]),
      vue.createVNode(_component_uni_section, {
        title: "",
        type: "",
        class: "sectionWrapp"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "content" }, [
            $data.current === 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
              vue.createCommentVNode(' 	<view class="" style="margin-top: 200rpx;background-color: white;"></view> '),
              vue.createElementVNode("view", {
                class: "",
                style: { "margin-top": "250rpx" }
              }),
              vue.createCommentVNode(" 已完成 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "orderOneWrapp" }, [
                    vue.createElementVNode("view", { class: "orderOne" }, [
                      vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                      vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                        vue.createElementVNode("view", { class: "orderHospText" }, [
                          vue.createTextVNode(" 赣州市第一人民医院 "),
                          vue.createElementVNode("image", {
                            src: "/static/img/order/goRight.png",
                            mode: "",
                            class: "descIcon",
                            onClick: _cache[1] || (_cache[1] = ($event) => $options.navToOrderDetails())
                          })
                        ]),
                        $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "orderState"
                        }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                        $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "orderState"
                        }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                        $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "orderState"
                        }, " 退款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "orderState"
                        }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "orderState"
                        }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createCommentVNode(" 第二部分 "),
                      vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                        vue.createCommentVNode(" 医生照片 "),
                        vue.createElementVNode("view", { class: "docIconWrapp" }, [
                          vue.createElementVNode("image", {
                            src: "/static/img/order/docIcon.png",
                            mode: "",
                            class: "docIcon"
                          })
                        ]),
                        vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                        vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                          vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                          vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                            vue.createElementVNode("text", null, "眼科线下挂号")
                          ]),
                          vue.createElementVNode("view", { class: "moneyWrapp" }, [
                            vue.createElementVNode("text", null, "实付: ￥27.00"),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "resButton",
                              onClick: _cache[2] || (_cache[2] = ($event) => $options.navToDigRes())
                            }, [
                              vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                            ])) : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.createElementVNode("view", { class: "buttonWrapp" }, [
                            vue.createCommentVNode(" 第一个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "delButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "删除订单")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode("  "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 1,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "售后服务")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 2,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "找朋友付")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 3,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 4,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款进程")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 第三个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 5,
                              class: "rateButton",
                              onClick: _cache[3] || (_cache[3] = ($event) => $options.navToRate())
                            }, [
                              vue.createElementVNode("text", { class: "" }, "评价")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 6,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "订单信息")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 7,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "撤销退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 8,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "继续付款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 9,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "查看详情")
                            ])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              vue.createCommentVNode(" 待评价 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "orderOneWrapp" }, [
                    vue.createElementVNode("view", { class: "orderOne" }, [
                      vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                      vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                        vue.createElementVNode("view", { class: "orderHospText" }, [
                          vue.createTextVNode(" 赣州市第一人民医院 "),
                          vue.createElementVNode("image", {
                            src: "/static/img/order/goRight.png",
                            mode: "",
                            class: "descIcon",
                            onClick: _cache[4] || (_cache[4] = ($event) => $options.navToOrderDetails())
                          })
                        ]),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "orderState"
                        }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                        $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "orderState"
                        }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                        $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "orderState"
                        }, " 退款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "orderState"
                        }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                        !$data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "orderState"
                        }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createCommentVNode(" 第二部分 "),
                      vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                        vue.createCommentVNode(" 医生照片 "),
                        vue.createElementVNode("view", { class: "docIconWrapp" }, [
                          vue.createElementVNode("image", {
                            src: "/static/img/order/docIcon.png",
                            mode: "",
                            class: "docIcon"
                          })
                        ]),
                        vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                        vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                          vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                          vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                            vue.createElementVNode("text", null, "眼科线下挂号")
                          ]),
                          vue.createElementVNode("view", { class: "moneyWrapp" }, [
                            vue.createElementVNode("text", null, "实付: ￥27.00"),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "resButton",
                              onClick: _cache[5] || (_cache[5] = ($event) => $options.navToDigRes())
                            }, [
                              vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                            ])) : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.createElementVNode("view", { class: "buttonWrapp" }, [
                            vue.createCommentVNode(" 第一个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "delButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "删除订单")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode("  "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 1,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "售后服务")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 2,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "找朋友付")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 3,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 4,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款进程")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 第三个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 5,
                              class: "rateButton",
                              onClick: _cache[6] || (_cache[6] = ($event) => $options.navToRate())
                            }, [
                              vue.createElementVNode("text", { class: "" }, "评价")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 6,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "订单信息")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 7,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "撤销退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 8,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "继续付款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 9,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "查看详情")
                            ])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              )),
              vue.createCommentVNode(" 未完成订单 "),
              vue.createElementVNode("view", { class: "orderOneWrapp" }, [
                vue.createElementVNode("view", { class: "orderOne" }, [
                  vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                  vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                    vue.createElementVNode("view", { class: "orderHospText" }, [
                      vue.createTextVNode(" 赣州市第一人民医院 "),
                      vue.createElementVNode("image", {
                        src: "/static/img/order/goRight.png",
                        mode: "",
                        class: "descIcon"
                      })
                    ]),
                    !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "orderState"
                    }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                    !$data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "orderState"
                    }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                    $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "orderState"
                    }, " 退款中 ")) : vue.createCommentVNode("v-if", true),
                    $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 3,
                      class: "orderState"
                    }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                    $data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 4,
                      class: "orderState"
                    }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createCommentVNode(" 第二部分 "),
                  vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                    vue.createCommentVNode(" 医生照片 "),
                    vue.createElementVNode("view", { class: "docIconWrapp" }, [
                      vue.createElementVNode("image", {
                        src: "/static/img/order/docIcon.png",
                        mode: "",
                        class: "docIcon"
                      })
                    ]),
                    vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                    vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                      vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                      vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                        vue.createElementVNode("text", null, "眼科线下挂号")
                      ]),
                      vue.createElementVNode("view", { class: "moneyWrapp" }, [
                        vue.createElementVNode("text", null, "实付: ￥27.00"),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "resButton",
                          onClick: _cache[7] || (_cache[7] = ($event) => _ctx.navToCTRes())
                        }, [
                          vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                        ])) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createElementVNode("view", { class: "buttonWrapp" }, [
                        vue.createCommentVNode(" 第一个按钮 "),
                        $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "delButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "删除订单")
                        ])) : vue.createCommentVNode("v-if", true),
                        vue.createCommentVNode("  "),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "售后服务")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "找朋友付")
                        ])) : vue.createCommentVNode("v-if", true),
                        !$data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "退款")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "退款进程")
                        ])) : vue.createCommentVNode("v-if", true),
                        vue.createCommentVNode(" 第三个按钮 "),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 5,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "评价")
                        ])) : vue.createCommentVNode("v-if", true),
                        !$data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 6,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "订单信息")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 7,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "撤销退款")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 8,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "继续付款")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 9,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "查看详情")
                        ])) : vue.createCommentVNode("v-if", true)
                      ])
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode(" 退款中 "),
              vue.createElementVNode("view", { class: "orderOneWrapp" }, [
                vue.createElementVNode("view", { class: "orderOne" }, [
                  vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                  vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                    vue.createElementVNode("view", { class: "orderHospText" }, [
                      vue.createTextVNode(" 赣州市第一人民医院 "),
                      vue.createElementVNode("image", {
                        src: "/static/img/order/goRight.png",
                        mode: "",
                        class: "descIcon"
                      })
                    ]),
                    !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "orderState"
                    }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                    $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "orderState"
                    }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                    !$data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "orderState"
                    }, " 退款中 ")) : vue.createCommentVNode("v-if", true),
                    $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 3,
                      class: "orderState"
                    }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                    $data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 4,
                      class: "orderState"
                    }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createCommentVNode(" 第二部分 "),
                  vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                    vue.createCommentVNode(" 医生照片 "),
                    vue.createElementVNode("view", { class: "docIconWrapp" }, [
                      vue.createElementVNode("image", {
                        src: "/static/img/order/docIcon.png",
                        mode: "",
                        class: "docIcon"
                      })
                    ]),
                    vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                    vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                      vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                      vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                        vue.createElementVNode("text", null, "眼科线下挂号")
                      ]),
                      vue.createElementVNode("view", { class: "moneyWrapp" }, [
                        vue.createElementVNode("text", null, "实付: ￥27.00"),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "resButton",
                          onClick: _cache[8] || (_cache[8] = ($event) => _ctx.navToCTRes())
                        }, [
                          vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                        ])) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createElementVNode("view", { class: "buttonWrapp" }, [
                        vue.createCommentVNode(" 第一个按钮 "),
                        $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "delButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "删除订单")
                        ])) : vue.createCommentVNode("v-if", true),
                        vue.createCommentVNode("  "),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "售后服务")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "找朋友付")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "退款")
                        ])) : vue.createCommentVNode("v-if", true),
                        !$data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "serButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "退款进程")
                        ])) : vue.createCommentVNode("v-if", true),
                        vue.createCommentVNode(" 第三个按钮 "),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 5,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "评价")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 6,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "订单信息")
                        ])) : vue.createCommentVNode("v-if", true),
                        !$data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 7,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "撤销退款")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 8,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "继续付款")
                        ])) : vue.createCommentVNode("v-if", true),
                        $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 9,
                          class: "rateButton"
                        }, [
                          vue.createElementVNode("text", { class: "" }, "查看详情")
                        ])) : vue.createCommentVNode("v-if", true)
                      ])
                    ])
                  ])
                ])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            $data.current === 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "margin-top": "250rpx" }
              }),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "orderOneWrapp" }, [
                    vue.createElementVNode("view", { class: "orderOne" }, [
                      vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                      vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                        vue.createElementVNode("view", { class: "orderHospText" }, [
                          vue.createTextVNode(" 赣州市第一人民医院 "),
                          vue.createElementVNode("image", {
                            src: "/static/img/order/goRight.png",
                            mode: "",
                            class: "descIcon"
                          })
                        ]),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "orderState"
                        }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                        $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "orderState"
                        }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                        $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "orderState"
                        }, " 退款中 ")) : vue.createCommentVNode("v-if", true),
                        !$data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "orderState"
                        }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "orderState"
                        }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createCommentVNode(" 第二部分 "),
                      vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                        vue.createCommentVNode(" 医生照片 "),
                        vue.createElementVNode("view", { class: "docIconWrapp" }, [
                          vue.createElementVNode("image", {
                            src: "/static/img/order/docIcon.png",
                            mode: "",
                            class: "docIcon"
                          })
                        ]),
                        vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                        vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                          vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                          vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                            vue.createElementVNode("text", null, "眼科线下挂号")
                          ]),
                          vue.createElementVNode("view", { class: "moneyWrapp" }, [
                            vue.createElementVNode("text", null, "实付: ￥27.00"),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "resButton",
                              onClick: _cache[9] || (_cache[9] = ($event) => _ctx.navToCTRes())
                            }, [
                              vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                            ])) : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.createElementVNode("view", { class: "buttonWrapp" }, [
                            vue.createCommentVNode(" 第一个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "delButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "删除订单")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode("  "),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 1,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "售后服务")
                            ])) : vue.createCommentVNode("v-if", true),
                            !$data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 2,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "找朋友付")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 3,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 4,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款进程")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 第三个按钮 "),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 5,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "评价")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 6,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "订单信息")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 7,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "撤销退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            !$data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 8,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "继续付款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 9,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "查看详情")
                            ])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true),
            $data.current === 2 ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "margin-top": "250rpx" }
              }),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "orderOneWrapp" }, [
                    vue.createElementVNode("view", { class: "orderOne" }, [
                      vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                      vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                        vue.createElementVNode("view", { class: "orderHospText" }, [
                          vue.createTextVNode(" 赣州市第一人民医院 "),
                          vue.createElementVNode("image", {
                            src: "/static/img/order/goRight.png",
                            mode: "",
                            class: "descIcon"
                          })
                        ]),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "orderState"
                        }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                        !$data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "orderState"
                        }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                        $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "orderState"
                        }, " 退款中 ")) : vue.createCommentVNode("v-if", true),
                        $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "orderState"
                        }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "orderState"
                        }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createCommentVNode(" 第二部分 "),
                      vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                        vue.createCommentVNode(" 医生照片 "),
                        vue.createElementVNode("view", { class: "docIconWrapp" }, [
                          vue.createElementVNode("image", {
                            src: "/static/img/order/docIcon.png",
                            mode: "",
                            class: "docIcon"
                          })
                        ]),
                        vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                        vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                          vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                          vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                            vue.createElementVNode("text", null, "眼科线下挂号")
                          ]),
                          vue.createElementVNode("view", { class: "moneyWrapp" }, [
                            vue.createElementVNode("text", null, "实付: ￥27.00"),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "resButton",
                              onClick: _cache[10] || (_cache[10] = ($event) => _ctx.navToCTRes())
                            }, [
                              vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                            ])) : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.createElementVNode("view", { class: "buttonWrapp" }, [
                            vue.createCommentVNode(" 第一个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "delButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "删除订单")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode("  第二个"),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 1,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "售后服务")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 2,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "找朋友付")
                            ])) : vue.createCommentVNode("v-if", true),
                            !$data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 3,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 4,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款进程")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 第三个按钮 "),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 5,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "评价")
                            ])) : vue.createCommentVNode("v-if", true),
                            !$data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 6,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "订单信息")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 7,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "撤销退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 8,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "继续付款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 9,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "查看详情")
                            ])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true),
            $data.current === 3 ? (vue.openBlock(), vue.createElementBlock("view", { key: 3 }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "margin-top": "250rpx" }
              }),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "orderOneWrapp" }, [
                    vue.createElementVNode("view", { class: "orderOne" }, [
                      vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                      vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                        vue.createElementVNode("view", { class: "orderHospText" }, [
                          vue.createTextVNode(" 赣州市第一人民医院 "),
                          vue.createElementVNode("image", {
                            src: "/static/img/order/goRight.png",
                            mode: "",
                            class: "descIcon"
                          })
                        ]),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "orderState"
                        }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                        $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "orderState"
                        }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                        $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "orderState"
                        }, " 退款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "orderState"
                        }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                        !$data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "orderState"
                        }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createCommentVNode(" 第二部分 "),
                      vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                        vue.createCommentVNode(" 医生照片 "),
                        vue.createElementVNode("view", { class: "docIconWrapp" }, [
                          vue.createElementVNode("image", {
                            src: "/static/img/order/docIcon.png",
                            mode: "",
                            class: "docIcon"
                          })
                        ]),
                        vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                        vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                          vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                          vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                            vue.createElementVNode("text", null, "眼科线下挂号")
                          ]),
                          vue.createElementVNode("view", { class: "moneyWrapp" }, [
                            vue.createElementVNode("text", null, "实付: ￥27.00"),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "resButton",
                              onClick: _cache[11] || (_cache[11] = ($event) => _ctx.navToCTRes())
                            }, [
                              vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                            ])) : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.createElementVNode("view", { class: "buttonWrapp" }, [
                            vue.createCommentVNode(" 第一个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "delButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "删除订单")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode("  "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 1,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "售后服务")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 2,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "找朋友付")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 3,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 4,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款进程")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 第三个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 5,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "评价")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 6,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "订单信息")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 7,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "撤销退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 8,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "继续付款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 9,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "查看详情")
                            ])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true),
            $data.current === 4 ? (vue.openBlock(), vue.createElementBlock("view", { key: 4 }, [
              vue.createElementVNode("view", {
                class: "",
                style: { "margin-top": "250rpx" }
              }),
              vue.createCommentVNode(" 退款中 "),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "orderOneWrapp" }, [
                    vue.createElementVNode("view", { class: "orderOne" }, [
                      vue.createCommentVNode(" 第一行文字 订单医院和状态 "),
                      vue.createElementVNode("view", { class: "orderHospWrapp" }, [
                        vue.createElementVNode("view", { class: "orderHospText" }, [
                          vue.createTextVNode(" 赣州市第一人民医院 "),
                          vue.createElementVNode("image", {
                            src: "/static/img/order/goRight.png",
                            mode: "",
                            class: "descIcon"
                          })
                        ]),
                        !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "orderState"
                        }, " 已完成 ")) : vue.createCommentVNode("v-if", true),
                        $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 1,
                          class: "orderState"
                        }, " 未使用 ")) : vue.createCommentVNode("v-if", true),
                        !$data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 2,
                          class: "orderState"
                        }, " 退款中 ")) : vue.createCommentVNode("v-if", true),
                        $data.state4 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 3,
                          class: "orderState"
                        }, " 待付款 ")) : vue.createCommentVNode("v-if", true),
                        $data.state5 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 4,
                          class: "orderState"
                        }, " 待评价 ")) : vue.createCommentVNode("v-if", true)
                      ]),
                      vue.createCommentVNode(" 第二部分 "),
                      vue.createElementVNode("view", { class: "orderDescWrapp" }, [
                        vue.createCommentVNode(" 医生照片 "),
                        vue.createElementVNode("view", { class: "docIconWrapp" }, [
                          vue.createElementVNode("image", {
                            src: "/static/img/order/docIcon.png",
                            mode: "",
                            class: "docIcon"
                          })
                        ]),
                        vue.createCommentVNode(" 订单详情 已经诊断结果按钮 "),
                        vue.createElementVNode("view", { class: "orderDescAndButtonWrapp" }, [
                          vue.createElementVNode("view", { class: "creatTimeWrapp" }, " 创建时间: 2023-10-23 21:36 "),
                          vue.createElementVNode("view", { class: "orderWayWrapp" }, [
                            vue.createElementVNode("text", null, "眼科线下挂号")
                          ]),
                          vue.createElementVNode("view", { class: "moneyWrapp" }, [
                            vue.createElementVNode("text", null, "实付: ￥27.00"),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "resButton",
                              onClick: _cache[12] || (_cache[12] = ($event) => _ctx.navToCTRes())
                            }, [
                              vue.createElementVNode("text", { class: "resButtonText" }, "诊断结果")
                            ])) : vue.createCommentVNode("v-if", true)
                          ]),
                          vue.createElementVNode("view", { class: "buttonWrapp" }, [
                            vue.createCommentVNode(" 第一个按钮 "),
                            $data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 0,
                              class: "delButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "删除订单")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode("  "),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 1,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "售后服务")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 2,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "找朋友付")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 3,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            !$data.refund ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 4,
                              class: "serButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "退款进程")
                            ])) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 第三个按钮 "),
                            !$data.state1 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 5,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "评价")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.state2 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 6,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "订单信息")
                            ])) : vue.createCommentVNode("v-if", true),
                            !$data.state3 ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 7,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "撤销退款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.isPay ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 8,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "继续付款")
                            ])) : vue.createCommentVNode("v-if", true),
                            $data.detail ? (vue.openBlock(), vue.createElementBlock("view", {
                              key: 9,
                              class: "rateButton"
                            }, [
                              vue.createElementVNode("text", { class: "" }, "查看详情")
                            ])) : vue.createCommentVNode("v-if", true)
                          ])
                        ])
                      ])
                    ])
                  ]);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesOrderOrderfront = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$Q], ["__scopeId", "data-v-2a87ebe1"], ["__file", "F:/code/qq-doctor/pages/order/orderfront.vue"]]);
  const _sfc_main$Q = {
    data() {
      return {};
    },
    methods: {
      navToCollect() {
        uni.navigateTo({
          url: "/pages/user/collect/collect"
        });
      },
      navToFootprint() {
        uni.navigateTo({
          url: "/pages/user/footprint/footprint"
        });
      },
      navToCT() {
        uni.navigateTo({
          url: "/pages/user/CTInspectionSheet/CTInspectionSheet"
        });
      },
      navToCS() {
        uni.navigateTo({
          url: "customerService/customerService"
        });
      },
      navToPerInfo() {
        uni.navigateTo({
          url: "/pages/user/personalInformation/personalInformation"
        });
      },
      navToPatInfon() {
        uni.navigateTo({
          url: "/pages/user/patientInformation/patientInformation"
        });
      },
      navCommon() {
        uni.navigateTo({
          url: "/pages/user/commonPage/commonPage"
        });
      },
      navPrivce() {
        uni.navigateTo({
          url: "/pages/user/privacyManagement/privacyManagement"
        });
      },
      navToLogin() {
        uni.reLaunch({
          url: "/pages/login/start/start"
        });
      },
      navToPIC() {
        uni.navigateTo({
          url: "/pages/user/personalInformationCollection/personalInformationCollection"
        });
      },
      navToAbout() {
        uni.navigateTo({
          url: "/pages/user/about/about"
        });
      }
    }
  };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "userFront" }, [
      vue.createCommentVNode(" 头像 用户名  客服"),
      vue.createElementVNode("view", { class: "headWrapp" }, [
        vue.createCommentVNode(" 头像 "),
        vue.createElementVNode("view", { class: "headSculptureAndUserWrapp" }, [
          vue.createElementVNode("image", {
            src: "/static/img/user/headSculpture.png",
            mode: "",
            class: "headSculptureImg"
          }),
          vue.createCommentVNode(" 用户名 "),
          vue.createElementVNode("view", { class: "userNameWrapp" }, [
            vue.createElementVNode("text", { class: "userNameText" }, "Simon0414")
          ])
        ]),
        vue.createCommentVNode(" 客服 "),
        vue.createElementVNode("view", { class: "customerServiceWrapp" }, [
          vue.createElementVNode("image", {
            src: "/static/img/user/customerService.png",
            mode: "",
            class: "customerServiceImg",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.navToCS())
          })
        ])
      ]),
      vue.createCommentVNode(" 收藏 足迹 CT检验 我的病例 "),
      vue.createElementVNode("view", { class: "funWrapp" }, [
        vue.createElementVNode("view", { class: "fun" }, [
          vue.createCommentVNode(" 收藏 "),
          vue.createElementVNode("view", {
            class: "collectWrapp",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.navToCollect())
          }, [
            vue.createElementVNode("image", {
              src: "/static/img/user/collect.png",
              mode: "",
              class: "collectImg"
            }),
            vue.createElementVNode("text", null, "收藏")
          ]),
          vue.createCommentVNode(" 足迹 "),
          vue.createElementVNode("view", {
            class: "collectWrapp",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.navToFootprint())
          }, [
            vue.createElementVNode("image", {
              src: "/static/img/user/zuji.png",
              mode: "",
              class: "collectImg"
            }),
            vue.createElementVNode("text", null, "足迹")
          ]),
          vue.createCommentVNode(" CT化验单 "),
          vue.createElementVNode("view", {
            class: "collectWrapp",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.navToCT())
          }, [
            vue.createElementVNode("image", {
              src: "/static/img/user/laboratoryTestReport.png",
              mode: "",
              class: "collectImg"
            }),
            vue.createElementVNode("text", null, "CT检验单")
          ]),
          vue.createCommentVNode(" 我的病例 "),
          vue.createElementVNode("view", { class: "collectWrapp" }, [
            vue.createElementVNode("image", {
              src: "/static/img/user/case.png",
              mode: "",
              class: "collectImg"
            }),
            vue.createElementVNode("text", null, "我的病例")
          ])
        ])
      ]),
      vue.createCommentVNode(" 订单 "),
      vue.createElementVNode("view", { class: "orderAllWrapp" }, [
        vue.createCommentVNode(" 订单 "),
        vue.createElementVNode("view", { class: "ordeWrapp" }, [
          vue.createCommentVNode(" 我的预约订单 "),
          vue.createElementVNode("view", { class: "reservationOrderWrapp" }, [
            vue.createElementVNode("text", { class: "orderText" }, "我的预约订单"),
            vue.createElementVNode("image", {
              src: "/static/img/user/go.png",
              mode: "",
              class: "goImg"
            })
          ]),
          vue.createCommentVNode(" 全部订单 待付款 待就诊 待评价  退款"),
          vue.createElementVNode("view", { class: "fun2Wrapp" }, [
            vue.createCommentVNode(" 全部订单 "),
            vue.createElementVNode("view", { class: "order1" }, [
              vue.createElementVNode("image", {
                src: "/static/img/user/allOrder.png",
                mode: "",
                class: "order1Img"
              }),
              vue.createElementVNode("text", { class: "order1Text" }, "全部订单")
            ]),
            vue.createCommentVNode(" 待付款 "),
            vue.createElementVNode("view", { class: "order1" }, [
              vue.createElementVNode("image", {
                src: "/static/img/user/order2.png",
                mode: "",
                class: "order1Img"
              }),
              vue.createElementVNode("text", { class: "order1Text" }, "待付款")
            ]),
            vue.createCommentVNode(" 待就诊 "),
            vue.createElementVNode("view", { class: "order1" }, [
              vue.createElementVNode("image", {
                src: "/static/img/user/order3.png",
                mode: "",
                class: "order1Img"
              }),
              vue.createElementVNode("text", { class: "order1Text" }, "待就诊")
            ]),
            vue.createCommentVNode(" 待评价 "),
            vue.createElementVNode("view", { class: "order1" }, [
              vue.createElementVNode("image", {
                src: "/static/img/user/order4.png",
                mode: "",
                class: "order1Img"
              }),
              vue.createElementVNode("text", { class: "order1Text" }, "待评价")
            ]),
            vue.createCommentVNode(" 退款 "),
            vue.createElementVNode("view", { class: "order1" }, [
              vue.createElementVNode("image", {
                src: "/static/img/user/order5.png",
                mode: "",
                class: "order1Img"
              }),
              vue.createElementVNode("text", { class: "order1Text" }, "退款")
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" 个人信息 病人信息 "),
      vue.createElementVNode("view", { class: "informationWrapp" }, [
        vue.createCommentVNode("  "),
        vue.createElementVNode("view", { class: "information" }, [
          vue.createElementVNode("view", { class: "informationUp" }, [
            vue.createElementVNode("text", {
              class: "informationUpText1",
              onClick: _cache[4] || (_cache[4] = ($event) => $options.navToPerInfo())
            }, "个人信息"),
            vue.createElementVNode("text", { class: "informationUpText2" }, "\\n头像,昵称查询,修改,管理")
          ]),
          vue.createElementVNode("view", { class: "informationDown" }, [
            vue.createElementVNode("text", {
              class: "informationDownText1",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.navToPatInfon())
            }, "病人信息"),
            vue.createElementVNode("text", { class: "informationDownText2" }, "\\n病人信息查询,修改,管理")
          ])
        ])
      ]),
      vue.createCommentVNode(" 通用设置   明日修改class信息"),
      vue.createElementVNode("view", { class: "settingWrapp" }, [
        vue.createCommentVNode("  "),
        vue.createElementVNode("view", { class: "information" }, [
          vue.createElementVNode("view", { class: "informationUp" }, [
            vue.createElementVNode("text", {
              class: "informationUpText1",
              onClick: _cache[6] || (_cache[6] = ($event) => $options.navCommon())
            }, "通用"),
            vue.createElementVNode("text", { class: "informationUpText2" }, "\\n清空缓存")
          ]),
          vue.createElementVNode("view", { class: "informationUp" }, [
            vue.createElementVNode("text", {
              class: "informationUpText1",
              onClick: _cache[7] || (_cache[7] = ($event) => $options.navPrivce())
            }, "隐私管理"),
            vue.createElementVNode("text", { class: "informationUpText2" }, "\\n应用权限说明、个性化推荐等")
          ]),
          vue.createElementVNode("view", { class: "informationUp" }, [
            vue.createElementVNode("text", {
              class: "informationUpText1",
              onClick: _cache[8] || (_cache[8] = ($event) => $options.navToPIC())
            }, "个人信息收集清单"),
            vue.createElementVNode("text", { class: "informationUpText2" }, "\\n企桥医健信息收集等")
          ]),
          vue.createElementVNode("view", { class: "informationDown" }, [
            vue.createElementVNode("text", {
              class: "informationDownText1",
              onClick: _cache[9] || (_cache[9] = ($event) => $options.navToAbout())
            }, "关于企桥医健"),
            vue.createElementVNode("text", { class: "informationDownText2" }, "\\n版本说明、资质等")
          ])
        ])
      ]),
      vue.createCommentVNode(" 按钮 "),
      vue.createElementVNode("view", { class: "buttonWrapp" }, [
        vue.createElementVNode("button", { class: "button1" }, "切换账号"),
        vue.createElementVNode("button", {
          class: "button2",
          onClick: _cache[10] || (_cache[10] = ($event) => $options.navToLogin())
        }, "退出登录")
      ])
    ]);
  }
  const PagesUserUserfront = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$P], ["__scopeId", "data-v-cb1bd7c9"], ["__file", "F:/code/qq-doctor/pages/user/userfront.vue"]]);
  const _sfc_main$P = {
    data() {
      return {
        item: {
          picurl: "../../static/img/doctor2.png",
          name: "赵熙蒙",
          depart: "眼科",
          hospital: "赣州市第一人民医院",
          star: "256",
          desc: "赵熙蒙医生，毕业于江西理工大学，是赣州市知名的眼科医生，对于病人热情耐心，深入耕耘眼科13年，是非常值得信赖的一名医生，如果您有眼科类疾病，那么找他绝对没错！",
          worktime: "13",
          visits: "1221",
          evaluate: "5"
        },
        did: "0315121"
      };
    },
    onLoad(e2) {
      this.did = e2.did;
    },
    methods: {
      getConnect(did) {
        uni.navigateTo({
          url: `/pages/main/messagetable?did=${did}`
        });
      },
      getOnlineForm(did) {
        uni.navigateTo({
          url: `/pages/main/onlineform?did=${did}&way=online`
        });
      },
      getAppoint(did) {
        uni.navigateTo({
          url: `/pages/main/onlineform?did=${did}&way=appoint`
        });
      }
    }
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "doctor-detail" }, [
      vue.createElementVNode("image", {
        src: $data.item.picurl
      }, null, 8, ["src"]),
      vue.createElementVNode("view", { class: "doctor-detail-title" }, [
        vue.createElementVNode(
          "view",
          { class: "doctor-detail-name" },
          vue.toDisplayString($data.item.name) + "医生 ",
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "doctor-detail-star" }, [
          vue.createElementVNode("view", { class: "doctor-detail-star-image" }, [
            vue.createElementVNode("image", {
              src: "/static/img/collection.png",
              mode: "aspectFit"
            })
          ]),
          vue.createElementVNode(
            "view",
            { class: "doctor-detail-star-content" },
            vue.toDisplayString($data.item.star),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "doctor-detail-depart" }, [
        vue.createTextVNode(
          vue.toDisplayString($data.item.depart) + " ",
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "space" }),
        vue.createTextVNode(
          " " + vue.toDisplayString($data.item.hospital),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode(
        "view",
        { class: "doctor-detail-desc" },
        vue.toDisplayString($data.item.desc),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "doctor-detail-conment" }, [
        vue.createElementVNode("view", { class: "doctor-detail-conment-1" }, [
          vue.createElementVNode("text", { class: "doctor-conment-title" }, "医龄"),
          vue.createElementVNode("text", { class: "doctor-conment-res" }, [
            vue.createTextVNode(
              vue.toDisplayString($data.item.worktime) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "doctor-conment-suffix" }, "年")
          ])
        ]),
        vue.createElementVNode("view", { class: "doctor-detail-conment-2" }, [
          vue.createElementVNode("text", { class: "doctor-conment-title" }, "问诊数"),
          vue.createElementVNode("text", { class: "doctor-conment-res" }, [
            vue.createTextVNode(
              vue.toDisplayString($data.item.visits) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "doctor-conment-suffix" }, "人")
          ])
        ]),
        vue.createElementVNode("view", { class: "doctor-detail-conment-3" }, [
          vue.createElementVNode("text", { class: "doctor-conment-title" }, "评价均分"),
          vue.createElementVNode("text", { class: "doctor-conment-res" }, [
            vue.createTextVNode(
              vue.toDisplayString($data.item.evaluate) + " ",
              1
              /* TEXT */
            ),
            vue.createElementVNode("text", { class: "doctor-conment-suffix" }, "分")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "doctor-detail-clicks" }, [
        vue.createElementVNode("view", {
          class: "doctor-detail-clicks-1",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.getConnect($data.did))
        }, [
          vue.createElementVNode("image", { src: "/static/img/connect1.png" })
        ]),
        vue.createElementVNode("view", {
          class: "doctor-detail-clicks-2",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.getOnlineForm($data.did))
        }, [
          vue.createElementVNode("view", { class: "doctor-detail-click" }, "线上预约")
        ]),
        vue.createElementVNode("view", {
          class: "doctor-detail-clicks-2",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.getAppoint($data.did))
        }, [
          vue.createElementVNode("view", { class: "doctor-detail-click" }, "挂号预约")
        ])
      ])
    ]);
  }
  const PagesMainDoctordetail = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$O], ["__scopeId", "data-v-c2efb099"], ["__file", "F:/code/qq-doctor/pages/main/doctordetail.vue"]]);
  const _sfc_main$O = {
    data() {
      return {
        did: "",
        doctor: {
          pic: "../../static/img/doctor2.png",
          name: "赵熙蒙",
          hospital: "赣州市第一人民医院",
          depart: "眼科"
        },
        patients: [{
          patientId: "001",
          pic: "../../static/img/patient1.png",
          name: "周嘉兴"
        }, {
          patientId: "002",
          pic: "../../static/img/patient2.png",
          name: "赵熙蒙"
        }, {
          patientId: "003",
          pic: "../../static/img/patient3.jpg",
          name: "安俊禹"
        }],
        selectPatient: "001",
        way: "",
        name: "线上表单",
        seletedTime: ""
      };
    },
    onLoad(e2) {
      this.did = e2.did;
      this.way = e2.way;
      if (e2.way == "online") {
        this.name = "线上表单";
      } else {
        this.name = "挂号表单";
      }
      uni.setNavigationBarTitle({
        title: this.name
      });
    },
    onShow() {
      uni.$on("dataBack", (data) => {
        formatAppLog("log", "at pages/main/onlineform.vue:89", data);
      });
    },
    methods: {
      formSubmit: function(e2) {
        formatAppLog("log", "at pages/main/onlineform.vue:95", "form发生了submit事件，携带数据为：" + JSON.stringify(e2.detail.value));
        uni.navigateTo({
          url: `/pages/main/onlineorder?id=4935975230644435337&way=${this.way}`
        });
      },
      addPatient() {
        uni.navigateTo({
          url: "/pages/user/addpatient"
        });
      },
      changePatient(item) {
        this.selectPatient = item.patientId;
      },
      goTime() {
        uni.navigateTo({
          url: `/pages/main/onlineformtime?way=${this.way}?did=${this.did}`
        });
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "onlineform" }, [
      vue.createElementVNode("view", { class: "online-doctor-block" }, [
        vue.createElementVNode("view", { class: "online-doctor-image" }, [
          vue.createElementVNode("image", {
            src: $data.doctor.pic,
            mode: "aspectFill"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "online-doctor-text" }, [
          vue.createElementVNode(
            "view",
            { class: "online-doctor-name" },
            vue.toDisplayString($data.doctor.name) + "医生",
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "online-doctor-dep" },
            vue.toDisplayString($data.doctor.depart) + " " + vue.toDisplayString($data.doctor.hospital) + "医生",
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "online-submit" }, [
        vue.createElementVNode(
          "form",
          {
            onSubmit: _cache[2] || (_cache[2] = (...args) => $options.formSubmit && $options.formSubmit(...args))
          },
          [
            vue.createElementVNode("view", { class: "online-submit-title1" }, "预约信息"),
            vue.createElementVNode("input", {
              type: "text",
              placeholder: "姓名",
              name: "name",
              class: "online-submit-input"
            }),
            vue.createElementVNode("input", {
              type: "tel",
              placeholder: "电话",
              name: "phone",
              class: "online-submit-input"
            }),
            vue.createElementVNode("input", {
              type: "text",
              placeholder: "时间",
              name: "time",
              class: "online-submit-input",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.goTime()),
              "v-model": this.seletedTime
            }, null, 8, ["v-model"]),
            vue.createElementVNode("view", { class: "online-submit-title2" }, "病人信息"),
            vue.createElementVNode("view", { class: "online-patient" }, [
              vue.createElementVNode("view", {
                class: "online-patient-add",
                onClick: _cache[1] || (_cache[1] = ($event) => $options.addPatient())
              }, [
                vue.createElementVNode("view", { class: "online-patiend-add-image" }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/add.png",
                    mode: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "online-patiend-add-text" }, "添加")
              ]),
              vue.createElementVNode("scroll-view", {
                class: "online-patient-view",
                "scroll-x": ""
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.patients, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", { class: "online-patient-view-block" }, [
                      vue.createElementVNode("view", {
                        class: "online-patient-view-block-image",
                        onClick: ($event) => $options.changePatient(item)
                      }, [
                        vue.createElementVNode("image", {
                          src: item.pic,
                          mode: ""
                        }, null, 8, ["src"])
                      ], 8, ["onClick"]),
                      vue.createElementVNode(
                        "view",
                        { class: "online-patient-view-block-word" },
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createElementVNode("button", {
              "form-type": "submit",
              class: "online-patient-submit"
            }, "预约")
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ])
    ]);
  }
  const PagesMainOnlineform = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-fb5b5931"], ["__file", "F:/code/qq-doctor/pages/main/onlineform.vue"]]);
  const _sfc_main$N = {
    data() {
      return {};
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesUserAddpatient = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__file", "F:/code/qq-doctor/pages/user/addpatient.vue"]]);
  const _sfc_main$M = {
    data() {
      return {
        orderInfo: {
          orderId: "4935975230644435337",
          name: "赵熙蒙",
          phone: "18683927916",
          patientName: "周嘉兴",
          pic: "../../static/img/patient1.png",
          price: "41.00"
        },
        remainingTime: 15 * 60,
        // 初始剩余时间为15分钟，单位为秒,
        payway: [{
          pic: "../../static/img/wechat.png",
          way: "微信支付",
          value: "wechat"
        }, {
          pic: "../../static/img/alipay.png",
          way: "支付宝支付",
          value: "alipay"
        }],
        selected: "0",
        selectedValue: "wechat",
        way: "",
        orderId: ""
      };
    },
    onLoad(e2) {
      this.way = e2.way;
      this.orderId = e2.id;
      if (this.way == "online") {
        uni.setNavigationBarTitle({
          title: "线上预约订单"
        });
      } else {
        uni.setNavigationBarTitle({
          title: "挂号预约订单"
        });
      }
      const timer = setInterval(() => {
        this.remainingTime--;
        if (this.remainingTime === 0) {
          clearInterval(timer);
        }
      }, 1e3);
    },
    methods: {
      radioSelect(event) {
        for (let i2 = 0; i2 < this.payway.length; i2++) {
          if (this.payway[i2].value === event.detail.value) {
            this.selected = i2;
            break;
          }
        }
        this.selectedValue = event.detail.value;
      },
      payForOrder(orderId, price) {
        uni.redirectTo({
          url: `/pages/main/onlineordersuccess?id=${this.orderId}&way=${this.way}`
        });
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "onlineorder" }, [
      vue.createElementVNode("view", { class: "onlineorder-info" }, [
        vue.createElementVNode("view", { class: "onlineorder-info-left" }, [
          vue.createElementVNode("view", { style: { "margin-left": "40rpx", "font-size": "32rpx", "margin-top": "10rpx" } }, "订单信息"),
          vue.createElementVNode(
            "view",
            { style: { "margin-bottom": "10rpx", "margin-top": "30rpx", "margin-left": "80rpx", "font-size": "26rpx" } },
            " 姓名:" + vue.toDisplayString($data.orderInfo.name),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { style: { "margin-left": "80rpx", "font-size": "26rpx" } },
            " 电话:" + vue.toDisplayString($data.orderInfo.phone),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { style: { "margin-left": "80rpx", "margin-top": "10rpx font-size: 26rpx" } }, [
            vue.createTextVNode(" 订单号: "),
            vue.createElementVNode("p"),
            vue.createElementVNode(
              "view",
              { style: { "font-size": "26rpx" } },
              vue.toDisplayString($data.orderInfo.orderId),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode(
            "view",
            { style: { "margin-left": "80rpx", "color": "#9E9E9E", "margin-top": "50rpx", "font-size": "26rpx" } },
            " 请在" + vue.toDisplayString($data.remainingTime) + "之内支付订单",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "onlineorder-info-right" }, [
          vue.createElementVNode("view", { style: { "margin-bottom": "10rpx" } }, "病人信息:"),
          vue.createElementVNode("image", {
            src: $data.orderInfo.pic,
            mode: ""
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "view",
            { style: { "margin-left": "50rpx", "color": "#9e9e9e" } },
            vue.toDisplayString($data.orderInfo.patientName),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "onlineorder-pay" }, [
        vue.createElementVNode("scroll-view", { "scroll-y": "" }, [
          vue.createElementVNode(
            "radio-group",
            {
              name: "payway",
              onChange: _cache[0] || (_cache[0] = (...args) => $options.radioSelect && $options.radioSelect(...args))
            },
            [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.payway, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "onlineorder-pay-way",
                    key: item.value
                  }, [
                    vue.createElementVNode("view", { class: "onlineorder-pay-way-context" }, [
                      vue.createElementVNode("image", {
                        src: item.pic
                      }, null, 8, ["src"]),
                      vue.createTextVNode(
                        " " + vue.toDisplayString(item.way),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("label", { class: "onlineorder-pay-way-radio" }, [
                      vue.createElementVNode("radio", {
                        value: item.value,
                        color: "#FFCB45",
                        checked: index == this.selected
                      }, null, 8, ["value", "checked"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            32
            /* HYDRATE_EVENTS */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "onlineorder-pay-submit" }, [
        vue.createElementVNode(
          "view",
          { class: "onlineorder-pay-submit-text" },
          "总计:" + vue.toDisplayString($data.orderInfo.price),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", {
          class: "onlineorder-pay-submit-button",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.payForOrder($data.orderInfo.orderId, $data.orderInfo.price))
        }, "支付 ")
      ])
    ]);
  }
  const PagesMainOnlineorder = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-1249d3e6"], ["__file", "F:/code/qq-doctor/pages/main/onlineorder.vue"]]);
  const _sfc_main$L = {
    data() {
      return {
        way: "",
        orderId: ""
      };
    },
    methods: {
      backMainFront() {
        uni.switchTab({
          url: "/pages/main/mainfront"
        });
      }
    },
    onLoad(e2) {
      this.way = e2.way;
      this.orderId = e2.id;
      if (this.way == "online") {
        uni.setNavigationBarTitle({
          title: "线上预约成功"
        });
      } else {
        uni.setNavigationBarTitle({
          title: "挂号预约成功"
        });
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "online-order-success" }, [
      vue.createElementVNode("view", { class: "online-order-success-title" }, " 您的线上预约订单已支付,稍后您可以去您的订单中心查看 "),
      vue.createElementVNode("view", { style: { "margin-top": "120rpx", "font-weight": "900", "font-size": "42rpx" } }, "订单号:"),
      vue.createElementVNode("view", { style: { "margin-top": "20rpx" } }, "4935975230644435337"),
      vue.createElementVNode("view", { style: { "font-weight": "900", "margin-top": "20rpx", "margin-right": "140rpx" } }, " 姓名: 赵熙蒙 "),
      vue.createElementVNode("view", { style: { "font-weight": "900", "margin-top": "20rpx", "margin-right": "33rpx" } }, " 手机号: 18683927916 "),
      vue.createElementVNode("view", { style: { "font-weight": "900", "margin-top": "20rpx", "margin-left": "90rpx", "margin-bottom": "300rpx" } }, " 时间段: 2023年10月23日18:00 "),
      vue.createElementVNode("button", {
        "form-type": "submit",
        class: "online-success-submit"
      }, "补充ct图监测病变"),
      vue.createElementVNode("button", {
        "form-type": "submit",
        class: "online-success-submit",
        style: { "background-color": "#B1B1B1" },
        onClick: _cache[0] || (_cache[0] = (...args) => $options.backMainFront && $options.backMainFront(...args))
      }, "返回主页")
    ]);
  }
  const PagesMainOnlineordersuccess = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__file", "F:/code/qq-doctor/pages/main/onlineordersuccess.vue"]]);
  const _sfc_main$K = {
    name: "FuncSelectFront",
    data() {
      return {};
    },
    props: {
      word: {
        type: String,
        default: "搜索"
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "func-selelct-front" }, [
      vue.createElementVNode("view", { class: "func-select-block" }, [
        vue.createElementVNode("view", { class: "func-select-block-image" }, [
          vue.createElementVNode("image", {
            src: "/static/img/query.png",
            mode: ""
          })
        ]),
        vue.createElementVNode("input", {
          type: "text",
          placeholder: $props.word,
          name: "selectvalue",
          "confirm-type": "search"
        }, null, 8, ["placeholder"])
      ])
    ]);
  }
  const ComponentsFuncSelectFrontFuncSelectFront = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__file", "F:/code/qq-doctor/components/FuncSelectFront/FuncSelectFront.vue"]]);
  const _sfc_main$J = {
    name: "UniIndexedList",
    emits: ["itemClick"],
    props: {
      loaded: {
        type: Boolean,
        default: false
      },
      idx: {
        type: Number,
        default: 0
      },
      list: {
        type: Object,
        default() {
          return {};
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick(idx, index) {
        this.$emit("itemClick", {
          idx,
          index
        });
      }
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $props.loaded || $props.list.itemIndex < 15 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-indexed-list__title-wrapper"
      }, [
        $props.list.items && $props.list.items.length > 0 ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "uni-indexed-list__title"
          },
          vue.toDisplayString($props.list.key),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true),
      ($props.loaded || $props.list.itemIndex < 15) && $props.list.items && $props.list.items.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-indexed-list__list"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.list.items, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index,
              class: "uni-indexed-list__item",
              "hover-class": "uni-indexed-list__item--hover"
            }, [
              vue.createElementVNode("view", {
                class: "uni-indexed-list__item-container",
                onClick: ($event) => $options.onClick($props.idx, index)
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-indexed-list__item-border", { "uni-indexed-list__item-border--last": index === $props.list.items.length - 1 }])
                  },
                  [
                    $props.showSelect ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      style: { "margin-right": "20rpx" }
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        type: item.checked ? "checkbox-filled" : "circle",
                        color: item.checked ? "#007aff" : "#C0C0C0",
                        size: "24"
                      }, null, 8, ["type", "color"])
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "text",
                      { class: "uni-indexed-list__item-content" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ], 8, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const indexedListItem = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-d26f185a"], ["__file", "F:/code/qq-doctor/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list-item.vue"]]);
  function throttle(func, delay) {
    var prev = Date.now();
    return function() {
      var context = this;
      var args = arguments;
      var now = Date.now();
      if (now - prev >= delay) {
        func.apply(context, args);
        prev = Date.now();
      }
    };
  }
  function touchMove(e2) {
    let pageY = e2.touches[0].pageY;
    let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
    if (this.touchmoveIndex === index) {
      return false;
    }
    let item = this.lists[index];
    if (item) {
      this.scrollViewId = "uni-indexed-list-" + index;
      this.touchmoveIndex = index;
    }
  }
  const throttleTouchMove = throttle(touchMove, 40);
  const _sfc_main$I = {
    name: "UniIndexedList",
    components: {
      indexedListItem
    },
    emits: ["click"],
    props: {
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      showSelect: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lists: [],
        winHeight: 0,
        itemHeight: 0,
        winOffsetY: 0,
        touchmove: false,
        touchmoveIndex: -1,
        scrollViewId: "",
        touchmovable: true,
        loaded: false,
        isPC: false
      };
    },
    watch: {
      options: {
        handler: function() {
          this.setList();
        },
        deep: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.setList();
      }, 50);
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    },
    methods: {
      setList() {
        let index = 0;
        this.lists = [];
        this.options.forEach((value) => {
          if (value.data.length === 0) {
            return;
          }
          let indexBefore = index;
          let items = value.data.map((item) => {
            let obj = {};
            obj["key"] = value.letter;
            obj["name"] = item;
            obj["itemIndex"] = index;
            index++;
            obj.checked = item.checked ? item.checked : false;
            return obj;
          });
          this.lists.push({
            title: value.letter,
            key: value.letter,
            items,
            itemIndex: indexBefore
          });
        });
        uni.createSelectorQuery().in(this).select("#list").boundingClientRect().exec((ret) => {
          this.winOffsetY = ret[0].top;
          this.winHeight = ret[0].height;
          this.itemHeight = this.winHeight / this.lists.length;
        });
      },
      touchStart(e2) {
        this.touchmove = true;
        let pageY = this.isPC ? e2.pageY : e2.touches[0].pageY;
        let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
        let item = this.lists[index];
        if (item) {
          this.scrollViewId = "uni-indexed-list-" + index;
          this.touchmoveIndex = index;
        }
      },
      touchMove(e2) {
        throttleTouchMove.call(this, e2);
      },
      touchEnd() {
        this.touchmove = false;
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e2) {
        if (!this.isPC)
          return;
        this.touchStart(e2);
      },
      mousemove(e2) {
        if (!this.isPC)
          return;
        this.touchMove(e2);
      },
      mouseleave(e2) {
        if (!this.isPC)
          return;
        this.touchEnd(e2);
      },
      onClick(e2) {
        let {
          idx,
          index
        } = e2;
        let obj = {};
        for (let key in this.lists[idx].items[index]) {
          obj[key] = this.lists[idx].items[index][key];
        }
        let select = [];
        if (this.showSelect) {
          this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked;
          this.lists.forEach((value, idx2) => {
            value.items.forEach((item, index2) => {
              if (item.checked) {
                let obj2 = {};
                for (let key in this.lists[idx2].items[index2]) {
                  obj2[key] = this.lists[idx2].items[index2][key];
                }
                select.push(obj2);
              }
            });
          });
        }
        this.$emit("click", {
          item: obj,
          select
        });
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_indexed_list_item = vue.resolveComponent("indexed-list-item");
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-indexed-list",
        ref: "list",
        id: "list"
      },
      [
        vue.createElementVNode("scroll-view", {
          "scroll-into-view": $data.scrollViewId,
          class: "uni-indexed-list__scroll",
          "scroll-y": ""
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.lists, (list, idx) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: idx,
                id: "uni-indexed-list-" + idx
              }, [
                vue.createVNode(_component_indexed_list_item, {
                  list,
                  loaded: $data.loaded,
                  idx,
                  showSelect: $props.showSelect,
                  onItemClick: $options.onClick
                }, null, 8, ["list", "loaded", "idx", "showSelect", "onItemClick"])
              ], 8, ["id"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 8, ["scroll-into-view"]),
        vue.createElementVNode(
          "view",
          {
            class: "uni-indexed-list__menu",
            onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchStart && $options.touchStart(...args)),
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchMove && $options.touchMove(...args), ["stop", "prevent"])),
            onTouchend: _cache[2] || (_cache[2] = (...args) => $options.touchEnd && $options.touchEnd(...args)),
            onMousedown: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
            onMousemove: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop", "prevent"])),
            onMouseleave: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.mouseleave && $options.mouseleave(...args), ["stop"]))
          },
          [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.lists, (list, key) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key,
                    class: vue.normalizeClass(["uni-indexed-list__menu-item", $data.touchmoveIndex == key ? "uni-indexed-list__menu--active" : ""])
                  },
                  [
                    vue.createElementVNode(
                      "text",
                      {
                        class: vue.normalizeClass(["uni-indexed-list__menu-text", $data.touchmoveIndex == key ? "uni-indexed-list__menu-text--active" : ""])
                      },
                      vue.toDisplayString(list.key),
                      3
                      /* TEXT, CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          32
          /* HYDRATE_EVENTS */
        ),
        $data.touchmove ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-indexed-list__alert-wrapper"
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-indexed-list__alert" },
            vue.toDisplayString($data.lists[$data.touchmoveIndex].key),
            1
            /* TEXT */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      512
      /* NEED_PATCH */
    );
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-476e099e"], ["__file", "F:/code/qq-doctor/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.vue"]]);
  const _sfc_main$H = {
    name: "FuncSelectContext",
    data() {
      return {
        selectedItem: 0
      };
    },
    props: {
      items: {
        type: Array,
        default() {
          return [
            {
              title: "一类疫苗（免费）",
              vaccines: [
                {
                  letter: "B",
                  data: [
                    "百白破疫苗"
                  ]
                },
                {
                  letter: "J",
                  data: [
                    "甲肝疫苗",
                    "脊髓灰质炎疫苗"
                  ]
                },
                {
                  letter: "K",
                  data: [
                    "卡介苗"
                  ]
                },
                {
                  letter: "L",
                  data: [
                    "流脑疫苗"
                  ]
                },
                {
                  letter: "M",
                  data: [
                    "麻腮风疫苗"
                  ]
                },
                {
                  letter: "Y",
                  data: [
                    "乙肝疫苗",
                    "乙脑疫苗"
                  ]
                }
              ]
            },
            {
              title: "二类疫苗（免费）",
              vaccines: [
                {
                  letter: "B",
                  data: [
                    "百白破疫苗"
                  ]
                },
                {
                  letter: "J",
                  data: [
                    "甲肝疫苗",
                    "脊髓灰质炎疫苗"
                  ]
                },
                {
                  letter: "K",
                  data: [
                    "卡介苗"
                  ]
                },
                {
                  letter: "L",
                  data: [
                    "流脑疫苗"
                  ]
                },
                {
                  letter: "M",
                  data: [
                    "麻腮风疫苗"
                  ]
                },
                {
                  letter: "Y",
                  data: [
                    "乙肝疫苗",
                    "乙脑疫苗"
                  ]
                }
              ]
            }
          ];
        }
      },
      selected: {
        type: String,
        default() {
          return "";
        }
      }
    },
    methods: {
      changeSelected(index) {
        this.selectedItem = index;
      },
      selectList() {
        return this.items[this.selectedItem].vaccines;
      },
      getDetail(e2) {
        if (this.selected == "疫苗") {
          uni.navigateTo({
            url: `/pages/main/vaccinedetail?name=${e2.item.name}`
          });
        } else if (this.selected == "疾病知识") {
          uni.navigateTo({
            url: `/pages/main/diseaseknowledgedetail?name=${e2.item.name}`
          });
        }
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_indexed_list = resolveEasycom(vue.resolveDynamicComponent("uni-indexed-list"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "func-select-context" }, [
      vue.createElementVNode("scroll-view", {
        class: "func-select-context-left",
        "scroll-y": ""
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.items, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["func-select-context-left-block", { "selected": index === $data.selectedItem }]),
              key: index,
              onClick: ($event) => $options.changeSelected(index)
            }, [
              vue.createElementVNode(
                "view",
                { class: "func-select-context-left-block-text" },
                vue.toDisplayString(item.title),
                1
                /* TEXT */
              )
            ], 10, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "func-select-context-right" }, [
        vue.createVNode(_component_uni_indexed_list, {
          options: $options.selectList(),
          class: "func-select-context-right-context",
          onClick: $options.getDetail
        }, null, 8, ["options", "onClick"])
      ])
    ]);
  }
  const ComponentsFuncSelectContextFuncSelectContext = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-18221e6b"], ["__file", "F:/code/qq-doctor/components/FuncSelectContext/FuncSelectContext.vue"]]);
  const _sfc_main$G = {
    data() {
      return {
        word: "搜索疫苗",
        value: "疫苗"
      };
    },
    methods: {}
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectContext"), ComponentsFuncSelectContextFuncSelectContext);
    return vue.openBlock(), vue.createElementBlock("view", { class: "vaccine" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createVNode(_component_FuncSelectContext, { selected: $data.value }, null, 8, ["selected"])
    ]);
  }
  const PagesMainVaccine = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-d5b672a6"], ["__file", "F:/code/qq-doctor/pages/main/vaccine.vue"]]);
  const _sfc_main$F = {
    name: "DiseaseFunc",
    data() {
      return {};
    },
    props: {
      name: {
        type: String,
        default() {
          return "百白破疫苗";
        }
      },
      list: {
        type: Array,
        default() {
          return [
            {
              pic: "../../static/img/desc.png",
              name: "介绍"
            },
            {
              pic: "../../static/img/getwork.png",
              name: "作用功效"
            },
            {
              pic: "../../static/img/vaccne.png",
              name: "接种指导"
            },
            {
              pic: "../../static/img/baderror.png",
              name: "不良反应"
            }
          ];
        }
      }
    },
    methods: {
      goDetail(name) {
        var urlname = this.name + name;
        uni.navigateTo({
          url: `/pages/main/vaccinedetailaction?name=${urlname}`
        });
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "disease-func" }, [
      vue.createElementVNode(
        "view",
        { class: "disease-func-title" },
        vue.toDisplayString($props.name),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "disease-func-block" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.list, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "disease-func-block-context",
              onClick: ($event) => $options.goDetail(item.name)
            }, [
              vue.createElementVNode("view", { class: "disease-func-block-context-image" }, [
                vue.createElementVNode("image", {
                  src: item.pic,
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode(
                "view",
                { class: "disease-func-block-context-text" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-ca1dad8d"], ["__file", "F:/code/qq-doctor/components/DiseaseFunc/DiseaseFunc.vue"]]);
  const _sfc_main$E = {
    name: "DiseaseContext",
    data() {
      return {
        selectedBlock: 0,
        articleList: [
          {
            articleId: "00000001",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "7890",
            isStar: "1"
          },
          {
            articleId: "00000002",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "789",
            isStar: "0"
          },
          {
            articleId: "00000003",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "788",
            isStar: "1"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          },
          {
            articleId: "00000004",
            title: "百白破疫苗是预防什么的？",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            star: "78",
            isStar: "0"
          }
        ],
        videoList: [
          {
            videoId: "00000001",
            title: "孩子阳了之后什么时候可以打疫苗?",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            pic: "../../static/img/doctor2.png",
            watch: "365",
            video: "视频地址"
          },
          {
            videoId: "00000001",
            title: "孩子阳了之后什么时候可以打疫苗?",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            pic: "../../static/img/doctor2.png",
            watch: "365",
            video: "视频地址"
          },
          {
            videoId: "00000001",
            title: "孩子阳了之后什么时候可以打疫苗?",
            pubName: "赵熙蒙",
            pubId: "111111111",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            pic: "../../static/img/doctor2.png",
            watch: "365",
            video: "视频地址"
          }
        ]
      };
    },
    methods: {
      getStar() {
      },
      deleteStar() {
      },
      goArticle(ai, pi) {
        uni.navigateTo({
          url: `/pages/main/article?ai=${ai}&pi=${pi}`
        });
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "disease-context" }, [
      vue.createElementVNode("view", { class: "disease-context-title" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["disease-context-title-block", { active: $data.selectedBlock === 0 }]),
            onClick: _cache[0] || (_cache[0] = ($event) => $data.selectedBlock = 0)
          },
          [
            vue.createElementVNode("view", { class: "disease-context-title-block-text" }, [
              vue.createTextVNode(" 科普文章 "),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "disease-context-title-block-indicator" },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $data.selectedBlock === 0]
              ])
            ])
          ],
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["disease-context-title-block", { active: $data.selectedBlock === 1 }]),
            onClick: _cache[1] || (_cache[1] = ($event) => $data.selectedBlock = 1)
          },
          [
            vue.createElementVNode("view", { class: "disease-context-title-block-text" }, [
              vue.createTextVNode(" 科普小视频 "),
              vue.withDirectives(vue.createElementVNode(
                "view",
                { class: "disease-context-title-block-indicator" },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, $data.selectedBlock === 1]
              ])
            ])
          ],
          2
          /* CLASS */
        )
      ]),
      $data.selectedBlock == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "disease-context-block"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.articleList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "disease-context-article",
              onClick: ($event) => $options.goArticle(item.articleId, item.pubId)
            }, [
              vue.createElementVNode("view", { class: "disease-context-article-left" }, [
                vue.createElementVNode(
                  "view",
                  { style: { "font-weight": "700" } },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { style: { "font-size": "26rpx", "color": "#9e9e9e" } },
                  vue.toDisplayString(item.pubName) + " " + vue.toDisplayString(item.manager),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { style: { "font-size": "26rpx", "color": "#9e9e9e" } },
                  vue.toDisplayString(item.hospital) + " " + vue.toDisplayString(item.depart),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "disease-context-article-right" }, [
                vue.createElementVNode("view", null, [
                  item.isStar == 0 ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 0,
                    src: "/static/img/artheart.png",
                    mode: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.getStar())
                  })) : vue.createCommentVNode("v-if", true),
                  item.isStar == 1 ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 1,
                    src: "/static/img/arthearts.png",
                    mode: "",
                    onClick: _cache[3] || (_cache[3] = ($event) => $options.deleteStar())
                  })) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createElementVNode(
                  "view",
                  null,
                  vue.toDisplayString(item.star),
                  1
                  /* TEXT */
                )
              ])
            ], 8, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      $data.selectedBlock == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "disease-context-block"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.videoList, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "disease-context-video" }, [
              vue.createElementVNode("view", { class: "disease-context-video-left" }, [
                vue.createElementVNode("image", {
                  src: item.pic,
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "disease-context-video-right" }, [
                vue.createElementVNode(
                  "view",
                  { style: { "font-size": "32rpx", "font-weight": "900", "margin-bottom": "20rpx" } },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { style: { "font-size": "26rpx", "color": "#9e9e9e" } },
                  vue.toDisplayString(item.pubName) + " " + vue.toDisplayString(item.manager),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { style: { "font-size": "26rpx", "color": "#9e9e9e" } },
                  vue.toDisplayString(item.hospital) + " " + vue.toDisplayString(item.depart),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { style: { "display": "flex", "align-items": "center", "font-size": "22rpx" } }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/cemara.png",
                    mode: "",
                    style: { "margin-right": "10rpx" }
                  }),
                  vue.createElementVNode(
                    "text",
                    { style: { "color": "#9e9e9e" } },
                    vue.toDisplayString(item.watch) + "已观看",
                    1
                    /* TEXT */
                  )
                ])
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { style: { "width": "700rpx", "height": "20rpx" } })
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-74d09da9"], ["__file", "F:/code/qq-doctor/components/DiseaseContext/DiseaseContext.vue"]]);
  const _sfc_main$D = {
    data() {
      return {
        name: ""
      };
    },
    onLoad(e2) {
      uni.setNavigationBarTitle({
        title: e2.name
      });
      this.name = e2.name;
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$5);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "vaccinedetail" }, [
      vue.createVNode(_component_DiseaseFunc, { name: $data.name }, null, 8, ["name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainVaccinedetail = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__file", "F:/code/qq-doctor/pages/main/vaccinedetail.vue"]]);
  const _sfc_main$C = {
    data() {
      return {
        title: ""
      };
    },
    onLoad(e2) {
      uni.setNavigationBarTitle({
        title: e2.name
      });
      this.title = e2.name;
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "vaccinedetailaction" }, [
      vue.createElementVNode("view", { class: "vaccinedetailaction-context" }, [
        vue.createElementVNode(
          "view",
          { class: "vaccinedetailaction-context-title" },
          vue.toDisplayString($data.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "vaccinedetailaction-context-text" }, " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ")
      ])
    ]);
  }
  const PagesMainVaccinedetailaction = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-22157a4c"], ["__file", "F:/code/qq-doctor/pages/main/vaccinedetailaction.vue"]]);
  const _sfc_main$B = {
    data() {
      return {
        articleInfo: {
          articleId: "00000001",
          title: "免疫力低下有哪些表现？我们应该怎么办呢?",
          star: "256",
          watch: "205",
          time: "2023-10-23",
          context: `1.频繁感染：免疫系统主要负责抵御病原体的入侵，当免疫力低下时，易受到细菌、病毒和真菌感染的侵袭，可能经常出现感冒、咳嗽、发烧、皮肤感染等。2. 慢性疲劳： 免疫力低下时， 身体需要更多的能量来对抗病原体， 这可能导致疲劳感增加， 精力不足， 难以及时恢复。3. 恶心和食欲不振： 免疫力低下可能导致消化系统的问题， 出现恶心、 呕吐和食欲不振等症状。4. 加重的过敏反应： 免疫系统在免疫力低下时可能无法有效地识别和应对过敏原， 导致过敏反应加重， 如过敏性鼻炎、 皮疹、 荨麻疹等。5. 慢性炎症： 免疫力低下可能导致身体处于慢性炎症状态， 出现持续性疼痛、 关节肿痛、 红肿等症状。 `
        },
        pubInfo: {
          pubId: "00000002",
          pubName: "赵熙蒙",
          pic: "../../static/img/doctor2.png",
          manager: "主任医师",
          hospital: "江西理工大学医学院",
          depart: "中医内科"
        }
      };
    },
    methods: {
      goDoctorMain(id) {
        uni.navigateTo({
          url: `/pages/main/doctordetail?id=${id}`
        });
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "article" }, [
      vue.createElementVNode("view", { class: "article-logo" }, [
        vue.createElementVNode("view", { class: "article-logo-context" }, " 原创 ")
      ]),
      vue.createElementVNode(
        "view",
        { class: "article-title" },
        vue.toDisplayString($data.articleInfo.title),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "article-doctor-info" }, [
        vue.createElementVNode("view", { class: "article-doctor-image" }, [
          vue.createElementVNode("image", {
            src: $data.pubInfo.pic
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "article-doctor-context" }, [
          vue.createElementVNode(
            "view",
            { style: { "color": "#4485fd", "margin-bottom": "5rpx", "font-size": "26rpx" } },
            vue.toDisplayString($data.pubInfo.pubName) + " " + vue.toDisplayString($data.pubInfo.manager),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { style: { "margin-bottom": "5rpx", "font-weight": "600", "font-size": "26rpx" } },
            vue.toDisplayString($data.pubInfo.hospital) + " " + vue.toDisplayString($data.pubInfo.depart),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { style: { "color": "#9e9e9e", "font-size": "26rpx" } },
            vue.toDisplayString($data.articleInfo.time) + " " + vue.toDisplayString($data.articleInfo.watch) + "人已读",
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "article-doctor-star" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", { src: "/static/img/articlestar.png" })
          ]),
          vue.createElementVNode(
            "view",
            { style: { "color": "#9e9e9e", "margin-left": "4rpx" } },
            vue.toDisplayString($data.articleInfo.star),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode(
        "view",
        { class: "article-context" },
        vue.toDisplayString($data.articleInfo.context),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "article-doctor-baseinfo" }, [
        vue.createElementVNode("view", { class: "article-doctor-baseinfo-top" }, [
          vue.createElementVNode("view", { class: "article-doctor-baseinfo-top-left" }, [
            vue.createElementVNode("image", {
              src: $data.pubInfo.pic,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "article-doctor-baseinfo-top-right" }, [
            vue.createElementVNode(
              "view",
              { style: { "color": "#4485fd" } },
              vue.toDisplayString($data.pubInfo.pubName) + " " + vue.toDisplayString($data.pubInfo.manager),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { style: { "font-weight": "600" } },
              vue.toDisplayString($data.pubInfo.hospital) + " " + vue.toDisplayString($data.pubInfo.depart),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "article-doctor-baseinfo-down" }, [
          vue.createElementVNode("view", {
            class: "article-doctor-baseinfo-down-context",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.goDoctorMain($data.pubInfo.pubId))
          }, "去主页")
        ])
      ])
    ]);
  }
  const PagesMainArticle = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-c6f782df"], ["__file", "F:/code/qq-doctor/pages/main/article.vue"]]);
  const _sfc_main$A = {
    data() {
      return {
        selected: "疾病知识",
        word: "搜索疾病",
        selectList: [
          {
            title: "常见疾病",
            vaccines: [
              {
                letter: "#",
                data: [
                  "2型糖尿病"
                ]
              },
              {
                letter: "A",
                data: [
                  "矮小症",
                  "艾滋病",
                  "阿拉基综合征"
                ]
              },
              {
                letter: "B",
                data: [
                  "疤痕",
                  "白带异常",
                  "白癜风",
                  "白内障",
                  "白塞氏病",
                  "白细胞减少症",
                  "白血病",
                  "瘢痕疙瘩",
                  "包茎",
                  "包皮龟头炎",
                  "包皮过长",
                  "苯丙酮尿症"
                ]
              },
              {
                letter: "L",
                data: [
                  "流脑疫苗"
                ]
              },
              {
                letter: "M",
                data: [
                  "麻腮风疫苗"
                ]
              },
              {
                letter: "Y",
                data: [
                  "乙肝疫苗",
                  "乙脑疫苗"
                ]
              }
            ]
          },
          {
            title: "内科",
            vaccines: [
              {
                letter: "B",
                data: [
                  "百白破疫苗"
                ]
              },
              {
                letter: "J",
                data: [
                  "甲肝疫苗",
                  "脊髓灰质炎疫苗"
                ]
              },
              {
                letter: "K",
                data: [
                  "卡介苗"
                ]
              },
              {
                letter: "L",
                data: [
                  "流脑疫苗"
                ]
              },
              {
                letter: "M",
                data: [
                  "麻腮风疫苗"
                ]
              },
              {
                letter: "Y",
                data: [
                  "乙肝疫苗",
                  "乙脑疫苗"
                ]
              }
            ]
          },
          {
            title: "外科",
            vaccines: []
          },
          {
            title: "妇产科学",
            vaccines: []
          },
          {
            title: "儿科学",
            vaccines: []
          },
          {
            title: "骨科学",
            vaccines: []
          },
          {
            title: "眼科学",
            vaccines: []
          },
          {
            title: "口腔科学",
            vaccines: []
          },
          {
            title: "耳鼻口咽喉头颈科",
            vaccines: []
          },
          {
            title: "肿瘤科",
            vaccines: []
          },
          {
            title: "皮肤性病科",
            vaccines: []
          },
          {
            title: "男科",
            vaccines: []
          },
          {
            title: "皮肤美容",
            vaccines: []
          }
        ]
      };
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectContext"), ComponentsFuncSelectContextFuncSelectContext);
    return vue.openBlock(), vue.createElementBlock("view", { class: "diseaseknowledge" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createVNode(_component_FuncSelectContext, {
        items: $data.selectList,
        selected: $data.selected
      }, null, 8, ["items", "selected"])
    ]);
  }
  const PagesMainDiseaseknowledge = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__file", "F:/code/qq-doctor/pages/main/diseaseknowledge.vue"]]);
  const _sfc_main$z = {
    name: "FuncSelectAllContext",
    data() {
      return {};
    },
    props: {
      items: {
        type: Array,
        default() {
          return [
            {
              letter: "B",
              data: [
                "百白破疫苗"
              ]
            },
            {
              letter: "J",
              data: [
                "甲肝疫苗",
                "脊髓灰质炎疫苗"
              ]
            },
            {
              letter: "K",
              data: [
                "卡介苗"
              ]
            },
            {
              letter: "L",
              data: [
                "流脑疫苗"
              ]
            },
            {
              letter: "M",
              data: [
                "麻腮风疫苗"
              ]
            },
            {
              letter: "Y",
              data: [
                "乙肝疫苗",
                "乙脑疫苗"
              ]
            }
          ];
        }
      },
      selected: {
        type: String,
        default() {
          return "";
        }
      }
    },
    methods: {
      getDetail(e2) {
        if (this.selected == "检查") {
          uni.navigateTo({
            url: `/pages/main/checkdetail?name=${e2.item.name}`
          });
        } else if (this.selected == "治疗") {
          uni.navigateTo({
            url: `/pages/main/treatmentdetail?name=${e2.item.name}`
          });
        }
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_indexed_list = resolveEasycom(vue.resolveDynamicComponent("uni-indexed-list"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "func-select-all-context" }, [
      vue.createVNode(_component_uni_indexed_list, {
        options: $props.items,
        class: "func-select-all-context",
        onClick: $options.getDetail
      }, null, 8, ["options", "onClick"])
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-76442ca7"], ["__file", "F:/code/qq-doctor/components/FuncSelectAllContext/FuncSelectAllContext.vue"]]);
  const _sfc_main$y = {
    data() {
      return {
        word: "搜索检查",
        selectList: [
          {
            letter: "B",
            data: [
              "备孕",
              "病例诊断"
            ]
          },
          {
            letter: "C",
            data: [
              "肠镜",
              "产前检查",
              "超声诊断"
            ]
          },
          {
            letter: "D",
            data: [
              "大肠便血",
              "穿刺活检术"
            ]
          },
          {
            letter: "F",
            data: [
              "反射诊断",
              "肺功能检查",
              "妇科检查"
            ]
          },
          {
            letter: "G",
            data: [
              "肝功能",
              "肝脏超声检查"
            ]
          }
        ],
        value: "检查"
      };
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectAllContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectAllContext"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "check" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createElementVNode("view", { style: { "width": "750rpx", "height": "200rpx" } }),
      vue.createVNode(_component_FuncSelectAllContext, {
        items: $data.selectList,
        selected: $data.value
      }, null, 8, ["items", "selected"])
    ]);
  }
  const PagesMainCheck = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-b0048a74"], ["__file", "F:/code/qq-doctor/pages/main/check.vue"]]);
  const _sfc_main$x = {
    data() {
      return {
        name: "",
        list: [
          {
            pic: "../../static/img/desc.png",
            name: "介绍"
          },
          {
            pic: "../../static/img/corre.png",
            name: "相关疾病"
          },
          {
            pic: "../../static/img/jczb.png",
            name: "检查准备"
          },
          {
            pic: "../../static/img/jcfs.png",
            name: "检查方式"
          }
        ]
      };
    },
    onLoad(e2) {
      uni.setNavigationBarTitle({
        title: e2.name
      });
      this.name = e2.name;
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$5);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "checkdetail" }, [
      vue.createVNode(_component_DiseaseFunc, {
        list: $data.list,
        name: $data.name
      }, null, 8, ["list", "name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainCheckdetail = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "F:/code/qq-doctor/pages/main/checkdetail.vue"]]);
  const _sfc_main$w = {
    data() {
      return {
        value: "治疗",
        word: "搜索治疗",
        selectList: [
          {
            letter: "B",
            data: [
              "白内障超声乳化吸除术",
              "瓣膜修复术",
              "瓣膜置换术",
              "半椎体切除术",
              "包皮环切术",
              "拔牙",
              "鼻内镜下鼻窦手术",
              "扁平足成形术",
              "变性手术",
              "鼻部整形",
              "鼻侧切开术",
              "鼻内镜手术",
              "避孕",
              "鼻再造",
              "鼻整形修复"
            ]
          },
          {
            letter: "C",
            data: [
              "肠镜",
              "产前检查",
              "超声诊断"
            ]
          },
          {
            letter: "D",
            data: [
              "大肠便血",
              "穿刺活检术"
            ]
          },
          {
            letter: "F",
            data: [
              "反射诊断",
              "肺功能检查",
              "妇科检查"
            ]
          },
          {
            letter: "G",
            data: [
              "肝功能",
              "肝脏超声检查"
            ]
          }
        ]
      };
    },
    methods: {}
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectAllContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectAllContext"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "treatment" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createElementVNode("view", { style: { "width": "750rpx", "height": "200rpx" } }),
      vue.createVNode(_component_FuncSelectAllContext, {
        items: $data.selectList,
        selected: $data.value
      }, null, 8, ["items", "selected"])
    ]);
  }
  const PagesMainTreatment = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__file", "F:/code/qq-doctor/pages/main/treatment.vue"]]);
  const _sfc_main$v = {
    data() {
      return {
        name: "",
        list: [
          {
            pic: "../../static/img/desc.png",
            name: "介绍"
          },
          {
            pic: "../../static/img/fbyy.png",
            name: "发病原因"
          },
          {
            pic: "../../static/img/zzbx.png",
            name: "症状表现"
          },
          {
            pic: "../../static/img/rhyf.png",
            name: "如何预防"
          }
        ]
      };
    },
    onLoad(e2) {
      uni.setNavigationBarTitle({
        title: e2.name
      });
      this.name = e2.name;
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$5);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_DiseaseFunc, {
        list: $data.list,
        name: $data.name
      }, null, 8, ["list", "name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainDiseaseknowledgedetail = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "F:/code/qq-doctor/pages/main/diseaseknowledgedetail.vue"]]);
  const _sfc_main$u = {
    data() {
      return {
        name: "",
        list: [
          {
            pic: "../../static/img/desc.png",
            name: "介绍"
          },
          {
            pic: "../../static/img/corre.png",
            name: "相关疾病"
          },
          {
            pic: "../../static/img/zlzb.png",
            name: "治疗准备"
          },
          {
            pic: "../../static/img/jj.png",
            name: "禁忌"
          }
        ]
      };
    },
    onLoad(e2) {
      uni.setNavigationBarTitle({
        title: e2.name
      });
      this.name = e2.name;
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$5);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "treatmentdetail" }, [
      vue.createVNode(_component_DiseaseFunc, {
        list: $data.list,
        name: $data.name
      }, null, 8, ["list", "name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainTreatmentdetail = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__file", "F:/code/qq-doctor/pages/main/treatmentdetail.vue"]]);
  const _sfc_main$t = {
    name: "OnlineDayBlock",
    data() {
      return {
        selectedDate: "6"
      };
    },
    props: {
      dataInfoList: {
        type: Array
      }
    },
    methods: {
      selectDate(date) {
        this.selectedDate = date;
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "online-day-block" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.dataInfoList, (item) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            class: "online-day-block-select",
            key: item.date,
            onClick: ($event) => $options.selectDate(item.date)
          }, [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["online-day-block-select-block", { "selected-day": item.date === $data.selectedDate }])
              },
              [
                vue.createElementVNode(
                  "div",
                  { class: "date" },
                  vue.toDisplayString(item.date) + "号",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "div",
                  { class: "num" },
                  vue.toDisplayString(item.num) + "场",
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            )
          ], 8, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-e7af92e1"], ["__file", "F:/code/qq-doctor/components/OnlineDayBlock/OnlineDayBlock.vue"]]);
  const _sfc_main$s = {
    name: "OnlineOn",
    data() {
      return {};
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "online-on" }, [
      vue.createElementVNode("view", { class: "online-on-title" }, "义诊中"),
      vue.createElementVNode("view", { class: "online-on-context" }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", { src: "/static/img/doctor2.png" })
        ]),
        vue.createElementVNode("view", { style: { "color": "#4485fd", "font-weight": "600", "font-size": "28rpx" } }, "呼吸重症医学科"),
        vue.createElementVNode("view", { style: { "font-size": "26rpx" } }, "赵熙蒙医生"),
        vue.createElementVNode("view", { style: { "font-size": "26rpx", "color": "#9e9e9e" } }, "赣州市第一人民医院")
      ])
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-2504236a"], ["__file", "F:/code/qq-doctor/components/OnlineOn/OnlineOn.vue"]]);
  const _sfc_main$r = {
    name: "OnlineBefore",
    data() {
      return {};
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "online-before" }, [
      vue.createElementVNode("view", { class: "online-before-title" }, "义诊预告"),
      vue.createElementVNode("view", { class: "online-before-context" }, [
        vue.createElementVNode("view", { class: "online-before-context-top" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", { src: "/static/img/doctor2.png" })
          ]),
          vue.createElementVNode("view", { class: "online-before-context-top-right" }, [
            vue.createElementVNode("view", { style: { "color": "#4485fd", "font-weight": "600", "font-size": "28rpx" } }, "呼吸重症医学科"),
            vue.createElementVNode("view", { style: { "font-size": "26rpx", "margin-top": "10rpx" } }, "赵熙蒙医生")
          ])
        ]),
        vue.createElementVNode("view", { class: "online-before-context-bottom" }, [
          vue.createElementVNode("view", { style: { "font-size": "26rpx", "color": "#9e9e9e" } }, "赣州市第一人民医院"),
          vue.createElementVNode("view", { style: { "font-size": "28rpx", "font-weight": "900", "color": "#ffb547" } }, "义诊11月06日17:30开始"),
          vue.createElementVNode("view", { style: { "width": "160rpx", "height": "50rpx", "background-color": "#fef9eb", "margin-top": "10rpx", "margin-left": "65rpx", "border": "#4485fd 2px solid", "text-align": "center", "color": "#4485fd", "font-size": "28rpx" } }, "立即预约")
        ])
      ])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-c2298192"], ["__file", "F:/code/qq-doctor/components/OnlineBefore/OnlineBefore.vue"]]);
  const _sfc_main$q = {
    name: "OnlineAfter",
    data() {
      return {};
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "online-after" }, [
      vue.createElementVNode("view", { class: "online-after-title" }, "义诊回放"),
      vue.createElementVNode("view", { class: "online-after-context" }, [
        vue.createElementVNode("view", { class: "online-after-context-top" }, [
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", { src: "/static/img/doctor2.png" })
          ]),
          vue.createElementVNode("view", { class: "online-after-context-top-right" }, [
            vue.createElementVNode("view", { style: { "color": "#4485fd", "font-weight": "600", "font-size": "28rpx" } }, "呼吸重症医学科"),
            vue.createElementVNode("view", { style: { "font-size": "26rpx", "margin-top": "10rpx" } }, "赵熙蒙医生")
          ])
        ]),
        vue.createElementVNode("view", { class: "online-after-context-bottom" }, [
          vue.createElementVNode("view", { style: { "font-size": "26rpx", "color": "#9e9e9e" } }, "赣州市第一人民医院"),
          vue.createElementVNode("view", { style: { "width": "160rpx", "height": "50rpx", "background-color": "#fef9eb", "margin-top": "30rpx", "border": "#4485fd 2px solid", "text-align": "center", "color": "#4485fd", "font-size": "28rpx" } }, "义诊回放")
        ])
      ])
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-e2f30d3b"], ["__file", "F:/code/qq-doctor/components/OnlineAfter/OnlineAfter.vue"]]);
  const _sfc_main$p = {
    data() {
      return {
        datainfoList: [
          {
            date: "5",
            num: "27"
          },
          {
            date: "6",
            num: "13"
          },
          {
            date: "7",
            num: "35"
          },
          {
            date: "8",
            num: "11"
          },
          {
            date: "9",
            num: "23"
          },
          {
            date: "10",
            num: "10"
          },
          {
            date: "11",
            num: "5"
          }
        ]
      };
    },
    onLoad() {
      getDateList();
    },
    methods: {}
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_OnlineDayBlock = resolveEasycom(vue.resolveDynamicComponent("OnlineDayBlock"), __easycom_0$4);
    const _component_OnlineOn = resolveEasycom(vue.resolveDynamicComponent("OnlineOn"), __easycom_1$1);
    const _component_OnlineBefore = resolveEasycom(vue.resolveDynamicComponent("OnlineBefore"), __easycom_2);
    const _component_OnlineAfter = resolveEasycom(vue.resolveDynamicComponent("OnlineAfter"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "doctoronline" }, [
      vue.createVNode(_component_OnlineDayBlock, { dataInfoList: $data.datainfoList }, null, 8, ["dataInfoList"]),
      vue.createVNode(_component_OnlineOn),
      vue.createVNode(_component_OnlineBefore),
      vue.createVNode(_component_OnlineAfter)
    ]);
  }
  const PagesMainDoctoronline = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__file", "F:/code/qq-doctor/pages/main/doctoronline.vue"]]);
  const _sfc_main$o = {
    name: "IsbnArticle",
    data() {
      return {};
    },
    props: {
      item: {
        type: Object,
        default() {
          return {
            title: "针对多形性未分化肉瘤赠药临床试验脂质体多柔比星（多美素）+卡瑞利珠瑞利珠瑞利珠瑞利珠",
            pic: "../../static/img/doctor2.png",
            context: "入组实验注意事项入组标准入组实验注意事项入组标准入组实验注意事项入组标准入组实验注意事项入组标准入组实验注意事项入组标准",
            name: "赵熙蒙",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            talknum: "25",
            starnum: "125",
            video: "",
            contextpic: "../../static/img/doctor2.png"
          };
        }
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "isbn-article" }, [
      vue.createElementVNode("view", { class: "isbn-article-top" }, [
        vue.createElementVNode("image", {
          src: $props.item.pic,
          mode: ""
        }, null, 8, ["src"]),
        vue.createElementVNode("view", { class: "isbn-article-top-text" }, [
          vue.createElementVNode(
            "view",
            { style: { "font-size": "24rpx", "margin-left": "10rpx" } },
            vue.toDisplayString($props.item.name) + " " + vue.toDisplayString($props.item.manager) + " " + vue.toDisplayString($props.item.hospital) + " " + vue.toDisplayString($props.item.depart),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { style: { "font-size": "24rpx", "color": "#9e9e9e", "margin-top": "10rpx", "margin-left": "10rpx" } },
            "来自" + vue.toDisplayString($props.item.name) + "医生的科普号",
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "isbn-article-context" }, [
        vue.createElementVNode(
          "view",
          { class: "isbn-article-context-title" },
          vue.toDisplayString($props.item.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "isbn-article-context-text" }, [
          vue.createElementVNode(
            "view",
            { style: { "overflow": "hidden", "text-overflow": "ellipsis", "display": "-webkit-box", "-webkit-line-clamp": "3", "-webkit-box-orient": "vertical", "font-size": "26rpx" } },
            vue.toDisplayString($props.item.context),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("image", {
              src: $props.item.contextpic,
              mode: ""
            }, null, 8, ["src"])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "isbn-article-bottom" }, [
        vue.createElementVNode("view", {
          class: "isbn-article-bottom-block",
          style: { "border-right": "1px #d8d8d8 solid", "margin": "20rpx 0rpx" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/img/share.png",
            mode: ""
          }),
          vue.createElementVNode("view", { class: "isbn-article-bottom-block-word" }, "分享")
        ]),
        vue.createElementVNode("view", {
          class: "isbn-article-bottom-block",
          style: { "border-right": "1px #d8d8d8 solid", "margin": "20rpx 0rpx" }
        }, [
          vue.createElementVNode("image", {
            src: "/static/img/kppl.png",
            mode: ""
          }),
          vue.createElementVNode(
            "view",
            { class: "isbn-article-bottom-block-word" },
            vue.toDisplayString($props.item.talknum),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "isbn-article-bottom-block" }, [
          vue.createElementVNode("image", {
            src: "/static/img/articlestar.png",
            mode: ""
          }),
          vue.createElementVNode(
            "view",
            { class: "isbn-article-bottom-block-word" },
            vue.toDisplayString($props.item.starnum),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "isbn-article-next" })
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-2b194b98"], ["__file", "F:/code/qq-doctor/components/IsbnArticle/IsbnArticle.vue"]]);
  const _sfc_main$n = {
    data() {
      return {
        onlineList: [
          {
            name: "赵熙蒙",
            date: "10月22日"
          },
          {
            name: "赵熙蒙",
            date: "10月23日"
          }
        ],
        jxlist: [
          {
            title: "针对多形性未分化肉瘤赠药临床试验——    脂质体多柔比星（多美素）+卡瑞利珠...",
            pic: "../../static/img/doctor2.png",
            context: "入组实验注意事项入组标准 1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...",
            name: "赵熙蒙",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            talknum: "25",
            starnum: "125",
            video: "",
            contextpic: "../../static/img/doctor2.png"
          },
          {
            title: "看看我的视频",
            pic: "../../static/img/doctor2.png",
            context: "",
            name: "赵熙蒙",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            talknum: "25",
            starnum: "125",
            video: "视频页....",
            contextpic: ""
          }
        ],
        gzlist: [
          {
            title: "针对多形性未分化肉瘤赠药临床试验——    脂质体多柔比星（多美素）+卡瑞利珠...",
            pic: "../../static/img/doctor2.png",
            context: "入组实验注意事项入组标准 1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...",
            name: "gz赵熙蒙",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            talknum: "25",
            starnum: "125",
            video: "",
            contextpic: "../../static/img/doctor2.png"
          },
          {
            title: "看看我的视频",
            pic: "../../static/img/doctor2.png",
            context: "",
            name: "gz赵熙蒙",
            manager: "主任医师",
            hospital: "江西理工大学医学院",
            depart: "中医内科",
            talknum: "25",
            starnum: "125",
            video: "视频页....",
            contextpic: ""
          }
        ],
        autoplay: true,
        interval: 5e3,
        selected: "0"
      };
    },
    methods: {
      goDetail() {
        uni.navigateTo({
          url: "/pages/main/doctoronline"
        });
      },
      changeSelect(id) {
        this.selected = id;
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IsbnArticle = resolveEasycom(vue.resolveDynamicComponent("IsbnArticle"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "isbn" }, [
      vue.createElementVNode("view", { class: "isbn-top" }, [
        vue.createElementVNode("swiper", {
          class: "isbn-swiper",
          circular: "",
          autoplay: $data.autoplay,
          interval: $data.interval,
          vertical: "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.onlineList, (item) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                vue.createElementVNode("view", { class: "isbn-swiper-item" }, [
                  vue.createElementVNode("view", { style: { "width": "120rpx" } }, [
                    vue.createElementVNode("image", { src: "/static/img/online.png" })
                  ]),
                  vue.createElementVNode("view", { style: { "width": "550rpx", "font-size": "32rpx", "margin-bottom": "5rpx" } }, [
                    vue.createTextVNode(
                      vue.toDisplayString(item.name) + "医生将于",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { style: { "color": "#ffbb24" } },
                      vue.toDisplayString(item.date),
                      1
                      /* TEXT */
                    ),
                    vue.createTextVNode("进行义诊")
                  ])
                ])
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ], 8, ["autoplay", "interval"]),
        vue.createElementVNode("view", { class: "isbn-swiper-right" }, [
          vue.createElementVNode("image", {
            src: "/static/img/zbgd.png",
            mode: "",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goDetail && $options.goDetail(...args))
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "isbn-select" }, [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["isbn-select-block", { "isbn-select-block-click": "0" == $data.selected }]),
            style: { "border-right": "1rpx solid #d8d8d8" },
            onClick: _cache[1] || (_cache[1] = ($event) => $options.changeSelect(0))
          },
          "精选",
          2
          /* CLASS */
        ),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["isbn-select-block", { "isbn-select-block-click": "1" == $data.selected }]),
            onClick: _cache[2] || (_cache[2] = ($event) => $options.changeSelect(1))
          },
          "关注",
          2
          /* CLASS */
        )
      ]),
      this.selected == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "isbn-jx"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.jxlist, (item) => {
            return vue.openBlock(), vue.createBlock(_component_IsbnArticle, { item }, null, 8, ["item"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      this.selected == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "isbn-gz"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.gzlist, (item) => {
            return vue.openBlock(), vue.createBlock(_component_IsbnArticle, { item }, null, 8, ["item"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMainIsbn = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-c0d29b98"], ["__file", "F:/code/qq-doctor/pages/main/isbn.vue"]]);
  const _sfc_main$m = {
    data() {
      return {
        way: "",
        did: "",
        doctor: {
          did: "0315111",
          pic: "../../static/img/doctor2.png",
          name: "赵熙蒙",
          hospital: "赣州市第一人民医院",
          depart: "眼科"
        },
        dataList: null,
        timeList: [
          {
            date: "11月8日",
            name: "今天",
            leave: {
              value: "7",
              list: [
                {
                  time: "早上",
                  clock: ["8.00", "9.00", "10.00", "11.00", "12:00"]
                },
                {
                  time: "下午",
                  clock: ["14.00", "15.00", "18.00"]
                },
                {
                  time: "晚上",
                  clock: ["20:00"]
                }
              ]
            }
          },
          {
            date: "11月9日",
            name: "明天",
            leave: {
              value: "6",
              list: [
                {
                  time: "早上",
                  clock: ["8.00", "9.00", "10.00", "11.00"]
                },
                {
                  time: "下午",
                  clock: ["14.00", "15.00", "18.00"]
                }
              ]
            }
          },
          {
            date: "11月8日",
            name: "后天",
            leave: {
              value: "5",
              list: [
                {
                  time: "早上",
                  clock: ["9.00", "10.00", "11.00"]
                },
                {
                  time: "下午",
                  clock: ["14.00", "15.00"]
                }
              ]
            }
          }
        ],
        seleted: "0",
        seletedClock: ""
      };
    },
    onLoad(e2) {
      this.dataList = getThreeDate();
      this.way = e2.way;
      if (this.way == "online") {
        uni.setNavigationBarTitle({
          title: "线上预约时间"
        });
      } else {
        uni.setNavigationBarTitle({
          title: "挂号预约时间"
        });
      }
    },
    methods: {
      changeSeleted(index) {
        this.seleted = index;
      },
      changeSeletedClock(clock) {
        this.seletedClock = clock;
      },
      nviback() {
        uni.navigateBack({
          delta: 1,
          success() {
            uni.$emit("dataBack", { time: this.seleted + this.seletedClock });
          }
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "online-form-time" }, [
      vue.createElementVNode("view", { class: "online-doctor-block" }, [
        vue.createElementVNode("view", { class: "online-doctor-image" }, [
          vue.createElementVNode("image", {
            src: $data.doctor.pic,
            mode: "aspectFill"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode("view", { class: "online-doctor-text" }, [
          vue.createElementVNode(
            "view",
            { class: "online-doctor-name" },
            vue.toDisplayString($data.doctor.name) + "医生",
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "online-doctor-dep" },
            vue.toDisplayString($data.doctor.depart) + " " + vue.toDisplayString($data.doctor.hospital) + "医生",
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("scroll-view", {
        class: "online-time-select",
        "scroll-x": "true",
        "enable-flex": "true"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.timeList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["online-time-select-block", { "online-time-seleted": index == this.seleted }]),
              onClick: ($event) => $options.changeSeleted(index)
            }, [
              vue.createElementVNode(
                "view",
                { style: { "font-size": "36rpx", "margin-top": "20rpx" } },
                vue.toDisplayString(item.name) + "," + vue.toDisplayString(item.date),
                1
                /* TEXT */
              ),
              item.leave.value !== "0" ? (vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  key: 0,
                  style: { "font-size": "26rpx", "color": "#677294", "margin-top": "3rpx" }
                },
                " 剩余" + vue.toDisplayString(item.leave.value) + "个时间段 ",
                1
                /* TEXT */
              )) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                style: { "font-size": "26rpx", "color": "#677294", "margin-top": "3rpx" }
              }, "无预约时间段"))
            ], 10, ["onClick"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ]),
      this.seleted == 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(this.timeList[this.seleted].leave.list, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "online-time-change" }, [
              vue.createElementVNode(
                "view",
                { style: { "font-size": "36rpx" } },
                vue.toDisplayString(item.time),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "online-time-select-area" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.clock, (clock) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["online-time-block", { "online-time-block-seleted": clock == this.seletedClock }]),
                      onClick: ($event) => $options.changeSeletedClock(clock)
                    }, vue.toDisplayString(clock), 11, ["onClick"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      this.seleted == 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(this.timeList[this.seleted].leave.list, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "online-time-change" }, [
              vue.createElementVNode(
                "view",
                { style: { "font-size": "36rpx" } },
                vue.toDisplayString(item.time),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "online-time-select-area" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.clock, (clock) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["online-time-block", { "online-time-block-seleted": clock == this.seletedClock }]),
                      onClick: ($event) => $options.changeSeletedClock(clock)
                    }, vue.toDisplayString(clock), 11, ["onClick"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      this.seleted == 2 ? (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(this.timeList[this.seleted].leave.list, (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "online-time-change" }, [
              vue.createElementVNode(
                "view",
                { style: { "font-size": "36rpx" } },
                vue.toDisplayString(item.time),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "online-time-select-area" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.clock, (clock) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: vue.normalizeClass(["online-time-block", { "online-time-block-seleted": clock == this.seletedClock }]),
                      onClick: ($event) => $options.changeSeletedClock(clock)
                    }, vue.toDisplayString(clock), 11, ["onClick"]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: "online-time-clock-select",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.nviback && $options.nviback(...args))
      }, " 确认 ")
    ]);
  }
  const PagesMainOnlineformtime = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-7f0c8ba1"], ["__file", "F:/code/qq-doctor/pages/main/onlineformtime.vue"]]);
  const _sfc_main$l = {
    data() {
      return {};
    },
    methods: {
      navToBusinessLicense() {
        uni.navigateTo({
          url: "/pages/user/businessLicense/businessLicense"
        });
      },
      navToReportingInformation() {
        uni.navigateTo({
          url: "/pages/user/reportingInformation/reportingInformation"
        });
      },
      navToCopyrightInformation() {
        uni.navigateTo({
          url: "/pages/user/copyrightInformation/copyrightInformation"
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" logo "),
      vue.createElementVNode("view", { class: "logoAndVersionWrapp" }, [
        vue.createCommentVNode(" logo "),
        vue.createElementVNode("view", { class: "logoWrapp" }, [
          vue.createElementVNode("image", {
            src: "/static/logo.png",
            mode: "",
            class: "logoIcon"
          })
        ]),
        vue.createElementVNode("view", { class: "logoTextWrapp" }, [
          vue.createElementVNode("text", { class: "logoText" }, "您身边的健康呵护人")
        ]),
        vue.createElementVNode("view", { class: "versionTextWrapp" }, [
          vue.createElementVNode("text", { class: "verisionText" }, "企桥医健V1.0.1 Release")
        ])
      ]),
      vue.createCommentVNode(" 企桥医健资质 "),
      vue.createElementVNode("view", { class: "qualificationsWrapp" }, [
        vue.createElementVNode("text", { class: "qualificationsText" }, "企桥医健资质"),
        vue.createElementVNode("image", {
          src: "/static/img/user/goRight2.png",
          mode: "",
          class: "goRight2Icon",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.navToBusinessLicense())
        })
      ]),
      vue.createCommentVNode(" 举报信息 "),
      vue.createElementVNode("view", { class: "qualificationsWrapp" }, [
        vue.createElementVNode("text", { class: "qualificationsText" }, "举报信息"),
        vue.createElementVNode("image", {
          src: "/static/img/user/goRight2.png",
          mode: "",
          class: "goRight2Icon",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.navToReportingInformation())
        })
      ]),
      vue.createCommentVNode(" 版权信息 "),
      vue.createElementVNode("view", { class: "qualificationsWrapp" }, [
        vue.createElementVNode("text", { class: "qualificationsText" }, "版权信息"),
        vue.createElementVNode("image", {
          src: "/static/img/user/goRight2.png",
          mode: "",
          class: "goRight2Icon",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.navToCopyrightInformation())
        })
      ])
    ]);
  }
  const PagesUserAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-d6b522c7"], ["__file", "F:/code/qq-doctor/pages/user/about/about.vue"]]);
  const _sfc_main$k = {
    data() {
      return {};
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createTextVNode(" 后面更改 "),
      vue.createCommentVNode(" 营业执照 "),
      vue.createElementVNode("view", { class: "businessLicenseWrapp" }, [
        vue.createElementVNode("image", {
          src: "/static/img/user/bL.jpg",
          mode: "",
          class: "bLIcon"
        })
      ])
    ]);
  }
  const PagesUserBusinessLicenseBusinessLicense = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-4d17e3a8"], ["__file", "F:/code/qq-doctor/pages/user/businessLicense/businessLicense.vue"]]);
  const _sfc_main$j = {
    props: {
      item: {
        hid: "2",
        pic: "../../static/img/nearHosp/hosp2.png",
        hospital: "赣州市第二人民医院",
        distance: 2.5,
        evaluate: "5",
        status: "0",
        address: "江西省赣州市章贡区789号"
      }
    },
    data() {
      return {};
    },
    methods: {
      statusValue() {
        return 1;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "collectWrapp" }, [
      vue.createCommentVNode(" 医院或者医生图片 "),
      vue.createElementVNode("image", {
        src: "/static/img/nearHosp/hosp2.png",
        mode: "",
        class: "hospIcon"
      }),
      vue.createCommentVNode(" 总体右侧的医院或者医生信息 "),
      vue.createElementVNode("view", { class: "hospOrDocTextContain" }, [
        vue.createCommentVNode(" 医院或者医生文字信息 "),
        vue.createElementVNode("view", { class: "hospOrDocText" }, [
          vue.createElementVNode("text", { class: "hospText1" }, "赣州市第一人民医院"),
          vue.createElementVNode("text", { class: "hospText2" }, "\\n江西省赣州市章贡区789号")
        ]),
        vue.createElementVNode("view", { class: "hopsFucWrapp" }, [
          vue.createElementVNode("view", { class: "hospRateAndCollect" }, [
            vue.createCommentVNode(" 评分 "),
            vue.createElementVNode("view", { class: "rate" }, [
              vue.createVNode(_component_uni_rate, {
                readonly: true,
                value: "4",
                "uni-rate": "",
                size: "19",
                class: "rateSy"
              })
            ]),
            vue.createElementVNode("view", { class: "collectNum" }, [
              vue.createElementVNode("text", null, "(11)")
            ])
          ]),
          vue.createCommentVNode(" 是否营业的展示 "),
          vue.createElementVNode("view", { class: "hospLineWarpp" }, [
            vue.createCommentVNode(" 展示医院的营业情况 "),
            $options.statusValue() == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "hosp-online"
            }, " 营业 ")) : vue.createCommentVNode("v-if", true),
            $options.statusValue() == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "hosp-line"
            }, " 未开放 ")) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 展示医生是否在线 "),
            $options.statusValue() == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "hosp-online"
            }, " 在线 ")) : vue.createCommentVNode("v-if", true),
            $options.statusValue() == 3 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "hosp-line"
            }, " 离线 ")) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-ccdd5519"], ["__file", "F:/code/qq-doctor/components/collectItem/collectItem.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        list: ["1", "2", "3", "4"]
      };
    },
    methods: {}
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_collectItem = resolveEasycom(vue.resolveDynamicComponent("collectItem"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "collectItemWrapp" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_collectItem, { key: index });
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_collectItem, { key: index });
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesUserCollectCollect = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-32105fc2"], ["__file", "F:/code/qq-doctor/pages/user/collect/collect.vue"]]);
  const _sfc_main$h = {
    onLoad() {
      this.getStorageSize();
    },
    data() {
      return {
        storageSize: "0M"
      };
    },
    methods: {
      //获取app的缓存
      getStorageSize() {
        let that = this;
        uni.getStorageInfo({
          success(res) {
            let size = res.currentSize;
            if (size < 1024) {
              that.storageSize = size + " B";
            } else if (size / 1024 >= 1 && size / 1024 / 1024 < 1) {
              that.storageSize = Math.floor(size / 1024 * 100) / 100 + " KB";
            } else if (size / 1024 / 1024 >= 1) {
              that.storageSize = Math.floor(size / 1024 / 1024 * 100) / 100 + " M";
            }
          }
        });
      },
      //删除 缓存
      clearStorage: function() {
        let that = this;
        uni.showModal({
          title: "提示",
          content: "确定清除缓存吗?",
          confirmText: "立即清除",
          success(res) {
            if (res.confirm) {
              uni.clearStorageSync();
              that.getStorageSize();
              uni.showToast({
                title: "清除成功",
                icon: "none"
              });
              setTimeout(() => {
                uni.redirectTo({
                  url: "/pages/login/login",
                  animationType: "pop-in",
                  animationDuration: 200
                });
              }, 1300);
            }
          }
        });
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 通用 "),
      vue.createElementVNode("view", { class: "commonWrapp" }, [
        vue.createElementVNode("view", { class: "commonInformationWrapp" }, [
          vue.createElementVNode("view", { class: "commonInformation" }, [
            vue.createElementVNode("text", { class: "commonInformationText1" }, "清空缓存"),
            vue.createElementVNode("view", { class: "commonTextWrapp" }, [
              vue.createElementVNode("view", { class: "commonText" }, [
                vue.createCommentVNode(" 46.77MB "),
                vue.createTextVNode(
                  " " + vue.toDisplayString($data.storageSize),
                  1
                  /* TEXT */
                )
              ]),
              vue.createCommentVNode(" 箭头 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/goRight2.png",
                mode: "",
                class: "goRight2Icon",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.clearStorage && $options.clearStorage(...args))
              })
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesUserCommonPageCommonPage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-b1caa8ca"], ["__file", "F:/code/qq-doctor/pages/user/commonPage/commonPage.vue"]]);
  const _sfc_main$g = {
    data() {
      return {};
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 版权信息 "),
      vue.createElementVNode("view", { class: "CopyrightText1" }, " 版权信息 - 江西理工大学企桥工作室 "),
      vue.createElementVNode("view", { class: "CopyrightText2" }, " 版权所有 © 江西理工大学企桥工作室. 保留所有权利。 "),
      vue.createElementVNode("view", { class: "CopyrightText3" }, " 对于企桥工作室创作的全部文字、图片、图形、音频、视频和相关材料，包括但不限于企桥工作室的网站、宣传材料、出版物等等，均受版权法和其他知识产权法律的保护 "),
      vue.createElementVNode("view", { class: "CopyrightText4" }, " 未经江西理工大学企桥工作室明确授权，任何个人或组织不得以任何形式复制、修改、传播、展示、演示、发布、出售或利用上述作品或内容 "),
      vue.createElementVNode("view", { class: "CopyrightText5" }, " 除非另有说明，江西理工大学企桥工作室相关作品或内容中涉及的商标、标识和标志等，均受商标法保护，且归江西理工大学企桥工作室所有。 "),
      vue.createElementVNode("view", { class: "CopyrightText6" }, " 未经江西理工大学企桥工作室书面许可，任何个人或组织不得以任何方式使用江西理工大学企桥工作室的商标、标识和标志。 "),
      vue.createElementVNode("view", { class: "CopyrightText6" }, " 如需获取或使用江西理工大学企桥工作室作品或内容的许可，请联系企桥工作室或发送电子邮件至[email protected] ")
    ]);
  }
  const PagesUserCopyrightInformationCopyrightInformation = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-7fba5ead"], ["__file", "F:/code/qq-doctor/pages/user/copyrightInformation/copyrightInformation.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        list: ["1", "2", "3", "4"],
        state1: false,
        state2: true
      };
    },
    methods: {
      navToCTRes() {
        uni.navigateTo({
          url: "/pages/user/inspectionResults/inspectionResults"
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "CTWrapp" }, [
      vue.createCommentVNode(" 展示CT检验单列表 "),
      vue.createElementVNode("view", { class: "CTListWrapp" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.list, (item1, index1) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "CTOne",
              key: index1
            }, [
              vue.createCommentVNode(" 提交医生 分析状态 "),
              vue.createElementVNode("view", { class: "CTOneTextWrapp" }, [
                vue.createCommentVNode(" 分析医生 "),
                vue.createElementVNode("view", { class: "text1" }, [
                  vue.createElementVNode("text", null, "提交给赵熙蒙医生的CT图")
                ]),
                vue.createCommentVNode(" 分析状态 "),
                vue.createElementVNode("view", { class: "text2" }, [
                  $data.state1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "分析中")) : vue.createCommentVNode("v-if", true),
                  $data.state2 ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 1,
                    style: { "color": "#FFBB24" }
                  }, "已完成")) : vue.createCommentVNode("v-if", true)
                ])
              ]),
              vue.createCommentVNode(" 图片 提交时间 诊断结果按钮 "),
              vue.createElementVNode("view", { class: "CTOneCentralSectionWrapp" }, [
                vue.createCommentVNode(" 图片 "),
                vue.createElementVNode("view", { class: "CTOneIconWrapp" }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/user/ct.png",
                    mode: "",
                    class: "CTOneIcon"
                  })
                ]),
                vue.createCommentVNode(" 提交时间 检测病变 诊断结果 "),
                vue.createElementVNode("view", { class: "CTOneCentralSectionRightWrapp" }, [
                  vue.createCommentVNode("提交时间 检测病变  "),
                  vue.createElementVNode("view", { class: "CTOneCentralSectionRightText" }, [
                    vue.createElementVNode("text", null, "提交时间: 2023-10-23 21:36"),
                    vue.createElementVNode("text", null, "\\n监测病变")
                  ]),
                  vue.createCommentVNode(" 诊断结果按钮 "),
                  vue.createElementVNode("view", { class: "resButtonWrapp" }, [
                    vue.createElementVNode("view", {
                      class: "resButton",
                      onClick: _cache[0] || (_cache[0] = ($event) => $options.navToCTRes())
                    }, " 诊断结果 ")
                  ])
                ])
              ]),
              vue.createCommentVNode(" 售后服务 评价 "),
              vue.createElementVNode("view", { class: "serviceAndRateWrapp" }, [
                vue.createCommentVNode(" 评价 "),
                vue.createElementVNode("view", { class: "serviceAndRateText1" }, " 评价 "),
                vue.createCommentVNode(" 售后服务 "),
                vue.createElementVNode("view", { class: "serviceAndRateText2" }, "售后服务")
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesUserCTInspectionSheetCTInspectionSheet = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-9a76732d"], ["__file", "F:/code/qq-doctor/pages/user/CTInspectionSheet/CTInspectionSheet.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "" }, " 企业微信 ")
    ]);
  }
  const PagesUserCustomerServiceCustomerService = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "F:/code/qq-doctor/pages/user/customerService/customerService.vue"]]);
  const pages = [
    {
      path: "pages/login/start/start",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationStyle: "custom",
        disableSwipeBack: true,
        "app-plus": {
          bounce: "none"
        }
      }
    },
    {
      path: "pages/login/register/register",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationStyle: "custom",
        "app-plus": {
          bounce: "none"
        }
      }
    },
    {
      path: "pages/login/passwordLogin/passwordLogin",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationStyle: "custom",
        "app-plus": {
          bounce: "none",
          animationType: "none",
          animationDuration: 300
        }
      }
    },
    {
      path: "pages/login/phoneLogin/phoneLogin",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationStyle: "custom",
        "app-plus": {
          bounce: "none"
        }
      }
    },
    {
      path: "pages/main/messagetable",
      style: {
        navigationBarTitleText: "消息",
        enablePullDownRefresh: false,
        "app-plus": {
          bounce: "none"
        }
      }
    },
    {
      path: "pages/login/userAgreement/userAgreement",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/login/privacyPolicy/privacyPolicy",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/registrationWizard/slideWizard/slideWizard",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationStyle: "custom",
        "app-plus": {
          bounce: "none"
        }
      }
    },
    {
      path: "pages/main/mainfront",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/map/mapfront",
      style: {
        navigationBarTitleText: "附近医院",
        enablePullDownRefresh: false
      },
      "app-plus": {}
    },
    {
      path: "pages/medical/medicalfront",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff"
      },
      navigationStyle: "custom"
    },
    {
      path: "pages/order/orderfront",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff",
        navigationStyle: "custom"
      },
      navigationStyle: "custom"
    },
    {
      path: "pages/user/userfront",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#F7F7F7"
      },
      navigationStyle: "custom"
    },
    {
      path: "pages/main/doctordetail",
      style: {
        navigationBarTitleText: "医生详情",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/onlineform",
      style: {
        navigationBarTitleText: "线上表单",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/addpatient",
      style: {
        navigationBarTitleText: "病人信息添加",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/onlineorder",
      style: {
        navigationBarTitleText: "线上预约订单",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/onlineordersuccess",
      style: {
        navigationBarTitleText: "线上预约成功",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/vaccine",
      style: {
        navigationBarTitleText: "疫苗",
        enablePullDownRefresh: false
      }
    },
    {
      path: "components/FuncSelectFront/FuncSelectFront",
      style: {}
    },
    {
      path: "components/FuncSelectContext/FuncSelectContext",
      style: {}
    },
    {
      path: "pages/main/vaccinedetail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/vaccinedetailaction",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/article",
      style: {
        navigationBarTitleText: "文章",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/diseaseknowledge",
      style: {
        navigationBarTitleText: "疾病知识",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/check",
      style: {
        navigationBarTitleText: "检查",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/checkdetail",
      style: {
        navigationBarTitleText: "默认",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/treatment",
      style: {
        navigationBarTitleText: "治疗",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/diseaseknowledgedetail",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/treatmentdetail",
      style: {
        navigationBarTitleText: "治疗",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/doctoronline",
      style: {
        navigationBarTitleText: "直播大厅",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/isbn",
      style: {
        navigationBarTitleText: "科普号",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/main/onlineformtime",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/about/about",
      style: {
        navigationBarTitleText: "关于企桥医健",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/businessLicense/businessLicense",
      style: {
        navigationBarTitleText: "营业执照",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/collect/collect",
      style: {
        navigationBarTitleText: "收藏",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/commonPage/commonPage",
      style: {
        navigationBarTitleText: "同意",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/copyrightInformation/copyrightInformation",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/CTInspectionSheet/CTInspectionSheet",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/customerService/customerService",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/footprint/footprint",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/inspectionResults/inspectionResults",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/modifyPatientInfo/modifyPatientInfo",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/modifyPatientInfo/patienName",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/patientInformation/patientInformation",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/personalInformation/personalInformation",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/personalInformation/userName",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/personalInformation/modifyPhone",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/personalInformation/modifyPassword",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/user/personalInformationCollection/personalInformationCollection",
      style: {
        navigationBarTitleText: "版权信息",
        enablePullDownRefresh: false
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#8AEEEE",
    scrollIndicator: "none",
    "app-plus": {
      scrollIndicator: "none",
      softinputMode: "adjustResize"
    }
  };
  const uniIdRouter = {};
  const tabBar = {
    list: [
      {
        pagePath: "pages/main/mainfront",
        iconPath: "static/img/home.png",
        selectedIconPath: "static/img/homes.png"
      },
      {
        pagePath: "pages/medical/medicalfront",
        iconPath: "static/img/heart.png",
        selectedIconPath: "static/img/hearts.png"
      },
      {
        pagePath: "pages/map/mapfront",
        iconPath: "static/img/hospital.png",
        selectedIconPath: "static/img/hospitals.png"
      },
      {
        pagePath: "pages/order/orderfront",
        iconPath: "static/img/order.png",
        selectedIconPath: "static/img/orders.png"
      },
      {
        pagePath: "pages/user/userfront",
        iconPath: "static/img/my.png",
        selectedIconPath: "static/img/mys.png"
      }
    ],
    backgroundColor: "#FFFFFF"
  };
  const condition = {
    current: 0,
    list: [
      {
        name: "",
        path: "",
        query: ""
      }
    ]
  };
  const e = {
    pages,
    globalStyle,
    uniIdRouter,
    tabBar,
    condition
  };
  function t$1(e2) {
    return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
  }
  function n(e2, t2, n2) {
    return e2(n2 = { path: t2, exports: {}, require: function(e3, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var s = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = n2 || function(e3, t3) {
      var n3 = Object.create || function() {
        function e4() {
        }
        return function(t4) {
          var n4;
          return e4.prototype = t4, n4 = new e4(), e4.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e4) {
        var t4 = n3(this);
        return e4 && t4.mixIn(e4), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e4 = this.extend();
        return e4.init.apply(e4, arguments), e4;
      }, init: function() {
      }, mixIn: function(e4) {
        for (var t4 in e4)
          e4.hasOwnProperty(t4) && (this[t4] = e4[t4]);
        e4.hasOwnProperty("toString") && (this.toString = e4.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e4, n4) {
        e4 = this.words = e4 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e4.length;
      }, toString: function(e4) {
        return (e4 || c2).stringify(this);
      }, concat: function(e4) {
        var t4 = this.words, n4 = e4.words, s3 = this.sigBytes, r3 = e4.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e3.ceil(n4 / 4);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4.words = this.words.slice(0), e4;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e3.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e3.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e4.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e4) {
        for (var t4 = e4.words, n4 = e4.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e4) {
        for (var t4 = e4.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e4.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e4) {
        try {
          return decodeURIComponent(escape(u2.stringify(e4)));
        } catch (e5) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e4) {
        return u2.parse(unescape(encodeURIComponent(e4)));
      } }, h2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e4) {
        "string" == typeof e4 && (e4 = l2.parse(e4)), this._data.concat(e4), this._nDataBytes += e4.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e3.ceil(a3) : e3.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e3.min(4 * c3, r3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += i3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(h3, u3);
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._data = this._data.clone(), e4;
      }, _minBufferSize: 0 });
      r2.Hasher = h2.extend({ cfg: i2.extend(), init: function(e4) {
        this.cfg = this.cfg.extend(e4), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e4) {
        return this._append(e4), this._process(), this;
      }, finalize: function(e4) {
        return e4 && this._append(e4), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e4) {
        return function(t4, n4) {
          return new e4.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e4) {
        return function(t4, n4) {
          return new d2.HMAC.init(e4, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = s, i = (n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e3.abs(e3.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e4[s3];
          e4[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e4[t4 + 0], c3 = e4[t4 + 1], p2 = e4[t4 + 2], f2 = e4[t4 + 3], g2 = e4[t4 + 4], m2 = e4[t4 + 5], y2 = e4[t4 + 6], _2 = e4[t4 + 7], w2 = e4[t4 + 8], v2 = e4[t4 + 9], I2 = e4[t4 + 10], S2 = e4[t4 + 11], b2 = e4[t4 + 12], k = e4[t4 + 13], A2 = e4[t4 + 14], P2 = e4[t4 + 15], T2 = i3[0], C2 = i3[1], x = i3[2], O2 = i3[3];
        T2 = u2(T2, C2, x, O2, o3, 7, a2[0]), O2 = u2(O2, T2, C2, x, c3, 12, a2[1]), x = u2(x, O2, T2, C2, p2, 17, a2[2]), C2 = u2(C2, x, O2, T2, f2, 22, a2[3]), T2 = u2(T2, C2, x, O2, g2, 7, a2[4]), O2 = u2(O2, T2, C2, x, m2, 12, a2[5]), x = u2(x, O2, T2, C2, y2, 17, a2[6]), C2 = u2(C2, x, O2, T2, _2, 22, a2[7]), T2 = u2(T2, C2, x, O2, w2, 7, a2[8]), O2 = u2(O2, T2, C2, x, v2, 12, a2[9]), x = u2(x, O2, T2, C2, I2, 17, a2[10]), C2 = u2(C2, x, O2, T2, S2, 22, a2[11]), T2 = u2(T2, C2, x, O2, b2, 7, a2[12]), O2 = u2(O2, T2, C2, x, k, 12, a2[13]), x = u2(x, O2, T2, C2, A2, 17, a2[14]), T2 = l2(T2, C2 = u2(C2, x, O2, T2, P2, 22, a2[15]), x, O2, c3, 5, a2[16]), O2 = l2(O2, T2, C2, x, y2, 9, a2[17]), x = l2(x, O2, T2, C2, S2, 14, a2[18]), C2 = l2(C2, x, O2, T2, o3, 20, a2[19]), T2 = l2(T2, C2, x, O2, m2, 5, a2[20]), O2 = l2(O2, T2, C2, x, I2, 9, a2[21]), x = l2(x, O2, T2, C2, P2, 14, a2[22]), C2 = l2(C2, x, O2, T2, g2, 20, a2[23]), T2 = l2(T2, C2, x, O2, v2, 5, a2[24]), O2 = l2(O2, T2, C2, x, A2, 9, a2[25]), x = l2(x, O2, T2, C2, f2, 14, a2[26]), C2 = l2(C2, x, O2, T2, w2, 20, a2[27]), T2 = l2(T2, C2, x, O2, k, 5, a2[28]), O2 = l2(O2, T2, C2, x, p2, 9, a2[29]), x = l2(x, O2, T2, C2, _2, 14, a2[30]), T2 = h2(T2, C2 = l2(C2, x, O2, T2, b2, 20, a2[31]), x, O2, m2, 4, a2[32]), O2 = h2(O2, T2, C2, x, w2, 11, a2[33]), x = h2(x, O2, T2, C2, S2, 16, a2[34]), C2 = h2(C2, x, O2, T2, A2, 23, a2[35]), T2 = h2(T2, C2, x, O2, c3, 4, a2[36]), O2 = h2(O2, T2, C2, x, g2, 11, a2[37]), x = h2(x, O2, T2, C2, _2, 16, a2[38]), C2 = h2(C2, x, O2, T2, I2, 23, a2[39]), T2 = h2(T2, C2, x, O2, k, 4, a2[40]), O2 = h2(O2, T2, C2, x, o3, 11, a2[41]), x = h2(x, O2, T2, C2, f2, 16, a2[42]), C2 = h2(C2, x, O2, T2, y2, 23, a2[43]), T2 = h2(T2, C2, x, O2, v2, 4, a2[44]), O2 = h2(O2, T2, C2, x, b2, 11, a2[45]), x = h2(x, O2, T2, C2, P2, 16, a2[46]), T2 = d2(T2, C2 = h2(C2, x, O2, T2, p2, 23, a2[47]), x, O2, o3, 6, a2[48]), O2 = d2(O2, T2, C2, x, _2, 10, a2[49]), x = d2(x, O2, T2, C2, A2, 15, a2[50]), C2 = d2(C2, x, O2, T2, m2, 21, a2[51]), T2 = d2(T2, C2, x, O2, b2, 6, a2[52]), O2 = d2(O2, T2, C2, x, f2, 10, a2[53]), x = d2(x, O2, T2, C2, I2, 15, a2[54]), C2 = d2(C2, x, O2, T2, c3, 21, a2[55]), T2 = d2(T2, C2, x, O2, w2, 6, a2[56]), O2 = d2(O2, T2, C2, x, P2, 10, a2[57]), x = d2(x, O2, T2, C2, y2, 15, a2[58]), C2 = d2(C2, x, O2, T2, k, 21, a2[59]), T2 = d2(T2, C2, x, O2, g2, 6, a2[60]), O2 = d2(O2, T2, C2, x, S2, 10, a2[61]), x = d2(x, O2, T2, C2, p2, 15, a2[62]), C2 = d2(C2, x, O2, T2, v2, 21, a2[63]), i3[0] = i3[0] + T2 | 0, i3[1] = i3[1] + C2 | 0, i3[2] = i3[2] + x | 0, i3[3] = i3[3] + O2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e3.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      function u2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e4, t4, n3, s3, r3, i3, o3) {
        var a3 = e4 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, void function() {
      var e3 = n2, t3 = e3.lib.Base, s2 = e3.enc.Utf8;
      e3.algo.HMAC = t3.extend({ init: function(e4, t4) {
        e4 = this._hasher = new e4.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e4.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e4.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e4 = this._hasher;
        e4.reset(), e4.update(this._iKey);
      }, update: function(e4) {
        return this._hasher.update(e4), this;
      }, finalize: function(e4) {
        var t4 = this._hasher, n3 = t4.finalize(e4);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), n(function(e2, t2) {
    e2.exports = r.HmacMD5;
  })), o = n(function(e2, t2) {
    e2.exports = r.enc.Utf8;
  }), a = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function() {
      var e3 = n2, t3 = e3.lib.WordArray;
      function s2(e4, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e4.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e4.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e3.enc.Base64 = { stringify: function(e4) {
        var t4 = e4.words, n3 = e4.sigBytes, s3 = this._map;
        e4.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e4) {
        var t4 = e4.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e4.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e4, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const c = "FUNCTION", u = "OBJECT", l = "CLIENT_DB", h = "pending", d = "fulfilled", p = "rejected";
  function f(e2) {
    return Object.prototype.toString.call(e2).slice(8, -1).toLowerCase();
  }
  function g(e2) {
    return "object" === f(e2);
  }
  function m(e2) {
    return "function" == typeof e2;
  }
  function y(e2) {
    return function() {
      try {
        return e2.apply(e2, arguments);
      } catch (e3) {
        console.error(e3);
      }
    };
  }
  const _ = "REJECTED", w = "NOT_PENDING";
  class v {
    constructor({ createPromise: e2, retryRule: t2 = _ } = {}) {
      this.createPromise = e2, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== h;
      }
    }
    exec() {
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then((e2) => (this.status = d, Promise.resolve(e2)), (e2) => (this.status = p, Promise.reject(e2))), this.promise) : this.promise;
    }
  }
  function I(e2) {
    return e2 && "string" == typeof e2 ? JSON.parse(e2) : e2;
  }
  const S = true, b = "app", A = I([]), P = b, T = I(""), C = I("[]") || [];
  let O = "";
  try {
    O = "__UNI__0483BE6";
  } catch (e2) {
  }
  let E = {};
  function L(e2, t2 = {}) {
    var n2, s2;
    return n2 = E, s2 = e2, Object.prototype.hasOwnProperty.call(n2, s2) || (E[e2] = t2), E[e2];
  }
  E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const R = ["invoke", "success", "fail", "complete"], U = L("_globalUniCloudInterceptor");
  function N(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) && Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        let s2 = U[e3][t3];
        s2 || (s2 = U[e3][t3] = []), -1 === s2.indexOf(n3) && m(n3) && s2.push(n3);
      }(e2, n2, t2[n2]);
    });
  }
  function D(e2, t2) {
    U[e2] || (U[e2] = {}), g(t2) ? Object.keys(t2).forEach((n2) => {
      R.indexOf(n2) > -1 && function(e3, t3, n3) {
        const s2 = U[e3][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e2, n2, t2[n2]);
    }) : delete U[e2];
  }
  function M(e2, t2) {
    return e2 && 0 !== e2.length ? e2.reduce((e3, n2) => e3.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e2, t2) {
    return U[e2] && U[e2][t2] || [];
  }
  function F(e2) {
    N("callObject", e2);
  }
  const K = L("_globalUniCloudListener"), j = "response", B = "needLogin", $ = "refreshToken", W = "clientdb", H = "cloudfunction", z = "cloudobject";
  function J(e2) {
    return K[e2] || (K[e2] = []), K[e2];
  }
  function V(e2, t2) {
    const n2 = J(e2);
    n2.includes(t2) || n2.push(t2);
  }
  function G(e2, t2) {
    const n2 = J(e2), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Y(e2, t2) {
    const n2 = J(e2);
    for (let e3 = 0; e3 < n2.length; e3++) {
      (0, n2[e3])(t2);
    }
  }
  let Q, X = false;
  function Z() {
    return Q || (Q = new Promise((e2) => {
      X && e2(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (X = true, e2());
        }
        X || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), Q);
  }
  function ee(e2) {
    const t2 = {};
    for (const n2 in e2) {
      const s2 = e2[n2];
      m(s2) && (t2[n2] = y(s2));
    }
    return t2;
  }
  class te extends Error {
    constructor(e2) {
      super(e2.message), this.errMsg = e2.message || e2.errMsg || "unknown system error", this.code = this.errCode = e2.code || e2.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e2.subject || e2.errSubject, this.cause = e2.cause, this.requestId = e2.requestId;
    }
    toJson(e2 = 0) {
      if (!(e2 >= 10))
        return e2++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e2) : this.cause };
    }
  }
  var ne = { request: (e2) => uni.request(e2), uploadFile: (e2) => uni.uploadFile(e2), setStorageSync: (e2, t2) => uni.setStorageSync(e2, t2), getStorageSync: (e2) => uni.getStorageSync(e2), removeStorageSync: (e2) => uni.removeStorageSync(e2), clearStorageSync: () => uni.clearStorageSync() };
  function se(e2) {
    return e2 && se(e2.__v_raw) || e2;
  }
  function re() {
    return { token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"), tokenExpired: ne.getStorageSync("uni_id_token_expired") };
  }
  function ie({ token: e2, tokenExpired: t2 } = {}) {
    e2 && ne.setStorageSync("uni_id_token", e2), t2 && ne.setStorageSync("uni_id_token_expired", t2);
  }
  let oe, ae;
  function ce() {
    return oe || (oe = uni.getSystemInfoSync()), oe;
  }
  function ue() {
    let e2, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e2 = s2, t2 = n2;
      }
    } catch (e3) {
    }
    return { channel: e2, scene: t2 };
  }
  function le() {
    const e2 = uni.getLocale && uni.getLocale() || "en";
    if (ae)
      return { ...ae, locale: e2, LOCALE: e2 };
    const t2 = ce(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e3 = 0; e3 < o2.length; e3++) {
      delete t2[o2[e3]];
    }
    return ae = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...ue(), ...t2 }, { ...ae, locale: e2, LOCALE: e2 };
  }
  var he = { sign: function(e2, t2) {
    let n2 = "";
    return Object.keys(e2).sort().forEach(function(t3) {
      e2[t3] && (n2 = n2 + "&" + t3 + "=" + e2[t3]);
    }), n2 = n2.slice(1), i(n2, t2).toString();
  }, wrappedRequest: function(e2, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e2, { complete(e3) {
        e3 || (e3 = {});
        const t3 = e3.data && e3.data.header && e3.data.header["x-serverless-request-id"] || e3.header && e3.header["request-id"];
        if (!e3.statusCode || e3.statusCode >= 400)
          return s2(new te({ code: "SYS_ERR", message: e3.errMsg || "request:fail", requestId: t3 }));
        const r2 = e3.data;
        if (r2.error)
          return s2(new te({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e2) {
    return a.stringify(o.parse(e2));
  } };
  var de = class {
    constructor(e2) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t2))
          throw new Error(`${t2} required`);
      }), this.config = Object.assign({}, { endpoint: 0 === e2.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e2), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e3) => {
        if (!e3.result || !e3.result.accessToken)
          throw new te({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e3.result.accessToken);
      }), retryRule: w });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e2) {
      this.accessToken = e2;
    }
    requestWrapped(e2) {
      return he.wrappedRequest(e2, this.adapter.request);
    }
    requestAuth(e2) {
      return this.requestWrapped(e2);
    }
    request(e2, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e2) : this.requestWrapped(e2).catch((t3) => new Promise((e3, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e3();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e2);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e2);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e2) {
      const t2 = Object.assign({}, e2);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = he.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = he.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e2) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e2.name, functionArgs: e2.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e2) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e2) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e2) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new te({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: l2, signature: h2, host: d2, ossPath: p2, id: g2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: l2, Signature: h2, host: d2, id: g2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e3 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: g2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = he.toBase64(e3);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e2, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e2, fileID: c2 };
      if ((await this.reportOSSUpload({ id: g2 })).success)
        return { success: true, filePath: e2, fileID: c2 };
      throw new te({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e2 } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e2) && 0 !== e2.length || n2(new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e2.map((e3) => ({ fileID: e3, tempFileURL: e3 })) });
      });
    }
    async getFileInfo({ fileList: e2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e2.map((e3) => e3.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var pe = { init(e2) {
    const t2 = new de(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const fe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var ge;
  !function(e2) {
    e2.local = "local", e2.none = "none", e2.session = "session";
  }(ge || (ge = {}));
  var me = function() {
  }, ye = n(function(e2, t2) {
    var n2;
    e2.exports = (n2 = r, function(e3) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [], c2 = [];
      !function() {
        function t4(t5) {
          for (var n4 = e3.sqrt(t5), s4 = 2; s4 <= n4; s4++)
            if (!(t5 % s4))
              return false;
          return true;
        }
        function n3(e4) {
          return 4294967296 * (e4 - (0 | e4)) | 0;
        }
        for (var s3 = 2, r3 = 0; r3 < 64; )
          t4(s3) && (r3 < 8 && (a2[r3] = n3(e3.pow(s3, 0.5))), c2[r3] = n3(e3.pow(s3, 1 / 3)), r3++), s3++;
      }();
      var u2 = [], l2 = o2.SHA256 = i2.extend({ _doReset: function() {
        this._hash = new r2.init(a2.slice(0));
      }, _doProcessBlock: function(e4, t4) {
        for (var n3 = this._hash.words, s3 = n3[0], r3 = n3[1], i3 = n3[2], o3 = n3[3], a3 = n3[4], l3 = n3[5], h2 = n3[6], d2 = n3[7], p2 = 0; p2 < 64; p2++) {
          if (p2 < 16)
            u2[p2] = 0 | e4[t4 + p2];
          else {
            var f2 = u2[p2 - 15], g2 = (f2 << 25 | f2 >>> 7) ^ (f2 << 14 | f2 >>> 18) ^ f2 >>> 3, m2 = u2[p2 - 2], y2 = (m2 << 15 | m2 >>> 17) ^ (m2 << 13 | m2 >>> 19) ^ m2 >>> 10;
            u2[p2] = g2 + u2[p2 - 7] + y2 + u2[p2 - 16];
          }
          var _2 = s3 & r3 ^ s3 & i3 ^ r3 & i3, w2 = (s3 << 30 | s3 >>> 2) ^ (s3 << 19 | s3 >>> 13) ^ (s3 << 10 | s3 >>> 22), v2 = d2 + ((a3 << 26 | a3 >>> 6) ^ (a3 << 21 | a3 >>> 11) ^ (a3 << 7 | a3 >>> 25)) + (a3 & l3 ^ ~a3 & h2) + c2[p2] + u2[p2];
          d2 = h2, h2 = l3, l3 = a3, a3 = o3 + v2 | 0, o3 = i3, i3 = r3, r3 = s3, s3 = v2 + (w2 + _2) | 0;
        }
        n3[0] = n3[0] + s3 | 0, n3[1] = n3[1] + r3 | 0, n3[2] = n3[2] + i3 | 0, n3[3] = n3[3] + o3 | 0, n3[4] = n3[4] + a3 | 0, n3[5] = n3[5] + l3 | 0, n3[6] = n3[6] + h2 | 0, n3[7] = n3[7] + d2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        return n3[r3 >>> 5] |= 128 << 24 - r3 % 32, n3[14 + (r3 + 64 >>> 9 << 4)] = e3.floor(s3 / 4294967296), n3[15 + (r3 + 64 >>> 9 << 4)] = s3, t4.sigBytes = 4 * n3.length, this._process(), this._hash;
      }, clone: function() {
        var e4 = i2.clone.call(this);
        return e4._hash = this._hash.clone(), e4;
      } });
      t3.SHA256 = i2._createHelper(l2), t3.HmacSHA256 = i2._createHmacHelper(l2);
    }(Math), n2.SHA256);
  }), _e = ye, we = n(function(e2, t2) {
    e2.exports = r.HmacSHA256;
  });
  const ve = () => {
    let e2;
    if (!Promise) {
      e2 = () => {
      }, e2.promise = {};
      const t3 = () => {
        throw new te({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e2.promise, "then", { get: t3 }), Object.defineProperty(e2.promise, "catch", { get: t3 }), e2;
    }
    const t2 = new Promise((t3, n2) => {
      e2 = (e3, s2) => e3 ? n2(e3) : t3(s2);
    });
    return e2.promise = t2, e2;
  };
  function Ie(e2) {
    return void 0 === e2;
  }
  function Se(e2) {
    return "[object Null]" === Object.prototype.toString.call(e2);
  }
  var be;
  function ke(e2) {
    const t2 = (n2 = e2, "[object Array]" === Object.prototype.toString.call(n2) ? e2 : [e2]);
    var n2;
    for (const e3 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e3;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e2) {
    e2.WEB = "web", e2.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ae = { adapter: null, runtime: void 0 }, Pe = ["anonymousUuidKey"];
  class Te extends me {
    constructor() {
      super(), Ae.adapter.root.tcbObject || (Ae.adapter.root.tcbObject = {});
    }
    setItem(e2, t2) {
      Ae.adapter.root.tcbObject[e2] = t2;
    }
    getItem(e2) {
      return Ae.adapter.root.tcbObject[e2];
    }
    removeItem(e2) {
      delete Ae.adapter.root.tcbObject[e2];
    }
    clear() {
      delete Ae.adapter.root.tcbObject;
    }
  }
  function Ce(e2, t2) {
    switch (e2) {
      case "local":
        return t2.localStorage || new Te();
      case "none":
        return new Te();
      default:
        return t2.sessionStorage || new Te();
    }
  }
  class xe {
    constructor(e2) {
      if (!this._storage) {
        this._persistence = Ae.adapter.primaryStorage || e2.persistence, this._storage = Ce(this._persistence, Ae.adapter);
        const t2 = `access_token_${e2.env}`, n2 = `access_token_expire_${e2.env}`, s2 = `refresh_token_${e2.env}`, r2 = `anonymous_uuid_${e2.env}`, i2 = `login_type_${e2.env}`, o2 = `user_info_${e2.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e2) {
      if (e2 === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e2;
      const n2 = Ce(e2, Ae.adapter);
      for (const e3 in this.keys) {
        const s2 = this.keys[e3];
        if (t2 && Pe.includes(e3))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e2, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e2, r2);
      } catch (e3) {
        throw e3;
      }
    }
    getStore(e2, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e3) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e2);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e2) {
      this._storage.removeItem(e2);
    }
  }
  const Oe = {}, Ee = {};
  function Le(e2) {
    return Oe[e2];
  }
  class Re {
    constructor(e2, t2) {
      this.data = t2 || null, this.name = e2;
    }
  }
  class Ue extends Re {
    constructor(e2, t2) {
      super("error", { error: e2, data: t2 }), this.error = e2;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e2, t2) {
      return function(e3, t3, n2) {
        n2[e3] = n2[e3] || [], n2[e3].push(t3);
      }(e2, t2, this._listeners), this;
    }
    off(e2, t2) {
      return function(e3, t3, n2) {
        if (n2 && n2[e3]) {
          const s2 = n2[e3].indexOf(t3);
          -1 !== s2 && n2[e3].splice(s2, 1);
        }
      }(e2, t2, this._listeners), this;
    }
    fire(e2, t2) {
      if (e2 instanceof Ue)
        return console.error(e2.error), this;
      const n2 = "string" == typeof e2 ? new Re(e2, t2 || {}) : e2;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e3 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e3)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e2) {
      return this._listeners[e2] && this._listeners[e2].length > 0;
    }
  }();
  function De(e2, t2) {
    Ne.on(e2, t2);
  }
  function Me(e2, t2 = {}) {
    Ne.fire(e2, t2);
  }
  function qe(e2, t2) {
    Ne.off(e2, t2);
  }
  const Fe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", Be = "anonymousConverted", $e = "refreshAccessToken";
  var We;
  !function(e2) {
    e2.ANONYMOUS = "ANONYMOUS", e2.WECHAT = "WECHAT", e2.WECHAT_PUBLIC = "WECHAT-PUBLIC", e2.WECHAT_OPEN = "WECHAT-OPEN", e2.CUSTOM = "CUSTOM", e2.EMAIL = "EMAIL", e2.USERNAME = "USERNAME", e2.NULL = "NULL";
  }(We || (We = {}));
  const He = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ze = { "X-SDK-Version": "1.3.5" };
  function Je(e2, t2, n2) {
    const s2 = e2[t2];
    e2[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e2, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e3;
        if (e3 = o2, "[object FormData]" !== Object.prototype.toString.call(e3))
          t3.data = { ...o2, ...r2 };
        else
          for (const e4 in r2)
            o2.append(e4, r2[e4]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e2, t3);
    };
  }
  function Ve() {
    const e2 = Math.random().toString(16).slice(2);
    return { data: { seqId: e2 }, headers: { ...ze, "x-seqid": e2 } };
  }
  class Ge {
    constructor(e2 = {}) {
      var t2;
      this.config = e2, this._reqClass = new Ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Le(this.config.env), this._localCache = (t2 = this.config.env, Ee[t2]), Je(this._reqClass, "post", [Ve]), Je(this._reqClass, "upload", [Ve]), Je(this._reqClass, "download", [Ve]);
    }
    async post(e2) {
      return await this._reqClass.post(e2);
    }
    async upload(e2) {
      return await this._reqClass.upload(e2);
    }
    async download(e2) {
      return await this._reqClass.download(e2);
    }
    async refreshAccessToken() {
      let e2, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e2 = await this._refreshAccessTokenPromise;
      } catch (e3) {
        t2 = e3;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e2;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e2), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new te({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e3 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e3 || "REFRESH_TOKEN_EXPIRED" === e3 || "INVALID_REFRESH_TOKEN" === e3) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e3) {
            const e4 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e4, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Me(Ke), this._cache.removeStore(n2);
        }
        throw new te({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Me($e), this._cache.setStore(e2, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e2, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new te({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e2), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e2, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e2, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === He.indexOf(e2)) {
        const { refreshTokenKey: e3 } = this._cache.keys;
        this._cache.getStore(e3) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e2) {
        o2 = new FormData();
        for (let e3 in o2)
          o2.hasOwnProperty(e3) && void 0 !== o2[e3] && o2.append(e3, i2[e3]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e3 in i2)
          void 0 !== i2[e3] && (o2[e3] = i2[e3]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = { ...l2, ...d2 });
      let p2 = function(e3, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e4 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e4}=${encodeURIComponent(n3[e4])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e3}${t3}`;
      }(fe, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (p2 += h2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new te({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e2, t2 = {}) {
      const n2 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === He.indexOf(e2)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e2, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new te({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new te({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
  }
  const Ye = {};
  function Qe(e2) {
    return Ye[e2];
  }
  class Xe {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env);
    }
    setRefreshToken(e2) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e2);
    }
    setAccessToken(e2, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e2), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2);
    }
  }
  class Ze {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e2, this._cache = Le(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e2 });
    }
    linkWithRedirect(e2) {
      e2.signInWithRedirect();
    }
    updatePassword(e2, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e2 });
    }
    updateEmail(e2) {
      return this._request.send("auth.updateEmail", { newEmail: e2 });
    }
    updateUsername(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e2 });
    }
    async getLinkedUidList() {
      const { data: e2 } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e2;
      return n2.forEach((e3) => {
        e3.wxOpenId && e3.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e2) {
      return this._request.send("auth.setPrimaryUid", { uid: e2 });
    }
    unlink(e2) {
      return this._request.send("auth.unlink", { platform: e2 });
    }
    async update(e2) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e2, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e2 } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e2), e2;
    }
    setUserInfo() {
      const { userInfoKey: e2 } = this._cache.keys, t2 = this._cache.getStore(e2);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e3) => {
        this[e3] = t2[e3];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e2) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e2), this.setUserInfo();
    }
  }
  class et {
    constructor(e2) {
      if (!e2)
        throw new te({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Le(e2);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e2);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e2, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e3 = new et(this.config.env);
        return await e3.user.refresh(), e3;
      }
      throw new te({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e2) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e2 });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Me(Be, { env: this.config.env }), Me(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new te({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e2) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e2), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e2, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Me(Fe), Me(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new te({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new te({ message: "邮箱登录失败" });
    }
    async activate(e2) {
      return this._request.send("auth.activateEndUserMail", { token: e2 });
    }
    async resetPasswordWithToken(e2, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e2, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e2, t2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e2, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Me(Fe), Me(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new te({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new te({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e2) {
      this.config = e2, this._cache = Le(e2.env), this._request = Qe(e2.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e2 = this.hasLoginState();
      return e2 && e2.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e2, t2) {
      return new st(this.config).signIn(e2, t2);
    }
    signInWithUsernameAndPassword(e2, t2) {
      return new rt(this.config).signIn(e2, t2);
    }
    async linkAndRetrieveDataWithTicket(e2) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e2);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new te({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e2, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e2);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e2), this._cache.removeStore(t2), this._cache.removeStore(n2), Me(Fe), Me(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e2, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e2, password: t2 });
    }
    async sendPasswordResetEmail(e2) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e2 });
    }
    onLoginStateChanged(e2) {
      De(Fe, () => {
        const t3 = this.hasLoginState();
        e2.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e2.call(this, t2);
    }
    onLoginStateExpired(e2) {
      De(Ke, e2.bind(this));
    }
    onAccessTokenRefreshed(e2) {
      De($e, e2.bind(this));
    }
    onAnonymousConverted(e2) {
      De(Be, e2.bind(this));
    }
    onLoginTypeChanged(e2) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e2.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e2 } = this._cache.keys;
      return this._cache.getStore(e2) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e2) {
      if ("string" != typeof e2)
        throw new te({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e2 });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e2) {
      return new nt(this.config).signIn(e2);
    }
    shouldRefreshAccessToken(e2) {
      this._request._shouldRefreshAccessTokenHook = e2.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e2) => e2.code ? e2 : { ...e2.data, requestId: e2.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e2, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e2);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e2) {
      const { env: t2 } = e2.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e2) {
      const { loginType: t2, persistence: n2, env: s2 } = e2.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e3, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e4) => {
        201 === e4.statusCode ? t2(null, { fileID: l2, requestId: d2 }) : t2(new te({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e4.data}` }));
      }).catch((e4) => {
        t2(e4);
      });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, at = function(e2, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e2;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e3) => {
      t2(null, e3);
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ct = function({ fileList: e2 }, t2) {
    if (t2 = t2 || ve(), !e2 || !Array.isArray(e2))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e2)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e2 };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.delete_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, ut = function({ fileList: e2 }, t2) {
    t2 = t2 || ve(), e2 && Array.isArray(e2) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e2)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e3) => {
      e3.code ? t2(null, e3) : t2(null, { fileList: e3.data.download_list, requestId: e3.requestId });
    }).catch((e3) => {
      t2(e3);
    }), t2.promise;
  }, lt = async function({ fileID: e2 }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e2, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e3) => {
        e3(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, ht = function({ name: e2, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e3) {
      return Promise.reject(e3);
    }
    if (!e2)
      return Promise.reject(new te({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e2, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e3) => {
      if (e3.code)
        o2(null, e3);
      else {
        let t3 = e3.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e3.requestId });
        else
          try {
            t3 = JSON.parse(e3.data.response_data), o2(null, { result: t3, requestId: e3.requestId });
          } catch (e4) {
            o2(new te({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e3) => {
      o2(e3);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e2) {
      this.config = e2 || this.config, this.authObj = void 0;
    }
    init(e2) {
      switch (Ae.adapter || (this.requestClient = new Ae.adapter.reqClass({ timeout: e2.timeout || 5e3, timeoutMsg: `请求在${(e2.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e2 }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e2 } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e2 || Ae.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e3) {
        const { env: t3 } = e3;
        Oe[t3] = new xe(e3), Ee[t3] = new xe({ ...e3, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ge(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e2, t2) {
      return De.apply(this, [e2, t2]);
    }
    off(e2, t2) {
      return qe.apply(this, [e2, t2]);
    }
    callFunction(e2, t2) {
      return ht.apply(this, [e2, t2]);
    }
    deleteFile(e2, t2) {
      return ct.apply(this, [e2, t2]);
    }
    getTempFileURL(e2, t2) {
      return ut.apply(this, [e2, t2]);
    }
    downloadFile(e2, t2) {
      return lt.apply(this, [e2, t2]);
    }
    uploadFile(e2, t2) {
      return ot.apply(this, [e2, t2]);
    }
    getUploadMetadata(e2, t2) {
      return at.apply(this, [e2, t2]);
    }
    registerExtension(e2) {
      pt[e2.name] = e2;
    }
    async invokeExtension(e2, t2) {
      const n2 = pt[e2];
      if (!n2)
        throw new te({ message: `扩展${e2} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e2) {
      const { adapter: t2, runtime: n2 } = ke(e2) || {};
      t2 && (Ae.adapter = t2), n2 && (Ae.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e2, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e2 + t2;
  }
  class yt {
    post(e2) {
      const { url: t2, data: n2, headers: s2 } = e2;
      return new Promise((e3, r2) => {
        ne.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e3(t3);
        }, fail(e4) {
          r2(e4);
        } });
      });
    }
    upload(e2) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e2, c2 = ne.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e3) {
          const n3 = { statusCode: e3.statusCode, data: e3.data || {} };
          200 === e3.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e3) {
          n2(new Error(e3.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e2.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e2.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e2, t2) {
    ne.setStorageSync(e2, t2);
  }, getItem: (e2) => ne.getStorageSync(e2), removeItem(e2) {
    ne.removeStorageSync(e2);
  }, clear() {
    ne.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e2) {
    e2.env = e2.spaceId;
    const t2 = It.call(this, e2);
    t2.config.provider = "tencent", t2.config.spaceId = e2.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e3) {
      const t3 = n2.call(this, e3);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e4) => {
        var n3;
        t3[e4] = (n3 = t3[e4], function(e5) {
          e5 = e5 || {};
          const { success: t4, fail: s2, complete: r2 } = ee(e5);
          if (!(t4 || s2 || r2))
            return n3.call(this, e5);
          n3.call(this, e5).then((e6) => {
            t4 && t4(e6), r2 && r2(e6);
          }, (e6) => {
            s2 && s2(e6), r2 && r2(e6);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends de {
    getAccessToken() {
      return new Promise((e2, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e2(n2);
      });
    }
    setupRequest(e2, t2) {
      const n2 = Object.assign({}, e2, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = he.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = re();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e2, formData: t2, name: n2, filePath: s2, fileType: r2, success(e3) {
          e3 && e3.statusCode < 400 ? o2(e3) : a2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          a2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e3) => {
          i2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e2, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new te({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e2, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e2, fileID: r2 }) : s3(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e2 }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e2 }) };
      return this.request(this.setupRequest(t2)).then((e3) => {
        if (e3.success)
          return e3.result;
        throw new te({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e2, maxAge: t2 } = {}) {
      if (!Array.isArray(e2) || 0 === e2.length)
        throw new te({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const n2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e2, maxAge: t2 }) };
      return this.request(this.setupRequest(n2)).then((e3) => {
        if (e3.success)
          return { fileList: e3.result.fileList.map((e4) => ({ fileID: e4.fileID, tempFileURL: e4.tempFileURL })) };
        throw new te({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e2) {
    const t2 = new bt(e2), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } }, At = n(function(e2, t2) {
    e2.exports = r.enc.Hex;
  });
  function Pt(e2 = "", t2 = {}) {
    const { data: n2, functionName: s2, method: r2, headers: i2, signHeaderKeys: o2 = [], config: a2 } = t2, c2 = Date.now(), u2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e3) {
      var t3 = 16 * Math.random() | 0;
      return ("x" === e3 ? t3 : 3 & t3 | 8).toString(16);
    }), l2 = Object.assign({}, i2, { "x-from-app-id": a2.appId, "x-from-env-id": a2.envId, "x-to-env-id": a2.envId, "x-from-instance-id": c2, "x-from-function-name": s2, "x-client-timestamp": c2, "x-alipay-source": "client", "x-request-id": u2, "x-alipay-callid": u2 }), h2 = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o2), [d2 = "", p2 = ""] = e2.split("?") || [], f2 = function(e3) {
      const t3 = e3.signedHeaders.join(";"), n3 = e3.signedHeaders.map((t4) => `${t4.toLowerCase()}:${e3.headers[t4]}
`).join(""), s3 = _e(e3.body).toString(At), r3 = `${e3.method.toUpperCase()}
${e3.path}
${e3.query}
${n3}
${t3}
${s3}
`, i3 = _e(r3).toString(At), o3 = `HMAC-SHA256
${e3.timestamp}
${i3}
`, a3 = we(o3, e3.secretKey).toString(At);
      return `HMAC-SHA256 Credential=${e3.secretId}, SignedHeaders=${t3}, Signature=${a3}`;
    }({ path: d2, query: p2, method: r2, headers: l2, timestamp: c2, body: JSON.stringify(n2), secretId: a2.secretId, secretKey: a2.secretKey, signedHeaders: h2.sort() });
    return { url: `${a2.endpoint}${e2.replace(/^\//, "")}`, headers: Object.assign({}, l2, { Authorization: f2 }) };
  }
  function Tt({ url: e2, data: t2, method: n2 = "POST", headers: s2 = {} }) {
    return new Promise((r2, i2) => {
      ne.request({ url: e2, method: n2, data: t2, header: s2, dataType: "json", complete: (e3 = {}) => {
        if (!e3.statusCode || e3.statusCode >= 400) {
          const { errMsg: t3 } = e3.data || {};
          return i2(new te({ code: "SYS_ERR", message: t3 || e3.errMsg || "request:fail" }));
        }
        r2({ status: e3.statusCode, data: e3.data, headers: e3.header });
      } });
    });
  }
  function Ct(e2, t2) {
    const { path: n2, data: s2, method: r2 = "GET" } = e2, { url: i2, headers: o2 } = Pt(n2, { functionName: "", data: s2, method: r2, headers: { "x-alipay-cloud-mode": "oss", "x-data-api-type": "oss", "x-expire-timestamp": Date.now() + 6e4 }, signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"], config: t2 });
    return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e3) => {
      const t3 = e3.data || {};
      if (!t3.success)
        throw new te({ code: e3.code, message: e3.message, requestId: e3.trace_id });
      return t3.data || {};
    }).catch((e3) => {
      throw new te({ code: e3.errCode, message: e3.errMsg, requestId: e3.requestId });
    });
  }
  function xt(e2 = "") {
    const t2 = e2.trim().replace(/^cloud:\/\//, ""), n2 = t2.indexOf("/");
    if (n2 <= 0)
      throw new te({ code: "INVALID_PARAM", message: "fileID不合法" });
    const s2 = t2.substring(0, n2), r2 = t2.substring(n2 + 1);
    return s2 !== this.config.envId && console.warn("file ".concat(e2, " does not belong to env ").concat(this.config.envId)), r2;
  }
  var Ot = class {
    constructor(e2) {
      ["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((t3) => {
        if (!Object.prototype.hasOwnProperty.call(e2, t3))
          throw new Error(`${t3} required`);
      });
      const { spaceAppId: t2, accessKey: n2, ...s2 } = e2;
      this.config = Object.assign({}, { endpoint: e2.endpoint || `https://${e2.envId}.api-hz.cloudbasefunction.cn/`, envId: e2.spaceId, appId: t2, secretId: n2 }, s2);
    }
    callFunction(e2) {
      return function(e3, t2) {
        const { name: n2, data: s2 } = e3, r2 = "POST", { url: i2, headers: o2 } = Pt("/functions/invokeFunction", { functionName: n2, data: s2, method: r2, headers: { "x-to-function-name": n2 }, signHeaderKeys: ["x-to-function-name"], config: t2 });
        return Tt({ url: i2, data: s2, method: r2, headers: o2 }).then((e4) => (e4.errCode = 0, e4.success = true, e4.requestId = e4.requestID || e4.requestId, e4.result = e4.data, delete e4.requestID, delete e4.data, e4)).catch((e4) => {
          throw new te({ code: e4.errCode, message: e4.errMsg, requestId: e4.requestId });
        });
      }(e2, this.config);
    }
    uploadFileToOSS({ url: e2, filePath: t2, fileType: n2, formData: s2, onUploadProgress: r2 }) {
      return new Promise((i2, o2) => {
        const a2 = ne.uploadFile({ url: e2, filePath: t2, fileType: n2, formData: s2, success(e3) {
          e3 && e3.statusCode < 400 ? i2(e3) : o2(new te({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e3) {
          o2(new te({ code: e3.code || "UPLOAD_FAILED", message: e3.message || e3.errMsg || "文件上传失败" }));
        } });
        "function" == typeof r2 && a2 && "function" == typeof a2.onProgressUpdate && a2.onProgressUpdate((e3) => {
          r2({ loaded: e3.totalBytesSent, total: e3.totalBytesExpectedToSend });
        });
      });
    }
    async uploadFile({ filePath: e2, cloudPath: t2 = "", fileType: n2 = "image", onUploadProgress: s2 }) {
      if ("string" !== f(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new te({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const r2 = await Ct({ path: "/".concat(t2.replace(/^\//, ""), "?post_url") }, this.config), { file_id: i2, upload_url: o2, form_data: a2 } = r2, c2 = a2 && a2.reduce((e3, t3) => (e3[t3.key] = t3.value, e3), {});
      return this.uploadFileToOSS({ url: o2, filePath: e2, fileType: n2, formData: c2, onUploadProgress: s2 }).then(() => ({ fileID: i2 }));
    }
    async getTempFileURL({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2) {
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" }));
          const e3 = xt.call(this, t3);
          s2.push({ file_id: e3, expire: 600 });
        }
        Ct({ path: "/?download_url", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: e4.file_id, tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
    async deleteFile({ fileList: e2 }) {
      return new Promise((t2, n2) => {
        (!e2 || e2.length < 0) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList不能为空数组" })), e2.length > 50 && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList数组长度不能超过50" }));
        const s2 = [];
        for (const t3 of e2)
          "string" !== f(t3) && n2(new te({ errCode: "INVALID_PARAM", errMsg: "fileList的元素必须是非空的字符串" })), s2.push(xt.call(this, t3));
        Ct({ path: "/?delete", data: { file_list: s2 }, method: "POST" }, this.config).then((e3) => {
          const { file_list: n3 = [] } = e3;
          t2({ fileList: n3.map((e4) => ({ fileID: e4.file_id, tempFileURL: e4.download_url })) });
        }).catch((e3) => n2(e3));
      });
    }
  };
  var Et = { init: (e2) => {
    e2.envId = e2.spaceId, e2.provider = "alipay";
    const t2 = new Ot(e2);
    return t2.auth = function() {
      return { signInAnonymously: function() {
        return Promise.resolve();
      }, getLoginState: function() {
        return Promise.resolve(true);
      } };
    }, t2;
  } };
  function Lt({ data: e2 }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e2 || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e3 } = re();
      e3 && (n2.uniIdToken = e3);
    }
    return n2;
  }
  async function Rt({ name: e2, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb", alipay: "alipay" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e2}`;
    return new Promise((t3, n3) => {
      ne.request({ method: "POST", url: o2, data: { name: e2, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e3) {
        t3(e3);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e3 } = {}) => {
      const { code: t3, message: n3 } = e3 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e2}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e2}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e3 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e3), new Error(e3);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e3 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e3), new Error(e3);
          }
        }
        return this._callCloudFunction({ name: e2, data: t2 });
      }
      return new Promise((e3, n4) => {
        const s4 = Lt.call(this, { data: t2 });
        ne.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new te({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e3({ result: s5 }), fail(e4) {
          n4(new te({ code: e4.code || e4.errCode || "SYS_ERR", message: e4.message || e4.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Ut = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var Nt = /[\\^$.*+?()[\]{}|]/g, Dt = RegExp(Nt.source);
  function Mt(e2, t2, n2) {
    return e2.replace(new RegExp((s2 = t2) && Dt.test(s2) ? s2.replace(Nt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Ft = "request", Kt = "response", jt = "both";
  const kn = { code: 2e4, message: "System error" }, An = { code: 20101, message: "Invalid client" };
  function Cn(e2) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e2 || {};
    return new te({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || kn.code, message: r2 || o2, cause: a2 });
  }
  let On;
  function Nn({ secretType: e2 } = {}) {
    return e2 === Ft || e2 === Kt || e2 === jt;
  }
  function Dn({ name: e2, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e2 && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function Mn({ provider: e2, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ce();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e3, spaceId: t3 } = {}) {
      const n3 = A;
      if (!n3)
        return {};
      e3 = function(e4) {
        return "tencent" === e4 ? "tcb" : e4;
      }(e3);
      const s3 = n3.find((n4) => n4.provider === e3 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e2, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const l2 = function(e3, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e3.length; i3++) {
        const o3 = e3[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e4) => e4.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!l2)
      return false;
    if ((c2[l2] || []).find((e3 = {}) => e3.appId === s2 && (e3.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), Cn(An);
  }
  function qn({ functionName: e2, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e2, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Fn(e2) {
    const t2 = e2.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Lt.call(e2, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb", alipay: "alipay" }[this.config.provider], i2 = Nn(n3), o2 = Dn(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e3) => (e3.errCode = 0, !a2 && qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), Promise.resolve(e3)), (e3) => (!a2 && qn.call(this, { functionName: s2, result: e3, logPvd: r2 }), e3 && e3.message && (e3.message = function({ message: e4 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e4.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e5 = 1; e5 < a3.length; e5++)
            c2 = Mt(c2, `{$${e5}}`, a3[e5]);
          for (const e5 in t3)
            c2 = Mt(c2, `{${e5}}`, t3[e5]);
          return "replace" === o3 ? c2 : e4 + c2;
        }
        return e4;
      }({ message: `[${n3.name}]: ${e3.message}`, formatter: Ut, extraInfo: { functionName: s2 } })), Promise.reject(e3)));
    };
    e2.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e2.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e2.__dev__.debugInfo && !e2.__dev__.debugInfo.forceRemote && C ? (e2._callCloudFunction || (e2._callCloudFunction = n2, e2._callLocalFunction = Rt), o2 = Rt) : o2 = n2, o2 = o2.bind(e2), Dn(t3))
        a2 = n2.call(e2, t3);
      else if (Nn(t3)) {
        a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapEncryptDataCallFunction(n2.bind(e2))(t3);
      } else if (Mn({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new On({ secretType: t3.secretType, uniCloudIns: e2 }).wrapVerifyClientCallFunction(n2.bind(e2))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  On = class {
    constructor() {
      throw Cn({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Kn = Symbol("CLIENT_DB_INTERNAL");
  function jn(e2, t2) {
    return e2.then = "DoNotReturnProxyWithAFunctionNamedThen", e2._internalType = Kn, e2.inspect = null, e2.__v_raw = void 0, new Proxy(e2, { get(e3, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e3[n2];
      if (n2 in e3 || "string" != typeof n2) {
        const t3 = e3[n2];
        return "function" == typeof t3 ? t3.bind(e3) : t3;
      }
      return t2.get(e3, n2, s2);
    } });
  }
  function Bn(e2) {
    return { on: (t2, n2) => {
      e2[t2] = e2[t2] || [], e2[t2].indexOf(n2) > -1 || e2[t2].push(n2);
    }, off: (t2, n2) => {
      e2[t2] = e2[t2] || [];
      const s2 = e2[t2].indexOf(n2);
      -1 !== s2 && e2[t2].splice(s2, 1);
    } };
  }
  const $n = ["db.Geo", "db.command", "command.aggregate"];
  function Wn(e2, t2) {
    return $n.indexOf(`${e2}.${t2}`) > -1;
  }
  function Hn(e2) {
    switch (f(e2 = se(e2))) {
      case "array":
        return e2.map((e3) => Hn(e3));
      case "object":
        return e2._internalType === Kn || Object.keys(e2).forEach((t2) => {
          e2[t2] = Hn(e2[t2]);
        }), e2;
      case "regexp":
        return { $regexp: { source: e2.source, flags: e2.flags } };
      case "date":
        return { $date: e2.toISOString() };
      default:
        return e2;
    }
  }
  function zn(e2) {
    return e2 && e2.content && e2.content.$method;
  }
  class Jn {
    constructor(e2, t2, n2) {
      this.content = e2, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e2 = this;
      const t2 = [e2.content];
      for (; e2.prevStage; )
        e2 = e2.prevStage, t2.push(e2.content);
      return { $db: t2.reverse().map((e3) => ({ $method: e3.$method, $param: Hn(e3.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e2 = this.toJSON().$db.find((e3) => "action" === e3.$method);
      return e2 && e2.$param && e2.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e2) => "action" !== e2.$method) };
    }
    get isAggregate() {
      let e2 = this;
      for (; e2; ) {
        const t2 = zn(e2), n2 = zn(e2.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e2 = this;
      for (; e2; ) {
        if ("command" === zn(e2))
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e2 = this;
      for (; e2; ) {
        const t2 = zn(e2), n2 = zn(e2.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e2 = e2.prevStage;
      }
      return false;
    }
    getNextStageFn(e2) {
      const t2 = this;
      return function() {
        return Vn({ $method: e2, $param: Hn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e2, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e2, $param: Hn(t2) }), S) {
        const e3 = s2.$db.find((e4) => "collection" === e4.$method), t3 = e3 && e3.$param;
        t3 && 1 === t3.length && "string" == typeof e3.$param[0] && e3.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function Vn(e2, t2, n2) {
    return jn(new Jn(e2, t2, n2), { get(e3, t3) {
      let s2 = "db";
      return e3 && e3.content && (s2 = e3.content.$method), Wn(s2, t3) ? Vn({ $method: t3 }, e3, n2) : function() {
        return Vn({ $method: t3, $param: Hn(Array.from(arguments)) }, e3, n2);
      };
    } });
  }
  function Gn({ path: e2, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e2.map((e3) => ({ $method: e3 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function Yn(e2, t2 = {}) {
    return jn(new e2(t2), { get: (e3, t3) => Wn("db", t3) ? Vn({ $method: t3 }, null, e3) : function() {
      return Vn({ $method: t3, $param: Hn(Array.from(arguments)) }, null, e3);
    } });
  }
  class Qn extends class {
    constructor({ uniClient: e2 = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e2, this._authCallBacks = {}, this._dbCallBacks = {}, e2._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Bn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Bn(this._dbCallBacks)), this.env = jn({}, { get: (e3, t3) => ({ $env: t3 }) }), this.Geo = jn({}, { get: (e3, t3) => Gn({ path: ["Geo"], method: t3 }) }), this.serverDate = Gn({ path: [], method: "serverDate" }), this.RegExp = Gn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e2) {
      if ("string" != typeof e2 || !e2.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e2.replace("$cloudEnv_", "") };
    }
    _callback(e2, t2) {
      const n2 = this._dbCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    _callbackAuth(e2, t2) {
      const n2 = this._authCallBacks;
      n2[e2] && n2[e2].forEach((e3) => {
        e3(...t2);
      });
    }
    multiSend() {
      const e2 = Array.from(arguments), t2 = e2.map((e3) => {
        const t3 = e3.getAction(), n2 = e3.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e2 });
    }
  } {
    _parseResult(e2) {
      return this._isJQL ? e2.result : e2;
    }
    _callCloudFunction({ action: e2, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e3, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e3.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e3) {
        return i2._callback("error", [e3]), M(q(o2, "fail"), e3).then(() => M(q(o2, "complete"), e3)).then(() => (r2(null, e3), Y(j, { type: W, content: e3 }), Promise.reject(e3)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e2, command: t2, multiCommand: n2 } })).then((e3) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e3.result;
        if (u3)
          for (let e4 = 0; e4 < u3.length; e4++) {
            const { level: t4, message: n4, detail: s4 } = u3[e4], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new te({ code: t3, message: n3, requestId: e3.requestId }));
        }
        e3.result.errCode = e3.result.errCode || e3.result.code, e3.result.errMsg = e3.result.errMsg || e3.result.message, s3 && c3 && (ie({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Y($, { token: s3, tokenExpired: c3 }));
        const l2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < l2.length; t4++) {
          const { prop: n4, tips: s4 } = l2[t4];
          if (n4 in e3.result) {
            const t5 = e3.result[n4];
            Object.defineProperty(e3.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e4) {
          return M(q(o2, "success"), e4).then(() => M(q(o2, "complete"), e4)).then(() => {
            r2(e4, null);
            const t4 = i2._parseResult(e4);
            return Y(j, { type: W, content: t4 }), Promise.resolve(t4);
          });
        }(e3);
      }, (e3) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e3.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new te({ code: e3.code || "SYSTEM_ERROR", message: e3.message, requestId: e3.requestId }));
      });
    }
  }
  const Xn = "token无效，跳转登录页面", Zn = "token过期，跳转登录页面", es = { TOKEN_INVALID_TOKEN_EXPIRED: Zn, TOKEN_INVALID_INVALID_CLIENTID: Xn, TOKEN_INVALID: Xn, TOKEN_INVALID_WRONG_TOKEN: Xn, TOKEN_INVALID_ANONYMOUS_USER: Xn }, ts = { "uni-id-token-expired": Zn, "uni-id-check-token-failed": Xn, "uni-id-token-not-exist": Xn, "uni-id-check-device-feature-failed": Xn };
  function ns(e2, t2) {
    let n2 = "";
    return n2 = e2 ? `${e2}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function ss(e2 = [], t2 = "") {
    const n2 = [], s2 = [];
    return e2.forEach((e3) => {
      true === e3.needLogin ? n2.push(ns(t2, e3.path)) : false === e3.needLogin && s2.push(ns(t2, e3.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function rs(e2) {
    return e2.split("?")[0].replace(/^\//, "");
  }
  function is() {
    return function(e2) {
      let t2 = e2 && e2.$page && e2.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e2 = getCurrentPages();
      return e2[e2.length - 1];
    }());
  }
  function os() {
    return rs(is());
  }
  function as(e2 = "", t2 = {}) {
    if (!e2)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = rs(e2);
    return n2.some((e3) => e3.pagePath === s2);
  }
  const cs = !!e.uniIdRouter;
  const { loginPage: us, routerNeedLogin: ls, resToLogin: hs, needLoginPage: ds, notNeedLoginPage: ps, loginPageInTabBar: fs } = function({ pages: t2 = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = e) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = ss(t2), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t3 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = ss(r3, s3);
        t3.push(...i3), n3.push(...o3);
      }), { needLoginPage: t3, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: as(i2, r2) };
  }();
  if (ds.indexOf(us) > -1)
    throw new Error(`Login page [${us}] should not be "needLogin", please check your pages.json`);
  function gs(e2) {
    const t2 = os();
    if ("/" === e2.charAt(0))
      return e2;
    const [n2, s2] = e2.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e3 = 0; e3 < r2.length; e3++) {
      const t3 = r2[e3];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function ms(e2) {
    const t2 = rs(gs(e2));
    return !(ps.indexOf(t2) > -1) && (ds.indexOf(t2) > -1 || ls.some((t3) => function(e3, t4) {
      return new RegExp(t4).test(e3);
    }(e2, t3)));
  }
  function ys({ redirect: e2 }) {
    const t2 = rs(e2), n2 = rs(us);
    return os() !== n2 && t2 !== n2;
  }
  function _s({ api: e2, redirect: t2 } = {}) {
    if (!t2 || !ys({ redirect: t2 }))
      return;
    const n2 = function(e3, t3) {
      return "/" !== e3.charAt(0) && (e3 = "/" + e3), t3 ? e3.indexOf("?") > -1 ? e3 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e3;
    }(us, t2);
    fs ? "navigateTo" !== e2 && "redirectTo" !== e2 || (e2 = "switchTab") : "switchTab" === e2 && (e2 = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e2]({ url: n2 });
    });
  }
  function ws({ url: e2 } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e3, tokenExpired: t3 } = re();
      let n3;
      if (e3) {
        if (t3 < Date.now()) {
          const e4 = "uni-id-token-expired";
          n3 = { errCode: e4, errMsg: ts[e4] };
        }
      } else {
        const e4 = "uni-id-check-token-failed";
        n3 = { errCode: e4, errMsg: ts[e4] };
      }
      return n3;
    }();
    if (ms(e2) && n2) {
      n2.uniIdRedirectUrl = e2;
      if (J(B).length > 0)
        return setTimeout(() => {
          Y(B, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function vs() {
    !function() {
      const e3 = is(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = ws({ url: e3 });
      t2 || n2 && _s({ api: "redirectTo", redirect: e3 });
    }();
    const e2 = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e2.length; t2++) {
      const n2 = e2[t2];
      uni.addInterceptor(n2, { invoke(e3) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = ws({ url: e3.url });
        return t3 ? e3 : s2 ? (_s({ api: n2, redirect: gs(e3.url) }), false) : e3;
      } });
    }
  }
  function Is() {
    this.onResponse((e2) => {
      const { type: t2, content: n2 } = e2;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in ts;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e3) {
            if ("object" != typeof e3)
              return false;
            const { errCode: t3 } = e3 || {};
            return t3 in es;
          }(n2);
      }
      s2 && function(e3 = {}) {
        const t3 = J(B);
        Z().then(() => {
          const n3 = is();
          if (n3 && ys({ redirect: n3 }))
            return t3.length > 0 ? Y(B, Object.assign({ uniIdRedirectUrl: n3 }, e3)) : void (us && _s({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function Ss(e2) {
    !function(e3) {
      e3.onResponse = function(e4) {
        V(j, e4);
      }, e3.offResponse = function(e4) {
        G(j, e4);
      };
    }(e2), function(e3) {
      e3.onNeedLogin = function(e4) {
        V(B, e4);
      }, e3.offNeedLogin = function(e4) {
        G(B, e4);
      }, cs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = true, Z().then(() => {
        vs.call(e3);
      }), hs && Is.call(e3)));
    }(e2), function(e3) {
      e3.onRefreshToken = function(e4) {
        V($, e4);
      }, e3.offRefreshToken = function(e4) {
        G($, e4);
      };
    }(e2);
  }
  let bs;
  const ks = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", As = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function Ps() {
    const e2 = re().token || "", t2 = e2.split(".");
    if (!e2 || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(bs(s2).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e3) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e3.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  bs = "function" != typeof atob ? function(e2) {
    if (e2 = String(e2).replace(/[\t\n\f\r ]+/g, ""), !As.test(e2))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e2 += "==".slice(2 - (3 & e2.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e2.length; )
      t2 = ks.indexOf(e2.charAt(i2++)) << 18 | ks.indexOf(e2.charAt(i2++)) << 12 | (n2 = ks.indexOf(e2.charAt(i2++))) << 6 | (s2 = ks.indexOf(e2.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var Ts = n(function(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e3, t3) {
      return e3.tempFiles.forEach((e4, n3) => {
        e4.name || (e4.name = e4.path.substring(e4.path.lastIndexOf("/") + 1)), t3 && (e4.fileType = t3), e4.cloudPath = Date.now() + "_" + n3 + e4.name.substring(e4.name.lastIndexOf("."));
      }), e3.tempFilePaths || (e3.tempFilePaths = e3.tempFiles.map((e4) => e4.path)), e3;
    }
    function i2(e3, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e4) => {
        if (s3) {
          const t4 = s3(e4);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e4 : t5);
        }
        return e4;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e4, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e5) => !e5.url && !e5.errMsg) && n3(t5));
            const u2 = i3[s5];
            e4.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, cloudPathAsRealPath: u2.cloudPathAsRealPath, onUploadProgress(e5) {
              e5.index = s5, e5.tempFile = u2, e5.tempFilePath = u2.path, r4 && r4(e5);
            } }).then((e5) => {
              u2.url = e5.fileID, s5 < o2 && c2();
            }).catch((e5) => {
              u2.errMsg = e5.errMsg || e5.message, s5 < o2 && c2();
            });
          }
        });
      }(e3, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e3) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e3, function(e4) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e4;
          return new Promise((e5, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e5(r2(t5, "image"));
            }, fail(e6) {
              a2({ errMsg: e6.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e3, function(e4) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e4;
          return new Promise((e5, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e5(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e6) {
              c2({ errMsg: e6.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e3, function(e4) {
          const { count: t4, extension: n3 } = e4;
          return new Promise((e5, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e5(r2(t5));
            }, fail(e6) {
              i3({ errMsg: e6.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Cs = t$1(Ts);
  const xs = "manual";
  function Os(e2) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e3 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e3.push(this[t2]);
        }), e3;
      }, (e3, t2) => {
        if (this.loadtime === xs)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e3.length; r2++)
          e3[r2] !== t2[r2] && (s2.push(e3[r2]), n2 = true);
        e3[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e3, t2) {
    }, mixinDatacomEasyGet({ getone: e3 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e3 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e4) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e4, n2 && n2(e4);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e2.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function Es(e2) {
    return function(t2, n2 = {}) {
      n2 = function(e3, t3 = {}) {
        return e3.customUI = t3.customUI || e3.customUI, e3.parseSystemError = t3.parseSystemError || e3.parseSystemError, Object.assign(e3.loadingOptions, t3.loadingOptions), Object.assign(e3.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e3.secretMethods = t3.secretMethods), e3;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e3, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await M(q(t3, "invoke"), { ...r3 }), i3 = await e3(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e4) {
            throw o3 = e4, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...l2) {
        let h2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: u, data: { method: c2, params: l2 } };
        "object" == typeof n2.secretMethods && function(e3, t3) {
          const n3 = t3.data.method, s5 = e3.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let p2 = false;
        try {
          h2 = await e2.callFunction(d2);
        } catch (e3) {
          p2 = true, h2 = { result: new te(e3) };
        }
        const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = h2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (ie(y2), Y($, { ...y2 })), g2) {
          let e3 = m2;
          if (p2 && o2) {
            e3 = (await o2({ objectName: t2, methodName: c2, params: l2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e3, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e4, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e5) {
                      i3(e5);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "提示", content: e3, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                if (i2.retry && t3)
                  return s4(...l2);
              }
            }
          const n3 = new te({ subject: f2, code: g2, message: m2, requestId: h2.requestId });
          throw n3.detail = h2.result, Y(j, { type: z, content: n3 }), n3;
        }
        return Y(j, { type: z, content: h2.result }), h2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e3 } = {}) {
        return { objectName: t2, methodName: c2, params: e3 };
      } }) });
    };
  }
  function Ls(e2) {
    return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e2.config.spaceId));
  }
  async function Rs({ openid: e2, callLoginByWeixin: t2 = false } = {}) {
    Ls(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Us(e2) {
    const t2 = Ls(this);
    return t2.initPromise || (t2.initPromise = Rs.call(this, e2)), t2.initPromise;
  }
  function Ns(e2) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Us.call(e2, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Ds(e2) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e2]({ ...n2, success(e3) {
          s2(e3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    };
  }
  class Ms extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e2, t2) {
      this._callback[e2] || (this._callback[e2] = []), this._callback[e2].push(t2);
    }
    on(e2, t2) {
      return this.addListener(e2, t2);
    }
    removeListener(e2, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e2];
      if (!n2)
        return;
      const s2 = function(e3, t3) {
        for (let n3 = e3.length - 1; n3 >= 0; n3--)
          if (e3[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e2, t2) {
      return this.removeListener(e2, t2);
    }
    removeAllListener(e2) {
      delete this._callback[e2];
    }
    emit(e2, ...t2) {
      const n2 = this._callback[e2];
      if (n2)
        for (let e3 = 0; e3 < n2.length; e3++)
          n2[e3](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Ds("getSystemInfo")(), Ds("getPushClientId")()]).then(([{ appId: e2 } = {}, { cid: t2 } = {}] = []) => {
        if (!e2)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e2, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e2) => {
        throw this.emit("error", e2), this.close(), e2;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e2) {
      if ("receive" !== e2.type)
        return false;
      const t2 = e2 && e2.data && e2.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e2) {
      if (!this._isUniCloudSSE(e2))
        return;
      const t2 = e2 && e2.data && e2.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e2 = this._payloadQueue.find((e3) => e3.messageId === this._currentMessageId + 1);
        if (!e2)
          break;
        this._currentMessageId++, this._parseMessagePayload(e2);
      }
    }
    _parseMessagePayload(e2) {
      const { action: t2, messageId: n2, message: s2 } = e2;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e2, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e2, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function qs(e2, t2) {
    const n2 = `http://${e2}:${t2}/system/ping`;
    try {
      const e3 = await (s2 = { url: n2, timeout: 500 }, new Promise((e4, t3) => {
        ne.request({ ...s2, success(t4) {
          e4(t4);
        }, fail(e5) {
          t3(e5);
        } });
      }));
      return !(!e3.data || 0 !== e3.data.code);
    } catch (e3) {
      return false;
    }
    var s2;
  }
  async function Fs(e2) {
    {
      const { osName: e3, osVersion: t3 } = ce();
      "ios" === e3 && function(e4) {
        if (!e4 || "string" != typeof e4)
          return 0;
        const t4 = e4.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e2.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e3, t3) {
      let n3;
      for (let s3 = 0; s3 < e3.length; s3++) {
        const r3 = e3[s3];
        if (await qs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Ks(e2) {
    e2._initPromiseHub || (e2._initPromiseHub = new v({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e3) => {
        setTimeout(() => {
          e3();
        }, n2);
      });
      const s2 = e2.auth();
      return t2.then(() => s2.getLoginState()).then((e3) => e3 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const js = { tcb: St, tencent: St, aliyun: pe, private: kt, alipay: Et };
  let Bs = new class {
    init(e2) {
      let t2 = {};
      const n2 = js[e2.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e2), function(e3) {
        const t3 = {};
        e3.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = T;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new v({ createPromise: function() {
          return Fs(e3);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Ks(t2), Fn(t2), function(e3) {
        const t3 = e3.uploadFile;
        e3.uploadFile = function(e4) {
          return t3.call(this, e4);
        };
      }(t2), function(e3) {
        e3.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = Yn(Qn, { uniClient: e3 });
          return this._database = n3, n3;
        }, e3.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e3.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = Yn(Qn, { uniClient: e3, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e3) {
        e3.getCurrentUserInfo = Ps, e3.chooseAndUploadFile = Cs.initChooseAndUploadFile(e3), Object.assign(e3, { get mixinDatacom() {
          return Os(e3);
        } }), e3.SSEChannel = Ms, e3.initSecureNetworkByWeixin = Ns(e3), e3.importObject = Es(e3);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e3) => {
        if (!t2[e3])
          return;
        const n3 = t2[e3];
        t2[e3] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e3] = function(e4, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e5 = n4 && n4.type || c;
              s2 = e5 !== c;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: u2 } = ee(n4), l2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e4.call(this, n4)).then((e5) => s2 ? Promise.resolve(e5) : M(q(t3, "success"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (r2 && Y(j, { type: H, content: e5 }), Promise.resolve(e5))), (e5) => s2 ? Promise.reject(e5) : M(q(t3, "fail"), e5).then(() => M(q(t3, "complete"), e5)).then(() => (Y(j, { type: H, content: e5 }), Promise.reject(e5))));
            if (!(o2 || a2 || u2))
              return l2;
            l2.then((e5) => {
              o2 && o2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            }, (e5) => {
              a2 && a2(e5), u2 && u2(e5), r2 && Y(j, { type: H, content: e5 });
            });
          };
        }(t2[e3], e3).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e2 = C;
    let t2 = {};
    if (e2 && 1 === e2.length)
      t2 = e2[0], Bs = Bs.init(t2), Bs._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e2 && e2.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e3) => {
        Bs[e3] = function() {
          return console.error(n2), Promise.reject(new te({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Bs, { get mixinDatacom() {
      return Os(Bs);
    } }), Ss(Bs), Bs.addInterceptor = N, Bs.removeInterceptor = D, Bs.interceptObject = F;
  })();
  var $s = Bs;
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$d = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-9245e42c"], ["__file", "F:/code/qq-doctor/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$c = {
    // name: 'uniDataChecklist',
    mixins: [$s.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      // TODO vue3
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "查看更多",
          contentrefresh: "加载中",
          contentnomore: "没有更多"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e2) {
        const values = e2.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      /**
       * 获取渲染的新数组
       * @param {Object} value 选中内容
       */
      getDataList(value) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value)) {
            value = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value.length > 0) {
              let have = value.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      /**
       * 处理最大最小值
       * @param {Object} list
       */
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      /**
       * 设置 class
       * @param {Object} item
       * @param {Object} index
       */
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      /**
       * 获取选中值
       * @param {Object} range
       */
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      /**
       * 设置背景样式
       */
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.selectedColor) {
          if (this.mode !== "list") {
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
          if (this.mode === "tag") {
            styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
          }
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          styles["background-color"] = item.selected ? selectedColor : "#fff";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          if (!item.selected && item.disabled) {
            styles["background-color"] = "#F2F6FC";
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          if (this.mode === "tag") {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
          } else {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
          }
          if (!item.selected && item.disabled) {
            styles.color = "#999";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-data-checklist",
        style: vue.normalizeStyle({ "margin-top": $data.isTop + "px" })
      },
      [
        !$data.isLocal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-data-loading"
        }, [
          !_ctx.mixinDatacomErrorMessage ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
            key: 0,
            status: "loading",
            iconType: "snow",
            iconSize: 18,
            "content-text": $data.contentText
          }, null, 8, ["content-text"])) : (vue.openBlock(), vue.createElementBlock(
            "text",
            { key: 1 },
            vue.toDisplayString(_ctx.mixinDatacomErrorMessage),
            1
            /* TEXT */
          ))
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            $props.multiple ? (vue.openBlock(), vue.createElementBlock(
              "checkbox-group",
              {
                key: 0,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
                onChange: _cache[0] || (_cache[0] = (...args) => $options.chagne && $options.chagne(...args))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index
                      },
                      [
                        vue.createElementVNode("checkbox", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || !!item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "checkbox__inner",
                            style: vue.normalizeStyle(item.styleIcon)
                          },
                          [
                            vue.createElementVNode("view", { class: "checkbox__inner-icon" })
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                class: "checkobx__list",
                                style: vue.normalizeStyle(item.styleBackgroud)
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            )) : (vue.openBlock(), vue.createElementBlock(
              "radio-group",
              {
                key: 1,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
                onChange: _cache[1] || (_cache[1] = (...args) => $options.chagne && $options.chagne(...args))
              },
              [
                vue.createCommentVNode(" "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index
                      },
                      [
                        vue.createElementVNode("radio", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "radio__inner",
                            style: vue.normalizeStyle(item.styleBackgroud)
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "radio__inner-icon",
                                style: vue.normalizeStyle(item.styleIcon)
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                style: vue.normalizeStyle(item.styleRightIcon),
                                class: "checkobx__list"
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-497e00d9"], ["__file", "F:/code/qq-doctor/components/timeCheckbox/timeCheckbox.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        radio: 0,
        doc: [
          {
            text: "医生",
            value: 1
          }
        ],
        hosp: [
          {
            text: "医院",
            value: 0
          }
        ],
        list1: ["1", "2", "3", "4", "5"],
        list2: ["1", "2", "3", "4", "5"]
      };
    },
    methods: {}
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_timeCheckbox = resolveEasycom(vue.resolveDynamicComponent("timeCheckbox"), __easycom_0$1);
    const _component_collectItem = resolveEasycom(vue.resolveDynamicComponent("collectItem"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 选择医院或者医生 "),
      vue.createElementVNode("view", { class: "time3Wrapp" }, [
        vue.createElementVNode("view", { class: "tag1" }, [
          vue.createVNode(_component_timeCheckbox, {
            mode: "tag",
            modelValue: $data.radio,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.radio = $event),
            localdata: $data.hosp,
            selectedColor: "#FFBB24"
          }, null, 8, ["modelValue", "localdata"])
        ]),
        vue.createElementVNode("view", { class: "tag2" }, [
          vue.createVNode(_component_timeCheckbox, {
            mode: "tag",
            modelValue: $data.radio,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.radio = $event),
            localdata: $data.doc,
            selectedColor: "#FFBB24"
          }, null, 8, ["modelValue", "localdata"])
        ])
      ]),
      vue.createCommentVNode("展示足迹   医生信息"),
      $data.radio == 1 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 0 },
        vue.renderList($data.list1, (item1, index1) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "footprintWrapp",
            key: index1
          }, [
            vue.createCommentVNode(" 展示时间 "),
            vue.createElementVNode("view", { class: "timeWrapp" }, [
              vue.createElementVNode("text", null, "10月19日")
            ]),
            vue.createCommentVNode(" 展示浏览过的医生 "),
            vue.createElementVNode("view", { class: "docListWrapp" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.list2, (item2, index2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "docOneWrapp",
                    key: index2
                  }, [
                    vue.createElementVNode("view", { class: "docOne" }, [
                      vue.createElementVNode("image", {
                        src: "/static/img/user/doc.png",
                        mode: "",
                        class: "docOneIcon"
                      }),
                      vue.createElementVNode("text", { class: "docOneText" }, "赵熙蒙医生")
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 展示足迹 医院信息 "),
      $data.radio == 0 ? (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        { key: 1 },
        vue.renderList($data.list1, (item2, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "dospListWrapp",
            key: index2
          }, [
            vue.createElementVNode("view", { class: "dospTime" }, [
              vue.createElementVNode("view", { class: "dospTimeText" }, "10月18日")
            ]),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.list1, (item22, index22) => {
                return vue.openBlock(), vue.createBlock(_component_collectItem, { key: index22 });
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesUserFootprintFootprint = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-b4912eb6"], ["__file", "F:/code/qq-doctor/pages/user/footprint/footprint.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        app_height: 0
      };
    },
    methods: {
      capture() {
        uni.downloadFile({
          url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png",
          // 这里是我已经请求好的图片数据
          success: (res) => {
            formatAppLog("log", "at pages/user/inspectionResults/inspectionResults.vue:64", res, "res");
            var tempFilePath = res.tempFilePath;
            uni.saveImageToPhotosAlbum({
              // 然后调用这个方法
              filePath: tempFilePath,
              success: (res2) => {
                uni.showToast({
                  title: "图片已保存"
                });
              }
            });
          },
          fail: () => {
            uni.showToast({
              title: "图片保存失败"
            });
          }
        });
      }
    },
    onLoad() {
      const _this = this;
      uni.getSystemInfo({
        success: (res) => {
          formatAppLog("log", "at pages/user/inspectionResults/inspectionResults.vue:88", "手机可用高度:" + res.windowHeight * 2 + "rpx");
          _this.app_height = res.windowHeight * 2;
        }
      });
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 后面根据百分比对页面进行优化 ！！！！！！！！！ "),
        vue.createElementVNode(
          "view",
          {
            class: "CTResWrapp",
            style: vue.normalizeStyle({ height: this.app_height * 1 + "rpx" })
          },
          [
            vue.createCommentVNode(" 空白 "),
            vue.createCommentVNode(" 检验结果 "),
            vue.createElementVNode("view", { class: "resText" }, [
              vue.createElementVNode("text", { class: "" }, "CT分析结果")
            ]),
            vue.createCommentVNode(" 检测图片 "),
            vue.createElementVNode("view", { class: "CTIconWrapp" }, [
              vue.createElementVNode("view", { class: "CTIcon1Wrapp" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/user/res1.png",
                  mode: "",
                  class: "CTIcon1"
                })
              ]),
              vue.createElementVNode("view", { class: "goRightWrapp" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/user/goRight.png",
                  mode: "",
                  class: "goRightIcon"
                })
              ]),
              vue.createElementVNode("view", { class: "CTIcon2Wrapp" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/user/res1.png",
                  mode: "",
                  class: "CTIcon2"
                })
              ])
            ]),
            vue.createCommentVNode(" 注意事项 "),
            vue.createElementVNode("view", { class: "noticWrapp" }, [
              vue.createElementVNode("view", { class: "noticeText" }, [
                vue.createElementVNode("view", { class: "notice1" }, [
                  vue.createElementVNode("text", { class: "" }, "注意")
                ]),
                vue.createElementVNode("view", { class: "notice2" }, [
                  vue.createElementVNode("text", { class: "" }, "CT图分析标注了各器官的具体形状,请就诊时交予医生判断病变情况")
                ])
              ])
            ]),
            vue.createCommentVNode(" 空白填充 "),
            vue.createElementVNode("view", {
              class: "",
              style: { "height": "30%", "width": "100%" }
            }),
            vue.createCommentVNode(" 下载图标 "),
            vue.createElementVNode("view", { class: "downLoadWrapp" }, [
              vue.createElementVNode("image", {
                src: "/static/img/user/downLoad.png",
                mode: "",
                class: "downLoadIcon",
                onClick: _cache[0] || (_cache[0] = ($event) => $options.capture())
              }),
              vue.createElementVNode("view", { class: "downLoadText" }, " 保存图片 ")
            ])
          ],
          4
          /* STYLE */
        )
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const PagesUserInspectionResultsInspectionResults = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-581a172f"], ["__file", "F:/code/qq-doctor/pages/user/inspectionResults/inspectionResults.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 修改病人信息 "),
      vue.createElementVNode("view", { class: "modifyPatientinformationWrapp" }, [
        vue.createCommentVNode(" 第一部分 "),
        vue.createElementVNode("view", { class: "modifyInformation" }, [
          vue.createElementVNode("view", { class: "information1" }, [
            vue.createElementVNode("text", { class: "informationUpText1" }, "姓名"),
            vue.createElementVNode("view", { class: "nameTextWrapp" }, [
              vue.createCommentVNode(" 姓名 "),
              vue.createElementVNode("view", { class: "nameText" }, [
                vue.createElementVNode("text", null, "周嘉兴")
              ]),
              vue.createCommentVNode(" 箭头 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/goRight2.png",
                mode: "",
                class: "goRight2Icon"
              })
            ])
          ]),
          vue.createCommentVNode(" 第二部分 "),
          vue.createElementVNode("view", { class: "information2" }, [
            vue.createElementVNode("view", { class: "informationDown" }, [
              vue.createElementVNode("view", { class: "informationDownText1" }, " 年龄 "),
              vue.createElementVNode("view", { class: "informationDownText2" }, [
                vue.createElementVNode("text", { class: "nameText" }, "23"),
                vue.createElementVNode("image", {
                  src: "/static/img/user/goRight2.png",
                  mode: "",
                  class: "goRight2Icon"
                })
              ])
            ])
          ]),
          vue.createCommentVNode(" 第三部分 "),
          vue.createElementVNode("view", { class: "information3" }, [
            vue.createElementVNode("text", { class: "information3Text1" }, "照片"),
            vue.createElementVNode("view", { class: "headIconWrapp" }, [
              vue.createCommentVNode(" 头像 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/headSculpture.png",
                mode: "",
                class: "headIcon"
              }),
              vue.createCommentVNode(" 箭头 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/goRight2.png",
                mode: "",
                class: "goRight2Icon"
              })
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" 医保卡号 "),
      vue.createCommentVNode(' 		 <view class="idAndMedicalInsuranceWrapp">\r\n		 	   <view class="idAndMIWrapp">\r\n				   <view class="MIWrapp">\r\n					   <view class="MI">\r\n					   	 <text>医保卡号 </text> <text>603365********1349</text>\r\n					   </view>\r\n				   	    <view class="goRight2Wrapp">\r\n				   	    	<image src="../../../static/img/user/goRight2.png" mode="" class="goRight2Icon"></image>\r\n				   	    </view>\r\n				   </view>\r\n			   </view>\r\n		 </view> '),
      vue.createCommentVNode(" 修改病人信息 "),
      vue.createElementVNode("view", { class: "idAndMIWrapp" }, [
        vue.createCommentVNode(" 第一部分 "),
        vue.createElementVNode("view", { class: "modifyInformation2" }, [
          vue.createElementVNode("view", { class: "information4" }, [
            vue.createElementVNode("text", { class: "information4UpText1" }, "医保卡号"),
            vue.createElementVNode("view", { class: "MITextWrapp" }, [
              vue.createCommentVNode(" 姓名 "),
              vue.createElementVNode("view", { class: "MIText" }, [
                vue.createElementVNode("text", null, " 603365********1349")
              ]),
              vue.createCommentVNode(" 箭头 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/goRight2.png",
                mode: "",
                class: "goRight2Icon"
              })
            ])
          ]),
          vue.createCommentVNode(" 第二部分 "),
          vue.createElementVNode("view", { class: "information5" }, [
            vue.createElementVNode("view", { class: "information5Down" }, [
              vue.createElementVNode("view", { class: "information5DownText1" }, " 身份证号 "),
              vue.createElementVNode("view", { class: "information5DownText2" }, [
                vue.createElementVNode("text", { class: "idText" }, " 510802********1714"),
                vue.createElementVNode("image", {
                  src: "/static/img/user/goRight2.png",
                  mode: "",
                  class: "goRight2Icon"
                })
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesUserModifyPatientInfoModifyPatientInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-63afc291"], ["__file", "F:/code/qq-doctor/pages/user/modifyPatientInfo/modifyPatientInfo.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesUserModifyPatientInfoPatienName = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "F:/code/qq-doctor/pages/user/modifyPatientInfo/patienName.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        list: ["1", "2", "3"]
      };
    },
    methods: {
      navToModify() {
        uni.navigateTo({
          url: "/pages/user/modifyPatientInfo/modifyPatientInfo"
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 病人信息列表 "),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "patientInfoListWrapp",
            key: index
          }, [
            vue.createElementVNode("view", { class: "patientInfoList" }, [
              vue.createCommentVNode(" 头像 姓名 年龄块 "),
              vue.createElementVNode("view", { class: "patientInfoUp" }, [
                vue.createElementVNode("view", { class: "headIconWrapp" }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/user/headSculpture.png",
                    mode: "",
                    class: "headIcon"
                  })
                ]),
                vue.createElementVNode("view", { class: "nameTextWrapp" }, [
                  vue.createElementVNode("text", { class: "nameText" }, "姓名：周嘉兴"),
                  vue.createElementVNode("text", { class: "ageText" }, "\\n年龄: 23")
                ]),
                vue.createCommentVNode(' 	   <view class="ageTxetWrapp">\r\n						   <text class="ageText">年龄: 23</text>\r\n					   </view> ')
              ]),
              vue.createElementVNode("view", { class: "patientInfoDown" }, [
                vue.createCommentVNode(" 身份证号码 和箭头 "),
                vue.createElementVNode("view", { class: "idWrapp" }, [
                  vue.createElementVNode("text", { class: "idText" }, "身份证号：510802********1714"),
                  vue.createElementVNode("image", {
                    src: "/static/img/user/goRight2.png",
                    mode: "",
                    class: "goRight2Icon",
                    onClick: _cache[0] || (_cache[0] = ($event) => $options.navToModify())
                  })
                ]),
                vue.createCommentVNode(" 医保 "),
                vue.createElementVNode("view", { class: "medicalInsuranceWrapp" }, [
                  vue.createElementVNode("text", { class: "medicalInsuranceText" }, "医保卡号：603365********1349")
                ])
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesUserPatientInformationPatientInformation = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-cbd47988"], ["__file", "F:/code/qq-doctor/pages/user/patientInformation/patientInformation.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {
      navTouserName() {
        uni.navigateTo({
          url: "userName"
        });
      },
      navToModifyPassword() {
        uni.navigateTo({
          url: "modifyPassword"
        });
      },
      navToModifyPhone() {
        uni.navigateTo({
          url: "/pages/user/personalInformation/modifyPhone"
        });
      },
      // 更改头像
      updateImg() {
        uni.chooseImage({
          sourceType: ["album"],
          //从相册选择
          success: (chooseImageRes) => {
            formatAppLog("log", "at pages/user/personalInformation/personalInformation.vue:101", "成功", chooseImageRes);
            const tempFilePaths = chooseImageRes.tempFilePaths;
            uni.uploadFile({
              url: "http://192.168.31.00:7005/file/upload",
              //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: "file",
              header: {
                accessToken: uni.getStorageSync("accessToken"),
                platform: 2,
                type: 1
              },
              formData: {
                category: 3
              },
              success: (res) => {
                let data = JSON.parse(res.data);
                if (data.msgCode == 200) {
                  this.updateParams.headImg = JSON.parse(res.data).data;
                  this.updateUserInfo();
                }
                if (data.msgCode == 500) {
                  this.myToast(data.msgContent, "none");
                }
                if (data.msgCode == 311 || data.msgCode == 312) {
                  myToast(
                    data.msgContent,
                    "none",
                    () => {
                      const res2 = uni.getStorageInfoSync();
                      for (let s2 of res2.keys) {
                        if (s2 === "pwd" || s2 === "lang")
                          ;
                        else {
                          uni.removeStorageSync(s2);
                        }
                      }
                      uni.reLaunch({
                        url: "/pages/group/index"
                      });
                    },
                    1e3
                  );
                }
              }
            });
          },
          fail: (err) => {
            this.myToast("图片上传失败", "none");
          }
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 个人信息 "),
      vue.createElementVNode("view", { class: "informationWrapp" }, [
        vue.createCommentVNode("  "),
        vue.createElementVNode("view", { class: "information" }, [
          vue.createElementVNode("view", { class: "informationUp" }, [
            vue.createElementVNode("text", { class: "informationUpText1" }, "头像"),
            vue.createElementVNode("view", { class: "headIconWrapp" }, [
              vue.createCommentVNode(" 头像 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/headSculpture.png",
                mode: "",
                class: "headIcon"
              }),
              vue.createCommentVNode(" 箭头 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/goRight2.png",
                mode: "",
                class: "goRight2Icon",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.updateImg && $options.updateImg(...args))
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "informationDownWrapp" }, [
            vue.createElementVNode("view", { class: "informationDown" }, [
              vue.createElementVNode("view", { class: "informationDownText1" }, " 昵称 "),
              vue.createElementVNode("view", { class: "informationDownText2" }, [
                vue.createTextVNode(" simon0414 "),
                vue.createElementVNode("image", {
                  src: "/static/img/user/goRight2.png",
                  mode: "",
                  class: "goRight2Icon",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.navTouserName())
                })
              ])
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" 个人信息 "),
      vue.createElementVNode("view", { class: "information2Wrapp" }, [
        vue.createCommentVNode("  "),
        vue.createElementVNode("view", { class: "information2" }, [
          vue.createElementVNode("view", { class: "information2Up" }, [
            vue.createElementVNode("text", { class: "information2UpText1" }, "密码"),
            vue.createElementVNode("view", { class: "headIcon2Wrapp" }, [
              vue.createCommentVNode(" 密码 "),
              vue.createElementVNode("view", { class: "passwordWrapp" }, [
                vue.createElementVNode("text", null, "******")
              ]),
              vue.createCommentVNode(" 箭头 "),
              vue.createElementVNode("image", {
                src: "/static/img/user/goRight2.png",
                mode: "",
                class: "goRight2Icon",
                onClick: _cache[2] || (_cache[2] = ($event) => $options.navToModifyPassword())
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "information2DownWrapp" }, [
            vue.createElementVNode("view", { class: "information2Down" }, [
              vue.createElementVNode("view", { class: "information2DownText1" }, " 手机号 "),
              vue.createElementVNode("view", { class: "information2DownText2" }, [
                vue.createTextVNode(" 18683927916 "),
                vue.createElementVNode("image", {
                  src: "/static/img/user/goRight2.png",
                  mode: "",
                  class: "goRight2Icon",
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.navToModifyPhone())
                })
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesUserPersonalInformationPersonalInformation = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-77af710c"], ["__file", "F:/code/qq-doctor/pages/user/personalInformation/personalInformation.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$5 = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change", "keyboardheightchange"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e2) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-09fd5285"], ["__file", "F:/code/qq-doctor/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_easyinput, {
        modelValue: _ctx.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
        placeholder: "请输入昵称",
        class: "userNameWrapp"
      }, null, 8, ["modelValue"]),
      vue.createElementVNode("text", { class: "userNameText" }, "限2~12个中文、英文或数字")
    ]);
  }
  const PagesUserPersonalInformationUserName = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-503a08ca"], ["__file", "F:/code/qq-doctor/pages/user/personalInformation/userName.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesUserPersonalInformationModifyPhone = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "F:/code/qq-doctor/pages/user/personalInformation/modifyPhone.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesUserPersonalInformationModifyPassword = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/code/qq-doctor/pages/user/personalInformation/modifyPassword.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 暂时不知道怎么写 "),
      vue.createElementVNode("view", { class: "" }, "等后面再完成")
    ]);
  }
  const PagesUserPersonalInformationCollectionPersonalInformationCollection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/code/qq-doctor/pages/user/personalInformationCollection/personalInformationCollection.vue"]]);
  __definePage("pages/login/start/start", PagesLoginStartStart);
  __definePage("pages/login/register/register", PagesLoginRegisterRegister);
  __definePage("pages/login/passwordLogin/passwordLogin", PagesLoginPasswordLoginPasswordLogin);
  __definePage("pages/login/phoneLogin/phoneLogin", PagesLoginPhoneLoginPhoneLogin);
  __definePage("pages/main/messagetable", PagesMainMessagetable);
  __definePage("pages/login/userAgreement/userAgreement", PagesLoginUserAgreementUserAgreement);
  __definePage("pages/login/privacyPolicy/privacyPolicy", PagesLoginPrivacyPolicyPrivacyPolicy);
  __definePage("pages/registrationWizard/slideWizard/slideWizard", PagesRegistrationWizardSlideWizardSlideWizard);
  __definePage("pages/main/mainfront", PagesMainMainfront);
  __definePage("pages/map/mapfront", PagesMapMapfront);
  __definePage("pages/medical/medicalfront", PagesMedicalMedicalfront);
  __definePage("pages/order/orderfront", PagesOrderOrderfront);
  __definePage("pages/user/userfront", PagesUserUserfront);
  __definePage("pages/main/doctordetail", PagesMainDoctordetail);
  __definePage("pages/main/onlineform", PagesMainOnlineform);
  __definePage("pages/user/addpatient", PagesUserAddpatient);
  __definePage("pages/main/onlineorder", PagesMainOnlineorder);
  __definePage("pages/main/onlineordersuccess", PagesMainOnlineordersuccess);
  __definePage("pages/main/vaccine", PagesMainVaccine);
  __definePage("components/FuncSelectFront/FuncSelectFront", ComponentsFuncSelectFrontFuncSelectFront);
  __definePage("components/FuncSelectContext/FuncSelectContext", ComponentsFuncSelectContextFuncSelectContext);
  __definePage("pages/main/vaccinedetail", PagesMainVaccinedetail);
  __definePage("pages/main/vaccinedetailaction", PagesMainVaccinedetailaction);
  __definePage("pages/main/article", PagesMainArticle);
  __definePage("pages/main/diseaseknowledge", PagesMainDiseaseknowledge);
  __definePage("pages/main/check", PagesMainCheck);
  __definePage("pages/main/checkdetail", PagesMainCheckdetail);
  __definePage("pages/main/treatment", PagesMainTreatment);
  __definePage("pages/main/diseaseknowledgedetail", PagesMainDiseaseknowledgedetail);
  __definePage("pages/main/treatmentdetail", PagesMainTreatmentdetail);
  __definePage("pages/main/doctoronline", PagesMainDoctoronline);
  __definePage("pages/main/isbn", PagesMainIsbn);
  __definePage("pages/main/onlineformtime", PagesMainOnlineformtime);
  __definePage("pages/user/about/about", PagesUserAboutAbout);
  __definePage("pages/user/businessLicense/businessLicense", PagesUserBusinessLicenseBusinessLicense);
  __definePage("pages/user/collect/collect", PagesUserCollectCollect);
  __definePage("pages/user/commonPage/commonPage", PagesUserCommonPageCommonPage);
  __definePage("pages/user/copyrightInformation/copyrightInformation", PagesUserCopyrightInformationCopyrightInformation);
  __definePage("pages/user/CTInspectionSheet/CTInspectionSheet", PagesUserCTInspectionSheetCTInspectionSheet);
  __definePage("pages/user/customerService/customerService", PagesUserCustomerServiceCustomerService);
  __definePage("pages/user/footprint/footprint", PagesUserFootprintFootprint);
  __definePage("pages/user/inspectionResults/inspectionResults", PagesUserInspectionResultsInspectionResults);
  __definePage("pages/user/modifyPatientInfo/modifyPatientInfo", PagesUserModifyPatientInfoModifyPatientInfo);
  __definePage("pages/user/modifyPatientInfo/patienName", PagesUserModifyPatientInfoPatienName);
  __definePage("pages/user/patientInformation/patientInformation", PagesUserPatientInformationPatientInformation);
  __definePage("pages/user/personalInformation/personalInformation", PagesUserPersonalInformationPersonalInformation);
  __definePage("pages/user/personalInformation/userName", PagesUserPersonalInformationUserName);
  __definePage("pages/user/personalInformation/modifyPhone", PagesUserPersonalInformationModifyPhone);
  __definePage("pages/user/personalInformation/modifyPassword", PagesUserPersonalInformationModifyPassword);
  __definePage("pages/user/personalInformationCollection/personalInformationCollection", PagesUserPersonalInformationCollectionPersonalInformationCollection);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/code/qq-doctor/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);

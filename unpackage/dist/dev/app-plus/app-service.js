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
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
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
  const _sfc_main$V = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
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
        ])
      ])
    ]);
  }
  const PagesLoginStartStart = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$U], ["__scopeId", "data-v-96390ece"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/login/start/start.vue"]]);
  const _sfc_main$U = {
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
  function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$T], ["__scopeId", "data-v-02b9e5eb"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/DoctorBaseInfo/DoctorBaseInfo.vue"]]);
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
    for (let i = -1; i <= 6; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      const day = date.getDate();
      dateList.push(day);
    }
    return dateList;
  }
  function getThreeDate() {
    const today = /* @__PURE__ */ new Date();
    const threeDays = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      threeDays.push(`${month}月${day}日`);
    }
    return threeDays;
  }
  const _sfc_main$T = {
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
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$S], ["__scopeId", "data-v-8b1e6fc4"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/MessageLine/MessageLine.vue"]]);
  const _sfc_main$S = {
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
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$R], ["__scopeId", "data-v-1155e762"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/ReceiveLine/ReceiveLine.vue"]]);
  const _sfc_main$R = {
    name: "MessageTab",
    data() {
      return {};
    }
  };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$Q], ["__scopeId", "data-v-9ea06745"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/MessageTab/MessageTab.vue"]]);
  const _sfc_main$Q = {
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
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DoctorBaseInfo = resolveEasycom(vue.resolveDynamicComponent("DoctorBaseInfo"), __easycom_0$7);
    const _component_MessageLine = resolveEasycom(vue.resolveDynamicComponent("MessageLine"), __easycom_1$5);
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
  const PagesMainMessagetable = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$P], ["__scopeId", "data-v-160538d4"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/messagetable.vue"]]);
  const _sfc_main$P = {
    data() {
      return {
        agreementChecked: false
      };
    },
    methods: {}
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$O], ["__scopeId", "data-v-be2e578e"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/login/register/register.vue"]]);
  const _sfc_main$O = {
    data() {
      return {
        agreementChecked: false,
        password: "",
        passwordNotShowFlag: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.passwordNotShowFlag = !this.passwordNotShowFlag;
      },
      goMain() {
        uni.reLaunch({
          url: "/pages/main/mainfront"
        });
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
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
      vue.createElementVNode("view", {
        class: "f2",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.goMain())
      }, [
        vue.createElementVNode("button", {
          type: "default",
          class: "btn2"
        }, [
          vue.createElementVNode("view", { class: "f22" }, " 登录 ")
        ])
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
  const PagesLoginPasswordLoginPasswordLogin = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-57b412fb"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/login/passwordLogin/passwordLogin.vue"]]);
  const _sfc_main$N = {
    data() {
      return {
        agreementChecked: false
      };
    },
    methods: {}
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
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
        vue.createElementVNode("navigator", { url: "/pages/login/start/start" }, [
          vue.createElementVNode("button", {
            type: "default",
            class: "btn2"
          }, [
            vue.createElementVNode("view", { class: "f22" }, "登录")
          ])
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
  const PagesLoginPhoneLoginPhoneLogin = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__scopeId", "data-v-44c963fe"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/login/phoneLogin/phoneLogin.vue"]]);
  const _sfc_main$M = {
    methods: {
      onAgree() {
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginUserAgreementUserAgreement = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-249c4fe7"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/login/userAgreement/userAgreement.vue"]]);
  const _sfc_main$L = {
    methods: {
      onAgree() {
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginPrivacyPolicyPrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__scopeId", "data-v-a8203ef9"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/login/privacyPolicy/privacyPolicy.vue"]]);
  const _sfc_main$K = {
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
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-dcaec3a2"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/stepOne/stepOne.vue"]]);
  const _sfc_main$J = {
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
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-bb0d5cf2"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/stepTwo/stepTwo.vue"]]);
  const _sfc_main$I = {
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
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-7ad89ffa"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/stepThree/stepThree.vue"]]);
  const _sfc_main$H = {
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
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-fcd045e2"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/stepFour/stepFour.vue"]]);
  const _sfc_main$G = {
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
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-0667e3db"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  const _sfc_main$F = {
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
      change(e) {
        this.current = e.detail.current;
      },
      handleProcessedIndex(Index) {
        this.current = Index;
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_stepOne = resolveEasycom(vue.resolveDynamicComponent("stepOne"), __easycom_0$6);
    const _component_stepTwo = resolveEasycom(vue.resolveDynamicComponent("stepTwo"), __easycom_1$4);
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
  const PagesRegistrationWizardSlideWizardSlideWizard = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-aeaa0014"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/registrationWizard/slideWizard/slideWizard.vue"]]);
  const _sfc_main$E = {
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
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-759a3c2f"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/SelectFront/SelectFront.vue"]]);
  const _sfc_main$D = {
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
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-8878a3e9"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/TodayOrder/TodayOrder.vue"]]);
  const _sfc_main$C = {
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
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-b5005949"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/FuncSelect/FuncSelect.vue"]]);
  const _sfc_main$B = {
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
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-ea8344e9"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/DoctorInfo/DoctorInfo.vue"]]);
  const _sfc_main$A = {
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
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SelectFront = resolveEasycom(vue.resolveDynamicComponent("SelectFront"), __easycom_0$5);
    const _component_TodayOrder = resolveEasycom(vue.resolveDynamicComponent("TodayOrder"), __easycom_1$3);
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
  const PagesMainMainfront = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-c9934975"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/mainfront.vue"]]);
  const _sfc_main$z = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMapMapfront = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/map/mapfront.vue"]]);
  const _sfc_main$y = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMedicalMedicalfront = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/medical/medicalfront.vue"]]);
  const _sfc_main$x = {
    data() {
      return {};
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesOrderOrderfront = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/order/orderfront.vue"]]);
  const _sfc_main$w = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesUserUserfront = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/user/userfront.vue"]]);
  const _sfc_main$v = {
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
    onLoad(e) {
      this.did = e.did;
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
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainDoctordetail = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-c2efb099"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/doctordetail.vue"]]);
  const _sfc_main$u = {
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
    onLoad(e) {
      this.did = e.did;
      this.way = e.way;
      if (e.way == "online") {
        this.name = "线上表单";
      } else {
        this.name = "挂号表单";
      }
      uni.setNavigationBarTitle({
        title: this.name
      });
    },
    onShow() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const data = currentPage.options;
      formatAppLog("log", "at pages/main/onlineform.vue:91", data);
    },
    methods: {
      formSubmit: function(e) {
        formatAppLog("log", "at pages/main/onlineform.vue:95", "form发生了submit事件，携带数据为：" + JSON.stringify(e.detail.value));
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
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainOnlineform = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-fb5b5931"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/onlineform.vue"]]);
  const _sfc_main$t = {
    data() {
      return {};
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesUserAddpatient = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/user/addpatient.vue"]]);
  const _sfc_main$s = {
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
    onLoad(e) {
      this.way = e.way;
      this.orderId = e.id;
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
        for (let i = 0; i < this.payway.length; i++) {
          if (this.payway[i].value === event.detail.value) {
            this.selected = i;
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
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainOnlineorder = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-1249d3e6"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/onlineorder.vue"]]);
  const _sfc_main$r = {
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
    onLoad(e) {
      this.way = e.way;
      this.orderId = e.id;
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
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainOnlineordersuccess = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/onlineordersuccess.vue"]]);
  const _sfc_main$q = {
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
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
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
  const ComponentsFuncSelectFrontFuncSelectFront = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/FuncSelectFront/FuncSelectFront.vue"]]);
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
  const _sfc_main$p = {
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
        let code = this.icons.find((v) => v.font_class === this.type);
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
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$o = {
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
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$4);
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
  const indexedListItem = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-d26f185a"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list-item.vue"]]);
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
  function touchMove(e) {
    let pageY = e.touches[0].pageY;
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
  const _sfc_main$n = {
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
      touchStart(e) {
        this.touchmove = true;
        let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
        let index = Math.floor((pageY - this.winOffsetY) / this.itemHeight);
        let item = this.lists[index];
        if (item) {
          this.scrollViewId = "uni-indexed-list-" + index;
          this.touchmoveIndex = index;
        }
      },
      touchMove(e) {
        throttleTouchMove.call(this, e);
      },
      touchEnd() {
        this.touchmove = false;
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e) {
        if (!this.isPC)
          return;
        this.touchStart(e);
      },
      mousemove(e) {
        if (!this.isPC)
          return;
        this.touchMove(e);
      },
      mouseleave(e) {
        if (!this.isPC)
          return;
        this.touchEnd(e);
      },
      onClick(e) {
        let {
          idx,
          index
        } = e;
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
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-476e099e"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.vue"]]);
  const _sfc_main$m = {
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
      getDetail(e) {
        if (this.selected == "疫苗") {
          uni.navigateTo({
            url: `/pages/main/vaccinedetail?name=${e.item.name}`
          });
        } else if (this.selected == "疾病知识") {
          uni.navigateTo({
            url: `/pages/main/diseaseknowledgedetail?name=${e.item.name}`
          });
        }
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_indexed_list = resolveEasycom(vue.resolveDynamicComponent("uni-indexed-list"), __easycom_0$3);
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
  const ComponentsFuncSelectContextFuncSelectContext = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-18221e6b"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/FuncSelectContext/FuncSelectContext.vue"]]);
  const _sfc_main$l = {
    data() {
      return {
        word: "搜索疫苗",
        value: "疫苗"
      };
    },
    methods: {}
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectContext"), ComponentsFuncSelectContextFuncSelectContext);
    return vue.openBlock(), vue.createElementBlock("view", { class: "vaccine" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createVNode(_component_FuncSelectContext, { selected: $data.value }, null, 8, ["selected"])
    ]);
  }
  const PagesMainVaccine = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-d5b672a6"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/vaccine.vue"]]);
  const _sfc_main$k = {
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
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-ca1dad8d"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/DiseaseFunc/DiseaseFunc.vue"]]);
  const _sfc_main$j = {
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
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-74d09da9"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/DiseaseContext/DiseaseContext.vue"]]);
  const _sfc_main$i = {
    data() {
      return {
        name: ""
      };
    },
    onLoad(e) {
      uni.setNavigationBarTitle({
        title: e.name
      });
      this.name = e.name;
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$2);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "vaccinedetail" }, [
      vue.createVNode(_component_DiseaseFunc, { name: $data.name }, null, 8, ["name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainVaccinedetail = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/vaccinedetail.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        title: ""
      };
    },
    onLoad(e) {
      uni.setNavigationBarTitle({
        title: e.name
      });
      this.title = e.name;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainVaccinedetailaction = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-22157a4c"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/vaccinedetailaction.vue"]]);
  const _sfc_main$g = {
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
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainArticle = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-c6f782df"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/article.vue"]]);
  const _sfc_main$f = {
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
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainDiseaseknowledge = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/diseaseknowledge.vue"]]);
  const _sfc_main$e = {
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
      getDetail(e) {
        if (this.selected == "检查") {
          uni.navigateTo({
            url: `/pages/main/checkdetail?name=${e.item.name}`
          });
        } else if (this.selected == "治疗") {
          uni.navigateTo({
            url: `/pages/main/treatmentdetail?name=${e.item.name}`
          });
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_indexed_list = resolveEasycom(vue.resolveDynamicComponent("uni-indexed-list"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "func-select-all-context" }, [
      vue.createVNode(_component_uni_indexed_list, {
        options: $props.items,
        class: "func-select-all-context",
        onClick: $options.getDetail
      }, null, 8, ["options", "onClick"])
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-76442ca7"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/FuncSelectAllContext/FuncSelectAllContext.vue"]]);
  const _sfc_main$d = {
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectAllContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectAllContext"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "check" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createElementVNode("view", { style: { "width": "750rpx", "height": "200rpx" } }),
      vue.createVNode(_component_FuncSelectAllContext, {
        items: $data.selectList,
        selected: $data.value
      }, null, 8, ["items", "selected"])
    ]);
  }
  const PagesMainCheck = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-b0048a74"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/check.vue"]]);
  const _sfc_main$c = {
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
    onLoad(e) {
      uni.setNavigationBarTitle({
        title: e.name
      });
      this.name = e.name;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$2);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "checkdetail" }, [
      vue.createVNode(_component_DiseaseFunc, {
        list: $data.list,
        name: $data.name
      }, null, 8, ["list", "name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainCheckdetail = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/checkdetail.vue"]]);
  const _sfc_main$b = {
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_FuncSelectFront = resolveEasycom(vue.resolveDynamicComponent("FuncSelectFront"), ComponentsFuncSelectFrontFuncSelectFront);
    const _component_FuncSelectAllContext = resolveEasycom(vue.resolveDynamicComponent("FuncSelectAllContext"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "treatment" }, [
      vue.createVNode(_component_FuncSelectFront, { word: $data.word }, null, 8, ["word"]),
      vue.createElementVNode("view", { style: { "width": "750rpx", "height": "200rpx" } }),
      vue.createVNode(_component_FuncSelectAllContext, {
        items: $data.selectList,
        selected: $data.value
      }, null, 8, ["items", "selected"])
    ]);
  }
  const PagesMainTreatment = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/treatment.vue"]]);
  const _sfc_main$a = {
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
    onLoad(e) {
      uni.setNavigationBarTitle({
        title: e.name
      });
      this.name = e.name;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$2);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_DiseaseFunc, {
        list: $data.list,
        name: $data.name
      }, null, 8, ["list", "name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainDiseaseknowledgedetail = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/diseaseknowledgedetail.vue"]]);
  const _sfc_main$9 = {
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
    onLoad(e) {
      uni.setNavigationBarTitle({
        title: e.name
      });
      this.name = e.name;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DiseaseFunc = resolveEasycom(vue.resolveDynamicComponent("DiseaseFunc"), __easycom_0$2);
    const _component_DiseaseContext = resolveEasycom(vue.resolveDynamicComponent("DiseaseContext"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "treatmentdetail" }, [
      vue.createVNode(_component_DiseaseFunc, {
        list: $data.list,
        name: $data.name
      }, null, 8, ["list", "name"]),
      vue.createVNode(_component_DiseaseContext)
    ]);
  }
  const PagesMainTreatmentdetail = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/treatmentdetail.vue"]]);
  const _sfc_main$8 = {
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-e7af92e1"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/OnlineDayBlock/OnlineDayBlock.vue"]]);
  const _sfc_main$7 = {
    name: "OnlineOn",
    data() {
      return {};
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-2504236a"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/OnlineOn/OnlineOn.vue"]]);
  const _sfc_main$6 = {
    name: "OnlineBefore",
    data() {
      return {};
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-c2298192"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/OnlineBefore/OnlineBefore.vue"]]);
  const _sfc_main$5 = {
    name: "OnlineAfter",
    data() {
      return {};
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-e2f30d3b"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/OnlineAfter/OnlineAfter.vue"]]);
  const _sfc_main$4 = {
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_OnlineDayBlock = resolveEasycom(vue.resolveDynamicComponent("OnlineDayBlock"), __easycom_0$1);
    const _component_OnlineOn = resolveEasycom(vue.resolveDynamicComponent("OnlineOn"), __easycom_1);
    const _component_OnlineBefore = resolveEasycom(vue.resolveDynamicComponent("OnlineBefore"), __easycom_2);
    const _component_OnlineAfter = resolveEasycom(vue.resolveDynamicComponent("OnlineAfter"), __easycom_3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "doctoronline" }, [
      vue.createVNode(_component_OnlineDayBlock, { dataInfoList: $data.datainfoList }, null, 8, ["dataInfoList"]),
      vue.createVNode(_component_OnlineOn),
      vue.createVNode(_component_OnlineBefore),
      vue.createVNode(_component_OnlineAfter)
    ]);
  }
  const PagesMainDoctoronline = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/doctoronline.vue"]]);
  const _sfc_main$3 = {
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
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-2b194b98"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/components/IsbnArticle/IsbnArticle.vue"]]);
  const _sfc_main$2 = {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_IsbnArticle = resolveEasycom(vue.resolveDynamicComponent("IsbnArticle"), __easycom_0);
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
  const PagesMainIsbn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-c0d29b98"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/isbn.vue"]]);
  const _sfc_main$1 = {
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
    onLoad(e) {
      this.dataList = getThreeDate();
      this.way = e.way;
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesMainOnlineformtime = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-7f0c8ba1"], ["__file", "C:/Users/Simon/Desktop/qq-doctor/pages/main/onlineformtime.vue"]]);
  __definePage("pages/login/start/start", PagesLoginStartStart);
  __definePage("pages/main/messagetable", PagesMainMessagetable);
  __definePage("pages/login/register/register", PagesLoginRegisterRegister);
  __definePage("pages/login/passwordLogin/passwordLogin", PagesLoginPasswordLoginPasswordLogin);
  __definePage("pages/login/phoneLogin/phoneLogin", PagesLoginPhoneLoginPhoneLogin);
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
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/Simon/Desktop/qq-doctor/App.vue"]]);
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

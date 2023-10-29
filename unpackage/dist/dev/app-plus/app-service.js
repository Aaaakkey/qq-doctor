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
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginStartStart = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-96390ece"], ["__file", "F:/code/qq-doctor/pages/login/start/start.vue"]]);
  const _sfc_main$d = {
    name: "uniLink",
    props: {
      href: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      download: {
        type: String,
        default: ""
      },
      showUnderLine: {
        type: [Boolean, String],
        default: true
      },
      copyTips: {
        type: String,
        default: "已自动复制网址，请在手机浏览器里粘贴该网址"
      },
      color: {
        type: String,
        default: "#999999"
      },
      fontSize: {
        type: [Number, String],
        default: 14
      }
    },
    computed: {
      isShowA() {
        if ((this.isMail() || this.isTel()) && this._isH5 === true) {
          return true;
        }
        return false;
      }
    },
    created() {
      this._isH5 = null;
    },
    methods: {
      isMail() {
        return this.href.startsWith("mailto:");
      },
      isTel() {
        return this.href.startsWith("tel:");
      },
      openURL() {
        if (this.isTel()) {
          this.makePhoneCall(this.href.replace("tel:", ""));
        } else {
          plus.runtime.openURL(this.href);
        }
      },
      makePhoneCall(phoneNumber) {
        uni.makePhoneCall({
          phoneNumber
        });
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.isShowA ? (vue.openBlock(), vue.createElementBlock("a", {
      key: 0,
      class: vue.normalizeClass(["uni-link", { "uni-link--withline": $props.showUnderLine === true || $props.showUnderLine === "true" }]),
      href: $props.href,
      style: vue.normalizeStyle({ color: $props.color, fontSize: $props.fontSize + "px" }),
      download: $props.download
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createTextVNode(
          vue.toDisplayString($props.text),
          1
          /* TEXT */
        )
      ], true)
    ], 14, ["href", "download"])) : (vue.openBlock(), vue.createElementBlock(
      "text",
      {
        key: 1,
        class: vue.normalizeClass(["uni-link", { "uni-link--withline": $props.showUnderLine === true || $props.showUnderLine === "true" }]),
        style: vue.normalizeStyle({ color: $props.color, fontSize: $props.fontSize + "px" }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.openURL && $options.openURL(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(
            vue.toDisplayString($props.text),
            1
            /* TEXT */
          )
        ], true)
      ],
      6
      /* CLASS, STYLE */
    ));
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-5db80ddb"], ["__file", "F:/code/qq-doctor/uni_modules/uni-link/components/uni-link/uni-link.vue"]]);
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
  const _sfc_main$c = {
    data() {
      return {
        href: "https://uniapp.dcloud.io/component/README?id=uniui"
      };
    },
    methods: {}
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_link = resolveEasycom(vue.resolveDynamicComponent("uni-link"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "intro" }, "本项目已包含uni ui组件，无需import和注册，可直接使用。在代码区键入字母u，即可通过代码助手列出所有可用组件。光标置于组件名称处按F1，即可查看组件文档。"),
      vue.createElementVNode("text", { class: "intro" }, "详见："),
      vue.createVNode(_component_uni_link, {
        href: $data.href,
        text: $data.href
      }, null, 8, ["href", "text"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "F:/code/qq-doctor/pages/index/index.vue"]]);
  const _sfc_main$b = {
    data() {
      return {
        agreementChecked: false
      };
    },
    methods: {}
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-be2e578e"], ["__file", "F:/code/qq-doctor/pages/login/register/register.vue"]]);
  const _sfc_main$a = {
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
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
        vue.createElementVNode("navigator", { url: "/pages/login/start/start" }, [
          vue.createElementVNode("button", {
            type: "default",
            class: "btn2"
          }, [
            vue.createElementVNode("view", { class: "f22" }, " 登录 ")
          ])
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
  const PagesLoginPasswordLoginPasswordLogin = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-57b412fb"], ["__file", "F:/code/qq-doctor/pages/login/passwordLogin/passwordLogin.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        agreementChecked: false
      };
    },
    methods: {}
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginPhoneLoginPhoneLogin = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-44c963fe"], ["__file", "F:/code/qq-doctor/pages/login/phoneLogin/phoneLogin.vue"]]);
  const _sfc_main$8 = {
    methods: {
      onAgree() {
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginUserAgreementUserAgreement = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-249c4fe7"], ["__file", "F:/code/qq-doctor/pages/login/userAgreement/userAgreement.vue"]]);
  const _sfc_main$7 = {
    methods: {
      onAgree() {
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesLoginPrivacyPolicyPrivacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-a8203ef9"], ["__file", "F:/code/qq-doctor/pages/login/privacyPolicy/privacyPolicy.vue"]]);
  const _sfc_main$6 = {
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-dcaec3a2"], ["__file", "F:/code/qq-doctor/components/stepOne/stepOne.vue"]]);
  const _sfc_main$5 = {
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
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-bb0d5cf2"], ["__file", "F:/code/qq-doctor/components/stepTwo/stepTwo.vue"]]);
  const _sfc_main$4 = {
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
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-7ad89ffa"], ["__file", "F:/code/qq-doctor/components/stepThree/stepThree.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        current: 0
        // 当前轮播图索引
      };
    },
    methods: {
      goToNext() {
        this.current += 1;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
        vue.createElementVNode("button", { class: "buttonNext" }, [
          vue.createElementVNode("view", {
            class: "",
            style: { "font-size": "32rpx", "line-height": "22px", "font-weight": "600" }
          }, "开始您的体验")
        ])
      ])
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-fcd045e2"], ["__file", "F:/code/qq-doctor/components/stepFour/stepFour.vue"]]);
  const _sfc_main$2 = {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-0667e3db"], ["__file", "F:/code/qq-doctor/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue"]]);
  const _sfc_main$1 = {
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
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_stepOne = resolveEasycom(vue.resolveDynamicComponent("stepOne"), __easycom_0);
    const _component_stepTwo = resolveEasycom(vue.resolveDynamicComponent("stepTwo"), __easycom_1);
    const _component_stepThree = resolveEasycom(vue.resolveDynamicComponent("stepThree"), __easycom_2);
    const _component_stepFour = resolveEasycom(vue.resolveDynamicComponent("stepFour"), __easycom_3);
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
  const PagesRegistrationWizardSlideWizardSlideWizard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/code/qq-doctor/pages/registrationWizard/slideWizard/slideWizard.vue"]]);
  __definePage("pages/login/start/start", PagesLoginStartStart);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/register/register", PagesLoginRegisterRegister);
  __definePage("pages/login/passwordLogin/passwordLogin", PagesLoginPasswordLoginPasswordLogin);
  __definePage("pages/login/phoneLogin/phoneLogin", PagesLoginPhoneLoginPhoneLogin);
  __definePage("pages/login/userAgreement/userAgreement", PagesLoginUserAgreementUserAgreement);
  __definePage("pages/login/privacyPolicy/privacyPolicy", PagesLoginPrivacyPolicyPrivacyPolicy);
  __definePage("pages/registrationWizard/slideWizard/slideWizard", PagesRegistrationWizardSlideWizardSlideWizard);
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

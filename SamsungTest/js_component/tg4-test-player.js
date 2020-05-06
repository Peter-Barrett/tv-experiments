/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2083":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f457");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d1a9690-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=238ec771&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('Dashboard',{attrs:{"msg":_vm.msg}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=238ec771&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3d1a9690-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dashboard.vue?vue&type=template&id=6323ca76&scoped=true&
var Dashboardvue_type_template_id_6323ca76_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_c('div',{ref:"video",staticClass:"bp__inner"})])}
var Dashboardvue_type_template_id_6323ca76_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Dashboard.vue?vue&type=template&id=6323ca76&scoped=true&

// EXTERNAL MODULE: ./node_modules/global/document.js
var global_document = __webpack_require__("ef34");
var document_default = /*#__PURE__*/__webpack_require__.n(global_document);

// EXTERNAL MODULE: ./node_modules/global/window.js
var global_window = __webpack_require__("be09");
var window_default = /*#__PURE__*/__webpack_require__.n(global_window);

// CONCATENATED MODULE: ./node_modules/@brightcove/player-loader/dist/brightcove-player-loader.es.js
/*! @name @brightcove/player-loader @version 1.7.1 @license Apache-2.0 */



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "1.7.1";

/*! @name @brightcove/player-url @version 1.2.0 @license Apache-2.0 */
var version$1 = "1.2.0";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

// The parameters that may include JSON.
var JSON_ALLOWED_PARAMS = ['catalogSearch', 'catalogSequence'];

// The parameters that may be set as query string parameters for iframes.
var IFRAME_ALLOWED_QUERY_PARAMS = ['adConfigId', 'applicationId', 'catalogSearch', 'catalogSequence', 'playlistId', 'playlistVideoId', 'videoId'];

/**
 * Gets the value of a parameter and encodes it as a string.
 *
 * For certain keys, JSON is allowed and will be encoded.
 *
 * @private
 * @param   {Object} params
 *          A parameters object. See README for details.
 *
 * @param   {string} key
 *          The key in the params object.
 *
 * @return  {string|undefined}
 *          The encoded value - or `undefined` if none.
 */
var getQueryParamValue = function getQueryParamValue(params, key) {

  if (!params || params[key] === undefined) {
    return;
  }

  // If it's not a string, such as with a catalog search or sequence, we
  // try to encode it as JSON.
  if (typeof params[key] !== 'string' && JSON_ALLOWED_PARAMS.indexOf(key) !== -1) {
    try {
      return encodeURIComponent(JSON.stringify(params[key]));
    } catch (x) {

      // If it's not a string and we can't encode as JSON, it's ignored entirely.
      return;
    }
  }

  return encodeURIComponent(String(params[key]).trim()) || undefined;
};

/**
 * In some cases, we need to add query string parameters to an iframe URL.
 *
 * @private
 * @param   {Object} params
 *          An object of query parameters.
 *
 * @return  {string}
 *          A query string starting with `?`. If no valid parameters are given,
 *          returns an empty string.
 */
var getQueryString = function getQueryString(params) {
  return Object.keys(params).filter(function (k) {
    return IFRAME_ALLOWED_QUERY_PARAMS.indexOf(k) !== -1;
  }).reduce(function (qs, k) {
    var value = getQueryParamValue(params, k);

    if (value !== undefined) {
      qs += qs ? '&' : '?';
      qs += encodeURIComponent(k) + '=' + value;
    }

    return qs;
  }, '');
};

/**
 * Generate a URL to a Brightcove Player.
 *
 * @param  {Object}  params
 *         A set of parameters describing the player URL to create.
 *
 * @param  {string}  params.accountId
 *         A Brightcove account ID.
 *
 * @param  {string}  [params.playerId="default"]
 *         A Brightcove player ID.
 *
 * @param  {string}  [params.embedId="default"]
 *         A Brightcove player embed ID.
 *
 * @param  {boolean} [params.iframe=false]
 *         Whether to return a URL for an HTML document to be embedded in
 *         an iframe.
 *
 * @param  {boolean} [params.minified=true]
 *         When the `iframe` argument is `false`, this can be used to control
 *         whether the minified or unminified JavaScript URL is returned.
 *
 * @param  {string} [params.base="https://players.brightcove.net"]
 *         A base CDN protocol and hostname. Mainly used for testing.
 *
 * @return {string}
 *         A URL to a Brightcove Player.
 */
var brightcovePlayerUrl = function brightcovePlayerUrl(_ref) {
  var accountId = _ref.accountId,
      _ref$base = _ref.base,
      base = _ref$base === undefined ? 'https://players.brightcove.net' : _ref$base,
      _ref$playerId = _ref.playerId,
      playerId = _ref$playerId === undefined ? 'default' : _ref$playerId,
      _ref$embedId = _ref.embedId,
      embedId = _ref$embedId === undefined ? 'default' : _ref$embedId,
      _ref$iframe = _ref.iframe,
      iframe = _ref$iframe === undefined ? false : _ref$iframe,
      _ref$minified = _ref.minified,
      minified = _ref$minified === undefined ? true : _ref$minified,
      _ref$queryParams = _ref.queryParams,
      queryParams = _ref$queryParams === undefined ? null : _ref$queryParams;

  var ext = '';

  if (iframe) {
    ext += 'html';
  } else {
    if (minified) {
      ext += 'min.';
    }
    ext += 'js';
  }

  if (base.charAt(base.length - 1) === '/') {
    base = base.substring(0, base.length - 1);
  }

  var qs = '';

  if (iframe && queryParams && (typeof queryParams === 'undefined' ? 'undefined' : _typeof(queryParams)) === 'object') {
    qs = getQueryString(queryParams);
  }

  accountId = encodeURIComponent(accountId);
  playerId = encodeURIComponent(playerId);
  embedId = encodeURIComponent(embedId);

  return base + '/' + accountId + '/' + playerId + '_' + embedId + '/index.' + ext + qs;
};

/**
 * The version of this module.
 *
 * @type {string}
 */
brightcovePlayerUrl.VERSION = version$1;

var DEFAULTS = {
  embedId: 'default',
  embedType: 'in-page',
  playerId: 'default',
  Promise: window_default.a.Promise,
  refNodeInsert: 'append'
};
var DEFAULT_ASPECT_RATIO = '16:9';
var DEFAULT_IFRAME_HORIZONTAL_PLAYLIST = false;
var DEFAULT_MAX_WIDTH = '100%';
var EMBED_TAG_NAME_VIDEO = 'video';
var EMBED_TAG_NAME_VIDEOJS = 'video-js';
var EMBED_TYPE_IN_PAGE = 'in-page';
var EMBED_TYPE_IFRAME = 'iframe';
var REF_NODE_INSERT_APPEND = 'append';
var REF_NODE_INSERT_PREPEND = 'prepend';
var REF_NODE_INSERT_BEFORE = 'before';
var REF_NODE_INSERT_AFTER = 'after';
var REF_NODE_INSERT_REPLACE = 'replace';
var JSON_ALLOWED_ATTRS = ['catalogSearch', 'catalogSequence'];

var BASE_URL = 'https://players.brightcove.net/';
/**
 * Gets the URL to a player on CDN.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @return {string}
 *         A URL.
 */

var getUrl = function getUrl(params) {
  if (params.playerUrl) {
    return params.playerUrl;
  }

  var accountId = params.accountId,
      playerId = params.playerId,
      embedId = params.embedId,
      embedOptions = params.embedOptions;
  var iframe = params.embedType === EMBED_TYPE_IFRAME;
  return brightcovePlayerUrl({
    accountId: accountId,
    playerId: playerId,
    embedId: embedId,
    iframe: iframe,
    base: BASE_URL,
    // The unminified embed option is the exact reverse of the minified option
    // here.
    minified: embedOptions ? !embedOptions.unminified : true,
    // Pass the entire params object as query params. This is safe because
    // @brightcove/player-url only accepts a whitelist of parameters. Anything
    // else will be ignored.
    queryParams: params
  });
};
/**
 * Function used to get the base URL - primarily for testing.
 *
 * @private
 * @return {string}
 *         The current base URL.
 */


var getBaseUrl = function getBaseUrl() {
  return BASE_URL;
};
/**
 * Function used to set the base URL - primarily for testing.
 *
 * @private
 * @param {string} baseUrl
 *        A new base URL (instead of Brightcove CDN).
 */


var setBaseUrl = function setBaseUrl(baseUrl) {
  BASE_URL = baseUrl;
};

var urls = {
  getUrl: getUrl,
  getBaseUrl: getBaseUrl,
  setBaseUrl: setBaseUrl
};

/**
 * Is this value an element?
 *
 * @param  {Element} el
 *         A maybe element.
 *
 * @return {boolean}
 *         Whether or not the value is a element.
 */

var isEl = function isEl(el) {
  return Boolean(el && el.nodeType === 1);
};
/**
 * Is this value an element with a parent node?
 *
 * @param  {Element} el
 *         A maybe element.
 *
 * @return {boolean}
 *         Whether or not the value is a element with a parent node.
 */


var isElInDom = function isElInDom(el) {
  return Boolean(isEl(el) && el.parentNode);
};
/**
 * Creates an iframe embed code.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @return {Element}
 *         The DOM element that will ultimately be passed to the `bc()` function.
 */


var brightcove_player_loader_es_createIframeEmbed = function createIframeEmbed(params) {
  var el = document_default.a.createElement('iframe');
  el.setAttribute('allow', 'autoplay;encrypted-media;fullscreen');
  el.setAttribute('allowfullscreen', 'allowfullscreen');
  el.src = urls.getUrl(params);
  return el;
};
/**
 * Creates an in-page embed code.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @return {Element}
 *         The DOM element that will ultimately be passed to the `bc()` function.
 */


var brightcove_player_loader_es_createInPageEmbed = function createInPageEmbed(params) {
  var embedOptions = params.embedOptions; // We DO NOT include the data-account, data-player, or data-embed attributes
  // here because we will be manually initializing the player.

  var paramsToAttrs = {
    adConfigId: 'data-ad-config-id',
    applicationId: 'data-application-id',
    catalogSearch: 'data-catalog-search',
    catalogSequence: 'data-catalog-sequence',
    deliveryConfigId: 'data-delivery-config-id',
    playlistId: 'data-playlist-id',
    playlistVideoId: 'data-playlist-video-id',
    videoId: 'data-video-id'
  };
  var tagName = embedOptions && embedOptions.tagName || EMBED_TAG_NAME_VIDEOJS;
  var el = document_default.a.createElement(tagName);
  Object.keys(paramsToAttrs).filter(function (key) {
    return params[key];
  }).forEach(function (key) {
    var value; // If it's not a string, such as with a catalog search or sequence, we
    // try to encode it as JSON.

    if (typeof params[key] !== 'string' && JSON_ALLOWED_ATTRS.indexOf(key) !== -1) {
      try {
        value = JSON.stringify(params[key]); // If it fails, don't set anything.
      } catch (x) {
        return;
      }
    } else {
      value = String(params[key]).trim();
    }

    el.setAttribute(paramsToAttrs[key], value);
  });
  el.setAttribute('controls', 'controls');
  el.classList.add('video-js');
  return el;
};
/**
 * Wraps an element in responsive intrinsic ratio elements.
 *
 * @private
 * @param  {string} embedType
 *         The type of the embed.
 *
 * @param  {Object} embedOptions
 *         Embed options from the params.
 *
 * @param  {Element} el
 *         The DOM element.
 *
 * @return {Element}
 *         A new element (if needed).
 */


var brightcove_player_loader_es_wrapResponsive = function wrapResponsive(embedType, embedOptions, el) {
  if (!embedOptions.responsive) {
    return el;
  }

  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.right = '0px';
  el.style.bottom = '0px';
  el.style.left = '0px';
  el.style.width = '100%';
  el.style.height = '100%';

  var responsive = _extends({
    aspectRatio: DEFAULT_ASPECT_RATIO,
    iframeHorizontalPlaylist: DEFAULT_IFRAME_HORIZONTAL_PLAYLIST,
    maxWidth: DEFAULT_MAX_WIDTH
  }, embedOptions.responsive); // This value is validate at a higher level, so we can trust that it's in the
  // correct format.


  var aspectRatio = responsive.aspectRatio.split(':').map(Number);
  var inner = document_default.a.createElement('div');
  var paddingTop = aspectRatio[1] / aspectRatio[0] * 100; // For iframes with a horizontal playlist, the playlist takes up 20% of the
  // vertical space (if shown); so, adjust the vertical size of the embed to
  // avoid black bars.

  if (embedType === EMBED_TYPE_IFRAME && responsive.iframeHorizontalPlaylist) {
    paddingTop *= 1.25;
  }

  inner.style.paddingTop = paddingTop + '%';
  inner.appendChild(el);
  var outer = document_default.a.createElement('div');
  outer.style.position = 'relative';
  outer.style.display = 'block';
  outer.style.maxWidth = responsive.maxWidth;
  outer.appendChild(inner);
  return outer;
};
/**
 * Wraps an element in a Picture-in-Picture plugin container.
 *
 * @private
 * @param  {Object} embedOptions
 *         Embed options from the params.
 *
 * @param  {Element} el
 *         The DOM element.
 *
 * @return {Element}
 *         A new element (if needed).
 */


var brightcove_player_loader_es_wrapPip = function wrapPip(embedOptions, el) {
  if (!embedOptions.pip) {
    return el;
  }

  var pip = document_default.a.createElement('div');
  pip.classList.add('vjs-pip-container');
  pip.appendChild(el);
  return pip;
};
/**
 * Wraps a bare embed element with necessary parent elements, depending on
 * embed options given in params.
 *
 * @private
 * @param  {string} embedType
 *         The type of the embed.
 *
 * @param  {Object} embedOptions
 *         Embed options from the params.
 *
 * @param  {Element} embed
 *         The embed DOM element.
 *
 * @return {Element}
 *         A new element (if needed) or the embed itself.
 */


var wrapEmbed = function wrapEmbed(embedType, embedOptions, embed) {
  if (!embedOptions) {
    return embed;
  }

  return brightcove_player_loader_es_wrapPip(embedOptions, brightcove_player_loader_es_wrapResponsive(embedType, embedOptions, embed));
};
/**
 * Inserts a previously-created embed element into the page based on params.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @param  {Element} embed
 *         The embed DOM element.
 *
 * @return {Element}
 *         The embed DOM element.
 */


var brightcove_player_loader_es_insertEmbed = function insertEmbed(params, embed) {
  var refNode = params.refNode,
      refNodeInsert = params.refNodeInsert;
  var refNodeParent = refNode.parentNode; // Wrap the embed, if needed, in container elements to support various
  // plugins.

  var wrapped = wrapEmbed(params.embedType, params.embedOptions, embed); // Decide where to insert the wrapped embed.

  if (refNodeInsert === REF_NODE_INSERT_BEFORE) {
    refNodeParent.insertBefore(wrapped, refNode);
  } else if (refNodeInsert === REF_NODE_INSERT_AFTER) {
    refNodeParent.insertBefore(wrapped, refNode.nextElementSibling || null);
  } else if (refNodeInsert === REF_NODE_INSERT_REPLACE) {
    refNodeParent.replaceChild(wrapped, refNode);
  } else if (refNodeInsert === REF_NODE_INSERT_PREPEND) {
    refNode.insertBefore(wrapped, refNode.firstChild || null); // Append is the default.
  } else {
    refNode.appendChild(wrapped);
  } // If the playlist embed option is provided, we need to add a playlist element
  // immediately after the embed. This has to happen after the embed is inserted
  // into the DOM (above).


  if (params.embedOptions && params.embedOptions.playlist) {
    var playlistTagName = params.embedOptions.playlist.legacy ? 'ul' : 'div';
    var playlist = document_default.a.createElement(playlistTagName);
    playlist.classList.add('vjs-playlist');
    embed.parentNode.insertBefore(playlist, embed.nextElementSibling || null);
  } // Clean up internal reference to the refNode to avoid potential memory
  // leaks in case the params get persisted somewhere. We won't need it beyond
  // this point.


  params.refNode = null; // Return the original embed element that can be passed to `bc()`.

  return embed;
};
/**
 * Handles `onEmbedCreated` callback invocation.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @param  {Element} embed
 *         The embed DOM element.
 *
 * @return {Element}
 *         A possibly-new DOM element.
 */


var onEmbedCreated = function onEmbedCreated(params, embed) {
  if (typeof params.onEmbedCreated !== 'function') {
    return embed;
  }

  var result = params.onEmbedCreated(embed);

  if (isEl(result)) {
    return result;
  }

  return embed;
};
/**
 * Creates an embed code of the appropriate type, runs any customizations
 * necessary, and inserts it into the DOM.
 *
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @return {Element}
 *         The DOM element that will ultimately be passed to the `bc()`
 *         function. Even when customized or wrapped, the return value will be
 *         the target element.
 */


var createEmbed = function createEmbed(params) {
  var embed = params.embedType === EMBED_TYPE_IFRAME ? brightcove_player_loader_es_createIframeEmbed(params) : brightcove_player_loader_es_createInPageEmbed(params);
  return brightcove_player_loader_es_insertEmbed(params, onEmbedCreated(params, embed));
};

//
// The keys follow the format "accountId_playerId_embedId" where accountId is
// optional and defaults to "*". This happens when we detect pre-existing
// player globals.

var actualCache = new window_default.a.Map();
/**
 * Get the cache key given some properties.
 *
 * @private
 * @param  {Object} props
 *         Properties describing the player record to cache.
 *
 * @param  {string} props.playerId
 *         A player ID.
 *
 * @param  {string} props.embedId
 *         An embed ID.
 *
 * @param  {string} [props.accountId="*"]
 *         An optional account ID. This is optional because when we search for
 *         pre-existing players to avoid downloads, we will not necessarily
 *         know the account ID.
 *
 * @return {string}
 *         A key to be used in the script cache.
 */

var brightcove_player_loader_es_key = function key(_ref) {
  var accountId = _ref.accountId,
      playerId = _ref.playerId,
      embedId = _ref.embedId;
  return (accountId || '*') + "_" + playerId + "_" + embedId;
};
/**
 * Add an entry to the script cache.
 *
 * @private
 * @param  {Object} props
 *         Properties describing the player record to cache.
 *
 * @param  {string} props.playerId
 *         A player ID.
 *
 * @param  {string} props.embedId
 *         An embed ID.
 *
 * @param  {string} [props.accountId="*"]
 *         An optional account ID. This is optional because when we search for
 *         pre-existing players to avoid downloads, we will not necessarily
 *         know the account ID. If not given, we assume that no script was
 *         downloaded for this player.
 */


var store = function store(props) {
  actualCache.set(brightcove_player_loader_es_key(props), props.accountId ? urls.getUrl(props) : '');
};
/**
 * Checks if the script cache has an entry.
 *
 * @private
 * @param  {Object} props
 *         Properties describing the player record to cache.
 *
 * @param  {string} props.playerId
 *         A player ID.
 *
 * @param  {string} props.embedId
 *         An embed ID.
 *
 * @param  {string} [props.accountId="*"]
 *         An optional account ID. This is optional because when we search for
 *         pre-existing players to avoid downloads, we will not necessarily
 *         know the account ID.
 *
 * @return {boolean}
 *         Will be `true` if there is a matching cache entry.
 */


var has = function has(props) {
  return actualCache.has(brightcove_player_loader_es_key(props));
};
/**
 * Gets a cache entry.
 *
 * @private
 * @param  {Object} props
 *         Properties describing the player record to cache.
 *
 * @param  {string} props.playerId
 *         A player ID.
 *
 * @param  {string} props.embedId
 *         An embed ID.
 *
 * @param  {string} [props.accountId="*"]
 *         An optional account ID. This is optional because when we search for
 *         pre-existing players to avoid downloads, we will not necessarily
 *         know the account ID.
 *
 * @return {string}
 *         A cache entry - a URL or empty string.
 *
 */


var get = function get(props) {
  return actualCache.get(brightcove_player_loader_es_key(props));
};
/**
 * Clears the cache.
 */


var clear = function clear() {
  actualCache.clear();
};
/**
 * Iterates over the cache.
 *
 * @param  {Function} fn
 *         A callback function that will be called with a value and a key
 *         for each item in the cache.
 */


var forEach = function forEach(fn) {
  actualCache.forEach(fn);
};

var playerScriptCache = {
  clear: clear,
  forEach: forEach,
  get: get,
  has: has,
  key: brightcove_player_loader_es_key,
  store: store
};

var REGEX_PLAYER_EMBED = /^([A-Za-z0-9]+)_([A-Za-z0-9]+)$/;
/**
 * Gets an array of current per-player/per-embed `bc` globals that are
 * attached to the `bc` global (e.g. `bc.abc123xyz_default`).
 *
 * If `bc` is not defined, returns an empty array.
 *
 * @private
 * @return {string[]}
 *         An array of keys.
 */

var brightcove_player_loader_es_getBcGlobalKeys = function getBcGlobalKeys() {
  return window_default.a.bc ? Object.keys(window_default.a.bc).filter(function (k) {
    return REGEX_PLAYER_EMBED.test(k);
  }) : [];
};
/**
 * Gets known global object keys that Brightcove Players may create.
 *
 * @private
 * @return {string[]}
 *         An array of global variables that were added during testing.
 */


var brightcove_player_loader_es_getGlobalKeys = function getGlobalKeys() {
  return Object.keys(window_default.a).filter(function (k) {
    return /^videojs/i.test(k) || /^(bc)$/.test(k);
  });
};
/**
 * Dispose all players from a copy of Video.js.
 *
 * @param  {Function} videojs
 *         A copy of Video.js.
 */


var disposeAll = function disposeAll(videojs) {
  if (!videojs) {
    return;
  }

  Object.keys(videojs.players).forEach(function (k) {
    var p = videojs.players[k];

    if (p) {
      p.dispose();
    }
  });
};
/**
 * Resets environment state.
 *
 * This will dispose ALL Video.js players on the page and remove ALL `bc` and
 * `videojs` globals it finds.
 */


var brightcove_player_loader_es_reset = function reset() {
  // Remove all script elements from the DOM.
  playerScriptCache.forEach(function (value, key) {
    // If no script URL is associated, skip it.
    if (!value) {
      return;
    } // Find all script elements and remove them.


    Array.prototype.slice.call(document_default.a.querySelectorAll("script[src=\"" + value + "\"]")).forEach(function (el) {
      return el.parentNode.removeChild(el);
    });
  }); // Clear the internal cache that have been downloaded.

  playerScriptCache.clear(); // Dispose any remaining players from the `videojs` global.

  disposeAll(window_default.a.videojs); // There may be other `videojs` instances lurking in the bowels of the
  // `bc` global. This should eliminate any of those.

  brightcove_player_loader_es_getBcGlobalKeys().forEach(function (k) {
    return disposeAll(window_default.a.bc[k].videojs);
  }); // Delete any global object keys that were created.

  brightcove_player_loader_es_getGlobalKeys().forEach(function (k) {
    delete window_default.a[k];
  });
};
/**
 * At runtime, populate the cache with pre-detected players. This allows
 * people who have bundled their player or included a script tag before this
 * runs to not have to re-download players.
 */


var detectPlayers = function detectPlayers() {
  brightcove_player_loader_es_getBcGlobalKeys().forEach(function (k) {
    var matches = k.match(REGEX_PLAYER_EMBED);
    var props = {
      playerId: matches[1],
      embedId: matches[2]
    };

    if (!playerScriptCache.has(props)) {
      playerScriptCache.store(props);
    }
  });
};

var env = {
  detectPlayers: detectPlayers,
  reset: brightcove_player_loader_es_reset
};

env.detectPlayers();
/**
 * Is this value a function?
 *
 * @private
 * @param  {Function} fn
 *         A maybe function.
 *
 * @return {boolean}
 *         Whether or not the value is a function.
 */

var isFn = function isFn(fn) {
  return typeof fn === 'function';
};
/**
 * Checks whether an embedType parameter is valid.
 *
 * @private
 * @param  {string} embedType
 *         The value to test.
 *
 * @return {boolean}
 *         Whether the value is valid.
 */


var isValidEmbedType = function isValidEmbedType(embedType) {
  return embedType === EMBED_TYPE_IN_PAGE || embedType === EMBED_TYPE_IFRAME;
};
/**
 * Checks whether an embedOptions.tagName parameter is valid.
 *
 * @private
 * @param  {string} tagName
 *         The value to test.
 *
 * @return {boolean}
 *         Whether the value is valid.
 */


var isValidTagName = function isValidTagName(tagName) {
  return tagName === EMBED_TAG_NAME_VIDEOJS || tagName === EMBED_TAG_NAME_VIDEO;
};
/**
 * Checks whether a refNodeInsert parameter is valid.
 *
 * @private
 * @param  {string} refNodeInsert
 *         The value to test.
 *
 * @return {boolean}
 *         Whether the value is valid.
 */


var isValidRootInsert = function isValidRootInsert(refNodeInsert) {
  return refNodeInsert === REF_NODE_INSERT_APPEND || refNodeInsert === REF_NODE_INSERT_PREPEND || refNodeInsert === REF_NODE_INSERT_BEFORE || refNodeInsert === REF_NODE_INSERT_AFTER || refNodeInsert === REF_NODE_INSERT_REPLACE;
};
/**
 * Checks parameters and throws an error on validation problems.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @throws {Error} If accountId is missing.
 * @throws {Error} If refNode is missing or invalid.
 * @throws {Error} If embedType is missing or invalid.
 * @throws {Error} If attempting to use an iframe embed with options.
 * @throws {Error} If attempting to use embedOptions.responsiveIframe with a
 *                 non-iframe embed.
 * @throws {Error} If refNodeInsert is missing or invalid.
 */


var checkParams = function checkParams(params) {
  var accountId = params.accountId,
      embedOptions = params.embedOptions,
      embedType = params.embedType,
      options = params.options,
      refNode = params.refNode,
      refNodeInsert = params.refNodeInsert;

  if (!accountId) {
    throw new Error('accountId is required');
  } else if (!isElInDom(refNode)) {
    throw new Error('refNode must resolve to a node attached to the DOM');
  } else if (!isValidEmbedType(embedType)) {
    throw new Error('embedType is missing or invalid');
  } else if (embedType === EMBED_TYPE_IFRAME && options) {
    throw new Error('cannot use options with an iframe embed');
  } else if (embedOptions && embedOptions.tagName !== undefined && !isValidTagName(embedOptions.tagName)) {
    throw new Error("embedOptions.tagName is invalid (value: \"" + embedOptions.tagName + "\")");
  } else if (embedOptions && embedOptions.responsive && embedOptions.responsive.aspectRatio && !/^\d+\:\d+$/.test(embedOptions.responsive.aspectRatio)) {
    throw new Error("embedOptions.responsive.aspectRatio must be in the \"n:n\" format (value: \"" + embedOptions.responsive.aspectRatio + "\")");
  } else if (!isValidRootInsert(refNodeInsert)) {
    throw new Error('refNodeInsert is missing or invalid');
  }
};
/**
 * Normalizes a `refNode` param to an element - or `null`.
 *
 * @private
 * @param  {Element|string} refNode
 *         The value of a `refNode` param.
 *
 * @return {Element|null}
 *         A DOM element or `null` if the `refNode` was given as a string and
 *         did not match an element.
 */


var brightcove_player_loader_es_resolveRefNode = function resolveRefNode(refNode) {
  if (isElInDom(refNode)) {
    return refNode;
  }

  if (typeof refNode === 'string') {
    return document_default.a.querySelector(refNode);
  }

  return null;
};
/**
 * Initializes a player and returns it.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @param  {Element} embed
 *         An element that will be passed to the `bc()` function.
 *
 * @param  {Function} resolve
 *         A function to call if a player is successfully initialized.
 *
 * @param  {Function} reject
 *         A function to call if a player fails to be initialized.
 *
 * @return {Object}
 *         A success object whose `ref` is a player.
 */


var brightcove_player_loader_es_initPlayer = function initPlayer(params, embed, resolve, reject) {
  var embedId = params.embedId,
      playerId = params.playerId;
  var bc = window_default.a.bc[playerId + "_" + embedId] || window_default.a.bc;

  if (!bc) {
    return reject(new Error("missing bc function for " + playerId));
  }

  playerScriptCache.store(params);
  var player;

  try {
    player = bc(embed, params.options); // Add a PLAYER_LOADER property to bcinfo to indicate this player was
    // loaded via that mechanism.

    if (player.bcinfo) {
      player.bcinfo.PLAYER_LOADER = true;
    }
  } catch (x) {
    var message = 'Could not initialize the Brightcove Player.'; // Update the rejection message based on known conditions that can cause it.

    if (params.embedOptions.tagName === EMBED_TAG_NAME_VIDEOJS) {
      message += ' You are attempting to embed using a "video-js" element.' + ' Please ensure that your Player is v6.11.0 or newer in order to' + ' support this embed type. Alternatively, pass `"video"` for' + ' `embedOptions.tagName`.';
    }

    return reject(new Error(message));
  }

  resolve({
    type: EMBED_TYPE_IN_PAGE,
    ref: player
  });
};
/**
 * Loads a player from CDN and embeds it.
 *
 * @private
 * @param  {Object} params
 *         A parameters object. See README for details.
 *
 * @param  {Function} resolve
 *         A function to call if a player is successfully initialized.
 *
 * @param  {Function} reject
 *         A function to call if a player fails to be initialized.
 */


var brightcove_player_loader_es_loadPlayer = function loadPlayer(params, resolve, reject) {
  params.refNode = brightcove_player_loader_es_resolveRefNode(params.refNode);
  checkParams(params);
  var refNode = params.refNode,
      refNodeInsert = params.refNodeInsert; // Store a reference to the refNode parent. When we use the replace method,
  // we'll need it as the location to store the script element.

  var refNodeParent = refNode.parentNode;
  var embed = createEmbed(params); // If this is an iframe, all we need to do is create the embed code and
  // inject it. Because there is no reliable way to hook into an iframe from
  // the parent page, we simply resolve immediately upon creating the embed.

  if (params.embedType === EMBED_TYPE_IFRAME) {
    resolve({
      type: EMBED_TYPE_IFRAME,
      ref: embed
    });
    return;
  } // If we've already downloaded this script or detected a matching global, we
  // should have the proper `bc` global and can bypass the script creation
  // process.


  if (playerScriptCache.has(params)) {
    return brightcove_player_loader_es_initPlayer(params, embed, resolve, reject);
  }

  var script = document_default.a.createElement('script');

  script.onload = function () {
    return brightcove_player_loader_es_initPlayer(params, embed, resolve, reject);
  };

  script.onerror = function () {
    reject(new Error('player script could not be downloaded'));
  };

  script.async = true;
  script.charset = 'utf-8';
  script.src = urls.getUrl(params);

  if (refNodeInsert === REF_NODE_INSERT_REPLACE) {
    refNodeParent.appendChild(script);
  } else {
    refNode.appendChild(script);
  }
};
/**
 * A function for asynchronously loading a Brightcove Player into a web page.
 *
 * @param  {Object} parameters
 *         A parameters object. See README for details.
 *
 * @return {Promise|undefined}
 *         A Promise, if possible.
 */


var brightcovePlayerLoader = function brightcovePlayerLoader(parameters) {
  var params = _extends({}, DEFAULTS, parameters);

  var Promise = params.Promise,
      onSuccess = params.onSuccess,
      onFailure = params.onFailure; // When Promise is not available or any success/failure callback is given,
  // do not attempt to use Promises.

  if (!isFn(Promise) || isFn(onSuccess) || isFn(onFailure)) {
    return brightcove_player_loader_es_loadPlayer(params, isFn(onSuccess) ? onSuccess : function () {}, isFn(onFailure) ? onFailure : function (err) {
      throw err;
    });
  } // Promises are supported, use 'em.


  return new Promise(function (resolve, reject) {
    return brightcove_player_loader_es_loadPlayer(params, resolve, reject);
  });
};
/**
 * Expose a non-writable, non-configurable property on the
 * `brightcovePlayerLoader` function.
 *
 * @private
 * @param  {string} key
 *         The property key.
 *
 * @param  {string|Function} value
 *         The value.
 */


var expose = function expose(key, value) {
  Object.defineProperty(brightcovePlayerLoader, key, {
    configurable: false,
    enumerable: true,
    value: value,
    writable: false
  });
};
/**
 * Get the base URL for players. By default, this will be the Brightcove CDN.
 *
 * @return {string}
 *         The current base URL.
 */


expose('getBaseUrl', function () {
  return urls.getBaseUrl();
});
/**
 * Set the base URL for players. By default, this will be the Brightcove CDN,
 * but can be overridden with this function.
 *
 * @param {string} baseUrl
 *        A new base URL (instead of Brightcove CDN).
 */

expose('setBaseUrl', function (baseUrl) {
  urls.setBaseUrl(baseUrl);
});
/**
 * Get the URL for a player.
 */

expose('getUrl', function (options) {
  return urls.getUrl(options);
});
/**
 * Completely resets global state.
 *
 * This will dispose ALL Video.js players on the page and remove ALL `bc` and
 * `videojs` globals it finds.
 */

expose('reset', function () {
  return env.reset();
}); // Define some read-only constants on the exported function.

[['EMBED_TAG_NAME_VIDEO', EMBED_TAG_NAME_VIDEO], ['EMBED_TAG_NAME_VIDEOJS', EMBED_TAG_NAME_VIDEOJS], ['EMBED_TYPE_IN_PAGE', EMBED_TYPE_IN_PAGE], ['EMBED_TYPE_IFRAME', EMBED_TYPE_IFRAME], ['REF_NODE_INSERT_APPEND', REF_NODE_INSERT_APPEND], ['REF_NODE_INSERT_PREPEND', REF_NODE_INSERT_PREPEND], ['REF_NODE_INSERT_BEFORE', REF_NODE_INSERT_BEFORE], ['REF_NODE_INSERT_AFTER', REF_NODE_INSERT_AFTER], ['REF_NODE_INSERT_REPLACE', REF_NODE_INSERT_REPLACE], ['VERSION', version]].forEach(function (arr) {
  expose(arr[0], arr[1]);
});

/* harmony default export */ var brightcove_player_loader_es = (brightcovePlayerLoader);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Dashboardvue_type_script_lang_js_ = ({
  name: 'Dashboard',
  props: {
    msg: String
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      brightcove_player_loader_es({
        refNode: this.$refs.video,
        accountId: '1752604059001',
        playerId: 'wHBRh9M3o',
        videoId: '4607357817001'
      }).then(function (success) {
        var myPlayer = success.ref;
        console.log('success', success);
        myPlayer.on('loadedmetadata', function () {
          myPlayer.muted(true);
          myPlayer.play();
        });
      }).catch(function (error) {
        console.log('error', error);
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/Dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dashboardvue_type_script_lang_js_ = (Dashboardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("a697")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_Dashboardvue_type_script_lang_js_,
  Dashboardvue_type_template_id_6323ca76_scoped_true_render,
  Dashboardvue_type_template_id_6323ca76_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "6323ca76",
  null
  ,true
)

/* harmony default export */ var Dashboard = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//

/* harmony default export */ var Appvue_type_script_lang_js_shadow = ({
  name: 'App',
  components: {
    Dashboard: Dashboard
  },
  props: {
    msg: String
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_js_shadow = (Appvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/App.vue?shadow



function Appshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("2083")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Appshadow_component = normalizeComponent(
  src_Appvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  Appshadow_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Appshadow = (Appshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('tg4-test-player', vue_wc_wrapper(external_Vue_default.a, Appshadow))

/***/ }),

/***/ "5dee":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7890":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d1ed");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("9ca74b7c", content, shadowRoot)
};

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "a697":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6323ca76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7890");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6323ca76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6323ca76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6323ca76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6323ca76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_6323ca76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be09":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "d1ed":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".video-player[data-v-6323ca76]{height:500px;width:500px}h3[data-v-6323ca76]{margin:40px 0 0}ul[data-v-6323ca76]{list-style-type:none;padding:0}li[data-v-6323ca76]{display:inline-block;margin:0 10px}a[data-v-6323ca76]{color:#42b983}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ef34":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(0);

var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }
}

module.exports = doccy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f457":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5dee");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("fc0952da", content, shadowRoot)
};

/***/ })

/******/ });
//# sourceMappingURL=tg4-test-player.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
        /***/ "../corporate-ui/dist/esm/c-dealer-header.entry.js": 
        /*!*********************************************************!*\
          !*** ../corporate-ui/dist/esm/c-dealer-header.entry.js ***!
          \*********************************************************/
        /*! exports provided: c_dealer_header */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_dealer_header", function () { return DealerHeader; });
            /* harmony import */ var _core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-7b39e2be.js */ "../corporate-ui/dist/esm/core-7b39e2be.js");
            var DealerHeader = /** @class */ (function () {
                function class_1(hostRef) {
                    Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
                    /** A link that will be applied to the site-name */
                    this.siteUrl = '/';
                    this.currentTheme = { components: [] };
                    this.ContextStore = Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "store");
                }
                class_1.prototype.setTheme = function (name) {
                    if (name === void 0) { name = undefined; }
                    this.theme = name || this.store.getState().theme.current;
                    this.currentTheme = this.store.getState().theme.items[this.theme];
                };
                class_1.prototype.componentWillLoad = function () {
                    var _this = this;
                    this.store = this.ContextStore || window.CorporateUi.store;
                    this.setTheme(this.theme);
                    this.store.subscribe(function () {
                        _this.setTheme();
                    });
                    if (!(this.el && this.el.nodeName))
                        return;
                    this.tagName = this.el.nodeName.toLowerCase();
                };
                class_1.prototype.render = function () {
                    return [
                        this.currentTheme ? Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme.components[this.tagName]) : '',
                        Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("c-header", { "site-name": this.siteName, "short-name": this.shortName, "site-url": this.siteUrl, variation: 'dealer' }, this.logo
                            ? Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.logo, alt: this.siteName, slot: 'brand-logo' })
                            : Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("strong", { class: 'navbar-title', slot: 'brand-logo' }, this.siteName), Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'items', slot: 'items' })),
                    ];
                };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return Object(_core_7b39e2be_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "theme": ["setTheme"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "style", {
                    get: function () { return ":host {\n  display: Var(--display);\n}\n:host,\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nimg {\n  max-height: 30px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=2-es2015.js.map
//# sourceMappingURL=2-es5.js.map
//# sourceMappingURL=2-es5.js.map
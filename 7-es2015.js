(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "../corporate-ui-dev/dist/esm/c-icon.entry.js":
/*!****************************************************!*\
  !*** ../corporate-ui-dev/dist/esm/c-icon.entry.js ***!
  \****************************************************/
/*! exports provided: c_icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_icon", function() { return Icon; });
/* harmony import */ var _core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-536a6045.js */ "../corporate-ui-dev/dist/esm/core-536a6045.js");


const Icon = class {
    constructor(hostRef) {
        Object(_core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.name = 'question';
        this.ContextStore = Object(_core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "store");
    }
    setIcon(name = this.name) {
        const items = this.store.getState().icon.items;
        // TODO: We should have the default icon being a simple
        // square instead of first icon in the collection
        this.icon = items[name] || items.question || items[Object.keys(items)[0]] || { width: 0, height: 0 };
    }
    componentWillLoad() {
        this.store = this.ContextStore || window.CorporateUi.store;
        this.currentTheme = this.store.getState().themes[this.store.getState().theme.name];
        this.setIcon();
        this.store.subscribe(() => {
            this.currentTheme = this.store.getState().themes[this.store.getState().theme.name];
            this.setIcon();
        });
        if (!(this.el && this.el.nodeName))
            return;
        this.tagName = this.el.nodeName.toLowerCase();
    }
    render() {
        return [
            this.currentTheme ? Object(_core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__["h"])("style", null, this.currentTheme[this.tagName]) : '',
            Object(_core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: `0 0 ${this.icon.width} ${this.icon.height}` }, Object(_core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", { fill: 'currentColor', d: this.icon.definition })),
        ];
    }
    get el() { return Object(_core_536a6045_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this); }
    static get watchers() { return {
        "name": ["setIcon"]
    }; }
    static get style() { return ":host {\n  display: block;\n}\n:host,\n:host *,\n:host *::before,\n:host *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\n\n:host {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 0;\n}\n:host svg {\n  height: 1em;\n  width: 1em;\n  fill: currentColor;\n}"; }
};




/***/ })

}]);
//# sourceMappingURL=7-es2015.js.map
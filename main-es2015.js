(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/corporate-ui-dev/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/corporate-ui-dev/dist/esm lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./c-code-sample.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-code-sample.entry.js",
		0
	],
	"./c-content.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-content.entry.js",
		1
	],
	"./c-dealer-header.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-dealer-header.entry.js",
		2
	],
	"./c-footer.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-footer.entry.js",
		3
	],
	"./c-global-style.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-global-style.entry.js",
		4
	],
	"./c-header.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-header.entry.js",
		5
	],
	"./c-hello-world.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-hello-world.entry.js",
		6
	],
	"./c-icon.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-icon.entry.js",
		7
	],
	"./c-navigation.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-navigation.entry.js",
		8
	],
	"./c-theme.entry.js": [
		"./node_modules/corporate-ui-dev/dist/esm/c-theme.entry.js",
		9
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/corporate-ui-dev/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<c-theme name=\"scania\" global=\"true\"></c-theme>\r\n<note-component></note-component>\r\n<nav navigation-component></nav>\r\n<main main-component></main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-list/color-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-list/color-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let color of colors\" [ngClass]=\"classes\">\r\n  <div [ngClass]=\"['color', color.name]\" [title]=\"color.hex\" [ngStyle]=\"{'background-color': renderColor(color.name, color.hex)}\">\r\n      <span>{{color.name}}</span>\r\n  </div>\r\n\r\n  <ng-template [ngIf]=\"!classes.includes('subColors')\">\r\n    <div color-list [type]=\"color.name\" classes=\"subColors mt-5\"></div>\r\n  </ng-template>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{title}}</h2>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/icon-list/icon-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/icon-list/icon-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let icon of icons | keyvalue\" class=\"icon col-sm-6 col-md-2 mb-5\">\r\n  <c-icon [name]=\"icon.key\"></c-icon>\r\n  <span>{{icon.key}}</span>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header header-component [title]=\"item.content.title\"></header>\r\n\r\n<div id=\"content\" class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <a routerLink=\"\">Corporate UI</a>\r\n</header>\r\n\r\n<section item-toggler *ngFor=\"let item of items; index as i\" text=\"{{item.content.title}}\" [collapsed]=\"false\">\r\n    <a *ngFor=\"let sub of item.pages; index as i\" [routerLink]=\"item.url + '/' + sub.url\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">{{sub.content.title}}</a>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/note/note.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/note/note.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"note\" class=\"alert alert-warning text-center\" [innerHTML]='note | markdown'></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toggler/toggler.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toggler/toggler.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" data-toggle=\"collapse\"  [attr.data-target]=\"'#' + id\" class=\"btn btn-link dropdown-toggle\" [ngClass]=\"{'collapsed': collapsed}\">{{text}}</button>\r\n\r\n<div [id]=\"id\" class=\"collapse\" [ngClass]=\"{'show': !collapsed}\">\r\n    <ng-content></ng-content>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"corporate-ui-site\",\"version\":\"1.0.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"npm run angular\",\"build\":\"ng build --base-href %npm_package_name%\",\"angular\":\"ng serve --configuration es5 --disable-host-check --port 1337\",\"jekyll\":\"npm run build && cd dist && jekyll serve --baseurl /%npm_package_name% --port 1337\",\"deploy\":\"npm run build && gh-pages -d dist\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~8.2.9\",\"@angular/common\":\"~8.2.9\",\"@angular/compiler\":\"~8.2.9\",\"@angular/core\":\"~8.2.9\",\"@angular/forms\":\"~8.2.9\",\"@angular/platform-browser\":\"~8.2.9\",\"@angular/platform-browser-dynamic\":\"~8.2.9\",\"@angular/router\":\"~8.2.9\",\"rxjs\":\"~6.4.0\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.9.1\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.803.9\",\"@angular/cli\":\"~8.3.9\",\"@angular/compiler-cli\":\"~8.2.9\",\"@angular/language-service\":\"~8.2.9\",\"@types/jasmine\":\"~3.3.8\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"~8.9.4\",\"codelyzer\":\"^5.0.0\",\"corporate-ui-dev\":\"4.0.0-beta.4\",\"gh-pages\":\"2.1.1\",\"jasmine-core\":\"~3.4.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.1.0\",\"karma-chrome-launcher\":\"~2.2.0\",\"karma-coverage-istanbul-reporter\":\"~2.0.1\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.0\",\"marked\":\"^0.7.0\",\"protractor\":\"~5.4.0\",\"scania-theme\":\"1.0.0-alpha.23\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~5.15.0\",\"typescript\":\"~3.5.3\"}}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.pipe */ "./src/app/app.pipe.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toggler/toggler.component */ "./src/app/components/toggler/toggler.component.ts");
/* harmony import */ var _components_color_list_color_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/color-list/color-list.component */ "./src/app/components/color-list/color-list.component.ts");
/* harmony import */ var _components_icon_list_icon_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/icon-list/icon-list.component */ "./src/app/components/icon-list/icon-list.component.ts");












let AppRoutingModule = class AppRoutingModule {
    constructor(router, ps) {
        this.router = router;
        this.ps = ps;
        this.ps.pages.subscribe(items => {
            const routes = this.contentToRoute(items);
            // console.log(1, routes);
            this.router.resetConfig([
                ...routes,
                { path: '**', redirectTo: 'none' }
            ]);
            this.ps.setRoutes(routes);
        });
    }
    contentToRoute(items) {
        return items.reduce((accumulator, item, index) => {
            let route = { path: item.url, data: item.content, component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"] };
            if (item.pages)
                route.children = this.contentToRoute(item.pages);
            let routes = [route];
            if (!index)
                routes.unshift({ path: '', redirectTo: route.path, pathMatch: 'full' });
            return accumulator.concat(routes);
        }, []);
    }
};
AppRoutingModule.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_6__["PageService"] }
];
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_pipe__WEBPACK_IMPORTED_MODULE_7__["EscapeHtmlPipe"],
            _app_pipe__WEBPACK_IMPORTED_MODULE_7__["MarkdownPipe"],
            _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
            _components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_9__["TogglerComponent"],
            _components_color_list_color_list_component__WEBPACK_IMPORTED_MODULE_10__["ColorListComponent"],
            _components_icon_list_icon_list_component__WEBPACK_IMPORTED_MODULE_11__["IconListComponent"]
        ],
        entryComponents: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _app_pipe__WEBPACK_IMPORTED_MODULE_7__["MarkdownPipe"],
            _components_toggler_toggler_component__WEBPACK_IMPORTED_MODULE_9__["TogglerComponent"]
        ],
        providers: [
            _app_service__WEBPACK_IMPORTED_MODULE_6__["PageService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* autoprefixer grid: autoplace */\n:host {\n  display: -ms-grid;\n  display: grid;\n      grid-template-areas: \"note note\" \"nav main\";\n  -ms-grid-rows: auto 1fr;\n  grid-template-rows: auto 1fr;\n  -ms-grid-columns: 250px 1fr;\n  grid-template-columns: 250px 1fr;\n  overflow: hidden;\n}\n:host ::ng-deep > nav a {\n  background-color: transparent;\n  color: #fff;\n}\n:host ::ng-deep > nav a:hover {\n  background-color: transparent;\n  color: #bfbfbf;\n}\nnav {\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  grid-area: nav;\n  background-color: #494949;\n  color: #bfbfbf;\n  --link-color: #fff;\n  --link-color-hover: #bfbfbf;\n  --link-color-active: #fff;\n  overflow-y: auto;\n}\na {\n  color: #fff;\n}\nmain {\n  -ms-grid-row: 2;\n  -ms-grid-column: 2;\n  grid-area: main;\n  overflow-y: auto;\n}\nnote-component {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-area: note;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxleXV6NzhcXGRldmVsb3BtZW50XFxjb3Jwb3JhdGUtdWktc2l0ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCI8bm8gc291cmNlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQUVBO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO01BQ0EsMkNBQ0k7RUFFSix1QkFBQTtFQUFBLDRCQUFBO0VBQ0EsMkJBQUE7RUFBQSxnQ0FBQTtFQUNBLGdCQUFBO0FDRko7QURJSTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FESVE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUNGWjtBRE9BO0VFdEJBLGdCQUFBO0VBQUEsbUJBQUE7RUZ1QkksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDTEo7QURPQTtFQUNJLFdBQUE7QUNKSjtBRE1BO0VFbkNBLGdCQUFBO0VBQUEsbUJBQUE7RUZvQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSEo7QURLQTtFRXZDQSxnQkFBQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUZ3Q0ksZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYXV0b3ByZWZpeGVyIGdyaWQ6IGF1dG9wbGFjZSAqL1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJub3RlIG5vdGVcIlxyXG4gICAgICAgIFwibmF2IG1haW5cIjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgOjpuZy1kZWVwID4gbmF2IGEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmZiZmJmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubmF2IHtcclxuICAgIGdyaWQtYXJlYTogbmF2O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDk0OTtcclxuICAgIGNvbG9yOiAjYmZiZmJmO1xyXG5cclxuICAgIC0tbGluay1jb2xvcjogI2ZmZjtcclxuICAgIC0tbGluay1jb2xvci1ob3ZlcjogI2JmYmZiZjtcclxuICAgIC0tbGluay1jb2xvci1hY3RpdmU6ICNmZmY7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxubWFpbiB7XHJcbiAgICBncmlkLWFyZWE6IG1haW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbm5vdGUtY29tcG9uZW50IHtcclxuICAgIGdyaWQtYXJlYTogbm90ZTtcclxufVxyXG4iLCIvKiBhdXRvcHJlZml4ZXIgZ3JpZDogYXV0b3BsYWNlICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibm90ZSBub3RlXCIgXCJuYXYgbWFpblwiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IDo6bmctZGVlcCA+IG5hdiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwID4gbmF2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNiZmJmYmY7XG59XG5cbm5hdiB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xuICBjb2xvcjogI2JmYmZiZjtcbiAgLS1saW5rLWNvbG9yOiAjZmZmO1xuICAtLWxpbmstY29sb3ItaG92ZXI6ICNiZmJmYmY7XG4gIC0tbGluay1jb2xvci1hY3RpdmU6ICNmZmY7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxubWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxubm90ZS1jb21wb25lbnQge1xuICBncmlkLWFyZWE6IG5vdGU7XG59IixudWxsXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '#app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_note_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/note/note.component */ "./src/app/components/note/note.component.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
            _components_note_note_component__WEBPACK_IMPORTED_MODULE_9__["NoteComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        providers: [{
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"],
                useValue: '/' + _package_json__WEBPACK_IMPORTED_MODULE_10__["name"]
            }],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.pipe.ts":
/*!*****************************!*\
  !*** ./src/app/app.pipe.ts ***!
  \*****************************/
/*! exports provided: EscapeHtmlPipe, MarkdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function() { return MarkdownPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);




let EscapeHtmlPipe = class EscapeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
};
EscapeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
EscapeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keepHtml', pure: false })
], EscapeHtmlPipe);

let MarkdownPipe = class MarkdownPipe {
    transform(content) {
        return marked__WEBPACK_IMPORTED_MODULE_3___default()(content.replace('\\n', '<br>'));
    }
};
MarkdownPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'markdown', pure: false })
], MarkdownPipe);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _data_content_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/content.json */ "./src/app/data/content.json");
var _data_content_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/content.json */ "./src/app/data/content.json", 1);
/* harmony import */ var corporate_ui_dev_dist_data_docs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! corporate-ui-dev/dist/data/docs.json */ "./node_modules/corporate-ui-dev/dist/data/docs.json");
var corporate_ui_dev_dist_data_docs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! corporate-ui-dev/dist/data/docs.json */ "./node_modules/corporate-ui-dev/dist/data/docs.json", 1);


// import { HttpClient } from '@angular/common/http';



let PageService = class PageService {
    constructor( /*private http: HttpClient*/) {
        this._page = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._pages = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._routes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._docs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._theme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this._note = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.page = this._page.asObservable();
        this.pages = this._pages.asObservable();
        this.routes = this._routes.asObservable();
        this.docs = this._docs.asObservable();
        this.theme = this._theme.asObservable();
        this.note = this._note.asObservable();
        this.setPages(_data_content_json__WEBPACK_IMPORTED_MODULE_3__);
        this.setDocs(corporate_ui_dev_dist_data_docs_json__WEBPACK_IMPORTED_MODULE_4__["components"]);
        // TODO: This data object should be moved to some data flow.
        this.setNote({
            description: 'We are currently facing issues using the navigation in **IE** and **Edge**. A workaround is to focus the address field and press enter.'
        });
        window['CorporateUi'].store.subscribe(() => {
            const current = window['CorporateUi'].store.getState().theme.current;
            this.setTheme(window['CorporateUi'].store.getState().theme.items[current]);
        });
        // this.http.get('app/content/data.json')
        //   .subscribe((items: Array<Item>) => {
        //     this.setPages(items);
        //   });
    }
    setPage(item) {
        this._page.next(item);
    }
    setPages(items) {
        this._pages.next(items);
    }
    setRoutes(items) {
        this._routes.next(items);
    }
    setDocs(docs) {
        this._docs.next(docs);
    }
    setNote(note) {
        this._note.next(note);
    }
    setTheme(theme) {
        this._theme.next(theme);
    }
};
PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PageService);



/***/ }),

/***/ "./src/app/components/color-list/color-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/color-list/color-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color {\n  height: 80px;\n  text-align: right;\n}\n.color span {\n  background-color: #fff;\n  padding: 5px 10px;\n  display: inline-block;\n  font-size: 12px;\n  text-transform: capitalize;\n}\n.color[class*=secondary] {\n  border: 1px solid #c3c3c3;\n}\n.color[class*=secondary] span {\n  margin-top: -2px;\n  margin-right: -2px;\n  border-style: inherit;\n  border-color: inherit;\n  border-width: 0 0 1px 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci1saXN0L0M6XFxVc2Vyc1xcZXl1ejc4XFxkZXZlbG9wbWVudFxcY29ycG9yYXRlLXVpLXNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbG9yLWxpc3RcXGNvbG9yLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3ItbGlzdC9jb2xvci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ0VKO0FEQ0E7RUFDRSx5QkFBQTtBQ0VGO0FEREU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbG9yLWxpc3QvY29sb3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvciB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcbi5jb2xvcltjbGFzcyo9XCJzZWNvbmRhcnlcIl0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDFweDtcclxuICB9XHJcbn0iLCIuY29sb3Ige1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbG9yIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uY29sb3JbY2xhc3MqPXNlY29uZGFyeV0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xufVxuLmNvbG9yW2NsYXNzKj1zZWNvbmRhcnldIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/color-list/color-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/color-list/color-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ColorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorListComponent", function() { return ColorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");



let ColorListComponent = class ColorListComponent {
    constructor(ps, zone) {
        this.ps = ps;
        this.zone = zone;
    }
    ngOnInit() {
        this.subscribeStore = this.ps.theme.subscribe((item) => {
            // When data is fetched from outside Angular scope, Zone will let angular know about it
            this.zone.run(() => {
                this.colors = this.getColors(this.type, item.colors);
            });
        });
    }
    ngOnDestroy() {
        this.subscribeStore.unsubscribe();
    }
    getColors(type, allColors = {}) {
        let colorArr = [];
        Object.entries(allColors).filter(([name, item]) => {
            if (item.type === type) {
                colorArr = [...colorArr, { 'name': name, 'hex': item.hex }];
            }
        });
        return colorArr;
    }
    renderColor(name, hex) {
        const cssVar = `var(--${name})`;
        const supportCssVar = window['CSS'] && window['CSS'].supports('background-color', cssVar);
        return supportCssVar ? cssVar : hex;
    }
};
ColorListComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorListComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ColorListComponent.prototype, "classes", void 0);
ColorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[color-list]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./color-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-list/color-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./color-list.component.scss */ "./src/app/components/color-list/color-list.component.scss")).default]
    })
], ColorListComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  padding: 25px;\n}\n\nh2 {\n  margin: 0;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxleXV6NzhcXGRldmVsb3BtZW50XFxjb3Jwb3JhdGUtdWktc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "title", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[header-component]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/icon-list/icon-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/icon-list/icon-list.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\n  text-align: center;\n}\n\nc-icon {\n  font-size: 3rem;\n  color: #041e42;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pY29uLWxpc3QvQzpcXFVzZXJzXFxleXV6NzhcXGRldmVsb3BtZW50XFxjb3Jwb3JhdGUtdWktc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaWNvbi1saXN0XFxpY29uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbi1saXN0L2ljb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWNvbi1saXN0L2ljb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYy1pY29uIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6ICMwNDFlNDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYy1pY29uIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogIzA0MWU0MjtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/icon-list/icon-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/icon-list/icon-list.component.ts ***!
  \*************************************************************/
/*! exports provided: IconListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconListComponent", function() { return IconListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");



let IconListComponent = class IconListComponent {
    constructor(ps, zone) {
        this.ps = ps;
        this.zone = zone;
    }
    ngOnInit() {
        this.subscribeStore = this.ps.theme.subscribe((item) => {
            // When data is fetched from outside Angular scope, Zone will let angular know about it
            this.zone.run(() => {
                this.icons = item.icons;
            });
        });
    }
    ngOnDestroy() {
        this.subscribeStore.unsubscribe();
    }
};
IconListComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
IconListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[icon-list]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icon-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/icon-list/icon-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icon-list.component.scss */ "./src/app/components/icon-list/icon-list.component.scss")).default]
    })
], IconListComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: grid;\n  grid-template-areas: \"header\" \"content\";\n  grid-template-rows: 100px 1fr;\n}\n:host ::ng-deep ng-component {\n  display: block;\n  padding: 25px;\n  flex: 1;\n}\nheader {\n  background-color: #000;\n  color: #fff;\n}\n#content {\n  grid-area: content;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcZXl1ejc4XFxkZXZlbG9wbWVudFxcY29ycG9yYXRlLXVpLXNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHVDQUNJO0VBRUosNkJBQUE7QUNGSjtBRE1JO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0FDSlI7QURRQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLy8gZ3JpZC1hcmVhOiBtYWluO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgXCJoZWFkZXJcIlxyXG4gICAgICAgIFwiY29udGVudFwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XHJcblxyXG4gICAgLy8gVGhpcyBub2RlIGlzIGdlbmVyYXRlZCBieSB0aGUgcm91dGVyLW91dGxldC5cclxuICAgIC8vIFNvIGl0IHNlZW1zIHdlIG5lZWQgdG8gdXNlIG5nLWRlZXAgdG8gc3R5bGUgdGhpcy4uLlxyXG4gICAgOjpuZy1kZWVwIG5nLWNvbXBvbmVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcImNvbnRlbnRcIjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG59XG46aG9zdCA6Om5nLWRlZXAgbmctY29tcG9uZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGZsZXg6IDE7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jY29udGVudCB7XG4gIGdyaWQtYXJlYTogY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../package.json */ "./package.json", 1);






let MainComponent = class MainComponent {
    // docs: ArrayObject = {};
    constructor(router, ps, titleCase) {
        this.router = router;
        this.ps = ps;
        this.titleCase = titleCase;
        this.item = { content: {} };
        this.parent = {};
        this.ps.pages.subscribe((items) => {
            this.items = items;
        });
        this.ps.docs.subscribe((docs) => {
            this.docs = docs;
        });
        this.router.events.subscribe(route => {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                const paths = route.urlAfterRedirects.substr(1).split('?')[0].split('/');
                this.item = this.getPage(this.items, paths);
                this.class = `category-${this.parent.url} page-${this.item.url}`;
                this.item.content.info = (this.docs.find((item = {}) => item.tag === this.item.content.tag) || {}).props;
                // Is this a bad idea, it might lead to circular references.
                this.item.parent = this.parent;
                // console.log(this.item);
                document.title = this.titleCase.transform(`${_package_json__WEBPACK_IMPORTED_MODULE_5__["name"].replace(/-/g, ' ')} | ${this.item.content.title}`);
                this.ps.setPage(this.item);
            }
        });
    }
    getPage(items, paths) {
        const path = paths.shift();
        const item = items.find(sub => sub.url === path) || {};
        if (item.pages) {
            this.parent = item;
            return this.getPage(item.pages, paths);
        }
        return item;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_4__["PageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], MainComponent.prototype, "class", void 0);
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[main-component]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  padding-top: 15px;\n}\n:host ::ng-deep .btn:after {\n  margin-left: auto;\n}\n:host ::ng-deep .btn + div {\n  margin-left: 15px;\n}\nheader {\n  text-align: center;\n  font-size: 18px;\n  margin-bottom: 20px;\n}\na {\n  text-decoration: none;\n}\nh3 {\n  display: inline-block;\n  margin: 10px 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcZXl1ejc4XFxkZXZlbG9wbWVudFxcY29ycG9yYXRlLXVpLXNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREtZO0VBQ0ksaUJBQUE7QUNIaEI7QURNWTtFQUNJLGlCQUFBO0FDSmhCO0FEVUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEU0E7RUFDSSxxQkFBQTtBQ05KO0FEUUE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG5cclxuICAgIDo6bmctZGVlcCB7XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG5cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKyBkaXYge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmgzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbjpob3N0IDo6bmctZGVlcCAuYnRuOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG46aG9zdCA6Om5nLWRlZXAgLmJ0biArIGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwIDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");



let NavigationComponent = class NavigationComponent {
    constructor(ps) {
        this.ps = ps;
        this.items = [];
        this.ps.pages.subscribe((items) => {
            this.items = this.filterEmptyRoutes(items);
            // console.log(this.items)
        });
    }
    filterEmptyRoutes(items) {
        return items.filter(item => item.url !== 'none');
    }
    ;
};
NavigationComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[navigation-component]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/note/note.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/note/note.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.alert {\n  margin: 0;\n}\n\n.alert ::ng-deep p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3RlL0M6XFxVc2Vyc1xcZXl1ejc4XFxkZXZlbG9wbWVudFxcY29ycG9yYXRlLXVpLXNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5vdGVcXG5vdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtBQ0NKOztBRENJO0VBQ0ksU0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3RlL25vdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICA6Om5nLWRlZXAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFsZXJ0IHtcbiAgbWFyZ2luOiAwO1xufVxuLmFsZXJ0IDo6bmctZGVlcCBwIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/note/note.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/note/note.component.ts ***!
  \***************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");



let NoteComponent = class NoteComponent {
    constructor(ps) {
        this.ps = ps;
        // Currenlty this note service is only used by IE
        const isIE = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
        if (!isIE)
            return;
        this.ps.note.subscribe((item) => {
            this.note = item.description;
        });
    }
};
NoteComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }
];
NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'note-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/note/note.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note.component.scss */ "./src/app/components/note/note.component.scss")).default]
    })
], NoteComponent);



/***/ }),

/***/ "./src/app/components/page/page.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/page/page.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep section {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n:host ::ng-deep figure {\n  margin: 1px 1px 21px;\n  border: 40px solid #fff;\n  outline: 1px solid #e8e8e8;\n}\n:host ::ng-deep figure .progress {\n  margin-top: 5px;\n}\n:host ::ng-deep c-code-sample {\n  padding: 40px;\n  background-color: #e8e8e8;\n}\n:host ::ng-deep #modalExample {\n  display: block !important;\n  position: static !important;\n}\n:host-context(main.page-overview) ::ng-deep .card-body > * {\n  flex: 1;\n  align-self: center;\n}\n:host-context(main.page-overview) .overview {\n  display: none;\n}\n:host-context(main.page-overview) .card {\n  transition: opacity 200ms linear;\n  opacity: 0.7;\n  border: 0;\n  border-radius: 0;\n  min-height: 200px;\n  margin-bottom: 20px;\n  text-decoration: none;\n}\n:host-context(main.page-overview) .card:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n}\n:host-context(main.page-overview) .card:hover {\n  opacity: 1;\n}\n:host-context(main.page-overview) .card .card-body {\n  background-color: #ddd;\n  display: flex;\n  zoom: 40%;\n  position: relative;\n  z-index: 0;\n}\n:host-context(main.page-overview) .card .card-footer {\n  background-color: transparent;\n  border-top: none;\n}\n@media (min-width: 1600px) {\n  .container {\n    max-width: 1440px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL0M6XFxVc2Vyc1xcZXl1ejc4XFxkZXZlbG9wbWVudFxcY29ycG9yYXRlLXVpLXNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VcXHBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0xaO0FET1E7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNMWjtBRE9ZO0VBQ0ksZUFBQTtBQ0xoQjtBRFFRO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDTlo7QURTUTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7QUNQWjtBRG1CWTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ2hCaEI7QURxQkk7RUFDSSxhQUFBO0FDbkJSO0FEcUJJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDbkJSO0FEcUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNuQlo7QURxQlE7RUFDSSxVQUFBO0FDbkJaO0FEc0JRO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3BCWjtBRHNCUTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUNwQlo7QUR5QkE7RUFFSTtJQUNJLGlCQUFBO0VDdkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuXHJcbiAgICAvLyBUaGlzIG5vZGUgaXMgZ2VuZXJhdGVkIGJ5IHRoZSByb3V0ZXItb3V0bGV0LlxyXG4gICAgLy8gU28gaXQgc2VlbXMgd2UgbmVlZCB0byB1c2UgbmctZGVlcCB0byBzdHlsZSB0aGlzLi4uIFxyXG4gICAgOjpuZy1kZWVwIHtcclxuXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMXB4IDIxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogNDBweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2U4ZThlODtcclxuXHJcbiAgICAgICAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYy1jb2RlLXNhbXBsZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjbW9kYWxFeGFtcGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQobWFpbi5wYWdlLW92ZXJ2aWV3KSB7XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuXHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcblxyXG4gICAgICAgICAgICA+ICoge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3ZlcnZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB6b29tOiA0MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIHNlY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG46aG9zdCA6Om5nLWRlZXAgZmlndXJlIHtcbiAgbWFyZ2luOiAxcHggMXB4IDIxcHg7XG4gIGJvcmRlcjogNDBweCBzb2xpZCAjZmZmO1xuICBvdXRsaW5lOiAxcHggc29saWQgI2U4ZThlODtcbn1cbjpob3N0IDo6bmctZGVlcCBmaWd1cmUgLnByb2dyZXNzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIGMtY29kZS1zYW1wbGUge1xuICBwYWRkaW5nOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuOmhvc3QgOjpuZy1kZWVwICNtb2RhbEV4YW1wbGUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0LWNvbnRleHQobWFpbi5wYWdlLW92ZXJ2aWV3KSA6Om5nLWRlZXAgLmNhcmQtYm9keSA+ICoge1xuICBmbGV4OiAxO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG46aG9zdC1jb250ZXh0KG1haW4ucGFnZS1vdmVydmlldykgLm92ZXJ2aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0LWNvbnRleHQobWFpbi5wYWdlLW92ZXJ2aWV3KSAuY2FyZCB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgbGluZWFyO1xuICBvcGFjaXR5OiAwLjc7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0LWNvbnRleHQobWFpbi5wYWdlLW92ZXJ2aWV3KSAuY2FyZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbn1cbjpob3N0LWNvbnRleHQobWFpbi5wYWdlLW92ZXJ2aWV3KSAuY2FyZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG46aG9zdC1jb250ZXh0KG1haW4ucGFnZS1vdmVydmlldykgLmNhcmQgLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHpvb206IDQwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuOmhvc3QtY29udGV4dChtYWluLnBhZ2Utb3ZlcnZpZXcpIC5jYXJkIC5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _data_templates_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/templates.json */ "./src/app/data/templates.json");
var _data_templates_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/templates.json */ "./src/app/data/templates.json", 1);




let PageComponent = class PageComponent {
    constructor(ps) {
        this.ps = ps;
        this.ps.page.subscribe((item) => {
            if (!item.id)
                return;
            // console.log(item);
            this.item = item;
            this.template = this.getTemplate(item.content.template);
        });
    }
    getTemplate(id) {
        return _data_templates_json__WEBPACK_IMPORTED_MODULE_3__.find(item => item.id === id) || {};
    }
};
PageComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["PageService"] }
];
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: _data_templates_json__WEBPACK_IMPORTED_MODULE_3__.map((item) => `
    <ng-template [ngIf]='template.id === ${item.id}'>
      ${item.sections.map((sub) => sub.content).join('')}
    </ng-template>
  `).join(''),
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page.component.scss */ "./src/app/components/page/page.component.scss")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/components/toggler/toggler.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toggler/toggler.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep a {\n  text-decoration: none;\n  padding: 0 15px;\n}\n:host ::ng-deep a.active {\n  font-weight: bold;\n  background-color: transparent;\n}\ndiv {\n  display: flex;\n  flex-direction: column;\n}\nbutton {\n  display: flex;\n  font-weight: normal;\n  color: inherit;\n  text-decoration: none;\n}\nbutton:after {\n  align-self: center;\n  transform: rotate(-180deg);\n}\nbutton.collapsed:after {\n  transform: rotate(0deg);\n}\nbutton:hover, button:focus {\n  text-decoration: none;\n  color: inherit;\n}\nbutton:not(:disabled):not(.disabled):active {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2dnbGVyL0M6XFxVc2Vyc1xcZXl1ejc4XFxkZXZlbG9wbWVudFxcY29ycG9yYXRlLXVpLXNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRvZ2dsZXJcXHRvZ2dsZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdG9nZ2xlci90b2dnbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUVJLHFCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERVE7RUFDSSxpQkFBQTtFQUNBLDZCQUFBO0FDQVo7QURLQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FEWUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNUSjtBRFdJO0VBR0ksa0JBQUE7RUFDQSwwQkFBQTtBQ1hSO0FEZVE7RUFDSSx1QkFBQTtBQ2JaO0FEZ0JJO0VBRUkscUJBQUE7RUFDQSxjQUFBO0FDZlI7QURrQkk7RUFDSSxjQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2dnbGVyL3RvZ2dsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICA6Om5nLWRlZXAgYSB7XHJcbiAgICAgICAgLy8gZmxleDogMTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4vLyBTbG90dGVkIHJ1bGVzIGRvZXMgbm90IHNlZW0gdG8gd29yayBhdG0/XHJcbi8vIFNvIGZvciBub3cgd2UgdXNlIFwibmctZGVlcFwiLi4uXHJcbi8vIGEsXHJcbi8vIDo6c2xvdHRlZChhKSB7XHJcbi8vICAgICBjb2xvcjogaW5oZXJpdDtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4vLyB9XHJcbmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwgJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQwIDQwJyBmaWxsPSd3aGl0ZScgJTNFJTNDcGF0aCBkPSdtMjMuMyAyMGwtMTMuMS0xMy42Yy0wLjMtMC4zLTAuMy0wLjkgMC0xLjJsMi40LTIuNGMwLjMtMC4zIDAuOS0wLjQgMS4yLTAuMWwxNiAxNi43YzAuMSAwLjEgMC4yIDAuNCAwLjIgMC42cy0wLjEgMC41LTAuMiAwLjZsLTE2IDE2LjdjLTAuMyAwLjMtMC45IDAuMy0xLjIgMGwtMi40LTIuNWMtMC4zLTAuMy0wLjMtMC45IDAtMS4yeicvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gICAgfVxyXG4gICAgJi5jb2xsYXBzZWQge1xyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuICAgIC8vIFNob3VsZCB0aGlzIHJlYWxseSBiZSBuZWVkZWQ/XHJcbiAgICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgOjpuZy1kZWVwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IDo6bmctZGVlcCBhLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmJ1dHRvbjphZnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG5idXR0b24uY29sbGFwc2VkOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5idXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5idXR0b246bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/toggler/toggler.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toggler/toggler.component.ts ***!
  \*********************************************************/
/*! exports provided: TogglerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TogglerComponent", function() { return TogglerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TogglerComponent = class TogglerComponent {
    constructor() {
        this.collapsed = true;
        this.id = 'a' + Math.round(Math.random() * 1000000000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TogglerComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TogglerComponent.prototype, "collapsed", void 0);
TogglerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[item-toggler]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toggler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toggler/toggler.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toggler.component.scss */ "./src/app/components/toggler/toggler.component.scss")).default]
    })
], TogglerComponent);



/***/ }),

/***/ "./src/app/data/content.json":
/*!***********************************!*\
  !*** ./src/app/data/content.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":3,\"url\":\"info\",\"content\":{\"id\":3,\"title\":\"Info\",\"description\":\"Some info goes here.\"},\"pages\":[{\"id\":1,\"url\":\"corporateui\",\"content\":{\"id\":1,\"title\":\"Corporate Ui\",\"description\":\"[![Build Status](https://travis-ci.com/scania/corporate-ui-dev.svg?branch=master)](https://travis-ci.com/scania/corporate-ui-dev)\\n[![npm version](http://img.shields.io/npm/v/corporate-ui-dev.svg?style=flat&color=1081C2)](https://npmjs.org/package/corporate-ui-dev)\\n[![Github release](https://img.shields.io/github/v/tag/scania/corporate-ui-dev.svg?label=release&color=1081C2)](https://github.com/scania/corporate-ui-dev/releases)\\n[![Components library](https://img.shields.io/badge/Components%20library-master-f4871a.svg)](https://d1kybmg72qo0dt.cloudfront.net/build/global/branch/master/www/index.html?selectedKind=Info&selectedStory=Corporate%20UI&full=0&addons=0&stories=1&panelRight=0)\\n[![Join Slack](https://img.shields.io/badge/slack-join-%23dd3072.svg)](https://join.slack.com/t/corporate-ui/shared_invite/enQtNTI4NzMzOTQ3NTg4LTI1OGNhZGE2OTY0NzUwYzExMTJmMTQ2NjcxOTdkMjc0NDhlM2JlYTEyODY2ODJjYzUxNmYxNzhhMTQ5MDhmOWQ)\\n[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)\\n![](https://img.shields.io/github/license/scania/corporate-ui-dev.svg?style=flat)\\n\\n# Corporate UI Development Repository\\n\\nIn this repository we're developing the next generation components for Corporate UI. We're improving a lot of our findings that we've done implementing the current production version of the library: https://github.com/scania/corporate-ui\\n\\n**Demo page**\\n\\n[Simple HTML ↗](https://codepen.io/corporate-ui/pen/OYmqpr) | [Angular ↗](https://github.com/scania/corporate-ui-angular) | [React ↗](https://github.com/scania/corporate-ui-react) | [Vue ↗](https://github.com/scania/corporate-ui-vue)\\n\\n\\n## Wiki\\n\\n[Github wiki](https://github.com/scania/corporate-ui-dev/wiki) includes: \\n- [Developing components](https://github.com/scania/corporate-ui-dev/wiki/Developing-components)\\n- [Project focus and structure](https://github.com/scania/corporate-ui-dev/wiki/Project-focus-and-structure)\\n- [Upgrade from version 3 to 4](https://github.com/scania/corporate-ui-dev/wiki/Upgrade-from-version-3.x-to-4.x)\\n- [Components status](https://github.com/scania/corporate-ui-dev/wiki/Component-status)\\n- [Browser support](https://github.com/scania/corporate-ui-dev/wiki/Browser-Support)\\n- and more. \\n\\n\\n## Quick start\\n\\nSeveral options to add corporate-ui in the project: \\n\\n1. Add via CDN, link to the script by adding the following to the `<head></head>`.\\n\\n   ```\\n   <script src=\\\"https://static.scania.com/build/global/4.x/corporate-ui.js\\\"></script>\\n   ```\\n   Replace `x` with [available releases](https://github.com/scania/corporate-ui-dev/releases).\\n\\n2. Install corporate-ui via NPM package by running the command below.\\n\\n   ```\\n   npm i corporate-ui-dev\\n   ```\\n\\n   Import component as a module with `defineCustomElements` function.\\n\\n   ```js\\n   import { defineCustomElements } from 'corporate-ui-dev';\\n\\n   defineCustomElements(['c-theme', 'c-footer', 'c-content']);\\n\\n   // to import all components pass an 'all' value\\n   // defineCustomElements('all');\\n   ```\\n   \\n   See all available components in the [components library](https://d1kybmg72qo0dt.cloudfront.net/build/global/branch/master/www/index.html).\\n\\n## Styling\\n\\nTo apply the styling, you need to add a theme package and use c-theme component. Check out [Scania theme repository](https://github.com/scania/scania-theme/) for detail documentation.\\n\\n1. CDN link\\n\\n   Make sure to include scania-theme script BEFORE the corporate-ui script.\\n   ```html\\n   <script src=\\\"https://static.scania.com/build/global/themes/scania/1.x/scania-theme.js\\\"></script>\\n   <script src=\\\"https://static.scania.com/build/global/4.x/corporate-ui.js\\\"></script>\\n   ```\\n   \\n2. NPM package\\n   \\n   Install scania-theme package by running the command below.\\n   ```shell\\n   npm i scania-theme\\n   ```\\n   \\n   Import theme in the project and use it with `addTheme` function from corporate-ui.\\n   ```js\\n   import { defineCustomElements, addTheme } from 'corporate-ui-dev'; \\n   import { theme as scania } from 'scania-theme'; \\n\\n   defineCustomElements('all'); \\n   addTheme(scania);\\n   ```\\n3. Add theme to project\\n\\n   Initialize the theme with the `c-theme` component. Set `global` attribute to true in order to enable bootstrap styling.\\n   \\n   ```html\\n   <c-theme name=\\\"scania\\\" global=\\\"true\\\"></c-theme>\\n   ```\\n\\n## Contributing\\n\\nPlease read through our [contributing guidelines](https://github.com/scania/corporate-ui-dev/blob/master/CONTRIBUTING.md) for the directions to create a pull request and coding standard.\\n\\n- [Report bug](https://github.com/scania/corporate-ui-dev/issues/new/choose)\\n- [Request feature](https://github.com/scania/corporate-ui-dev/issues/new?assignees=&labels=Feature&template=feature_request.md&title=Feature+-+%22title+text%22)\\n\\n## Community\\n\\nGet in touch with the team and the community:\\n- [Join us on slack](https://join.slack.com/t/corporate-ui/shared_invite/enQtNTI4NzMzOTQ3NTg4LTI1OGNhZGE2OTY0NzUwYzExMTJmMTQ2NjcxOTdkMjc0NDhlM2JlYTEyODY2ODJjYzUxNmYxNzhhMTQ5MDhmOWQ)\\n- [Teams](https://teams.microsoft.com/l/team/19%3a1257007a64d44c64954acca27a9d4b46%40thread.skype/conversations?groupId=79f9bfeb-73e2-424d-9477-b236191ece5e&tenantId=3bc062e4-ac9d-4c17-b4dd-3aad637ff1ac)\\n\\n\\n## License\\n\\nAll CSS, HTML and JS code are available under the MIT license. The Scania brand identity, logos and photographs found in this repository are copyrighted Scania CV AB and are not available on an open source basis or to be used as examples or in any other way, if not specifically ordered by Scania CV AB.\",\"template\":3}},{\"id\":2,\"url\":\"migration\",\"content\":{\"id\":1,\"title\":\"Migrate to v4\",\"template\":3,\"description\":\"# Corporate UI Migration Guide v3 to v4\\n\\n## Before update\\n\\n\\n<input type='checkbox' id='1' name='1'> <label for='1'>Install or add script for scania-theme together with corporate-ui latest version.</label>\\n<br/>  [Installation guide](https://github.com/scania/corporate-ui/tree/master#styling)\\n\\n<input type='checkbox' id='2' name='2'> <label for='2'>Bootstrap has been upgraded to the latest version of Bootstrap 4. Check your project if you use any Bootstrap 3 features. </label>\\n<br/>  Check out [Bootstrap migration guide](https://getbootstrap.com/docs/4.0/migration/) for the things you need to apply to your project.\\n\\n<input type='checkbox' id='3' name='3'> <label for='3'>We have moved from Polyfill to Stencil to create custom elements. Remove any dependencies to polyfill if there's any.</label>\\n\\n\\n## Migration guide checklist\\n\\n\\n<input type='checkbox' id='4' name='4'> <label for='4'>Add c-theme component in HTML body `<c-theme name=\\\"scania\\\" global=\\\"true\\\"></c-theme>`</label>\\n\\n<input type='checkbox' id='5' name='5'> <label for='5'>Update custom element name</label>\\n<br/>\\n  - c-corporate-header >> c-header\\n  - c-main-navigation >> c-navigation\\n  - c-main-content >> c-content\\n  - c-corporate-footer>> c-footer\\n  - c-social-media is deprecated, use c-icon instead to generate social media icons'\\n\\n<input type='checkbox' id='6' name='6'> <label for='6'>Check out all components guideline in corporate-ui 4.0 [here](https://scania.github.io/corporate-ui-site/elements/overview)</label>\\n\\n<input type='checkbox' id='7' name='7'> <label for='7'>`nav-item` is deprecated. We use slot instead of nav-item inside c-header and c-navigation. You can put an `a` element to replace `nav-item`</label>. Example:\\n\\n  ```html\\n  <c-header site-name='App'>\\n    <a href='global' slot='items'>global</a>\\n  </c-header>\\n  ```\\n\\n<input type='checkbox' id='8' name='8'> <label for='8'>`primary-items` and `secondary-items` in main navigation is now used as a slot name.</label> Example:\\n  ```html\\n  <c-navigation>\\n    <a href='/' slot='primary-items' active=''>home</a>\\n    <a href='/user' slot='secondary-items'>user</a>\\n  </c-navigation>\\n  ```\\n\\n<input type='checkbox' id='9' name='9'> <label for='9'>Dealer header component</label>\\n<br/>  In corporate-ui v3, dealer header component was used as a variation in the `c-corporate-header`. It is now a separated component. Use `c-dealer-header` instead. [Read more](https://scania.github.io/corporate-ui-site/elements/dealer-header)\\n\\n<input type='checkbox' id='10' name='10'> <label for='10'>FontAwesome icons</label>\\n<br/>  FontAwesome is no longer provided in corporate-ui. Replace FontAwesome with your own FontAwesome license or replace with our new icon set. [See all available Scania icons](https://scania.github.io/corporate-ui-site/utilities/icons)\\n\"}},{\"id\":3,\"url\":\"component_status\",\"content\":{\"id\":1,\"title\":\"Component Status\",\"template\":3,\"description\":\"## Corporate UI components\\n\\n\\n- _List do not include Bootstrap 4 components_\\n\\n<table class=\\\"table table-striped table-bordered\\\">\\n<thead>\\n<tr>\\n<th>Tag</th>\\n<th>Description</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>✔️</td>\\n<td>ready</td>\\n</tr>\\n<tr>\\n<td>⚠️</td>\\n<td>under review / experimental</td>\\n</tr>\\n<tr>\\n<td>⛔️</td>\\n<td>deprecated</td>\\n</tr>\\n<tr>\\n<td>❓</td>\\n<td>considering</td>\\n</tr>\\n</tbody>\\n</table>\\n<table class=\\\"table table-striped table-bordered\\\">\\n<thead>\\n<tr>\\n<th>Component</th>\\n<th>3.5.3</th>\\n<th>4.0.0</th>\\n<th>Notes</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>header</td>\\n<td>✔️</td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>dealer-header</td>\\n<td>-</td>\\n<td>✔️</td>\\n<td>Previously part of c-corporate-header in version 3</td>\\n</tr>\\n<tr>\\n<td>footer</td>\\n<td>✔️</td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>social-media</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td>Refactored as c-icon component</td>\\n</tr>\\n<tr>\\n<td>navigation</td>\\n<td>✔️</td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>content</td>\\n<td>✔️</td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>theme</td>\\n<td>-</td>\\n<td>✔️</td>\\n<td>New component for applying theme</td>\\n</tr>\\n<tr>\\n<td>alert</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>contact-us</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>cookie-message</td>\\n<td>✔️</td>\\n<td>❓</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>file-upload</td>\\n<td>✔️</td>\\n<td>❓</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>find-a-dealer</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>fullscreen</td>\\n<td>✔️</td>\\n<td>❓</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>list-group</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>login</td>\\n<td>✔️</td>\\n<td>❓</td>\\n<td>Will be refactored as a template</td>\\n</tr>\\n<tr>\\n<td>main-hero</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>map-card</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>map</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>modal</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>progress-bar</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>rich-media</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>select</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>teaser</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>text-and-image</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>tiled-display</td>\\n<td>✔️</td>\\n<td>⛔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>code-sample</td>\\n<td></td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>hello-world</td>\\n<td></td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n<tr>\\n<td>icon</td>\\n<td></td>\\n<td>✔️</td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\"}}]},{\"id\":1,\"url\":\"elements\",\"content\":{\"id\":1,\"title\":\"Elements\",\"description\":\"Info about elements.\"},\"pages\":[{\"id\":1,\"url\":\"overview\",\"content\":{\"id\":1,\"title\":\"Overview\",\"description\":\"Select a item to see examples and get more information.\",\"template\":2}},{\"id\":1,\"url\":\"content\",\"content\":{\"id\":1,\"title\":\"Content\",\"tag\":\"c-content\",\"description\":\"The content component styles the page to push the footer down. It is important to wrap your content inside this component to ensure the footer never slides up the page if the content is not long enough. Check out the full page example in the templates section.\",\"examples\":[{\"id\":1,\"title\":\"Content with section\",\"text\":\"<c-content>\\n  <section>\\n    <h3>A Title of the page</h3>\\n    <!-- ... -->\\n    <!-- Your application content goes here -->\\n  </section>\\n</c-content>\"}],\"template\":1}},{\"id\":1,\"url\":\"dealer-header\",\"content\":{\"id\":1,\"title\":\"Dealer header\",\"tag\":\"c-dealer-header\",\"description\":\"\",\"examples\":[{\"id\":1,\"title\":\"Basic use\",\"text\":\"<c-dealer-header site-name='Bilmetro' short-name='Bilmetro' site-url='/'>\\n  <a href='/' slot='items'>Configurator</a>\\n</c-dealer-header>\"},{\"id\":1,\"title\":\"With dealer logo\",\"text\":\"<c-dealer-header site-name='Bilmetro' short-name='Bilmetro' site-url='/' logo='https://scania.github.io/corporate-ui-docs/images/bilmetro-logo.png'>\\n  <a href='/' slot='items'>Configurator</a>\\n</c-dealer-header>\"}],\"template\":1}},{\"id\":2,\"url\":\"footer\",\"content\":{\"id\":2,\"title\":\"Footer\",\"tag\":\"c-footer\",\"description\":\"By default, the footer element renders with a copyright text and a wordmark. You can add several few item links and social media icons to the footer. There are two ways to generate links and social media icons. Either by using the attributes or slot. To have your links as the footer links, set the slot attribute to ```slot=\\\"items\\\"```. And for social media, set the slot attribute to ```slot=\\\"social-media-items\\\"```. See examples and properties below for more information.\",\"examples\":[{\"id\":6,\"title\":\"Custom text\",\"text\":\"<c-footer text='Some copyright related text can be set here.'></c-footer>\"},{\"id\":7,\"title\":\"Basic use\",\"text\":\"<c-footer>\\n  <a href='/cookies' slot='items'>Cookies</a>\\n  <a href='/contact-us' slot='items'>Contact us</a>\\n</c-footer>\"},{\"id\":8,\"title\":\"With social items\",\"text\":\"<c-footer>\\n  <a href='/' slot='social-items'>\\n    <c-icon name='youtube'>\\n  </c-icon></a>\\n  <a href='/' slot='social-items'>\\n    <c-icon name='twitter'>\\n  </c-icon></a>\\n  <a href='/' target='_blank' slot='social-items'>\\n    <c-icon name='linkedin'>\\n  </c-icon></a>\\n\\n  <a href='/cookies' slot='items'>Cookies</a>\\n  <a href='/contact-us' target='_blank' slot='items'>Contact us</a>\\n</c-footer>\"}],\"template\":1}},{\"id\":1,\"url\":\"header\",\"content\":{\"id\":1,\"title\":\"Header\",\"tag\":\"c-header\",\"description\":\"A header display a logotype, site name, short-name, item links, and a symbol. The site name will be displayed on the right hand side of the logotype on desktop mode. Short name will be placed at the top centered in mobile mode. You can add one or several link items to the header that will be displayed at the right side of the header. This location is also used for language selectors and user menus.\\n\\nThere are two ways to populate link items, by adding JSON objects to item attribute, or by having it in ```slot=\\\"items\\\"```. See examples below to understand different ways of displaying header component.\\n\\nTo include navigation component in the header as a main navigation, you need to define the slot name such as ```slot=\\\"navigation\\\"```. The navigation is a responsive component. If you make your browser window narrower you will see how the navigation changes its appearance on mobile view.\",\"examples\":[{\"id\":1,\"title\":\"Basic use\",\"text\":\"<c-header site-name=\\\"App 1\\\">\\n  <a href=\\\"global\\\" slot=\\\"items\\\">global</a>\\n</c-header>\\n\"}],\"template\":1}},{\"id\":2,\"url\":\"navigation\",\"content\":{\"id\":2,\"title\":\"Navigation\",\"tag\":\"c-navigation\",\"description\":\"The navigation has a desktop mode and a mobile mode where the break point is at 992px viewport width. The navigation is highly customizable as it can host both primary and secondary items.\\n\\nYou can populate navigation links in two ways: JSON objects or providing it in a slot. See examples below to see how it works with different ways of populating navigation links.\",\"examples\":[{\"id\":5,\"title\":\"Basic use\",\"text\":\"<c-navigation>\\n  <a href=\\\"/\\\" slot=\\\"primary-items\\\" active>home</a>\\n  <a href=\\\"/info\\\" slot=\\\"primary-items\\\">info</a>\\n  <a href=\\\"/user\\\" slot=\\\"secondary-items\\\">user</a>\\n</c-navigation>\"},{\"id\":6,\"title\":\"Width dropdown\",\"text\":\"<c-navigation>\\n  <a href='/' slot='primary-items' active=''>home</a>\\n\\n  <div class='dropdown' slot='secondary-items'>\\n    <a href='' class='dropdown-toggle nav-item' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>user</a>\\n\\n    <div class='dropdown-menu'>\\n      <a class='dropdown-item' href='#'>Action</a>\\n      <a class='dropdown-item' href='#'>Another action</a>\\n      <a class='dropdown-item' href='#'>Something else here</a>\\n    </div>\\n  </div>\\n</c-navigation>\"},{\"id\":7,\"title\":\"With subnavigation\",\"text\":\"<c-navigation>\\n  <a href='/home' slot='primary-items'>home</a>\\n  <a href='/about' class='parent' slot='primary-items' active=''>about</a>\\n  <a href='/profile' class='parent' slot='primary-items'>profile</a>\\n  <a href='/abc' class='parent' slot='primary-items'>abc</a>\\n  <a href='/xyz' class='parent' slot='primary-items'>xyz</a>\\n  <a href='/more' slot='secondary-items'>more</a>\\n\\n  <c-navigation slot='sub' caption='About' target='/about' active=''>\\n    <a href='/about' slot='primary-items' active=''>About 1</a>\\n    <a href='/about2' slot='primary-items'>About 2</a>\\n    <a href='/about3' slot='secondary-items'>About 3</a>\\n  </c-navigation>\\n\\n  <c-navigation slot='sub' target='/profile'>\\n    <a href='/profile' slot='primary-items'>Profile 1</a>\\n    <a href='/profile2' slot='primary-items'>Profile 2</a>\\n    <a href='/profile3' slot='secondary-items'>Profile 3</a>\\n  </c-navigation>\\n\\n  <c-navigation slot='sub' target='/abc'>\\n    <a href='/abc' slot='primary-items'>abc 1</a>\\n    <a href='/abc2' slot='primary-items'>abc 2</a>\\n    <a href='/abc3' slot='secondary-items'>abc 3</a>\\n  </c-navigation>\\n\\n  <c-navigation slot='sub' target='/xyz'>\\n    <a href='/xyz' slot='primary-items'>xyz 1</a>\\n    <a href='/xyz2' slot='primary-items'>xyz 2</a>\\n    <a href='/xyz3' slot='secondary-items'>xyz 3</a>\\n  </c-navigation>\\n</c-navigation>\"}],\"template\":1}},{\"id\":2,\"url\":\"theme\",\"content\":{\"id\":2,\"title\":\"Theme\",\"tag\":\"c-theme\",\"description\":\"Theme component will set the theme styling for all other components by default. You can set the theme name attribute to set a theme. Put the theme component anywhere in your page inside the body tag. We use Redux to store the theme value in a global store. The other components then subscribed to the store and will be updated for any changes.\",\"examples\":[{\"id\":5,\"title\":\"Basic use\",\"text\":\"<c-theme name='scania' global='true'></c-theme>\"},{\"id\":6,\"title\":\"Bootstrap custom events\",\"description\":\"All custom events for Bootstrap plugins are available globally in the CorporateUi.$ object. For example, this is how to trigger Bootstrap modal event\",\"text\":\"CorporateUi.$('#exampleModal').modal();\"}],\"template\":7}}]},{\"id\":2,\"url\":\"components\",\"content\":{\"id\":1,\"title\":\"Component\",\"description\":\"Info about Bootstrap components.\"},\"pages\":[{\"id\":1,\"url\":\"overview\",\"content\":{\"id\":1,\"title\":\"Overview\",\"description\":\"Bootstrap Components\",\"template\":2}},{\"id\":2,\"url\":\"alerts\",\"content\":{\"id\":1,\"title\":\"Alert\",\"tag\":\"Alert\",\"description\":\"Alerts available in different interaction states.\",\"examples\":[{\"id\":1,\"title\":\"Basic \",\"text\":\"  <div class='alert alert-success' role='alert'>\\n    A simple success alert—check it out!\\n  </div>\\n  <div class='alert alert-danger' role='alert'>\\n    A simple danger alert—check it out!\\n  </div>\\n  <div class='alert alert-warning' role='alert'>\\n    A simple warning alert—check it out!\\n  </div>\\n  <div class='alert alert-info' role='alert'>\\n    A simple info alert—check it out!\\n  </div>\"},{\"id\":2,\"title\":\"Alert with Heading\",\"text\":\"<div class='alert alert-success' role='alert'>\\n  <h4 class='alert-heading'>Well done!</h4>\\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\\n  <hr>\\n  <p class='mb-0'>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\\n  <p>When you want to have a link if would look link <a href='#'>this</a></p>\\n</div>\"},{\"id\":3,\"title\":\"Alert dismissable\",\"text\":\"<div class='alert alert-warning alert-dismissible fade show' role='alert'>\\n  <strong>Holy guacamole!</strong> You should check in on some of those fields below.\\n  <button type='button' class='close' data-dismiss='alert' aria-label='Close'>\\n    <span aria-hidden='true'>×</span>\\n  </button>\\n</div>\"}],\"template\":4}},{\"id\":3,\"url\":\"badges\",\"content\":{\"id\":1,\"title\":\"Badge\",\"tag\":\"Badges\",\"description\":\"Badges\",\"examples\":[{\"id\":1,\"title\":\"Basic badge\",\"text\":\"<span class='badge badge-pill badge-primary'>Primary</span>\\n<span class='badge badge-pill badge-success'>Success</span>\\n<span class='badge badge-pill badge-danger'>Danger</span>\\n<span class='badge badge-pill badge-warning'>Warning</span>\\n<span class='badge badge-pill badge-info'>Info</span>\"}],\"template\":4}},{\"id\":4,\"url\":\"breadcrumbs\",\"content\":{\"id\":1,\"title\":\"Breadcrumb\",\"tag\":\"Breadcrumb\",\"description\":\"Breadcrumb\",\"examples\":[{\"id\":1,\"title\":\"Breadcrumb\",\"text\":\"<nav aria-label='breadcrumb'>\\n  <ol class='breadcrumb'>\\n    <li class='breadcrumb-item active' aria-current='page'>Home</li>\\n  </ol>\\n</nav>\\n\\n<nav aria-label='breadcrumb'>\\n  <ol class='breadcrumb'>\\n    <li class='breadcrumb-item'><a href='#'>Home</a></li>\\n    <li class='breadcrumb-item active' aria-current='page'>Library</li>\\n  </ol>\\n</nav>\\n\\n<nav aria-label='breadcrumb'>\\n  <ol class='breadcrumb'>\\n    <li class='breadcrumb-item'><a href='#'>Home</a></li>\\n    <li class='breadcrumb-item'><a href='#'>Library</a></li>\\n    <li class='breadcrumb-item active' aria-current='page'>Data</li>\\n  </ol>\\n</nav>\"}],\"template\":4}},{\"id\":5,\"url\":\"buttons\",\"content\":{\"id\":1,\"title\":\"Button\",\"tag\":\"Button\",\"description\":\"Buttons\",\"examples\":[{\"id\":1,\"title\":\"Basic button\",\"text\":\"<button type='button' class='btn btn-primary'>Primary</button>\\n<button type='button' class='btn btn-secondary'>Secondary</button>\\n<button type='button' class='btn btn-success'>Success</button>\\n<button type='button' class='btn btn-danger'>Danger</button>\\n<button type='button' class='btn btn-warning'>Warning</button>\\n<button type='button' class='btn btn-info'>Info</button>\\n<button type='button' class='btn btn-link'>Link</button>\\n\"},{\"id\":2,\"title\":\"Button tags\",\"text\":\"<a class='btn btn-primary' href='#' role='button'>Link</a>\\n<button class='btn btn-primary' type='submit'>Button</button>\\n<input class='btn btn-primary' type='button' value='Input'>\\n<input class='btn btn-primary' type='submit' value='Submit'>\\n<input class='btn btn-primary' type='reset' value='Reset'>\"},{\"id\":3,\"title\":\"Sizes\",\"text\":\"<button type='button' class='btn btn-primary btn-lg'>Large button</button>\\n<button type='button' class='btn btn-secondary btn-lg'>Large button</button>\\n<button type='button' class='btn btn-primary btn-sm'>Small button</button>\\n<button type='button' class='btn btn-secondary btn-sm'>Small button</button>\"},{\"id\":4,\"title\":\"Block\",\"text\":\"<button type='button' class='btn btn-primary btn-lg btn-block'>Block level button</button>\\n<button type='button' class='btn btn-secondary btn-lg btn-block'>Block level button</button>\"},{\"id\":5,\"title\":\"Active state\",\"text\":\"<a href='#' class='btn btn-primary btn-lg active' role='button' aria-pressed='true'>Primary link</a>\\n<a href='#' class='btn btn-secondary btn-lg active' role='button' aria-pressed='true'>Link</a>\"},{\"id\":6,\"title\":\"Disabled state\",\"text\":\"<button type='button' class='btn btn-lg btn-primary' disabled=''>Primary button</button>\\n<button type='button' class='btn btn-secondary btn-lg' disabled=''>Button</button>\\n<a href='#' class='btn btn-primary btn-lg disabled' tabindex='-1' role='button' aria-disabled='true'>Primary link</a>\\n<a href='#' class='btn btn-secondary btn-lg disabled' tabindex='-1' role='button' aria-disabled='true'>Link</a>\"}],\"template\":4}},{\"id\":6,\"url\":\"button-groups\",\"content\":{\"id\":1,\"title\":\"Button Group\",\"tag\":\"Button Group\",\"description\":\"Button Group\",\"examples\":[{\"id\":1,\"title\":\"Basic\",\"text\":\"<div class='btn-group' role='group' aria-label='Basic example'>\\n  <button type='button' class='btn btn-secondary'>Left</button>\\n  <button type='button' class='btn btn-secondary'>Middle</button>\\n  <button type='button' class='btn btn-secondary'>Right</button>\\n</div>\"},{\"id\":2,\"title\":\"Button toolbar\",\"text\":\"<div class='btn-toolbar' role='toolbar' aria-label='Toolbar with button groups'>\\n  <div class='btn-group mr-2' role='group' aria-label='First group'>\\n    <button type='button' class='btn btn-secondary'>1</button>\\n    <button type='button' class='btn btn-secondary'>2</button>\\n    <button type='button' class='btn btn-secondary'>3</button>\\n    <button type='button' class='btn btn-secondary'>4</button>\\n  </div>\\n  <div class='btn-group mr-2' role='group' aria-label='Second group'>\\n    <button type='button' class='btn btn-secondary'>5</button>\\n    <button type='button' class='btn btn-secondary'>6</button>\\n    <button type='button' class='btn btn-secondary'>7</button>\\n  </div>\\n  <div class='btn-group' role='group' aria-label='Third group'>\\n    <button type='button' class='btn btn-secondary'>8</button>\\n  </div>\\n</div>\"},{\"id\":3,\"title\":\"Sizing\",\"text\":\"<div class='btn-group btn-group-lg' role='group' aria-label='Large'>\\n  <button type='button' class='btn btn-secondary'>Left</button>\\n  <button type='button' class='btn btn-secondary'>Middle</button>\\n  <button type='button' class='btn btn-secondary'>Right</button>\\n</div>\\n<div class='btn-group' role='group' aria-label='...'>\\n  <button type='button' class='btn btn-secondary'>Left</button>\\n  <button type='button' class='btn btn-secondary'>Middle</button>\\n  <button type='button' class='btn btn-secondary'>Right</button>\\n</div>\\n<div class='btn-group btn-group-sm' role='group' aria-label='...'>\\n  <button type='button' class='btn btn-secondary'>Left</button>\\n  <button type='button' class='btn btn-secondary'>Middle</button>\\n  <button type='button' class='btn btn-secondary'>Right</button>\\n</div>\"},{\"id\":4,\"title\":\"Nesting\",\"text\":\"<div class='btn-group' role='group' aria-label='Button group with nested dropdown'>\\n  <button type='button' class='btn btn-secondary'>1</button>\\n  <button type='button' class='btn btn-secondary'>2</button>\\n\\n  <div class='btn-group' role='group'>\\n    <button id='btnGroupDrop1' type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n      Dropdown\\n    </button>\\n    <div class='dropdown-menu' aria-labelledby='btnGroupDrop1'>\\n      <a class='dropdown-item' href='#'>Dropdown link</a>\\n      <a class='dropdown-item' href='#'>Dropdown link</a>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":5,\"title\":\"Vertical variation\",\"text\":\"<div class='btn-group-vertical' role='group' aria-label='Vertical button group'>\\n  <button type='button' class='btn btn-secondary'>Button</button>\\n  <button type='button' class='btn btn-secondary'>Button</button>\\n  <button type='button' class='btn btn-secondary'>Button</button>\\n  <button type='button' class='btn btn-secondary'>Button</button>\\n  <button type='button' class='btn btn-secondary'>Button</button>\\n  <button type='button' class='btn btn-secondary'>Button</button>\\n</div>\\n\"}],\"template\":4}},{\"id\":7,\"url\":\"Cards\",\"content\":{\"id\":1,\"title\":\"Cards\",\"tag\":\"Cards\",\"description\":\"Cards\",\"examples\":[{\"id\":1,\"title\":\"Basic Card\",\"text\":\"<div class='card' style='width: 30rem;'>\\n  <svg class='card-img-top'>\\n    <rect width='100%' height='150px' fill='#868e96'></rect>\\n  </svg>\\n  <div class='card-body'>\\n    <h5 class='card-title'>Card title</h5>\\n    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\\n    <a href='#' class='btn btn-primary'>Go somewhere</a>\\n  </div>\\n</div>\"},{\"id\":2,\"title\":\"Card body\",\"text\":\"<div class='card'>\\n  <div class='card-body'>\\n    This is some text within a card body.\\n  </div>\\n</div>\"},{\"id\":3,\"title\":\"Title, text and links\",\"text\":\"<div class='card' style='width: 30rem;'>\\n  <div class='card-body'>\\n    <h5 class='card-title'>Card title</h5>\\n    <h6 class='card-subtitle mb-2 text-muted'>Card subtitle</h6>\\n    <p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\\n    <a href='#' class='card-link'>Card link</a>\\n    <a href='#' class='card-link'>Another link</a>\\n  </div>\\n</div>\"}],\"template\":4}},{\"id\":8,\"url\":\"dropdowns\",\"content\":{\"id\":1,\"title\":\"Dropdown\",\"tag\":\"Dropdowns\",\"description\":\"Dropdowns\",\"examples\":[{\"id\":1,\"title\":\"Basic badge\",\"text\":\"<div class='dropdown'>\\n  <button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Dropdown button\\n  </button>\\n  <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n  </div>\\n</div>\"},{\"id\":2,\"title\":\"Contextual variations\",\"text\":\"<!-- Example single primary button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Action\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<!-- Example single secondary button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Action\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<!-- Example single success button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-success dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Action\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<!-- Example single info button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-info dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Action\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<!-- Example single warning button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-warning dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Action\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<!-- Example single danger button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-danger dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Action\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n\"},{\"id\":3,\"title\":\"Split button\",\"text\":\" <!-- Example split primary button -->\\n<div class='btn-group'>\\n  <button type='button' class='btn btn-primary'>Action</button>\\n  <button type='button' class='btn btn-primary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    <span class='sr-only'>Toggle Dropdown</span>\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\"},{\"id\":4,\"title\":\"Sizing\",\"text\":\"<!-- Large button groups (default and split) -->\\n<div class='btn-group'>\\n  <button class='btn btn-secondary btn-lg dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Large button\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<div class='btn-group'>\\n  <button class='btn btn-secondary btn-lg' type='button'>\\n    Large split button\\n  </button>\\n  <button type='button' class='btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    <span class='sr-only'>Toggle Dropdown</span>\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n\\n<!-- Small button groups (default and split) -->\\n<div class='btn-group'>\\n  <button class='btn btn-secondary btn-sm dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Small button\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n<div class='btn-group'>\\n  <button class='btn btn-secondary btn-sm' type='button'>\\n    Small split button\\n  </button>\\n  <button type='button' class='btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    <span class='sr-only'>Toggle Dropdown</span>\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\"},{\"id\":5,\"title\":\"Direction dropup\",\"text\":\"<!-- Default dropup button -->\\n<div class='btn-group dropup'>\\n  <button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Dropup\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n\\n<!-- Split dropup button -->\\n<div class='btn-group dropup'>\\n  <button type='button' class='btn btn-secondary'>\\n    Split dropup\\n  </button>\\n  <button type='button' class='btn btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    <span class='sr-only'>Toggle Dropdown</span>\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\"},{\"id\":6,\"title\":\"Direction dropright\",\"text\":\"<!-- Default dropright button -->\\n<div class='btn-group dropright'>\\n  <button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Dropright\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n\\n<!-- Split dropright button -->\\n<div class='btn-group dropright'>\\n  <button type='button' class='btn btn-secondary'>\\n    Split dropright\\n  </button>\\n  <button type='button' class='btn btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    <span class='sr-only'>Toggle Dropright</span>\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\"},{\"id\":7,\"title\":\"Direction dropleft\",\"text\":\"<!-- Default dropleft button -->\\n<div class='btn-group dropleft'>\\n  <button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n    Dropleft\\n  </button>\\n  <div class='dropdown-menu'>\\n    <a class='dropdown-item' href='#'>Action</a>\\n    <a class='dropdown-item' href='#'>Another action</a>\\n    <a class='dropdown-item' href='#'>Something else here</a>\\n    <div class='dropdown-divider'></div>\\n    <a class='dropdown-item' href='#'>Separated link</a>\\n  </div>\\n</div>\\n\\n<!-- Split dropleft button -->\\n<div class='btn-group'>\\n  <div class='btn-group dropleft' role='group'>\\n    <button type='button' class='btn btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\\n      <span class='sr-only'>Toggle Dropleft</span>\\n    </button>\\n    <div class='dropdown-menu'>\\n      <a class='dropdown-item' href='#'>Action</a>\\n      <a class='dropdown-item' href='#'>Another action</a>\\n      <a class='dropdown-item' href='#'>Something else here</a>\\n      <div class='dropdown-divider'></div>\\n      <a class='dropdown-item' href='#'>Separated link</a>\\n    </div>\\n  </div>\\n  <button type='button' class='btn btn-secondary'>\\n    Split dropleft\\n  </button>\\n</div>\"}],\"template\":4}},{\"id\":9,\"url\":\"forms\",\"content\":{\"id\":1,\"title\":\"Forms\",\"tag\":\"Form\",\"description\":\"Forms\",\"examples\":[{\"id\":1,\"title\":\"Basic form\",\"text\":\"<form>\\n  <div class='form-group'>\\n    <label for='exampleInputEmail1'>Email address</label>\\n    <input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email'>\\n    <small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small>\\n  </div>\\n  <div class='form-group'>\\n    <label for='exampleInputPassword1'>Password</label>\\n    <input type='password' class='form-control' id='exampleInputPassword1' placeholder='Password'>\\n  </div>\\n  <button type='submit' class='btn btn-primary'>Submit</button>\\n</form>\"},{\"id\":2,\"title\":\"Form controls\",\"text\":\"<form>\\n  <div class='form-group'>\\n    <label for='exampleFormControlInput1'>Email address</label>\\n    <input type='email' class='form-control' id='exampleFormControlInput1' placeholder='name@example.com'>\\n  </div>\\n  <div class='form-group'>\\n    <label for='exampleFormControlSelect1'>Example select</label>\\n    <select class='form-control' id='exampleFormControlSelect1'>\\n      <option>1</option>\\n      <option>2</option>\\n      <option>3</option>\\n      <option>4</option>\\n      <option>5</option>\\n    </select>\\n  </div>\\n  <div class='form-group'>\\n    <label for='exampleFormControlSelect2'>Example multiple select</label>\\n    <select multiple='' class='form-control' id='exampleFormControlSelect2'>\\n      <option>1</option>\\n      <option>2</option>\\n      <option>3</option>\\n      <option>4</option>\\n      <option>5</option>\\n    </select>\\n  </div>\\n  <div class='form-group'>\\n    <label for='exampleFormControlTextarea1'>Example textarea</label>\\n    <textarea class='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>\\n  </div>\\n</form>\"},{\"id\":3,\"title\":\"Input Sizing\",\"text\":\"<input class='form-control form-control-lg' type='text' placeholder='.form-control-lg'>\\n<input class='form-control' type='text' placeholder='Default input'>\\n<input class='form-control form-control-sm' type='text' placeholder='.form-control-sm'>\"},{\"id\":4,\"title\":\"Select sizing\",\"text\":\"<select class='form-control form-control-lg'>\\n  <option>Large select</option>\\n</select>\\n<select class='form-control'>\\n  <option>Default select</option>\\n</select>\\n<select class='form-control form-control-sm'>\\n  <option>Small select</option>\\n</select>\"},{\"id\":5,\"title\":\"Readonly\",\"text\":\"\\n<input class='form-control' type='text' placeholder='Readonly input here...' value='Readonly input goes here' readonly=''>\"},{\"id\":6,\"title\":\"Form groups\",\"text\":\"<form>\\n  <div class='form-group'>\\n    <label for='formGroupExampleInput'>Example label</label>\\n    <input type='text' class='form-control' id='formGroupExampleInput' placeholder='Example input'>\\n  </div>\\n  <div class='form-group'>\\n    <label for='formGroupExampleInput2'>Another label</label>\\n    <input type='text' class='form-control' id='formGroupExampleInput2' placeholder='Another input'>\\n  </div>\\n</form>\"},{\"id\":7,\"title\":\"Disabled forms\",\"text\":\"<form>\\n  <fieldset disabled=''>\\n    <div class='form-group'>\\n      <label for='disabledTextInput'>Disabled input</label>\\n      <input type='text' id='disabledTextInput' class='form-control' placeholder='Disabled input'>\\n    </div>\\n    <div class='form-group'>\\n      <label for='disabledSelect'>Disabled select menu</label>\\n      <select id='disabledSelect' class='form-control'>\\n        <option>Disabled select</option>\\n      </select>\\n    </div>\\n    <div class='form-group'>\\n      <div class='form-check'>\\n        <input class='form-check-input' type='checkbox' id='disabledFieldsetCheck' disabled=''>\\n        <label class='form-check-label' for='disabledFieldsetCheck'>\\n          Can't check this\\n        </label>\\n      </div>\\n    </div>\\n    <button type='submit' class='btn btn-primary'>Submit</button>\\n  </fieldset>\\n</form>\"},{\"id\":8,\"title\":\"Custom checkbox\",\"text\":\"<div class='custom-control custom-checkbox'>\\n  <input type='checkbox' class='custom-control-input' id='customCheck1'>\\n  <label class='custom-control-label' for='customCheck1'>Check this custom checkbox</label>\\n</div>\\n<div class='custom-control custom-checkbox'>\\n  <input type='checkbox' class='custom-control-input' id='customCheck2' checked=''>\\n  <label class='custom-control-label' for='customCheck2'>Checked custom checkbox</label>\\n</div>\"},{\"id\":9,\"title\":\"Custom radio buttons\",\"text\":\"<div class='custom-control custom-radio'>\\n  <input type='radio' id='sbRadio-1' name='sbRadio01' class='custom-control-input' value='option1'>\\n  <label class='custom-control-label' for='sbRadio-1'>Toggle this custom radio</label>\\n</div>\\n<div class='custom-control custom-radio'>\\n  <input type='radio' id='sbRadio-2' name='sbRadio01' class='custom-control-input' value='option2'>\\n  <label class='custom-control-label' for='sbRadio-2'>Or toggle this other custom radio</label>\\n</div>\"},{\"id\":10,\"title\":\"Disabled custom checkbox and radio buttons\",\"text\":\"<div class='custom-control custom-checkbox'>\\n  <input type='checkbox' class='custom-control-input' id='customCheckDisabled1' disabled=''>\\n  <label class='custom-control-label' for='customCheckDisabled1'>Check this custom checkbox</label>\\n</div>\\n\\n<div class='custom-control custom-radio'>\\n  <input type='radio' name='radioDisabled' id='customRadioDisabled2' class='custom-control-input' disabled=''>\\n  <label class='custom-control-label' for='customRadioDisabled2'>Toggle this custom radio</label>\\n</div>\\n\\n<div class='custom-control custom-checkbox'>\\n  <input type='checkbox' class='custom-control-input' id='customCheckDisabled3' checked='' disabled=''>\\n  <label class='custom-control-label' for='customCheckDisabled3'>Checked disabled checkbox</label>\\n</div>\"},{\"id\":11,\"title\":\"Validation visual cues\",\"text\":\"<form>\\n  <div class='form-row'>\\n    <div class='col-md-6 mb-5'>\\n      <label for='validationServer01'>First name</label>\\n      <input type='text' class='form-control is-valid' id='validationServer01' placeholder='First name' value='Mark' required=''>\\n      <div class='valid-feedback'>\\n        Looks good!\\n      </div>\\n    </div>\\n    <div class='col-md-6 mb-5'>\\n      <label for='validationServer02'>Last name</label>\\n      <input type='text' class='form-control is-valid' id='validationServer02' placeholder='Last name' value='Otto' required=''>\\n      <div class='valid-feedback'>\\n        Looks good!\\n      </div>\\n    </div>\\n  </div>\\n  <div class='form-row'>\\n    <div class='col-md-6 mb-3'>\\n      <label for='validationServer03'>City</label>\\n      <input type='text' class='form-control is-invalid' id='validationServer03' placeholder='City' required=''>\\n      <div class='invalid-feedback'>\\n        Please provide a valid city.\\n      </div>\\n    </div>\\n    <div class='col-md-3 mb-3'>\\n      <label for='validationServer04'>State</label>\\n      <input type='text' class='form-control is-invalid' id='validationServer04' placeholder='State' required=''>\\n      <div class='invalid-feedback'>\\n        Please provide a valid state.\\n      </div>\\n    </div>\\n    <div class='col-md-3 mb-3'>\\n      <label for='validationServer05'>Zip</label>\\n      <input type='text' class='form-control is-invalid' id='validationServer05' placeholder='Zip' required=''>\\n      <div class='invalid-feedback'>\\n        Please provide a valid zip.\\n      </div>\\n    </div>\\n  </div>\\n  <button class='btn btn-primary' type='submit'>Submit form</button>\\n</form>\"}],\"template\":4}},{\"id\":10,\"url\":\"input-groups\",\"content\":{\"id\":1,\"title\":\"Input groups\",\"tag\":\"Input groups\",\"description\":\"Input groups\",\"examples\":[{\"id\":1,\"title\":\"Basic input group\",\"text\":\"<div class='input-group mb-3'>\\n  <div class='input-group-prepend'>\\n    <span class='input-group-text' id='basic-addon1'>@</span>\\n  </div>\\n  <input type='text' class='form-control' placeholder='Username' aria-label='Username' aria-describedby='basic-addon1'>\\n</div>\\n\\n<div class='input-group mb-3'>\\n  <input type='text' class='form-control' placeholder='Recipient's username' aria-label='Recipient's username' aria-describedby='basic-addon2'>\\n  <div class='input-group-append'>\\n    <span class='input-group-text' id='basic-addon2'>@example.com</span>\\n  </div>\\n</div>\\n\\n<label for='basic-url'>Your vanity URL</label>\\n<div class='input-group mb-3'>\\n  <div class='input-group-prepend'>\\n    <span class='input-group-text' id='basic-addon3'>https://example.com/users/</span>\\n  </div>\\n  <input type='text' class='form-control' id='basic-url' aria-describedby='basic-addon3'>\\n</div>\\n\\n<div class='input-group mb-3'>\\n  <div class='input-group-prepend'>\\n    <span class='input-group-text'>$</span>\\n  </div>\\n  <input type='text' class='form-control' aria-label='Amount (to the nearest dollar)'>\\n  <div class='input-group-append'>\\n    <span class='input-group-text'>.00</span>\\n  </div>\\n</div>\"}],\"template\":4}},{\"id\":11,\"url\":\"list-group\",\"content\":{\"id\":1,\"title\":\"List group\",\"tag\":\"List group\",\"description\":\"List group\",\"examples\":[{\"id\":1,\"title\":\"Basic list group\",\"text\":\"<ul class='list-group'>\\n  <li class='list-group-item'>Cras justo odio</li>\\n  <li class='list-group-item'>Dapibus ac facilisis in</li>\\n  <li class='list-group-item'>Morbi leo risus</li>\\n  <li class='list-group-item'>Porta ac consectetur ac</li>\\n  <li class='list-group-item'>Vestibulum at eros</li>\\n</ul>\"},{\"id\":2,\"title\":\"Active items\",\"text\":\"<ul class='list-group'>\\n  <li class='list-group-item active'>Cras justo odio</li>\\n  <li class='list-group-item'>Dapibus ac facilisis in</li>\\n  <li class='list-group-item'>Morbi leo risus</li>\\n  <li class='list-group-item'>Porta ac consectetur ac</li>\\n  <li class='list-group-item'>Vestibulum at eros</li>\\n</ul>\"}],\"template\":4}},{\"id\":18,\"url\":\"loading\",\"content\":{\"id\":1,\"title\":\"Loading\",\"template\":4,\"examples\":[{\"title\":\"Loading class on button\",\"text\":\"<button type='button' class='btn btn-primary loading'>Primary</button>\\n<button type='button' class='btn btn-secondary loading'>Secondary</button>\\n<a href='/' class='btn btn-success loading'>Success</a>\"},{\"title\":\"Loading class on table\",\"text\":\"<table class='table loading'>\\n  <thead>\\n    <tr>\\n      <th>Id</th>\\n      <th>Name</th>\\n      <th>Description</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th>1</th>\\n      <td>Mark</td>\\n      <td>Lorem ipsum dolor sit amet</td>\\n    </tr>\\n    <tr>\\n      <th>2</th>\\n      <td>June</td>\\n      <td>Consectetur adipiscing elit</td>\\n    </tr>\\n    <tr>\\n      <th>3</th>\\n      <td>Augusta</td>\\n      <td>Sed do eiusmod tempor incididunt</td>\\n    </tr>\\n  </tbody>\\n</table>\"}]}},{\"id\":12,\"url\":\"media-objects\",\"content\":{\"id\":1,\"title\":\"Media Objects\",\"tag\":\"Media Objects\",\"description\":\"Media Objects\",\"examples\":[{\"id\":1,\"title\":\"Basic media object\",\"text\":\"<div class='media'>\\n  <svg class='mr-3' width='64' height='64'>\\n    <rect width='100%' height='100%' fill='#868e96'></rect>\\n  </svg>\\n  <div class='media-body'>\\n    <h5 class='mt-0'>Media heading</h5>\\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\\n  </div>\\n</div>\"},{\"id\":2,\"title\":\"Basic media object\",\"text\":\"\\n<div class='media'>\\n  <svg class='mr-3' width='64' height='64'>\\n    <rect width='100%' height='100%' fill='#868e96'></rect>\\n  </svg>\\n  <div class='media-body'>\\n    <h5 class='mt-0'>Media heading</h5>\\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\\n\\n    <div class='media mt-3'>\\n      <a class='pr-3' href='#'>\\n        <svg class='mr-3' width='64' height='64'>\\n          <rect width='100%' height='100%' fill='#868e96'></rect>\\n        </svg>\\n      </a>\\n      <div class='media-body'>\\n        <h5 class='mt-0'>Media heading</h5>\\n        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":3,\"title\":\"Basic media object\",\"text\":\"<div class='media'>\\n  <svg class='align-self-start mr-3' width='64' height='64'>\\n    <rect width='100%' height='100%' fill='#868e96'></rect>\\n  </svg>\\n  <div class='media-body'>\\n    <h5 class='mt-0'>Top-aligned media</h5>\\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\\n    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\\n  </div>\\n</div>\"},{\"id\":4,\"title\":\"Basic media object\",\"text\":\"<div class='media'>\\n  <svg class='align-self-center mr-3' width='64' height='64'>\\n    <rect width='100%' height='100%' fill='#868e96'></rect>\\n  </svg>\\n  <div class='media-body'>\\n    <h5 class='mt-0'>Center-aligned media</h5>\\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\\n    <p class='mb-0'>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\\n  </div>\\n</div>\"},{\"id\":5,\"title\":\"Basic media object\",\"text\":\"<div class='media'>\\n  <svg class='align-self-end mr-3' width='64' height='64'>\\n    <rect width='100%' height='100%' fill='#868e96'></rect>\\n  </svg>\\n  <div class='media-body'>\\n    <h5 class='mt-0'>Bottom-aligned media</h5>\\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\\n    <p class='mb-0'>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\\n  </div>\\n</div>\"},{\"id\":6,\"title\":\"Basic media object\",\"text\":\"<div class='media'>\\n  <div class='media-body'>\\n    <h5 class='mt-0'>Order-aligned media</h5>\\n    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\\n    <p class='mb-0'>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\\n  </div>\\n  <svg class='align-self-end mr-3' width='64' height='64'>\\n    <rect width='100%' height='100%' fill='#868e96'></rect>\\n  </svg>\\n</div>\"},{\"id\":7,\"title\":\"Basic media object\",\"text\":\"<ul class='list-unstyled'>\\n  <li class='media'>\\n    <svg class='mr-3' width='64' height='64'>\\n      <rect width='100%' height='100%' fill='#868e96'></rect>\\n    </svg>\\n    <div class='media-body'>\\n      <h5 class='mt-0 mb-1'>List-based media object</h5>\\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\\n    </div>\\n  </li>\\n  <li class='media my-4'>\\n    <svg class='mr-3' width='64' height='64'>\\n      <rect width='100%' height='100%' fill='#868e96'></rect>\\n    </svg>\\n    <div class='media-body'>\\n      <h5 class='mt-0 mb-1'>List-based media object</h5>\\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\\n    </div>\\n  </li>\\n  <li class='media'>\\n    <svg class='mr-3' width='64' height='64'>\\n      <rect width='100%' height='100%' fill='#868e96'></rect>\\n    </svg>\\n    <div class='media-body'>\\n      <h5 class='mt-0 mb-1'>List-based media object</h5>\\n      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\\n    </div>\\n  </li>\\n</ul>\"}],\"template\":4}},{\"id\":13,\"url\":\"modals\",\"content\":{\"id\":1,\"title\":\"Modals\",\"tag\":\"Modals\",\"description\":\"Modals\",\"examples\":[{\"id\":1,\"title\":\"Basic Modals\",\"text\":\"<div id=\\\"modalExample\\\" class=\\\"modal\\\" tabindex=\\\"-1\\\" role=\\\"dialog\\\">\\n  <div class=\\\"modal-dialog\\\" role=\\\"document\\\">\\n    <div class=\\\"modal-content\\\">\\n      <div class=\\\"modal-header\\\">\\n        <h5 class=\\\"modal-title\\\">Modal title</h5>\\n        <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\">\\n          <span aria-hidden=\\\"true\\\">×</span>\\n        </button>\\n      </div>\\n      <div class=\\\"modal-body\\\">\\n        <p>Modal body text goes here.</p>\\n      </div>\\n      <div class=\\\"modal-footer\\\">\\n        <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\">Close</button>\\n        <button type=\\\"button\\\" class=\\\"btn btn-primary\\\">Save changes</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":2,\"title\":\"Live demo\",\"text\":\"<!-- Button trigger modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>\\n  Launch demo modal\\n</button>\\n\\n<!-- Modal -->\\n<div class='modal fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>\\n  <div class='modal-dialog' role='document'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        <p>Modal body text goes here.</p>\\n      </div>\\n      <div class='modal-footer'>\\n        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\\n        <button type='button' class='btn btn-primary'>Save changes</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":3,\"title\":\"Scrolling Long content\",\"text\":\"<!-- Button trigger modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalLong'>\\n  Launch demo modal\\n</button>\\n\\n<!-- Modal -->\\n<div class='modal fade' id='exampleModalLong' tabindex='-1' role='dialog' aria-labelledby='exampleModalLongTitle' aria-hidden='true'>\\n  <div class='modal-dialog' role='document'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='exampleModalLongTitle'>Modal title</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n      </div>\\n      <div class='modal-footer'>\\n        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\\n        <button type='button' class='btn btn-primary'>Save changes</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":4,\"title\":\"Scrolling inside\",\"text\":\"<!-- Button trigger modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalScrollable'>\\n  Launch demo modal\\n</button>\\n\\n<!-- Modal -->\\n<div class='modal fade' id='exampleModalScrollable' tabindex='-1' role='dialog' aria-labelledby='exampleModalScrollableTitle' aria-hidden='true'>\\n  <div class='modal-dialog modal-dialog-scrollable' role='document'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='exampleModalScrollableTitle'>Modal title</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n      </div>\\n      <div class='modal-footer'>\\n        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\\n        <button type='button' class='btn btn-primary'>Save changes</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":5,\"title\":\"Vertically centered\",\"text\":\"<!-- Button trigger modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalCenter'>\\n  Launch demo modal\\n</button>\\n\\n<!-- Modal -->\\n<div class='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>\\n  <div class='modal-dialog modal-dialog-centered' role='document'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='exampleModalCenterTitle'>Modal title</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>\\n      </div>\\n      <div class='modal-footer'>\\n        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\\n        <button type='button' class='btn btn-primary'>Save changes</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":6,\"title\":\"Using grid\",\"text\":\"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#gridSystemModal'>\\n  Launch demo modal\\n</button>\\n\\n<div id='gridSystemModal' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='gridModalLabel' aria-hidden='true'>\\n  <div class='modal-dialog' role='document'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='gridModalLabel'>Grids in modals</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>×</span></button>\\n      </div>\\n      <div class='modal-body'>\\n        <div class='container-fluid bd-example-row'>\\n          <div class='row'>\\n            <div class='col-md-4'>.col-md-4</div>\\n            <div class='col-md-4 ml-auto'>.col-md-4 .ml-auto</div>\\n          </div>\\n          <div class='row'>\\n            <div class='col-md-3 ml-auto'>.col-md-3 .ml-auto</div>\\n            <div class='col-md-2 ml-auto'>.col-md-2 .ml-auto</div>\\n          </div>\\n          <div class='row'>\\n            <div class='col-md-6 ml-auto'>.col-md-6 .ml-auto</div>\\n          </div>\\n          <div class='row'>\\n            <div class='col-sm-9'>\\n              Level 1: .col-sm-9\\n              <div class='row'>\\n                <div class='col-8 col-sm-6'>\\n                  Level 2: .col-8 .col-sm-6\\n                </div>\\n                <div class='col-4 col-sm-6'>\\n                  Level 2: .col-4 .col-sm-6\\n                </div>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n      <div class='modal-footer'>\\n        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\\n        <button type='button' class='btn btn-primary'>Save changes</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"},{\"id\":7,\"title\":\"Sizing\",\"text\":\"<!-- Extra large modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.bd-example-modal-xl'>Extra large modal</button>\\n\\n<div class='modal fade bd-example-modal-xl' tabindex='-1' role='dialog' aria-labelledby='myExtraLargeModalLabel' aria-hidden='true'>\\n  <div class='modal-dialog modal-xl'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='myExtraLargeModalLabel'>Extra large modal</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        ...\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<!-- Large modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.bd-example-modal-lg'>Large modal</button>\\n\\n<div class='modal fade bd-example-modal-lg' tabindex='-1' role='dialog' aria-labelledby='myLargeModalLabel' aria-hidden='true'>\\n  <div class='modal-dialog modal-lg'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='myLargeModalLabel'>Large modal</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        ...\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<!-- Small modal -->\\n<button type='button' class='btn btn-primary' data-toggle='modal' data-target='.bd-example-modal-sm'>Small modal</button>\\n\\n<div class='modal fade bd-example-modal-sm' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>\\n  <div class='modal-dialog modal-sm'>\\n    <div class='modal-content'>\\n      <div class='modal-header'>\\n        <h5 class='modal-title' id='mySmallModalLabel'>Small modal</h5>\\n        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\\n          <span aria-hidden='true'>×</span>\\n        </button>\\n      </div>\\n      <div class='modal-body'>\\n        ...\\n      </div>\\n    </div>\\n  </div>\\n</div>\"}],\"template\":4}},{\"id\":14,\"url\":\"navs\",\"content\":{\"id\":1,\"title\":\"Navs\",\"tag\":\"Navs\",\"description\":\"Navs\",\"examples\":[{\"id\":1,\"title\":\"Navs with ul element\",\"text\":\"<ul class='nav'>\\n  <li class='nav-item'>\\n    <a class='nav-link active' href='#'>Active</a>\\n  </li>\\n  <li class='nav-item'>\\n    <a class='nav-link' href='#'>Link</a>\\n  </li>\\n  <li class='nav-item'>\\n    <a class='nav-link' href='#'>Link</a>\\n  </li>\\n  <li class='nav-item'>\\n    <a class='nav-link disabled' href='#'>Disabled</a>\\n  </li>\\n</ul>\"},{\"id\":2,\"title\":\"Navs with nav element\",\"text\":\"<nav class='nav'>\\n  <a class='nav-link active' href='#'>Active</a>\\n  <a class='nav-link' href='#'>Link</a>\\n  <a class='nav-link' href='#'>Link</a>\\n  <a class='nav-link disabled' href='#'>Disabled</a>\\n</nav>\\n\"}],\"template\":4}},{\"id\":15,\"url\":\"pagination\",\"content\":{\"id\":1,\"title\":\"Pagination\",\"tag\":\"Pagination\",\"description\":\"Pagination\",\"examples\":[{\"id\":1,\"title\":\"Basic Pagination\",\"text\":\"<nav aria-label='Page navigation example'>\\n  <ul class='pagination'>\\n    <li class='page-item'><a class='page-link' href='#'>Previous</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>1</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>2</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>3</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>Next</a></li>\\n  </ul>\\n</nav>\"},{\"id\":2,\"title\":\"With icons\",\"text\":\"<nav aria-label='Page navigation example'>\\n  <ul class='pagination'>\\n    <li class='page-item'>\\n      <a class='page-link' href='#' aria-label='Previous'>\\n        <span aria-hidden='true'>«</span>\\n      </a>\\n    </li>\\n    <li class='page-item'><a class='page-link' href='#'>1</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>2</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>3</a></li>\\n    <li class='page-item'>\\n      <a class='page-link' href='#' aria-label='Next'>\\n        <span aria-hidden='true'>»</span>\\n      </a>\\n    </li>\\n  </ul>\\n</nav>\"},{\"id\":3,\"title\":\"Disabled and active states\",\"text\":\"<nav aria-label='...'>\\n  <ul class='pagination'>\\n    <li class='page-item disabled'>\\n      <a class='page-link' href='#' tabindex='-1' aria-disabled='true'>Previous</a>\\n    </li>\\n    <li class='page-item'><a class='page-link' href='#'>1</a></li>\\n    <li class='page-item active' aria-current='page'>\\n      <a class='page-link' href='#'>2 <span class='sr-only'>(current)</span></a>\\n    </li>\\n    <li class='page-item'><a class='page-link' href='#'>3</a></li>\\n    <li class='page-item'>\\n      <a class='page-link' href='#'>Next</a>\\n    </li>\\n  </ul>\\n</nav>\"},{\"id\":4,\"title\":\"Center alignments\",\"text\":\"<!-- Center alignment -->\\n<nav aria-label='Page navigation example'>\\n  <ul class='pagination justify-content-center'>\\n    <li class='page-item disabled'>\\n      <a class='page-link' href='#' tabindex='-1' aria-disabled='true'>Previous</a>\\n    </li>\\n    <li class='page-item'><a class='page-link' href='#'>1</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>2</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>3</a></li>\\n    <li class='page-item'>\\n      <a class='page-link' href='#'>Next</a>\\n    </li>\\n  </ul>\\n</nav>\"},{\"id\":5,\"title\":\"Right alignments\",\"text\":\"<!-- Right alignment -->\\n<nav aria-label='Page navigation example'>\\n  <ul class='pagination justify-content-end'>\\n    <li class='page-item disabled'>\\n      <a class='page-link' href='#' tabindex='-1' aria-disabled='true'>Previous</a>\\n    </li>\\n    <li class='page-item'><a class='page-link' href='#'>1</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>2</a></li>\\n    <li class='page-item'><a class='page-link' href='#'>3</a></li>\\n    <li class='page-item'>\\n      <a class='page-link' href='#'>Next</a>\\n    </li>\\n  </ul>\\n</nav>\"}],\"template\":4}},{\"id\":16,\"url\":\"progress\",\"content\":{\"id\":1,\"title\":\"Progress\",\"tag\":\"Progress\",\"description\":\"Progress\",\"examples\":[{\"id\":1,\"title\":\"Basic progres\",\"text\":\"<div class='progress'>\\n  <div class='progress-bar' role='progressbar' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar' role='progressbar' style='width: 25%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar' role='progressbar' style='width: 50%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar' role='progressbar' style='width: 75%' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n\"},{\"id\":2,\"title\":\"Labels\",\"text\":\"<div class='progress'>\\n  <div class='progress-bar' role='progressbar' style='width: 25%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'>25%</div>\\n</div>\"},{\"id\":3,\"title\":\"Height\",\"text\":\"<div class='progress' style='height: 1px;'>\\n  <div class='progress-bar' role='progressbar' style='width: 25%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress' style='height: 20px;'>\\n  <div class='progress-bar' role='progressbar' style='width: 25%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\"},{\"id\":4,\"title\":\"Backgrounds\",\"text\":\"<div class='progress'>\\n  <div class='progress-bar bg-success' role='progressbar' style='width: 25%' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar bg-info' role='progressbar' style='width: 50%' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar bg-warning' role='progressbar' style='width: 75%' aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n<div class='progress'>\\n  <div class='progress-bar bg-danger' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\"},{\"id\":5,\"title\":\"Multiple\",\"text\":\"<div class='progress'>\\n  <div class='progress-bar' role='progressbar' style='width: 15%' aria-valuenow='15' aria-valuemin='0' aria-valuemax='100'></div>\\n  <div class='progress-bar bg-success' role='progressbar' style='width: 30%' aria-valuenow='30' aria-valuemin='0' aria-valuemax='100'></div>\\n  <div class='progress-bar bg-info' role='progressbar' style='width: 20%' aria-valuenow='20' aria-valuemin='0' aria-valuemax='100'></div>\\n</div>\\n\"}],\"template\":4}},{\"id\":17,\"url\":\"tables\",\"content\":{\"id\":1,\"title\":\"Tables\",\"tag\":\"Tables\",\"description\":\"Tables\",\"examples\":[{\"id\":1,\"title\":\"Basic table\",\"text\":\"<table class='table'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>#</th>\\n      <th scope='col'>First</th>\\n      <th scope='col'>Last</th>\\n      <th scope='col'>Handle</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th scope='row'>1</th>\\n      <td>Mark</td>\\n      <td>Otto</td>\\n      <td>@mdo</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>2</th>\\n      <td>Jacob</td>\\n      <td>Thornton</td>\\n      <td>@fat</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>3</th>\\n      <td>Larry</td>\\n      <td>the Bird</td>\\n      <td>@twitter</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":2,\"title\":\"Striped\",\"text\":\"<table class='table table-striped'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>#</th>\\n      <th scope='col'>First</th>\\n      <th scope='col'>Last</th>\\n      <th scope='col'>Handle</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th scope='row'>1</th>\\n      <td>Mark</td>\\n      <td>Otto</td>\\n      <td>@mdo</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>2</th>\\n      <td>Jacob</td>\\n      <td>Thornton</td>\\n      <td>@fat</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>3</th>\\n      <td>Larry</td>\\n      <td>the Bird</td>\\n      <td>@twitter</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":3,\"title\":\"Bordered table\",\"text\":\"<table class='table table-bordered'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>#</th>\\n      <th scope='col'>First</th>\\n      <th scope='col'>Last</th>\\n      <th scope='col'>Handle</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th scope='row'>1</th>\\n      <td>Mark</td>\\n      <td>Otto</td>\\n      <td>@mdo</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>2</th>\\n      <td>Jacob</td>\\n      <td>Thornton</td>\\n      <td>@fat</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>3</th>\\n      <td colspan='2'>Larry the Bird</td>\\n      <td>@twitter</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":4,\"title\":\"Borderless table\",\"text\":\"<table class='table table-borderless'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>#</th>\\n      <th scope='col'>First</th>\\n      <th scope='col'>Last</th>\\n      <th scope='col'>Handle</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th scope='row'>1</th>\\n      <td>Mark</td>\\n      <td>Otto</td>\\n      <td>@mdo</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>2</th>\\n      <td>Jacob</td>\\n      <td>Thornton</td>\\n      <td>@fat</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>3</th>\\n      <td colspan='2'>Larry the Bird</td>\\n      <td>@twitter</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":5,\"title\":\"Table hover\",\"text\":\"<table class='table table-hover'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>#</th>\\n      <th scope='col'>First</th>\\n      <th scope='col'>Last</th>\\n      <th scope='col'>Handle</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th scope='row'>1</th>\\n      <td>Mark</td>\\n      <td>Otto</td>\\n      <td>@mdo</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>2</th>\\n      <td>Jacob</td>\\n      <td>Thornton</td>\\n      <td>@fat</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>3</th>\\n      <td colspan='2'>Larry the Bird</td>\\n      <td>@twitter</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":6,\"title\":\"Small table\",\"text\":\"<table class='table table-sm'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>#</th>\\n      <th scope='col'>First</th>\\n      <th scope='col'>Last</th>\\n      <th scope='col'>Handle</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr>\\n      <th scope='row'>1</th>\\n      <td>Mark</td>\\n      <td>Otto</td>\\n      <td>@mdo</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>2</th>\\n      <td>Jacob</td>\\n      <td>Thornton</td>\\n      <td>@fat</td>\\n    </tr>\\n    <tr>\\n      <th scope='row'>3</th>\\n      <td colspan='2'>Larry the Bird</td>\\n      <td>@twitter</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":7,\"title\":\"Contextual colors \",\"text\":\"<table class='table'>\\n  <thead>\\n    <tr>\\n      <th scope='col'>Class</th>\\n      <th scope='col'>Heading</th>\\n      <th scope='col'>Heading</th>\\n    </tr>\\n  </thead>\\n  <tbody>\\n    <tr class='table-active'>\\n      <th scope='row'>Active</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n    <tr class='table-primary'>\\n      <th scope='row'>Primary</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n    <tr class='table-secondary'>\\n      <th scope='row'>Secondary</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n    <tr class='table-success'>\\n      <th scope='row'>Success</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n    <tr class='table-danger'>\\n      <th scope='row'>Danger</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n    <tr class='table-warning'>\\n      <th scope='row'>Warning</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n    <tr class='table-info'>\\n      <th scope='row'>Info</th>\\n      <td>Cell</td>\\n      <td>Cell</td>\\n    </tr>\\n  </tbody>\\n</table>\"},{\"id\":8,\"title\":\"Contextual colors \",\"text\":\"\\n<div class='table-responsive'>\\n  <table class='table'>\\n    <thead>\\n      <tr>\\n        <th scope='col'>#</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n        <th scope='col'>Heading</th>\\n      </tr>\\n    </thead>\\n    <tbody>\\n      <tr>\\n        <th scope='row'>1</th>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n      </tr>\\n      <tr>\\n        <th scope='row'>2</th>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n      </tr>\\n      <tr>\\n        <th scope='row'>3</th>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n        <td>Cell</td>\\n      </tr>\\n    </tbody>\\n  </table>\\n</div>\"}],\"template\":4}}]},{\"id\":4,\"url\":\"utilities\",\"content\":{\"id\":1,\"title\":\"Utilities\",\"description\":\"Some info goes here.\"},\"pages\":[{\"id\":1,\"url\":\"overview\",\"content\":{\"title\":\"Overview\",\"description\":\"Select a page to see examples and get more information.\",\"template\":2}},{\"id\":2,\"url\":\"typography\",\"content\":{\"id\":1,\"title\":\"Typography\",\"template\":4,\"examples\":[{\"id\":1,\"title\":\"Headings\",\"text\":\"<h1>h1. Bootstrap heading</h1>\\n<h2>h2. Bootstrap heading</h2>\\n<h3>h3. Bootstrap heading</h3>\\n<h4>h4. Bootstrap heading</h4>\\n<h5>h5. Bootstrap heading</h5>\\n<h6>h6. Bootstrap heading</h6>\"},{\"id\":2,\"title\":\"Lead\",\"text\":\"<p class='lead'>\\n  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.\\n</p>\"},{\"id\":3,\"title\":\"Inline text elements\",\"text\":\"<p>You can use the mark tag to <mark>highlight</mark> text.</p>\\n<p><del>This line of text is meant to be treated as deleted text.</del></p>\\n<p><s>This line of text is meant to be treated as no longer accurate.</s></p>\\n<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\\n<p><u>This line of text will render as underlined</u></p>\\n<p><small>This line of text is meant to be treated as fine print.</small></p>\\n<p><strong>This line rendered as bold text.</strong></p>\\n<p><em>This line rendered as italicized text.</em></p>\"},{\"id\":4,\"title\":\"List unstyled\",\"text\":\"<ul class='list-unstyled'>\\n  <li>Lorem ipsum dolor sit amet</li>\\n  <li>Consectetur adipiscing elit</li>\\n  <li>Integer molestie lorem at massa</li>\\n  <li>Facilisis in pretium nisl aliquet</li>\\n  <li>Nulla volutpat aliquam velit\\n    <ul>\\n      <li>Phasellus iaculis neque</li>\\n      <li>Purus sodales ultricies</li>\\n      <li>Vestibulum laoreet porttitor sem</li>\\n      <li>Ac tristique libero volutpat at</li>\\n    </ul>\\n  </li>\\n  <li>Faucibus porta lacus fringilla vel</li>\\n  <li>Aenean sit amet erat nunc</li>\\n  <li>Eget porttitor lorem</li>\\n</ul>\"},{\"id\":5,\"title\":\"List inline\",\"text\":\"<ul class='list-inline'>\\n  <li class='list-inline-item'>Lorem ipsum</li>\\n  <li class='list-inline-item'>Phasellus iaculis</li>\\n  <li class='list-inline-item'>Nulla volutpat</li>\\n</ul>\"},{\"id\":6,\"title\":\"List inline\",\"text\":\"<dl class='row'>\\n  <dt class='col-sm-3'>Description lists</dt>\\n  <dd class='col-sm-9'>A description list is perfect for defining terms.</dd>\\n\\n  <dt class='col-sm-3'>Euismod</dt>\\n  <dd class='col-sm-9'>\\n    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\\n    <p>Donec id elit non mi porta gravida at eget metus.</p>\\n  </dd>\\n\\n  <dt class='col-sm-3'>Malesuada porta</dt>\\n  <dd class='col-sm-9'>Etiam porta sem malesuada magna mollis euismod.</dd>\\n\\n  <dt class='col-sm-3 text-truncate'>Truncated term is truncated</dt>\\n  <dd class='col-sm-9'>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\\n\\n  <dt class='col-sm-3'>Nesting</dt>\\n  <dd class='col-sm-9'>\\n    <dl class='row'>\\n      <dt class='col-sm-4'>Nested definition list</dt>\\n      <dd class='col-sm-8'>Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\\n    </dl>\\n  </dd>\\n</dl>\"}]}},{\"id\":4,\"url\":\"colors\",\"content\":{\"id\":1,\"title\":\"Colors\",\"template\":5,\"examples\":[{\"title\":\"Global colors\",\"type\":\"global\"},{\"title\":\"Interaction colors\",\"type\":\"interaction\"},{\"title\":\"Extra colors\",\"type\":\"extra\"}]}},{\"id\":5,\"url\":\"icons\",\"content\":{\"id\":1,\"title\":\"Icons\",\"template\":6,\"examples\":[{\"title\":\"Icon list\",\"description\":\"The following icons are provided as part of the icon component and can be used like in the example but with chosen icon name.\",\"text\":\"<c-icon name='truck'></c-icon>\"}]}}]},{\"id\":3,\"url\":\"none\",\"content\":{\"id\":3,\"title\":\"Not found\",\"description\":\"This page could not be found.\",\"template\":3}}]");

/***/ }),

/***/ "./src/app/data/templates.json":
/*!*************************************!*\
  !*** ./src/app/data/templates.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Component page\",\"sections\":[{\"id\":1,\"title\":\"Description\",\"content\":\"<section [innerHTML]='item.content.description | markdown | keepHtml' class='container'></section>\"},{\"id\":2,\"title\":\"Examples\",\"content\":\"<section class='container' *ngFor='let example of item.content.examples; index as i'><strong>{{example.title}}</strong><p *ngIf='example.description'>{{example.description}}</p><figure [innerHTML]='example.text | keepHtml'></figure><div item-toggler text='Toggle code example'><c-code-sample [innerHTML]='example.text | keepHtml'></c-code-sample></div></section>\"},{\"id\":3,\"title\":\"Technical documentation\",\"content\":\"<section class='container'><strong>Technical documentation</strong><table class='table'><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Value</th></tr></thead><tbody><tr *ngFor='let info of item.content.info; index as i'><td>{{info.name}}</td><td>{{info.docs}}</td><td>{{info.type}}</td><td>{{info.default}}</td></tr></tbody></table></section>\"}]},{\"id\":2,\"title\":\"Overview page\",\"sections\":[{\"id\":1,\"title\":\"Description\",\"content\":\"<section [innerHTML]='item.content.description | markdown | keepHtml' class='container'></section>\"},{\"id\":4,\"title\":\"Preview\",\"content\":\"<section class='container'><div class='row'><ng-container *ngFor='let child of item.parent.pages; index as i'><div *ngIf='child.content.examples' [class]='\\\"col-sm-3 \\\" + child.url'><a class='card' [routerLink]='child.url'><div class='card-body' [innerHTML]='child.content.examples[0].text | keepHtml'></div><div class='card-footer'>{{child.content.title}}</div></a></div></ng-container></div></section>\"}]},{\"id\":3,\"title\":\"Markdown\",\"sections\":[{\"id\":1,\"title\":\"Description\",\"content\":\"<section [innerHTML]='item.content.description | markdown | keepHtml' class='container'></section>\"}]},{\"id\":4,\"title\":\"Bootstrap Components\",\"sections\":[{\"id\":1,\"title\":\"Description\",\"content\":\"<section *ngIf='item.content.description' [innerHTML]='item.content.description | markdown | keepHtml' class='container'></section>\"},{\"id\":2,\"title\":\"Examples\",\"content\":\"<section class='container' *ngFor='let example of item.content.examples; index as i'><strong>{{example.title}}</strong><p *ngIf='example.description'>{{example.description}}</p><figure [innerHTML]='example.text | keepHtml'></figure><div item-toggler text='Toggle code example'><c-code-sample [innerHTML]='example.text | keepHtml'></c-code-sample></div></section>\"}]},{\"id\":5,\"title\":\"Color list\",\"sections\":[{\"id\":1,\"title\":\"Colors\",\"content\":\"<section class='container' *ngFor='let example of item.content.examples; index as i'><h4>{{example.title}}</h4><p *ngIf='example.description'>{{example.description}}</p><div color-list [type]='example.type' class='row' classes='col-sm-6 col-md-4 col-lg-2 mb-5'></div></section>\"}]},{\"id\":6,\"title\":\"Icon list\",\"sections\":[{\"id\":1,\"title\":\"Examples\",\"content\":\"<section class='container' *ngFor='let example of item.content.examples; index as i'><strong>{{example.title}}</strong><p *ngIf='example.description'>{{example.description}}</p><pre>{{example.text}}</pre><h5 class='mb-5 mt-5'>Icon List</h5><div icon-list class='row'></div></section>\"}]},{\"id\":7,\"title\":\"\",\"sections\":[{\"id\":1,\"title\":\"Description\",\"content\":\"<section [innerHTML]='item.content.description | markdown | keepHtml' class='container'></section>\"},{\"id\":2,\"title\":\"Examples\",\"content\":\"<section class='container' *ngFor='let example of item.content.examples; index as i'><strong>{{example.title}}</strong><p *ngIf='example.description'>{{example.description}}</p><c-code-sample [innerHTML]='example.text | keepHtml'></c-code-sample></section>\"},{\"id\":3,\"title\":\"Technical documentation\",\"content\":\"<section class='container'><strong>Technical documentation</strong><table class='table'><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Value</th></tr></thead><tbody><tr *ngFor='let info of item.content.info; index as i'><td>{{info.name}}</td><td>{{info.docs}}</td><td>{{info.type}}</td><td>{{info.default}}</td></tr></tbody></table></section>\"}]}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var corporate_ui_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! corporate-ui-dev */ "./node_modules/corporate-ui-dev/dist/collection/index.js");
/* harmony import */ var corporate_ui_dev__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(corporate_ui_dev__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scania_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scania-theme */ "./node_modules/scania-theme/dist/module.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production)
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])
    .catch(err => console.error(err));
Object(corporate_ui_dev__WEBPACK_IMPORTED_MODULE_3__["defineCustomElements"])();
Object(corporate_ui_dev__WEBPACK_IMPORTED_MODULE_3__["addTheme"])(scania_theme__WEBPACK_IMPORTED_MODULE_4__["theme"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eyuz78\development\corporate-ui-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
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

/***/ "./libs/components/base/base.component.scss":
/*!**************************************************!*\
  !*** ./libs/components/base/base.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  height: calc(100% - 50px);\n  width: 100%;\n  background-color: #ccc;\n  overflow: auto;\n}");

/***/ }),

/***/ "./libs/components/base/base.component.ts":
/*!************************************************!*\
  !*** ./libs/components/base/base.component.ts ***!
  \************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaseComponent = class BaseComponent {
    constructor() { }
    ngOnInit() { }
};
BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-base',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./libs/components/base/base.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./base.component.scss */ "./libs/components/base/base.component.scss")).default]
    })
], BaseComponent);



/***/ }),

/***/ "./libs/components/base/base.module.ts":
/*!*********************************************!*\
  !*** ./libs/components/base/base.module.ts ***!
  \*********************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./libs/components/base/base.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav.component */ "./libs/components/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let BaseModule = class BaseModule {
};
BaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [],
        declarations: [
            _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]
        ],
        providers: [],
    })
], BaseModule);



/***/ }),

/***/ "./libs/components/components.module.ts":
/*!**********************************************!*\
  !*** ./libs/components/components.module.ts ***!
  \**********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/icon.component */ "./libs/components/icon/icon.component.ts");
/* harmony import */ var src_app_pipes_quality_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pipes/quality.pipe */ "./src/app/pipes/quality.pipe.ts");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        exports: [
            _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"],
            src_app_pipes_quality_pipe__WEBPACK_IMPORTED_MODULE_3__["QualityPipe"]
        ],
        declarations: [
            _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"],
            src_app_pipes_quality_pipe__WEBPACK_IMPORTED_MODULE_3__["QualityPipe"]
        ],
        providers: [],
    })
], ComponentsModule);



/***/ }),

/***/ "./libs/components/icon/icon.component.ts":
/*!************************************************!*\
  !*** ./libs/components/icon/icon.component.ts ***!
  \************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IconComponent = class IconComponent {
    constructor(renderer, hostElement) {
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.size = 14;
        this.basePath = 'assets/icons-sprite.svg#';
    }
    ngOnChanges(changes) {
    }
};
IconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IconComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IconComponent.prototype, "name", void 0);
IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icon',
        template: `
    <svg role="img" [style.width.px]="size" [style.height.px]="size" xmlns="http://www.w3.org/2000/svg">
      <use [attr.xlink:href]="basePath + name"></use>
    </svg>`,
        styles: ["\n    :host {\n      box-sizing: border-box;\n      color: currentColor;\n      height: inherit;\n      width: inherit;\n    }\n\n    svg {\n      box-sizing: border-box;\n      display: inline-block;\n      fill: currentColor;\n      height: inherit;\n      width: inherit;\n      vertical-align: middle;\n    }\n  "]
    })
], IconComponent);



/***/ }),

/***/ "./libs/components/login/login.component.ts":
/*!**************************************************!*\
  !*** ./libs/components/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() { }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./libs/components/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./libs/components/nav/nav.component.scss":
/*!************************************************!*\
  !*** ./libs/components/nav/nav.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background: radial-gradient(circle, #534239 0%, #43352e 100%);\n  z-index: 1;\n}\n\na {\n  line-height: 50px;\n  text-decoration: none;\n  font-weight: bold;\n  color: #927e6d;\n  margin-right: 24px;\n  display: inline-block;\n  height: 50px;\n  padding-left: 16px;\n  padding-right: 16px;\n  letter-spacing: 2px;\n}\n\na.active {\n  background-color: #ccc;\n  color: #5a3e2c;\n  font-weight: 700;\n}");

/***/ }),

/***/ "./libs/components/nav/nav.component.ts":
/*!**********************************************!*\
  !*** ./libs/components/nav/nav.component.ts ***!
  \**********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() { }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./libs/components/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./libs/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./libs/components/base/base.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/components/base/base.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\r\n<div class=\"content sp-p-md\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./libs/components/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/components/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gs\">\r\n  <div class=\"gs-col-6\">\r\n    <div class=\"gs-col-3\"></div>\r\n    <div class=\"gs-col-6\">\r\n    </div>\r\n  </div>\r\n  <div class=\"gs-col-6\">123</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./libs/components/nav/nav.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./libs/components/nav/nav.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sp-pl-lg sp-pr-lg\">\r\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Marketplace</a>\r\n    <a [routerLink]=\"['/analysis']\" routerLinkActive=\"active\">Analysis</a>\r\n    <a [routerLink]=\"['/trip-planner']\" routerLinkActive=\"active\">Trip Planner</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/analysis/analysis.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/analysis/analysis.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"card\">\r\n    <div class=\"card--header\">\r\n      Analysis\r\n    </div>\r\n    <div class=\"card--content\" style=\"min-height: 300px;\">\r\n      <div>\r\n        <button class=\"btn btn-primary sp-mr-md\" (click)=\"startAnalysis()\" [disabled]=\"runningAnalysis\">Start Analysis</button>\r\n        <button class=\"btn btn-default sp-mr-md\" (click)=\"stopAnalysis()\" [disabled]=\"!runningAnalysis\">Stop</button>\r\n        <span>Analysing: {{currentPos}}/{{items?.length}}</span>\r\n      </div>\r\n      <table class=\"table sp-mt-md\">\r\n        <thead>\r\n          <tr>\r\n            <th>Item</th>\r\n            <th>City</th>\r\n            <th>Quality</th>\r\n            <th class=\"text-align-right\">Buy Order</th>\r\n            <th class=\"text-align-right\">Sell Order</th>\r\n            <th class=\"text-align-right\">Buy Setup</th>\r\n            <th class=\"text-align-right\">Sell Setup</th>\r\n            <th class=\"text-align-right\">Sell Tax</th>\r\n            <th class=\"text-align-right\">Profit</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let price of selectedItemPrices\">\r\n            <td>{{price.item_id}}</td>\r\n            <td>{{price.city}}</td>\r\n            <td>{{price.quality | quality}}</td>\r\n            <td class=\"text-align-right\">{{price.buy_price_max | number:'1.0-0'}}</td>\r\n            <td class=\"text-align-right\">{{price.sell_price_min | number:'1.0-0'}}</td>\r\n            <td class=\"text-align-right\">{{price.buy_order_setup_fee | number:'1.0-0'}}</td>\r\n            <td class=\"text-align-right\">{{price.sell_order_setup_fee | number:'1.0-0'}}</td>\r\n            <td class=\"text-align-right\">{{price.sell_order_tax | number:'1.0-0'}}</td>\r\n            <td class=\"text-align-right\">\r\n              <span *ngIf=\"price.profit\">{{price.profit | number:'1.0-0'}} ({{price.profit_percentage * 100 | number:'1.1-1'}}%)</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n    \r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container card\" style=\"position: relative;\">\r\n  <div class=\"card--header\" style=\"line-height: 75px;\">\r\n    <img src=\"assets/images/marketplace.png\" alt=\"\" style=\"position: absolute;\">\r\n    <span style=\"margin-left: 88px\">Marketplace</span>\r\n  </div>\r\n  <form #itemForm=\"ngForm\" class=\"card--content\" style=\"min-height: 300px;\">\r\n    <div>\r\n      <input type=\"text\" list=\"items\" [(ngModel)]=\"itemName\" name=\"item\" autocomplete=\"off\" placeholder=\"Item Name\" style=\"width: 400px\">\r\n      <datalist id=\"items\">\r\n        <option *ngFor=\"let item of items\" [value]=\"item.UniqueName\">{{item.SearchableName}}</option>\r\n      </datalist>\r\n\r\n    </div>\r\n    <div class=\"sp-mt-md\">\r\n      <select placeholder=\"Quality\" name=\"quality\" id=\"quality\" [(ngModel)]=\"itemQuality\" class=\"sp-mr-md\" style=\"width: 201px\">\r\n        <option value=\"\" selected>All qualities</option>\r\n        <option value=\"1\">Normal</option>\r\n        <option value=\"2\">Good</option>\r\n        <option value=\"3\">Outstanding</option>\r\n        <option value=\"4\">Excellent</option>\r\n        <option value=\"5\">Masterpiece</option>\r\n      </select>\r\n\r\n      <select placeholder=\"Location\" name=\"location\" id=\"location\" [(ngModel)]=\"location\" style=\"width: 201px\"  class=\"sp-mr-md\">\r\n        <option value=\"\" selected>All locations</option>\r\n        <option *ngFor=\"let location of locations\" [value]=\"location\">{{location}}</option>\r\n      </select>\r\n\r\n      <button class=\"btn btn-primary sp-mr-sm\" (click)=\"compare(itemName, itemQuality, location)\">Search</button>\r\n      <button class=\"btn btn-default\" (click)=\"clear()\">Clear</button>\r\n    </div>\r\n    <table class=\"table sp-mt-md\">\r\n      <thead>\r\n        <tr>\r\n          <th (click)=\"sortBy('city')\">City</th>\r\n          <th (click)=\"sortBy('quality')\">Quality</th>\r\n          <th (click)=\"sortBy('buy_price_max')\" class=\"text-align-right\">Buy Order</th>\r\n          <th (click)=\"sortBy('sell_price_min')\" class=\"text-align-right\">Sell Order</th>\r\n          <th (click)=\"sortBy('buy_order_setup_fee')\" class=\"text-align-right\">Buy Setup</th>\r\n          <th (click)=\"sortBy('sell_order_setup_fee')\" class=\"text-align-right\">Sell Setup</th>\r\n          <th (click)=\"sortBy('sell_order_tax')\" class=\"text-align-right\">Sell Tax</th>\r\n          <th (click)=\"sortBy('profit')\" class=\"text-align-right\">Profit</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let price of selectedItemPrices\">\r\n          <td>{{price.city}}</td>\r\n          <td>{{price.quality | quality}}</td>\r\n          <td class=\"text-align-right\">{{price.buy_price_max | number:'1.0-0'}}</td>\r\n          <td class=\"text-align-right\">{{price.sell_price_min | number:'1.0-0'}}</td>\r\n          <td class=\"text-align-right\">{{price.buy_order_setup_fee | number:'1.0-0'}}</td>\r\n          <td class=\"text-align-right\">{{price.sell_order_setup_fee | number:'1.0-0'}}</td>\r\n          <td class=\"text-align-right\">{{price.sell_order_tax | number:'1.0-0'}}</td>\r\n          <td class=\"text-align-right\">\r\n            <span *ngIf=\"price.profit\">{{price.profit | number:'1.0-0'}} ({{price.profit_percentage * 100 | number:'1.1-1'}}%)</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/trip-planner/trip-planner.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/trip-planner/trip-planner.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container card\" style=\"position: relative;\">\r\n  <div class=\"card--header\" style=\"line-height: 75px;\">\r\n    <img src=\"assets/images/marketplace.png\" alt=\"\" style=\"position: absolute;\">\r\n    <span style=\"margin-left: 88px\">Trip Planner</span>\r\n  </div>\r\n  <form #itemForm=\"ngForm\" class=\"card--content\" style=\"min-height: 300px;\">\r\n    <div class=\"sp-mt-md\">\r\n      <select placeholder=\"From\" name=\"from\" id=\"from\" [(ngModel)]=\"fromLocation\" style=\"width: 201px\"  class=\"sp-mr-md\">\r\n        <option value=\"\" selected>All locations</option>\r\n        <option *ngFor=\"let location of locations\" [value]=\"location\">{{location}}</option>\r\n      </select>\r\n\r\n      <select placeholder=\"To\" name=\"to\" id=\"to\" [(ngModel)]=\"toLocation\" style=\"width: 201px\"  class=\"sp-mr-md\">\r\n        <option value=\"\" selected>All locations</option>\r\n        <option *ngFor=\"let location of locations\" [value]=\"location\">{{location}}</option>\r\n      </select>\r\n\r\n      <button class=\"btn btn-primary sp-mr-sm\" [disabled]=\"!fromLocation || !toLocation\" (click)=\"analyze(fromLocation, toLocation)\">Check Marketplace Prices</button>\r\n      <button class=\"btn btn-default sp-mr-lg\" (click)=\"stopAnalysis()\">Stop</button>\r\n      <button class=\"btn btn-default\" (click)=\"clear()\">Clear</button>\r\n    </div>\r\n    <table class=\"table sp-mt-md\">\r\n      <thead>\r\n        <tr>\r\n          <th>Item</th>\r\n          <th>Quality</th>\r\n          <th class=\"text-align-right\">Weight</th>\r\n          <th class=\"text-align-right\">Sell Order in {{fromLocation}}</th>\r\n          <th class=\"text-align-right\">Buy Order in {{toLocation}}</th>\r\n          <th class=\"text-align-right\">Fees</th>\r\n          <th class=\"text-align-right\">Profit/Weight</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let price of items\">\r\n          <th></th>\r\n          <th></th>\r\n          <th class=\"text-align-right\"></th>\r\n          <th class=\"text-align-right\"></th>\r\n          <th class=\"text-align-right\"></th>\r\n          <th class=\"text-align-right\"></th>\r\n          <th class=\"text-align-right\"></th>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </form>\r\n</div>\r\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _libs_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/components/base/base.component */ "./libs/components/base/base.component.ts");
/* harmony import */ var _routes_home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/home/home.module */ "./src/app/routes/home/home.module.ts");
/* harmony import */ var _libs_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @libs/components/login/login.component */ "./libs/components/login/login.component.ts");
/* harmony import */ var _libs_components_base_base_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @libs/components/base/base.module */ "./libs/components/base/base.module.ts");
/* harmony import */ var _routes_analysis_analysis_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/analysis/analysis.module */ "./src/app/routes/analysis/analysis.module.ts");
/* harmony import */ var _routes_trip_planner_trip_planner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/trip-planner/trip-planner.module */ "./src/app/routes/trip-planner/trip-planner.module.ts");









const appRoutes = [
    { path: 'login', component: _libs_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '', component: _libs_components_base_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"], children: [
            { path: '', children: _routes_home_home_module__WEBPACK_IMPORTED_MODULE_4__["homeRoutes"] },
            { path: '', children: _routes_analysis_analysis_module__WEBPACK_IMPORTED_MODULE_7__["analysisRoutes"] },
            { path: '', children: _routes_trip_planner_trip_planner_module__WEBPACK_IMPORTED_MODULE_8__["tripPlannerRoutes"] }
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _libs_components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
        ],
        imports: [
            _libs_components_base_base_module__WEBPACK_IMPORTED_MODULE_6__["BaseModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
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
/* harmony default export */ __webpack_exports__["default"] = ("");

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
        selector: 'app-root',
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _routes_analysis_analysis_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/analysis/analysis.module */ "./src/app/routes/analysis/analysis.module.ts");
/* harmony import */ var _routes_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/home/home.module */ "./src/app/routes/home/home.module.ts");
/* harmony import */ var _routes_trip_planner_trip_planner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/trip-planner/trip-planner.module */ "./src/app/routes/trip-planner/trip-planner.module.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        exports: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _routes_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
            _routes_analysis_analysis_module__WEBPACK_IMPORTED_MODULE_6__["AnalysisModule"],
            _routes_trip_planner_trip_planner_module__WEBPACK_IMPORTED_MODULE_8__["TripPlannerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/enums/constants.ts":
/*!************************************!*\
  !*** ./src/app/enums/constants.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Constants;
(function (Constants) {
    Constants[Constants["SETUP_FEE_PERCENTAGE"] = 0.015] = "SETUP_FEE_PERCENTAGE";
    Constants[Constants["TAX_PERCENTAGE"] = 0.03] = "TAX_PERCENTAGE";
})(Constants || (Constants = {}));


/***/ }),

/***/ "./src/app/enums/locations.ts":
/*!************************************!*\
  !*** ./src/app/enums/locations.ts ***!
  \************************************/
/*! exports provided: locations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return locations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const locations = [
    'Caerleon',
    'Black Market',
    'Bridgewatch',
    'Fort Sterling',
    'Martlock',
    'Thetford',
    'Arthurs Rest',
    'Morganas Rest',
    'Merlyns Rest'
];


/***/ }),

/***/ "./src/app/pipes/quality.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/quality.pipe.ts ***!
  \***************************************/
/*! exports provided: QualityPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityPipe", function() { return QualityPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QualityPipe = class QualityPipe {
    transform(value) {
        switch (value) {
            case 1: return 'Normal';
            case 2: return 'Good';
            case 3: return 'Outstanding';
            case 4: return 'Excellent';
            case 5: return 'Masterpiece';
        }
    }
};
QualityPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'quality'
    })
], QualityPipe);



/***/ }),

/***/ "./src/app/routes/analysis/analysis.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/analysis/analysis.component.ts ***!
  \*******************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");




let AnalysisComponent = class AnalysisComponent {
    constructor(title, itemService) {
        this.title = title;
        this.itemService = itemService;
        this.selectedItemPrices = [];
        this.runningAnalysis = false;
        this.currentPos = 0;
        this.ITEMS_PER_REQUEST = 30;
    }
    ngOnInit() {
        this.title.setTitle('Albion market analysis');
        this.itemService.getAll().subscribe(items => {
            this.items = items;
        });
        this.currentPos = 0;
    }
    startAnalysis() {
        this.runningAnalysis = true;
        this.analysisInterval = setInterval(() => {
            const items = this.items.slice(this.currentPos, this.currentPos + this.ITEMS_PER_REQUEST);
            this.currentPos += this.ITEMS_PER_REQUEST;
            const itemsNames = items.map(i => i.UniqueName);
            this.compare(itemsNames);
            if (this.currentPos > this.items.length) {
                this.stopAnalysis();
            }
        }, 5000);
    }
    stopAnalysis() {
        window.clearInterval(this.analysisInterval);
        this.runningAnalysis = false;
    }
    compare(items) {
        this.itemService.getPrices(items, [], ['Caerleon' /*, 'Bridgewatch', 'Fort Sterling', 'Martlock', 'Thetford'*/])
            .subscribe(prices => {
            this.selectedItemPrices = this.selectedItemPrices.concat(prices.filter(p => p.profit && p.profit_percentage < 2 && p.profit > 30000));
            this.selectedItemPrices.sort((a, b) => {
                if (!b.profit) {
                    return -1;
                }
                else if (!a.profit) {
                    return 1;
                }
                else {
                    return b.profit_percentage - a.profit_percentage;
                }
            });
        });
    }
};
AnalysisComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }
];
AnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analysis',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/analysis/analysis.component.html")).default
    })
], AnalysisComponent);



/***/ }),

/***/ "./src/app/routes/analysis/analysis.module.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/analysis/analysis.module.ts ***!
  \****************************************************/
/*! exports provided: analysisRoutes, AnalysisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analysisRoutes", function() { return analysisRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisModule", function() { return AnalysisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _libs_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @libs/components/components.module */ "./libs/components/components.module.ts");
/* harmony import */ var _analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analysis.component */ "./src/app/routes/analysis/analysis.component.ts");






const analysisRoutes = [
    { path: 'analysis', component: _analysis_component__WEBPACK_IMPORTED_MODULE_5__["AnalysisComponent"] }
];
let AnalysisModule = class AnalysisModule {
};
AnalysisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _libs_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        exports: [],
        declarations: [
            _analysis_component__WEBPACK_IMPORTED_MODULE_5__["AnalysisComponent"]
        ],
        providers: []
    })
], AnalysisModule);



/***/ }),

/***/ "./src/app/routes/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/routes/home/home.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table th {\n  cursor: pointer;\n}");

/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/route.service */ "./src/app/services/route.service.ts");
/* harmony import */ var src_app_enums_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/locations */ "./src/app/enums/locations.ts");






let HomeComponent = class HomeComponent {
    constructor(title, itemService, routeService) {
        this.title = title;
        this.itemService = itemService;
        this.routeService = routeService;
        this.itemQuality = '';
        this.location = '';
        this.locations = src_app_enums_locations__WEBPACK_IMPORTED_MODULE_5__["locations"];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.itemService.getAll().subscribe(items => {
                items.forEach(item => {
                    if (item.SearchableName) {
                        item.SearchableName = item.SearchableName
                            .replace('Beginner\'s ', '')
                            .replace('Novice\'s ', '')
                            .replace('Journeyman\'s ', '')
                            .replace('Adept\'s ', '')
                            .replace('Expert\'s ', '')
                            .replace('Master\'s ', '')
                            .replace('Grandmaster\'s ', '')
                            .replace('Elder\'s ', '');
                    }
                });
                this.items = items;
                let item = this.routeService.getParam('item');
                if (item) {
                    if (item.includes('_')) {
                        this.itemName = item;
                    }
                    else {
                        const isEnchantedOne = item.includes('.1');
                        const isEnchantedTwo = item.includes('.2');
                        const isEnchantedThree = item.includes('.3');
                        if (isEnchantedOne)
                            item = item.replace('.1', '');
                        if (isEnchantedTwo)
                            item = item.replace('.2', '');
                        if (isEnchantedThree)
                            item = item.replace('.3', '');
                        const parts = item.split(' ');
                        const foundItem = this.items.find(item => {
                            const lowerName = item.SearchableName.toLowerCase();
                            for (let i = 0; i < parts.length; i++) {
                                if (!lowerName.includes(parts[i].toLowerCase())) {
                                    return false;
                                }
                            }
                            if (isEnchantedOne) {
                                return item.UniqueName.includes('@1');
                            }
                            if (isEnchantedTwo) {
                                return item.UniqueName.includes('@2');
                            }
                            if (isEnchantedThree) {
                                return item.UniqueName.includes('@3');
                            }
                            return true;
                        });
                        if (foundItem) {
                            this.itemName = foundItem.UniqueName;
                        }
                    }
                    if (this.itemName) {
                        this.compare(this.itemName, undefined, undefined);
                    }
                }
            });
        });
    }
    compare(itemUniqueName, itemQuality, location) {
        this.routeService.setParam('item', itemUniqueName);
        let item = this.items.find(i => i.UniqueName === itemUniqueName);
        this.title.setTitle(`Marketplace: ${item.SearchableName}`);
        this.itemService.getPrices([itemUniqueName], [itemQuality], [location]).subscribe(prices => this.selectedItemPrices = prices);
    }
    clear() {
        this.itemName = '';
        this.itemQuality = '';
        this.location = '';
        this.routeService.clearParams();
    }
    sortBy(column) {
        if (column === this.column) {
            if (this.order === 'ASC') {
                this.order = 'DESC';
            }
            else {
                this.order = 'ASC';
            }
        }
        else {
            this.column = column;
            this.order = 'ASC';
        }
        this.selectedItemPrices = this.selectedItemPrices.sort((a, b) => {
            if (this.order === 'ASC') {
                if (this.column === 'city') {
                    return String(a[this.column]).localeCompare(String(b[this.column]));
                }
                return a[this.column] - b[this.column];
            }
            if (this.column === 'city') {
                return String(b[this.column]).localeCompare(String(a[this.column]));
            }
            return b[this.column] - a[this.column];
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] },
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
    { type: src_app_services_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/routes/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/routes/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home/home.module.ts ***!
  \********************************************/
/*! exports provided: homeRoutes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeRoutes", function() { return homeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _libs_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @libs/components/components.module */ "./libs/components/components.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/routes/home/home.component.ts");






const homeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _libs_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        exports: [],
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        ],
        providers: []
    })
], HomeModule);



/***/ }),

/***/ "./src/app/routes/trip-planner/trip-planner.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/trip-planner/trip-planner.component.ts ***!
  \***************************************************************/
/*! exports provided: TripPlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPlannerComponent", function() { return TripPlannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_enums_locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/enums/locations */ "./src/app/enums/locations.ts");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");




let TripPlannerComponent = class TripPlannerComponent {
    constructor(itemService) {
        this.itemService = itemService;
        this.stop = false;
        this.locations = src_app_enums_locations__WEBPACK_IMPORTED_MODULE_2__["locations"];
    }
    ngOnInit() { }
    analyze(fromLocation, toLocation) {
        this.itemService.getAll().subscribe(items => {
            const interval = setInterval(() => {
                if (this.stop || !items.length) {
                    this.stop = false;
                    clearInterval(interval);
                    return;
                }
                const queryItems = items.splice(0, 30);
                this.itemService.getPrices(queryItems.map(i => i.UniqueName), [], [fromLocation, toLocation]).subscribe(listings => {
                    console.log(listings);
                });
            }, 2000);
        });
    }
    stopAnalysis() {
        this.stop = true;
    }
    clear() {
        this.fromLocation = '';
        this.toLocation = '';
    }
};
TripPlannerComponent.ctorParameters = () => [
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] }
];
TripPlannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-planner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trip-planner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/trip-planner/trip-planner.component.html")).default
    })
], TripPlannerComponent);



/***/ }),

/***/ "./src/app/routes/trip-planner/trip-planner.module.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/trip-planner/trip-planner.module.ts ***!
  \************************************************************/
/*! exports provided: tripPlannerRoutes, TripPlannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripPlannerRoutes", function() { return tripPlannerRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPlannerModule", function() { return TripPlannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _libs_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @libs/components/components.module */ "./libs/components/components.module.ts");
/* harmony import */ var _trip_planner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-planner.component */ "./src/app/routes/trip-planner/trip-planner.component.ts");






const tripPlannerRoutes = [
    { path: 'trip-planner', component: _trip_planner_component__WEBPACK_IMPORTED_MODULE_5__["TripPlannerComponent"] }
];
let TripPlannerModule = class TripPlannerModule {
};
TripPlannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _libs_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]
        ],
        exports: [],
        declarations: [
            _trip_planner_component__WEBPACK_IMPORTED_MODULE_5__["TripPlannerComponent"]
        ],
        providers: []
    })
], TripPlannerModule);



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _enums_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/constants */ "./src/app/enums/constants.ts");







let ItemService = class ItemService {
    constructor(http, session) {
        this.http = http;
        this.session = session;
        this.url = 'https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json';
    }
    loadItems() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            if (this.items) {
                observer.next(this.items);
                observer.complete();
            }
            else {
                this.http.get(this.url).subscribe((response) => {
                    this.items = response.filter(item => !item.UniqueName.toLocaleLowerCase().includes('questitem'));
                    this.items.forEach(item => {
                        const tier = item.UniqueName.split('_')[0];
                        if (item.LocalizedNames) {
                            item.SearchableName = `${tier} ${item.LocalizedNames[this.session.locale]}`;
                        }
                        else {
                            item.SearchableName = item.UniqueName;
                        }
                    });
                    observer.next(this.items);
                    observer.complete();
                    return this.items;
                });
            }
        });
    }
    getAll() {
        return this.loadItems();
    }
    getPrices(items, itemQuality, locations) {
        let url = `https://www.albion-online-data.com/api/v2/stats/prices/${items.join(',')}`;
        return this.http.get(url, {
            params: {
                qualities: itemQuality.join(','),
                locations: locations.join(',')
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((prices) => {
            prices.forEach(price => {
                if (price.sell_price_min && price.buy_price_max) {
                    price.buy_order_setup_fee = price.buy_price_max * _enums_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].SETUP_FEE_PERCENTAGE;
                    price.sell_order_setup_fee = price.sell_price_min * _enums_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].SETUP_FEE_PERCENTAGE;
                    price.sell_order_tax = price.sell_price_min * _enums_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"].TAX_PERCENTAGE;
                    const operationCost = price.buy_price_max + price.buy_order_setup_fee + price.sell_order_setup_fee + price.sell_order_tax;
                    price.profit = price.sell_price_min - operationCost;
                    price.profit_percentage = price.profit / operationCost;
                }
            });
            /*
            prices.sort((a, b) => {
              if (!b.profit) {
                return -1;
              } else if (!a.profit) {
                return 1;
              } else {
                return b.profit_percentage - a.profit_percentage;
              }
            });
            */
            prices.sort((a, b) => {
                if (a.city !== b.city) {
                    return a.city.localeCompare(b.city);
                }
                return b.quality - a.quality;
            });
            return prices;
        }));
    }
};
ItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemService);



/***/ }),

/***/ "./src/app/services/route.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/route.service.ts ***!
  \*******************************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RouteService = class RouteService {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    setParam(attr, value) {
        const queryParams = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        if (value) {
            queryParams[attr] = value;
        }
        else {
            delete queryParams[attr];
        }
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: queryParams
        });
    }
    setParams(newParams) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: newParams
        });
    }
    getParam(attr) {
        return this.activatedRoute.snapshot.queryParams[attr];
    }
    getParams() {
        return this.activatedRoute.snapshot.queryParams;
    }
    removeParam(attr) {
        this.setParam(attr, null);
    }
    clearParams() {
        this.setParams({});
    }
};
RouteService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteService);



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService, Locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SessionService = class SessionService {
    constructor() {
        this.locale = Locale.EN_US;
    }
};
SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SessionService);

var Locale;
(function (Locale) {
    Locale["EN_US"] = "EN-US";
    Locale["DE_DE"] = "DE-DE";
    Locale["FR_FR"] = "FR-FR";
    Locale["RU_RU"] = "RU-RU";
    Locale["PL_PL"] = "PL-PL";
    Locale["ES_ES"] = "ES-ES";
    Locale["PT_BR"] = "PT-BR";
})(Locale || (Locale = {}));


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ingow\projects\app-ui-albion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
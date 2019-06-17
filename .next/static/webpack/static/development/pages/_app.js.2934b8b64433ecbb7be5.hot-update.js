webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./data/reducers/UI.js":
/*!*****************************!*\
  !*** ./data/reducers/UI.js ***!
  \*****************************/
/*! exports provided: updateUI, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var redux_act__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-act */ "./node_modules/redux-act/lib/index.js");
/* harmony import */ var redux_act__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_act__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



var updateUI = Object(redux_act__WEBPACK_IMPORTED_MODULE_1__["createAction"])("update ui");
var reducer = Object(redux_act__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateUI, function (state, payload) {
  return ramda__WEBPACK_IMPORTED_MODULE_2__["merge"](state, payload);
}), {
  title: "hello world"
});

/***/ })

})
//# sourceMappingURL=_app.js.2934b8b64433ecbb7be5.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/DashboardContainer.js":
/*!******************************************!*\
  !*** ./containers/DashboardContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_withLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/withLayout */ "./components/withLayout.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Dashboard */ "./components/Dashboard.js");
var _jsxFileName = "/home/alpha/stimming/nextjs-boilerplate/containers/DashboardContainer.js";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
};

function mapStateToProps(state) {
  console.log(state.UI);
  return {
    title: state.UI.title
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.d63bf03d2f327d3eb532.hot-update.js.map
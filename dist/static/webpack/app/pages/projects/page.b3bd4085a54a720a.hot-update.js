"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/projects/page",{

/***/ "(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx":
/*!********************************************!*\
  !*** ./components/BtnCustom/BtnCustom.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useLocaleStorage */ \"(app-pages-browser)/./hooks/useLocaleStorage.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"dark\");\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const toggleDarkMode = ()=>{\n        const val = (0,hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_2__.getItemStore)(\"colorBtn\");\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"dark-mode-btn--active\"])]: color == \"light\"\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"b4T4TrXdcykRystIhRple4mPg58=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEI7QUFDZ0I7QUFDNEI7QUFDaEI7QUFFakQsTUFBTUksWUFBWTtRQUF5QixFQUNqREMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsUUFBUSxFQUNGOztJQUNOLDJEQUEyRDtJQUMzRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1VLGlCQUFpQjtRQUN0QixNQUFNQyxNQUFNWixvRUFBWUEsQ0FBQztRQUN6QlEsU0FBU0QsU0FBUyxVQUFVLFNBQVM7SUFDdEM7SUFFQSxxQkFDQyw4REFBQ007UUFDQVYsV0FBV0wsaURBQUVBLENBQUNDLDhEQUFNLENBQUNJLFVBQVUsRUFBRTtZQUNoQyxDQUFDSixzRUFBaUIsQ0FBQyxFQUFFTSxRQUFRO1lBQzdCLENBQUNOLHVGQUErQixDQUFDLEVBQUVRLFNBQVM7UUFDN0M7UUFDQU8sU0FBUyxJQUFPVCxRQUFRLGNBQWNNLG1CQUFtQkk7O1lBRXhEVixRQUFRRDtZQUNSRTs7Ozs7OztBQUdKLEVBQUU7R0EzQldKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3g/NzNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IElCdG5Qcm9wcyB9IGZyb20gXCIuL0J0bkN1c3RvbS5pbnRlcmZhY2VcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdG5DdXN0b20ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0SXRlbVN0b3JlLCB1c2VMb2NhbGVTdG9yYWdlIH0gZnJvbSBcImhvb2tzL3VzZUxvY2FsZVN0b3JhZ2VcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEJ0bkN1c3RvbSA9IDxJQnRuIGV4dGVuZHMgSUJ0blByb3BzPih7XG5cdGNsYXNzTmFtZSxcblx0dmFsdWUsXG5cdHR5cGUsXG5cdGNoaWxkcmVuLFxufTogSUJ0bik6IEpTWC5FbGVtZW50ID0+IHtcblx0Ly8gY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VMb2NhbGVTdG9yYWdlKFwiY29sb3JNb2RlXCIpO1xuXHRjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXHRjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcblx0XHRjb25zdCB2YWwgPSBnZXRJdGVtU3RvcmUoXCJjb2xvckJ0blwiKTtcblx0XHRzZXRDb2xvcihjb2xvciA9PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlc1tjbGFzc05hbWVdLCB7XG5cdFx0XHRcdFtzdHlsZXNbXCJtYWluQnRuXCJdXTogdHlwZSA9PSBcIm1haW5cIixcblx0XHRcdFx0W3N0eWxlc1tcImRhcmstbW9kZS1idG4tLWFjdGl2ZVwiXV06IGNvbG9yID09IFwibGlnaHRcIixcblx0XHRcdH0pfVxuXHRcdFx0b25DbGljaz17KCkgPT4gKHR5cGUgPT0gXCJsaWdodE1vZGVcIiA/IHRvZ2dsZURhcmtNb2RlKCkgOiB1bmRlZmluZWQpfVxuXHRcdD5cblx0XHRcdHt0eXBlICYmIHZhbHVlfVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjbiIsInN0eWxlcyIsImdldEl0ZW1TdG9yZSIsInVzZVN0YXRlIiwiQnRuQ3VzdG9tIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hpbGRyZW4iLCJjb2xvciIsInNldENvbG9yIiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURhcmtNb2RlIiwidmFsIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
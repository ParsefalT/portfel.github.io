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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const toggleDarkMode = ()=>{\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: color == \"light\"\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"b4T4TrXdcykRystIhRple4mPg58=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1HLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTiwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUduQyxNQUFNVSxpQkFBaUI7UUFDdEJILFNBQVNELFNBQVMsVUFBVSxTQUFTO0lBQ3RDO0lBRUEscUJBQ0MsOERBQUNLO1FBQ0FULFdBQVdKLGlEQUFFQSxDQUFDQyw4REFBTSxDQUFDRyxVQUFVLEVBQUU7WUFDaEMsQ0FBQ0gsc0VBQWlCLENBQUMsRUFBRUssUUFBUTtZQUM3QixDQUFDTCx1RkFBK0IsQ0FBQyxFQUFFTyxTQUFTO1FBQzdDO1FBQ0FNLFNBQVMsSUFBT1IsUUFBUSxjQUFjTSxtQkFBbUJHOztZQUV4RFQsUUFBUUQ7WUFDUkU7Ozs7Ozs7QUFHSixFQUFFO0dBM0JXSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J0bkN1c3RvbS9CdG5DdXN0b20udHN4PzczZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJQnRuUHJvcHMgfSBmcm9tIFwiLi9CdG5DdXN0b20uaW50ZXJmYWNlXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQnRuQ3VzdG9tLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUxvY2FsZVN0b3JhZ2UgfSBmcm9tIFwiaG9va3MvdXNlTG9jYWxlU3RvcmFnZVwiO1xuaW1wb3J0IHsgTW91c2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQnRuQ3VzdG9tID0gPElCdG4gZXh0ZW5kcyBJQnRuUHJvcHM+KHtcblx0Y2xhc3NOYW1lLFxuXHR2YWx1ZSxcblx0dHlwZSxcblx0Y2hpbGRyZW4sXG59OiBJQnRuKTogSlNYLkVsZW1lbnQgPT4ge1xuXHQvLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZUxvY2FsZVN0b3JhZ2UoXCJjb2xvck1vZGVcIik7XG5cdGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJkYXJrXCIpO1xuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cdFxuXHRjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcblx0XHRzZXRDb2xvcihjb2xvciA9PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlc1tjbGFzc05hbWVdLCB7XG5cdFx0XHRcdFtzdHlsZXNbXCJtYWluQnRuXCJdXTogdHlwZSA9PSBcIm1haW5cIixcblx0XHRcdFx0W3N0eWxlc1tcImRhcmstbW9kZS1idG4tLWFjdGl2ZVwiXV06IGNvbG9yID09IFwibGlnaHRcIixcblx0XHRcdH0pfVxuXHRcdFx0b25DbGljaz17KCkgPT4gKHR5cGUgPT0gXCJsaWdodE1vZGVcIiA/IHRvZ2dsZURhcmtNb2RlKCkgOiB1bmRlZmluZWQpfVxuXHRcdD5cblx0XHRcdHt0eXBlICYmIHZhbHVlfVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjbiIsInN0eWxlcyIsInVzZVN0YXRlIiwiQnRuQ3VzdG9tIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hpbGRyZW4iLCJjb2xvciIsInNldENvbG9yIiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURhcmtNb2RlIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
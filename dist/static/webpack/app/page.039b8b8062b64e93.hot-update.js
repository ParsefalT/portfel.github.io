"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx":
/*!********************************************!*\
  !*** ./components/BtnCustom/BtnCustom.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n            console.log(\"asds\");\n        } else {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n        // localStorage.setItem(\"colorModeBtn\", color);\n        // const value = localStorage.getItem(\"colorModeBtn\");\n        // togleMode(color);\n        // console.log(value);\n        }\n    }, [\n        color\n    ]);\n    const togleMode = (color)=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n        }\n        if (color == \"dark\") {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n        }\n    };\n    const toggleDarkMode = ()=>{\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: color == \"light\"\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"VP26jfiw0HrOEaGZdh03xMWIWWs=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTiwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztZQUNJUztRQUFiLE1BQU1DLFFBQU9ELFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsYUFBYSxDQUFDO1FBQ3JDLElBQUlKLFNBQVMsU0FBUztZQUNyQkcsaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUNwQkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2IsT0FBTztZQUNOTCxpQkFBQUEsMkJBQUFBLEtBQU1FLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDO1FBQ3ZCLCtDQUErQztRQUMvQyxzREFBc0Q7UUFDdEQsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN2QjtJQUNELEdBQUc7UUFBQ1Q7S0FBTTtJQUVWLE1BQU1VLFlBQVksQ0FBQ1Y7WUFDTEU7UUFBYixNQUFNQyxRQUFPRCxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVFLGFBQWEsQ0FBQztRQUNyQyxJQUFJSixTQUFTLFNBQVM7WUFDckJHLGlCQUFBQSwyQkFBQUEsS0FBTUUsU0FBUyxDQUFDQyxHQUFHLENBQUM7UUFDckI7UUFDQSxJQUFJTixTQUFTLFFBQVE7WUFDcEJHLGlCQUFBQSwyQkFBQUEsS0FBTUUsU0FBUyxDQUFDSSxNQUFNLENBQUM7UUFDeEI7SUFDRDtJQUVBLE1BQU1FLGlCQUFpQjtRQUN0QlYsU0FBU0QsU0FBUyxVQUFVLFNBQVM7SUFDdEM7SUFFQSxxQkFDQyw4REFBQ1k7UUFDQWhCLFdBQVdMLGlEQUFFQSxDQUFDQyw4REFBTSxDQUFDSSxVQUFVLEVBQUU7WUFDaEMsQ0FBQ0osc0VBQWlCLENBQUMsRUFBRU0sUUFBUTtZQUM3QixDQUFDTix1RkFBK0IsQ0FBQyxFQUFFUSxTQUFTO1FBQzdDO1FBQ0FhLFNBQVMsSUFBT2YsUUFBUSxjQUFjYSxtQkFBbUJHOztZQUV4RGhCLFFBQVFEO1lBQ1JFOzs7Ozs7O0FBR0osRUFBRTtHQWpEV0o7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdG5DdXN0b20vQnRuQ3VzdG9tLnRzeD83M2QyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgSUJ0blByb3BzIH0gZnJvbSBcIi4vQnRuQ3VzdG9tLmludGVyZmFjZVwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J0bkN1c3RvbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VMb2NhbGVTdG9yYWdlIH0gZnJvbSBcImhvb2tzL3VzZUxvY2FsZVN0b3JhZ2VcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEJ0bkN1c3RvbSA9IDxJQnRuIGV4dGVuZHMgSUJ0blByb3BzPih7XG5cdGNsYXNzTmFtZSxcblx0dmFsdWUsXG5cdHR5cGUsXG5cdGNoaWxkcmVuLFxufTogSUJ0bik6IEpTWC5FbGVtZW50ID0+IHtcblx0Ly8gY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VMb2NhbGVTdG9yYWdlKFwiY29sb3JNb2RlXCIpO1xuXHRjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcihcIiNnYW5nXCIpIGFzIEVsZW1lbnQ7XG5cdFx0aWYgKGNvbG9yID09IFwibGlnaHRcIikge1xuXHRcdFx0Ym9keT8uY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJhc2RzXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRib2R5Py5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIik7XG5cdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yTW9kZUJ0blwiLCBjb2xvcik7XG5cdFx0XHQvLyBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIpO1xuXHRcdFx0Ly8gdG9nbGVNb2RlKGNvbG9yKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcblx0XHR9XG5cdH0sIFtjb2xvcl0pO1xuXG5cdGNvbnN0IHRvZ2xlTW9kZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiI2dhbmdcIikgYXMgRWxlbWVudDtcblx0XHRpZiAoY29sb3IgPT0gXCJsaWdodFwiKSB7XG5cdFx0XHRib2R5Py5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5cdFx0fVxuXHRcdGlmIChjb2xvciA9PSBcImRhcmtcIikge1xuXHRcdFx0Ym9keT8uY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcblx0XHRzZXRDb2xvcihjb2xvciA9PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlc1tjbGFzc05hbWVdLCB7XG5cdFx0XHRcdFtzdHlsZXNbXCJtYWluQnRuXCJdXTogdHlwZSA9PSBcIm1haW5cIixcblx0XHRcdFx0W3N0eWxlc1tcImRhcmstbW9kZS1idG4tLWFjdGl2ZVwiXV06IGNvbG9yID09IFwibGlnaHRcIixcblx0XHRcdH0pfVxuXHRcdFx0b25DbGljaz17KCkgPT4gKHR5cGUgPT0gXCJsaWdodE1vZGVcIiA/IHRvZ2dsZURhcmtNb2RlKCkgOiB1bmRlZmluZWQpfVxuXHRcdD5cblx0XHRcdHt0eXBlICYmIHZhbHVlfVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjbiIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnRuQ3VzdG9tIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hpbGRyZW4iLCJjb2xvciIsInNldENvbG9yIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJ0b2dsZU1vZGUiLCJ0b2dnbGVEYXJrTW9kZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
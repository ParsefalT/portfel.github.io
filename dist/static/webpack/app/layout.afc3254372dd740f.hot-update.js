"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx":
/*!********************************************!*\
  !*** ./components/BtnCustom/BtnCustom.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color && localStorage.getItem(\"colorModeBtn\") === \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n            console.log(\"asds\");\n            return;\n        } else {\n        // localStorage.setItem(\"colorModeBtn\", color);\n        // const value = localStorage.getItem(\"colorModeBtn\");\n        // togleMode(color);\n        // console.log(value);\n        }\n    }, [\n        color\n    ]);\n    const togleMode = (color)=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n        }\n        if (color == \"dark\") {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n        }\n    };\n    const toggleDarkMode = ()=>{\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: color == \"light\"\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"VP26jfiw0HrOEaGZdh03xMWIWWs=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTiwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztZQUNJUztRQUFiLE1BQU1DLFFBQU9ELFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsYUFBYSxDQUFDO1FBQ3JDLElBQUlKLFNBQVNLLGFBQWFDLE9BQU8sQ0FBQyxvQkFBb0IsU0FBUztZQUM5REgsaUJBQUFBLDJCQUFBQSxLQUFNSSxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUNwQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRCxPQUFPO1FBQ04sK0NBQStDO1FBQy9DLHNEQUFzRDtRQUN0RCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3ZCO0lBQ0QsR0FBRztRQUFDVjtLQUFNO0lBRVYsTUFBTVcsWUFBWSxDQUFDWDtZQUNMRTtRQUFiLE1BQU1DLFFBQU9ELFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsYUFBYSxDQUFDO1FBQ3JDLElBQUlKLFNBQVMsU0FBUztZQUNyQkcsaUJBQUFBLDJCQUFBQSxLQUFNSSxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNyQjtRQUNBLElBQUlSLFNBQVMsUUFBUTtZQUNwQkcsaUJBQUFBLDJCQUFBQSxLQUFNSSxTQUFTLENBQUNLLE1BQU0sQ0FBQztRQUN4QjtJQUNEO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3RCWixTQUFTRCxTQUFTLFVBQVUsU0FBUztJQUN0QztJQUVBLHFCQUNDLDhEQUFDYztRQUNBbEIsV0FBV0wsaURBQUVBLENBQUNDLDhEQUFNLENBQUNJLFVBQVUsRUFBRTtZQUNoQyxDQUFDSixzRUFBaUIsQ0FBQyxFQUFFTSxRQUFRO1lBQzdCLENBQUNOLHVGQUErQixDQUFDLEVBQUVRLFNBQVM7UUFDN0M7UUFDQWUsU0FBUyxJQUFPakIsUUFBUSxjQUFjZSxtQkFBbUJHOztZQUV4RGxCLFFBQVFEO1lBQ1JFOzs7Ozs7O0FBR0osRUFBRTtHQWpEV0o7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdG5DdXN0b20vQnRuQ3VzdG9tLnRzeD83M2QyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgSUJ0blByb3BzIH0gZnJvbSBcIi4vQnRuQ3VzdG9tLmludGVyZmFjZVwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J0bkN1c3RvbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VMb2NhbGVTdG9yYWdlIH0gZnJvbSBcImhvb2tzL3VzZUxvY2FsZVN0b3JhZ2VcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEJ0bkN1c3RvbSA9IDxJQnRuIGV4dGVuZHMgSUJ0blByb3BzPih7XG5cdGNsYXNzTmFtZSxcblx0dmFsdWUsXG5cdHR5cGUsXG5cdGNoaWxkcmVuLFxufTogSUJ0bik6IEpTWC5FbGVtZW50ID0+IHtcblx0Ly8gY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VMb2NhbGVTdG9yYWdlKFwiY29sb3JNb2RlXCIpO1xuXHRjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcihcIiNnYW5nXCIpIGFzIEVsZW1lbnQ7XG5cdFx0aWYgKGNvbG9yICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIpID09PSBcImxpZ2h0XCIpIHtcblx0XHRcdGJvZHk/LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiYXNkc1wiKTtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvck1vZGVCdG5cIiwgY29sb3IpO1xuXHRcdFx0Ly8gY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yTW9kZUJ0blwiKTtcblx0XHRcdC8vIHRvZ2xlTW9kZShjb2xvcik7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0fVxuXHR9LCBbY29sb3JdKTtcblxuXHRjb25zdCB0b2dsZU1vZGUgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcihcIiNnYW5nXCIpIGFzIEVsZW1lbnQ7XG5cdFx0aWYgKGNvbG9yID09IFwibGlnaHRcIikge1xuXHRcdFx0Ym9keT8uY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuXHRcdH1cblx0XHRpZiAoY29sb3IgPT0gXCJkYXJrXCIpIHtcblx0XHRcdGJvZHk/LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG5cdFx0c2V0Q29sb3IoY29sb3IgPT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXNbY2xhc3NOYW1lXSwge1xuXHRcdFx0XHRbc3R5bGVzW1wibWFpbkJ0blwiXV06IHR5cGUgPT0gXCJtYWluXCIsXG5cdFx0XHRcdFtzdHlsZXNbXCJkYXJrLW1vZGUtYnRuLS1hY3RpdmVcIl1dOiBjb2xvciA9PSBcImxpZ2h0XCIsXG5cdFx0XHR9KX1cblx0XHRcdG9uQ2xpY2s9eygpID0+ICh0eXBlID09IFwibGlnaHRNb2RlXCIgPyB0b2dnbGVEYXJrTW9kZSgpIDogdW5kZWZpbmVkKX1cblx0XHQ+XG5cdFx0XHR7dHlwZSAmJiB2YWx1ZX1cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiY24iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ0bkN1c3RvbSIsImNsYXNzTmFtZSIsInZhbHVlIiwidHlwZSIsImNoaWxkcmVuIiwiY29sb3IiLCJzZXRDb2xvciIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRvZ2xlTW9kZSIsInJlbW92ZSIsInRvZ2dsZURhcmtNb2RlIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n            localStorage.setItem(\"colorModeBtn\", color);\n        } else {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n            localStorage.setItem(\"colorModeBtn\", color);\n        // const value = localStorage.getItem(\"colorModeBtn\");\n        // togleMode(color);\n        // console.log(value);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setState(!state);\n        const value = localStorage.getItem(\"colorModeBtn\");\n        return setColor(value);\n    }, [\n        color\n    ]);\n    const togleMode = (color)=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n        }\n        if (color == \"dark\") {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n        }\n    };\n    const toggleDarkMode = ()=>{\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: state\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"PvX4TlYs5vBUpw0sy2n3eDrgVmQ=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTiwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQTtJQUNsQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkNELGdEQUFTQSxDQUFDO1lBQ0lXO1FBQWIsTUFBTUMsUUFBT0QsWUFBQUEsc0JBQUFBLGdDQUFBQSxVQUFVRSxhQUFhLENBQUM7UUFDckMsSUFBSU4sU0FBUyxTQUFTO1lBQ3JCSyxpQkFBQUEsMkJBQUFBLEtBQU1FLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1lBQ3BCQyxhQUFhQyxPQUFPLENBQUMsZ0JBQWdCVjtRQUN0QyxPQUFPO1lBQ05LLGlCQUFBQSwyQkFBQUEsS0FBTUUsU0FBUyxDQUFDSSxNQUFNLENBQUM7WUFDdkJGLGFBQWFDLE9BQU8sQ0FBQyxnQkFBZ0JWO1FBQ3JDLHNEQUFzRDtRQUN0RCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3ZCO0lBQ0QsR0FBRyxFQUFFO0lBRUxQLGdEQUFTQSxDQUFDO1FBQ1RVLFNBQVMsQ0FBQ0Q7UUFDVixNQUFNTCxRQUFRWSxhQUFhRyxPQUFPLENBQUM7UUFDbkMsT0FBT1gsU0FBU0o7SUFDakIsR0FBRztRQUFDRztLQUFNO0lBQ1YsTUFBTWEsWUFBWSxDQUFDYjtZQUNMSTtRQUFiLE1BQU1DLFFBQU9ELFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsYUFBYSxDQUFDO1FBQ3JDLElBQUlOLFNBQVMsU0FBUztZQUNyQkssaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNyQjtRQUNBLElBQUlSLFNBQVMsUUFBUTtZQUNwQkssaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNJLE1BQU0sQ0FBQztRQUN4QjtJQUNEO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ3RCYixTQUFTRCxTQUFTLFVBQVUsU0FBUztJQUN0QztJQUVBLHFCQUNDLDhEQUFDZTtRQUNBbkIsV0FBV0wsaURBQUVBLENBQUNDLDhEQUFNLENBQUNJLFVBQVUsRUFBRTtZQUNoQyxDQUFDSixzRUFBaUIsQ0FBQyxFQUFFTSxRQUFRO1lBQzdCLENBQUNOLHVGQUErQixDQUFDLEVBQUVVO1FBQ3BDO1FBQ0FjLFNBQVMsSUFBT2xCLFFBQVEsY0FBY2dCLG1CQUFtQkc7O1lBRXhEbkIsUUFBUUQ7WUFDUkU7Ozs7Ozs7QUFHSixFQUFFO0dBdERXSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J0bkN1c3RvbS9CdG5DdXN0b20udHN4PzczZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJQnRuUHJvcHMgfSBmcm9tIFwiLi9CdG5DdXN0b20uaW50ZXJmYWNlXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQnRuQ3VzdG9tLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUxvY2FsZVN0b3JhZ2UgfSBmcm9tIFwiaG9va3MvdXNlTG9jYWxlU3RvcmFnZVwiO1xuaW1wb3J0IHsgTW91c2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQnRuQ3VzdG9tID0gPElCdG4gZXh0ZW5kcyBJQnRuUHJvcHM+KHtcblx0Y2xhc3NOYW1lLFxuXHR2YWx1ZSxcblx0dHlwZSxcblx0Y2hpbGRyZW4sXG59OiBJQnRuKTogSlNYLkVsZW1lbnQgPT4ge1xuXHQvLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZUxvY2FsZVN0b3JhZ2UoXCJjb2xvck1vZGVcIik7XG5cdGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiI2dhbmdcIikgYXMgRWxlbWVudDtcblx0XHRpZiAoY29sb3IgPT0gXCJsaWdodFwiKSB7XG5cdFx0XHRib2R5Py5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yTW9kZUJ0blwiLCBjb2xvcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJvZHk/LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIsIGNvbG9yKTtcblx0XHRcdC8vIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvck1vZGVCdG5cIik7XG5cdFx0XHQvLyB0b2dsZU1vZGUoY29sb3IpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpO1xuXHRcdH1cblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0U3RhdGUoIXN0YXRlKTtcblx0XHRjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIpO1xuXHRcdHJldHVybiBzZXRDb2xvcih2YWx1ZSk7XG5cdH0sIFtjb2xvcl0pO1xuXHRjb25zdCB0b2dsZU1vZGUgPSAoY29sb3I6IHN0cmluZykgPT4ge1xuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcihcIiNnYW5nXCIpIGFzIEVsZW1lbnQ7XG5cdFx0aWYgKGNvbG9yID09IFwibGlnaHRcIikge1xuXHRcdFx0Ym9keT8uY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuXHRcdH1cblx0XHRpZiAoY29sb3IgPT0gXCJkYXJrXCIpIHtcblx0XHRcdGJvZHk/LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG5cdFx0c2V0Q29sb3IoY29sb3IgPT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXNbY2xhc3NOYW1lXSwge1xuXHRcdFx0XHRbc3R5bGVzW1wibWFpbkJ0blwiXV06IHR5cGUgPT0gXCJtYWluXCIsXG5cdFx0XHRcdFtzdHlsZXNbXCJkYXJrLW1vZGUtYnRuLS1hY3RpdmVcIl1dOiBzdGF0ZSxcblx0XHRcdH0pfVxuXHRcdFx0b25DbGljaz17KCkgPT4gKHR5cGUgPT0gXCJsaWdodE1vZGVcIiA/IHRvZ2dsZURhcmtNb2RlKCkgOiB1bmRlZmluZWQpfVxuXHRcdD5cblx0XHRcdHt0eXBlICYmIHZhbHVlfVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJjbiIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnRuQ3VzdG9tIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hpbGRyZW4iLCJjb2xvciIsInNldENvbG9yIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlIiwiZ2V0SXRlbSIsInRvZ2xlTW9kZSIsInRvZ2dsZURhcmtNb2RlIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
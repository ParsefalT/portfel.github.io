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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useLocaleStorage */ \"(app-pages-browser)/./hooks/useLocaleStorage.ts\");\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    const [color, setColor] = (0,hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_3__.useLocaleStorage)(\"colorMode\", \"dark\");\n    const toggleDarkMode = ()=>{\n        if (typeof setColor === \"function\") {\n            setColor((color)=>{\n                return color == \"light\" ? \"dark\" : \"light\";\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (color == \"light\") {\n            document.body.classList.add(\"light\");\n        } else {\n            document.body.classList.remove(\"light\");\n        }\n    }, [\n        color\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default())[className], {\n            // [styles[\"mainBtn\"]]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"dark-mode-btn--active\"])]: color === \"light\"\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: children\n    }, void 0, false, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"4Fwvuqb7GGJ4474EkFa1IGTLuJo=\", false, function() {\n    return [\n        hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_3__.useLocaleStorage\n    ];\n});\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFa0M7QUFDTjtBQUNnQjtBQUNjO0FBRW5ELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1Asd0VBQWdCQSxDQUFDLGFBQWE7SUFFeEQsTUFBTVEsaUJBQWlCO1FBQ3RCLElBQUksT0FBT0QsYUFBYSxZQUFZO1lBQ25DQSxTQUFTLENBQUNEO2dCQUNULE9BQU9BLFNBQVMsVUFBVSxTQUFTO1lBQ3BDO1FBQ0Q7SUFDRDtJQUVBVCxnREFBU0EsQ0FBQztRQUNULElBQUlTLFNBQVMsU0FBUztZQUNyQkcsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUM3QixPQUFPO1lBQ05ILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDaEM7SUFDRCxHQUFHO1FBQUNQO0tBQU07SUFFVixxQkFDQyw4REFBQ1E7UUFDQVosV0FBV0osaURBQUVBLENBQUNDLDhEQUFNLENBQUNHLFVBQVUsRUFBRTtZQUNoQyx1Q0FBdUM7WUFDdkMsQ0FBQ0gsdUZBQStCLENBQUMsRUFBRU8sVUFBVTtRQUM5QztRQUNBUyxTQUFTLElBQU9YLFFBQVEsY0FBY0ksbUJBQW1CUTtrQkFHeERYOzs7Ozs7QUFHSixFQUFFO0dBcENXSjs7UUFNY0Qsb0VBQWdCQTs7O0tBTjlCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J0bkN1c3RvbS9CdG5DdXN0b20udHN4PzczZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJQnRuUHJvcHMgfSBmcm9tIFwiLi9CdG5DdXN0b20uaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdG5DdXN0b20ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlTG9jYWxlU3RvcmFnZSB9IGZyb20gXCJob29rcy91c2VMb2NhbGVTdG9yYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBCdG5DdXN0b20gPSA8SUJ0biBleHRlbmRzIElCdG5Qcm9wcz4oe1xuXHRjbGFzc05hbWUsXG5cdHZhbHVlLFxuXHR0eXBlLFxuXHRjaGlsZHJlbixcbn06IElCdG4pOiBKU1guRWxlbWVudCA9PiB7XG5cdGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlTG9jYWxlU3RvcmFnZShcImNvbG9yTW9kZVwiLCBcImRhcmtcIik7XG5cblx0Y29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBzZXRDb2xvciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRzZXRDb2xvcigoY29sb3I6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBjb2xvciA9PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChjb2xvciA9PSBcImxpZ2h0XCIpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcblx0XHR9XG5cdH0sIFtjb2xvcl0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXNbY2xhc3NOYW1lXSwge1xuXHRcdFx0XHQvLyBbc3R5bGVzW1wibWFpbkJ0blwiXV06IHR5cGUgPT0gXCJtYWluXCIsXG5cdFx0XHRcdFtzdHlsZXNbXCJkYXJrLW1vZGUtYnRuLS1hY3RpdmVcIl1dOiBjb2xvciA9PT0gXCJsaWdodFwiLFxuXHRcdFx0fSl9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiAodHlwZSA9PSBcImxpZ2h0TW9kZVwiID8gdG9nZ2xlRGFya01vZGUoKSA6IHVuZGVmaW5lZCl9XG5cdFx0PlxuXHRcdFx0ey8qIHt0eXBlICYmIHZhbHVlfSAqL31cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiY24iLCJzdHlsZXMiLCJ1c2VMb2NhbGVTdG9yYWdlIiwiQnRuQ3VzdG9tIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hpbGRyZW4iLCJjb2xvciIsInNldENvbG9yIiwidG9nZ2xlRGFya01vZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJidXR0b24iLCJvbkNsaWNrIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
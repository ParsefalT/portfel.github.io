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

/***/ "(app-pages-browser)/./context/ThemeContext.js":
/*!*********************************!*\
  !*** ./context/ThemeContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: function() { return /* binding */ ThemeProvider; },\n/* harmony export */   useTheme: function() { return /* binding */ useTheme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// /components/ThemeContext.js\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useTheme = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n};\n_s(useTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst ThemeProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    if (type) (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const localTheme = window.localStorage.getItem(\"theme\");\n        if (localTheme) {\n            setTheme(localTheme);\n        }\n        if (localTheme === \"light\") {\n            document.body.classList.add(\"light\");\n        } else {\n            document.body.classList.remove(\"light\");\n        }\n    }, [\n        theme\n    ]);\n    const toggleTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n        window.localStorage.setItem(\"theme\", newTheme);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/srv/http/test-base/context/ThemeContext.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(ThemeProvider, \"RKiDUSFHOAYc5/BNBWu+fcPvj04=\");\n_c = ThemeProvider;\nvar _c;\n$RefreshReg$(_c, \"ThemeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvVGhlbWVDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOEJBQThCOzs7QUFDK0M7QUFFN0UsTUFBTUksNkJBQWVKLG9EQUFhQTtBQUUzQixNQUFNSyxXQUFXOztJQUFNSixPQUFBQSxpREFBVUEsQ0FBQ0c7QUFBWSxFQUFFO0dBQTFDQztBQUVOLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDekMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQTtJQUVsQyxJQUFHTyxNQUVIUixzREFBZUEsQ0FBQztRQUNmLE1BQU1TLGFBQWFDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQy9DLElBQUlILFlBQVk7WUFDZkYsU0FBU0U7UUFDVjtRQUNBLElBQUlBLGVBQWUsU0FBUztZQUMzQkksU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUM3QixPQUFPO1lBQ05ILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDaEM7SUFDRCxHQUFHO1FBQUNYO0tBQU07SUFFVixNQUFNWSxjQUFjO1FBQ25CLE1BQU1DLFdBQVdiLFVBQVUsVUFBVSxTQUFTO1FBQzlDQyxTQUFTWTtRQUNUVCxPQUFPQyxZQUFZLENBQUNTLE9BQU8sQ0FBQyxTQUFTRDtJQUN0QztJQUVBLHFCQUFPLDhEQUFDakIsYUFBYW1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBT1k7UUFBWTtrQkFBSWI7Ozs7OztBQUMvRCxFQUFFO0lBeEJXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1RoZW1lQ29udGV4dC5qcz82NjM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC9jb21wb25lbnRzL1RoZW1lQ29udGV4dC5qc1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IFRoZW1lUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoKTtcblxuXHRpZih0eXBlKVxuXG5cdHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbG9jYWxUaGVtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuXHRcdGlmIChsb2NhbFRoZW1lKSB7XG5cdFx0XHRzZXRUaGVtZShsb2NhbFRoZW1lKTtcblx0XHR9XG5cdFx0aWYgKGxvY2FsVGhlbWUgPT09IFwibGlnaHRcIikge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuXHRcdH1cblx0fSwgW3RoZW1lXSk7XG5cblx0Y29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3VGhlbWUgPSB0aGVtZSA9PT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG5cdFx0c2V0VGhlbWUobmV3VGhlbWUpO1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcblx0fTtcblxuXHRyZXR1cm4gPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgdG9nZ2xlVGhlbWUgfX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPjtcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRoZW1lQ29udGV4dCIsInVzZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsImNoaWxkcmVuIiwidGhlbWUiLCJzZXRUaGVtZSIsInR5cGUiLCJsb2NhbFRoZW1lIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZVRoZW1lIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/ThemeContext.js\n"));

/***/ })

});
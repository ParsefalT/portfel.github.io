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

/***/ "(app-pages-browser)/./context/ThemeContext.js":
/*!*********************************!*\
  !*** ./context/ThemeContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeProvider: function() { return /* binding */ ThemeProvider; },\n/* harmony export */   useTheme: function() { return /* binding */ useTheme; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// /components/ThemeContext.js\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useTheme = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n};\n_s(useTheme, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst ThemeProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>window.localStorage.getItem(\"theme\"));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const localTheme = window.localStorage.getItem(\"theme\");\n        if (localTheme) {\n            setTheme(localTheme);\n        }\n        if (localTheme === \"light\") {\n            document.body.classList.add(\"light\");\n        } else {\n            document.body.classList.remove(\"light\");\n        }\n    }, [\n        theme\n    ]);\n    const toggleTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n        window.localStorage.setItem(\"theme\", newTheme);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            theme,\n            toggleTheme\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/srv/http/test-base/context/ThemeContext.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s1(ThemeProvider, \"X0WwVfdZ0sd6kCwjTC+brL3xTRc=\");\n_c = ThemeProvider;\nvar _c;\n$RefreshReg$(_c, \"ThemeProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRleHQvVGhlbWVDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOEJBQThCOzs7QUFDK0M7QUFFN0UsTUFBTUksNkJBQWVKLG9EQUFhQTtBQUUzQixNQUFNSyxXQUFXOztJQUFNSixPQUFBQSxpREFBVUEsQ0FBQ0c7QUFBWSxFQUFFO0dBQTFDQztBQUVOLE1BQU1DLGdCQUFnQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDekMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDLElBQU1PLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO0lBRXJFVixzREFBZUEsQ0FBQztRQUNmLE1BQU1XLGFBQWFILE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQy9DLElBQUlDLFlBQVk7WUFDZkosU0FBU0k7UUFDVjtRQUNBLElBQUlBLGVBQWUsU0FBUztZQUMzQkMsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUM3QixPQUFPO1lBQ05ILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDaEM7SUFDRCxHQUFHO1FBQUNWO0tBQU07SUFFVixNQUFNVyxjQUFjO1FBQ25CLE1BQU1DLFdBQVdaLFVBQVUsVUFBVSxTQUFTO1FBQzlDQyxTQUFTVztRQUNUVixPQUFPQyxZQUFZLENBQUNVLE9BQU8sQ0FBQyxTQUFTRDtJQUN0QztJQUVBLHFCQUFPLDhEQUFDaEIsYUFBYWtCLFFBQVE7UUFBQ0MsT0FBTztZQUFFZjtZQUFPVztRQUFZO2tCQUFJWjs7Ozs7O0FBQy9ELEVBQUU7SUF0QldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvVGhlbWVDb250ZXh0LmpzPzY2MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gL2NvbXBvbmVudHMvVGhlbWVDb250ZXh0LmpzXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgVGhlbWVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgoKSA9PiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSk7XG5cblx0dXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBsb2NhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG5cdFx0aWYgKGxvY2FsVGhlbWUpIHtcblx0XHRcdHNldFRoZW1lKGxvY2FsVGhlbWUpO1xuXHRcdH1cblx0XHRpZiAobG9jYWxUaGVtZSA9PT0gXCJsaWdodFwiKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIik7XG5cdFx0fVxuXHR9LCBbdGhlbWVdKTtcblxuXHRjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdUaGVtZSA9IHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcblx0XHRzZXRUaGVtZShuZXdUaGVtZSk7XG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3VGhlbWUpO1xuXHR9O1xuXG5cdHJldHVybiA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCB0b2dnbGVUaGVtZSB9fT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUxheW91dEVmZmVjdCIsInVzZVN0YXRlIiwiVGhlbWVDb250ZXh0IiwidXNlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsVGhlbWUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGVUaGVtZSIsIm5ld1RoZW1lIiwic2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./context/ThemeContext.js\n"));

/***/ })

});
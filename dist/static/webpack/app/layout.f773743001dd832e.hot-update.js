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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"dark-mode-btn--active\"])]: color == \"light\"\n        }),\n        onClick: (e)=>type == \"lightMode\" ? switchTheme(e) : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, undefined);\n}; // // const [color, setColor] = useLocaleStorage(\"colorMode\");\n // const [color, setColor] = useState(\"dark\");\n // useEffect(() => {\n // \tlocalStorage.setItem(\"colorModeBtn\", color);\n // \tconst value = localStorage.getItem(\"colorModeBtn\");\n // \tconsole.log(value);\n // }, [color]);\n // // const togleMode = () => {\n // // \tconst body = document?.querySelector(\"#gang\") as Element;\n // // \tif (color == \"light\") {\n // // \t\tbody?.classList.add(\"light\");\n // // \t}\n // // \tif (color == \"dark\") {\n // // \t\tbody?.classList.remove(\"light\");\n // // \t}\n // // };\n // const toggleDarkMode = () => {\n // \tsetColor(color == \"light\" ? \"dark\" : \"light\");\n // };\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUlyQyxNQUFNRSxZQUFZO1FBQXlCLEVBQ2pEQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxRQUFRLEVBQ0Y7SUFHTixxQkFDQyw4REFBQ0M7UUFDQUosV0FBV0gsaURBQUVBLENBQUNDLDhEQUFNLENBQUNFLFVBQVUsRUFBRTtZQUNoQyxDQUFDRixzRUFBaUIsQ0FBQyxFQUFFSSxRQUFRO1lBQzdCLENBQUNKLHVGQUErQixDQUFDLEVBQUVPLFNBQVM7UUFDN0M7UUFDQUMsU0FBUyxDQUFDQyxJQUFPTCxRQUFRLGNBQWNNLFlBQVlELEtBQUtFOztZQUV2RFAsUUFBUUQ7WUFDUkU7Ozs7Ozs7QUFHSixFQUFFLENBQ0YsOERBQThEO0NBQzlELDhDQUE4QztDQUU5QyxvQkFBb0I7Q0FDcEIsZ0RBQWdEO0NBQ2hELHVEQUF1RDtDQUN2RCx1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLCtCQUErQjtDQUMvQixnRUFBZ0U7Q0FDaEUsOEJBQThCO0NBQzlCLHFDQUFxQztDQUNyQyxRQUFRO0NBQ1IsNkJBQTZCO0NBQzdCLHdDQUF3QztDQUN4QyxRQUFRO0NBQ1IsUUFBUTtDQUVSLGlDQUFpQztDQUNqQyxrREFBa0Q7Q0FDbEQsS0FBSztLQXpDUUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdG5DdXN0b20vQnRuQ3VzdG9tLnRzeD83M2QyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgSUJ0blByb3BzIH0gZnJvbSBcIi4vQnRuQ3VzdG9tLmludGVyZmFjZVwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J0bkN1c3RvbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRJdGVtU3RvcmFnZSwgdXNlTG9jYWxlU3RvcmFnZSB9IGZyb20gXCJob29rcy91c2VMb2NhbGVTdG9yYWdlXCI7XG5pbXBvcnQgeyBNb3VzZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBCdG5DdXN0b20gPSA8SUJ0biBleHRlbmRzIElCdG5Qcm9wcz4oe1xuXHRjbGFzc05hbWUsXG5cdHZhbHVlLFxuXHR0eXBlLFxuXHRjaGlsZHJlbixcbn06IElCdG4pOiBKU1guRWxlbWVudCA9PiB7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzW2NsYXNzTmFtZV0sIHtcblx0XHRcdFx0W3N0eWxlc1tcIm1haW5CdG5cIl1dOiB0eXBlID09IFwibWFpblwiLFxuXHRcdFx0XHRbc3R5bGVzW1wiZGFyay1tb2RlLWJ0bi0tYWN0aXZlXCJdXTogY29sb3IgPT0gXCJsaWdodFwiLFxuXHRcdFx0fSl9XG5cdFx0XHRvbkNsaWNrPXsoZSkgPT4gKHR5cGUgPT0gXCJsaWdodE1vZGVcIiA/IHN3aXRjaFRoZW1lKGUpIDogdW5kZWZpbmVkKX1cblx0XHQ+XG5cdFx0XHR7dHlwZSAmJiB2YWx1ZX1cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG4vLyAvLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZUxvY2FsZVN0b3JhZ2UoXCJjb2xvck1vZGVcIik7XG4vLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcblxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vIFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvck1vZGVCdG5cIiwgY29sb3IpO1xuLy8gXHRjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIpO1xuLy8gXHRjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyB9LCBbY29sb3JdKTtcbi8vIC8vIGNvbnN0IHRvZ2xlTW9kZSA9ICgpID0+IHtcbi8vIC8vIFx0Y29uc3QgYm9keSA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiI2dhbmdcIikgYXMgRWxlbWVudDtcbi8vIC8vIFx0aWYgKGNvbG9yID09IFwibGlnaHRcIikge1xuLy8gLy8gXHRcdGJvZHk/LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcbi8vIC8vIFx0fVxuLy8gLy8gXHRpZiAoY29sb3IgPT0gXCJkYXJrXCIpIHtcbi8vIC8vIFx0XHRib2R5Py5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIik7XG4vLyAvLyBcdH1cbi8vIC8vIH07XG5cbi8vIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuLy8gXHRzZXRDb2xvcihjb2xvciA9PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG4vLyB9O1xuIl0sIm5hbWVzIjpbImNuIiwic3R5bGVzIiwiQnRuQ3VzdG9tIiwiY2xhc3NOYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hpbGRyZW4iLCJidXR0b24iLCJjb2xvciIsIm9uQ2xpY2siLCJlIiwic3dpdGNoVGhlbWUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks/useLocaleStorage */ \"(app-pages-browser)/./hooks/useLocaleStorage.ts\");\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    const [color, setColor] = (0,hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_3__.useLocaleStorage)(\"colorMode\", \"dark\");\n    const toggleDarkMode = ()=>{\n        if (typeof setColor === \"function\") {\n            setColor((color)=>{\n                return color == \"light\" ? \"dark\" : \"light\";\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (color == \"light\") {\n            document.body.classList.add(\"light\");\n        } else {\n            document.body.classList.remove(\"light\");\n        }\n    }, [\n        color\n    ]);\n    return(// <button\n    // \tclassName={cn(styles[className], {\n    // \t\t[styles[\"mainBtn\"]]: type == \"main\",\n    // \t\t[styles[\"dark-mode-btn--active\"]]: color === \"light\",\n    // \t})}\n    // \tonClick={() => (type == \"lightMode\" ? toggleDarkMode() : undefined)}\n    // >\n    // \t{type && value}\n    // \t{children}\n    // </button>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"dark-mode-btn--active\"])]: color === \"light\"\n        }),\n        onClick: toggleDarkMode,\n        children: children\n    }, void 0, false, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, undefined));\n};\n_s(BtnCustom, \"4Fwvuqb7GGJ4474EkFa1IGTLuJo=\", false, function() {\n    return [\n        hooks_useLocaleStorage__WEBPACK_IMPORTED_MODULE_3__.useLocaleStorage\n    ];\n});\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFa0M7QUFDTjtBQUNnQjtBQUNjO0FBRW5ELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1Asd0VBQWdCQSxDQUFDLGFBQWE7SUFFeEQsTUFBTVEsaUJBQWlCO1FBQ3RCLElBQUksT0FBT0QsYUFBYSxZQUFZO1lBQ25DQSxTQUFTLENBQUNEO2dCQUNULE9BQU9BLFNBQVMsVUFBVSxTQUFTO1lBQ3BDO1FBQ0Q7SUFDRDtJQUVBVCxnREFBU0EsQ0FBQztRQUNULElBQUlTLFNBQVMsU0FBUztZQUNyQkcsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUM3QixPQUFPO1lBQ05ILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDaEM7SUFDRCxHQUFHO1FBQUNQO0tBQU07SUFFVixPQUNDLFVBQVU7SUFDVixzQ0FBc0M7SUFDdEMseUNBQXlDO0lBQ3pDLDBEQUEwRDtJQUMxRCxPQUFPO0lBQ1Asd0VBQXdFO0lBQ3hFLElBQUk7SUFDSixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7a0JBQ1osOERBQUNRO1FBQ0FaLFdBQVdKLGlEQUFFQSxDQUFDQyw4REFBTSxDQUFDRyxVQUFVLEVBQUU7WUFDaEMsQ0FBQ0gsdUZBQStCLENBQUMsRUFBRU8sVUFBVTtRQUM5QztRQUNBUyxTQUFTUDtrQkFHUkg7Ozs7OztBQUdKLEVBQUU7R0E3Q1dKOztRQU1jRCxvRUFBZ0JBOzs7S0FOOUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3g/NzNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IElCdG5Qcm9wcyB9IGZyb20gXCIuL0J0bkN1c3RvbS5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0J0bkN1c3RvbS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VMb2NhbGVTdG9yYWdlIH0gZnJvbSBcImhvb2tzL3VzZUxvY2FsZVN0b3JhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IEJ0bkN1c3RvbSA9IDxJQnRuIGV4dGVuZHMgSUJ0blByb3BzPih7XG5cdGNsYXNzTmFtZSxcblx0dmFsdWUsXG5cdHR5cGUsXG5cdGNoaWxkcmVuLFxufTogSUJ0bik6IEpTWC5FbGVtZW50ID0+IHtcblx0Y29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VMb2NhbGVTdG9yYWdlKFwiY29sb3JNb2RlXCIsIFwiZGFya1wiKTtcblxuXHRjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcblx0XHRpZiAodHlwZW9mIHNldENvbG9yID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHNldENvbG9yKChjb2xvcjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGNvbG9yID09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGNvbG9yID09IFwibGlnaHRcIikge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuXHRcdH1cblx0fSwgW2NvbG9yXSk7XG5cblx0cmV0dXJuIChcblx0XHQvLyA8YnV0dG9uXG5cdFx0Ly8gXHRjbGFzc05hbWU9e2NuKHN0eWxlc1tjbGFzc05hbWVdLCB7XG5cdFx0Ly8gXHRcdFtzdHlsZXNbXCJtYWluQnRuXCJdXTogdHlwZSA9PSBcIm1haW5cIixcblx0XHQvLyBcdFx0W3N0eWxlc1tcImRhcmstbW9kZS1idG4tLWFjdGl2ZVwiXV06IGNvbG9yID09PSBcImxpZ2h0XCIsXG5cdFx0Ly8gXHR9KX1cblx0XHQvLyBcdG9uQ2xpY2s9eygpID0+ICh0eXBlID09IFwibGlnaHRNb2RlXCIgPyB0b2dnbGVEYXJrTW9kZSgpIDogdW5kZWZpbmVkKX1cblx0XHQvLyA+XG5cdFx0Ly8gXHR7dHlwZSAmJiB2YWx1ZX1cblx0XHQvLyBcdHtjaGlsZHJlbn1cblx0XHQvLyA8L2J1dHRvbj5cblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlc1tjbGFzc05hbWVdLCB7XG5cdFx0XHRcdFtzdHlsZXNbXCJkYXJrLW1vZGUtYnRuLS1hY3RpdmVcIl1dOiBjb2xvciA9PT0gXCJsaWdodFwiLFxuXHRcdFx0fSl9XG5cdFx0XHRvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX1cblx0XHQ+XG5cdFx0XHR7Lyoge3R5cGUgJiYgdmFsdWV9ICovfVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJjbiIsInN0eWxlcyIsInVzZUxvY2FsZVN0b3JhZ2UiLCJCdG5DdXN0b20iLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInR5cGUiLCJjaGlsZHJlbiIsImNvbG9yIiwic2V0Q29sb3IiLCJ0b2dnbGVEYXJrTW9kZSIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
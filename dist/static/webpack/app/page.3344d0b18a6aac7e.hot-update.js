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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n            console.log(\"asds\");\n            return;\n        } else {\n        // localStorage.setItem(\"colorModeBtn\", color);\n        // const value = localStorage.getItem(\"colorModeBtn\");\n        // togleMode(color);\n        // console.log(value);\n        }\n    }, [\n        color\n    ]);\n    const togleMode = (color)=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n        }\n        if (color == \"dark\") {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n        }\n    };\n    const toggleDarkMode = ()=>{\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: color == \"light\"\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 46,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"VP26jfiw0HrOEaGZdh03xMWIWWs=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTiwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztZQUNJUztRQUFiLE1BQU1DLFFBQU9ELFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsYUFBYSxDQUFDO1FBQ3JDLElBQUlKLFNBQVMsU0FBUztZQUNyQkcsaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUNwQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRCxPQUFPO1FBQ04sK0NBQStDO1FBQy9DLHNEQUFzRDtRQUN0RCxvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3ZCO0lBQ0QsR0FBRztRQUFDUjtLQUFNO0lBRVYsTUFBTVMsWUFBWSxDQUFDVDtZQUNMRTtRQUFiLE1BQU1DLFFBQU9ELFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVUUsYUFBYSxDQUFDO1FBQ3JDLElBQUlKLFNBQVMsU0FBUztZQUNyQkcsaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNyQjtRQUNBLElBQUlOLFNBQVMsUUFBUTtZQUNwQkcsaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNLLE1BQU0sQ0FBQztRQUN4QjtJQUNEO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3RCVixTQUFTRCxTQUFTLFVBQVUsU0FBUztJQUN0QztJQUVBLHFCQUNDLDhEQUFDWTtRQUNBaEIsV0FBV0wsaURBQUVBLENBQUNDLDhEQUFNLENBQUNJLFVBQVUsRUFBRTtZQUNoQyxDQUFDSixzRUFBaUIsQ0FBQyxFQUFFTSxRQUFRO1lBQzdCLENBQUNOLHVGQUErQixDQUFDLEVBQUVRLFNBQVM7UUFDN0M7UUFDQWEsU0FBUyxJQUFPZixRQUFRLGNBQWNhLG1CQUFtQkc7O1lBRXhEaEIsUUFBUUQ7WUFDUkU7Ozs7Ozs7QUFHSixFQUFFO0dBakRXSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J0bkN1c3RvbS9CdG5DdXN0b20udHN4PzczZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJQnRuUHJvcHMgfSBmcm9tIFwiLi9CdG5DdXN0b20uaW50ZXJmYWNlXCI7XG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQnRuQ3VzdG9tLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUxvY2FsZVN0b3JhZ2UgfSBmcm9tIFwiaG9va3MvdXNlTG9jYWxlU3RvcmFnZVwiO1xuaW1wb3J0IHsgTW91c2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQnRuQ3VzdG9tID0gPElCdG4gZXh0ZW5kcyBJQnRuUHJvcHM+KHtcblx0Y2xhc3NOYW1lLFxuXHR2YWx1ZSxcblx0dHlwZSxcblx0Y2hpbGRyZW4sXG59OiBJQnRuKTogSlNYLkVsZW1lbnQgPT4ge1xuXHQvLyBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZUxvY2FsZVN0b3JhZ2UoXCJjb2xvck1vZGVcIik7XG5cdGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJkYXJrXCIpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiI2dhbmdcIikgYXMgRWxlbWVudDtcblx0XHRpZiAoY29sb3IgPT0gXCJsaWdodFwiKSB7XG5cdFx0XHRib2R5Py5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhcImFzZHNcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIsIGNvbG9yKTtcblx0XHRcdC8vIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvck1vZGVCdG5cIik7XG5cdFx0XHQvLyB0b2dsZU1vZGUoY29sb3IpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpO1xuXHRcdH1cblx0fSwgW2NvbG9yXSk7XG5cblx0Y29uc3QgdG9nbGVNb2RlID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcblx0XHRjb25zdCBib2R5ID0gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FuZ1wiKSBhcyBFbGVtZW50O1xuXHRcdGlmIChjb2xvciA9PSBcImxpZ2h0XCIpIHtcblx0XHRcdGJvZHk/LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcblx0XHR9XG5cdFx0aWYgKGNvbG9yID09IFwiZGFya1wiKSB7XG5cdFx0XHRib2R5Py5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIik7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuXHRcdHNldENvbG9yKGNvbG9yID09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzW2NsYXNzTmFtZV0sIHtcblx0XHRcdFx0W3N0eWxlc1tcIm1haW5CdG5cIl1dOiB0eXBlID09IFwibWFpblwiLFxuXHRcdFx0XHRbc3R5bGVzW1wiZGFyay1tb2RlLWJ0bi0tYWN0aXZlXCJdXTogY29sb3IgPT0gXCJsaWdodFwiLFxuXHRcdFx0fSl9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiAodHlwZSA9PSBcImxpZ2h0TW9kZVwiID8gdG9nZ2xlRGFya01vZGUoKSA6IHVuZGVmaW5lZCl9XG5cdFx0PlxuXHRcdFx0e3R5cGUgJiYgdmFsdWV9XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbImNuIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdG5DdXN0b20iLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInR5cGUiLCJjaGlsZHJlbiIsImNvbG9yIiwic2V0Q29sb3IiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRvZ2xlTW9kZSIsInJlbW92ZSIsInRvZ2dsZURhcmtNb2RlIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    // const [color, setColor] = useLocaleStorage(\"colorMode\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"dark\");\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _document;\n        const body = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(\"#gang\");\n        // if (state ) {\n        // \treturn;\n        // }\n        if (color == \"light\") {\n            body === null || body === void 0 ? void 0 : body.classList.add(\"light\");\n            localStorage.setItem(\"colorModeBtn\", color);\n        } else {\n            body === null || body === void 0 ? void 0 : body.classList.remove(\"light\");\n            localStorage.setItem(\"colorModeBtn\", color);\n        // const value = localStorage.getItem(\"colorModeBtn\");\n        // togleMode(color);\n        // console.log(value);\n        }\n    }, [\n        color,\n        state\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setState(!state);\n        const value = localStorage.getItem(\"colorModeBtn\");\n        return setColor(value);\n    }, [\n        color\n    ]);\n    // const togleMode = (color: string) => {\n    // \tconst body = document?.querySelector(\"#gang\") as Element;\n    // \tif (color == \"light\") {\n    // \t\tbody?.classList.add(\"light\");\n    // \t}\n    // \tif (color == \"dark\") {\n    // \t\tbody?.classList.remove(\"light\");\n    // \t}\n    // };\n    const toggleDarkMode = ()=>{\n        setColor(color == \"light\" ? \"dark\" : \"light\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: state\n        }),\n        onClick: ()=>type == \"lightMode\" ? toggleDarkMode() : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, undefined);\n};\n_s(BtnCustom, \"9JKa7b/8NXF4mUxqEfwuk1a6+UM=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1JLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTiwyREFBMkQ7SUFDM0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQ0QsZ0RBQVNBLENBQUM7WUFDSVc7UUFBYixNQUFNQyxRQUFPRCxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVFLGFBQWEsQ0FBQztRQUNyQyxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLElBQUk7UUFDSixJQUFJTixTQUFTLFNBQVM7WUFDckJLLGlCQUFBQSwyQkFBQUEsS0FBTUUsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDcEJDLGFBQWFDLE9BQU8sQ0FBQyxnQkFBZ0JWO1FBQ3RDLE9BQU87WUFDTkssaUJBQUFBLDJCQUFBQSxLQUFNRSxTQUFTLENBQUNJLE1BQU0sQ0FBQztZQUN2QkYsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQlY7UUFDckMsc0RBQXNEO1FBQ3RELG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdkI7SUFDRCxHQUFHO1FBQUNBO1FBQU9FO0tBQU07SUFFakJULGdEQUFTQSxDQUFDO1FBQ1RVLFNBQVMsQ0FBQ0Q7UUFDVixNQUFNTCxRQUFRWSxhQUFhRyxPQUFPLENBQUM7UUFDbkMsT0FBT1gsU0FBU0o7SUFDakIsR0FBRztRQUFDRztLQUFNO0lBRVYseUNBQXlDO0lBQ3pDLDZEQUE2RDtJQUM3RCwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLEtBQUs7SUFDTCwwQkFBMEI7SUFDMUIscUNBQXFDO0lBQ3JDLEtBQUs7SUFDTCxLQUFLO0lBRUwsTUFBTWEsaUJBQWlCO1FBQ3RCWixTQUFTRCxTQUFTLFVBQVUsU0FBUztJQUN0QztJQUVBLHFCQUNDLDhEQUFDYztRQUNBbEIsV0FBV0wsaURBQUVBLENBQUNDLDhEQUFNLENBQUNJLFVBQVUsRUFBRTtZQUNoQyxDQUFDSixzRUFBaUIsQ0FBQyxFQUFFTSxRQUFRO1lBQzdCLENBQUNOLHVGQUErQixDQUFDLEVBQUVVO1FBQ3BDO1FBQ0FhLFNBQVMsSUFBT2pCLFFBQVEsY0FBY2UsbUJBQW1CRzs7WUFFeERsQixRQUFRRDtZQUNSRTs7Ozs7OztBQUdKLEVBQUU7R0ExRFdKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3g/NzNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IElCdG5Qcm9wcyB9IGZyb20gXCIuL0J0bkN1c3RvbS5pbnRlcmZhY2VcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdG5DdXN0b20ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlTG9jYWxlU3RvcmFnZSB9IGZyb20gXCJob29rcy91c2VMb2NhbGVTdG9yYWdlXCI7XG5pbXBvcnQgeyBNb3VzZUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBCdG5DdXN0b20gPSA8SUJ0biBleHRlbmRzIElCdG5Qcm9wcz4oe1xuXHRjbGFzc05hbWUsXG5cdHZhbHVlLFxuXHR0eXBlLFxuXHRjaGlsZHJlbixcbn06IElCdG4pOiBKU1guRWxlbWVudCA9PiB7XG5cdC8vIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlTG9jYWxlU3RvcmFnZShcImNvbG9yTW9kZVwiKTtcblx0Y29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcImRhcmtcIik7XG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFwiI2dhbmdcIikgYXMgRWxlbWVudDtcblx0XHQvLyBpZiAoc3RhdGUgKSB7XG5cdFx0Ly8gXHRyZXR1cm47XG5cdFx0Ly8gfVxuXHRcdGlmIChjb2xvciA9PSBcImxpZ2h0XCIpIHtcblx0XHRcdGJvZHk/LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIsIGNvbG9yKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym9keT8uY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvck1vZGVCdG5cIiwgY29sb3IpO1xuXHRcdFx0Ly8gY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yTW9kZUJ0blwiKTtcblx0XHRcdC8vIHRvZ2xlTW9kZShjb2xvcik7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0fVxuXHR9LCBbY29sb3IsIHN0YXRlXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRTdGF0ZSghc3RhdGUpO1xuXHRcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvck1vZGVCdG5cIik7XG5cdFx0cmV0dXJuIHNldENvbG9yKHZhbHVlKTtcblx0fSwgW2NvbG9yXSk7XG5cblx0Ly8gY29uc3QgdG9nbGVNb2RlID0gKGNvbG9yOiBzdHJpbmcpID0+IHtcblx0Ly8gXHRjb25zdCBib2R5ID0gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FuZ1wiKSBhcyBFbGVtZW50O1xuXHQvLyBcdGlmIChjb2xvciA9PSBcImxpZ2h0XCIpIHtcblx0Ly8gXHRcdGJvZHk/LmNsYXNzTGlzdC5hZGQoXCJsaWdodFwiKTtcblx0Ly8gXHR9XG5cdC8vIFx0aWYgKGNvbG9yID09IFwiZGFya1wiKSB7XG5cdC8vIFx0XHRib2R5Py5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIik7XG5cdC8vIFx0fVxuXHQvLyB9O1xuXG5cdGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xuXHRcdHNldENvbG9yKGNvbG9yID09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzW2NsYXNzTmFtZV0sIHtcblx0XHRcdFx0W3N0eWxlc1tcIm1haW5CdG5cIl1dOiB0eXBlID09IFwibWFpblwiLFxuXHRcdFx0XHRbc3R5bGVzW1wiZGFyay1tb2RlLWJ0bi0tYWN0aXZlXCJdXTogc3RhdGUsXG5cdFx0XHR9KX1cblx0XHRcdG9uQ2xpY2s9eygpID0+ICh0eXBlID09IFwibGlnaHRNb2RlXCIgPyB0b2dnbGVEYXJrTW9kZSgpIDogdW5kZWZpbmVkKX1cblx0XHQ+XG5cdFx0XHR7dHlwZSAmJiB2YWx1ZX1cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn07XG4iXSwibmFtZXMiOlsiY24iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ0bkN1c3RvbSIsImNsYXNzTmFtZSIsInZhbHVlIiwidHlwZSIsImNoaWxkcmVuIiwiY29sb3IiLCJzZXRDb2xvciIsInN0YXRlIiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZSIsImdldEl0ZW0iLCJ0b2dnbGVEYXJrTW9kZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
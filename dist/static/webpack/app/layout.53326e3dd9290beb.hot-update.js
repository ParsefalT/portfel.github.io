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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _document;\n        const clickedClass1 = \"clicked\";\n        const body1 = (_document = document) === null || _document === void 0 ? void 0 : _document.body;\n        const lightTheme1 = \"light\";\n        const darkTheme1 = \"dark\";\n        let theme1;\n        if (localStorage) {\n            theme1 = localStorage.getItem(\"theme\");\n        }\n        if (theme1 === lightTheme1 || theme1 === darkTheme1) {\n            body1.classList.add(theme1);\n        } else {\n            body1.classList.add(lightTheme1);\n        }\n    });\n    const switchTheme = (e)=>{\n        if (theme == darkTheme) {\n            body.classList.replace(darkTheme, lightTheme);\n            e.target.classList.remove(clickedClass);\n            localStorage.setItem(\"theme\", \"light\");\n            theme = lightTheme;\n        } else {\n            body.classList.replace(lightTheme, darkTheme);\n            e.target.classList.add(clickedClass);\n            localStorage.setItem(\"theme\", \"dark\");\n            theme = darkTheme;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"dark-mode-btn--active\"])]: theme == \"light\"\n        }),\n        onClick: (e)=>type == \"lightMode\" ? switchTheme(e) : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, undefined);\n}; // // const [color, setColor] = useLocaleStorage(\"colorMode\");\n // const [color, setColor] = useState(\"dark\");\n // useEffect(() => {\n // \tlocalStorage.setItem(\"colorModeBtn\", color);\n // \tconst value = localStorage.getItem(\"colorModeBtn\");\n // \tconsole.log(value);\n // }, [color]);\n // // const togleMode = () => {\n // // \tconst body = document?.querySelector(\"#gang\") as Element;\n // // \tif (color == \"light\") {\n // // \t\tbody?.classList.add(\"light\");\n // // \t}\n // // \tif (color == \"dark\") {\n // // \t\tbody?.classList.remove(\"light\");\n // // \t}\n // // };\n // const toggleDarkMode = () => {\n // \tsetColor(color == \"light\" ? \"dark\" : \"light\");\n // };\n_s(BtnCustom, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUVZO0FBRWpELE1BQU1HLFlBQVk7UUFBeUIsRUFDakRDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLFFBQVEsRUFDRjs7SUFDTkwsZ0RBQVNBLENBQUM7WUFFSU07UUFEYixNQUFNQyxnQkFBZTtRQUNyQixNQUFNQyxTQUFPRixZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVFLElBQUk7UUFDM0IsTUFBTUMsY0FBYTtRQUNuQixNQUFNQyxhQUFZO1FBQ2xCLElBQUlDO1FBRUosSUFBSUMsY0FBYztZQUNqQkQsU0FBUUMsYUFBYUMsT0FBTyxDQUFDO1FBQzlCO1FBRUEsSUFBSUYsV0FBVUYsZUFBY0UsV0FBVUQsWUFBVztZQUNoREYsTUFBS00sU0FBUyxDQUFDQyxHQUFHLENBQUNKO1FBQ3BCLE9BQU87WUFDTkgsTUFBS00sU0FBUyxDQUFDQyxHQUFHLENBQUNOO1FBQ3BCO0lBQ0Q7SUFFQSxNQUFNTyxjQUFjLENBQUNDO1FBQ3BCLElBQUlOLFNBQVNELFdBQVc7WUFDdkJGLEtBQUtNLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDUixXQUFXRDtZQUNsQ1EsRUFBRUUsTUFBTSxDQUFDTCxTQUFTLENBQUNNLE1BQU0sQ0FBQ2I7WUFDMUJLLGFBQWFTLE9BQU8sQ0FBQyxTQUFTO1lBQzlCVixRQUFRRjtRQUNULE9BQU87WUFDTkQsS0FBS00sU0FBUyxDQUFDSSxPQUFPLENBQUNULFlBQVlDO1lBQ25DTyxFQUFFRSxNQUFNLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDUjtZQUN2QkssYUFBYVMsT0FBTyxDQUFDLFNBQVM7WUFDOUJWLFFBQVFEO1FBQ1Q7SUFDRDtJQUVBLHFCQUNDLDhEQUFDWTtRQUNBcEIsV0FBV0osaURBQUVBLENBQUNDLDhEQUFNLENBQUNHLFVBQVUsRUFBRTtZQUNoQyxDQUFDSCxzRUFBaUIsQ0FBQyxFQUFFSyxRQUFRO1lBQzdCLENBQUNMLHVGQUErQixDQUFDLEVBQUVZLFNBQVM7UUFDN0M7UUFDQVksU0FBUyxDQUFDTixJQUFPYixRQUFRLGNBQWNZLFlBQVlDLEtBQUtPOztZQUV2RHBCLFFBQVFEO1lBQ1JFOzs7Ozs7O0FBR0osRUFBRSxDQUNGLDhEQUE4RDtDQUM5RCw4Q0FBOEM7Q0FFOUMsb0JBQW9CO0NBQ3BCLGdEQUFnRDtDQUNoRCx1REFBdUQ7Q0FDdkQsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZiwrQkFBK0I7Q0FDL0IsZ0VBQWdFO0NBQ2hFLDhCQUE4QjtDQUM5QixxQ0FBcUM7Q0FDckMsUUFBUTtDQUNSLDZCQUE2QjtDQUM3Qix3Q0FBd0M7Q0FDeEMsUUFBUTtDQUNSLFFBQVE7Q0FFUixpQ0FBaUM7Q0FDakMsa0RBQWtEO0NBQ2xELEtBQUs7R0F2RVFKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3g/NzNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IElCdG5Qcm9wcyB9IGZyb20gXCIuL0J0bkN1c3RvbS5pbnRlcmZhY2VcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdG5DdXN0b20ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0SXRlbVN0b3JhZ2UsIHVzZUxvY2FsZVN0b3JhZ2UgfSBmcm9tIFwiaG9va3MvdXNlTG9jYWxlU3RvcmFnZVwiO1xuaW1wb3J0IHsgTW91c2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQnRuQ3VzdG9tID0gPElCdG4gZXh0ZW5kcyBJQnRuUHJvcHM+KHtcblx0Y2xhc3NOYW1lLFxuXHR2YWx1ZSxcblx0dHlwZSxcblx0Y2hpbGRyZW4sXG59OiBJQnRuKTogSlNYLkVsZW1lbnQgPT4ge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGNsaWNrZWRDbGFzcyA9IFwiY2xpY2tlZFwiO1xuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudD8uYm9keTtcblx0XHRjb25zdCBsaWdodFRoZW1lID0gXCJsaWdodFwiO1xuXHRcdGNvbnN0IGRhcmtUaGVtZSA9IFwiZGFya1wiO1xuXHRcdGxldCB0aGVtZTtcblxuXHRcdGlmIChsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcblx0XHR9XG5cblx0XHRpZiAodGhlbWUgPT09IGxpZ2h0VGhlbWUgfHwgdGhlbWUgPT09IGRhcmtUaGVtZSkge1xuXHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKHRoZW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym9keS5jbGFzc0xpc3QuYWRkKGxpZ2h0VGhlbWUpO1xuXHRcdH1cblx0fSk7XG5cblx0Y29uc3Qgc3dpdGNoVGhlbWUgPSAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcblx0XHRpZiAodGhlbWUgPT0gZGFya1RoZW1lKSB7XG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZXBsYWNlKGRhcmtUaGVtZSwgbGlnaHRUaGVtZSk7XG5cdFx0XHRlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsaWNrZWRDbGFzcyk7XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XG5cdFx0XHR0aGVtZSA9IGxpZ2h0VGhlbWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlcGxhY2UobGlnaHRUaGVtZSwgZGFya1RoZW1lKTtcblx0XHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xpY2tlZENsYXNzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuXHRcdFx0dGhlbWUgPSBkYXJrVGhlbWU7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXNbY2xhc3NOYW1lXSwge1xuXHRcdFx0XHRbc3R5bGVzW1wibWFpbkJ0blwiXV06IHR5cGUgPT0gXCJtYWluXCIsXG5cdFx0XHRcdFtzdHlsZXNbXCJkYXJrLW1vZGUtYnRuLS1hY3RpdmVcIl1dOiB0aGVtZSA9PSBcImxpZ2h0XCIsXG5cdFx0XHR9KX1cblx0XHRcdG9uQ2xpY2s9eyhlKSA9PiAodHlwZSA9PSBcImxpZ2h0TW9kZVwiID8gc3dpdGNoVGhlbWUoZSkgOiB1bmRlZmluZWQpfVxuXHRcdD5cblx0XHRcdHt0eXBlICYmIHZhbHVlfVxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufTtcbi8vIC8vIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlTG9jYWxlU3RvcmFnZShcImNvbG9yTW9kZVwiKTtcbi8vIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJkYXJrXCIpO1xuXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbG9yTW9kZUJ0blwiLCBjb2xvcik7XG4vLyBcdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvck1vZGVCdG5cIik7XG4vLyBcdGNvbnNvbGUubG9nKHZhbHVlKTtcbi8vIH0sIFtjb2xvcl0pO1xuLy8gLy8gY29uc3QgdG9nbGVNb2RlID0gKCkgPT4ge1xuLy8gLy8gXHRjb25zdCBib2R5ID0gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FuZ1wiKSBhcyBFbGVtZW50O1xuLy8gLy8gXHRpZiAoY29sb3IgPT0gXCJsaWdodFwiKSB7XG4vLyAvLyBcdFx0Ym9keT8uY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuLy8gLy8gXHR9XG4vLyAvLyBcdGlmIChjb2xvciA9PSBcImRhcmtcIikge1xuLy8gLy8gXHRcdGJvZHk/LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKTtcbi8vIC8vIFx0fVxuLy8gLy8gfTtcblxuLy8gY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4vLyBcdHNldENvbG9yKGNvbG9yID09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiKTtcbi8vIH07XG4iXSwibmFtZXMiOlsiY24iLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJCdG5DdXN0b20iLCJjbGFzc05hbWUiLCJ2YWx1ZSIsInR5cGUiLCJjaGlsZHJlbiIsImRvY3VtZW50IiwiY2xpY2tlZENsYXNzIiwiYm9keSIsImxpZ2h0VGhlbWUiLCJkYXJrVGhlbWUiLCJ0aGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJzd2l0Y2hUaGVtZSIsImUiLCJyZXBsYWNlIiwidGFyZ2V0IiwicmVtb3ZlIiwic2V0SXRlbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
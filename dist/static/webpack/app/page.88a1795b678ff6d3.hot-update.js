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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BtnCustom: function() { return /* binding */ BtnCustom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnCustom.module.css */ \"(app-pages-browser)/./components/BtnCustom/BtnCustom.module.css\");\n/* harmony import */ var _BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ BtnCustom auto */ \n\n\nconst BtnCustom = (param)=>{\n    let { className, value, type, children } = param;\n    use;\n    const switchTheme = (e)=>{\n        if (theme == darkTheme) {\n            body.classList.replace(darkTheme, lightTheme);\n            e.target.classList.remove(clickedClass);\n            localStorage.setItem(\"theme\", \"light\");\n            theme = lightTheme;\n        } else {\n            body.classList.replace(lightTheme, darkTheme);\n            e.target.classList.add(clickedClass);\n            localStorage.setItem(\"theme\", \"dark\");\n            theme = darkTheme;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default())[className], {\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainBtn)]: type == \"main\",\n            [(_BtnCustom_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"dark-mode-btn--active\"])]: theme == \"light\"\n        }),\n        onClick: (e)=>type == \"lightMode\" ? switchTheme(e) : undefined,\n        children: [\n            type && value,\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/components/BtnCustom/BtnCustom.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, undefined);\n}; // // const [color, setColor] = useLocaleStorage(\"colorMode\");\n // const [color, setColor] = useState(\"dark\");\n // useEffect(() => {\n // \tlocalStorage.setItem(\"colorModeBtn\", color);\n // \tconst value = localStorage.getItem(\"colorModeBtn\");\n // \tconsole.log(value);\n // }, [color]);\n // // const togleMode = () => {\n // // \tconst body = document?.querySelector(\"#gang\") as Element;\n // // \tif (color == \"light\") {\n // // \t\tbody?.classList.add(\"light\");\n // // \t}\n // // \tif (color == \"dark\") {\n // // \t\tbody?.classList.remove(\"light\");\n // // \t}\n // // };\n // const toggleDarkMode = () => {\n // \tsetColor(color == \"light\" ? \"dark\" : \"light\");\n // };\n_c = BtnCustom;\nvar _c;\n$RefreshReg$(_c, \"BtnCustom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUlyQyxNQUFNRSxZQUFZO1FBQXlCLEVBQ2pEQyxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxRQUFRLEVBQ0Y7SUFDTkM7SUFFQSxNQUFNQyxjQUFjLENBQUNDO1FBQ3BCLElBQUlDLFNBQVNDLFdBQVc7WUFDdkJDLEtBQUtDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDSCxXQUFXSTtZQUNsQ04sRUFBRU8sTUFBTSxDQUFDSCxTQUFTLENBQUNJLE1BQU0sQ0FBQ0M7WUFDMUJDLGFBQWFDLE9BQU8sQ0FBQyxTQUFTO1lBQzlCVixRQUFRSztRQUNULE9BQU87WUFDTkgsS0FBS0MsU0FBUyxDQUFDQyxPQUFPLENBQUNDLFlBQVlKO1lBQ25DRixFQUFFTyxNQUFNLENBQUNILFNBQVMsQ0FBQ1EsR0FBRyxDQUFDSDtZQUN2QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVM7WUFDOUJWLFFBQVFDO1FBQ1Q7SUFDRDtJQUVBLHFCQUNDLDhEQUFDVztRQUNBbkIsV0FBV0gsaURBQUVBLENBQUNDLDhEQUFNLENBQUNFLFVBQVUsRUFBRTtZQUNoQyxDQUFDRixzRUFBaUIsQ0FBQyxFQUFFSSxRQUFRO1lBQzdCLENBQUNKLHVGQUErQixDQUFDLEVBQUVTLFNBQVM7UUFDN0M7UUFDQWEsU0FBUyxDQUFDZCxJQUFPSixRQUFRLGNBQWNHLFlBQVlDLEtBQUtlOztZQUV2RG5CLFFBQVFEO1lBQ1JFOzs7Ozs7O0FBR0osRUFBRSxDQUNGLDhEQUE4RDtDQUM5RCw4Q0FBOEM7Q0FFOUMsb0JBQW9CO0NBQ3BCLGdEQUFnRDtDQUNoRCx1REFBdUQ7Q0FDdkQsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZiwrQkFBK0I7Q0FDL0IsZ0VBQWdFO0NBQ2hFLDhCQUE4QjtDQUM5QixxQ0FBcUM7Q0FDckMsUUFBUTtDQUNSLDZCQUE2QjtDQUM3Qix3Q0FBd0M7Q0FDeEMsUUFBUTtDQUNSLFFBQVE7Q0FFUixpQ0FBaUM7Q0FDakMsa0RBQWtEO0NBQ2xELEtBQUs7S0F2RFFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnRuQ3VzdG9tL0J0bkN1c3RvbS50c3g/NzNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IElCdG5Qcm9wcyB9IGZyb20gXCIuL0J0bkN1c3RvbS5pbnRlcmZhY2VcIjtcbmltcG9ydCBjbiBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9CdG5DdXN0b20ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0SXRlbVN0b3JhZ2UsIHVzZUxvY2FsZVN0b3JhZ2UgfSBmcm9tIFwiaG9va3MvdXNlTG9jYWxlU3RvcmFnZVwiO1xuaW1wb3J0IHsgTW91c2VFdmVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQnRuQ3VzdG9tID0gPElCdG4gZXh0ZW5kcyBJQnRuUHJvcHM+KHtcblx0Y2xhc3NOYW1lLFxuXHR2YWx1ZSxcblx0dHlwZSxcblx0Y2hpbGRyZW4sXG59OiBJQnRuKTogSlNYLkVsZW1lbnQgPT4ge1xuXHR1c2VcblxuXHRjb25zdCBzd2l0Y2hUaGVtZSA9IChlOiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuXHRcdGlmICh0aGVtZSA9PSBkYXJrVGhlbWUpIHtcblx0XHRcdGJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoZGFya1RoZW1lLCBsaWdodFRoZW1lKTtcblx0XHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xpY2tlZENsYXNzKTtcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcblx0XHRcdHRoZW1lID0gbGlnaHRUaGVtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ym9keS5jbGFzc0xpc3QucmVwbGFjZShsaWdodFRoZW1lLCBkYXJrVGhlbWUpO1xuXHRcdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZChjbGlja2VkQ2xhc3MpO1xuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XG5cdFx0XHR0aGVtZSA9IGRhcmtUaGVtZTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlc1tjbGFzc05hbWVdLCB7XG5cdFx0XHRcdFtzdHlsZXNbXCJtYWluQnRuXCJdXTogdHlwZSA9PSBcIm1haW5cIixcblx0XHRcdFx0W3N0eWxlc1tcImRhcmstbW9kZS1idG4tLWFjdGl2ZVwiXV06IHRoZW1lID09IFwibGlnaHRcIixcblx0XHRcdH0pfVxuXHRcdFx0b25DbGljaz17KGUpID0+ICh0eXBlID09IFwibGlnaHRNb2RlXCIgPyBzd2l0Y2hUaGVtZShlKSA6IHVuZGVmaW5lZCl9XG5cdFx0PlxuXHRcdFx0e3R5cGUgJiYgdmFsdWV9XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9idXR0b24+XG5cdCk7XG59O1xuLy8gLy8gY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VMb2NhbGVTdG9yYWdlKFwiY29sb3JNb2RlXCIpO1xuLy8gY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcImRhcmtcIik7XG5cbi8vIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JNb2RlQnRuXCIsIGNvbG9yKTtcbi8vIFx0Y29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbG9yTW9kZUJ0blwiKTtcbi8vIFx0Y29uc29sZS5sb2codmFsdWUpO1xuLy8gfSwgW2NvbG9yXSk7XG4vLyAvLyBjb25zdCB0b2dsZU1vZGUgPSAoKSA9PiB7XG4vLyAvLyBcdGNvbnN0IGJvZHkgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcihcIiNnYW5nXCIpIGFzIEVsZW1lbnQ7XG4vLyAvLyBcdGlmIChjb2xvciA9PSBcImxpZ2h0XCIpIHtcbi8vIC8vIFx0XHRib2R5Py5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG4vLyAvLyBcdH1cbi8vIC8vIFx0aWYgKGNvbG9yID09IFwiZGFya1wiKSB7XG4vLyAvLyBcdFx0Ym9keT8uY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuLy8gLy8gXHR9XG4vLyAvLyB9O1xuXG4vLyBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcbi8vIFx0c2V0Q29sb3IoY29sb3IgPT0gXCJsaWdodFwiID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuLy8gfTtcbiJdLCJuYW1lcyI6WyJjbiIsInN0eWxlcyIsIkJ0bkN1c3RvbSIsImNsYXNzTmFtZSIsInZhbHVlIiwidHlwZSIsImNoaWxkcmVuIiwidXNlIiwic3dpdGNoVGhlbWUiLCJlIiwidGhlbWUiLCJkYXJrVGhlbWUiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsImxpZ2h0VGhlbWUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJjbGlja2VkQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWRkIiwiYnV0dG9uIiwib25DbGljayIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BtnCustom/BtnCustom.tsx\n"));

/***/ })

});
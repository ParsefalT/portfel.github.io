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

/***/ "(app-pages-browser)/./app/layout.tsx":
/*!************************!*\
  !*** ./app/layout.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _components_appMiddle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/appMiddle */ \"(app-pages-browser)/./app/components/appMiddle.tsx\");\n/* harmony import */ var _components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Cursor/Cursor */ \"(app-pages-browser)/./components/Cursor/Cursor.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _storeRedux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/storeRedux/store */ \"(app-pages-browser)/./storeRedux/store.ts\");\n/* harmony import */ var _storeRedux_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/storeRedux/slice */ \"(app-pages-browser)/./storeRedux/slice.ts\");\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-local-storage */ \"(app-pages-browser)/./node_modules/use-local-storage/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-page-custom-font */ \n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children = null } = param;\n    _s();\n    _storeRedux_store__WEBPACK_IMPORTED_MODULE_5__.store.dispatch(_storeRedux_slice__WEBPACK_IMPORTED_MODULE_6__.sliceActions.show(\"asd\"));\n    const defaultDark = \"dark\";\n    const [theme, setTheme] = (0,use_local_storage__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"theme\", defaultDark ? \"dark\" : \"light\");\n    const switchTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n    };\n    console.log(theme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/srv/http/test-base/app/layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/srv/http/test-base/app/layout.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Agbalumo&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/srv/http/test-base/app/layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/srv/http/test-base/app/layout.tsx\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_8___default().className),\n                id: \"gang\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_9__.Provider, {\n                    store: _storeRedux_store__WEBPACK_IMPORTED_MODULE_5__.store,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/srv/http/test-base/app/layout.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_appMiddle__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                            switchTheme: switchTheme,\n                            theme: theme\n                        }, void 0, false, {\n                            fileName: \"/srv/http/test-base/app/layout.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 6\n                        }, this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"/srv/http/test-base/app/layout.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/srv/http/test-base/app/layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/app/layout.tsx\",\n        lineNumber: 31,\n        columnNumber: 3\n    }, this);\n}\n_s(RootLayout, \"cU7RfcDtWjaFuZGISXTRa2p1rXs=\", false, function() {\n    return [\n        use_local_storage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVU1BO0FBVE4saURBQWlELEdBQzFCO0FBQ3VCO0FBQ0U7QUFDQTtBQUVUO0FBQ0k7QUFDTztBQUVGO0FBRWpDLFNBQVNPLFdBQVcsS0FJakM7UUFKaUMsRUFDbENDLFdBQVcsSUFBSSxFQUdkLEdBSmlDOztJQUtsQ0osb0RBQUtBLENBQUNLLFFBQVEsQ0FBQ0osMkRBQVlBLENBQUNLLElBQUksQ0FBQztJQUVqQyxNQUFNQyxjQUFjO0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCw2REFBZUEsQ0FBQyxTQUFTSyxjQUFjLFNBQVM7SUFDMUUsTUFBTUcsY0FBYztRQUNuQixNQUFNQyxXQUFXSCxVQUFVLFVBQVUsU0FBUztRQUM5Q0MsU0FBU0U7SUFDVjtJQUdBQyxRQUFRQyxHQUFHLENBQUNMO0lBQ1oscUJBQ0MsOERBQUNNO1FBQUtDLE1BQUs7OzBCQUNWLDhEQUFDQzs7a0NBQ0EsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUNBRSxNQUFLO3dCQUNMRCxLQUFJOzs7Ozs7Ozs7Ozs7MEJBR04sOERBQUNHO2dCQUFLQyxXQUFXMUIsMkpBQWU7Z0JBQUUyQixJQUFHOzBCQUNwQyw0RUFBQ3hCLGlEQUFRQTtvQkFBQ0MsT0FBT0Esb0RBQUtBOztzQ0FDckIsOERBQUNGLGlFQUFNQTs7Ozs7c0NBQ1AsOERBQUNELHlEQUFNQTs0QkFBQ2EsYUFBYUE7NEJBQWFGLE9BQU9BOzs7Ozs7d0JBQ3hDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS047R0FuQ3dCRDs7UUFRR0QseURBQWVBOzs7S0FSbEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXQudHN4Pzk5ODgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLXBhZ2UtY3VzdG9tLWZvbnQgKi9cbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBNaWRkbGVcIjtcbmltcG9ydCBDdXJzb3IgZnJvbSBcIkAvY29tcG9uZW50cy9DdXJzb3IvQ3Vyc29yXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiQC9zdG9yZVJlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBzbGljZUFjdGlvbnMgfSBmcm9tIFwiQC9zdG9yZVJlZHV4L3NsaWNlXCI7XG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gXCJ1c2UtbG9jYWwtc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcblx0Y2hpbGRyZW4gPSBudWxsLFxufTogUmVhZG9ubHk8e1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufT4pIHtcblx0c3RvcmUuZGlzcGF0Y2goc2xpY2VBY3Rpb25zLnNob3coXCJhc2RcIikpO1xuXG5cdGNvbnN0IGRlZmF1bHREYXJrID0gXCJkYXJrXCI7XG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlTG9jYWxTdG9yYWdlKFwidGhlbWVcIiwgZGVmYXVsdERhcmsgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG5cdGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuXHRcdHNldFRoZW1lKG5ld1RoZW1lKTtcblx0fTtcblxuXHRcblx0Y29uc29sZS5sb2codGhlbWUpO1xuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BZ2JhbHVtbyZkaXNwbGF5PXN3YXBcIlxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHkgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9IGlkPVwiZ2FuZ1wiPlxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8Q3Vyc29yIC8+XG5cdFx0XHRcdFx0PE5hdmJhciBzd2l0Y2hUaGVtZT17c3dpdGNoVGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L2JvZHk+XG5cdFx0PC9odG1sPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiTmF2YmFyIiwiQ3Vyc29yIiwiUHJvdmlkZXIiLCJzdG9yZSIsInNsaWNlQWN0aW9ucyIsInVzZUxvY2FsU3RvcmFnZSIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwic2hvdyIsImRlZmF1bHREYXJrIiwidGhlbWUiLCJzZXRUaGVtZSIsInN3aXRjaFRoZW1lIiwibmV3VGhlbWUiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImxhbmciLCJoZWFkIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsImJvZHkiLCJjbGFzc05hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});
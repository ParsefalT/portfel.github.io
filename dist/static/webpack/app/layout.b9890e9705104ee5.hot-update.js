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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/layout.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/layout.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"(app-pages-browser)/./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _components_appMiddle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/appMiddle */ \"(app-pages-browser)/./app/components/appMiddle.tsx\");\n/* harmony import */ var _components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Cursor/Cursor */ \"(app-pages-browser)/./components/Cursor/Cursor.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _storeRedux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/storeRedux/store */ \"(app-pages-browser)/./storeRedux/store.ts\");\n/* harmony import */ var _storeRedux_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/storeRedux/slice */ \"(app-pages-browser)/./storeRedux/slice.ts\");\n/* harmony import */ var use_local_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-local-storage */ \"(app-pages-browser)/./node_modules/use-local-storage/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n/* eslint-disable @next/next/no-page-custom-font */ \n\n\n\n\n\n\n\n\nfunction RootLayout(param) {\n    let { children = null } = param;\n    _s();\n    _storeRedux_store__WEBPACK_IMPORTED_MODULE_5__.store.dispatch(_storeRedux_slice__WEBPACK_IMPORTED_MODULE_6__.sliceActions.show(\"asd\"));\n    const defaultDark = \"dark\";\n    const [theme, setTheme] = (0,use_local_storage__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"theme\", defaultDark ? \"dark\" : \"light\");\n    const switchTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n    };\n    const btn = (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        if (theme == \"light\") {\n            document.body.classList.add(\"light\");\n        } else {\n            document.body.classList.remove(\"light\");\n        }\n    }, [\n        theme\n    ]);\n    console.log(theme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/srv/http/test-base/app/layout.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/srv/http/test-base/app/layout.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Agbalumo&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/srv/http/test-base/app/layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/srv/http/test-base/app/layout.tsx\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_9___default().className),\n                id: \"gang\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_10__.Provider, {\n                    store: _storeRedux_store__WEBPACK_IMPORTED_MODULE_5__.store,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor_Cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/srv/http/test-base/app/layout.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_appMiddle__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                            switchTheme: switchTheme,\n                            theme: theme\n                        }, void 0, false, {\n                            fileName: \"/srv/http/test-base/app/layout.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 6\n                        }, this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"/srv/http/test-base/app/layout.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/srv/http/test-base/app/layout.tsx\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/srv/http/test-base/app/layout.tsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, this);\n}\n_s(RootLayout, \"GKgl8KAp10i6RRofz7oFgmbSe7c=\", false, function() {\n    return [\n        use_local_storage__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVTUE7QUFUTixpREFBaUQsR0FDMUI7QUFDdUI7QUFDRTtBQUNBO0FBRVQ7QUFDSTtBQUNPO0FBRUY7QUFDZDtBQUVuQixTQUFTUSxXQUFXLEtBSWpDO1FBSmlDLEVBQ2xDQyxXQUFXLElBQUksRUFHZCxHQUppQzs7SUFLbENMLG9EQUFLQSxDQUFDTSxRQUFRLENBQUNMLDJEQUFZQSxDQUFDTSxJQUFJLENBQUM7SUFFakMsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsNkRBQWVBLENBQUMsU0FBU00sY0FBYyxTQUFTO0lBQzFFLE1BQU1HLGNBQWM7UUFDbkIsTUFBTUMsV0FBV0gsVUFBVSxVQUFVLFNBQVM7UUFDOUNDLFNBQVNFO0lBQ1Y7SUFDQSxNQUFNQyxNQUNOVixnREFBU0EsQ0FBQztRQUNULElBQUlNLFNBQVMsU0FBUztZQUNyQkssU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUM3QixPQUFPO1lBQ05ILFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDaEM7SUFDRCxHQUFHO1FBQUNUO0tBQU07SUFFVlUsUUFBUUMsR0FBRyxDQUFDWDtJQUNaLHFCQUNDLDhEQUFDWTtRQUFLQyxNQUFLOzswQkFDViw4REFBQ0M7O2tDQUNBLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtDLEtBQUk7d0JBQWFDLE1BQUs7d0JBQTRCQyxhQUFZOzs7Ozs7a0NBQ3BFLDhEQUFDSDt3QkFDQUUsTUFBSzt3QkFDTEQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUdOLDhEQUFDVjtnQkFBS2EsV0FBV2hDLDJKQUFlO2dCQUFFaUMsSUFBRzswQkFDcEMsNEVBQUM5QixrREFBUUE7b0JBQUNDLE9BQU9BLG9EQUFLQTs7c0NBQ3JCLDhEQUFDRixpRUFBTUE7Ozs7O3NDQUNQLDhEQUFDRCx5REFBTUE7NEJBQUNjLGFBQWFBOzRCQUFhRixPQUFPQTs7Ozs7O3dCQUN4Q0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtOO0dBMUN3QkQ7O1FBUUdGLHlEQUFlQTs7O0tBUmxCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbGF5b3V0LnRzeD85OTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1wYWdlLWN1c3RvbS1mb250ICovXG5pbXBvcnQgXCIuL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwTWlkZGxlXCI7XG5pbXBvcnQgQ3Vyc29yIGZyb20gXCJAL2NvbXBvbmVudHMvQ3Vyc29yL0N1cnNvclwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIkAvc3RvcmVSZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgc2xpY2VBY3Rpb25zIH0gZnJvbSBcIkAvc3RvcmVSZWR1eC9zbGljZVwiO1xuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tIFwidXNlLWxvY2FsLXN0b3JhZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb290TGF5b3V0KHtcblx0Y2hpbGRyZW4gPSBudWxsLFxufTogUmVhZG9ubHk8e1xuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufT4pIHtcblx0c3RvcmUuZGlzcGF0Y2goc2xpY2VBY3Rpb25zLnNob3coXCJhc2RcIikpO1xuXG5cdGNvbnN0IGRlZmF1bHREYXJrID0gXCJkYXJrXCI7XG5cdGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlTG9jYWxTdG9yYWdlKFwidGhlbWVcIiwgZGVmYXVsdERhcmsgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG5cdGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuXHRcdHNldFRoZW1lKG5ld1RoZW1lKTtcblx0fTtcblx0Y29uc3QgYnRuID0gXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHRoZW1lID09IFwibGlnaHRcIikge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibGlnaHRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0XCIpO1xuXHRcdH1cblx0fSwgW3RoZW1lXSk7XG5cblx0Y29uc29sZS5sb2codGhlbWUpO1xuXHRyZXR1cm4gKFxuXHRcdDxodG1sIGxhbmc9XCJlblwiPlxuXHRcdFx0PGhlYWQ+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG5cdFx0XHRcdDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cblx0XHRcdFx0PGxpbmtcblx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BZ2JhbHVtbyZkaXNwbGF5PXN3YXBcIlxuXHRcdFx0XHRcdHJlbD1cInN0eWxlc2hlZXRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9oZWFkPlxuXHRcdFx0PGJvZHkgY2xhc3NOYW1lPXtpbnRlci5jbGFzc05hbWV9IGlkPVwiZ2FuZ1wiPlxuXHRcdFx0XHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHRcdFx0XHQ8Q3Vyc29yIC8+XG5cdFx0XHRcdFx0PE5hdmJhciBzd2l0Y2hUaGVtZT17c3dpdGNoVGhlbWV9IHRoZW1lPXt0aGVtZX0gLz5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvUHJvdmlkZXI+XG5cdFx0XHQ8L2JvZHk+XG5cdFx0PC9odG1sPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiTmF2YmFyIiwiQ3Vyc29yIiwiUHJvdmlkZXIiLCJzdG9yZSIsInNsaWNlQWN0aW9ucyIsInVzZUxvY2FsU3RvcmFnZSIsInVzZUVmZmVjdCIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwic2hvdyIsImRlZmF1bHREYXJrIiwidGhlbWUiLCJzZXRUaGVtZSIsInN3aXRjaFRoZW1lIiwibmV3VGhlbWUiLCJidG4iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImxhbmciLCJoZWFkIiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsImNsYXNzTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./hooks/useLocaleStorage.ts":
/*!***********************************!*\
  !*** ./hooks/useLocaleStorage.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getItemStore: function() { return /* binding */ getItemStore; },\n/* harmony export */   setItemStore: function() { return /* binding */ setItemStore; }\n/* harmony export */ });\n/* __next_internal_client_entry_do_not_use__ getItemStore,setItemStore auto */ const getItemStore = ()=>{\n    const value = localStorage.getItem(\"colorBtn\");\n};\nconst setItemStore = ()=>{\n    localStorage.setItem(\"colorBtn\", \"dark\");\n} // //get value\n // export function getItemStorage(\n // \tkey: string,\n // \tsetItem: { (value: SetStateAction<string>): void; (arg0: any): void },\n // ) {\n // \tconst value = localStorage.getItem(key) as string;\n // \tlocalStorage.setItem(key, value);\n // \tsetItem(JSON.parse(value));\n // }\n // //set value\n // export function setItemStorage(\n // \tkey: string,\n // \tvalue: string,\n // \tsetItem: { (value: SetStateAction<string>): void; (arg0: any): void },\n // ) {\n // \tconst valueToStore = value;\n // \tlocalStorage.setItem(key, JSON.stringify(valueToStore));\n // \tsetItem(valueToStore);\n // }\n // export const useLocaleStorage = (key: string) => {\n // \tconst [state, setState] = useState(\"\");\n // \tconst setValue = (value: string) => {\n // \t\tgetItemStorage(key, setState);\n // \t\treturn setItemStorage(key, value, setState);\n // \t};\n // \treturn [state, setValue] as any;\n // };\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZUxvY2FsZVN0b3JhZ2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7K0VBR08sTUFBTUEsZUFBZTtJQUMzQixNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7QUFDcEMsRUFBRTtBQUVLLE1BQU1DLGVBQWU7SUFDM0JGLGFBQWFHLE9BQU8sQ0FBQyxZQUFZO0FBQ2xDLEVBRUEsY0FBYztDQUNkLGtDQUFrQztDQUNsQyxnQkFBZ0I7Q0FDaEIsMEVBQTBFO0NBQzFFLE1BQU07Q0FDTixzREFBc0Q7Q0FDdEQscUNBQXFDO0NBQ3JDLCtCQUErQjtDQUMvQixJQUFJO0NBRUosY0FBYztDQUNkLGtDQUFrQztDQUNsQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLDBFQUEwRTtDQUMxRSxNQUFNO0NBQ04sK0JBQStCO0NBQy9CLDREQUE0RDtDQUM1RCwwQkFBMEI7Q0FDMUIsSUFBSTtDQUVKLHFEQUFxRDtDQUNyRCwyQ0FBMkM7Q0FFM0MseUNBQXlDO0NBQ3pDLG1DQUFtQztDQUNuQyxpREFBaUQ7Q0FDakQsTUFBTTtDQUVOLG9DQUFvQztDQUNwQyxLQUFLO0NBaENKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUxvY2FsZVN0b3JhZ2UudHM/YjM5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRJdGVtU3RvcmUgPSAoKSA9PiB7XG5cdGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb2xvckJ0blwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRJdGVtU3RvcmUgPSAoKSA9PiB7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvckJ0bicsICdkYXJrJylcbn1cblxuLy8gLy9nZXQgdmFsdWVcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RvcmFnZShcbi8vIFx0a2V5OiBzdHJpbmcsXG4vLyBcdHNldEl0ZW06IHsgKHZhbHVlOiBTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+KTogdm9pZDsgKGFyZzA6IGFueSk6IHZvaWQgfSxcbi8vICkge1xuLy8gXHRjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgYXMgc3RyaW5nO1xuLy8gXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbi8vIFx0c2V0SXRlbShKU09OLnBhcnNlKHZhbHVlKSk7XG4vLyB9XG5cbi8vIC8vc2V0IHZhbHVlXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0SXRlbVN0b3JhZ2UoXG4vLyBcdGtleTogc3RyaW5nLFxuLy8gXHR2YWx1ZTogc3RyaW5nLFxuLy8gXHRzZXRJdGVtOiB7ICh2YWx1ZTogU2V0U3RhdGVBY3Rpb248c3RyaW5nPik6IHZvaWQ7IChhcmcwOiBhbnkpOiB2b2lkIH0sXG4vLyApIHtcbi8vIFx0Y29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWU7XG4vLyBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSk7XG4vLyBcdHNldEl0ZW0odmFsdWVUb1N0b3JlKTtcbi8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IHVzZUxvY2FsZVN0b3JhZ2UgPSAoa2V5OiBzdHJpbmcpID0+IHtcbi8vIFx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuLy8gXHRjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4vLyBcdFx0Z2V0SXRlbVN0b3JhZ2Uoa2V5LCBzZXRTdGF0ZSk7XG4vLyBcdFx0cmV0dXJuIHNldEl0ZW1TdG9yYWdlKGtleSwgdmFsdWUsIHNldFN0YXRlKTtcbi8vIFx0fTtcblxuLy8gXHRyZXR1cm4gW3N0YXRlLCBzZXRWYWx1ZV0gYXMgYW55O1xuLy8gfTtcbiJdLCJuYW1lcyI6WyJnZXRJdGVtU3RvcmUiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtU3RvcmUiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useLocaleStorage.ts\n"));

/***/ })

});
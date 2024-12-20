/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/blogs/[slug]/route";
exports.ids = ["app/api/blogs/[slug]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute.ts&appDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute.ts&appDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Documents_Computer_Projects_bootcamp_project_2024_bootcamp_milestone_two_bootcamp_milestone_two_src_app_api_blogs_slug_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/blogs/[slug]/route.ts */ \"(rsc)/./src/app/api/blogs/[slug]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/blogs/[slug]/route\",\n        pathname: \"/api/blogs/[slug]\",\n        filename: \"route\",\n        bundlePath: \"app/api/blogs/[slug]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Documents\\\\Computer Projects\\\\bootcamp-project-2024\\\\bootcamp-milestone-two\\\\bootcamp-milestone-two\\\\src\\\\app\\\\api\\\\blogs\\\\[slug]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Documents_Computer_Projects_bootcamp_project_2024_bootcamp_milestone_two_bootcamp_milestone_two_src_app_api_blogs_slug_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZibG9ncyUyRiU1QnNsdWclNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmJsb2dzJTJGJTVCc2x1ZyU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmJsb2dzJTJGJTVCc2x1ZyU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDRG9jdW1lbnRzJTVDQ29tcHV0ZXIlMjBQcm9qZWN0cyU1Q2Jvb3RjYW1wLXByb2plY3QtMjAyNCU1Q2Jvb3RjYW1wLW1pbGVzdG9uZS10d28lNUNib290Y2FtcC1taWxlc3RvbmUtdHdvJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDRG9jdW1lbnRzJTVDQ29tcHV0ZXIlMjBQcm9qZWN0cyU1Q2Jvb3RjYW1wLXByb2plY3QtMjAyNCU1Q2Jvb3RjYW1wLW1pbGVzdG9uZS10d28lNUNib290Y2FtcC1taWxlc3RvbmUtdHdvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrRjtBQUM1SztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vPzYxZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXERvY3VtZW50c1xcXFxDb21wdXRlciBQcm9qZWN0c1xcXFxib290Y2FtcC1wcm9qZWN0LTIwMjRcXFxcYm9vdGNhbXAtbWlsZXN0b25lLXR3b1xcXFxib290Y2FtcC1taWxlc3RvbmUtdHdvXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGJsb2dzXFxcXFtzbHVnXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYmxvZ3MvW3NsdWddL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYmxvZ3MvW3NsdWddXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9ibG9ncy9bc2x1Z10vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxEb2N1bWVudHNcXFxcQ29tcHV0ZXIgUHJvamVjdHNcXFxcYm9vdGNhbXAtcHJvamVjdC0yMDI0XFxcXGJvb3RjYW1wLW1pbGVzdG9uZS10d29cXFxcYm9vdGNhbXAtbWlsZXN0b25lLXR3b1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxibG9nc1xcXFxbc2x1Z11cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute.ts&appDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/blogs/[slug]/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/blogs/[slug]/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database/db */ \"(rsc)/./src/app/database/db.ts\");\n/* harmony import */ var _database_blogSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../database/blogSchema */ \"(rsc)/./src/app/database/blogSchema.ts\");\n\n\n\nasync function GET(req, context// Temporarily use 'any'\n) {\n    const { slug } = context.params;\n    await (0,_database_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const blog = await _database_blogSchema__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n        slug\n    }).orFail();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(blog);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9ibG9ncy9bc2x1Z10vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3RDtBQUNYO0FBQ1M7QUFFL0MsZUFBZUcsSUFDckJDLEdBQWdCLEVBQ2hCQyxPQUFZLHdCQUF5Qjs7SUFFckMsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0QsUUFBUUUsTUFBTTtJQUMvQixNQUFNTix3REFBU0E7SUFDZixNQUFNTyxPQUFPLE1BQU1OLDREQUFVQSxDQUFDTyxPQUFPLENBQUM7UUFBRUg7SUFBSyxHQUFHSSxNQUFNO0lBQ3RELE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQUNIO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcGkvYmxvZ3MvW3NsdWddL3JvdXRlLnRzPzMzZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi9kYXRhYmFzZS9kYic7XHJcbmltcG9ydCBibG9nU2NoZW1hIGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL2Jsb2dTY2hlbWEnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChcclxuXHRyZXE6IE5leHRSZXF1ZXN0LFxyXG5cdGNvbnRleHQ6IGFueSAvLyBUZW1wb3JhcmlseSB1c2UgJ2FueSdcclxuICApOiBQcm9taXNlPE5leHRSZXNwb25zZT4ge1xyXG5cdGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5wYXJhbXM7XHJcblx0YXdhaXQgY29ubmVjdERCKCk7XHJcblx0Y29uc3QgYmxvZyA9IGF3YWl0IGJsb2dTY2hlbWEuZmluZE9uZSh7IHNsdWcgfSkub3JGYWlsKCk7XHJcblx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGJsb2cpO1xyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwiYmxvZ1NjaGVtYSIsIkdFVCIsInJlcSIsImNvbnRleHQiLCJzbHVnIiwicGFyYW1zIiwiYmxvZyIsImZpbmRPbmUiLCJvckZhaWwiLCJqc29uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/blogs/[slug]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/database/blogSchema.ts":
/*!****************************************!*\
  !*** ./src/app/database/blogSchema.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// mongoose schema \nconst blogSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: Date,\n        required: false,\n        default: new Date()\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    }\n});\n// defining the collection and model\nconst _Blog = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models)['blogs'] || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('blogs', blogSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2RhdGFiYXNlL2Jsb2dTY2hlbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBYTVDLG1CQUFtQjtBQUNuQixNQUFNRSxhQUFhLElBQUlELDRDQUFNQSxDQUFRO0lBQ25DRSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsTUFBTTtRQUFFSCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDckNFLE1BQU07UUFBRUosTUFBTUs7UUFBTUgsVUFBVTtRQUFPSSxTQUFTLElBQUlEO0lBQU07SUFDeERFLGFBQWE7UUFBRVAsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzVDTSxTQUFTO1FBQUVSLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztBQUMxQztBQUVBLG9DQUFvQztBQUNwQyxNQUFNTyxRQUFRYix3REFBZSxDQUFDLFFBQVEsSUFDbENBLHFEQUFjLENBQUMsU0FBU0U7QUFFNUIsaUVBQWVXLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2RhdGFiYXNlL2Jsb2dTY2hlbWEudHM/YzgwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG4vLyB0eXBlc2NyaXB0IHR5cGUgKGNhbiBhbHNvIGJlIGFuIGludGVyZmFjZSlcclxudHlwZSBfQmxvZyA9IHtcclxuXHRcdHRpdGxlOiBzdHJpbmc7XHJcblx0ICBcdHNsdWc6IHN0cmluZzsgXHJcblx0XHRkYXRlOiBEYXRlO1xyXG5cdFx0ZGVzY3JpcHRpb246IHN0cmluZzsgLy8gZm9yIHByZXZpZXdcclxuXHQgIFx0Y29udGVudDogc3RyaW5nOyAvLyBmb3IgaW5kaXZpZHVhbCBibG9nIHBhZ2VcclxuXHRcdGNvbW1lbnRzOiBDb21tZW50W107IC8vIGFycmF5IGZvciBjb21tZW50c1xyXG59O1xyXG5cclxuXHJcbi8vIG1vbmdvb3NlIHNjaGVtYSBcclxuY29uc3QgYmxvZ1NjaGVtYSA9IG5ldyBTY2hlbWE8X0Jsb2c+KHtcclxuXHRcdHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuXHRcdHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0ZGF0ZTogeyB0eXBlOiBEYXRlLCByZXF1aXJlZDogZmFsc2UsIGRlZmF1bHQ6IG5ldyBEYXRlKCl9LFxyXG5cdFx0ZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG5cdFx0Y29udGVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pXHJcblxyXG4vLyBkZWZpbmluZyB0aGUgY29sbGVjdGlvbiBhbmQgbW9kZWxcclxuY29uc3QgX0Jsb2cgPSBtb25nb29zZS5tb2RlbHNbJ2Jsb2dzJ10gfHxcclxuICAgIG1vbmdvb3NlLm1vZGVsKCdibG9ncycsIGJsb2dTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX0Jsb2c7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiYmxvZ1NjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwic2x1ZyIsImRhdGUiLCJEYXRlIiwiZGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIl9CbG9nIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/database/blogSchema.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/database/db.ts":
/*!********************************!*\
  !*** ./src/app/database/db.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// db.ts\n\nconst url = process.env.MONGO_URI;\nlet connection;\n/**\r\n * Makes a connection to a MongoDB database. If a connection already exists, does nothing\r\n * Call this function at the start of api routes and data fetches\r\n * @returns {Promise<typeof mongoose>}\r\n */ const connectDB = async ()=>{\n    if (!connection) {\n        connection = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(url);\n        return connection;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2RhdGFiYXNlL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVE7QUFDd0I7QUFHaEMsTUFBTUMsTUFBY0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBRXpDLElBQUlDO0FBRUo7Ozs7Q0FJQyxHQUVELE1BQU1DLFlBQVk7SUFDaEIsSUFBSSxDQUFDRCxZQUFZO1FBQ2ZBLGFBQWEsTUFBTUwsdURBQWdCLENBQUNDO1FBQ3BDLE9BQU9JO0lBQ1Q7QUFDRjtBQUVBLGlFQUFlQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kYXRhYmFzZS9kYi50cz9hOWIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRiLnRzXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5jb25zdCB1cmw6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSSSBhcyBzdHJpbmc7XHJcblxyXG5sZXQgY29ubmVjdGlvbjogdHlwZW9mIG1vbmdvb3NlO1xyXG5cclxuLyoqXHJcbiAqIE1ha2VzIGEgY29ubmVjdGlvbiB0byBhIE1vbmdvREIgZGF0YWJhc2UuIElmIGEgY29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0cywgZG9lcyBub3RoaW5nXHJcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiBhdCB0aGUgc3RhcnQgb2YgYXBpIHJvdXRlcyBhbmQgZGF0YSBmZXRjaGVzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPHR5cGVvZiBtb25nb29zZT59XHJcbiAqL1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmICghY29ubmVjdGlvbikge1xyXG4gICAgY29ubmVjdGlvbiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QodXJsKTtcclxuICAgIHJldHVybiBjb25uZWN0aW9uO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsImNvbm5lY3Rpb24iLCJjb25uZWN0REIiLCJjb25uZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/database/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fblogs%2F%5Bslug%5D%2Froute.ts&appDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CDocuments%5CComputer%20Projects%5Cbootcamp-project-2024%5Cbootcamp-milestone-two%5Cbootcamp-milestone-two&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
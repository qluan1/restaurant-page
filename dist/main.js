/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/barjpeg.jpg */ \"./src/img/barjpeg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    position: relative;\\n    margin: 0;\\n    height: 100%;\\n    width: 100%;\\n    min-height: 100vh;\\n    min-width: 800px;\\n    background-color: black;\\n    background-repeat : no-repeat;\\n    background-attachment: fixed;\\n    background-position: center center;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: auto 110vh;\\n}\\n\\n#main {\\n    position: absolute;\\n    top: 40px;\\n    bottom: 0px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\\n\\n.banner {\\n    position: fixed;\\n    top: 0px;\\n    left: 0px;\\n    height : 40px;\\n    width: 100%;\\n    background-color: #ffef00;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n.header {\\n    color: #ffef00;\\n    display: flex;\\n    justify-content: center;\\n    column-gap: 50px;\\n    align-items: center;\\n    padding: 0 25% 0 25%;\\n    flex-wrap:wrap;\\n    margin-top: 20px;\\n}\\n\\n.title {\\n    max-width: 300px;\\n    cursor: pointer;\\n    transition: 0.4s;\\n}\\n\\n.title img {\\n    position: relative;\\n    bottom: -5px;\\n    width: 100%;\\n    height: 100%;\\n    object-fit: contain;\\n    overflow: hidden;\\n    filter: grayscale(1) invert(1) brightness(0) saturate(100%) invert(97%) sepia(99%) saturate(6314%) hue-rotate(347deg) brightness(97%) contrast(109%);\\n}\\n\\n.nav {\\n    width: 300px;\\n    font-family: sans-serif;\\n    font-weight: 300;\\n    display: flex;\\n    gap: 20px;\\n    padding: 10px 0px;\\n    margin-top: 10px;\\n}\\n\\n.nav a {\\n    cursor: pointer;\\n    transition: 0.4s;\\n}\\n\\n.nav a.current{\\n    border-bottom: 2px solid #ffef00;\\n}\\n\\n.blur {\\n    filter: blur(2px);\\n    transition: 0.4s;\\n}\\n\\n.footer {\\n    height: 70px;\\n    width: 100vw;\\n    background-color: #ffef00;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n\\n#content {\\n    flex: 1 1 auto;\\n    justify-self: stretch;\\n    padding: 30px;\\n    background-color: rgba(0, 0, 0, 0.8);\\n    width: 80%;\\n    max-width: 1200px;\\n    margin: 0 auto;\\n    color: white;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n}\\n\\n.description {\\n    display: flex;\\n    justify-content: center;\\n    gap: 40px;\\n    flex-wrap: nowrap;;\\n}\\n\\n.about,\\n.statement {\\n    max-width: 40%;\\n}\\n\\n.statement {\\n    margin: 0;\\n    font-size: 3em;\\n}\\n\\n.about h2 {\\n    margin: 0;\\n}\\n\\n.about p {\\n    font-family: sans-serif;\\n    font-weight: 100;\\n    color: #8a8a8a;\\n}\\n\\n.about p span {\\n    color:#ffef00;\\n}\\n\\n.media {\\n    display: inline-block;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.media p {\\n    color: darkgrey;\\n}\\n\\n.menu-category h2 div {\\n    margin-top: 10px;\\n    margin-bottom: 0;\\n    height: 1px;\\n    background-color: #ffef00;\\n}\\n\\n.menu-category {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    column-gap: 30px;\\n}\\n\\n.menu-category h2 {\\n    grid-column-start: 0;\\n    grid-column-end: span 2;\\n}\\n\\n.menu-item {\\n    padding-left: 20px;\\n}\\n\\n\\n.menu-item p:first-child{\\n    font-weight: 600;\\n    font-size: large;\\n}\\n\\n.menu-item p + p {\\n    color:#8a8a8a;\\n    font-size: small;\\n    font-weight: 200;\\n}\\n\\n.form-input input {\\n    width: 30vw;\\n    background-color: rgba(0,0,0,0);\\n    color: white;\\n    border: none;\\n    border-bottom: 1px solid white; \\n    overflow: auto;\\n}\\n\\n.form-input input:focus {\\n    outline: none;\\n}\\n\\n.form-input {\\n    position: relative;\\n    margin-top: 25px;\\n}\\n\\n.form-input span {\\n    transition: 0.4s;\\n    position: absolute;\\n    left: 0px;\\n}\\n\\n.form-input input:valid + span {\\n    transform: translate(0px, -20px);\\n    transition: 0.4s;\\n    font-size: smaller;\\n    color:#ffef00;    \\n}\\n\\n.form-input input:focus + span {\\n    transform: translate(0px, -20px);\\n    transition: 0.4s;\\n    font-size: smaller;\\n    color:#ffef00;\\n}\\n\\n.contact-page {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\nform {\\n    width: 70%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\nform button {\\n    cursor: pointer;\\n    margin-top: 35px;\\n    background-color: #ffef00;\\n    border: none;\\n    width: 100px;\\n    height: 50px;\\n}\\n\\n.map-container {\\n    margin-top: 50px;\\n    width: 70%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.map-container img {\\n    max-width: 100%;\\n    width: 100%;\\n    height: 100%;\\n    object-fit:scale-down;\\n    object-position: 50% top;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/banner.js":
/*!***********************!*\
  !*** ./src/banner.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadBanner)\n/* harmony export */ });\nfunction loadBanner() {\n    let banner = document.createElement('div');\n    banner.className = 'banner';\n    banner.innerHTML = '<b>OPENS 7/24</b>' +\n                        ' | ' + \n                        '<b>ENTER AT YOUR OWN RISK</b>';\n    document.body.appendChild(banner);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/banner.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _img_afterlife_map_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/afterlife_map.jpg */ \"./src/img/afterlife_map.jpg\");\n\n\nfunction loadContact () {\n    let content = document.querySelector('#content');\n    while (content.firstElementChild) {\n        content.removeChild(content.firstElementChild);\n    }\n\n    let div = document.createElement('div');\n    div.className = 'contact-page';\n    content.appendChild(div);\n\n    div.appendChild(getMessage());\n    div.appendChild(getMap());\n};\n\nfunction getMessage() {\n    let form = document.createElement('form');\n    form.setAttribute('onsubmit', 'return false');\n    form.appendChild(document.createElement('h3'));\n    form.querySelector('h3').textContent = 'Message Us';\n\n    let formItems = ['Full Name', 'Email', 'Type Your Message'];\n    for (let i = 0; i < formItems.length; i++) {\n        let div = document.createElement('label');\n        div.className = 'form-input';\n        form.appendChild(div);\n        div.appendChild(document.createElement('input'));\n        div.querySelector('input').setAttribute('type', 'text');\n        div.querySelector('input').setAttribute('required', '');\n        div.appendChild(document.createElement('span'));\n        div.querySelector('span').textContent = formItems[i];\n    }\n\n    let submit = document.createElement('button');\n    submit.textContent = 'Submit';\n    submit.className = 'form-submit';\n    form.appendChild(submit);\n    return form;\n}\n\nfunction getMap() {\n    let div = document.createElement('div');\n    div.className = 'map-container';\n    div.appendChild(document.createElement('h3'));\n    div.querySelector('h3').textContent = 'Our Location';\n    let map = new Image();\n    map.src = _img_afterlife_map_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    div.appendChild(map);\n    return div;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadFooter)\n/* harmony export */ });\nfunction loadFooter() {\n    let footer = document.createElement('div');\n    footer.className = 'footer';\n    document.querySelector('#main').appendChild(footer);\n    footer.innerHTML = '<div>&copy; 2022 qluan1 The Odin Project Assignment</div>' + \n                       '<div>Assets used in this fan project are properties of their respective owners.</div>';\n};\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHeader)\n/* harmony export */ });\n/* harmony import */ var _img_afterlife_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/afterlife_logo.png */ \"./src/img/afterlife_logo.png\");\n\n\nfunction loadHeader() {\n    let header = document.createElement('div');\n    header.className = 'header';\n\n    let title = document.createElement('div');\n    title.className = 'title';\n    let afterLogo = new Image();\n    afterLogo.src = _img_afterlife_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n    title.appendChild(afterLogo);\n    title.addEventListener('mouseenter', ()=>{\n        title.classList.add('blur');\n        setTimeout(()=>{\n            title.classList.remove('blur');\n        }, 200);\n    });\n\n    let nav = document.createElement('h2');\n    nav.className = 'nav';\n\n    for (let s of ['Home', 'Menu', 'Contact']) {\n        let link = document.createElement('a');\n        link.id = s;\n        link.textContent = s;\n        nav.appendChild(link);\n        link.addEventListener('mouseenter', ()=>{\n            link.classList.add('blur');\n            setTimeout(()=>{\n                link.classList.remove('blur');\n            }, 200);\n        });\n    }\n\n    header.appendChild(title);\n    header.appendChild(nav);\n    document.querySelector('#main').appendChild(header);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    let content = document.querySelector('#content');\n    if (content) {\n        while (content.firstElementChild) {\n            content.removeChild(content.firstElementChild);\n        }\n    } else {\n        content = document.createElement('div');\n        content.id = 'content';\n        document.querySelector('#main').appendChild(content);\n    }\n\n    loadDescription();\n    loadMedia();\n    \n    function loadDescription() {\n        let des = document.createElement('div');\n        des.className = 'description';\n        content.appendChild(des);\n\n        let statement = document.createElement('h1');\n        des.appendChild(statement);\n        statement.className = 'statement';\n        statement.innerHTML = 'Welcome' + '<br>' +'To The' + '<br>' + 'Major League.';\n        \n        let about = document.createElement('div');\n        des.appendChild(about);\n        about.className = 'about';\n        about.innerHTML = '<h2>Premiere Solo Bar of Night City Now In Watson District</h2>' +\n                          '<p>There is only one path in Night City worth walking: the one that leads to the <span>Afterlife</span>.'+\n                          '<br> <br>' +\n                          'The <span>Afterlife</span> is an iconic bar where the who\\'s who of mercs and first-rate fixers gather to kick back or conduct biz. ' +\n                          'Once you make it here, sooner or later, everything else opens up to you.</p>';\n    }\n\n    function loadMedia(){\n        let media = document.createElement('div');\n        media.className = 'media';\n        content.appendChild(media);\n\n        let promo = document.createElement('p');\n        promo.className = 'promotion';\n        promo.textContent = 'AS FEATURED IN';\n        media.appendChild(promo);\n\n        let refer = document.createElement('div');\n        refer.className = 'refs';\n        media.appendChild(refer);\n\n        let ref = document.createElement('a');\n        refer.appendChild(ref);\n        ref.setAttribute('target', '_blank');\n        ref.setAttribute('rel', 'noopener noreferer');\n        ref.setAttribute('href', 'https://cyberpunk.fandom.com/wiki/Afterlife');\n\n        let img = document.createElement('img');\n        ref.appendChild(img);\n        img.setAttribute('src', 'https://static.wikia.nocookie.net/cyberpunk/images/e/e6/Site-logo.png');\n    }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage.js */ \"./src/loadPage.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nlet title = document.querySelector('.title');\nlet home = document.querySelector('#Home');\nlet menu = document.querySelector('#Menu');\nlet contact = document.querySelector('#Contact');\n\ntitle.addEventListener('click', ()=>{\n    let current = document.querySelector('a.current');\n    if (current) {\n        current.classList.remove('current');\n    }\n    home.classList.add('current');\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nhome.addEventListener('click', ()=> {\n    let current = document.querySelector('a.current');\n    if (current) {\n        current.classList.remove('current');\n    }\n    home.classList.add('current');\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nmenu.addEventListener('click', () => {\n    let current = document.querySelector('a.current');\n    if (current) {\n        current.classList.remove('current');\n    }\n    menu.classList.add('current');\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\ncontact.addEventListener('click', ()=> {\n    let current = document.querySelector('a.current');\n    if (current) {\n        current.classList.remove('current');\n    }\n    contact.classList.add('current');\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _banner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.js */ \"./src/banner.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\n\n\n\n\nfunction loadPage() {\n    (0,_banner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    document.getElementById('Home').classList.add('current');\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/loadPage.js?");

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuDrinks\": () => (/* binding */ menuDrinks),\n/* harmony export */   \"menuFood\": () => (/* binding */ menuFood),\n/* harmony export */   \"menuSpecials\": () => (/* binding */ menuSpecials)\n/* harmony export */ });\nfunction menuSpecials () {\n    let specials = document.createElement('div');\n    specials.className = 'menu-category';\n    \n    let title = document.createElement('h2');\n    title.textContent = 'House Special Cocktails'; \n    specials.appendChild(title);\n    title.appendChild(document.createElement('div'));\n    \n    let names = ['Johny Silverhand', 'Jackie Welles'];\n    let description = [\n        'Two Tequila old fashioned with a splash of cerveza and a chili garnish.',\n        'Shot of vodka on the rocks, lime juice, ginger beer...oh, and most importantly - a splansh of love.',\n    ];\n\n    for (let i = 0; i < names.length; i++) {\n        let item = document.createElement('div');\n        let p1 = document.createElement('p');\n        p1.textContent = `${i+1}. ` + names[i];\n        let p2 = document.createElement('p');\n        p2.textContent = description[i];\n        item.appendChild(p1);\n        item.appendChild(p2);\n        item.className = 'menu-item';\n        specials.append(item);\n    } \n    \n    return specials;\n};\n\nfunction menuFood () {\n    let food = document.createElement('div');\n    food.className = 'menu-category';\n\n    let title = document.createElement('h2');\n    title.textContent = 'Food and Beverages';\n    food.appendChild(title);\n    title.appendChild(document.createElement('div'));\n\n    let names = [\n        'All Foods Meat Delight',\n        'Burrito XXL Rosado',\n        'Nicola',\n        'Spunky Monkey Mint',\n    ];\n    let description = [\n        'Tastes just like real meat!',\n        'Big burrito energy.',\n        'America\\'s favorite drink!',\n        'For a minty punch to the face',\n    ];\n\n    for (let i = 0; i < names.length; i++) {\n        let item = document.createElement('div');\n        let p1 = document.createElement('p');\n        p1.textContent = `${i+1}. ` + names[i];\n        let p2 = document.createElement('p');\n        p2.textContent = description[i];\n        item.appendChild(p1);\n        item.appendChild(p2);\n        item.className = 'menu-item';\n        food.append(item);\n    } \n    \n    return food;    \n};\n\nfunction menuDrinks () {\n    let drinks = document.createElement('div');\n    drinks.className = 'menu-category';\n\n    let title = document.createElement('h2');\n    title.textContent = 'Drinks'; \n    drinks.appendChild(title);\n    title.appendChild(document.createElement('div'));\n    \n    let names = [\n        'Ab-synth',\n        'Paul Night',\n        'Randver',\n        'Centzon Totochtin',\n        'Pitorro',\n        'O\\'Dickin Whiskey',\n    ];\n    let description = [\n        'Be Bohemian.',\n        'A favorite drink among artists and dreamers.',\n        'Beer for those who demand more.',\n        'Tequila with no equal.',\n        'Cheap. But could cost you a new pair of eyes.',\n        'Whiskey. Anything else is just frills.'\n    ];\n\n    for (let i = 0; i < names.length; i++) {\n        let item = document.createElement('div');\n        let p1 = document.createElement('p');\n        p1.textContent = `${i+1}. ` + names[i];\n        let p2 = document.createElement('p');\n        p2.textContent = description[i];\n        item.appendChild(p1);\n        item.appendChild(p2);\n        item.className = 'menu-item';\n        drinks.append(item);\n    } \n    \n    return drinks;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-items.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items.js */ \"./src/menu-items.js\");\n\n\nfunction loadMenu () {\n    let content = document.querySelector('#content');\n    while (content.firstElementChild) {\n        content.removeChild(content.firstElementChild);\n    }\n\n    content.appendChild((0,_menu_items_js__WEBPACK_IMPORTED_MODULE_0__.menuSpecials)());\n    content.appendChild((0,_menu_items_js__WEBPACK_IMPORTED_MODULE_0__.menuDrinks)());\n    content.appendChild((0,_menu_items_js__WEBPACK_IMPORTED_MODULE_0__.menuFood)());\n};\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/img/afterlife_logo.png":
/*!************************************!*\
  !*** ./src/img/afterlife_logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c945017b01d71878b98d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/afterlife_logo.png?");

/***/ }),

/***/ "./src/img/afterlife_map.jpg":
/*!***********************************!*\
  !*** ./src/img/afterlife_map.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9beb99d3989f5e6d3ad9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/afterlife_map.jpg?");

/***/ }),

/***/ "./src/img/barjpeg.jpg":
/*!*****************************!*\
  !*** ./src/img/barjpeg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2face700d3573808664.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/barjpeg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
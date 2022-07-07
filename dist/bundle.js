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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* General Style */\\n\\nhtml {\\n  box-sizing: border-box;\\n  font-family: -apple-system, BlinkMacSystemFont, sans-serif;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: grey;\\n}\\n\\n.game {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.title {\\n  margin: 1em;\\n  padding: 5px;\\n  font-size: 2.5em;\\n  text-shadow: 2px 2px 4px rgb(72, 72, 114);\\n\\n  border-radius: 5px;\\n}\\n\\n.container {\\n  display: flex;\\n  gap: 3rem;\\n}\\n\\n/* Message Style */\\n\\n.message {\\n  font-weight: bold;\\n  font-size: larger;\\n  margin: 2em;\\n  padding: 0.5em;\\n\\n  background-color: lightgrey;\\n  border-radius: 5px;\\n}\\n\\n/* Gameboard Style */\\n\\n.board {\\n  width: 275px;\\n  height: 275px;\\n  display: flex;\\n  flex-wrap: wrap;\\n\\n  background-color: lightblue;\\n  box-shadow: 0px 0px 10px 1px;\\n}\\n\\n.board-cell-first {\\n  width: 25px;\\n  height: 25px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.board-cell-letter,\\n.board-cell-number {\\n  width: 25px;\\n  height: 25px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: blue;\\n}\\n\\n.battle-cell {\\n  width: 25px;\\n  height: 25px;\\n  display: flex;\\n  border-top: 1px solid black;\\n  border-left: 1px solid black;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.battle-cell[data-row=\\\"J\\\"] {\\n  border-bottom: 1px solid black;\\n}\\n\\n.battle-cell[data-col=\\\"9\\\"] {\\n  border-right: 1px solid black;\\n}\\n\\n.computer-board > *,\\n.computer-board > .battle-cell[data-row=\\\"J\\\"],\\n.computer-board > .battle-cell[data-col=\\\"9\\\"] {\\n  border-color: grey;\\n  color: red;\\n}\\n\\n.active-battle-cell:hover {\\n  background-color: red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-js-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst displayController = () => {\n  const humanBoardDiv = document.querySelector(\".human-board\");\n  const computerBoardDiv = document.querySelector(\".computer-board\");\n\n  const whichPlayerDiv = (player) => {\n    return player.isComputer() ? computerBoardDiv : humanBoardDiv;\n  };\n\n  const createPlayerBoard = (player) => {\n    const playerName = player.getName();\n    const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().getBoard();\n    const playerBoardDiv = whichPlayerDiv(player);\n\n    const emptyDiv = document.createElement(\"div\");\n    emptyDiv.className = `board-cell-first`;\n    playerBoardDiv.appendChild(emptyDiv);\n\n    for (let i = 0; i < 10; i += 1) {\n      const numberDiv = document.createElement(\"div\");\n      numberDiv.className = `board-cell-number`;\n      numberDiv.textContent = i;\n      playerBoardDiv.appendChild(numberDiv);\n    }\n\n    // eslint-disable-next-line guard-for-in, no-restricted-syntax\n    for (const rowVal in board) {\n      const letterDiv = document.createElement(\"div\");\n      letterDiv.className = `board-cell-letter`;\n      letterDiv.textContent = rowVal;\n      playerBoardDiv.appendChild(letterDiv);\n\n      // eslint-disable-next-line no-restricted-syntax\n      for (const colVal of board[rowVal].keys()) {\n        const battleCellDiv = document.createElement(\"div\");\n        battleCellDiv.className = `battle-cell board-cell-${playerName}`;\n        battleCellDiv.dataset.row = rowVal;\n        battleCellDiv.dataset.col = colVal;\n        playerBoardDiv.appendChild(battleCellDiv);\n      }\n    }\n  };\n\n  const drawOnBoard = (boardDiv, symbol, symbolLocations) => {\n    symbolLocations.forEach((location) => {\n      location.colSpots.forEach((spot) => {\n        const battleCell = boardDiv.querySelector(\n          `[data-row=\"${location.row}\"][data-col=\"${spot}\"]`\n        );\n\n        battleCell.textContent = symbol;\n      });\n    });\n  };\n\n  const drawShips = (player) => {\n    const playerBoardDiv = whichPlayerDiv(player);\n    const playerBoard = player.getPlayerGameboard();\n    const symbolLocations = playerBoard.getShipLocations();\n    drawOnBoard(playerBoardDiv, \"S\", symbolLocations);\n  };\n  const drawHits = (player) => {\n    const playerBoardDiv = whichPlayerDiv(player);\n    const playerBoard = player.getPlayerGameboard();\n    const symbolLocations = playerBoard.getHitLocations();\n    drawOnBoard(playerBoardDiv, \"X\", symbolLocations);\n  };\n  const drawMisses = (player) => {\n    const playerBoardDiv = whichPlayerDiv(player);\n    const playerBoard = player.getPlayerGameboard();\n    const symbolLocations = playerBoard.getMissLocations();\n    drawOnBoard(playerBoardDiv, \"O\", symbolLocations);\n  };\n\n  const listenForOpenOpponentBattleCells = (opponent) => {\n    const otherPlayer = opponent.getOpponent();\n    const opponentDiv = whichPlayerDiv(opponent);\n    const openLocations = opponent\n      .getPlayerGameboard()\n      .getNonAttackedLocations();\n\n    function attackCell() {\n      openLocations.forEach((rowLocations) => {\n        rowLocations.colSpots.forEach((loc) => {\n          const battleCell = opponentDiv.querySelector(\n            `[data-row=\"${rowLocations.row}\"][data-col=\"${loc}\"]`\n          );\n          battleCell.classList.remove(\"active-battle-cell\");\n          battleCell.removeEventListener(\"click\", attackCell);\n        });\n      });\n      const attackRow = this.dataset.row;\n      const attackCol = Number(this.dataset.col);\n\n      otherPlayer.attackOpponent(attackRow, attackCol);\n      drawHits(opponent);\n      drawMisses(opponent);\n\n      const gameOverWin = opponent.getPlayerGameboard().areShipsSunk();\n\n      if (gameOverWin) {\n        return;\n      }\n\n      opponent.attackByComputer();\n      drawHits(otherPlayer);\n      drawMisses(otherPlayer);\n\n      const gameOverLose = otherPlayer.getPlayerGameboard().areShipsSunk();\n\n      if (gameOverLose) {\n        return;\n      }\n\n      listenForOpenOpponentBattleCells(opponent);\n    }\n\n    openLocations.forEach((rowLocations) => {\n      rowLocations.colSpots.forEach((loc) => {\n        const battleCell = opponentDiv.querySelector(\n          `[data-row=\"${rowLocations.row}\"][data-col=\"${loc}\"]`\n        );\n        battleCell.classList.add(\"active-battle-cell\");\n        battleCell.addEventListener(\"click\", attackCell);\n      });\n    });\n  };\n\n  return {\n    createPlayerBoard,\n    drawShips,\n    drawHits,\n    drawMisses,\n    listenForOpenOpponentBattleCells,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/displayController.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst gameboard = () => {\n  const board = {\n    A: Array(10),\n    B: Array(10),\n    C: Array(10),\n    D: Array(10),\n    E: Array(10),\n    F: Array(10),\n    G: Array(10),\n    H: Array(10),\n    I: Array(10),\n    J: Array(10),\n  };\n\n  const getBoard = () => Object.assign(board);\n\n  const shipTypes = {\n    carrier: { size: 5, shipInstance: (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(5), shipCoordinates: [] },\n    battleship: { size: 4, shipInstance: (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4), shipCoordinates: [] },\n    cruiser: { size: 3, shipInstance: (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3), shipCoordinates: [] },\n    submarine: { size: 3, shipInstance: (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3), shipCoordinates: [] },\n    destroyer: { size: 2, shipInstance: (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2), shipCoordinates: [] },\n  };\n\n  const placeHorizontal = (shipType, row, col) => {\n    const shipSize = shipTypes[shipType].size;\n\n    for (let i = col; i < col + shipSize; i += 1) {\n      board[row][i] = \"S\";\n      shipTypes[shipType].shipCoordinates.push({ row, col: i });\n    }\n  };\n\n  const placeVertical = (shipType, row, col) => {\n    const shipSize = shipTypes[shipType].size;\n    const rowCharCode = row.charCodeAt();\n\n    for (let i = rowCharCode; i < rowCharCode + shipSize; i += 1) {\n      const rowChar = String.fromCharCode(i);\n      board[rowChar][col] = \"S\";\n      shipTypes[shipType].shipCoordinates.push({ row: rowChar, col });\n    }\n  };\n\n  const isValidSpot = (shipSize, row, col, axis) => {\n    if (axis === \"horizontal\") {\n      for (let i = col; i < col + shipSize; i += 1) {\n        if (board[row][i]) {\n          return false;\n        }\n      }\n\n      return true;\n    }\n    const rowCharCode = row.charCodeAt();\n\n    for (let i = rowCharCode; i < rowCharCode + shipSize; i += 1) {\n      const rowChar = String.fromCharCode(i);\n      if (board[rowChar][col]) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n\n  const placeShip = (shipType, row, col, axis) => {\n    const shipSize = shipTypes[shipType].size;\n\n    if (isValidSpot(shipSize, row, col, axis)) {\n      if (axis === \"horizontal\") {\n        placeHorizontal(shipType, row, col);\n      } else {\n        placeVertical(shipType, row, col);\n      }\n    }\n  };\n\n  const hitShip = (row, col) => {\n    let shipHitIndex;\n    const shipHit = Object.values(shipTypes).filter((shipProperties) => {\n      let matchedCoordinates = false;\n      shipProperties.shipCoordinates.forEach(\n        (coordinatePair, coordinateIndex) => {\n          const arrayHitCoordinates = JSON.stringify({ row, col });\n          const arrayCoordinatePair = JSON.stringify(coordinatePair);\n          if (arrayCoordinatePair === arrayHitCoordinates) {\n            matchedCoordinates = true;\n            shipHitIndex = coordinateIndex;\n          }\n        }\n      );\n      return matchedCoordinates;\n    })[0];\n\n    shipHit.shipInstance.hit(shipHitIndex);\n  };\n\n  const receiveAttack = (row, col) => {\n    const attackSpot = board[row][col];\n\n    if (attackSpot === \"S\") {\n      board[row][col] = \"X\";\n      hitShip(row, col);\n    } else {\n      board[row][col] = \"O\";\n    }\n  };\n\n  const areShipsSunk = () => {\n    let shipsSunk = true;\n    Object.values(shipTypes).forEach((shipProperties) => {\n      if (\n        shipProperties.shipCoordinates.length !== 0 &&\n        !shipProperties.shipInstance.isSunk()\n      ) {\n        shipsSunk = false;\n      }\n    });\n    return shipsSunk;\n  };\n\n  const getNonAttackedLocations = () => {\n    const locations = [];\n    Object.entries(board).forEach((rowArray) => {\n      const rowValue = rowArray[0];\n      const rowSpots = rowArray[1];\n      const colSpots = [];\n\n      for (let i = 0; i < rowSpots.length; i += 1) {\n        const spot = rowSpots[i];\n        if (spot === undefined || spot === \"S\") {\n          colSpots.push(i);\n        }\n      }\n\n      if (colSpots.length !== 0) {\n        locations.push({ row: rowValue, colSpots });\n      }\n    });\n\n    return locations;\n  };\n\n  const getSymbolLocations = (symbol) => {\n    const locations = [];\n    Object.entries(board).forEach((rowArray) => {\n      const rowValue = rowArray[0];\n      const rowSpots = rowArray[1];\n      const colSpots = [];\n\n      for (let i = 0; i < rowSpots.length; i += 1) {\n        const spot = rowSpots[i];\n        if (spot === symbol) {\n          colSpots.push(i);\n        }\n      }\n\n      if (colSpots.length !== 0) {\n        locations.push({ row: rowValue, colSpots });\n      }\n    });\n\n    return locations;\n  };\n\n  const getShipLocations = () => getSymbolLocations(\"S\");\n  const getHitLocations = () => getSymbolLocations(\"X\");\n  const getMissLocations = () => getSymbolLocations(\"O\");\n\n  return {\n    getBoard,\n    placeShip,\n    receiveAttack,\n    areShipsSunk,\n    getNonAttackedLocations,\n    getShipLocations,\n    getHitLocations,\n    getMissLocations,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst humanPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"human\");\nconst computerPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"computer\");\nhumanPlayer.setOpponent(computerPlayer);\ncomputerPlayer.setOpponent(humanPlayer);\n\nhumanPlayer.getPlayerGameboard().placeShip(\"cruiser\", \"B\", 2, \"horizontal\");\n\ncomputerPlayer.getPlayerGameboard().placeShip(\"cruiser\", \"B\", 2, \"horizontal\");\n\n(0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().createPlayerBoard(humanPlayer);\n(0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().createPlayerBoard(computerPlayer);\n\n(0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().drawShips(humanPlayer);\n\n(0,_displayController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().listenForOpenOpponentBattleCells(computerPlayer);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst player = (name) => {\n  let opponent;\n  const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const getName = () => name;\n  const getOpponent = () => opponent;\n  const getPlayerGameboard = () => playerGameboard;\n  const setOpponent = (otherPlayer) => {\n    opponent = otherPlayer;\n  };\n  const isComputer = () => name === \"computer\";\n\n  const attackOpponent = (row, col) => {\n    opponent.getPlayerGameboard().receiveAttack(row, col);\n  };\n\n  const createRandomLocation = () => {\n    const openLocations = opponent\n      .getPlayerGameboard()\n      .getNonAttackedLocations();\n\n    const rowLetters = [];\n    let colNumbers = [];\n\n    openLocations.forEach((rowLocations) => {\n      rowLetters.push(rowLocations.row);\n      colNumbers = rowLocations.colSpots;\n    });\n\n    const randRow = rowLetters[Math.floor(Math.random() * rowLetters.length)];\n\n    const randCol = colNumbers[Math.floor(Math.random() * colNumbers.length)];\n\n    return { randRow, randCol };\n  };\n\n  const attackByComputer = () => {\n    const randLocation = createRandomLocation();\n    const { randRow } = randLocation;\n    const { randCol } = randLocation;\n\n    opponent.getPlayerGameboard().receiveAttack(randRow, randCol);\n  };\n\n  return {\n    getName,\n    getPlayerGameboard,\n    setOpponent,\n    attackOpponent,\n    attackByComputer,\n    isComputer,\n    getOpponent,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ship = (length) => {\n  const hits = Array(length);\n\n  const getLength = () => length;\n  const getHits = () => hits.filter((spot, index) => spot === index);\n\n  const hit = (spot) => {\n    hits[spot] = spot;\n  };\n\n  const isSunk = () => getHits().length === length;\n\n  return { getLength, getHits, hit, isSunk };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n\n//# sourceURL=webpack://battleship-js-odin/./src/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
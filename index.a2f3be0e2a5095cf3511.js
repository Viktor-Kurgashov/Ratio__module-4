/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/style.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/style.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section, .about {\n  width: 90%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .section, .about {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1024px) {\n  .section, .about {\n    max-width: 1200px;\n  }\n}\n.article-image, .about__image {\n  aspect-ratio: 3/2;\n  object-fit: cover;\n}\n\n.article-image > img, .about__image > img {\n  height: 100%;\n  object-fit: cover;\n}\n\n.about {\n  padding: 1em 0 4em;\n}\n\n.about > p {\n  margin-top: 1em;\n}\n\n.about > p:first-of-type {\n  margin-top: 0;\n}\n\n@media (max-width: 767px) {\n  .about__image {\n    width: 100%;\n    margin: 1.5em 0 2em;\n  }\n}\n@media (min-width: 768px) {\n  .about {\n    max-width: 960px;\n    padding-top: 0.5em;\n  }\n\n  .about::after {\n    content: \"\";\n    clear: both;\n    display: table;\n  }\n\n  .about__header {\n    margin-bottom: 1em;\n  }\n\n  .about__image {\n    float: right;\n    width: 52%;\n    padding: 0.5em 0 1em 1em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/section.scss","webpack://./src/components/about/style.scss","webpack://./src/style/extend/article-image.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;EACA,cAAA;ACCF;;ADEA;EACE;IACE,gBAAA;ECCF;AACF;ADEA;EACE;IACE,iBAAA;ECAF;AACF;ACfA;EACE,iBAAA;EACA,iBAAA;ADiBF;;ACdA;EACE,YAAA;EACA,iBAAA;ADiBF;;AArBA;EAEE,kBAAA;AAuBF;;AAhBA;EACE,eAAA;AAmBF;;AAhBA;EACE,aAAA;AAmBF;;AAdA;EACE;IACE,WAAA;IACA,mBAAA;EAiBF;AACF;AAZA;EACE;IACE,gBAAA;IACA,kBAAA;EAcF;;EAXA;IACE,WAAA;IACA,WAAA;IACA,cAAA;EAcF;;EAXA;IACE,kBAAA;EAcF;;EAXA;IACE,YAAA;IACA,UAAA;IACA,wBAAA;EAcF;AACF","sourcesContent":[".section {\r\n  width: 90%;\r\n  max-width: 480px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .section {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .section {\r\n    max-width: 1200px;\r\n  }\r\n}","@import '../../style/extend/section.scss';\r\n@import '../../style/extend/article-image.scss';\r\n\r\n.about {\r\n  @extend .section;\r\n  padding: 1em 0 4em;\r\n}\r\n\r\n.about__image {\r\n  @extend .article-image;\r\n}\r\n\r\n.about > p {\r\n  margin-top: 1em;\r\n}\r\n\r\n.about > p:first-of-type {\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .about__image {\r\n    width: 100%;\r\n    margin: 1.5em 0 2em;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .about {\r\n    max-width: 960px;\r\n    padding-top: 0.5em;\r\n  }\r\n\r\n  .about::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n  .about__header {\r\n    margin-bottom: 1em;\r\n  }\r\n\r\n  .about__image {\r\n    float: right;\r\n    width: 52%;\r\n    padding: 0.5em 0 1em 1em;\r\n  }\r\n}",".article-image {\r\n  aspect-ratio: 3/2;\r\n  object-fit: cover;\r\n}\r\n\r\n.article-image > img {\r\n  height: 100%;\r\n  object-fit: cover;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/article/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/article/style.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section, .article {\n  width: 90%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .section, .article {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1024px) {\n  .section, .article {\n    max-width: 1200px;\n  }\n}\n.article-image, .article__image {\n  aspect-ratio: 3/2;\n  object-fit: cover;\n}\n\n.article-image > img, .article__image > img {\n  height: 100%;\n  object-fit: cover;\n}\n\n.article-info, .article__info {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  gap: 4px 8px;\n}\n\n.article-info__text, .article__info {\n  font-size: calc(1em - 2px);\n  line-height: 1.6em;\n  color: darkgrey;\n}\n\n.article-info__marker, .article__marker {\n  background: darkgrey;\n  border-radius: 50%;\n  width: 5px;\n  height: 5px;\n}\n\n.article {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 1em;\n}\n\n.article__image {\n  width: 100%;\n  margin-bottom: 1.5em;\n}\n\n.article__info {\n  justify-content: center;\n  max-width: 480px;\n  margin: 1em 0;\n}\n\n.article__text {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1em;\n}\n\n@media (min-width: 768px) {\n  .article {\n    padding-top: 0;\n  }\n\n  .article__info > p:last-child {\n    flex-basis: 100%;\n    text-align: center;\n  }\n\n  .article__image,\n.article__header,\n.article__text {\n    max-width: 960px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/section.scss","webpack://./src/components/article/style.scss","webpack://./src/style/extend/article-image.scss","webpack://./src/style/extend/article-info.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;EACA,cAAA;ACCF;;ADEA;EACE;IACE,gBAAA;ECCF;AACF;ADEA;EACE;IACE,iBAAA;ECAF;AACF;ACfA;EACE,iBAAA;EACA,iBAAA;ADiBF;;ACdA;EACE,YAAA;EACA,iBAAA;ADiBF;;AExBA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;AF2BF;;AExBA;EACE,0BAAA;EACA,kBAAA;EACA,eAAA;AF2BF;;AExBA;EACE,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AF2BF;;AAxCA;EAEE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AA0CF;;AAvCA;EAEE,WAAA;EACA,oBAAA;AAyCF;;AAtCA;EAGE,uBAAA;EACA,gBAAA;EACA,aAAA;AAuCF;;AAhCA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAmCF;;AA9BA;EACE;IACE,cAAA;EAiCF;;EA9BA;IACE,gBAAA;IACA,kBAAA;EAiCF;;EA9BA;;;IAGE,gBAAA;EAiCF;AACF","sourcesContent":[".section {\r\n  width: 90%;\r\n  max-width: 480px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .section {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .section {\r\n    max-width: 1200px;\r\n  }\r\n}","@import '../../style/extend/section.scss';\r\n@import '../../style/extend/article-image.scss';\r\n@import '../../style/extend/article-info.scss';\r\n\r\n.article {\r\n  @extend .section;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1em;\r\n}\r\n\r\n.article__image {\r\n  @extend .article-image;\r\n  width: 100%;\r\n  margin-bottom: 1.5em;\r\n}\r\n\r\n.article__info {\r\n  @extend .article-info;\r\n  @extend .article-info__text;\r\n  justify-content: center;\r\n  max-width: 480px;\r\n  margin: 1em 0;\r\n}\r\n\r\n.article__marker {\r\n  @extend .article-info__marker;\r\n}\r\n\r\n.article__text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1em;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .article {\r\n    padding-top: 0;\r\n  }\r\n\r\n  .article__info > p:last-child {\r\n    flex-basis: 100%;\r\n    text-align: center;\r\n  }\r\n\r\n  .article__image,\r\n  .article__header,\r\n  .article__text {\r\n    max-width: 960px;\r\n  }\r\n}",".article-image {\r\n  aspect-ratio: 3/2;\r\n  object-fit: cover;\r\n}\r\n\r\n.article-image > img {\r\n  height: 100%;\r\n  object-fit: cover;\r\n}",".article-info {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-items: center;\r\n  gap: 4px 8px;\r\n}\r\n\r\n.article-info__text {\r\n  font-size: calc(1em - 2px);\r\n  line-height: 1.6em;\r\n  color: darkgrey;\r\n}\r\n\r\n.article-info__marker {\r\n  background: darkgrey;\r\n  border-radius: 50%;\r\n  width: 5px;\r\n  height: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/author/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/author/style.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-overflow, .author__name,\n.author__nick {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.author {\n  position: relative;\n  margin: 2em 0 2.5em;\n}\n\n.author__avatar {\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 80px;\n  height: 80px;\n}\n\n.author__nick {\n  color: darkgrey;\n  margin: 0 0 24px;\n}\n\n@media (max-width: 767px) {\n  .author {\n    max-width: 360px;\n    padding-top: 16px;\n  }\n\n  .author__name,\n.author__nick {\n    padding-left: 96px;\n  }\n}\n@media (min-width: 768px) {\n  .author {\n    max-width: 550px;\n    margin: 2.5em 0;\n    padding-left: 150px;\n  }\n\n  .author__avatar {\n    width: 130px;\n    height: 130px;\n  }\n\n  .author__nick {\n    margin: 3px 0 5px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/text-overflow.scss","webpack://./src/components/author/style.scss"],"names":[],"mappings":"AAAA;;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;ACEF;;AAHA;EACE,kBAAA;EACA,mBAAA;AAMF;;AAHA;EACE,kBAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;AAMF;;AAEA;EACE,eAAA;EACA,gBAAA;AACF;;AAIA;EACE;IACE,gBAAA;IACA,iBAAA;EADF;;EAIA;;IAEE,kBAAA;EADF;AACF;AAMA;EACE;IACE,gBAAA;IACA,eAAA;IACA,mBAAA;EAJF;;EAOA;IACE,YAAA;IACA,aAAA;EAJF;;EAOA;IACE,iBAAA;EAJF;AACF","sourcesContent":[".text-overflow {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}","@import '../../style/extend/text-overflow.scss';\r\n\r\n.author {\r\n  position: relative;\r\n  margin: 2em 0 2.5em;\r\n}\r\n\r\n.author__avatar {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.author__name,\r\n.author__nick {\r\n  @extend .text-overflow;\r\n}\r\n\r\n.author__nick {\r\n  color: darkgrey;\r\n  margin: 0 0 24px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .author {\r\n    max-width: 360px;\r\n    padding-top: 16px;\r\n  }\r\n\r\n  .author__name,\r\n  .author__nick {\r\n    padding-left: 96px;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .author {\r\n    max-width: 550px;\r\n    margin: 2.5em 0;\r\n    padding-left: 150px;\r\n  }\r\n\r\n  .author__avatar {\r\n    width: 130px;\r\n    height: 130px;\r\n  }\r\n\r\n  .author__nick {\r\n    margin: 3px 0 5px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/catalog/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/catalog/style.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section, .catalog {\n  width: 90%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .section, .catalog {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1024px) {\n  .section, .catalog {\n    max-width: 1200px;\n  }\n}\n.article-image, .catalog-item__image-link {\n  aspect-ratio: 3/2;\n  object-fit: cover;\n}\n\n.article-image > img, .catalog-item__image-link > img {\n  height: 100%;\n  object-fit: cover;\n}\n\n.catalog {\n  --catalog-row-gap: 2em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: var(--catalog-row-gap) 0 4em;\n}\n\n.catalog__separator {\n  background: black;\n  border-radius: 2px;\n  width: 8em;\n  height: 0.25em;\n  margin-top: 0.5em;\n}\n\n.catalog__list {\n  display: flex;\n  flex-direction: column;\n  row-gap: var(--catalog-row-gap);\n  margin-top: var(--catalog-row-gap);\n}\n\n@media (max-width: 767px) {\n  .catalog-item {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1em;\n  }\n}\n@media (min-width: 768px) {\n  .catalog {\n    --catalog-row-gap: 3em;\n    max-width: 960px;\n  }\n\n  .catalog__separator {\n    width: 10em;\n  }\n\n  .catalog-item {\n    display: flex;\n    align-items: flex-start;\n    column-gap: 24px;\n  }\n\n  .catalog-item__image-link {\n    min-width: 300px;\n    flex-basis: 35%;\n    flex-shrink: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/section.scss","webpack://./src/components/catalog/style.scss","webpack://./src/style/extend/article-image.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;EACA,cAAA;ACCF;;ADEA;EACE;IACE,gBAAA;ECCF;AACF;ADEA;EACE;IACE,iBAAA;ECAF;AACF;ACfA;EACE,iBAAA;EACA,iBAAA;ADiBF;;ACdA;EACE,YAAA;EACA,iBAAA;ADiBF;;AArBA;EACE,sBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,qCAAA;AAuBF;;AApBA;EACE,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,cAAA;EACA,iBAAA;AAuBF;;AApBA;EACE,aAAA;EACA,sBAAA;EACA,+BAAA;EACA,kCAAA;AAuBF;;AAdA;EACE;IACE,aAAA;IACA,sBAAA;IACA,YAAA;EAiBF;AACF;AAZA;EACE;IACE,sBAAA;IACA,gBAAA;EAcF;;EAXA;IACE,WAAA;EAcF;;EAXA;IACE,aAAA;IACA,uBAAA;IACA,gBAAA;EAcF;;EAXA;IACE,gBAAA;IACA,eAAA;IACA,cAAA;EAcF;AACF","sourcesContent":[".section {\r\n  width: 90%;\r\n  max-width: 480px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .section {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .section {\r\n    max-width: 1200px;\r\n  }\r\n}","@import '../../style/extend/section.scss';\r\n@import '../../style/extend/article-image.scss';\r\n\r\n.catalog {\r\n  --catalog-row-gap: 2em;\r\n  @extend .section;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: var(--catalog-row-gap) 0 4em;\r\n}\r\n\r\n.catalog__separator {\r\n  background: black;\r\n  border-radius: 2px;\r\n  width: 8em;\r\n  height: 0.25em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.catalog__list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: var(--catalog-row-gap);\r\n  margin-top: var(--catalog-row-gap);\r\n}\r\n\r\n.catalog-item__image-link {\r\n  @extend .article-image;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .catalog-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    row-gap: 1em;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .catalog {\r\n    --catalog-row-gap: 3em;\r\n    max-width: 960px;\r\n  }\r\n\r\n  .catalog__separator {\r\n    width: 10em;\r\n  }\r\n\r\n  .catalog-item {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    column-gap: 24px;\r\n  }\r\n\r\n  .catalog-item__image-link {\r\n    min-width: 300px;\r\n    flex-basis: 35%;\r\n    flex-shrink: 0;\r\n  }\r\n}",".article-image {\r\n  aspect-ratio: 3/2;\r\n  object-fit: cover;\r\n}\r\n\r\n.article-image > img {\r\n  height: 100%;\r\n  object-fit: cover;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/featured/style.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/featured/style.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section, .featured {\n  width: 90%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .section, .featured {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1024px) {\n  .section, .featured {\n    max-width: 1200px;\n  }\n}\n@media (max-width: 767px) {\n  .featured {\n    display: flex;\n    flex-direction: column;\n    padding-top: 1em;\n    row-gap: 1em;\n  }\n\n  .featured--right {\n    padding-top: 0;\n  }\n\n  .featured__image {\n    aspect-ratio: 3/2;\n    object-fit: cover;\n  }\n}\n@media (min-width: 768px) {\n  .featured {\n    position: relative;\n    padding: 0 2.5em 10em;\n  }\n\n  .featured--right {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 1em;\n  }\n\n  .featured__image {\n    position: absolute;\n    z-index: -1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .featured__article {\n    background: white;\n    width: min(65%, 520px);\n    padding: 1.5em 2em 2em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/section.scss","webpack://./src/components/featured/style.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;EACA,cAAA;ACCF;;ADEA;EACE;IACE,gBAAA;ECCF;AACF;ADEA;EACE;IACE,iBAAA;ECAF;AACF;AAPA;EACE;IACE,aAAA;IACA,sBAAA;IACA,gBAAA;IACA,YAAA;EASF;;EANA;IACE,cAAA;EASF;;EANA;IACE,iBAAA;IACA,iBAAA;EASF;AACF;AAJA;EACE;IACE,kBAAA;IACA,qBAAA;EAMF;;EAHA;IACE,aAAA;IACA,yBAAA;IACA,eAAA;EAMF;;EAHA;IACE,kBAAA;IACA,WAAA;IACA,OAAA;IACA,MAAA;IACA,WAAA;IACA,YAAA;IACA,iBAAA;EAMF;;EAHA;IACE,iBAAA;IACA,sBAAA;IACA,sBAAA;EAMF;AACF","sourcesContent":[".section {\r\n  width: 90%;\r\n  max-width: 480px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .section {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .section {\r\n    max-width: 1200px;\r\n  }\r\n}","@import '../../style/extend/section.scss';\r\n\r\n.featured {\r\n  @extend .section;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .featured {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1em;\r\n    row-gap: 1em;\r\n  }\r\n\r\n  .featured--right {\r\n    padding-top: 0;\r\n  }\r\n\r\n  .featured__image {\r\n    aspect-ratio: 3/2;\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .featured {\r\n    position: relative;\r\n    padding: 0 2.5em 10em;\r\n  }\r\n\r\n  .featured--right {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 1em;\r\n  }\r\n\r\n  .featured__image {\r\n    position: absolute;\r\n    z-index: -1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  .featured__article {\r\n    background: white;\r\n    width: min(65%, 520px);\r\n    padding: 1.5em 2em 2em;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/style.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/style.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/burger.svg */ "./src/components/header/assets/burger.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".section, .header__body {\n  width: 90%;\n  max-width: 480px;\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .section, .header__body {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1024px) {\n  .section, .header__body {\n    max-width: 1200px;\n  }\n}\n.header {\n  --header-height: 65px;\n  height: var(--header-height);\n  width: 100%;\n}\n\n.header__wrapper {\n  background: white;\n  position: fixed;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  width: 100vw;\n}\n\n.header__body {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: var(--header-height);\n}\n\n.header__logo {\n  display: block;\n  min-width: 35px;\n  height: 35px;\n}\n\n@media (max-width: 767px) {\n  .header__burger {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n    background-size: 22px;\n    width: 40px;\n    height: 40px;\n  }\n\n  .header__nav {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .header {\n    --header-height: 100px;\n  }\n\n  .header__logo {\n    min-width: 45px;\n    height: 45px;\n  }\n\n  .header__burger {\n    display: none;\n  }\n\n  .header__nav {\n    display: flex;\n  }\n\n  .header__nav-link {\n    height: 40px;\n    line-height: 40px;\n    padding: 0 8px;\n  }\n\n  .header__nav-link--current {\n    font-weight: bold;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/section.scss","webpack://./src/components/header/style.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,gBAAA;EACA,cAAA;ACCF;;ADEA;EACE;IACE,gBAAA;ECCF;AACF;ADEA;EACE;IACE,iBAAA;ECAF;AACF;AAbA;EACE,qBAAA;EACA,4BAAA;EACA,WAAA;AAeF;;AAZA;EACE,iBAAA;EACA,eAAA;EACA,WAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;AAeF;;AAZA;EAEE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,4BAAA;AAcF;;AAXA;EACE,cAAA;EACA,eAAA;EACA,YAAA;AAcF;;AATA;EACE;IACE,oEAAA;IACA,qBAAA;IACA,WAAA;IACA,YAAA;EAYF;;EATA;IACE,aAAA;EAYF;AACF;AAPA;EACE;IACE,sBAAA;EASF;;EANA;IACE,eAAA;IACA,YAAA;EASF;;EANA;IACE,aAAA;EASF;;EANA;IACE,aAAA;EASF;;EANA;IACE,YAAA;IACA,iBAAA;IACA,cAAA;EASF;;EANA;IACE,iBAAA;EASF;AACF","sourcesContent":[".section {\r\n  width: 90%;\r\n  max-width: 480px;\r\n  margin: 0 auto;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .section {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  .section {\r\n    max-width: 1200px;\r\n  }\r\n}","@import '../../style/extend/section.scss';\r\n\r\n.header {\r\n  --header-height: 65px;\r\n  height: var(--header-height);\r\n  width: 100%;\r\n}\r\n\r\n.header__wrapper {\r\n  background: white;\r\n  position: fixed;\r\n  z-index: 10;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n}\r\n\r\n.header__body {\r\n  @extend .section;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: var(--header-height);\r\n}\r\n\r\n.header__logo {\r\n  display: block;\r\n  min-width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767px) {\r\n  .header__burger {\r\n    background: url(\"./assets/burger.svg\") no-repeat center;\r\n    background-size: 22px;\r\n    width: 40px;\r\n    height: 40px;\r\n  }\r\n\r\n  .header__nav {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  .header {\r\n    --header-height: 100px;\r\n  }\r\n\r\n  .header__logo {\r\n    min-width: 45px;\r\n    height: 45px;\r\n  }\r\n\r\n  .header__burger {\r\n    display: none;\r\n  }\r\n\r\n  .header__nav {\r\n    display: flex;\r\n  }\r\n\r\n  .header__nav-link {\r\n    height: 40px;\r\n    line-height: 40px;\r\n    padding: 0 8px;\r\n  }\r\n\r\n  .header__nav-link--current {\r\n    font-weight: bold;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/page404/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/page404/style.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page404 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  padding: 1em 5%;\n  row-gap: 1em;\n}\n\n.page404__title {\n  font-size: 4em;\n  line-height: 1.2em;\n}\n\n.page404__link {\n  color: dodgerblue;\n  font-family: inherit;\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/components/page404/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,YAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,iBAAA;EACA,oBAAA;EACA,0BAAA;AACF","sourcesContent":[".page404 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: 1em 5%;\r\n  row-gap: 1em;\r\n}\r\n\r\n.page404__title {\r\n  font-size: 4em;\r\n  line-height: 1.2em;\r\n}\r\n\r\n.page404__link {\r\n  color: dodgerblue;\r\n  font-family: inherit;\r\n  text-decoration: underline;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pagination/style.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pagination/style.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow-left.svg */ "./src/components/pagination/assets/arrow-left.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/arrow-right.svg */ "./src/components/pagination/assets/arrow-right.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".text-overflow, .pagination__prev-label,\n.pagination__next-label {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.pagination {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.pagination__prev-link,\n.pagination__next-link {\n  background: black url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n  background-size: auto 1.5em;\n  border-radius: 2px;\n  flex-shrink: 0;\n  width: 2.5em;\n  height: 2.5em;\n}\n\n.pagination__prev-label,\n.pagination__next-label {\n  flex-basis: calc(50% - 2.5em);\n  flex-grow: 1;\n  padding: 0 0.75em;\n}\n\n.pagination__next-label {\n  text-align: right;\n}\n\n.pagination__next-link {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style/extend/text-overflow.scss","webpack://./src/components/pagination/style.scss"],"names":[],"mappings":"AAAA;;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;ACEF;;AAHA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAMF;;AAHA;;EAEE,0EAAA;EACA,2BAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,aAAA;AAMF;;AAHA;;EAGE,6BAAA;EACA,YAAA;EACA,iBAAA;AAKF;;AAFA;EACE,iBAAA;AAKF;;AAFA;EACE,yDAAA;AAKF","sourcesContent":[".text-overflow {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}","@import '../../style/extend/text-overflow.scss';\r\n\r\n.pagination {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.pagination__prev-link,\r\n.pagination__next-link {\r\n  background: black url(\"./assets/arrow-left.svg\") no-repeat center;\r\n  background-size: auto 1.5em;\r\n  border-radius: 2px;\r\n  flex-shrink: 0;\r\n  width: 2.5em;\r\n  height: 2.5em;\r\n}\r\n\r\n.pagination__prev-label,\r\n.pagination__next-label {\r\n  @extend .text-overflow;\r\n  flex-basis: calc(50% - 2.5em);\r\n  flex-grow: 1;\r\n  padding: 0 0.75em;\r\n}\r\n\r\n.pagination__next-label {\r\n  text-align: right;\r\n}\r\n\r\n.pagination__next-link {\r\n  background-image: url(\"./assets/arrow-right.svg\")\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/preview/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/preview/style.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".article-info, .preview {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n  gap: 4px 8px;\n}\n\n.article-info__text, .preview__tag,\n.preview__author,\n.preview__created-at,\n.preview__read-time {\n  font-size: calc(1em - 2px);\n  line-height: 1.6em;\n  color: darkgrey;\n}\n\n.article-info__marker, .preview__marker {\n  background: darkgrey;\n  border-radius: 50%;\n  width: 5px;\n  height: 5px;\n}\n\n.preview__header-link,\n.preview__text {\n  flex-basis: 100%;\n}\n\n.preview__text {\n  overflow: hidden;\n  white-space: normal;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n}", "",{"version":3,"sources":["webpack://./src/style/extend/article-info.scss","webpack://./src/components/preview/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;ACCF;;ADEA;;;;EACE,0BAAA;EACA,kBAAA;EACA,eAAA;ACIF;;ADDA;EACE,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;ACIF;;AAXA;;EAEE,gBAAA;AAcF;;AAJA;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;AAOF","sourcesContent":[".article-info {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-items: center;\r\n  gap: 4px 8px;\r\n}\r\n\r\n.article-info__text {\r\n  font-size: calc(1em - 2px);\r\n  line-height: 1.6em;\r\n  color: darkgrey;\r\n}\r\n\r\n.article-info__marker {\r\n  background: darkgrey;\r\n  border-radius: 50%;\r\n  width: 5px;\r\n  height: 5px;\r\n}","@import '../../style/extend/article-info.scss';\r\n\r\n.preview {\r\n  @extend .article-info;\r\n}\r\n\r\n.preview__marker {\r\n  @extend .article-info__marker;\r\n}\r\n\r\n.preview__header-link,\r\n.preview__text {\r\n  flex-basis: 100%;\r\n}\r\n\r\n.preview__tag,\r\n.preview__author,\r\n.preview__created-at,\r\n.preview__read-time {\r\n  @extend .article-info__text;\r\n}\r\n\r\n.preview__text {\r\n  overflow: hidden;\r\n  white-space: normal;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 5;\r\n  -webkit-box-orient: vertical;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/router/error/style.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/router/error/style.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal, .error {\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.error {\n  background: white;\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 1em;\n}\n\n.error__title {\n  font-size: 1.25em;\n  line-height: 1.5em;\n}\n\n.error__refresh-btn {\n  color: dodgerblue;\n  text-decoration: underline;\n}", "",{"version":3,"sources":["webpack://./src/style/extend/modal.scss","webpack://./src/router/error/style.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;EACA,aAAA;ACCF;;AALA;EAEE,iBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAOF;;AAJA;EACE,iBAAA;EACA,kBAAA;AAOF;;AAJA;EACE,iBAAA;EACA,0BAAA;AAOF","sourcesContent":[".modal {\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}","@import '../../style/extend/modal.scss';\r\n\r\n.error {\r\n  @extend .modal;\r\n  background: white;  \r\n  z-index: 200;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  row-gap: 1em;\r\n}\r\n\r\n.error__title {\r\n  font-size: 1.25em;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.error__refresh-btn {\r\n  color: dodgerblue;\r\n  text-decoration: underline;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/router/loader/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/router/loader/style.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal, .loader {\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.loader {\n  background: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lds-spinner {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-spinner div {\n  transform-origin: 40px 40px;\n  animation: lds-spinner 1.2s linear infinite;\n}\n\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 37px;\n  width: 6px;\n  height: 18px;\n  border-radius: 20%;\n  background: darkgray;\n}\n\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -1.1s;\n}\n\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  animation-delay: -1s;\n}\n\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  animation-delay: -0.9s;\n}\n\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  animation-delay: -0.8s;\n}\n\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  animation-delay: -0.7s;\n}\n\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  animation-delay: -0.6s;\n}\n\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  animation-delay: -0.5s;\n}\n\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  animation-delay: -0.4s;\n}\n\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  animation-delay: -0.3s;\n}\n\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  animation-delay: -0.2s;\n}\n\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  animation-delay: -0.1s;\n}\n\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  animation-delay: 0s;\n}\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/extend/modal.scss","webpack://./src/router/loader/style.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,YAAA;EACA,aAAA;ACCF;;AALA;EAEE,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAOF;;AAFA;EACE,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AAKF;;AAFA;EACE,2BAAA;EACA,2CAAA;AAKF;;AAFA;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;AAKF;;AAFA;EACE,uBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,wBAAA;EACA,oBAAA;AAKF;;AAFA;EACE,wBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,wBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,sBAAA;AAKF;;AAFA;EACE,yBAAA;EACA,mBAAA;AAKF;;AAFA;EACE;IACE,UAAA;EAKF;EAFA;IACE,UAAA;EAIF;AACF","sourcesContent":[".modal {\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}","@import '../../style/extend/modal.scss';\r\n\r\n.loader {\r\n  @extend .modal;\r\n  background: white;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.lds-spinner {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.lds-spinner div {\r\n  transform-origin: 40px 40px;\r\n  animation: lds-spinner 1.2s linear infinite;\r\n}\r\n\r\n.lds-spinner div:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 37px;\r\n  width: 6px;\r\n  height: 18px;\r\n  border-radius: 20%;\r\n  background: darkgray;\r\n}\r\n\r\n.lds-spinner div:nth-child(1) {\r\n  transform: rotate(0deg);\r\n  animation-delay: -1.1s;\r\n}\r\n\r\n.lds-spinner div:nth-child(2) {\r\n  transform: rotate(30deg);\r\n  animation-delay: -1s;\r\n}\r\n\r\n.lds-spinner div:nth-child(3) {\r\n  transform: rotate(60deg);\r\n  animation-delay: -0.9s;\r\n}\r\n\r\n.lds-spinner div:nth-child(4) {\r\n  transform: rotate(90deg);\r\n  animation-delay: -0.8s;\r\n}\r\n\r\n.lds-spinner div:nth-child(5) {\r\n  transform: rotate(120deg);\r\n  animation-delay: -0.7s;\r\n}\r\n\r\n.lds-spinner div:nth-child(6) {\r\n  transform: rotate(150deg);\r\n  animation-delay: -0.6s;\r\n}\r\n\r\n.lds-spinner div:nth-child(7) {\r\n  transform: rotate(180deg);\r\n  animation-delay: -0.5s;\r\n}\r\n\r\n.lds-spinner div:nth-child(8) {\r\n  transform: rotate(210deg);\r\n  animation-delay: -0.4s;\r\n}\r\n\r\n.lds-spinner div:nth-child(9) {\r\n  transform: rotate(240deg);\r\n  animation-delay: -0.3s;\r\n}\r\n\r\n.lds-spinner div:nth-child(10) {\r\n  transform: rotate(270deg);\r\n  animation-delay: -0.2s;\r\n}\r\n\r\n.lds-spinner div:nth-child(11) {\r\n  transform: rotate(300deg);\r\n  animation-delay: -0.1s;\r\n}\r\n\r\n.lds-spinner div:nth-child(12) {\r\n  transform: rotate(330deg);\r\n  animation-delay: 0s;\r\n}\r\n\r\n@keyframes lds-spinner {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/fonts.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/fonts.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-size: 16px;\n  line-height: 1.5em;\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n}\n\na, h1, h2 {\n  font-family: \"Libre Baskerville\", serif;\n}\n\nh1 {\n  font-size: 24px;\n  line-height: 1.4em;\n  text-align: center;\n}\n\nh2 {\n  font-size: 20px;\n  line-height: 1.5em;\n}\n\n@media (min-width: 768px) {\n  body {\n    font-size: 18px;\n  }\n\n  h1 {\n    font-size: 32px;\n  }\n\n  h2 {\n    font-size: 24px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style/fonts.css"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,kBAAA;EACA,sDAAA;AACF;;AAEA;EACE,uCAAA;AACF;;AAEA;EACE,eAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,kBAAA;AACF;;AAIA;EACE;IACE,eAAA;EADF;;EAIA;IACE,eAAA;EADF;;EAIA;IACE,eAAA;EADF;AACF","sourcesContent":["body {\r\n  font-size: 16px;\r\n  line-height: 1.5em;\r\n  font-family: 'Open Sans', Arial, Helvetica, sans-serif;\r\n}\r\n\r\na, h1, h2 {\r\n  font-family: 'Libre Baskerville', serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 24px;\r\n  line-height: 1.4em;\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  font-size: 20px;\r\n  line-height: 1.5em;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 768px) {\r\n  body {\r\n    font-size: 18px;\r\n  }\r\n\r\n  h1 {\r\n    font-size: 32px;\r\n  }\r\n\r\n  h2 {\r\n    font-size: 24px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/tags.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/tags.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  min-width: 320px;\n  min-height: 100vh;\n  padding-bottom: 1em;\n}\n\na {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\nul,\nol {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea,\nbutton,\nselect {\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  outline: none;\n  border: none;\n}\n\ninput[type=radio],\ninput[type=checkbox] {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nlabel {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/style/tags.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;AACF;;AAEA;EACE,uBAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,eAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,eAAA;AACF;;AAEA;;EAEE,gBAAA;AACF;;AAEA;EACE,yBAAA;EACA,iBAAA;AACF;;AAEA;;;;EAIE,uBAAA;EACA,cAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;;EAEE,aAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,eAAA;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  min-width: 320px;\r\n  min-height: 100vh;\r\n  padding-bottom: 1em;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  color: inherit;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ninput,\r\ntextarea,\r\nbutton,\r\nselect {\r\n  background: transparent;\r\n  color: inherit;\r\n  font: inherit;\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n  display: none;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\nlabel {\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/about/style.scss":
/*!*****************************************!*\
  !*** ./src/components/about/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/about/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/article/style.scss":
/*!*******************************************!*\
  !*** ./src/components/article/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/article/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/author/style.scss":
/*!******************************************!*\
  !*** ./src/components/author/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/author/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/catalog/style.scss":
/*!*******************************************!*\
  !*** ./src/components/catalog/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/catalog/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/featured/style.scss":
/*!********************************************!*\
  !*** ./src/components/featured/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/featured/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/style.scss":
/*!******************************************!*\
  !*** ./src/components/header/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/page404/style.scss":
/*!*******************************************!*\
  !*** ./src/components/page404/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/page404/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pagination/style.scss":
/*!**********************************************!*\
  !*** ./src/components/pagination/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pagination/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/preview/style.scss":
/*!*******************************************!*\
  !*** ./src/components/preview/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/preview/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/router/error/style.scss":
/*!*************************************!*\
  !*** ./src/router/error/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/router/error/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/router/loader/style.scss":
/*!**************************************!*\
  !*** ./src/router/loader/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/router/loader/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/fonts.css":
/*!*****************************!*\
  !*** ./src/style/fonts.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/fonts.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style/tags.css":
/*!****************************!*\
  !*** ./src/style/tags.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tags_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./tags.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/tags.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tags_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tags_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tags_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_tags_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/about/index.js":
/*!***************************************!*\
  !*** ./src/components/about/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/loadData */ "./src/utils/loadData.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/about/style.scss");



const About = async () => {
  const data = await (0,_utils_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'https://course.7t33n.ru/rest/v1/about',
    json => ({
      ...json,
      content: json.content
        .replace(/<img.+\/>/, '<br />\n<br />\n')
        .split('<br />\n<br />\n')
        .map(item => item.replace(/<\/?p>/g, ''))
    })
  );

  if (!data) return null;
  // console.warn(data.content);

  return {
    markup: `
      <section class="about">
        <h1 class="about__header">${data.title}</h1>
        <img class="about__image" src="https://random.imagecdn.app/1200/800" alt="about image">
        ${data.content.reduce((sum, item) => sum + `<p>${item}</p>`, '')}
      </section>
    `,
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/article/index.js":
/*!*****************************************!*\
  !*** ./src/components/article/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/loadData */ "./src/utils/loadData.js");
/* harmony import */ var _utils_getDateString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getDateString */ "./src/utils/getDateString.js");
/* harmony import */ var _utils_namedMeta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/namedMeta */ "./src/utils/namedMeta.js");
/* harmony import */ var _author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../author */ "./src/components/author/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pagination */ "./src/components/pagination/index.js");
/* harmony import */ var _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/avatar.jpg */ "./src/components/article/assets/avatar.jpg");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/components/article/style.scss");










const Article = async ({ pathname }) => {
  const titles = await (0,_utils_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])('https://course.7t33n.ru/rest/v1/blog/articles');

  if (!titles) return null;

  const articleId = pathname.match(/article\/(\d+)$/)?.[1];

  const url = 'https://course.7t33n.ru/rest/v1/blog/article/' + articleId;

  let article = await (0,_utils_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])(url, data => ({
    ...data,
    nextTitle: titles.find(item => item.id === data.nextId)?.title,
    prevTitle: titles.find(item => item.id === data.prevId)?.title,
    createdAt: (0,_utils_getDateString__WEBPACK_IMPORTED_MODULE_1__["default"])(data.createdAt * 1000),
    readTime: Math.round(data.readTime / 60),
  }));

  if (!article) return null;
  console.log(article);



  return {
    markup: `
      <section class="article">
        <img class="article__image" src="https://random.imagecdn.app/1200/800" alt="article image">
        <h1 class="article__header">${article.title}</h1>
        <div class="article__info">
          <p>${article.author.name}</p>
          <div class="article__marker"></div>
          <p>${article.createdAt} (${article.readTime} mins read)</p>
          <p>#technology #tech #career</p>
        </div>
        <div class="article__text">${article.description}</div>
        ${(0,_author__WEBPACK_IMPORTED_MODULE_3__["default"])(article).markup}
        ${(0,_pagination__WEBPACK_IMPORTED_MODULE_4__["default"])(article).markup}
      </section>
    `,



    listeners: () => {
      document.title = article.title;
      document.querySelector('.author__avatar').src = _assets_avatar_jpg__WEBPACK_IMPORTED_MODULE_5__;
      _utils_namedMeta__WEBPACK_IMPORTED_MODULE_2__["default"].add('keywords', article.seo.keywords);
      _utils_namedMeta__WEBPACK_IMPORTED_MODULE_2__["default"].add('description', article.seo.description);
    },

    clear: () => {
      _utils_namedMeta__WEBPACK_IMPORTED_MODULE_2__["default"].remove('keywords');
      _utils_namedMeta__WEBPACK_IMPORTED_MODULE_2__["default"].remove('description');
    },
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

/***/ }),

/***/ "./src/components/author/index.js":
/*!****************************************!*\
  !*** ./src/components/author/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/author/style.scss");


const Author = (data) => ({
  markup: `
    <div class="author">
      <img class="author__avatar" alt="avatar">
      <h2 class="author__name">${data.author.name}</h2>
      <p class="author__nick">@${data.author.nick}</p>
      <p class="author__about">${data.author.about}</p>
    </div>
  `,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);

/***/ }),

/***/ "./src/components/catalog/index.js":
/*!*****************************************!*\
  !*** ./src/components/catalog/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/loadData */ "./src/utils/loadData.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preview */ "./src/components/preview/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/catalog/style.scss");




const Catalog = async (props = { limit: 1 }) => {
  const data = await (0,_utils_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'https://course.7t33n.ru/rest/v1/blog/articles',
    json => json
      .slice(0, props.limit)
      .map(item => ({
        ...item,
        description: item.description.replace(/\<\/?p\>/g, ''),
      }))
  );

  if (!data) return null;

  const items = data.reduce((total, item) => total + `
    <li class="catalog-item">
      <a class="catalog-item__image-link" href="/article/${item.id}">
        <img src="https://random.imagecdn.app/1200/800" alt="article image">
      </a>
      ${(0,_preview__WEBPACK_IMPORTED_MODULE_1__["default"])(item).markup}
    </li>
  `, '')

  return {
    markup: `
      <div class="catalog">
        <h1 class="catalog__header">Editor's picks</h1>
        <div class="catalog__separator"></div>
        <ul class="catalog__list">${items}</ul>
      </div>
    `,
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

/***/ }),

/***/ "./src/components/featured/index.js":
/*!******************************************!*\
  !*** ./src/components/featured/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_loadData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/loadData */ "./src/utils/loadData.js");
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preview */ "./src/components/preview/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/featured/style.scss");




const Featured = async (props = { right: false }) => {
  const data = await (0,_utils_loadData__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'https://course.7t33n.ru/rest/v1/blog/featured',
    json => ({
      ...json,
      title: json.title.slice(17),
    })
  );

  if (!data) return null;

  return {
    markup: `
      <section class="featured${props.right ? ' featured--right' : ''}">
        <img class="featured__image" src=${data.image} alt='featured-image'>
        <div class="featured__article">${(0,_preview__WEBPACK_IMPORTED_MODULE_1__["default"])(data).markup}</div>
      </section>
    `,
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Featured);

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router/prefix */ "./src/router/prefix.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/components/header/assets/logo.png");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/header/style.scss");




const Header = () => ({
  markup: `
    <header class="header">
      <div class="header__wrapper">
        <div class="header__body">
          ${_router_prefix__WEBPACK_IMPORTED_MODULE_0__["default"].skip(window.location.pathname) === '/'
          ? '<img class="header__logo" src="" alt="logo">'
          : '<a href="/"><img class="header__logo" src="" alt="logo"></a>'}        
          <button class="header__burger"></button>
          <nav class="header__nav">
            <a class="header__nav-link" href="/">Home</a>
            <a class="header__nav-link" href="/blog">Blog</a>
            <a class="header__nav-link" href="/about">About</a>
          </nav>
        </div>
      </div>
    </header>
  `,

  listeners: () => {
    document.getElementsByClassName('header__logo')[0].src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;

    for (let link of document.getElementsByClassName('header__nav-link')) {
      if (link.href === window.location.href) {
        link.classList.add('header__nav-link--current')
        break;
      }
    }
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/page404/index.js":
/*!*****************************************!*\
  !*** ./src/components/page404/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/page404/style.scss");


const Page404 = () => ({
  markup: `
    <div class="page404">
      <b class="page404__title">404</b>
      <p class="">Страница не найдена</p>
      <a class="page404__link" href="/">Вернуться на главную</a>
    </div>
  `,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page404);

/***/ }),

/***/ "./src/components/pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/pagination/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/pagination/style.scss");


const Pagination = (data) => ({
  markup: `
    <div class="pagination">
      ${data?.prevId !== null ? `
        <a class="pagination__prev-link" href="/article/${data.prevId}"></a>
        <p class="pagination__prev-label">Go back: <b>${data?.prevTitle}</b></p>
      ` : ''}
      ${data?.nextId !== null ? `
        <p class="pagination__next-label">Next up: <b>${data?.nextTitle}</b></p>
        <a class="pagination__next-link" href="/article/${data.nextId}"></a>
      ` : ''}
    </div>
  `,
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./src/components/preview/index.js":
/*!*****************************************!*\
  !*** ./src/components/preview/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_getDateString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/getDateString */ "./src/utils/getDateString.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/components/preview/style.scss");



const Preview = (data) => ({
  markup: `
    <div class="preview">
      <p class="preview__tag">${data.tag}</p>

      <a class="preview__header-link" href="/article/${data.id}">
        <h2 class="preview__header">${data.title}</h2>
      </a>

      <p class="preview__author">${data.author}</p>

      <div class="preview__marker"></div>

      <p class="preview__created-at">${(0,_utils_getDateString__WEBPACK_IMPORTED_MODULE_0__["default"])(data.createdAt * 1000)}</p>

      <p class="preview__read-time">(${Math.round(data.readTime / 60)} mins read)</p>

      <p class="preview__text">${data.description}</p>
    </div>
  `,  
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);

/***/ }),

/***/ "./src/router/error/index.js":
/*!***********************************!*\
  !*** ./src/router/error/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/router/error/style.scss");


const Error = () => ({
  markup: `
    <div class="error">
      <b class="error__title">Что-то пошло не так</b>
      <p class="error__caption">Проверьте консоль</p>
      <button class="error__refresh-btn">Обновить страницу</button>
    </div>
  `,

  listeners: () => {
    document
      .querySelector('.error__refresh-btn')
      .addEventListener('click', () => {
        window.history.go();
      })
  },

  remove: () => {
    document.querySelector('.error').remove();
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router/router.js");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefix */ "./src/router/prefix.js");



window.addEventListener('load', () => {
  const l = window.location;
  if (_prefix__WEBPACK_IMPORTED_MODULE_1__["default"].value && l.pathname === '/') l.replace(_prefix__WEBPACK_IMPORTED_MODULE_1__["default"].add(l.href));
  else (0,_router__WEBPACK_IMPORTED_MODULE_0__["default"])(l.pathname);
})

window.addEventListener('popstate', (event) => {
  ;(0,_router__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target.location.pathname);
})

/***/ }),

/***/ "./src/router/loader/index.js":
/*!************************************!*\
  !*** ./src/router/loader/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/router/loader/style.scss");


const Loader = () => ({
  markup: `
    <div class="loader">
      <div class="lds-spinner">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  `,

  remove: () => {
    document.querySelector('.loader').remove();
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./src/router/page/asyncPage.js":
/*!**************************************!*\
  !*** ./src/router/page/asyncPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _handleLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleLink */ "./src/router/page/handleLink.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ "./src/router/page/listeners.js");
/* harmony import */ var _cleanup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanup */ "./src/router/page/cleanup.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader */ "./src/router/loader/index.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error */ "./src/router/error/index.js");






const asyncPage = async (...sections) => {
  _cleanup__WEBPACK_IMPORTED_MODULE_2__["default"].run();
  const loader = (0,_loader__WEBPACK_IMPORTED_MODULE_3__["default"])();
  document.body.insertAdjacentHTML('beforeend', loader.markup);

  for (let child of sections) {
    child = await child();

    if (child) {
      document.body.insertAdjacentHTML('beforeend', child.markup);
      _listeners__WEBPACK_IMPORTED_MODULE_1__["default"].add(child?.listeners)
      _cleanup__WEBPACK_IMPORTED_MODULE_2__["default"].add(child?.clear);
    }
    else {
      const error = (0,_error__WEBPACK_IMPORTED_MODULE_4__["default"])();
      document.body.insertAdjacentHTML('beforeend', error.markup)
      error?.listeners();
      _listeners__WEBPACK_IMPORTED_MODULE_1__["default"].reset();
      _cleanup__WEBPACK_IMPORTED_MODULE_2__["default"].run();
      break;
    }
  }

  (0,_handleLink__WEBPACK_IMPORTED_MODULE_0__["default"])();
  _listeners__WEBPACK_IMPORTED_MODULE_1__["default"].run();
  loader.remove();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asyncPage);

/***/ }),

/***/ "./src/router/page/cleanup.js":
/*!************************************!*\
  !*** ./src/router/page/cleanup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cleanup = {
  actions: [],

  run: function() {
    this.actions.forEach(item => item());
    this.actions = [];
  },

  add: function(func) {
    if (func) this.actions.push(func);
  },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cleanup);

/***/ }),

/***/ "./src/router/page/handleLink.js":
/*!***************************************!*\
  !*** ./src/router/page/handleLink.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./src/router/router.js");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prefix */ "./src/router/prefix.js");



const handleLink = () => {
  for (let link of document.body.getElementsByTagName('a')) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const pathname = new URL(event.currentTarget.href).pathname;
      window.history.pushState(null, '', pathname);
      (0,_router__WEBPACK_IMPORTED_MODULE_0__["default"])(pathname);
    })
    link.href = _prefix__WEBPACK_IMPORTED_MODULE_1__["default"].add(link.href);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLink);

/***/ }),

/***/ "./src/router/page/listeners.js":
/*!**************************************!*\
  !*** ./src/router/page/listeners.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const listeners = {
  actions: [],

  run: function () {
    this.actions.forEach(item => item());
    this.actions = [];
  },

  add: function (func) {
    if (func) this.actions.push(func);
  },

  reset: function() {
    this.actions = [];
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);

/***/ }),

/***/ "./src/router/prefix.js":
/*!******************************!*\
  !*** ./src/router/prefix.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const prefix = {
  value: '/Ratio__module-4',

  add: function(url) {
    url = new URL(url);
    url.pathname = this.value + url.pathname;
    return url.toString();
  },

  skip: function(route) {
    return route.startsWith(this.value) ? route.replace(this.value, '') : null;
  },
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefix);

/***/ }),

/***/ "./src/router/router.js":
/*!******************************!*\
  !*** ./src/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/router/routes.js");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefix */ "./src/router/prefix.js");



const router = (pathname) => {
  document.body.innerHTML = '';
  pathname = _prefix__WEBPACK_IMPORTED_MODULE_1__["default"].skip(pathname);

  for (let route of _routes__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    if (route.match(pathname)) {
      route.render(pathname);
      if (route.title) document.title = route.title;
      break;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_asyncPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/asyncPage */ "./src/router/page/asyncPage.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_featured__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/featured */ "./src/components/featured/index.js");
/* harmony import */ var _components_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/catalog */ "./src/components/catalog/index.js");
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/article */ "./src/components/article/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about */ "./src/components/about/index.js");
/* harmony import */ var _components_page404__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/page404 */ "./src/components/page404/index.js");








const routes = [
  {
    match: p => p === '/',
    render: () => (0,_page_asyncPage__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _components_header__WEBPACK_IMPORTED_MODULE_1__["default"],
      _components_featured__WEBPACK_IMPORTED_MODULE_2__["default"],
      () => (0,_components_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])({ limit: 3 }),
      () => (0,_components_featured__WEBPACK_IMPORTED_MODULE_2__["default"])({ right: true })
    ),
    title: 'Home',
  },
  {
    match: p => p === '/blog',
    render: () => (0,_page_asyncPage__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _components_header__WEBPACK_IMPORTED_MODULE_1__["default"],
      _components_featured__WEBPACK_IMPORTED_MODULE_2__["default"],
      () => (0,_components_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])({ limit: 10 })
    ),
    title: 'Blog',
  },
  {
    match: p => /\/article\/\d+$/.test(p),
    render: (pathname) => (0,_page_asyncPage__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _components_header__WEBPACK_IMPORTED_MODULE_1__["default"],
      () => (0,_components_article__WEBPACK_IMPORTED_MODULE_4__["default"])({ pathname }),
    ),
  },
  {
    match: p => p === '/about',
    render: () => (0,_page_asyncPage__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _components_header__WEBPACK_IMPORTED_MODULE_1__["default"],
      _components_about__WEBPACK_IMPORTED_MODULE_5__["default"]
    ),
    title: 'About',
  },
  {
    match: () => true,
    render: () => (0,_page_asyncPage__WEBPACK_IMPORTED_MODULE_0__["default"])(
      _components_page404__WEBPACK_IMPORTED_MODULE_6__["default"],
    ),
    title: 'Page Not Found',
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/utils/getDateString.js":
/*!************************************!*\
  !*** ./src/utils/getDateString.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const months = [
  'January', 'February', 'March',
  'April', 'May', 'Juny',
  'July', 'August', 'September',
  'October', 'November', 'December'
];

const getDateString = (timestamp) => {
  const d = new Date(timestamp);

  return months[d.getMonth()] + ' ' +
    d.getDate() + ', ' +
    d.getFullYear();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDateString);

/***/ }),

/***/ "./src/utils/loadData.js":
/*!*******************************!*\
  !*** ./src/utils/loadData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loadData = (url, script = j => j) => fetch(url)
  .then(res => {
    if (res.ok) return res.json();
    else throw new Error(res?.statusText);
  })
  .then(json => script(json))
  .catch(() => null);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadData);

/***/ }),

/***/ "./src/utils/namedMeta.js":
/*!********************************!*\
  !*** ./src/utils/namedMeta.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const namedMeta = {
  add: (name, content) => {
    const meta = document.createElement('meta');
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
  },

  remove: (name) => {
    document.querySelector(`meta[name="${name}"]`).remove();
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (namedMeta);

/***/ }),

/***/ "./src/components/article/assets/avatar.jpg":
/*!**************************************************!*\
  !*** ./src/components/article/assets/avatar.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "avatar.jpg";

/***/ }),

/***/ "./src/components/header/assets/burger.svg":
/*!*************************************************!*\
  !*** ./src/components/header/assets/burger.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "burger.svg";

/***/ }),

/***/ "./src/components/header/assets/logo.png":
/*!***********************************************!*\
  !*** ./src/components/header/assets/logo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/components/pagination/assets/arrow-left.svg":
/*!*********************************************************!*\
  !*** ./src/components/pagination/assets/arrow-left.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-left.svg";

/***/ }),

/***/ "./src/components/pagination/assets/arrow-right.svg":
/*!**********************************************************!*\
  !*** ./src/components/pagination/assets/arrow-right.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "arrow-right.svg";

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
/******/ 		__webpack_require__.p = "https://viktor-kurgashov.github.io/Ratio__module-4/";
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
/******/ 			"index": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_tags_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/tags.css */ "./src/style/tags.css");
/* harmony import */ var _style_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/fonts.css */ "./src/style/fonts.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router/index.js");



})();

/******/ })()
;
//# sourceMappingURL=index.a2f3be0e2a5095cf3511.js.map
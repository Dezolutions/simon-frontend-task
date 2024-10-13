/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("//import { register, load } from \"@shopify/theme-sections\";\nconsole.log('custom js is loaded test-js');\n//load(\"*\");\n\n\n//# sourceURL=webpack://Shopify-theme/./src/js/index.js?");

/***/ }),

/***/ "./src/js/snippets/lazy-loading-grid.js":
/*!**********************************************!*\
  !*** ./src/js/snippets/lazy-loading-grid.js ***!
  \**********************************************/
/***/ (() => {

eval("if (!customElements.get('lazy-loading-grid')) {\n  customElements.define(\n    'lazy-loading-grid',\n    class LazyLoadingGrid extends HTMLElement {\n      constructor() {\n        super();\n        console.log('check')\n        this.button = this.querySelector('#load-more');\n        this.buttonText = this.button.querySelector('.load-more-text');\n        this.buttonLoader = this.button.querySelector('.loading__spinner');\n        this.grid = this.querySelector('.product-grid');\n        this.button?.addEventListener('click', this.loadMore.bind(this));\n        this.productsCount = +this.button.dataset.pageItems;\n        this.currentPage = +this.button.dataset.page;\n        this.currentProductsCount = +this.grid.querySelectorAll('.grid__item').length;\n        this.currentProductsCountEl = this.querySelector('.load-more-current-count');\n        this.loadMoreBLock = this.querySelector('.load-more-block');\n\n        if(this.currentProductsCountEl.innerText === '') {\n          this.currentProductsCountEl.innerText = this.currentProductsCount;\n        }\n      }\n\n      loadMore() {\n        const url = new URL(window.location);\n        url.searchParams.set('page', this.currentPage + 1);\n        this.buttonText.classList.add('hidden');\n        this.buttonLoader.classList.remove('hidden');\n        fetch(url)\n          .then(response => response.text())\n          .then(data => {\n            const parser = new DOMParser();\n            const doc = parser.parseFromString(data, 'text/html');\n            const newProducts = doc.querySelectorAll('.product-grid .grid__item');\n            if (newProducts.length) {\n              newProducts.forEach(item => {\n                this.grid.appendChild(item);\n              });\n            }\n            this.currentProductsCountEl.innerHTML = +this.currentProductsCount + newProducts.length;\n            this.currentProductsCount = +this.currentProductsCount + newProducts.length;\n            this.button.setAttribute('data-page', this.currentPage + 1)\n            this.currentPage = this.currentPage + 1;\n            if(this.currentProductsCount == this.productsCount){\n              // Hide the button if no more products are available\n              this.button.classList.add('hidden');\n              this.loadMoreBLock.classList.add('hidden');\n            }\n            this.buttonText.classList.remove('hidden');\n            this.buttonLoader.classList.add('hidden');\n          })\n          .catch(error => console.error('Error loading more products:', error));\n      }\n    }\n  );\n}\n\n//# sourceURL=webpack://Shopify-theme/./src/js/snippets/lazy-loading-grid.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js */ \"./src/js/index.js\");\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_snippets_lazy_loading_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/snippets/lazy-loading-grid */ \"./src/js/snippets/lazy-loading-grid.js\");\n/* harmony import */ var _js_snippets_lazy_loading_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_snippets_lazy_loading_grid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/base.scss */ \"./src/styles/base.scss\");\n/* harmony import */ var _styles_component_collage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/component/collage.scss */ \"./src/styles/component/collage.scss\");\n/* harmony import */ var _styles_component_collapsible_content_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/component/collapsible-content.scss */ \"./src/styles/component/collapsible-content.scss\");\n/* harmony import */ var _styles_component_component_accordion_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/component/component-accordion.scss */ \"./src/styles/component/component-accordion.scss\");\n/* harmony import */ var _styles_component_component_article_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/component/component-article-card.scss */ \"./src/styles/component/component-article-card.scss\");\n/* harmony import */ var _styles_component_component_card_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/component/component-card.scss */ \"./src/styles/component/component-card.scss\");\n/* harmony import */ var _styles_component_component_cart_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/component/component-cart.scss */ \"./src/styles/component/component-cart.scss\");\n/* harmony import */ var _styles_component_component_cart_drawer_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/component/component-cart-drawer.scss */ \"./src/styles/component/component-cart-drawer.scss\");\n/* harmony import */ var _styles_component_component_cart_items_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/component/component-cart-items.scss */ \"./src/styles/component/component-cart-items.scss\");\n/* harmony import */ var _styles_component_component_cart_notification_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/component/component-cart-notification.scss */ \"./src/styles/component/component-cart-notification.scss\");\n/* harmony import */ var _styles_component_component_collection_hero_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/styles/component/component-collection-hero.scss */ \"./src/styles/component/component-collection-hero.scss\");\n/* harmony import */ var _styles_component_component_deferred_media_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/component/component-deferred-media.scss */ \"./src/styles/component/component-deferred-media.scss\");\n/* harmony import */ var _styles_component_component_discounts_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/styles/component/component-discounts.scss */ \"./src/styles/component/component-discounts.scss\");\n/* harmony import */ var _styles_component_component_facets_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/styles/component/component-facets.scss */ \"./src/styles/component/component-facets.scss\");\n/* harmony import */ var _styles_component_component_image_with_text_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/styles/component/component-image-with-text.scss */ \"./src/styles/component/component-image-with-text.scss\");\n/* harmony import */ var _styles_component_component_list_menu_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/styles/component/component-list-menu.scss */ \"./src/styles/component/component-list-menu.scss\");\n/* harmony import */ var _styles_component_component_list_payment_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/styles/component/component-list-payment.scss */ \"./src/styles/component/component-list-payment.scss\");\n/* harmony import */ var _styles_component_component_list_social_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/styles/component/component-list-social.scss */ \"./src/styles/component/component-list-social.scss\");\n/* harmony import */ var _styles_component_component_loading_overlay_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/styles/component/component-loading-overlay.scss */ \"./src/styles/component/component-loading-overlay.scss\");\n/* harmony import */ var _styles_component_component_localization_form_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/styles/component/component-localization-form.scss */ \"./src/styles/component/component-localization-form.scss\");\n/* harmony import */ var _styles_component_component_mega_menu_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/styles/component/component-mega-menu.scss */ \"./src/styles/component/component-mega-menu.scss\");\n/* harmony import */ var _styles_component_component_menu_drawer_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/styles/component/component-menu-drawer.scss */ \"./src/styles/component/component-menu-drawer.scss\");\n/* harmony import */ var _styles_component_component_modal_video_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/styles/component/component-modal-video.scss */ \"./src/styles/component/component-modal-video.scss\");\n/* harmony import */ var _styles_component_component_model_viewer_ui_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/styles/component/component-model-viewer-ui.scss */ \"./src/styles/component/component-model-viewer-ui.scss\");\n/* harmony import */ var _styles_component_component_newsletter_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/styles/component/component-newsletter.scss */ \"./src/styles/component/component-newsletter.scss\");\n/* harmony import */ var _styles_component_component_pagination_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/styles/component/component-pagination.scss */ \"./src/styles/component/component-pagination.scss\");\n/* harmony import */ var _styles_component_component_pickup_availability_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/styles/component/component-pickup-availability.scss */ \"./src/styles/component/component-pickup-availability.scss\");\n/* harmony import */ var _styles_component_component_predictive_search_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/styles/component/component-predictive-search.scss */ \"./src/styles/component/component-predictive-search.scss\");\n/* harmony import */ var _styles_component_component_price_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/styles/component/component-price.scss */ \"./src/styles/component/component-price.scss\");\n/* harmony import */ var _styles_component_component_product_model_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/styles/component/component-product-model.scss */ \"./src/styles/component/component-product-model.scss\");\n/* harmony import */ var _styles_component_component_rating_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/styles/component/component-rating.scss */ \"./src/styles/component/component-rating.scss\");\n/* harmony import */ var _styles_component_component_search_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/styles/component/component-search.scss */ \"./src/styles/component/component-search.scss\");\n/* harmony import */ var _styles_component_component_show_more_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/styles/component/component-show-more.scss */ \"./src/styles/component/component-show-more.scss\");\n/* harmony import */ var _styles_component_component_slider_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/styles/component/component-slider.scss */ \"./src/styles/component/component-slider.scss\");\n/* harmony import */ var _styles_component_component_slideshow_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @/styles/component/component-slideshow.scss */ \"./src/styles/component/component-slideshow.scss\");\n/* harmony import */ var _styles_component_component_totals_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @/styles/component/component-totals.scss */ \"./src/styles/component/component-totals.scss\");\n/* harmony import */ var _styles_component_component_featured_product_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @/styles/component/component-featured-product.scss */ \"./src/styles/component/component-featured-product.scss\");\n/* harmony import */ var _styles_template_customer_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @/styles/template/customer.scss */ \"./src/styles/template/customer.scss\");\n/* harmony import */ var _styles_sections_newsletter_section_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @/styles/sections/newsletter-section.scss */ \"./src/styles/sections/newsletter-section.scss\");\n/* harmony import */ var _styles_global_quick_add_scss__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @/styles/global/quick-add.scss */ \"./src/styles/global/quick-add.scss\");\n/* harmony import */ var _styles_sections_section_blog_post_scss__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @/styles/sections/section-blog-post.scss */ \"./src/styles/sections/section-blog-post.scss\");\n/* harmony import */ var _styles_sections_section_collection_list_scss__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @/styles/sections/section-collection-list.scss */ \"./src/styles/sections/section-collection-list.scss\");\n/* harmony import */ var _styles_sections_section_contact_form_scss__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @/styles/sections/section-contact-form.scss */ \"./src/styles/sections/section-contact-form.scss\");\n/* harmony import */ var _styles_sections_section_email_signup_banner_scss__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @/styles/sections/section-email-signup-banner.scss */ \"./src/styles/sections/section-email-signup-banner.scss\");\n/* harmony import */ var _styles_sections_section_featured_blog_scss__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @/styles/sections/section-featured-blog.scss */ \"./src/styles/sections/section-featured-blog.scss\");\n/* harmony import */ var _styles_sections_section_featured_product_scss__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @/styles/sections/section-featured-product.scss */ \"./src/styles/sections/section-featured-product.scss\");\n/* harmony import */ var _styles_sections_section_footer_scss__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @/styles/sections/section-footer.scss */ \"./src/styles/sections/section-footer.scss\");\n/* harmony import */ var _styles_sections_section_image_banner_scss__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @/styles/sections/section-image-banner.scss */ \"./src/styles/sections/section-image-banner.scss\");\n/* harmony import */ var _styles_sections_section_main_blog_scss__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @/styles/sections/section-main-blog.scss */ \"./src/styles/sections/section-main-blog.scss\");\n/* harmony import */ var _styles_sections_section_main_page_scss__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @/styles/sections/section-main-page.scss */ \"./src/styles/sections/section-main-page.scss\");\n/* harmony import */ var _styles_sections_section_main_product_scss__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @/styles/sections/section-main-product.scss */ \"./src/styles/sections/section-main-product.scss\");\n/* harmony import */ var _styles_sections_section_multicolumn_scss__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @/styles/sections/section-multicolumn.scss */ \"./src/styles/sections/section-multicolumn.scss\");\n/* harmony import */ var _styles_sections_section_password_scss__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @/styles/sections/section-password.scss */ \"./src/styles/sections/section-password.scss\");\n/* harmony import */ var _styles_sections_section_related_products_scss__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @/styles/sections/section-related-products.scss */ \"./src/styles/sections/section-related-products.scss\");\n/* harmony import */ var _styles_sections_section_rich_text_scss__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @/styles/sections/section-rich-text.scss */ \"./src/styles/sections/section-rich-text.scss\");\n/* harmony import */ var _styles_template_template_collection_scss__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @/styles/template/template-collection.scss */ \"./src/styles/template/template-collection.scss\");\n/* harmony import */ var _styles_template_template_giftcard_scss__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @/styles/template/template-giftcard.scss */ \"./src/styles/template/template-giftcard.scss\");\n/* harmony import */ var _styles_sections_video_section_scss__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @/styles/sections/video-section.scss */ \"./src/styles/sections/video-section.scss\");\n/* harmony import */ var _styles_sections_section_featured_products_scss__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @/styles/sections/section-featured-products.scss */ \"./src/styles/sections/section-featured-products.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Shopify-theme/./src/main.js?");

/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"base.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/base.scss?");

/***/ }),

/***/ "./src/styles/component/collage.scss":
/*!*******************************************!*\
  !*** ./src/styles/component/collage.scss ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"collage.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/collage.scss?");

/***/ }),

/***/ "./src/styles/component/collapsible-content.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/collapsible-content.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"collapsible-content.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/collapsible-content.scss?");

/***/ }),

/***/ "./src/styles/component/component-accordion.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/component-accordion.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-accordion.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-accordion.scss?");

/***/ }),

/***/ "./src/styles/component/component-article-card.scss":
/*!**********************************************************!*\
  !*** ./src/styles/component/component-article-card.scss ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-article-card.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-article-card.scss?");

/***/ }),

/***/ "./src/styles/component/component-card.scss":
/*!**************************************************!*\
  !*** ./src/styles/component/component-card.scss ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-card.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-card.scss?");

/***/ }),

/***/ "./src/styles/component/component-cart-drawer.scss":
/*!*********************************************************!*\
  !*** ./src/styles/component/component-cart-drawer.scss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-cart-drawer.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-cart-drawer.scss?");

/***/ }),

/***/ "./src/styles/component/component-cart-items.scss":
/*!********************************************************!*\
  !*** ./src/styles/component/component-cart-items.scss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-cart-items.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-cart-items.scss?");

/***/ }),

/***/ "./src/styles/component/component-cart-notification.scss":
/*!***************************************************************!*\
  !*** ./src/styles/component/component-cart-notification.scss ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-cart-notification.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-cart-notification.scss?");

/***/ }),

/***/ "./src/styles/component/component-cart.scss":
/*!**************************************************!*\
  !*** ./src/styles/component/component-cart.scss ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-cart.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-cart.scss?");

/***/ }),

/***/ "./src/styles/component/component-collection-hero.scss":
/*!*************************************************************!*\
  !*** ./src/styles/component/component-collection-hero.scss ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-collection-hero.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-collection-hero.scss?");

/***/ }),

/***/ "./src/styles/component/component-deferred-media.scss":
/*!************************************************************!*\
  !*** ./src/styles/component/component-deferred-media.scss ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-deferred-media.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-deferred-media.scss?");

/***/ }),

/***/ "./src/styles/component/component-discounts.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/component-discounts.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-discounts.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-discounts.scss?");

/***/ }),

/***/ "./src/styles/component/component-facets.scss":
/*!****************************************************!*\
  !*** ./src/styles/component/component-facets.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-facets.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-facets.scss?");

/***/ }),

/***/ "./src/styles/component/component-featured-product.scss":
/*!**************************************************************!*\
  !*** ./src/styles/component/component-featured-product.scss ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-featured-product.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-featured-product.scss?");

/***/ }),

/***/ "./src/styles/component/component-image-with-text.scss":
/*!*************************************************************!*\
  !*** ./src/styles/component/component-image-with-text.scss ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-image-with-text.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-image-with-text.scss?");

/***/ }),

/***/ "./src/styles/component/component-list-menu.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/component-list-menu.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-list-menu.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-list-menu.scss?");

/***/ }),

/***/ "./src/styles/component/component-list-payment.scss":
/*!**********************************************************!*\
  !*** ./src/styles/component/component-list-payment.scss ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-list-payment.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-list-payment.scss?");

/***/ }),

/***/ "./src/styles/component/component-list-social.scss":
/*!*********************************************************!*\
  !*** ./src/styles/component/component-list-social.scss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-list-social.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-list-social.scss?");

/***/ }),

/***/ "./src/styles/component/component-loading-overlay.scss":
/*!*************************************************************!*\
  !*** ./src/styles/component/component-loading-overlay.scss ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-loading-overlay.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-loading-overlay.scss?");

/***/ }),

/***/ "./src/styles/component/component-localization-form.scss":
/*!***************************************************************!*\
  !*** ./src/styles/component/component-localization-form.scss ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-localization-form.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-localization-form.scss?");

/***/ }),

/***/ "./src/styles/component/component-mega-menu.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/component-mega-menu.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-mega-menu.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-mega-menu.scss?");

/***/ }),

/***/ "./src/styles/component/component-menu-drawer.scss":
/*!*********************************************************!*\
  !*** ./src/styles/component/component-menu-drawer.scss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-menu-drawer.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-menu-drawer.scss?");

/***/ }),

/***/ "./src/styles/component/component-modal-video.scss":
/*!*********************************************************!*\
  !*** ./src/styles/component/component-modal-video.scss ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-modal-video.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-modal-video.scss?");

/***/ }),

/***/ "./src/styles/component/component-model-viewer-ui.scss":
/*!*************************************************************!*\
  !*** ./src/styles/component/component-model-viewer-ui.scss ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-model-viewer-ui.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-model-viewer-ui.scss?");

/***/ }),

/***/ "./src/styles/component/component-newsletter.scss":
/*!********************************************************!*\
  !*** ./src/styles/component/component-newsletter.scss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-newsletter.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-newsletter.scss?");

/***/ }),

/***/ "./src/styles/component/component-pagination.scss":
/*!********************************************************!*\
  !*** ./src/styles/component/component-pagination.scss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-pagination.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-pagination.scss?");

/***/ }),

/***/ "./src/styles/component/component-pickup-availability.scss":
/*!*****************************************************************!*\
  !*** ./src/styles/component/component-pickup-availability.scss ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-pickup-availability.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-pickup-availability.scss?");

/***/ }),

/***/ "./src/styles/component/component-predictive-search.scss":
/*!***************************************************************!*\
  !*** ./src/styles/component/component-predictive-search.scss ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-predictive-search.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-predictive-search.scss?");

/***/ }),

/***/ "./src/styles/component/component-price.scss":
/*!***************************************************!*\
  !*** ./src/styles/component/component-price.scss ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-price.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-price.scss?");

/***/ }),

/***/ "./src/styles/component/component-product-model.scss":
/*!***********************************************************!*\
  !*** ./src/styles/component/component-product-model.scss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-product-model.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-product-model.scss?");

/***/ }),

/***/ "./src/styles/component/component-rating.scss":
/*!****************************************************!*\
  !*** ./src/styles/component/component-rating.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-rating.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-rating.scss?");

/***/ }),

/***/ "./src/styles/component/component-search.scss":
/*!****************************************************!*\
  !*** ./src/styles/component/component-search.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-search.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-search.scss?");

/***/ }),

/***/ "./src/styles/component/component-show-more.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/component-show-more.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-show-more.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-show-more.scss?");

/***/ }),

/***/ "./src/styles/component/component-slider.scss":
/*!****************************************************!*\
  !*** ./src/styles/component/component-slider.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-slider.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-slider.scss?");

/***/ }),

/***/ "./src/styles/component/component-slideshow.scss":
/*!*******************************************************!*\
  !*** ./src/styles/component/component-slideshow.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-slideshow.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-slideshow.scss?");

/***/ }),

/***/ "./src/styles/component/component-totals.scss":
/*!****************************************************!*\
  !*** ./src/styles/component/component-totals.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"component-totals.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/component/component-totals.scss?");

/***/ }),

/***/ "./src/styles/global/quick-add.scss":
/*!******************************************!*\
  !*** ./src/styles/global/quick-add.scss ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"quick-add.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/global/quick-add.scss?");

/***/ }),

/***/ "./src/styles/sections/newsletter-section.scss":
/*!*****************************************************!*\
  !*** ./src/styles/sections/newsletter-section.scss ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"newsletter-section.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/newsletter-section.scss?");

/***/ }),

/***/ "./src/styles/sections/section-blog-post.scss":
/*!****************************************************!*\
  !*** ./src/styles/sections/section-blog-post.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-blog-post.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-blog-post.scss?");

/***/ }),

/***/ "./src/styles/sections/section-collection-list.scss":
/*!**********************************************************!*\
  !*** ./src/styles/sections/section-collection-list.scss ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-collection-list.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-collection-list.scss?");

/***/ }),

/***/ "./src/styles/sections/section-contact-form.scss":
/*!*******************************************************!*\
  !*** ./src/styles/sections/section-contact-form.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-contact-form.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-contact-form.scss?");

/***/ }),

/***/ "./src/styles/sections/section-email-signup-banner.scss":
/*!**************************************************************!*\
  !*** ./src/styles/sections/section-email-signup-banner.scss ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-email-signup-banner.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-email-signup-banner.scss?");

/***/ }),

/***/ "./src/styles/sections/section-featured-blog.scss":
/*!********************************************************!*\
  !*** ./src/styles/sections/section-featured-blog.scss ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-featured-blog.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-featured-blog.scss?");

/***/ }),

/***/ "./src/styles/sections/section-featured-product.scss":
/*!***********************************************************!*\
  !*** ./src/styles/sections/section-featured-product.scss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-featured-product.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-featured-product.scss?");

/***/ }),

/***/ "./src/styles/sections/section-featured-products.scss":
/*!************************************************************!*\
  !*** ./src/styles/sections/section-featured-products.scss ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-featured-products.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-featured-products.scss?");

/***/ }),

/***/ "./src/styles/sections/section-footer.scss":
/*!*************************************************!*\
  !*** ./src/styles/sections/section-footer.scss ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-footer.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-footer.scss?");

/***/ }),

/***/ "./src/styles/sections/section-image-banner.scss":
/*!*******************************************************!*\
  !*** ./src/styles/sections/section-image-banner.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-image-banner.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-image-banner.scss?");

/***/ }),

/***/ "./src/styles/sections/section-main-blog.scss":
/*!****************************************************!*\
  !*** ./src/styles/sections/section-main-blog.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-main-blog.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-main-blog.scss?");

/***/ }),

/***/ "./src/styles/sections/section-main-page.scss":
/*!****************************************************!*\
  !*** ./src/styles/sections/section-main-page.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-main-page.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-main-page.scss?");

/***/ }),

/***/ "./src/styles/sections/section-main-product.scss":
/*!*******************************************************!*\
  !*** ./src/styles/sections/section-main-product.scss ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-main-product.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-main-product.scss?");

/***/ }),

/***/ "./src/styles/sections/section-multicolumn.scss":
/*!******************************************************!*\
  !*** ./src/styles/sections/section-multicolumn.scss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-multicolumn.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-multicolumn.scss?");

/***/ }),

/***/ "./src/styles/sections/section-password.scss":
/*!***************************************************!*\
  !*** ./src/styles/sections/section-password.scss ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-password.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-password.scss?");

/***/ }),

/***/ "./src/styles/sections/section-related-products.scss":
/*!***********************************************************!*\
  !*** ./src/styles/sections/section-related-products.scss ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-related-products.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-related-products.scss?");

/***/ }),

/***/ "./src/styles/sections/section-rich-text.scss":
/*!****************************************************!*\
  !*** ./src/styles/sections/section-rich-text.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"section-rich-text.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/section-rich-text.scss?");

/***/ }),

/***/ "./src/styles/sections/video-section.scss":
/*!************************************************!*\
  !*** ./src/styles/sections/video-section.scss ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"video-section.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/sections/video-section.scss?");

/***/ }),

/***/ "./src/styles/template/customer.scss":
/*!*******************************************!*\
  !*** ./src/styles/template/customer.scss ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"customer.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/template/customer.scss?");

/***/ }),

/***/ "./src/styles/template/template-collection.scss":
/*!******************************************************!*\
  !*** ./src/styles/template/template-collection.scss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"template-collection.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/template/template-collection.scss?");

/***/ }),

/***/ "./src/styles/template/template-giftcard.scss":
/*!****************************************************!*\
  !*** ./src/styles/template/template-giftcard.scss ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"template-giftcard.bf.build.css\";\n\n//# sourceURL=webpack://Shopify-theme/./src/styles/template/template-giftcard.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
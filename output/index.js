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

/***/ "./js/api.js":
/*!*******************!*\
  !*** ./js/api.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./js/localStorage.js\");\n\r\n\r\nconst API_KEY = \"AIzaSyCI1HC6K97kM3xGytOBR8bOoy0P9Q3UoxM\";\r\nconst MAX_RESULTS = 6;\r\nlet startIndex = 0;\r\nconst PRINT_TYPE = \"books\";\r\nlet userCategory = \"Architecture\";\r\nconst API_URL =`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&maxResults=${MAX_RESULTS}&printType=${PRINT_TYPE}`\r\n\r\nconst bookElemSection = document.querySelector(\".guud-section\")\r\nconst loadMoreBtn = document.querySelector(\".more-books-block\")\r\n\r\nlet currentCategory = \"\";\r\n\r\nloadMoreBtn.addEventListener(\"click\", ()=>{\r\n    fetchDataAndUpdateCategory(userCategory)\r\n    startIndex += MAX_RESULTS;\r\n})\r\n\r\n;(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.check)()\r\n\r\nfunction fetchDataAndUpdateCategory(userCategory) {\r\n    if(userCategory !== currentCategory){\r\n        bookElemSection.innerHTML = \"\";\r\n        currentCategory = userCategory;\r\n        startIndex = 0;\r\n    }\r\n    fetch(`${API_URL}&q=+subject:${userCategory}&startIndex=${startIndex}`)\r\n    .then((response)=>{\r\n        return response.json()\r\n    })\r\n    .then((data)=>{\r\n        console.log(data)\r\n        data.items.forEach((name) =>{\r\n            createBookInfoElem(name)\r\n        })\r\n    })\r\n    .catch((error) =>{\r\n        console.error(\"Ошибка при загрузке книг:\", error)\r\n    })\r\n}\r\n\r\nconst categoryElem = document.querySelectorAll(\".category-li\");\r\n\r\nlet isClicked = false;\r\n\r\ncategoryElem.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n        isClicked = true;\r\n        const selectedCategory = element.dataset.key;\r\n        console.log(selectedCategory, userCategory);\r\n        userCategory = selectedCategory;\r\n        fetchDataAndUpdateCategory(userCategory);\r\n        categoryElem.forEach((el) => {\r\n            el.classList.remove(\"clicked\");\r\n        });\r\n        element.classList.add(\"clicked\");\r\n    });\r\n});\r\n\r\nfetchDataAndUpdateCategory(userCategory)\r\n\r\nfunction createBookInfoElem(data){\r\n    // console.log(data)\r\n    const bookInfoBlock = document.createElement(\"div\")\r\n    bookInfoBlock.classList.add(\"guud-list\")\r\n\r\n    const imgSection = document.createElement(\"div\")\r\n    const img = document.createElement(\"img\")\r\n    if (data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail) {\r\n        img.src = data.volumeInfo.imageLinks.thumbnail;\r\n    } else {\r\n        img.alt = \"Book-image\";\r\n    }\r\n    imgSection.appendChild(img)\r\n    bookElemSection.appendChild(imgSection)\r\n\r\n    const otherInfo = document.createElement(\"div\")\r\n    otherInfo.classList.add(\"guud-info\")\r\n    const author = document.createElement(\"p\")\r\n    author.textContent = data.volumeInfo.authors;\r\n    const title = document.createElement(\"h2\")\r\n    title.textContent = data.volumeInfo.title;\r\n\r\n    const statisticBlock = document.createElement(\"div\")\r\n    statisticBlock.classList.add(\"info-statistic\")\r\n    const ratingCouts = document.createElement(\"p\")\r\n    const averageRatingBlock = document.createElement(\"div\")\r\n    console.log(data.volumeInfo.averageRating)\r\n    const aRating = data.volumeInfo.averageRating;\r\n    if(data.volumeInfo.averageRating){\r\n        for(let i = 0; i < aRating; i++){\r\n            const starImg = document.createElement(\"img\");\r\n            starImg.classList.add(\"infoImg\");\r\n            starImg.src =\"../img/ICON/StarGold.png\";\r\n            averageRatingBlock.appendChild(starImg);\r\n        }\r\n        ratingCouts.textContent = data.volumeInfo.ratingsCount + \" review\";\r\n    }else{\r\n        averageRatingBlock.innerHTML = \"\";\r\n    }\r\n    statisticBlock.appendChild(averageRatingBlock);\r\n    statisticBlock.appendChild(ratingCouts);\r\n\r\n    const description = document.createElement(\"p\")\r\n    description.textContent = data.volumeInfo.description\r\n    const lines = 3;\r\n    description.style.display = '-webkit-box';\r\n    description.style.WebkitBoxOrient = 'vertical';\r\n    description.style.overflow = 'hidden';\r\n    description.style.webkitLineClamp = lines;\r\n    const priceBlock = document.createElement(\"div\")\r\n    priceBlock.classList.add(\"infoPrice\")\r\n    const valute = document.createElement(\"h3\")\r\n    const price = document.createElement(\"h3\")\r\n    if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.amount){\r\n        price.textContent = data.saleInfo.retailPrice.amount;\r\n        if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.currencyCode === \"EUR\"){\r\n            valute.textContent = \"€\";\r\n        }else if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.currencyCode === \"USD\"){\r\n            valute.textContent = \"$\";\r\n        }else if(data.saleInfo && data.saleInfo.retailPrice && data.saleInfo.retailPrice.currencyCode === \"RUB\")\r\n            valute.textContent = \"₽\";\r\n    }else{\r\n        price.innerHTML = \"\";\r\n    }\r\n    const cart = document.querySelector(\".shop\");\r\n    const button = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.cartFunction)(data.id, cart);\r\n\r\n    otherInfo.appendChild(author)\r\n    otherInfo.appendChild(title)\r\n    otherInfo.appendChild(statisticBlock)\r\n    otherInfo.appendChild(description)\r\n    otherInfo.appendChild(priceBlock)\r\n    priceBlock.appendChild(valute)\r\n    priceBlock.appendChild(price)\r\n    otherInfo.appendChild(button)\r\n    bookInfoBlock.appendChild(imgSection)\r\n    bookInfoBlock.appendChild(otherInfo)\r\n    bookElemSection.appendChild(bookInfoBlock)\r\n    setTimeout(() =>{\r\n        bookInfoBlock.classList.add(\"active\")\r\n    }, 10)\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/api.js?");

/***/ }),

/***/ "./js/header.js":
/*!**********************!*\
  !*** ./js/header.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollDown: () => (/* binding */ scrollDown)\n/* harmony export */ });\nfunction scrollDown(){\r\n    const header = document.querySelector(\"header\");\r\n\r\n    function updateHeaderClass(){\r\n        if (window.innerWidth > 375) {\r\n            if (window.scrollY <= 0) {\r\n                header.classList.remove(\"scroll\");\r\n            } else {\r\n                header.classList.add(\"scroll\");\r\n            }\r\n        } else {\r\n            header.classList.remove(\"scroll\");\r\n        }\r\n\r\n    }\r\n\r\n    window.addEventListener(\"scroll\", updateHeaderClass);\r\n    window.addEventListener(\"load\", updateHeaderClass);\r\n    window.addEventListener(\"resize\", updateHeaderClass);\r\n}\n\n//# sourceURL=webpack:///./js/header.js?");

/***/ }),

/***/ "./js/localStorage.js":
/*!****************************!*\
  !*** ./js/localStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cartFunction: () => (/* binding */ cartFunction),\n/* harmony export */   check: () => (/* binding */ check),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _shopCart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopCart.js */ \"./js/shopCart.js\");\n\r\n// import { bookCountInCartStyle } from \"./bookCountInCartStyle.js\";\r\n\r\nconst FAVORIT_BOOKS = \"Books\";\r\nlet storageData = JSON.parse(localStorage.getItem(FAVORIT_BOOKS))\r\n\r\n\r\nfunction storage(bookId, isInCart){\r\n\r\nif(isInCart){\r\n    if(storageData){\r\n        storageData.push(bookId)\r\n    }else{\r\n        storageData = [bookId]\r\n    }\r\n    localStorage.setItem(FAVORIT_BOOKS, JSON.stringify(storageData))\r\n}else{\r\n    storageData = storageData.filter((elem) => elem !== bookId)\r\n    localStorage.setItem(FAVORIT_BOOKS, JSON.stringify(storageData))\r\n}\r\nconsole.log(storageData)\r\nreturn storageData\r\n}\r\n\r\nfunction check(){\r\n    if(!storageData){\r\n        storageData = [];\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction cartFunction(bookId, cart) {\r\n    const button = document.createElement(\"button\")\r\n    button.textContent = \"BUY NOW\"\r\n    let isInCart = false;\r\n    if(storageData){\r\n        if(storageData.includes(bookId)){\r\n            isInCart = true;\r\n            button.textContent = \"IN THE CART\"\r\n            cart.classList.add(\"in\");        \r\n        }\r\n    }\r\n\r\n    console.log(storageData, bookId)\r\n    button.classList.add(\"btnBuy\");\r\n    button.addEventListener(\"click\", () =>{\r\n        (0,_shopCart_js__WEBPACK_IMPORTED_MODULE_0__.bookInCart)(isInCart);\r\n        isInCart = !isInCart;\r\n        storage(bookId, isInCart)\r\n        if(isInCart){\r\n            button.textContent = \"IN THE CART\"\r\n            cart.classList.add(\"in\");\r\n        }else{\r\n            button.textContent = \"BUY NOW\"\r\n        }\r\n    })\r\n    return button;\r\n}\r\n\r\n// let mas = [1, 2, 3, 4, 5]\r\n// let num = 10;\r\n\r\n//  mas.forEach((value) => {\r\n//     if(value === num){\r\n//         console.log(\"ok\")\r\n//     }else{\r\n//         console.log(\"try again\")\r\n//     }\r\n//  })\n\n//# sourceURL=webpack:///./js/localStorage.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./js/header.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ \"./js/slider.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile.js */ \"./js/mobile.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/style.scss */ \"./style/style.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_slider_js__WEBPACK_IMPORTED_MODULE_1__.slider)()\r\n;(0,_mobile_js__WEBPACK_IMPORTED_MODULE_3__.category)()\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/mobile.js":
/*!**********************!*\
  !*** ./js/mobile.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   category: () => (/* binding */ category)\n/* harmony export */ });\nconst mobileMenuIcon = document.querySelector(\".mobile-menu-icon\")\r\nconst mobileMenunBlock = document.querySelector(\".mobile-menu-block\")\r\n\r\nfunction category(){\r\n    const category = document.querySelector(\".category\")\r\n\r\n    category.addEventListener(\"click\", () => {\r\n        category.classList.toggle(\"active\")\r\n    })\r\n\r\n    mobileMenuIcon.addEventListener(\"click\", () => {\r\n        mobileMenunBlock.classList.toggle(\"open\")\r\n    })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/mobile.js?");

/***/ }),

/***/ "./js/shopCart.js":
/*!************************!*\
  !*** ./js/shopCart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bookInCart: () => (/* binding */ bookInCart)\n/* harmony export */ });\nlet bookCount = parseInt(localStorage.getItem(\"bookCount\")) || 0;\r\nconst cart = document.querySelectorAll(\".shop\");\r\nconst bookCountInCart = document.querySelectorAll(\".cartItemCount\");\r\nlet cartIsUsed = true;\r\n\r\nfunction updateBookCountInCart() {\r\n    bookCountInCart.forEach((elem) => {\r\n        elem.textContent = bookCount;\r\n    });\r\n}\r\n\r\nupdateBookCountInCart();\r\n\r\nfunction bookInCart(isInCart){\r\n    if(!isInCart){\r\n        bookCount++;\r\n    } else {\r\n        if(bookCount > 0){\r\n            bookCount--;\r\n        }\r\n    }\r\n\r\n    cart.forEach((elem) => {\r\n        elem.classList.add(\"in\");\r\n    });\r\n\r\n    updateBookCountInCart();\r\n    \r\n    bookCountInCart.forEach((elem) => {\r\n        elem.textContent = bookCount;\r\n    });\r\n\r\n    localStorage.setItem(\"bookCount\", bookCount.toString())\r\n\r\n    if(bookCount === 0){\r\n        cart.forEach((elem) => {\r\n            elem.classList.remove(\"in\");\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./js/shopCart.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: () => (/* binding */ slider)\n/* harmony export */ });\n\r\n\r\nfunction slider(){\r\n    const slideBtn = document.querySelectorAll(\".ellipse-circle\");\r\n    const img = document.querySelectorAll(\".banner-img\");\r\n\r\n    let currentIndex = 0;\r\n\r\n    function changeImage (imageIndex){\r\n        img.forEach((photo) => {\r\n            photo.classList.remove(\"active\")\r\n        })\r\n        img[imageIndex].classList.add(\"active\")\r\n        changeStyles()\r\n    }\r\n    changeImage(0)\r\n\r\n    function changeStyles(){\r\n        slideBtn.forEach((name, index) =>{\r\n            if(index === currentIndex){\r\n                name.classList.add(\"push\")\r\n            }else{\r\n                name.classList.remove(\"push\")\r\n            }\r\n        })\r\n    }\r\n\r\n    function changeBtns(){\r\n        slideBtn.forEach((name, index) => {\r\n            name.addEventListener(\"click\", ()=>{\r\n                currentIndex = index\r\n                changeImage(index)\r\n            })\r\n        })\r\n    }\r\n    changeBtns()\r\n\r\n    let intervalId = null;\r\n    function autoSlide(){\r\n        intervalId = setInterval(() =>{\r\n            currentIndex = (currentIndex + 1) % img.length;\r\n            changeImage(currentIndex);\r\n        }, 5000);\r\n    }\r\n    autoSlide()\r\n}\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/style.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/style.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Montserrat/Montserrat-Black.ttf */ \"./font/Montserrat/Montserrat-Black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Montserrat/Montserrat-Medium.ttf */ \"./font/Montserrat/Montserrat-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"MontserratBold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: \"MontserratNormal\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@font-face {\n  font-family: \"MontserratBold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n@font-face {\n  font-family: \"MontserratNormal\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n@media (max-width: 375px) {\n  header {\n    position: fixed !important;\n    z-index: 30 !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    justify-content: space-between;\n    height: 85px !important;\n  }\n  .phone {\n    position: absolute;\n    width: 100px;\n    margin-top: -45px;\n    right: 20px;\n  }\n  .phone .mobile-menu {\n    width: 100px;\n    position: absolute;\n    display: flex !important;\n  }\n  .phone .mobile-menu .mobile-menu-icon {\n    position: absolute;\n    width: 40px;\n  }\n  .phone .mobile-menu .mobile-menu-block {\n    position: relative;\n    margin-top: 95px;\n    display: none;\n    z-index: 10;\n  }\n  .phone .mobile-menu .mobile-menu-block.open {\n    display: flex;\n    flex-direction: column;\n    margin-left: -175px;\n    background-color: rgb(189, 184, 184);\n  }\n  .phone .mobile-menu .mobile-menu-block ul {\n    padding: 10px;\n  }\n  .phone .mobile-menu .mobile-menu-block .mobile-client-elem-section {\n    width: 250px;\n    margin-left: 30px;\n  }\n  .phone .mobile-menu .mobile-menu-block .mobile-client-elem-section li {\n    padding: 5px !important;\n  }\n  .phone .mobile-menu .mobile-menu-block .mobile-client-elem-section .shop.in {\n    display: flex !important;\n    top: 40px !important;\n    right: 100px !important;\n  }\n  .phone .mobile-menu .mobile-menu-block .mobile-menu-list li {\n    padding: 5px !important;\n  }\n  .client-elem-section {\n    display: none !important;\n  }\n  .mobile-client-elem-section {\n    display: flex;\n  }\n  .menu {\n    display: none !important;\n  }\n  .section-one {\n    display: none !important;\n  }\n  .guud-section {\n    right: -27px !important;\n    grid-template-columns: repeat(1, 500px) !important;\n  }\n  .more-books-block button {\n    margin-left: -210px;\n  }\n  .category {\n    position: fixed !important;\n    width: 148px !important;\n    display: flex;\n    z-index: 10;\n    left: -146px;\n    top: 190px !important;\n  }\n  .category.active {\n    left: 0;\n  }\n  .category .category-list {\n    left: -31px;\n    top: -10px;\n  }\n  .category .btnOpen {\n    display: block !important;\n    background-color: #EFEEF6;\n    border: 0;\n  }\n}\n@media (max-width: 1440px) {\n  .shop.in {\n    right: 152px !important;\n  }\n  .client-elem-section {\n    margin-right: 155px !important;\n  }\n  .section-one-banners {\n    margin-left: 230px !important;\n  }\n  .banner-img {\n    width: 1120px !important;\n    height: 670px !important;\n  }\n  .ellipse {\n    margin-left: 9px !important;\n  }\n  .section-two {\n    justify-content: flex-start !important;\n  }\n}\nbody, header, main, footer, h1, h2, h3, h4, h5, h6, p, button, li {\n  margin: 0;\n  padding: 0;\n  font-family: \"MontserratNormal\";\n}\n\nheader {\n  width: 100%;\n  height: 116px;\n  position: relative;\n}\nheader.scroll {\n  position: fixed;\n  background-color: #FFFFFF;\n  z-index: 30;\n}\n\n.header-elem-section, .client-elem-section {\n  height: 116px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n}\n\nli {\n  list-style: none;\n  list-style-type: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: black;\n  margin-left: 30px;\n}\n\na {\n  list-style: none;\n  list-style-type: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: black;\n}\n\n.mobile-menu {\n  display: none;\n}\n\n.logo {\n  margin-left: 143px;\n}\n\n.client-elem-section {\n  margin-right: 145px;\n}\n\n.shop {\n  display: none;\n  right: 142px !important;\n}\n.shop.in {\n  display: flex;\n  width: 13px;\n  height: 13px;\n  border-radius: 10px;\n  background-color: red;\n  position: absolute;\n  top: 58px !important;\n}\n.shop.in .cartItemCount {\n  font-size: 10px;\n  color: white;\n  margin-left: 3.5px;\n}\n\n.banner-img {\n  width: 1200px;\n  height: 702px;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;\n  position: absolute;\n  right: 100%;\n}\n.banner-img.active {\n  opacity: 1;\n  visibility: visible;\n  position: relative;\n  left: 0%;\n}\n\n.section-one {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 2;\n}\n\n.section-one-banners {\n  display: flex;\n  justify-content: center;\n  margin-left: 260px;\n}\n\n.promo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-end;\n  position: relative;\n  z-index: 2;\n  top: 2vh;\n  right: 84px;\n}\n\n.promo-one {\n  margin-right: 60px;\n}\n\n.ellipse {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 40px;\n  margin-top: 10px;\n}\n\n.ellipse-circle {\n  position: relative;\n  z-index: 20;\n  cursor: pointer;\n  background-color: #EFEEF6;\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin: 8px 13px;\n  border-radius: 5px;\n  margin-left: -5px;\n}\n.ellipse-circle.push {\n  background-color: #9E98DC;\n}\n\n.section-two {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-items: flex-start;\n}\n\n.category {\n  background-color: #EFEEF6;\n  width: 416px;\n  height: 710px;\n  position: relative;\n  top: 45px;\n}\n.category .btnOpen {\n  display: none;\n}\n\n.category-list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  align-items: flex-start;\n  position: relative;\n  left: 95px;\n}\n\n.category-li {\n  margin-top: 23px;\n  font-size: 12px;\n}\n.category-li.clicked {\n  font-weight: bold;\n  list-style: disc;\n}\n\n.guud-section {\n  display: grid;\n  grid-template-columns: 100px 100px;\n  gap: 10px;\n  grid-template-columns: repeat(2, 500px);\n  position: relative;\n  row-gap: 95px;\n  top: 85px;\n  right: 55px;\n}\n\n.guud-list {\n  display: grid;\n  grid-template-columns: 100px 100px;\n  gap: 10px;\n  opacity: 0;\n  transition: opacity 1s ease;\n  grid-template-columns: 235px 190px;\n  position: relative;\n  z-index: 5;\n  align-items: center;\n}\n.guud-list.active {\n  opacity: 1;\n}\n.guud-list img {\n  width: 212px;\n  height: 300px;\n}\n.guud-list p {\n  margin-top: 4px;\n  font-size: 10px;\n}\n.guud-list h2 {\n  margin-top: 4px;\n  font-size: 16px;\n}\n.guud-list h3 {\n  margin-top: 16px;\n  font-size: 13px;\n}\n.guud-list button {\n  cursor: pointer;\n  width: 176px;\n  height: 45px;\n  margin-top: 16px;\n  background-color: #ffffff;\n  border: #4C3DB2 solid 1px;\n  color: #4C3DB2;\n}\n.guud-list button:hover {\n  background-color: #9692aa;\n}\n\n.guud-info {\n  margin-top: -65px;\n}\n\n.infoImg {\n  width: 12px !important;\n  height: 12px !important;\n}\n\n.info-statistic {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px;\n}\n\n.infoPrice {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.guud {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.more-books-block {\n  margin-top: 170px;\n  margin-left: 320px;\n  margin-bottom: 70px;\n}\n.more-books-block button {\n  cursor: pointer;\n  width: 176px;\n  height: 45px;\n  margin-top: 16px;\n  background-color: #ffffff;\n  border: #4C3DB2 solid 1px;\n  color: #4C3DB2;\n}\n.more-books-block button:hover {\n  background-color: #9692aa;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./font/Montserrat/Montserrat-Black.ttf":
/*!**********************************************!*\
  !*** ./font/Montserrat/Montserrat-Black.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"beacc26b4bbaaf608567.ttf\";\n\n//# sourceURL=webpack:///./font/Montserrat/Montserrat-Black.ttf?");

/***/ }),

/***/ "./font/Montserrat/Montserrat-Medium.ttf":
/*!***********************************************!*\
  !*** ./font/Montserrat/Montserrat-Medium.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8c6753baa964ccac1ba.ttf\";\n\n//# sourceURL=webpack:///./font/Montserrat/Montserrat-Medium.ttf?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;
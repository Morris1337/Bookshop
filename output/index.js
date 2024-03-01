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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./js/header.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ \"./js/slider.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./js/api.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile.js */ \"./js/mobile.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_slider_js__WEBPACK_IMPORTED_MODULE_1__.slider)()\r\n;(0,_mobile_js__WEBPACK_IMPORTED_MODULE_3__.category)()\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;
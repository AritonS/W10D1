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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(array) {\n        this.htmlArray = array;\n    }\n\n    html(string) {\n        if(string !== undefined) {\n        this.htmlArray.forEach((node) => {\n            node.innerHTML = string;\n        })\n    }\n        else {\n            return this.htmlArray[0].innerHTML;\n        }\n    }\n\n    empty() {\n        this.htmlArray.forEach((node) => {\n            node.innerHTML = \"\";\n        });  \n    }\n    append(arg){\n        if (arg instanceof DOMNodeCollection) {\n            arg.htmlArray.forEach((arg) => {\n                this.htmlArray.forEach((node) => {\n                    node.innerHTML.concat(arg.outerHTML);\n                });\n            });\n        }else if (typeof arg === \"string\"){\n            this.htmlArray.forEach((node) => {\n                node.innerHTML += (arg);\n            });\n            \n        }else if (arg instanceof HTMLElement){\n            this.htmlArray.forEach((node) => {\n                node.innerHTML.concat(arg.outerHTML);\n            });\n        \n        }\n    }\n    addClass(newClass) {\n      \n        this.htmlArray.forEach((node) => {\n            node.className += ` ${newClass}`;\n        });\n        \n    }\n\n    removeClass(oldClass) {\n        this.htmlArray.forEach((node) => {\n            let classes = node.className.split(\" \");\n            if (classes.includes(oldClass)){\n                let oldIdx = classes.indexOf(oldClass);\n                classes.splice(oldIdx, 1);\n            }\n            node.className = classes.join(\" \");\n        });\n    }\n}\n\nmodule.exports = DOMNodeCollection\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\")\n\nwindow.$l = function(arg) {\n    if (typeof arg === 'string') {\n        let nodeList = document.querySelectorAll(arg);\n        return new DOMNodeCollection(Array.from(nodeList));\n    }else if(arg instanceof HTMLElement) {\n        return new DOMNodeCollection(Array.from(arg))\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/input-emails/input-emails.js":
/*!*****************************************************!*\
  !*** ./src/components/input-emails/input-emails.js ***!
  \*****************************************************/
/*! exports provided: InputEmails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputEmails\", function() { return InputEmails; });\n/* harmony import */ var _text_pill_text_pill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text-pill/text-pill */ \"./src/components/text-pill/text-pill.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar InputEmails = /*#__PURE__*/function () {\n  function InputEmails(hostElement) {\n    _classCallCheck(this, InputEmails);\n\n    // bind class methods\n    this._onTextPillRemove = this._onTextPillRemove.bind(this);\n    this._onInputChange = this._onInputPaste.bind(this);\n    this._onInputKeydown = this._onInputKeydown.bind(this);\n    this._onInputBlur = this._onInputBlur.bind(this);\n    this._onInputPaste = this._onInputPaste.bind(this);\n    this._onContainerClick = this._onContainerClick.bind(this); // create markup\n\n    var markup = new DOMParser().parseFromString(\"\\n      <div class=\\\"input-emails\\\">\\n        <div class=\\\"input-emails__container\\\">\\n          <input class=\\\"input-emails__input\\\" type=\\\"text\\\" placeholder=\\\"add more people...\\\" />\\n        </div>\\n      </div>\\n    \", 'text/html').body.children[0];\n    this.hostElement = hostElement;\n    this.hostElement.appendChild(markup); // save element references\n\n    this.containerElement = this.hostElement.querySelector('.input-emails__container');\n    this.inputElement = this.hostElement.querySelector('.input-emails__input'); // register event listeners\n\n    this.containerElement.addEventListener('text-pill-remove', this._onTextPillRemove);\n    this.containerElement.addEventListener('click', this._onContainerClick);\n    this.inputElement.addEventListener('paste', this._onInputPaste);\n    this.inputElement.addEventListener('keydown', this._onInputKeydown);\n    this.inputElement.addEventListener('blur', this._onInputBlur); // initialize internal props\n\n    this.regex = /^(([^<>()\\[\\]\\.,;:\\s@\\']+(\\.[^<>()\\[\\]\\.,;:\\s@\\']+)*)|(\\'.+\\'))@(([^<>()[\\]\\.,;:\\s@\\']+\\.)+[^<>()[\\]\\.,;:\\s@\\']{2,})$/i;\n    this.textPills = [];\n  }\n\n  _createClass(InputEmails, [{\n    key: \"addEmail\",\n    value: function addEmail(emailStr) {\n      if (!emailStr) {\n        return;\n      }\n\n      var emailPill = this._createTextPill(emailStr.trim());\n\n      this.containerElement.insertBefore(emailPill.hostElement, this.inputElement);\n\n      this._dispatchCUstomEvent(this.hostElement, 'add', emailStr);\n    }\n  }, {\n    key: \"getEmails\",\n    value: function getEmails() {\n      return this.textPills.filter(function (pill) {\n        return pill.valid;\n      }).length;\n    }\n  }, {\n    key: \"replaceAll\",\n    value: function replaceAll() {\n      var _this = this;\n\n      var pills = Array.prototype.slice.call(this.containerElement.getElementsByClassName('email-pill'));\n      pills.map(function (pill) {\n        return _this.containerElement.removeChild(pill);\n      });\n      this.textPills = [];\n\n      for (var _len = arguments.length, emails = new Array(_len), _key = 0; _key < _len; _key++) {\n        emails[_key] = arguments[_key];\n      }\n\n      emails.map(function (email) {\n        if (email) {\n          _this.addEmail(email);\n        }\n      });\n\n      this._dispatchCUstomEvent(this.hostElement, 'replace', emails);\n    }\n  }, {\n    key: \"_createTextPill\",\n    value: function _createTextPill(emailStr) {\n      var hostElement = document.createElement('div');\n      hostElement.classList.add('email-pill');\n      var textPill = new _text_pill_text_pill__WEBPACK_IMPORTED_MODULE_0__[\"TextPill\"](hostElement, emailStr, this.regex);\n      this.textPills.push(textPill);\n      return textPill;\n    }\n  }, {\n    key: \"_removeTextPill\",\n    value: function _removeTextPill(textPill) {\n      this.containerElement.removeChild(textPill.hostElement);\n      this.textPills = this.textPills.filter(function (pill) {\n        return pill !== textPill;\n      });\n\n      this._dispatchCUstomEvent(this.hostElement, 'remove', textPill.text);\n    }\n  }, {\n    key: \"_dispatchCUstomEvent\",\n    value: function _dispatchCUstomEvent(dipatcherElement, eventName, detail) {\n      var event;\n\n      if (typeof CustomEvent === 'function') {\n        event = new CustomEvent(eventName, {\n          bubbles: true,\n          composed: true,\n          detail: detail\n        });\n      } else {\n        event = document.createEvent('CustomEvent');\n        event.initCustomEvent(eventName, true, true, detail);\n      }\n\n      dipatcherElement.dispatchEvent(event);\n    }\n  }, {\n    key: \"_isComaOrEnter\",\n    value: function _isComaOrEnter(keyboardEvent) {\n      var code = keyboardEvent.code,\n          keyCode = keyboardEvent.keyCode;\n\n      if (code !== undefined) {\n        return code == 'Comma' || code === 'Enter';\n      }\n\n      return keyCode === 188 || keyCode === 13;\n    }\n  }, {\n    key: \"_onTextPillRemove\",\n    value: function _onTextPillRemove(event) {\n      var textPill = event.detail;\n\n      this._removeTextPill(textPill);\n    }\n  }, {\n    key: \"_onInputBlur\",\n    value: function _onInputBlur() {\n      if (!this.inputElement.value.trim()) {\n        this.inputElement.value = '';\n        return;\n      }\n\n      this.addEmail(this.inputElement.value);\n      this.inputElement.value = '';\n    }\n  }, {\n    key: \"_onInputPaste\",\n    value: function _onInputPaste(event) {\n      var _this2 = this;\n\n      event.preventDefault();\n      var pastedText = '';\n\n      if (typeof event.clipboardData === 'undefined') {\n        pastedText = window.clipboardData.getData('Text');\n      } else {\n        pastedText = event.clipboardData.getData('text/plain');\n      }\n\n      var emails = pastedText.split(',').map(function (email) {\n        return email.trim();\n      });\n      emails.forEach(function (email) {\n        _this2.addEmail(email);\n      });\n    }\n  }, {\n    key: \"_onInputKeydown\",\n    value: function _onInputKeydown(keyboardEvent) {\n      if (!this._isComaOrEnter(keyboardEvent)) {\n        return;\n      }\n\n      keyboardEvent.preventDefault();\n\n      if (!this.inputElement.value.trim()) {\n        this.inputElement.value = '';\n        return;\n      }\n\n      this.addEmail(this.inputElement.value.trim());\n      this.inputElement.value = '';\n    }\n  }, {\n    key: \"_onContainerClick\",\n    value: function _onContainerClick() {\n      this.inputElement.focus();\n    }\n  }]);\n\n  return InputEmails;\n}();\n\n//# sourceURL=webpack:///./src/components/input-emails/input-emails.js?");

/***/ }),

/***/ "./src/components/text-pill/text-pill.js":
/*!***********************************************!*\
  !*** ./src/components/text-pill/text-pill.js ***!
  \***********************************************/
/*! exports provided: TextPill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextPill\", function() { return TextPill; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TextPill = /*#__PURE__*/function () {\n  function TextPill(hostElement, text, pattern) {\n    _classCallCheck(this, TextPill);\n\n    // bind class methods\n    this._onRemoveButtonClick = this._onRemoveButtonClick.bind(this); // create markup\n\n    var markup = new DOMParser().parseFromString(\"\\n      <div class=\\\"pill\\\">\\n        <div class=\\\"pill__text\\\"></div>\\n        <div class=\\\"pill__remove\\\">\\n          <svg width=\\\"8\\\" height=\\\"8\\\" viewBox=\\\"0 0 8 8\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z\\\" fill=\\\"#050038\\\"/>\\n          </svg>\\n        </div>\\n      </div>\\n    \", 'text/html').body.children[0];\n    this.hostElement = hostElement;\n    this.hostElement.style.display = 'inline-block';\n    this.hostElement.style.boxSizing = 'border-box';\n    this.hostElement.appendChild(markup); // save element references\n\n    this.pillElement = this.hostElement.querySelector('.pill');\n    this.textElement = this.hostElement.querySelector('.pill__text');\n    this.removeElement = this.hostElement.querySelector('.pill__remove'); // save properties\n\n    this.text = text;\n    this.pattern = pattern; // register event listeners\n\n    this.removeElement.addEventListener('click', this._onRemoveButtonClick);\n  }\n\n  _createClass(TextPill, [{\n    key: \"_validate\",\n    value: function _validate() {\n      if (!this.regex) {\n        return true;\n      }\n\n      var text = this.textElement.innerHTML;\n      var valid = this.regex.test(text);\n\n      if (!valid) {\n        this.pillElement.classList.add('pill--invalid');\n      } else {\n        this.pillElement.classList.remove('pill--invalid');\n      }\n\n      return valid;\n    }\n  }, {\n    key: \"_capitalizeFirstLetter\",\n    value: function _capitalizeFirstLetter(string) {\n      return string.charAt(0).toUpperCase() + string.slice(1);\n    }\n  }, {\n    key: \"_camelCase\",\n    value: function _camelCase(name) {\n      var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n      var pattern = new RegExp(\"\".concat(delim, \"([a-z])\"), 'g');\n      return name.replace(pattern, function (match, capture) {\n        return capture.toUpperCase();\n      });\n    }\n  }, {\n    key: \"_onTextAttributeChange\",\n    value: function _onTextAttributeChange(newValue) {\n      this.textElement.innerHTML = newValue;\n\n      this._validate();\n    }\n  }, {\n    key: \"_onRemoveButtonClick\",\n    value: function _onRemoveButtonClick() {\n      var event;\n\n      if (typeof CustomEvent === 'function') {\n        event = new CustomEvent('text-pill-remove', {\n          bubbles: true,\n          composed: true,\n          detail: this\n        });\n      } else {\n        event = document.createEvent('CustomEvent');\n        event.initCustomEvent('text-pill-remove', true, true, this);\n      }\n\n      this.hostElement.dispatchEvent(event);\n    }\n  }, {\n    key: \"text\",\n    get: function get() {\n      return this.textElement.innerHTML;\n    },\n    set: function set(value) {\n      this._onTextAttributeChange(value);\n    }\n  }, {\n    key: \"pattern\",\n    get: function get() {\n      return this.regex;\n    },\n    set: function set(value) {\n      if (typeof value === 'string' && value) {\n        this.regex = new RegExp(value);\n      } else if (value instanceof RegExp) {\n        this.regex = value;\n      } else {\n        this.regex = null;\n      }\n\n      this._validate();\n    }\n  }, {\n    key: \"valid\",\n    get: function get() {\n      return this._validate();\n    }\n  }]);\n\n  return TextPill;\n}();\n\n//# sourceURL=webpack:///./src/components/text-pill/text-pill.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_input_emails_input_emails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/input-emails/input-emails */ \"./src/components/input-emails/input-emails.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar inputEmailsHostElement = document.getElementById('input-emails-test'); // create input emails component\n\nvar inputEmails = new _components_input_emails_input_emails__WEBPACK_IMPORTED_MODULE_0__[\"InputEmails\"](inputEmailsHostElement); // save elements references\n\nvar addEmailsBtn = document.querySelector('#add-emails-btn');\nvar getEmailsBtn = document.querySelector('#get-emails-btn');\nvar replaceEmailsBtn = document.querySelector('#replace-emails-btn'); // add event listeners\n\naddEmailsBtn.addEventListener('click', addRandom);\ngetEmailsBtn.addEventListener('click', alertEmails);\nreplaceEmailsBtn.addEventListener('click', replaceEmails);\ninputEmailsHostElement.addEventListener('replace', function (event) {\n  return console.log(event.detail);\n});\ninputEmailsHostElement.addEventListener('add', function (event) {\n  return console.log(event.detail);\n});\ninputEmailsHostElement.addEventListener('remove', function (event) {\n  return console.log(event.detail);\n});\n/**\n * Repalces all the emails in the emails-input component with the ones from the input field\n */\n\nfunction replaceEmails() {\n  var emails = document.querySelector('#replace').value.split(',').map(function (email) {\n    return email.trim();\n  });\n  inputEmails.replaceAll.apply(inputEmails, _toConsumableArray(emails));\n}\n/**\n * Adds a random email to the emails-input component\n */\n\n\nfunction addRandom() {\n  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';\n  var randomEmail = '';\n\n  for (var ii = 0; ii < 10; ii++) {\n    randomEmail += chars[Math.floor(Math.random() * chars.length)];\n  }\n\n  randomEmail += '@test.nl';\n  inputEmails.addEmail(randomEmail);\n}\n/**\n * show valid emails count in an alert message\n */\n\n\nfunction alertEmails() {\n  alert(\"The number of valid emails is: \".concat(inputEmails.getEmails()));\n}\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const UserView = __webpack_require__(/*! ./views/user_login_view.js */ \"./client/src/views/user_login_view.js\");\nconst ChatView = __webpack_require__(/*! ./views/chat_view.js */ \"./client/src/views/chat_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () =>{\n\n  const userView = new UserView();\n  const chatView = new ChatView();\n\n})\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function(channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function(channel, callback) {\n    document.addEventListener(channel, callback)\n  }\n}\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/views/chat_view.js":
/*!***************************************!*\
  !*** ./client/src/views/chat_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MessagesView = __webpack_require__(/*! ./messages_view.js */ \"./client/src/views/messages_view.js\");\nconst MessageForm = __webpack_require__(/*! ./messages_form.js */ \"./client/src/views/messages_form.js\");\nconst UserPanelView = __webpack_require__(/*! ./username_view.js */ \"./client/src/views/username_view.js\");\n\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst ChatView = function() {\n  this.element = document.querySelector('.chatDisplay');\n  this.bindEvents();\n  this.user;\n}\n\nChatView.prototype.bindEvents = function () {\n  PubSub.subscribe('user-login-view', (event) => {\n    this.user = event.detail;\n    this.element.classList.remove('hide');\n    this.openSocket();\n    this.renderViews();\n  })\n};\n\nChatView.prototype.openSocket = function () {\n  socket.emit('user-login', this.user)\n};\n\nChatView.prototype.renderViews = function () {\n  const messagesDiv = document.querySelector('#messages');\n  const messagesView = new MessagesView(messagesDiv);\n  messagesView.bindEvents();\n\n  const messageFormDiv = document.querySelector('.messageForm');\n  const messageForm = new MessageForm(messageFormDiv);\n  messageForm.bindEvents();\n\n  const userPanelDiv = document.querySelector('#userPanel');\n  const userPanel = new UserPanelView(userPanelDiv);\n  userPanel.bindEvents();\n\n};\n\nmodule.exports = ChatView;\n\n\n//# sourceURL=webpack:///./client/src/views/chat_view.js?");

/***/ }),

/***/ "./client/src/views/messages_form.js":
/*!*******************************************!*\
  !*** ./client/src/views/messages_form.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MessageForm = function (formDiv) {\n  this.formDiv = formDiv;\n  this.form = document.querySelector('#msgForm');\n\n}\n\nMessageForm.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', this.sendChatMessages)\n};\n\nMessageForm.prototype.sendChatMessages = function (event) {\n\n  const chatForm = document.querySelector(\"#message\");\n  event.preventDefault();\n  socket.emit('user chatting', this.message.value);\n  this.message.value = \"\";\n};\n\nmodule.exports = MessageForm;\n\n\n//# sourceURL=webpack:///./client/src/views/messages_form.js?");

/***/ }),

/***/ "./client/src/views/messages_view.js":
/*!*******************************************!*\
  !*** ./client/src/views/messages_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MessagesView = function (messagesDiv) {\n  this.messagesDiv = messagesDiv;\n}\n\nMessagesView.prototype.bindEvents = function () {\n  socket.on('chat message', (data) => {\n    this.displayMessage(data)\n  })\n};\n\nMessagesView.prototype.displayMessage = function (data) {\n  const messageContent = `${data.user}: ${data.message}`\n  const messageElement = this.createElement(\"p\", messageContent);\n  this.messagesDiv.appendChild(messageElement);\n};\n\nMessagesView.prototype.createElement = function (elementName, text) {\n  const newElement = document.createElement(elementName);\n  newElement.textContent = text;\n  return newElement;\n};\n\nmodule.exports = MessagesView;\n\n\n//# sourceURL=webpack:///./client/src/views/messages_view.js?");

/***/ }),

/***/ "./client/src/views/user_login_view.js":
/*!*********************************************!*\
  !*** ./client/src/views/user_login_view.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst UserView = function() {\n  this.element = document.querySelector('.userLogin');\n  this.addEventListener()\n}\n\nUserView.prototype.addEventListener = function () {\n  const form = document.querySelector('.userLogin > form');\n  const userElement = this.element;\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const username = event.target.username.value;\n    this.publishUsername(username)\n    this.hideMenu();\n  })\n};\n\nUserView.prototype.publishUsername = function (username) {\n  PubSub.publish('user-login-view', username);\n};\n\nUserView.prototype.hideMenu = function () {\n  this.element.classList.add('hide')\n};\n\n\nmodule.exports = UserView;\n\n\n//# sourceURL=webpack:///./client/src/views/user_login_view.js?");

/***/ }),

/***/ "./client/src/views/username_view.js":
/*!*******************************************!*\
  !*** ./client/src/views/username_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const UserPanel = function(userPanel) {\n  this.userPanel = userPanel;\n}\n\nUserPanel.prototype.bindEvents = function () {\n  socket.on('all-users', (users) => {\n    this.renderUsers(users)\n  } );\n};\n\nUserPanel.prototype.renderUsers = function (users) {\n  this.userPanel.innerHTML = \"\";\n  if (users.length > 0) {\n    for (let user of users) {\n      const p = this.createElement(\"p\", user);\n      this.userPanel.appendChild(p);\n    }\n  }\n};\n\nUserPanel.prototype.createElement = function (name, text) {\n  const newElement = document.createElement(name);\n  newElement.textContent = text;\n  return newElement;\n};\n\nmodule.exports = UserPanel;\n\n\n//# sourceURL=webpack:///./client/src/views/username_view.js?");

/***/ })

/******/ });
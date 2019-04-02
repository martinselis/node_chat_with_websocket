const PubSub = require('../helpers/pub_sub.js')

const ChatView = function() {
  this.element = document.querySelector('.chatDisplay');
  this.bindEvents();
  this.user;
}

ChatView.prototype.bindEvents = function () {
  PubSub.subscribe('user-login-view', (event) => {
    this.user = event.detail;
    this.element.classList.remove('hide');
    this.openSocket();
  })
};

ChatView.prototype.openSocket = function () {
  socket.emit('user-login', this.user)
};

module.exports = ChatView;

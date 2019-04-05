const MessagesView = require('./messages_view.js');
const MessageForm = require('./messages_form.js');
const UserPanelView = require('./username_view.js');

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
    this.renderViews();
  })
};

ChatView.prototype.openSocket = function () {
  socket.emit('user-login', this.user)
};

ChatView.prototype.renderViews = function () {
  const messagesDiv = document.querySelector('#messages');
  const messagesView = new MessagesView(messagesDiv);
  messagesView.bindEvents();

  const messageFormDiv = document.querySelector('.messageForm');
  const messageForm = new MessageForm(messageFormDiv);
  messageForm.bindEvents();

  const userPanelDiv = document.querySelector('#userPanel');
  const userPanel = new UserPanelView(userPanelDiv);
  userPanel.bindEvents();

};

module.exports = ChatView;

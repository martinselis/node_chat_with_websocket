const MessagesView = function (messagesDiv) {
  this.messagesDiv = messagesDiv;
}

MessagesView.prototype.bindEvents = function () {
  socket.on('chat message', (data) => {
    this.displayMessage(data)
  })
};

MessagesView.prototype.displayMessage = function (data) {
  const messageContent = `${data.user}: ${data.message}`
  const messageElement = this.createElement("p", messageContent);
  this.messagesDiv.appendChild(messageElement);
};

MessagesView.prototype.createElement = function (elementName, text) {
  const newElement = document.createElement(elementName);
  newElement.textContent = text;
  return newElement;
};

module.exports = MessagesView;

const MessageForm = function (formDiv) {
  this.formDiv = formDiv;
  this.form = document.querySelector('#msgForm');

}

MessageForm.prototype.bindEvents = function () {
  this.form.addEventListener('submit', this.sendChatMessages)
};

MessageForm.prototype.sendChatMessages = function (event) {

  const chatForm = document.querySelector("#message");
  event.preventDefault();
  socket.emit('user chatting', this.message.value);
  this.message.value = "";
};

module.exports = MessageForm;

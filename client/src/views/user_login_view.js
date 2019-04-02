const PubSub = require('../helpers/pub_sub.js')

const UserView = function() {
  this.element = document.querySelector('.userLogin');
  this.addEventListener()
}

UserView.prototype.addEventListener = function () {
  const form = document.querySelector('.userLogin > form');
  const userElement = this.element;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    this.publishUsername(event.target.username.value)
    this.hideMenu();
  })
};

UserView.prototype.publishUsername = function (username) {
  PubSub.publish('user-login-view', username);
};

UserView.prototype.hideMenu = function () {
  this.element.classList.add('hide')
};


module.exports = UserView;

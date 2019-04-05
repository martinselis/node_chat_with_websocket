const UserPanel = function(userPanel) {
  this.userPanel = userPanel;
}

UserPanel.prototype.bindEvents = function () {
  socket.on('all-users', (users) => {
    this.renderUsers(users)
  } );
};

UserPanel.prototype.renderUsers = function (users) {
  this.userPanel.innerHTML = "";
  if (users.length > 0) {
    for (let user of users) {
      const p = this.createElement("p", user);
      this.userPanel.appendChild(p);
    }
  }
};

UserPanel.prototype.createElement = function (name, text) {
  const newElement = document.createElement(name);
  newElement.textContent = text;
  return newElement;
};

module.exports = UserPanel;

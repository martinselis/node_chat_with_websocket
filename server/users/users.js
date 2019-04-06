const Users = function() {
  this.users = [];
}

Users.prototype.add = function (user) {
  this.users.push(user)
};

Users.prototype.remove = function (user) {
  this.users.splice(this.users.indexOf(user), 1);
};

Users.prototype.all = function() {
  return this.users;
}


module.exports = Users;

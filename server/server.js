const express = require("express");
const app = express();
const path = require("path");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Users = require('./helpers/users.js');
const User = require('./helpers/user.js');

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  console.log('handled it')
})

let users = new Users();

io.on('connection', function(socket) {
  let user = new User(socket)
  console.log('user has connected')

  user.socket.on('user-login', function(name) {
    user.name = name;
    users.add(user.name);

    console.log(users.all());
    io.emit('all-users', users.all());
  })

  user.socket.on('user chatting', function(msg){
    io.emit('chat message',
    { "user": user.name,
      "message": msg })})

  user.socket.on('disconnect', () => {
    console.log(`user ${user.name} disconnected`);
    users.remove(user.name)
    io.emit('all-users', users.all());
  })
});

http.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});

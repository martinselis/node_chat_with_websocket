const express = require("express");
const app = express();
const path = require("path");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Users = require('./users/users.js');
const User = require('./users/user.js');

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  console.log('handled it')
})
const port = process.env.PORT;

console.log(port)

let users = new Users();

io.on('connection', function(socket) {
  let user = new User(socket)

  user.socket.on('user-login', function(name) {
    user.name = name;
    users.add(user.name);

    io.emit('all-users', users.all());
    io.emit('chat message',
    { "user": "System",
      "message": `${user.name} has joined` })
  })

  user.socket.on('user chatting', function(msg){
    io.emit('chat message',
    { "user": user.name,
      "message": msg })})

  user.socket.on('disconnect', () => {
    users.remove(user.name)
    io.emit('all-users', users.all());
    io.emit('chat message',
    { "user": "System",
      "message": `${user.name} has disconnected` })
  })
});

http.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});

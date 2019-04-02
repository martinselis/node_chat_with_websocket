const express = require("express");
const app = express();
const path = require("path");
const http = require('http').Server(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  console.log('handled it')
})

io.on('connection', function(socket){
  console.log(socket)
  console.log('a user connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('user-login', function(msg) {
    console.log(`user ${msg} has logged in`);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
});

http.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});

const dgram = require("dgram");

const socket = dgram.createSocket("udp4");
socket.bind(function () {
  socket.setBroadcast(true);
});


setInterval(function(){
  const message = Buffer.from("0:1:2:3:4", 'utf8');
  socket.send(message, 0, message.length, 5000, '255.255.255.255', function (err, bytes) {
    
  });
},1000)
//socket.close();

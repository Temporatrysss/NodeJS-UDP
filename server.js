const dgram = require("dgram");
const PORT=5000;
const HOST = '0.0.0.0'; // 所有本機 IPv4 位址

// const server = dgram.createSocket("udp4",function(msg){
//   console.log(msg.toString());
// });

// 監聽與接收封包訊息
var server = dgram.createSocket('udp4');
server.on('message', function (message, info) {
  console.log('server got message from: ' + info.address + ':' + info.port + " context is: " + message);
});

// UDP監聽
server.on('listening', function () {
  var address = server.address();
  console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.bind(PORT,HOST);

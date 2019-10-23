var fs = require('fs');
const dgram = require("dgram");

const socket = dgram.createSocket("udp4");
socket.bind(function () {
  socket.setBroadcast(true);
});


let labelData;
fs.readFile('./test1.csv', function (err, data) {
  if (err) throw err;
  labelData = data.toString().split("\n");
  console.log(labelData.length);
});

let count=0;
setInterval(function () {
  const indicatiorData = labelData[count++].split(",");
  console.log(`${indicatiorData[0]}:${indicatiorData[1]}:${indicatiorData[2]}:${indicatiorData[3]}:${indicatiorData[4]}`);
  const message = Buffer.from(`${indicatiorData[0]}:${indicatiorData[1]}:${indicatiorData[2]}:${indicatiorData[3]}:${indicatiorData[4]}`, 'utf8');
  socket.send(message, 0, message.length, 5000, '255.255.255.255', function (err, bytes) {

  });
}, 1000)

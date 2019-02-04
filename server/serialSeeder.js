//setting up the express server
// var app = require('express')();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

//listening to port 8080
server.listen(8080);

// //serving the static html file
// app.get('/', function (req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, '../public') });
// });

// app.use(express.static(path.join(__dirname, '/../public')));


// serial port initialization:
var SerialPort = require('serialport'); // include the serialport library
var portName = process.argv[2]; // get the port name from the command line
var myPort = new SerialPort(portName, {baudRate: 9600});// open the port

// these are the definitions for the serial events:
myPort.on('open', openPort); // called when the serial port opens

//call function to open port prior to opening the websocket conneciton
function openPort() {
  io.sockets.on('connection', function (socket) {// WebSocket Connection
       var seedValue = 0; //static variable for current status
       console.log('User connected..');
       socket.on('command', function(data) { //get command status from client
       myPort.write(data.toString());
       console.log('Command sent to the serial port' +  ' ' + data);
     });
   });
}

# Using React-Native to interact with an Arduino
Control an Arduino using an iPhone (or Android..)

## Prerequisites:
* Expo
* Node.js
* React-Native
* Arduino IDE

## Hardware:
1. Arduino (Any model)
2. USB cable

## How to use:
1. Install React-Native, socket.io, and node-serialport
`$ npm install`

2. Start the expo-cli
`$ expo start`

3. In a separate terminal, start the node server
`$ node server/serialSeeder.js`

4. ???

5. Profit

Make sure the Arduino is plugged into the machine running the server. Also be sure to upload the .ino file to the Arduino. 

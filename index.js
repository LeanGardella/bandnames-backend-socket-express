const path = require('path');
require('dotenv').config();

const express = require('express');
const app = express();

// Node Server - Sockets
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);


const public = path.resolve(__dirname, 'public');

app.use(express.static(public));

server.listen(process.env.PORT, (e) => {
    if (e) throw new Error(e);
    console.log('Servidor corriendo en puerto ', process.env.PORT);
});
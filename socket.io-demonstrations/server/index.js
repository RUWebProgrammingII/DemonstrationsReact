/*
    Server code for creating a chat server
**/

const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const moment = require('moment');

// Default constants
const PORT = 3500;

let users = [];

io.on('connection', connectingSocket => {
    console.log(`User connected (${connectingSocket.id})`);

    users.push(connectingSocket.id);
    io.sockets.emit('users', users);

    // Define messages to emit
    connectingSocket.on('message', msg => {
        console.log(msg);
        // Emit the message to everyone
        io.emit('message', `${moment().format('llll')} - User ${users.indexOf(connectingSocket.id) + 1} - ${msg}`);
    });

    connectingSocket.on('disconnect', () => {
        console.log(`User disconnected (${connectingSocket.id})`);
        users = users.filter(u => u !== connectingSocket.id);
        io.emit('users', users);
    });
});

http.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

var io = require('socket.io')();

var tin = io.of('/tin');
tin.on('connection', function (socket) {
    // Chat string-can events
    socket.on('register', function () {
        console.log('Tin registering socket');
    });
    socket.on('message', function (msg) {
        console.log('Tin message received');
        socket.emit('message', msg);
    });
});

// Default channel
io.on('connection', function (socket) {
    // io.sockets, io "/"
    // var nsp = io.of("/my-namespace"), "/my-namespace"
    // var socket = io("/my-namespace");
    // Rooms
    // socket.join('some room');
    // io.to('some room').emit('some event');
    // socket.emit (for sender)
    // socket.broadcast.emit (for everyone but sender)
    // All sockets have default, random rooms
    console.log('connected');
    socket.on('error', function (err) {
        console.log('error');
    });
    socket.on('disconnect', function () {
        console.log('disconnected');
    });
    socket.on('reconnect', function (attempt) {
        console.log('reconnect');
    });
    socket.on('reconnect_attempt', function () {
        console.log('reconnect_attempt');
    });
    socket.on('reconnecting', function (attempt) {
        console.log('reconnecting');
    });
    socket.on('reconnect_error', function (err) {
        console.log('reconnect_error');
    });
    socket.on('reconnect_failed', function () {
        console.log('reconnect_failed');
    });
});

module.exports = io;
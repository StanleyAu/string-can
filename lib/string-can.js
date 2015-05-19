var debug = require('debug')('string-can:sockets');
var io = require('socket.io')();
var redis = require('./db').connect();

var tin = io.of('/tin');
tin.on('connection', function (socket) {
    // Chat string-can events
    socket.on('register', function () {
        debug('Event register');
    });
    socket.on('message', function (msg) {
        debug('Event message: ' + msg);
        socket.emit('message', msg);
        socket.broadcast.emit('message', msg);
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
    debug('Event connection');
    socket.on('error', function (err) {
        debug('Event error');
    });
    socket.on('disconnect', function () {
        debug('Event disconnect');
    });
    socket.on('reconnect', function (attempt) {
        debug('Event reconnect');
    });
    socket.on('reconnect_attempt', function () {
        debug('Event reconnect_attempt');
    });
    socket.on('reconnecting', function (attempt) {
        debug('Event reconnecting');
    });
    socket.on('reconnect_error', function (err) {
        debug('Event reconnect_error');
    });
    socket.on('reconnect_failed', function () {
        debug('Event reconnect_failed');
    });
});

module.exports = io;
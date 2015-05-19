var redis = require('redis-url');
var db;

module.exports.connect = function () {
    if (!db) {
        db = redis.connect();
    }
    return db;
}
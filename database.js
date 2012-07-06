var mongoose = require('mongoose');
var settings = require('./settings.json');

var conn = mongoose.createConnection(settings.database);

exports.getConnection = function () {
    return conn;
};
var mongoose = require('mongoose');
var conn = require('../database').getConnection;
var Schema = mongoose.Schema;
var types = Schema.types;

var UserSchema = new Schema({
    id          : types.ObjectId
    ,username   : types.String
    ,password   : types.String
    ,email      : types.String
});
var UserModel = conn.model("User", UserSchema);

UserModel.prototype.checkPassword = function (password) {
    if (!password) return false;
    
    var crypto = require('crypto');
    var md5 = crypto.createHash('md5');
    md5.update(password);
    return this.password === md5.digest('hex');
};

module.exports = UserModel;
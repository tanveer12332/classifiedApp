/// <reference path="../../typings/tsd.d.ts" />
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("users", userSchema);

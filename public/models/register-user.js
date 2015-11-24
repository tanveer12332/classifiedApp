/// <reference path="../../typings/tsd.d.ts" />
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userName: {
        type: String
    },
    userEmail: {
        type: String
    },
    userPassword: {
        type: String
    }
});
module.exports = mongoose.model('users', userSchema);
/*let userSchema : mongoose.Schema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    userPassword : {
        type : String,
        required : true
    }
});

export interface IUser extends mongoose.Document {
    userName  : string,
    userEmail : string,
    userPassword : string
}
*/
//export let User : mongoose.Model <RUser> = mongoose.model <RUser> ('User', userSchema); 

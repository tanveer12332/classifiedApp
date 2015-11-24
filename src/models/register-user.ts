/// <reference path="../../typings/tsd.d.ts" />

import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

let userSchema = new Schema({

	userName : {
		type : String
		//required : true
	},
	userEmail : {
		type : String
		//required : true
	},
	userPassword : {
		type : String
		//required : true
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
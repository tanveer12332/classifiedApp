/// <reference path="../../typings/tsd.d.ts" />

import * as mongoose from "mongoose";
let Schema = mongoose.Schema;

let userSchema = new Schema({

	_id : {
		type : String,
		required : true
	},
	userName : {
		type : String,
		required : true
	},

	userPassword : {
		type : String,
		required : true
	}

});

module.exports = mongoose.model("users", userSchema);

/// <reference path="../../typings/tsd.d.ts" />

import * as express from "express";
var User = require('../models/register-user');
let router : express.Router = express.Router();
var session  = require('express-session');
var cookieParser  = require('cookie-parser');
router.use(cookieParser());
router.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true
 // cookie: { secure: true }
}));




router.get('/login', function(req,res){
	res.render('login');
});

router.post('/loginUser', function(req, res){
	let userloing = req.body.userName;
	let dbuser = User.userName;
	console.log(dbuser);
	console.log(userloing);
	  User.findOne({ dbuser: userloing }, (err : Error,  User) => {
            if (err) {
            res.send(err);
		}
         else if (dbuser === userloing) {
			res.send('your r login');
		}
	  });
});
export = router;
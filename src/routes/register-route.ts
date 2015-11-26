/// <reference path="../../typings/tsd.d.ts" />

import * as express from "express";
var User = require('../models/register-user');


let router : express.Router = express.Router();

router.get('/register', function(req,res){
	res.render('register');
});
router.post('/setcontacts',function(req, res){
   let newuser = req.body.userName;
      new User({
       _id : req.body.userEmail,
       userName :  req.body.userName,
       userPassword : req.body.userPassword
        }).save( function(error, data){
        if(error){
            res.json(error);
        }
         else{
        setTimeout(function(){
        res.redirect('/login');         
        },200);
                
         
          }
});
   /* 
   new User({
       _id : req.body.userEmail,
       userName :  req.body.userName,
       userPassword : req.body.userPassword
        });
       User.findOne({ userName: newuser }, (err : Error,  User) => {
            if (err) {
            res.send(err);
		}
         else if (User.userName === newuser) {
			res.send('User Already Exits!');		
		} else{
            	User.create(newuser, (err : Error) => {
				if (err) {
					res.send(err);
				} else {
					res.send('User Created Successfully!')
				}
			});
        }
       });*/
});      

export = router;
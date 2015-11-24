/// <reference path="../../typings/tsd.d.ts" />

import * as express from "express";
var User = require('../models/register-user');


let router : express.Router = express.Router();

router.get('/register', function(req,res){
	res.render('register');
});
router.post('/setcontacts',function(req, res){
	var person_data = {
    user_name: req.body.userName,
  	user_email: req.body.userEmail,
    user_password: req.body.userPassword
};
	var Reguser= new User(person_data);
	
Reguser.save( function(error, data){
    if(error){
     res.json(error);
    }
    else{
        res.json(data);
    }
    console.log(data);
     console.log(person_data);
});
});

export = router;
/// <reference path="../../typings/tsd.d.ts" />

import * as express from "express";

let router : express.Router = express.Router();

router.get('/login', function(req,res){
	res.render('login');
});


export = router;
/// <reference path="../../typings/tsd.d.ts" />

import * as express  from "express";

let router : express.Router = express.Router();
router.get('/', function(req,res){
	res.render('index');
});


export = router;
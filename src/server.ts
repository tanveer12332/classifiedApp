/// <reference path='./../typings/tsd.d.ts' />
import express = require('express');
var loggar = require('morgan');
import bodyParser = require('body-parser');
var session  = require('express-session');
import path = require('path');
var fs = require('fs');
//local path
var mongoose = require('mongoose');

var viewRenderEngine = require('ejs');

var app:express.Express = express();
//app.use(express.static(__dirname + "/public"));
app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(loggar('Server started'));
app.set('views','./src/views');
app.set('view engine','ejs');
mongoose.connect("mongodb://localhost/todoApp", function(err) {
    if(err) {
        console.log("connection error", err);
    } else { 
        console.log("connection successful");
    }
});
//load all file in model dir
/*fs.readdirSync(__dirname + '/models').forEach(function(){
	if(~__filename.indexOf('ts')) require(__dirname + '/models' + __filename);
});*/

app.use(session({
  secret: 'keyboardcat',
  resave: true,
  saveUninitialized: true
 // cookie: { secure: true }
}));


//check route error
app.use(function (err:any, req, res, next){
	console.log(err + ":" + "Error");
	res.send(err);
});
let indexRoute : express.Router  = require("./routes/index-route");
let loginRoute : express.Router  = require("./routes/login-route");
let registerRoute : express.Router  = require("./routes/register-route");
app.use('/',indexRoute);
app.use('/',loginRoute);
app.use('/',registerRoute);














///server setting 
var port: number= process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The Server is listening on port: ' + listeningPort)
});
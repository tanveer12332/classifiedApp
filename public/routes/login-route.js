/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var User = require('../models/register-user');
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');
router.use(cookieParser());
router.use(session({
    secret: 'keyboardcat',
    resave: true,
    saveUninitialized: true
}));
router.get('/login', function (req, res) {
    res.render('login');
});
router.post('/loginUser', function (req, res) {
    var userloing = req.body.userName;
    var dbuser = User.userName;
    console.log(dbuser);
    console.log(userloing);
    User.findOne({ dbuser: userloing }, function (err, User) {
        if (err) {
            res.send(err);
        }
        else if (dbuser === userloing) {
            res.send('your r login');
        }
    });
});
module.exports = router;

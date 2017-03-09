var express = require('./config/express');

var mongodb = require('./config/mongoose');

var db = mongodb();
var app = express();


module.exports = app;

var fs = require('fs');
fs.stat('./package.json',(err,data)=>{
    console.log(err);
    console.log(data);
})
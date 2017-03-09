var express = require('express');

var app = express();

app.get('/',function(req,res){
  res.end('hello \n');
})

app.listen(18001,function afterListen(){
  console.log('express running on http://localhost:18001');
})
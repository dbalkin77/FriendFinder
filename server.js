var express = require('express');
var bodyParser = reqiure('body-parser');
var app = express();
var path = reqiure('path');

app.listen(8000);

app.get('/', function (req, res){
    res.send('hello world');
});
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);

console.log('Connected to localhost:8080');

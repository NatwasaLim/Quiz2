var express = require('express');
var app = express();
var bodyParser = require('body-parser');//include_module
var users = require('./users.js');//usefile

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static('www'))
app.get('/users',users.findAll);

app.listen(3000);
console.log('Server is running at http://localhost:3000');
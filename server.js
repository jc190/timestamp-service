var http = require('http');

var express = require('express');
var app = express();

var server = http.createServer(app);

app.get('/', function(req, res) {
    res.end('Hello');
});

server.listen(8080, process.env.IP, function() {
    var addr = server.address();
    console.log(addr);
    console.log('App listening at ' + addr.address + ':' + addr.port+ '.');
});
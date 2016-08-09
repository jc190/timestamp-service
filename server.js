var http = require('http');
var path = require('path');

var express = require('express');
var app = express();

var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/:date', function(req, res) {
    var date;
    var jsonDate = {};
    
    if (isNaN(+req.params.date) === false) {
        date = new Date(+req.params.date);
        jsonDate.unix = req.params.date;
    } else {
        date = new Date(req.params.date);
        jsonDate.unix = Date.parse(date);
    }
    
    if (date.toDateString() === "Invalid Date") {
        jsonDate.natural = null;
    } else {
        jsonDate.natural = date.toDateString();
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonDate));
});

server.listen(8080, process.env.IP, function() {
    var addr = server.address();
    console.log('App listening at ' + addr.address + ':' + addr.port+ '.');
});
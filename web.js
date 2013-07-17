var greeting;
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(greeting);
});

fs.readFile('./bitstarter/index.html', function read (err, data) {
    if (err) {throw err;}
    greeting=data.toString('utf8',0,data.length);
 });				 


var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});

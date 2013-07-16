var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  else esponse.send(data.toString('utf8',0,data.length));
 }				 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

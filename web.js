var express = require('express');
var fs = require('fs');
var buffer = new Buffer(30);
var helloFromIndex = fs.readFileSync('./index.html','utf8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 3');
//    buffer.write(helloFromIndex);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

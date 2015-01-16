var http = require('http');
var fs = require('fs');
var port = '8080';

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    fs.readFile('index.html', function(err, data){
      if (err) { 
        console.log(err);
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else if (request.url === '/page2.html') {
    fs.readFile('page2.html', function(err, data){
      if (err) {
        console.log(err);
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  }
}).listen(port);
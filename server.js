// Lave en webserver
var http = require('http');

var server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.write('{"title" : "Hello JSON web API", "text" : "Text fra min API"}');
    res.end();
});




server.listen(process.env.PORT || 3003);
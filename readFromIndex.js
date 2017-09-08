var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-type' : 'text/json'});

    fs.readFile('index.html', 'utf-8', function (err, data) {
        res.write(data);
        res.end();
    });
});


server.listen(process.env.PORT || 3003);
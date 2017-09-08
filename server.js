var http = require('http');
var textObject = require('./textObject.js');
require('colors');
var _ = require('lodash');


var server = http.createServer(function(req, res){

    var url = JSON.stringify(req.headers.host);
    console.log(url.rainbow);

    if(_.includes(url, 'localhost'))
        textObject.url = '"Url" : Localhost';
    else
        textObject.url = '"Url" : Heroku';

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-type' : 'text/json'});
    res.write(`{${textObject.title}, ${textObject.text}, ${textObject.url}}`);
    res.end();
});



server.listen(process.env.PORT || 3003);
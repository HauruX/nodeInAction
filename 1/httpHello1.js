// 1.5.2
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('hello world');
}).listen(3000);
console.log('server start on 3000 port');
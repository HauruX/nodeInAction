// 1.5.3
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    fs.createReadStream('googlelogo.png').pipe(res);
}).listen(3000);
console.log('server start on 3000 port');
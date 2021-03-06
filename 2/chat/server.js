var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

var send404 = function(response) {
    response.writeHead(404, {
        'Content-Type': 'text/plan'
    });
    response.write('error 404');
    response.end();
};


var sendFile = function(response, filePath, fileContent) {
    response.writeHead(200, {
        'Content-Type': mime.lookup(path.basename(filePath))
    });
    response.end(fileContent);
};

var serveStatic = function(response, cache, absPath) {
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath]);
    } else {
        fs.exists(absPath, function(exits) {
            if (exits) {
                fs.readFile(absPath, function(error, data) {
                    if (error) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data);
                    }
                })
            } else {
                send404(response);
            }
        })
    }
};

var server = http.createServer(function (request, response) {
    var filePath = false;

    if (request.url == '/') {
        filePath = 'public/index.html';
    } else {
        filePath = 'public' + request.url;
    }

    var absPath = './' + filePath;
    serveStatic(response, cache, absPath);
});

server.listen(3000, function () {
    console.log('listen on 3000');
});

var chatServer = require('./lib/chat_server');
chatServer.listen(server);
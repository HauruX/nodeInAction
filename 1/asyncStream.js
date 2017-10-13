// 1.5.3
var fs = require('fs');
var stream = fs.createReadStream('resource.json');
stream.on('data', function (chunk) {
    console.log(chunk);
});
stream.on('end', function () {
    console.log('end');
});
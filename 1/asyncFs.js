// 1.5.1
var fs = require('fs');
fs.readFile('resource.json', function(err, data) {
    console.log(data);
});
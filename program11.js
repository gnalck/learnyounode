var fs = require('fs')
var http = require('http');
var server = http.createServer(function (request, response) {
    var fstream = fs.createReadStream(process.argv[3]);
    fstream.pipe(response);
});
server.listen(process.argv[2]);
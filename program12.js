var tmap = require('through2-map');
var http = require('http');
var server = http.createServer(function (request, response) {
    request.pipe(tmap(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server.listen(process.argv[2]);
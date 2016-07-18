var url = require('url');
var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type" : "application/json"});
    var parse = url.parse(request.url, true);
    var time = parse.query.iso;
    var date = new Date(time);

    if (parse.pathname == "/api/parsetime") {
        var json = JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });
        response.write(json);
    } else if (parse.pathname == "/api/unixtime") {
        response.write(JSON.stringify({ unixtime: date.getTime()}))
    }
    response.end();
});
server.listen(process.argv[2]);
var http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');

    var acc = "";
    response.on("data", function(data) {
        acc += data;
    });

    response.on("end", function() {
        console.log(acc.length);
        console.log(acc);
    });
});
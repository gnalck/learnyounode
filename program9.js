var http = require('http');

var res = {};
var num = 3;
var callback = function(i, data) {
    res[i] = data;
    if (--num == 0) {
        for (var i = 0; i < 3; i++) {
            console.log(res[i]);
        }
    }
}

var getresp = function(callback, i) {
    http.get(process.argv[2+i], function(response) {
        response.setEncoding('utf8');

        var acc = "";
        response.on("data", function(data) {
            acc += data;
        });

        response.on("end", function() {
            callback(i, acc);
        });
    });
}

for (var i = 0; i < 3; i++) {
    getresp(callback, i);
}

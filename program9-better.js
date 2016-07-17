var Promise = require('es6-promise').Promise;
var http = require('http');

var getresp = function(i) {
    return new Promise(function(resolve, reject) {
        http.get(process.argv[2+i], function(response) {
            response.setEncoding('utf8');

            var acc = "";
            response.on("data", function(data) {
                acc += data;
            });

            response.on("end", function() {
                resolve(acc);
            });
        });
    });
};

var res = [];
for (var i = 0; i < 3; i++) {
    res.push(getresp(i));
}
Promise.all(res).then(function(values) {
    console.log(values.join("\n"));
});
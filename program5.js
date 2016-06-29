var fs = require('fs');

var dir = process.argv[2];
var filter = function(value) {
    if (!process.argv[3])
        return true;
    var arr = value.split('.');
    return arr.length > 1 && arr.pop() == process.argv[3];
};

fs.readdir(dir, function(err, list) {
    console.log(list.filter(filter).join("\n"));
});
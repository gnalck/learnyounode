// module.exports = readdir;
var fs = require('fs');

var filter = function(ext) {
    return function (value) {
        if (!ext)
            return true;
        var arr = value.split('.');
        return arr.length > 1 && arr.pop() == ext;
    }
}

module.exports = 
    function (dir, ext, callback) {
        fs.readdir(dir, function(err, list) {
            if (err)
                return callback(err);
            var extlist = list.filter(filter(ext));
            return callback(null, extlist);
        });
    }

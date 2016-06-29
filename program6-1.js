var mod = require('./program6-2.js');

mod(process.argv[2], process.argv[3], function(err, list) {
    if (err)
        console.log("uh oh");
    else
        console.log(list.join("\n"));
});
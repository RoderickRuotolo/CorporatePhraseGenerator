var fs = require("fs");

/**
 * Lẽ arquivo contendo JSON e faz parse para JS Object
 */
module.exports = function (filename, callback) {
	var result = fs.readFileSync(filename);
	var buffer = new Buffer(result);	
	out = JSON.parse(buffer);
	callback(out);
}

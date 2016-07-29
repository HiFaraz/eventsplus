'use strict'
exports = module.exports = function() {
	this.on('myEvent', (message, callback) => {
		callback(null, message + ' world');
	});
};

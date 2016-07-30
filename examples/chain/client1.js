'use strict'
exports = module.exports = function() {
	// this is the first listener
	this.on('myEvent', (message, callback) => {
		callback(null, message + ' birthday');
	});

	// this is the second listener. It precedes the first listener, which is provided as the `previous` argument
	this.on('myEvent', (message, callback, previous) => {
		previous(message + ' 30th', callback);
	});

	// this is the third listener. It precedes the second listener, which is provided as the `previous` argument
	this.on('myEvent', (message, callback, previous) => {
		previous(message + ' belated', callback);
	});
};

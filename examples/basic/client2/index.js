'use strict'
exports = module.exports = function(options) {
	this.emit('myEvent', options.message, (error, message) => {
		if (error) console.error(error);
		else console.log(message);
	});

	// this emitter is an orphan - it is calling out to a non-existent listener. It will return an error through the `error` argument
	this.emit('myOrphanEvent', options.message, (error, results) => {
		if (error) console.error(error);
		else console.log(results);
	});
};

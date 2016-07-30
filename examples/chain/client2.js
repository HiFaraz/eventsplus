'use strict'
exports = module.exports = function(options) {
	this.emit('myEvent', options.message, (error, message) => {
		if (error) console.error(error);
		else console.log(message);
	});
};

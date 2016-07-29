'use strict'
const eventsplus = require('../../source/');
eventsplus
	.use('client1')
	.use('client2', {
		message: 'hello'
	});

'use strict'
const eventsplus = require('../../');
eventsplus
	.use('client1')
	.use('client2', {
		message: 'happy'
	});

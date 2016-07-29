'use strict'
const EventEmitter = require('events');
const path = require('path');
const parentPath = path.dirname(module.parent.filename);

class EventsPlus extends EventEmitter {
	emit(name) {
		const args = [...arguments];
		if (super.listenerCount(name) > 0) return super.emit.apply(this, args);
		else {
			const lastArgument = args.reverse()[0];
			if (typeof lastArgument == 'function') return lastArgument('no listener for ' + name);
			else return false;
		}
	}
	use(client) {
		const newArguments = [...arguments];
		newArguments.shift();
		const attach = fun => fun.apply(this, newArguments);
		if (typeof client === 'string' || client instanceof String) attach(require(path.join(parentPath, client)));
		else attach(client);
		return this;
	}
}

exports = module.exports = new EventsPlus();

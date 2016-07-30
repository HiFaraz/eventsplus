'use strict'
const EventEmitter = require('events');
const path = require('path');
const parentPath = path.dirname(module.parent.filename);

class EventsPlus extends EventEmitter {
	on(eventName, listener) {
		const args = [...arguments];
		if (super.listenerCount(eventName) == 0) return super.on.apply(this, args);
		else {
			const previous = super.listeners(eventName)[0];
			super.removeAllListeners(eventName);
			super.on(eventName, function() {
				const args = [...arguments];
				args.push(previous);
				listener.apply(this, args);
			});
		}
	}
	emit(eventName) {
		const args = [...arguments];
		if (super.listenerCount(eventName) > 0) return super.emit.apply(this, args);
		else {
			const lastArgument = args.reverse()[0];
			if (typeof lastArgument == 'function') return lastArgument('no listener for ' + eventName);
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

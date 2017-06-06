# eventsplus

[![Greenkeeper badge](https://badges.greenkeeper.io/HiFaraz/eventsplus.svg)](https://greenkeeper.io/)
Connect your microservices through events

## Installation
```bash
$ npm install eventsplus
```

## Features
- Listen to and emit events across files with a shared event emitter
- Detect if there are no listeners for an event
 - Use case: detect a missing module in your app
- Chain listeners together, where the last listener can access the previous listener
 - Use case: check user permissions in one listener before allowing user actions in a lower-level listener
 - When chaining listeners using `on(eventName)`, previous listeners added through `once(eventName)` will remain alive after the first re-use. This will be resolved in future versions
- Fast: EventsPlus uses [EventEmitter3](https://www.npmjs.com/package/eventemitter3) instead of Node.js's built-in event module to gain a large speed boost.

## Examples
### Basic
[This example](https://github.com/HiFaraz/eventsplus/tree/master/examples/basic) demonstrates listening to and emitting events between different files.

### Listener chains
[This example](https://github.com/HiFaraz/eventsplus/tree/master/examples/chain) demonstrates how to establish a chain of listeners on a single event.

## Upcoming features
- Listeners return promises
- Run listeners in parallel

## Versioning
This module follows [semantic versioning](http://semver.org/).

## Changelog

### 1.2.1 (July 30, 2016)
- Bug fixed: `package.json` was missing a dependency reference to EventEmitter3.

### 1.2.0 (July 30, 2016)
- Replacing Node.js's Event module with [EventEmitter3](https://www.npmjs.com/package/eventemitter3) for increased speed and portability

### 1.1.0 (July 29, 2016)
- Created a listener chain of responsibility. Each listener can access the previous listener

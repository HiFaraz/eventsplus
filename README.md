# eventsplus
Connect your Node.js microservices through events

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

## Examples
### Basic
[This example](https://github.com/HiFaraz/eventsplus/tree/master/examples/basic) demonstrates listening to and emitting events between different files.

### Listener chains
[This example](https://github.com/HiFaraz/eventsplus/tree/master/examples/chain) demonstrates how to establish a chain of listeners on a single event.

## Dependencies
- Node.js 4.45+

## Upcoming features
- Listeners return promises
- Run listeners in parallel

## Versioning
This module follows [semantic versioning](http://semver.org/).

## Changelog

### 1.1.0 (July 29, 2016)
- Created a listener chain of responsibility. Each listener can access the previous listener

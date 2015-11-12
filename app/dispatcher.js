'use strict';

const guid = require('guid');

let listeners = {};

let dispatcher = {
	register(callback) {
		let id = guid.raw();
		listeners[id] = callback;
		return id;
	},

	dispatch(payload) {
		console.info('Dispatching...', payload);

		for (let id in listeners) {
			let listener = listeners[id];
			listener(payload);
		}
	}
};

module.exports = dispatcher;

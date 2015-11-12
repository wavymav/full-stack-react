'use strict';

const dispatcher = require('./../dispatcher');

let action = {
	add(task) {
		dispatcher.dispatch({
			payload: task,
			type: 'todo-task:add'
		});
	},

	delete(task) {
		dispatcher.dispatch({
			payload: task,
			type: 'todo-task:delete'
		});
	}
};

module.exports = action;

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
	},

	check(task) {
		dispatcher.dispatch({
			payload: task,
			type: 'todo-task:check'
		});
	},

	uncheck(task) {
		dispatcher.dispatch({
			payload: task,
			type: 'todo-task:uncheck'
		});
	}
};

module.exports = action;

'use strict';

const dispatcher = require('./../dispatcher');

let action = {
	add(task) {
		dispatcher.dispatch({
			payload: task,
			type: 'todo-task:add'
		});
	}
};

module.exports = action;

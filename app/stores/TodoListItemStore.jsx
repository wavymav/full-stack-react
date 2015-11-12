'use strict';

const dispatcher = require('./../dispatcher');
const rest = require('./../helpers/restHelper');

function TodoListItemStore() {

	let tasks = [];
	let listeners = [];

	function getItems() {
		return tasks;
	}

	function addTodoTask(task) {
		tasks.push(task);
		triggerListeners();
	}

	function deleteTodoTask(task) {
		let index;
		tasks.filter((_task, _index) => {
			if (_task.todo === task.todo) {
				index = _index;
			}
		});

		tasks.splice(index, 1);
		triggerListeners();
	}

	function setTodoTask(task, isChecked) {
		let _task = tasks.filter((t) => {
			return t.todo === task.name
		})[0];

		task.checked = isChecked || false;
		triggerListeners();
	}

	function onChange(listener) {
		listeners.push(listener);
	}

	function triggerListeners() {
		listeners.forEach((listener) => {
			listener(tasks);
		});
	}

	dispatcher.register((event) => {
		let split = event.type.split(':');

		if (split[0] === 'todo-task') {
			switch(split[1]) {
				case 'add':
					addTodoTask(event.payload);
					break;
				case 'delete':
					deleteTodoTask(event.payload);
					break;
				case 'check':
					setTodoTask(event.payload, true);
					break;
				case 'uncheck':
					setTodoTask(event.payload, false);
					break;
			}
		}
	});

	// invoking Promise
	rest.get('api/tasks')
		.then((data) => {
			tasks = data;
			triggerListeners();
		});

	return {
		getItems: getItems,
		onChange: onChange
	};
}

module.exports = new TodoListItemStore();

'use strict';

const React = require('react');
const TodoList = require('./components/TodoList.jsx');
const TodoListItemStore = require('./stores/TodoListItemStore.jsx');

let initialTodos = TodoListItemStore.getItems();

function render() {
	React.render(<TodoList tasks={initialTodos} />, app);
}

TodoListItemStore.onChange((tasks) => {
	initialTodos = tasks;
	render();
});

render();



console.log('running main.jsx');

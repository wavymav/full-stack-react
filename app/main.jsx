'use strict';

const React = require('react');
const TodoList = require('./components/TodoList.jsx');

let initialTodos = [
	{
		todo: '1st Todo list item!'
	},
	{
		todo: '2nd Todo list item!',
		checked: true
	},
	{
		todo: '3rd Todo list item!'
	}
];

React.render(<TodoList tasks={initialTodos} />, app);

console.log('running main.jsx');

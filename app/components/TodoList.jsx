'use strict';

const React = require('react');
const TodoListItem = require('./TodoListItem.jsx');

let TodoList = React.createClass({
	renderTodoItems() {
		return this.props.tasks.map((task, item) => {
			return <TodoListItem task={task} key={`tasks${item}`}/>
		});
	},

	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo's</h1>
				</header>
				<ul>
					{this.renderTodoItems()}
				</ul>
			</div>
		);
	}
});

module.exports = TodoList;

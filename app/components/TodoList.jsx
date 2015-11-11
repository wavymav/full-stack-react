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
			<div>
				<h1>Todo's</h1>
				<div>
					<ul>
						{this.renderTodoItems()}
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = TodoList;

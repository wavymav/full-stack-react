'use strict';

const React = require('react');

let TodoList = React.createClass({
	renderTodoItems() {
		return this.props.tasks.map((task) => {
			return <li>{task.todo}</li>
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

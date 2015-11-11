'use strict';

const React = require('react');

let TodoListItem = React.createClass({
	render() {
		const taskClassName = this.props.task.checked ? 'checked' : '';

		return (
			<li className={taskClassName}>
				<span className="text">{this.props.task.todo}</span>
			</li>
		);
	}
});

module.exports = TodoListItem;

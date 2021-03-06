'use strict';

const React = require('react');
const action = require('./../actions/TodoListItemActionCreator.jsx');

let TodoListItem = React.createClass({
	deleteTask(event) {
		action.delete(this.props.task);
	},

	toggleChecked(event) {
		if (!this.props.task.checked) {
			action.check(this.props.task);
		} else {
			action.uncheck(this.props.task);
		}
	},

	render() {
		const taskClassName = this.props.task.checked ? 'checked' : '';

		return (
			<li className={taskClassName}>
				<button className="delete" onClick={this.deleteTask}>
					&times;
				</button>
				<input
					type="checkbox"
					checked={this.props.task.checked}
					onClick={this.toggleChecked} />
				<span className="text">{this.props.task.todo}</span>
			</li>
		);
	}
});

module.exports = TodoListItem;

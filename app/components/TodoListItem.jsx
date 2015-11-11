'use strict';

const React = require('react');

let TodoListItem = React.createClass({
	render() {
		return (
			<li>{this.props.task.todo}</li>
		);
	}
});

module.exports = TodoListItem;

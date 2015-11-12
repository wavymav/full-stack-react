'use strict';

const React = require('react');
const action = require('./../actions/TodoListItemActionCreator.jsx');

let TodoListAddItem = React.createClass({
	getInitialState() {
		return {
			input: ''
		};
	},

	handleInput(event) {
		this.setState({
			input: event.target.value
		});
	},

	handleSubmit(event) {
		event.preventDefault();
		// console.log('Adding item!', this.state.input);
		action.add({
			todo: this.state.input
		});

		this.setState({
			input: ''
		});
	},

	render() {
		return (
			<form className="new-task" onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleInput}
					type="text"
					placeholder="Type to add new tasks"
					value={this.state.input} />
			</form>
		);
	}
});

module.exports = TodoListAddItem;

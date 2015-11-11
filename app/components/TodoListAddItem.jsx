'use strict';

const React = require('react');

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
		console.log('Adding item!', this.state.input);
	},

	render() {
		const inputValue = this.state.input;

		return (
			<form className="new-task" onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleInput}
					type="text"
					placeholder="Type to add new tasks"
					value={inputValue} />
			</form>
		);
	}
});

module.exports = TodoListAddItem;

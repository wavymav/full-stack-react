'use strict';

module.exports = (app) => {
	let tasks = [
		{
			todo: '1st Todo list item!',
			checked: false
		},
		{
			todo: '2nd Todo list item!',
			checked: true
		},
		{
			todo: '3rd Todo list item!',
			checked: false
		}
	];

	app.route('/api/tasks')
		.get((req, res) => {
			res.send(tasks);
		});
}

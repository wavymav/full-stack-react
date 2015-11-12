'use strict';

const express = require('express');
const parser = require('body-parser');
const taskAPI = require('./routes/tasks.js');

let app = express();
let port = process.env.PORT || 3000;

// middleware for serving static files (public files)
app.use(express.static(`${__dirname}/../dist`));

// middleware for JSON request
app.use(parser.json());
app.use(parser.urlencoded({
	extended: false
})); // hadles post request

app.get('/', (req, res) => {
	res.render('./../app/index.ejs', {});
});

// tasks list API
taskAPI(app);

app.listen(port, () => {
	console.log(`Client server running on port ${port}`);
});

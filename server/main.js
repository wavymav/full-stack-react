'use strict';

const express = require('express');

let app = express();
let port = process.env.PORT || 3000;

// middleware for serving static files (public files)
app.use(express.static(`${__dirname}/../app`));

app.get('/', (req, res) => {
	res.render('./../app/index.ejs', {});
});

app.listen(port, () => {
	console.log(`Client server running on port ${port}`);
});

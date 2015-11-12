'use strict';

const $ = require('jquery');

let getUrl = (url) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			dataType: 'json',
			success: resolve,
			error: reject
		});
	});
};

module.exports = {
	get: getUrl
}

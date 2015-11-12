'use strict';

const $ = require('jquery');

let getData = (url) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			dataType: 'json',
			success: resolve,
			error: reject
		});
	});
};

let postData = (url, data) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: url,
			type: 'POST',
			data: data,
			success: resolve,
			error: reject
		});
	});
};

module.exports = {
	get: getData,
	post: postData
}

'use strict';

const gulp = require('gulp');
const LiveServer = require('gulp-live-server');
const browserSync = require('browser-sync');

gulp.task('live-server', () => {
	let server = new LiveServer('server/main.js');
	server.start();
});

gulp.task('serve', ['live-server'], () => {
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		port: 9001
	});
});

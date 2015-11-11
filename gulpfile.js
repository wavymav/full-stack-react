'use strict';

const gulp = require('gulp');
const LiveServer = require('gulp-live-server');
const browserSync = require('browser-sync');
const reactify = require('reactify');
const browserify = require('browserify');
const source = require('vinyl-source-stream')

gulp.task('live-server', () => {
	let server = new LiveServer('server/main.js');
	server.start();
});

gulp.task('bundle', ['copy'], () => {
	return browserify({
		entries: 'app/main.jsx',
		debug: true
	})
		.transform(reactify)
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist'));
});

gulp.task('copy', () => {
	gulp.src(['app/*.css'])
		.pipe(gulp.dest('./dist'));
});

gulp.task('serve', ['bundle', 'live-server'], () => {
	browserSync.init(null, {
		proxy: 'http://localhost:3000',
		port: 9001
	});
});

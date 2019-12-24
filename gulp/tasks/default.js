'use strict';

var gulp 				= require('gulp');
var runSequence = require('run-sequence');
var gutil 			= require('gulp-util');


gulp.task('stylusDependencies', function() {
	return runSequence(
		'spritesmith',
		'svg',
		'stylus'
	);
});

gulp.task('default', function() {
	return runSequence([
		'stylusDependencies',
		'pug',
		// 'build:localize',
		'scripts',
		'jscs',
		'jshint'
	],
		'browserSync',
		'watchDependencies')
});

gulp.task('build', ['del'], function() {
	return runSequence([
		'stylusDependencies',
		'pug',
		'scripts',
		'copy',
		// 'build:localize'
	],
		function () {
		if (gutil.env.tag) {
			return gulp.start('cdn');
		}
	});
});

gulp.task('deploy', function() {
	 return runSequence(
		 'del', 'build'
	 );

});

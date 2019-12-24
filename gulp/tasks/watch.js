'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var reload      = require('browser-sync').reload;

gulp.task('watchDependencies',[
	'watch',
	'watch:vendorFiles'
]);

gulp.task('watch', function() {
	gulp.watch('app/images/sprite/**/*.png', ['spritesmith']);


	gulp.watch('app/styles/**/*.styl', [
		'stylus', function () {
			return reload('assets/styles/common.css');
		}
	]);


	gulp.watch('lang/**/*.json', function () {
		return runSequence('build:localize', reload);
	});


	gulp.watch('app/resources/**/*', ['copy:resources', reload]);


	gulp.watch('app/scripts/**/*.js', [
		'scripts',
		'copy:scripts',
		'jscs',
		'jshint',
		reload
	]);

	gulp.watch('app/images/svg/**/*.svg', ['svg', reload]);

	gulp.watch('app/templates/**/*.pug', [
		'pug',
		'build:localize',
		reload
	]);
});
gulp.task('watch:vendorFiles', function () {
	gulp.watch('../vendor/scripts/**/*.js', [
		'scripts',
		'copy:scripts',
		'jscs',
		'jshint',
		reload
	]);
	gulp.watch('../vendor/blocks/*.pug', [
			'pug',
			'build:localize',
			reload
		]);
	gulp.watch('../vendor/data/**/*.json', function () {
		return runSequence('build:localize', reload);
	});
});

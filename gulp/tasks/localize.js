'use strict';

var gulp    = require('gulp');
var filter  = require('gulp-filter');
var i18n    = require('gulp-html-i18n');
var paths 	= require('../paths');

gulp.task('build:localize',['pug'], function() {
	return gulp.src([
		'dist/**/*.html',
		'!dist/??/*.html'])
		.pipe(i18n({
			langDir: 'lang',
			createLangDirs: 'true',
			trace: true,
			failOnMissing: false
	}))
		.pipe(gulp.dest('dist'))
});

var gulp          = require('gulp');
var plumber       = require('gulp-plumber');
var gutil         = require('gulp-util');
var gulpif        = require('gulp-if');
var rupture       = require('rupture');
var stylus        = require('gulp-stylus');
var autoprefixer  = require('gulp-autoprefixer');
/*var combineMq     = require('gulp-combine-mq');*/
/*var minifyCss     = require('gulp-minify-css');*/
var csscomb       = require('gulp-csscomb');
var errorHandler  = require('../utils/errorHandler');
var paths         = require('../paths');
var pkg           = require('../../package.json');

gulp.task('stylus', function() {
	return gulp.src([
		'common.styl'
	], {
		cwd: 'app/styles'
	})
		.pipe(plumber({
			errorHandler: errorHandler
	}))
		.pipe(stylus({
			'include css': true,
			errors: true,
			use: rupture(),
			sourcemap: {
				comment: false,
				inline: false
			}
	}))
	.pipe(autoprefixer(
		'Android >= ' + pkg.browsers.android,
		'Chrome >= ' + pkg.browsers.chrome,
		'Firefox >= ' + pkg.browsers.firefox,
		'Explorer >= ' + pkg.browsers.ie,
		'iOS >= ' + pkg.browsers.ios,
		'Opera >= ' + pkg.browsers.opera,
		'Safari >= ' + pkg.browsers.safari))
/*	.pipe(combineMq({
		beautify: false
	}))*/
	/*.pipe(gulpif(!gutil.env.debug, minifyCss()))
	.pipe(gulpif(gutil.env.csscomb, csscomb()))*/
	.pipe(gulp.dest(paths.styles));
});


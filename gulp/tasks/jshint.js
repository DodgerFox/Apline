var errorHandler, gulp, jshint, plumber, stylish;

gulp          = require('gulp');
plumber       = require('gulp-plumber');
stylish       = require('jshint-stylish');
jshint        = require('gulp-jshint');
errorHandler  = require('../utils/errorHandler');

gulp.task('jshint', function() {
	return gulp.src(['**/*.js', '!libs/**/*'], {
		cwd: 'app/scripts'
	}).pipe(plumber({
		errorHandler: errorHandler
	})).pipe(jshint(
		
	)).pipe(jshint.reporter('jshint-stylish'));
});

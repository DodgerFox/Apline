var gulp          = require('gulp');
var gulpif        = require('gulp-if');
var plumber       = require('gulp-plumber');
var pug          = require('gulp-pug');
var inheritance   = require('gulp-pug-inheritance');
var cached        = require('gulp-cached');
var filter        = require('gulp-filter');
var rename        = require('gulp-rename');
var prettify      = require('gulp-html-prettify');
var pkg           = require('../../package.json');
var errorHandler  = require('../utils/errorHandler');
var paths         = require('../paths');
var getData       = require('../utils/getData');

gulp.task('pug', function() {
	return gulp.src('app/templates/**/*.pug').pipe(plumber({
		errorHandler: errorHandler
	}))

	.pipe(gulpif(global.watch, inheritance({
		basedir: 'app/templates'
	})))
	.pipe(filter(function(file) {
		return /templates[\\\/]pages/.test(file.path);
	}))
	.pipe(pug({
		data: {
			getData: getData,
			page: {
				copyright: pkg.copyright,
				description: pkg.description,
				keywords: pkg.keywords.join(', '),
				title: pkg.title
			}
		}
	}))
	.pipe(prettify({
		brace_style: 'expand',
		indent_size: 1,
		indent_char: '\t',
		indent_inner_html: true,
		preserve_newlines: true
	})).pipe(rename({
		dirname: '.'
	})).pipe(gulp.dest(paths.dist));
});

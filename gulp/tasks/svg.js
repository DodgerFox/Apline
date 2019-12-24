var gulp, gulpif, path, paths, rename, svgSymbols;

gulp        = require('gulp');
svgSymbols  = require('gulp-svg-symbols');
gulpif      = require('gulp-if');
rename      = require('gulp-rename');
paths       = require('../paths');
path        = require('path');

gulp.task('svg', function() {
	return gulp.src('app/images/svg/**/*.svg')
		.pipe(svgSymbols({
			title: false,
			id: 'icon_%f',
			className: '%f',
			originalAttributes: true,
			templates: [
				path.join(__dirname, '../utils/svg.styl'),
				'default-svg'
			]
	}))
		.pipe(gulpif(/\.styl$/, gulp.dest('app/styles/helpers')))
		.pipe(gulpif(/\.svg$/, rename('icon.svg')))
		.pipe(gulpif(/\.svg$/, gulp.dest('dist/assets/images/')));
});

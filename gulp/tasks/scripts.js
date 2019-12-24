var
	gulp          = require('gulp'),
	plumber       = require('gulp-plumber'),
	gutil         = require('gulp-util'),
	gulpif        = require('gulp-if'),
	concat        = require('gulp-concat'),
	/*uglify        = require('gulp-uglify'),*/
	errorHandler  = require('../utils/errorHandler'),
	paths         = require('../paths'),
	component			= require('../utils/pathFinder').component,
	vendor				= require('../utils/pathFinder').vendor;
	app					= require('../utils/pathFinder').app;

gulp.task('scripts', function () {
	return gulp.src([
			component('jquery/dist/jquery.min.js'),
			// component('svgxuse/svgxuse.min.js'),
			// component('devicejs/lib/device.min.js'),
			//component('jquery.csssr.validation/jquery.csssr.validation.js'),
			//component('malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.js'),
			// component('anchor-js/anchor.min.js'),
			// component('jquery-mousewheel/jquery.mousewheel.min.js'),

			// component('wow/dist/wow.min.js'),
			// component('featherlight/src/featherlight.js'),
			component('slick-carousel/slick/slick.min.js'),


			app('common.js')
			// app('stock.js')

	])
		.pipe(plumber({
			errorHandler: errorHandler
	}))
		.pipe(concat('common.min.js'))
		/*.pipe(gulpif(!gutil.env.debug, uglify()))*/
		.pipe(gulp.dest(paths.scripts));
});

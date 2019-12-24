var del, gulp, paths;

gulp  = require('gulp');
del   = require('del');
paths = require('../paths');

gulp.task('del', function(cb) {
	return del(paths.dist + '/*', cb);
});

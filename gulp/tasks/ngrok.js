var gulp, gutil, ngrok;

gulp  = require('gulp');
gutil = require('gulp-util');
ngrok = require('ngrok');

gulp.task('ngrok', function() {
	var port;
	port = gutil.env.port || 420;
	return ngrok.connect(port, function(err, url) {
		return gutil.log(['[ngrok] '.bold.green, url.bold.magenta.underline, ' -> 127.0.0.1:' + port].join(''));
	});
});

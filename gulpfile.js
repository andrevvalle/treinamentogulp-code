var gulp 	  = require('gulp'),
  	connect = require('gulp-connect'),
  	cssmin 	= require('gulp-cssmin'),
  	rename 	= require('gulp-rename');
 
gulp.task('connect', function() {
  connect.server({
    root: './dist/',
    livereload: true,
    port: 3000
  });
});

gulp.task('cssmin', function(){
	gulp.src('./app/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
});

gulp.task('movehtml', function(){
	gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
});

gulp.task('watch', function () {
  gulp.watch(['./app/index.html'], ['movehtml']);
  gulp.watch(['./app/main.css'], ['cssmin']);
});

gulp.task('default',
	[
		'connect',
		'cssmin',
		'movehtml',
    'watch'
	]
);
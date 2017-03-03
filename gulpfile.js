var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('styles', function() {
	gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
				.pipe(browserSync.reload({
		      stream: true
		    }))
});

gulp.task('styles:watch', function () {
  gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public/views/home.html'
    },
  })
})


gulp.task('start', ['browserSync','styles', 'styles:watch']);

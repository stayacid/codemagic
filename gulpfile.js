'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    glp = require('gulp-load-plugins')();

/////////////////////////////////////////////////
//-------------------SCRIPTS-------------------//
/////////////////////////////////////////////////

gulp.task('scripts', function () {
  return gulp.src('js/*.js')
    .pipe(glp.plumber({
      errorHandler: glp.notify.onError(function (err) {
        return {
          title: 'js:include',
          message: err.message
        };
      })
    }))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/////////////////////////////////////////////////
//--------------------WATCH--------------------//
/////////////////////////////////////////////////

gulp.task('watch', function () {
  gulp.watch('js/*.js', gulp.series('scripts'));
});

/////////////////////////////////////////////////
//--------------------SERVE--------------------//
/////////////////////////////////////////////////

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

/////////////////////////////////////////////////
//-------------------DEFAULT-------------------//
/////////////////////////////////////////////////

gulp.task('default', gulp.series(
  gulp.parallel('scripts', 'watch', 'serve')
));

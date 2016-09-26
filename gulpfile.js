'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('default', function() {
  browserSync.init({
    server: {
      baseDir: "html"
    }
  });

  gulp.watch(['_resource/**/*.html'], ['copy']);
  gulp.watch(['_resource/sass/*.scss'], ['sass']);
});

gulp.task('copy', function() {
  return gulp.src([
    '_resource/**/*.html'
  ])
  .pipe(gulp.dest('html/'))
  .pipe(browserSync.stream());
});

gulp.task('sass',function() {
       gulp.src('_resource/sass/**/*.scss')
  .pipe(sass({outputStyle:'expanded'}))
  .pipe(gulp.dest('html/css/'))
  .pipe(browserSync.stream());
})

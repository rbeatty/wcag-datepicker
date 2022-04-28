const gulp = require('gulp'),
concat = require('gulp-concat'),
minify = require('gulp-minify'),
cleanCss = require('gulp-clean-css'),
del = require('del');

const build = gulp.parallel(gulp.series(cleanCSS, CSS), gulp.series(cleanJS, JS));

function cleanJS() {
  return del(['dist/*.js']);
}

function cleanCSS() {
  return del(['dist/*.css']);
}

function JS() {
  return gulp.src(['src/*.js'])
    .pipe(concat('datepicker.min.js'))
    .pipe(minify({ ext: { min:'.js' }, noSource: true }))
    .pipe(gulp.dest('dist'))
}

function CSS() {
  return gulp.src(['src/*.css'])
    .pipe(concat('datepicker.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'))
}

function watch() {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.css', ['css']);
}

function watch() {
  gulp.watch('src/**/*.js', gulp.series(cleanJS, JS));
  gulp.watch('src/**/*.css', gulp.series(cleanCSS, CSS));
}

gulp.task('build', build);

gulp.task(watch);
gulp.task('default', watch);
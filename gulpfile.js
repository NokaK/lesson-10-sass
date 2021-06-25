'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('scss/style.scss', gulp.parallel(buildStyles));
};
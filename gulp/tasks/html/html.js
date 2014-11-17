/*
  Move HTML files out of src and into build.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config = require('../../config').html;

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    .pipe($.jade())
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'HTML'}));
});

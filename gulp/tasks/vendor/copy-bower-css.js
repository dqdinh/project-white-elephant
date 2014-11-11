/*
  Copy all bower css from bower_components into client/styles/_vendor.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config = require('../../config').vendor.css;

gulp.task('copy-bower-css', function() {
  return gulp.src([config.src, config.ignore])
    .pipe($.plumber({
      errorHandler: onError
    }))
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: "Copy Bower CSS"}));
});

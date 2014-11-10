/*
  Copy all Material UI LESS from material-ui project.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config = require('../../config').vendor.mui;

gulp.task('copy-mui-styles', function() {
  return gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: "Copy mui styles"}));
});

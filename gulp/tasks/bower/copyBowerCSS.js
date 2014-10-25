/*
  Copy all bower css from bower_components into client/styles/_vendor.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config').bower.css;

gulp.task('copyBowerCSS', function() {
  return gulp.src([config.src, config.ignore])
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    .pipe($.flatten())
    .pipe($.rename({
      prefix: "_",
      extname: ".scss"
    }))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: "Copy Bower CSS"}));
});

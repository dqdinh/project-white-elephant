/*
  Copy HTML inspector from bower_components into src/styles.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config').vendor.htmlInspector;

gulp.task('html-inspector', function() {
  return gulp.src(config.src)
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: "Copy Bower: html-inspector.js"}));
});

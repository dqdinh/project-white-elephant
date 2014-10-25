/*
  Copy fonts from src into build.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var handleErrors = require('../../util/handleErrors');
var config = require('../../config').fonts.fa;

gulp.task('fa-fonts', function() {
  return gulp.src(config.src)
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'Fontawesome Fonts'}));
});

/*
  Move HTML files out of src and into build.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var handleErrors = require('../../util/handleErrors');
var config = require('../../config').html;

gulp.task('html', function() {
  return gulp.src(config.src)
    // Minify only HTML
    .pipe($.if('*.html', $.minifyHtml()))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'HTML'}));
});


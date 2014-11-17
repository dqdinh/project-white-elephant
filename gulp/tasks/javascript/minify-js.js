// Minify and copy all JavaScript
// with sourcemaps all the way down.

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config').minify.js

gulp.task('minify-js', function() {
  return gulp.src(config.src)
    // Concatenate And Minify JavaScript
    .pipe($.uglify({ preserveComments: 'some' }))
    .pipe(gulp.dest(config.dest));
});

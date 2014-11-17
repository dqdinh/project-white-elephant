// Minify and copy all css to dist directory.

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../../config').minify.css;

gulp.task('minify-css', function() {
  gulp.src(config.src)
    // Concatenate And Minify Styles
    .pipe($.csso())
    .pipe($.rename(config.outputName))
    .pipe(gulp.dest(config.dest));
});

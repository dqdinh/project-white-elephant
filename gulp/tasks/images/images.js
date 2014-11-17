/*
  Optimize images from src into build.
*/

'use strict';

var gulp       = require('gulp');
var $ = require('gulp-load-plugins')();
var jpegtran = require('imagemin-jpegtran');
var onError = require('../../util/onError');
var config = require('../../config').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    // Optimize
    .pipe($.cache($.imagemin({
      progressive: true,
      use: [jpegtran()]
    })))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'Images'}));
});

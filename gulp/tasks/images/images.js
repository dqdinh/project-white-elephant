/*
  Optimize images from src into build.
*/

'use strict';

var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');
var gulp       = require('gulp');
var $ = require('gulp-load-plugins')();
var handleErrors = require('../../util/handleErrors');
var config = require('../../config').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    // Ignore unchanged files
    .pipe($.changed(config.dest))
    // Optimize
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'Images'}));
});

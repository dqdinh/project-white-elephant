/*
  Run all font copying tasks.
*/

var merge = require('merge-stream');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config = require('../../config').fonts

// 3rd party libraries
gulp.task('fonts', function() {
 return merge(
   gulp.src(config.google)
     .pipe($.plumber({
       errorHandler: onError
     }))
     .pipe($.changed(config.dest))
     .pipe(gulp.dest(config.dest)),

   gulp.src(config.fa)
     .pipe($.plumber({
       errorHandler: onError
     }))
     .pipe($.changed(config.dest))
     .pipe(gulp.dest(config.dest))
 );
});

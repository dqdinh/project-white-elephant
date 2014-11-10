/**
 * Compile LESS and lint stylesheets.
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config       = require('../../config').lint.less;

gulp.task('less-lint', function(){
  return gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    .pipe($.recess())
    .pipe($.recess.reporter())
    .pipe($.size({title: 'LESS lint'}));
});

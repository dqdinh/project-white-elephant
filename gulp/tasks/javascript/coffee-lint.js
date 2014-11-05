/**
  Check coffeescript syntax.
*/

'use strict';

var gulp = require('gulp');
var $            = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config = require('../../config').lint.coffee;

gulp.task('coffee-lint', function () {
    gulp.src(config.src)
         .pipe($.plumber({
           errorHandler: onError
         }))
        .pipe($.coffeelint())
        .pipe($.coffeelint.reporter())
});

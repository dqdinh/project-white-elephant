/**
  Check coffeescript syntax.
*/

'use strict';

var gulp = require('gulp');
var coffeelint = require('gulp-coffeelint');
var handleErrors = require('../../util/handleErrors');
var config = require('../../config').lint.coffee;

gulp.task('coffee-lint', function () {
    gulp.src(config.src)
        .pipe(coffeelint())
        .on('error', handleErrors)
        .pipe(coffeelint.reporter())
});

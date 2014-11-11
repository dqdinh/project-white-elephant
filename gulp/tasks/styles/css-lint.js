/**
* lint stylesheets.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var onError = require('../../util/onError');
var config       = require('../../config').lint.css;

gulp.task('css-lint', function(){
 return gulp.src(config.src)
   .pipe($.plumber({
     errorHandler: onError
   }))
   .pipe($.recess())
   .pipe($.recess.reporter())
   .pipe($.size({title: 'CSS lint'}));
});


/*
* To ensure CSS styleguide documentation,
* the styles task will run in this order:
*  * scss
*  * styleguide
*  * uncss
*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('styles', function() {
  runSequence(
    'less',
    'less-lint'
  );
});

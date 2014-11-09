/*
  Run all bower copying tasks.
*/

'use strict';

var gulp = require('gulp');

gulp.task('copyBower', [
  'html-inspector',
  'copyBowerCSS'
]);

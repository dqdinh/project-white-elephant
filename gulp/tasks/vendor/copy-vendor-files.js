/*
  Run all bower copying tasks.
*/

'use strict';

var gulp = require('gulp');

gulp.task('copy-vendor-files', [
  'html-inspector',
  'copy-mui-styles',
  'copy-bower-css'
]);

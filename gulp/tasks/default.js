/*
  The default task (called when you run `gulp` from cli)
* This will run in this order:
*  * clean
*  * serve
*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
  runSequence('clean', 'build');
});

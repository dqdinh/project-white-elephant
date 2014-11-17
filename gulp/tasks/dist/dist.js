/*
*  Run distribution taks to minify css and js for production.
*  This will run in this order:
*   * browserify
*   * styles
*   * [minify-js, minify-css]
*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function() {
  runSequence('clean-dist',
              'images-dist',
              'styles',
              //'uncss',
              'browserify-dist',
              ['minify-html', 'minify-css', 'minify-js']);
});

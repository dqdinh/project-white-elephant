/**
* The default task (called when you run `gulp` from cli)
* This will run in this order:
*  * copyBower
*  * scss
*  * run async -- ['browserify',
*     'images',
*     'html',
*     'fonts',
*     'coffee-lint',
*     'scss-lint'],
*   * styleguide
*   * uncss
*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence(
              'copyBower',
              'scss',
              ['browserify',
                'images',
                'html',
                'fa-fonts',
                'coffee-lint',
                'scss-lint'],
              'styleguide'
             );
});

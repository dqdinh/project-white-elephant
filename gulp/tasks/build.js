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
              'styles',
              [
                'browserify',
                'images',
                'html',
                // Include when cjsx is
                // included in coffee-lint
                //'coffee-lint',
                'fonts'
              ],
              'styleguide'
             );
});

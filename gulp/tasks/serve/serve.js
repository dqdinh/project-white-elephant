/*
* Watch Files For Changes & Reload
*
* NOTE: The browserify gulp task already handles js recompiling with watchify so we don't need to watch it.
*/

'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('serve', ['setWatch', 'browserSync', 'browserify'], function () {
  gulp.watch('src/html/site/**/*.html', ['html']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/fonts/**', ['fonts']);
  // Include when cjsx is included in coffee-lint
  //gulp.watch('src/javascript/**/*.coffee', ['coffee-lint']);
});

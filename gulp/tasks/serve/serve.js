/*
* Watch Files For Changes & Reload
*
* NOTE: The browserify gulp task already handles js recompiling with watchify so we don't need to watch it.
*/

'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('serve', ['set-watch', 'browserSync', 'browserify'], function () {
  gulp.watch('src/html/**/*.html', ['html']);
  gulp.watch('src/styles/**/*.less', ['less']);
  // TODO: Since style tasks include css linting, we
  // will uncomment after first deploy
  //gulp.watch('src/styles/**/*.less', ['styles']);
  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/fonts/**', ['fonts']);
  // Include when cjsx is included in coffee-lint
  //gulp.watch('src/javascript/**/*.coffee', ['coffee-lint']);
});

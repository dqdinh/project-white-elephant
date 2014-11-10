// Lint SCSS

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
// gulp-load-plugins does not work for gulp-scss-lint
// so we'll declare it explictly.
var scsslint = require('gulp-scss-lint');
var config = require('../../config').lint.scss;

gulp.task('scss-lint', function() {
  gulp.src(config.src)
    .pipe(scsslint({ 'config': 'lint.yml', 'bundleExec': true }));
});

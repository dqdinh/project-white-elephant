var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = "./styleguide_config.yml"

gulp.task('styleguide', $.shell.task([
  'bundle exec hologram -c ' + config
]))

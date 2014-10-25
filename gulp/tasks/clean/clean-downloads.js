/**
  Clear node_modules and bower components directories.
*/

'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean-downloads', del.bind(null, ['node_modules', 'src/bower_components']));

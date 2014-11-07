/**
  Clear dist/
*/

'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean-dist', del.bind(null, ['dist']));

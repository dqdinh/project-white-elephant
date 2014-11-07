/**
  Clear build/ and styleguide/
*/

'use strict';

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', del.bind(null, ['build', 'styleguide']));

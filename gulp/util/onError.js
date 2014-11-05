/*
  Log error to console
*/

'use strict';

var gutil = require('gulp-util');

module.exports = function(err) {
  gutil.beep();
  gutil.log(err);
};

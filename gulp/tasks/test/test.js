/*
  Run Karma tests.
*/

'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var karma = require('karma').server;
var karmaConfig = require('../../../karma.conf');

// // Run test once and exit
gulp.task('test', ['browserifyTests'], function (done) {
  karma.start(_.assign(
    karmaConfig,
    { singleRun: true }
  ), done);
});

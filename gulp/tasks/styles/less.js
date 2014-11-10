/**
 * Compile LESS and lint stylesheets.
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var onError = require('../../util/onError');
var glob = require('glob');
var config       = require('../../config').less;
//var path = require('path');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('less', function(){
  return gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    .pipe($.changed(config.dest))
    // generate sourcemaps
    .pipe($.sourcemaps.init())
    // compile less
    .pipe($.less())
    // add browser prefixes
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // concat into large file
    .pipe($.concat('main.css'))
    .pipe($.sourcemaps.write())
    // Print error out to web page
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'LESS'}))
    // stream css changes
    .pipe(reload({stream: true}));
});

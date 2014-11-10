/**
 * Compile LESS and lint stylesheets.
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var onError = require('../../util/onError');
var handleErrors = require('../../util/handleErrors');
var config       = require('../../config').less;

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
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .on('error', handleErrors)
    // Less Hat breaks autoprefixer. For now we'll pick LH.
    // In the future, switch to autoprefixer which will
    // also allow linting to work.
    //.pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.concat('main.css'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'LESS'}))
    // stream css changes
    .pipe(reload({stream: true}));
});

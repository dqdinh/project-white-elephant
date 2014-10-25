/**
 * Compile SCSS and automatically prefix stylesheets into build.
 */

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var handleErrors = require('../../util/handleErrors');
var onError = require('../../util/onError');
var glob = require('glob');
var config       = require('../../config').scss;

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

gulp.task('scss', function(){
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    .pipe($.changed(config.dest))
    // Sourcemaps are now generated by default
    // so long as build/styles and src/styles match up.
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Print error out to web page
    .on('error', console.error.bind(console))
    .pipe($.rename(function(path) {
      path.basename = config.outputName;
    }))
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'scss'}));
});

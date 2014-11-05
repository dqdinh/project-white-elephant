/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

'use strict';

var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();
var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../../util/bundleLogger');
var onError = require('../../util/onError');
var source       = require('vinyl-source-stream');
var config       = require('../../config').browserify;

gulp.task('browserify', function() {
  var bundler = browserify(config.settings);

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      .bundle()
      // Report compile errors
      .pipe($.plumber({
        errorHandler: onError
      }))
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source(config.outputName))
      // Specify the output destination
      .pipe(gulp.dest(config.dest))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});

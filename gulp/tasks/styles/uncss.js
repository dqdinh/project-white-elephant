// Remove css that is not documented in the style guide.
// Then reload / stream the new css.

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var handleErrors = require('../../util/handleErrors');
var glob = require('glob');
var onError = require('../../util/onError');
var config = require('../../config').uncss;

gulp.task('uncss', function() {
  gulp.src(config.src)
    .pipe($.plumber({
      errorHandler: onError
    }))
    // Remove Unused CSS
    .pipe($.uncss({
      html: glob.sync(config.html)
    }))
    .pipe($.rename(config.outputName))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe($.size({title: 'uncss'}))
    .pipe(reload({stream: true}));
});

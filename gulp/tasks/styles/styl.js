/**
* Compile Stylus and autoprefix.
*/

'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var onError = require('../../util/onError');
var handleErrors = require('../../util/handleErrors');
var config       = require('../../config').styl;
var jeet = require('jeet');
var axis = require('axis');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer-stylus');

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

gulp.task('styl', function(){
 return gulp.src(config.src)
   .pipe($.plumber({
     errorHandler: onError
   }))
   .pipe($.changed(config.dest))
   .pipe($.sourcemaps.init())
   .pipe($.stylus({
     'include css': true,
     use:[
       axis(),
       jeet(),
       rupture(),
       autoprefixer({ browsers: AUTOPREFIXER_BROWSERS})
     ]
   }))
   .on('error', handleErrors)
   .pipe($.sourcemaps.write())
   .pipe(gulp.dest(config.dest))
   .pipe($.size({title: 'Stylus'}))
   // stream css changes
   .pipe(reload({stream: true}));
});

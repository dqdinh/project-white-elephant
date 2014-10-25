module.exports = {
  // base path, that will be used to resolve files and exclude
  basePath: '.',

  frameworks: ['mocha', 'chai'],

  plugins: [
    'karma-mocha',
    'karma-chai',
    "karma-phantomjs-launcher",
    "karma-mocha-reporter",
    'karma-coverage',
  ],

  // list of files / patterns to load in the browser
  files: [
    'build/test/main.js'
  ],

  // List of files to exclude.
  // exclude: [
  //   'client/javascript/initialize.js'
  // ],

  // use dots reporter, as travis terminal does not support escaping sequences
  // possible values: 'dots', 'progress'
  // CLI --reporters progress
  reporters: ['mocha', 'coverage'],

  // Add preprocessors.
  preprocessors: {
  // source files, that you wanna generate coverage for
  // do not include tests or libraries
  // (these files will be instrumented by Istanbul)
    'test/**/*.coffee': 'coverage'
  },

  coverageReporter: {
    type : 'html',
    dir : 'coverage/'
  },

  // Start these browsers, currently available:
  // - Chrome
  // - ChromeCanary
  // - Firefox
  // - Opera
  // - Safari (only Mac)
  // - PhantomJS
  // - IE (only Windows)
  // CLI --browsers Chrome,Firefox,Safari
  // browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
  browsers: ['PhantomJS'],

  // web server port
  // CLI --port 9876
  port: 9876,

  // enable / disable colors in the output (reporters and logs)
  // CLI --colors --no-colors
  colors: true,

  // enable / disable watching file and executing tests whenever any file changes
  // CLI --auto-watch --no-auto-watch
  autoWatch: true,

  // If browser does not capture in given timeout [ms], kill it
  // CLI --capture-timeout 5000
  captureTimeout: 20000,

  // Auto run tests on start (when browsers are captured) and exit
  // CLI --single-run --no-single-run
  singleRun: false,

  // report which specs are slower than 500ms
  // CLI --report-slower-than 500
  reportSlowerThan: 500
};

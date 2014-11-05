/*
* Gulp configuration variables
*/

var dest = './build';
var src = './src';
var dist = './dist';
var styleguide = './styleguide';

module.exports = {
  browserSync: {
    // Show me additional info about the process
    logLevel: "debug",
    // Log connections
    logConnections: true,
    // Log information about changed files
    logFileChanges: true,
    port: 8080,
    // Stop the browser from automatically opening
    open: false,
    // Show notifications in the browser.
    notify: true,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'PWE',
    // serve these files
    server: {
      baseDir: [
        dest,
        styleguide,
      ]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },

  uncss: {
    src: dest + "/main.css",
    dest: dest,
    outputName: 'main_filtered.css',
    html: src + "/html/site/**/*.html"
  },

  scss: {
    src: src + "/styles/main.scss",
    dest: dest,
    outputName: "main"
  },

  bower: {
    css: {
      src: src + '/bower_components/**/*.css',
      ignore: '!' + src + '/bower_components/**/*.min.css',
      dest: src + '/styles/_vendor/_bower/'
    },
    htmlInspector: {
      src: src + '/bower_components/html-inspector/html-inspector.js',
      dest: dest
    }
  },

  minify: {
    js: {
      src: dest + "/main.js",
      dest: dist,
      outputName: 'main.min.js'
    },
    css: {
      src: dest + "/main_filtered.css",
      dest: dist,
      outputName: 'main.min.css'
    }
  },

  lint: {
    scss: {
      src: [
        src + '/styles/**/*.scss',
        '!' + src + '/styles/_vendor/**'
      ]
    },
    coffee: {
      src: src + "/javascript/**/*.coffee"
    }
  },

  images: {
    src: src + "/images/**",
    dest: dest + "/images/"
  },

  fonts: {
    dest: dest + "/fonts/",
    fa: src + "/bower_components/fontawesome/fonts/**",
    google: src + "/fonts/**"
  },

  html: {
    src: src + "/html/site/**/*.html",
    dest: dest
  },

  browserify: {
    settings: {
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: true,
      // Specify the entry point of your app
      entries: ['./src/javascript/main.coffee'],
      // Add file extentions to make optional in your requires
      extensions: ['.coffee'],
      // Enable source maps.
      debug: true,
    },
    dest: dest,
    outputName: 'main.js'
  },

  browserifyTest: {
    settings: {
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: true,
      // Specify the entry point of your app
      entries: ['./test/init.coffee'],
      // Add file extentions to make optional in your requires
      extensions: ['.coffee'],
      // Enable source maps.
      debug: true,
    },
    dest: dest + "/test/",
    outputName: 'main.js'
  }
};

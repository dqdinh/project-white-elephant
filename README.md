# Project White Elephant

## Overview
Coding platform for [www.projectwhiteelephant.com](www.projectwhiteelephant)

## Frontend setup
If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

`brew install node`

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally

Gulp must be installed globally in order to use the command line tools.

`npm install -g gulp`

### Install npm dependencies

`npm install`

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Install bower dependencies

`bower install`

### Install Gems

`bundle install`

## Workflow

###1. Run Gulp to build and then serve a local instance of the help center.

  ```shell
  gulp; gulp serve
  ```

###2. Open

- via localhost
  ```shell
  open -a /Applications/Google\ Chrome.app http://localhost:8080
  ```

- via external url
  ```shell
  open -a /Applications/Google\ Chrome.app [whatever external URL BS provides]
  ```

###3. Code Away
- make modifications in src/

###4. Shipping
- Minify JS and CSS into dist/
  ```
  gulp dist
  ```

## Notes On CSS Naming Conventions & Linting
- [Linter defintions] (https://github.com/causes/scss-lint/blob/master/lib/scss_lint/linter/README.md)

- Follows SUIT CSS naming convention:
```css
  /* Utility */
  .u-utilityName {}

  /* Component */
  .ComponentName {}

  /* Component modifier */
  .ComponentName--modifierName {}

  /* Component descendant */
  .ComponentName-descendant {}

  /* Component descendant modifier */
  .ComponentName-descendant--modifierName {}

  /* Component state (scoped to component) */
  .ComponentName.is-stateOfComponent {}

  /* JavaScript hook */
  .js-ComponentName
```

## Sources of Enlightenment
- https://github.com/callemall/material-ui
- https://developers.google.com/web/starter-kit/
- http://philipwalton.github.io/solved-by-flexbox/
- http://learnlayout.com/
- https://github.com/suitcss/suit/blob/master/doc/components.md
- https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md
- http://nicolasgallagher.com/about-html-semantics-front-end-architecture/
- https://www.youtube.com/watch?v=m0oMHG6ZXvo
- https://github.com/kriasoft/react-starter-kit

# @cjsx React.DOM
'use strict'

$ = require 'jquery'
React = require 'react'
HelloMsg = require './views/helloMsg'

$(document).ready ->
  React.render(
    <HelloMsg name="dave" />,
    document.getElementById('hello-region')
  )

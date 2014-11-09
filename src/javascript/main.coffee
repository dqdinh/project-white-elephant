# @cjsx React.DOM

$ = require 'jquery'
React = require 'react'
AppRoutes = require './app-routes'

$(document).ready ->
  window.React = React
  React.render(
    AppRoutes,
    document.body
  )

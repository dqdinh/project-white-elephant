# @cjsx React.DOM

React = require 'react'
mui = require 'material-ui'

Layout = React.createClass
  render: ->
    <mui.AppCanvas>
      <mui.AppBar>
      </mui.AppBar>
    </mui.AppCanvas>

module.exports = Layout

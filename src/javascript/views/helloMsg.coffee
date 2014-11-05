# @cjsx React.DOM
'use strict'

React = require 'react'

module.exports = React.createClass
  render: ->
    <div>Hello {@.props.name}</div>

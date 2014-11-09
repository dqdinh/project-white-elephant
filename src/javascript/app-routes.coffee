# @cjsx React.DOM

React = require 'react'
Router = require 'react-router'
Route = Router.Route
Routes = Router.Routes
Redirect = Router.Redirect
DefaultRoute = Router.DefaultRoute
NotFoundRoute = Router.NotFoundRoute

Layout = require './components/layout'
Home = require './components/home'

AppRoutes =
  <Routes scrollBehavior='browser'>
    <Route name='root' path='/' handler={Layout}>
      <Route name='home' handler={Home} />
      <DefaultRoute handler={Home} />
    </Route>
  </Routes>

module.exports = AppRoutes

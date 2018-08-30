import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import home from '../views/home/home.jsx'

class RouteConfig extends React.Component{
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" Component={home} />
        </Switch>
      </HashRouter>
    )
  }
}
export default RouteConfig
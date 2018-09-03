import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import home from '../views/home/home.jsx'
import User from '../views/userCenter/user.jsx'

class RouteConfig extends React.Component{
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/user" component={User} />
        </Switch>
      </HashRouter>
    )
  }
}
export default RouteConfig
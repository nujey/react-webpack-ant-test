import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from '../views/home/home.jsx'
import User from '../views/userCenter/user.jsx'

class RouteConfig extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/home" component={home} />
        <Route path="/user/:id" component={User} />
      </Switch>
    )
  }
}
export default RouteConfig
import * as React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from 'history'
import Home from "../pages/home"
import Newer from "../pages/getStart"

const history = createBrowserHistory()

const hh = () => {
  return (
    <div>sdfsdfsdf</div>
  )
}

const Routers = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/getstart" component={Newer} />
      {/* <Route component={hh} /> */}
    </Switch>
  </Router>
)
export default Routers

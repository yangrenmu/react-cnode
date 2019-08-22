import * as React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import Home from "@/pages/home"
import Topics from '@/pages/topics'

const history = createBrowserHistory()

export default function BasicExample() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/topics" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

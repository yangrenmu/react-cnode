// import * as React from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import { createBrowserHistory } from 'history'
// import Home from "../pages/home"
// import Newer from "../pages/all"

// const history = createBrowserHistory()

// const Routers = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Home} />
//     </Switch>
//   </Router>
// )
// export default Routers
import * as React from "react"
import { Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"
import Home from "../pages/home"

const history = createBrowserHistory()

export default function BasicExample() {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={Home} />
      </div>
    </Router>
  )
}

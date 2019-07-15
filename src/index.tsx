import * as React from "react"
import * as ReactDom from "react-dom"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "./pages/home"
import Routers from "./router/router"
import "./common/normalize.css"

ReactDom.render(<Routers />, document.getElementById("root"))

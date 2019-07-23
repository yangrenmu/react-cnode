import * as React from "react"
import { Route, NavLink, Switch } from "react-router-dom"
import Topic from "../topic"
import "./content.scss"
export default class Content extends React.Component {
  defaultActive: any = (match: any, location: any) => {
    console.log('------', location)
    if (location.pathname === '/' || location.pathname === '/topic/all') return true
  }
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="header-bar">
            <NavLink isActive={this.defaultActive} activeClassName="active-link" className="link" to={{ pathname: "/topic/all" }}>全部</NavLink>
            <NavLink activeClassName="active-link" className="link" to={{ pathname: "/topic/good" }}>精华</NavLink>
            <NavLink activeClassName="active-link" className="link" to={{ pathname: "/topic/share" }}>分享</NavLink>
            <NavLink activeClassName="active-link" className="link" to={{ pathname: "/topic/ask" }}>问答</NavLink>
            <NavLink activeClassName="active-link" className="link" to={{ pathname: "/topic/job" }}>招聘</NavLink>
            <NavLink activeClassName="active-link" className="link" to={{ pathname: "/topic/dev" }}>客户端测试</NavLink>
          </div>
          <Switch>
            <Route path="/topic/:type" component={Topic} />
            <Route path="/" component={Topic} />
          </Switch>

        </div>
        <div className="side-bar">
          <div className="float">profile</div>
          <div className="float">topic</div>
          <div className="float">rank</div>
          <div className="float">friend community</div>
          <div className="float">app</div>
        </div>
      </div>
    )
  }
}

import * as React from "react"
import { Route, NavLink } from "react-router-dom"
import All from "../all"
import "./content.scss"
export default class Content extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div className="header-bar">
            <NavLink activeClassName="active-link" className="link" to="/all">全部</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/home/good">精华</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/home/share">分享</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/home/answer">问答</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/home/recruit">招聘</NavLink>
            <NavLink activeClassName="active-link" className="link" to="/home/dev">客户端测试</NavLink>
          </div>
          <Route path="/all" component={All} />
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

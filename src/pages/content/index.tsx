import * as React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Start from "../getStart"
import "./content.scss"
export default class Content extends React.Component {
  Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  )
  render() {
    return (
      <div className="main">
        <div className="header-bar">
          <ul>
            <li>
              <Link to={"/all"}>全部</Link>
            </li>
            <li>
              <Link to={"/home/good"}>精华</Link>
            </li>
            <li>
              <Link to={"/home/share"}>分享</Link>
            </li>
            <li>
              <Link to={"/home/answer"}>问答</Link>
            </li>
            <li>
              <Link to={"/home/recruit"}>招聘</Link>
            </li>
            <li>
              <Link to={"/home/dev"}>客户端测试</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route path="/all" component={Start} />
        </div>
      </div>
    )
  }
}

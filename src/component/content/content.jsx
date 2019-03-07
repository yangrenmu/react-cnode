import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default function Content() {
  return (
    <div className="content">
      <div className="header-bar">
        <ul className="">
          <li>全部</li>
          <li>精华</li>
          <li>分享</li>
          <li>问答</li>
          <li>招聘</li>
          <li>客户端测试</li>
        </ul>
      </div>
    </div>
  )
}

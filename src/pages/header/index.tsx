import * as React from "react"
import { Link } from "react-router-dom"
import Getstart from '../getStart'
import "./header.scss"

export default function Header() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="127.0.0.1">
          <img
            src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
            alt=""
          />
        </a>
        <form className="navbar-search" action="">
          <input name="q" className="search-text" type="text" />
        </form>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to={`/`}>首页</Link>
        </li>
        <li>
          <Link to={`/getstart`}>新手入门</Link>
        </li>
        <li>
          <Link to={`/api`}>API</Link>
        </li>
        <li>
          <Link to={`/about`}>关于</Link>
        </li>
        <li>
          <Link to={`/`}>注册</Link>
        </li>
        <li>
          <Link to={`/signin`}>登录</Link>
        </li>
      </ul>

    </div>
  )
}

import React from 'react'
import './header.scss'

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-inner">
          <a className="brand" href="127.0.0.1">
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" />
          </a>
          <form className="navbar-search" action="">
            <input name="q" className="search-text" type="text" />
          </form>
        </div>
        <ul className="navbar-list">
          <li>首页</li>
          <li>新手入门</li>
          <li>API</li>
          <li>关于</li>
          <li>注册</li>
          <li>登录</li>
        </ul>
      </div>
    )
  }
}

import React from 'react'
import './index.scss'

const Profile = () => {

  const renderLogin = () => {
    return (
      <div className="login">
        <p className="cnode-text">CNode：Node.js专业中文社区</p>
        <div className="cnode-login">
          您可以 登录 或 注册 , 也可以
        </div>
        <span className="github-login">通过GitHub登录</span>
      </div>
    )
  }

  const renderReply = () => {
    return (
      <div>

      </div>
    )
  }

  return (
    <div className="profile">
      {renderLogin()}
      {renderReply()}
    </div>
  )
}

export default Profile

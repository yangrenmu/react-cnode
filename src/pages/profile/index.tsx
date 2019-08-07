import React, { useEffect, useState } from 'react'
import './index.scss'
import { getTopicList } from '@/api';

const Profile = () => {
  const [topicList, setTopicList] = useState([])
  useEffect(() => {
    const payload = {
      page: 1,
      tab: 'all',
      limit: 40
    }
    getTopicList(payload).then((res: any) => {
      if (res.success) {
        const noReplyTopic = res.data.filter(item => item.reply_count === 0)
        setTopicList(noReplyTopic.slice(0, 5))
      }
    })
  }, [])

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
    const replyList = topicList.map((item: any) => {
      return (
        <span className="no-reply-topic" key={item.id}>{item.title}</span>
      )
    })
    return (
      <div className="no-reply">
        <span className="no-reply-title">无人回复的话题</span>
        {replyList}
      </div>
    )
  }

  const renderTop100 = () => {
    return (
      <div className="top100">
        <span className="top100-title">积分榜 TOP 100 &gt;&gt;</span>
        <span className="top100-user">21555 i5ting</span>
        <span className="top100-user">15545 alsotang</span>
        <span className="top100-user">9350 leapon</span>
        <span className="top100-user">8835 atian25</span>
        <span className="top100-user">8780 jiyinyiyong</span>
        <span className="top100-user">7245 yakczh</span>
        <span className="top100-user">6780 im-here</span>
        <span className="top100-user">6075 DevinXian</span>
        <span className="top100-user">5815 chapgaga</span>
        <span className="top100-user">5350 magicdawn</span>
      </div>
    )
  }

  const renderFriendShip = () => {
    return (
      <div className="frend-ship">
        <span className="frend-ship-title">友情社区</span>
        <img className="frend-ship-image" src="http://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="" />
        <img className="frend-ship-image" src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt="" />
        <img className="frend-ship-image" src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="" />
        <img className="frend-ship-image" src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="" />
      </div>
    )
  }

  return (
    <div className="profile">
      {renderLogin()}
      {renderReply()}
      {renderTop100()}
      {renderFriendShip()}
    </div>
  )
}

export default Profile

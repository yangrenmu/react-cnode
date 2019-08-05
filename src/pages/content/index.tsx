import React, { useState } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import Topic from "@/pages/Topic"
import Profile from "@/pages/profile"
import "./content.scss"

interface Props {
  history: {
    push: any
  }
}

const BAR = [{
  type: 'all',
  title: '全部'
}, {
  type: 'good',
  title: '精华'
}, {
  type: 'share',
  title: '分享'
}, {
  type: 'ask',
  title: '问答'
}, {
  type: 'job',
  title: '招聘'
}]

const Content = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const topicRouter = (type, index) => {
    setCurrentIndex(index)
    props.history.push(`/topic/${type}`)
  }
  const renderBar = () => {
    const barElement = BAR.map((item, index) => {
      return (
        <span key={item.type} className={index === currentIndex ? 'active-link link' : 'link'} onClick={() => { topicRouter(item.type, index) }}>{item.title}</span>
      )
    })
    return barElement
  }
  return (
    <div className="main">
      <div className="content">
        <div className="topic">
          <div className="header-bar">
            {renderBar()}
          </div>
          <Switch>
            <Route path="/topic/:type" component={Topic} />
            <Route path="/" component={Topic} />
          </Switch>
        </div>
        <div className="side-bar">
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Content)

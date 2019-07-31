import React, { useState, useEffect } from "react"
import moment from 'moment'
import { getTopicList } from '@/api'
import './index.scss'

interface Props {
  match: {
    params: any
  }
}

const Topic = (props: Props) => {
  const [topicList, setTopicList] = useState([])
  const { type = 'all' } = props.match.params
  useEffect(() => {
    const payload = {
      page: 1,
      tab: type,
      limit: 20
    }
    getTopicList(payload).then((res: any) => {
      if (res.success) {
        setTopicList(res.data)
      }
    })
  }, [type])

  const renderList = (topicList) => {
    const listElement = topicList.map((item, index) => {
      // 汉化 moment
      moment.locale('zh-cn')
      const replayAt = moment(item.last_reply_at).fromNow()
      return (
        <div className="topic-item" key={index}>
          <div className="topic-detail">
            <img className="topic-detail-avatar" src={item.author.avatar_url} alt="" />
            <span className="topic-detail-type">{'置顶'}</span>
            <span className="topic-detail-title">{item.title}</span>
          </div>
          <div className="topic-reply">
            <span className="topic-reply-count">{`${item.reply_count}`}</span>
            <span className="topic-reply-visit-count">{`/${item.visit_count}`}</span>
            <span className="topic-reply-at">{`${replayAt}`}</span>
          </div>
        </div>
      )
    })
    return listElement
  }

  return (
    <div className="topic-list">
      {topicList.length > 0 ? renderList(topicList) : null}
    </div>
  )
}

export default Topic

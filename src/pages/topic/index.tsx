import React, { useState, useEffect } from "react"
import { getTopic } from '@/api'

// interface Response {
//   success: boolean,
//   data: Array<any>
// }

const Topic = () => {
  const [topicList, setTopicList] = useState([])
  useEffect(() => {
    getTopic().then((res: any) => {
      if (res.success) {
        setTopicList(res.data)
      }
    })
  }, [])

  const renderList = (topicList) => {
    const listElement = topicList.map((item, index) => {
      return (
        <div key={index}>haha</div>
      )
    })
    return listElement
  }

  return (
    <div>
      {topicList.length > 0 ? renderList(topicList) : null}
    </div>
  )
}

export default Topic

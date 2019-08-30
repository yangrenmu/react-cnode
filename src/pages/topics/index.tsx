import React, { useState, useEffect } from 'react'
import QueryString from 'query-string'
import marked from 'marked'
import { getTopicContent } from '@/api'

const Topics = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    const { id } = QueryString.parse(window.location.search)
    const payload = {
      topicId: id
    }
    getTopicContent(payload).then((res: any) => {
      if (res.success) {
        setContent(res.data.content)
      }
    })
  }, [])
  function createMarkup() {
    return { __html: marked(content) };
  }
  return (
    <div dangerouslySetInnerHTML={createMarkup()} />
  )
}
export default Topics

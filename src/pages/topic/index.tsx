import React, { useState, useEffect } from "react"
import { getTopic } from '@/api'

const Topic = () => {
  const [data] = useState<Array<any>>()
  useEffect(() => {
    getTopic().then(res => {
      console.log('-----', res)
    })
  })
  return (
    <div>
      {data}
    </div>
  )
}

export default Topic

import http from '@/server'

export const getTopicList = (params) => http.get('/topics', { params })

export const getTopicContent = (params) => http.get(`/topics/${params.topicId}`)

import http from '@/server'

export const getTopicList = (params) => http.get('/topics', { params })

export const getTopicContent = (params) => http.get(`/topic/${params.topicId}`)

// 获取主体详情
// export const getT

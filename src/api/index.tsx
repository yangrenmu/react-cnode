import http from '@/server'

export const getTopic = () => http.get('/topics')

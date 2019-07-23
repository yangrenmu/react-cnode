import axios from 'axios'
import qs from 'qs'
import config from 'config'

// 创建 axios 实例
const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 10 * 1000
})

// 拦截器
instance.interceptors.request.use(
  (config: any) => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  error => Promise.reject(error.response)
)

export default instance

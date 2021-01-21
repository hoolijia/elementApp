import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui'

const service = axios.create({
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  // baseURL: process.env.VUE_APP_BASE_API,
  // timeout: 50000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }

    // 加载动画
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    Indicator.close()
    return response
  },
  error => {
    // 错误提醒
    Indicator.close()
    return Promise.reject(error)
  }
)

export default service

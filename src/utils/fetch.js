import axios from 'axios'
import store from '../store'
import router from '../router'
import Vue from 'vue'
import iView from 'iview'

Vue.use(iView)

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 0                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  if (store.state.user.token) {
    config.headers['Authorization'] = store.state.user.token
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code
    // -1:Token 未登录 999:令牌无效
    if (code === -1 || code === 999) {
      iView.Notice.error({
        title: '提示',
        desc: response.data.msg
      })
      // 登出
      store.dispatch('FedLogOut').then(() => {
        router.push({ path: '/login' })
      })
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error)// for debug
    iView.Notice.error({
      title: '提示',
      desc: error.message
    })
    return Promise.reject(error)
  }
)

export default service

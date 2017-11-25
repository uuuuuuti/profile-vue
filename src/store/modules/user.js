
import { loginByUsername, refreshToken } from '@/apis/login'
const user = {
  state: {
    user: sessionStorage.getItem('user'),
    token: sessionStorage.getItem('Authorization'),
    username: sessionStorage.getItem('username')
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    }
  },
  actions: {
    loginByUsername ({commit}, loginForm) {
      return new Promise((resolve, reject) => {
        loginByUsername(loginForm.username, loginForm.password).then(response => {
          const obj = response.data
          if (obj.success) {
            let tokenObj = obj.data.tokenObj
            let userObj = obj.data.user
            let token = tokenObj.tokenType + ' ' + tokenObj.accessToken
            sessionStorage.setItem('Authorization', token)
            sessionStorage.setItem('user', userObj)
            sessionStorage.setItem('username', userObj.username)
            commit('SET_TOKEN', token)
            commit('SET_USER', userObj)
            commit('SET_USERNAME', userObj.username)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    refreshToken ({commit}) {
      return new Promise((resolve, reject) => {
        refreshToken().then(response => {
          const obj = response.data
          if (obj.success) {
            let token = response.data.obj.tokenType + ' ' + response.data.obj.accessToken
            sessionStorage.setItem('Authorization', token)
            commit('SET_TOKEN', token)
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut ({commit}) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_USER', '')
        sessionStorage.clear()
        resolve()
      })
    }
  }
}

export default user

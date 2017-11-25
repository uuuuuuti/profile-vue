import fetch from '@/utils/fetch'
import sysApis from './apis'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return fetch({
    url: sysApis.sys.tokens.login,
    method: 'post',
    data
  })
}

export function refreshToken () {
  return fetch({
    url: sysApis.sys.tokens.refresh,
    method: 'get'
  })
}

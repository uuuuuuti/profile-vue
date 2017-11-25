import fetch from '@/utils/fetch'
import sysApis from '../apis'

/**
 * 保存Author信息
 */
export function saveAuthorInfo (params) {
  return fetch({
    url: sysApis.sys.author.save,
    method: 'post',
    params
  })
}

/**
 * 更新Author信息
 */
export function updateAuthorInfo (params) {
  return fetch({
    url: sysApis.sys.author.update,
    method: 'post',
    params
  })
}

/**
 * 删除Author信息
 */
export function deleteAuthorInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.author.delete,
    method: 'get',
    params: data
  })
}

/**
 * 获取Author信息
 */
export function getAuthorInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.author.get,
    method: 'get',
    params: data
  })
}

/**
 * 查找Author信息
 */
export function findAuthorInfo (params) {
  return fetch({
    url: sysApis.sys.author.find,
    method: 'post',
    params
  })
}

export function listAuthorInfo (params) {
  return fetch({
    url: sysApis.sys.author.list,
    method: 'post',
    params
  })
}




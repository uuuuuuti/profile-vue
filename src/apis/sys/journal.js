import fetch from '@/utils/fetch'
import sysApis from '../apis'

/**
 * 保存Journal信息
 */
export function saveJournalInfo (params) {
  return fetch({
    url: sysApis.sys.journal.save,
    method: 'post',
    params
  })
}

/**
 * 更新Journal信息
 */
export function updateJournalInfo (params) {
  return fetch({
    url: sysApis.sys.journal.update,
    method: 'post',
    params
  })
}

/**
 * 删除Journal信息
 */
export function deleteJournalInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.journal.delete,
    method: 'get',
    params: data
  })
}

/**
 * 获取Journal信息
 */
export function getJournalInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.journal.get,
    method: 'get',
    params: data
  })
}

/**
 * 查找Journal信息
 */
export function findJournalInfo (params) {
  return fetch({
    url: sysApis.sys.journal.find,
    method: 'post',
    params
  })
}

export function listJournalInfo (params) {
  return fetch({
    url: sysApis.sys.journal.list,
    method: 'post',
    params
  })
}


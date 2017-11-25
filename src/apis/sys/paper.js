import fetch from '@/utils/fetch'
import sysApis from '../apis'

/**
 * 保存Paper信息
 */
export function savePaperInfo (params) {
  return fetch({
    url: sysApis.sys.paper.save,
    method: 'post',
    params
  })
}

/**
 * 更新Paper信息
 */
export function updatePaperInfo (params) {
  return fetch({
    url: sysApis.sys.paper.update,
    method: 'post',
    params
  })
}

/**
 * 删除Paper信息
 */
export function deletePaperInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.paper.delete,
    method: 'get',
    params: data
  })
}

/**
 * 获取Paper信息
 */
export function getPaperInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.paper.get,
    method: 'get',
    params: data
  })
}

/**
 * 查找Paper信息
 */
export function findPaperInfo (params) {
  return fetch({
    url: sysApis.sys.paper.find,
    method: 'post',
    params
  })
}

export function listPaperInfo (params) {
  return fetch({
    url: sysApis.sys.paper.list,
    method: 'post',
    params
  })
}

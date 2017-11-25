import fetch from '@/utils/fetch'
import sysApis from '../apis'

/**
 * 保存Unit信息
 */
export function saveUnitInfo (params) {
  return fetch({
    url: sysApis.sys.unit.save,
    method: 'post',
    params
  })
}

/**
 * 更新Unit信息
 */
export function updateUnitInfo (params) {
  return fetch({
    url: sysApis.sys.unit.update,
    method: 'post',
    params
  })
}

/**
 * 删除Unit信息
 */
export function deleteUnitInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.unit.delete,
    method: 'get',
    params: data
  })
}

/**
 * 获取Unit信息
 */
export function getUnitInfo (id) {
  const data = {
    id
  }
  return fetch({
    url: sysApis.sys.unit.get,
    method: 'get',
    params: data
  })
}

/**
 * 查找Unit信息
 */
export function findUnitInfo (params) {
  return fetch({
    url: sysApis.sys.unit.find,
    method: 'post',
    params
  })
}

export function listUnitInfo (params) {
  return fetch({
    url: sysApis.sys.unit.list,
    method: 'post',
    params
  })
}

export function updateUnitDetailInfo () {
  return fetch({
    url: sysApis.sys.unit.updateInfo,
    method: 'get'
  })
}

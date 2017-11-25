import fetch from '@/utils/fetch'
import sysApis from '../apis'

export function getMetrics () {
  return fetch({
    url: sysApis.sys.dashboard.panels,
    method: 'get'
  })
}

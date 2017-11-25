let sysApis = {
  sys: {
    dashboard: {
      panels: 'panels'
    },
    paper: {
      save: 'sys/paper/save',
      update: 'sys/paper/update',
      get: 'sys/paper/get',
      find: 'sys/paper/find',
      list: 'sys/paper/list'
    },
    author: {
      save: 'sys/author/save',
      update: 'sys/author/update',
      get: 'sys/author/get',
      find: 'sys/author/find',
      list: 'sys/author/list'
    },
    unit: {
      save: 'sys/unit/save',
      update: 'sys/unit/update',
      get: 'sys/unit/get',
      find: 'sys/unit/find',
      list: 'sys/unit/list',
      updateInfo: 'sys/unit/updateInfo'
    },
    journal: {
      save: 'sys/journal/save',
      update: 'sys/journal/update',
      get: 'sys/journal/get',
      find: 'sys/journal/find',
      list: 'sys/journal/list'
    },
    system: {
      save: 'sys/system/save',
      update: 'sys/system/update',
      delete: 'sys/system/delete',
      get: 'sys/system/get',
      find: 'sys/system/find',
      getSystemTree: 'sys/system/getSystemTree'
    },
    module: {
      save: 'sys/module/save',
      update: 'sys/module/update',
      delete: 'sys/module/delete',
      get: 'sys/module/get',
      find: 'sys/module/find',
      getModuleTree: 'sys/module/getModuleTree'
    },
    resource: {
      save: 'sys/resource/save',
      update: 'sys/resource/update',
      delete: 'sys/resource/delete',
      get: 'sys/resource/get',
      find: 'sys/resource/find',
      tree: 'sys/resource/tree'
    },
    menu: {
      save: 'sys/menu/save',
      update: 'sys/menu/update',
      delete: 'sys/menu/delete',
      get: 'sys/menu/get',
      find: 'sys/menu/find',
      tree: 'sys/menu/tree',
      ctree: 'sys/menu/ctree'
    },
    org: {
      save: 'sys/org/save',
      update: 'sys/org/update',
      delete: 'sys/org/delete',
      get: 'sys/org/get',
      find: 'sys/org/find'
    },
    group: {
      save: 'sys/group/save',
      update: 'sys/group/update',
      delete: 'sys/group/delete',
      get: 'sys/group/get',
      find: 'sys/group/find',
      grantRole: 'sys/group/grantRole',
      getGroupTree: 'sys/group/getGroupTree'
    },
    role: {
      save: 'sys/role/save',
      update: 'sys/role/update',
      delete: 'sys/role/delete',
      get: 'sys/role/get',
      find: 'sys/role/find',
      grantResource: 'sys/role/grantResource',
      grantMenus: 'sys/role/grantMenus'
    },
    user: {
      save: 'sys/user/register',
      update: 'sys/user/update',
      delete: 'sys/user/delete',
      get: 'sys/user/get',
      find: 'sys/user/find',
      lockOrUnlock: 'sys/user/lockOrUnlock',
      grantGroup: 'sys/user/grantGroup'
    },
    syslog: {
      find: 'sys/syslog/find',
      get: 'sys/syslog/get'
    },
    tokens: {
      login: 'auth/login',
      refresh: 'auth/refresh'
    }
  }
}

export default sysApis

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Dashboard from '@/pages/sys/Dashboard'
import Dashboard2 from '@/pages/commons/Dashboard'
import BasicTable from '@/pages/commons/BasicTable'
import iView from 'iview'
import store from '@/store'
import EditableTable from '@/pages/commons/EditableTable'
import Widget from '@/pages/commons/Widget'
import Panels from '@/pages/commons/Panels'
import ImageList from '@/pages/commons/ImageList'
import Charts from '@/pages/commons/Charts'
import Login from '@/pages/Login'
import LockScreen from '@/pages/commons/LockScreen'
import PaperResource from '@/pages/sys/PaperResource'
import AuthorResource from '@/pages/sys/AuthorResource'
import UnitResource from '@/pages/sys/UnitResource'
import JournalResource from '@/pages/sys/JournalResource'
import authorDetail from '@/pages/sys/AuthorDetail'
import ChartsPage from '@/pages/macroprofile/ChartsPage'
import AuthorPage from '@/pages/sys/AuthorPage'
import UnAuth from '@/pages/401'

Vue.use(Router)
const routes = [
  {
    path: '/login',
    name: 'Login',
    components: {
      blank: Login
    }
  },
  {
    path: '/401',
    name: '无权访问',
    component: UnAuth
  },
  {
    path: '/lockscreen',
    name: 'Lockscreen',
    components: {
      blank: LockScreen
    }
  },
  {
    path: '/',
    name: '首页',
    component: Home,
    redirect: '/sys/dashboard',
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/sys',
    name: '基础系统',
    component: Home,
    redirect: '/sys/dashboard',
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: '仪表盘',
        component: Dashboard,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'dashboard2',
        name: '仪表盘2',
        component: Dashboard2,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'paper',
        name: 'Paper数据',
        component: PaperResource,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'author',
        name: 'Author数据',
        mata: {
          requireAuth: true
        },
        component: AuthorResource
      },
      {
        path: 'unit',
        name: 'Unit数据',
        component: UnitResource,
        meta: {
          requireAuth: true,
          isUpdate: true
        }
      },
      {
        path: 'journal',
        name: 'Journal数据',
        component: JournalResource,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'author-detail',
        name: 'authorDetail',
        component: authorDetail,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'macro/profile/:type/:role/:method',
        name: 'marcoProfile',
        component: ChartsPage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'macro/profile/:type/:role/',
        name: 'marcoProfile2',
        component: ChartsPage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'macro/profile/author/:id',
        name: 'authorPage',
        component: AuthorPage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'macro/profile/query/name/:name',
        name: 'authorPageName',
        component: AuthorPage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'widget',
        name: 'Widget',
        component: Widget,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'panels',
        name: 'Panels',
        component: Panels,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'imagelist',
        name: 'ImageList',
        meta: {
          requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
        },
        component: ImageList
      },
      {
        path: 'basic-table',
        name: 'BasicTable',
        component: BasicTable,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'editable-table',
        name: 'EditableTable',
        component: EditableTable,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'charts',
        name: 'Charts',
        component: Charts,
        meta: {
          requireAuth: true
        }
      }
    ]
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  if (store.state.user.token) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      next()
    }
  } else {
    // 不需权限验证 直接跳转， 否则跳到登录页面
    if (!to.meta.requireAuth) {
      next()
    } else {
      next('/login')
      iView.LoadingBar.finish()
    }
  }
})
router.afterEach(route => {
  iView.LoadingBar.finish()
  console.log(`成功浏览到: ${route.path}`)
})
export default router

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Dashboard',
//       component: Dashboard
//     },
//     {
//       path: '/basic-table',
//       name: 'BasicTable',
//       component: BasicTable
//     },
//     {
//       path: '/editable-table',
//       name: 'EditableTable',
//       component: EditableTable
//     },
//     {
//       path: '/widget',
//       name: 'Widget',
//       component: Widget
//     },
//     {
//       path: '/charts',
//       name: 'Charts',
//       component: Charts
//     }
//   ]
// })
/**
 * 每个钩子方法接收三个参数：

to: Route: 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

 */
//   {
//     path: '/',
//     component: Home,
//     children: [
//       {
//         path: '/',
//         name: 'Dashboard',
//         component: Dashboard
//       },
//       {
//         path: 'paper-resource',
//         name: 'PaperResource',
//         component: PaperResource
//       },
//       {
//         path: 'author-resource',
//         name: 'AuthorResource',
//         mata: {
//           requireAuth: true
//         },
//         component: AuthorResource
//       },
//       {
//         path: 'unit-resource',
//         name: 'UnitResource',
//         component: UnitResource
//       },
//       {
//         path: 'journal-resource',
//         name: 'JournalResource',
//         component: JournalResource
//       },
      // {
      //   path: 'widget',
      //   name: 'Widget',
      //   component: Widget
      // },
      // {
      //   path: 'panels',
      //   name: 'Panels',
      //   component: Panels
      // },
      // {
      //   path: 'imagelist',
      //   name: 'ImageList',
      //   meta: {
      //     requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      //   },
      //   component: ImageList
      // },
      // {
      //   path: 'basic-table',
      //   name: 'BasicTable',
      //   component: BasicTable
      // },
      // {
      //   path: 'editable-table',
      //   name: 'EditableTable',
      //   component: EditableTable
      // },
      // {
      //   path: 'charts',
      //   name: 'Charts',
      //   component: Charts
      // }
//     ]
//   }

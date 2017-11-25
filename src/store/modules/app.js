// import { getMenus } from '@/apis/menus'

// const app = {
//   state: {
//     menus: JSON.parse(sessionStorage.getItem('APP_MENUS')) || []
//   },
//   mutations: {
//     SET_MENUS: (state, menus) => {
//       state.menus = menus
//     }
//   },
//   actions: {
//     getMenus ({commit}, sid) {
//       return new Promise((resolve, reject) => {
//         getMenus(sid).then(response => {
//           const obj = response.data
//           if (obj.success) {
//             sessionStorage.setItem('APP_MENUS', JSON.stringify(obj.obj))
//             commit('SET_MENUS', obj.obj)
//           }
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//       })
//     }
//   }
// }

// export default app

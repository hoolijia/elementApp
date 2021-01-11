import axios from 'axios'

const service = axios.create({
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  // baseURL: process.env.VUE_APP_BASE_API,
  // timeout: 50000
})

// service.interceptors.request.use(
//   config => {
//     const userInfo = JSON.parse(localStorage.getItem('user'))
//     if (userInfo){
//       config.headers["userId"] = userInfo.userId
//     }
//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )

export default service

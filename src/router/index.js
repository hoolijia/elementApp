import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRouter from './login/router'
import HomeRouter from './home/router'
import OrderRouter from './order/router'
import MeRouter from './me/router'
import AddressRouter from './address/router'
import CityRouter from './city/router'
import AddressManagerRouter from './addressManager/router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/main/Index'),
    children: [
      {
        path: "",
        redirect: "/home"
      },
      ...HomeRouter,
      ...OrderRouter,
      ...MeRouter,
      ...AddressRouter,
      ...CityRouter
    ]
  },
  ...LoginRouter,
  ...AddressManagerRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false
  if (to.path === "/login") {
    next()
  } else {
    isLogin ? next() : next("/login")
  }
})

export default router

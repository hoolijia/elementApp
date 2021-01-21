export default [
  {
    path: '/myAddress',
    name: 'myAddress',
    component: () => import('@/views/addressManager/myAddress/Index')
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    component: () => import('@/views/addressManager/addAddress/Index')
  },
]

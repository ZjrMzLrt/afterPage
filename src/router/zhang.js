let arr = [
  {
    path: '/reservation',
    component: resolve => require(['@/views/my/reservation'], resolve)
  },
  {
    path: '/alreadyBuy',
    component: resolve => require(['@/views/my/alreadyBuy'], resolve)
  },
  {
    path: '/myAddress',
    component: resolve => require(['@/views/my/myAddress'], resolve)
  }
  
]
export default arr

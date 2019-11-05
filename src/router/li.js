let arr = [
  {
    path: '/home',
    component: resolve => require(['@/views/home/home'], resolve)
  },
  {
    path: '/caurse',
    component: resolve => require(['@/views/home/caurse'], resolve)
  },
  {
    path: '/teacher',
    component: resolve => require(['@/views/home/teacher'], resolve)
  },
  {
    path: '/audios',
    component: resolve => require(['@/views/home/audios'], resolve)
  }
]
export default arr

let arr = [
  {
    path: '/news',
    component: resolve => require(['@/views/news/news'], resolve)
  },
  {
    path: '/style',
    component: resolve => require(['@/views/styles/style'], resolve)
  }
]
export default arr

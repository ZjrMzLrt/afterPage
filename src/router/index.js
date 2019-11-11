import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import li from './li'
import zhang from './zhang'
import meng from './meng'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/home',
      children: [
        ...meng,
        ...li,
        ...zhang
      ]
    },
    {
      path: '/login',
      component: resolve => require(['@/views/home/login'], resolve)
    }, {
      path: '/join',
      component: resolve => require(['@/views/home/join'], resolve)
    }
  ]
})

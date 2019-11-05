import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import li from './li'
import zhang from './zhang'
import meng from './meng'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        ...meng,
        ...li,
        ...zhang
      ]
    }
  ]
})

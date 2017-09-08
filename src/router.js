/**
 * Created by cjun on 2017/1/14.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home'
import News from './pages/News'

const router = new VueRouter({
  routes: [
    {path: '/', components: {app:Home}, redirect: '/pages/Home'},
    {path: '/pages/Home', components: {app:Home}},
    {path: '/pages/News', components: {app:News}}
  ]
})
export default router


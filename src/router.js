import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/gallery/1'
    },
    {
      path: '/gallery/:page',
      name: 'gallery',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    }
  ]
})


/**
 * @param name Bezeichner der Vue.js Component
 * @param options
 */
Vue.component();
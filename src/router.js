import Vue from 'vue';
import Router from 'vue-router';
import Gallery from './views/Gallery.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gallery/1'
    },
    {
      path: '/gallery/:page',
      name: 'gallery',
      component: Gallery
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
});

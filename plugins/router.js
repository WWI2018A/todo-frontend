import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '',
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/about',
      name: 'secret',
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (router.app.$keycloak.authenticated) {
        next()
    } else {
        window.location.replace('/')
    }
  } else {
        next()
  }
})

export default router
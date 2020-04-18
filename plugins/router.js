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
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'home' && !(router.app.$keycloak.authenticated)){
    window.location.replace('/')
  } else{
    next()
  }
})

export default router
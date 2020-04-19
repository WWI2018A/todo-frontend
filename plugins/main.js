import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
import Vue from 'vue'
import router from './router'
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueKeycloakJs, {
  init: {
    onLoad: 'check-sso'
  },
  config: {
    url: 'https://9bedecec-b4fa-4c99-920a-ad988c144210.ma.bw-cloud-instance.org:8443/auth/',
    realm: 'todo',
    clientId: 'vue-test-app'
  },
  logout: {
    redirectUri: 'http://localhost:3000/'
  },
  onReady: (keycloak) => {
    tokenInterceptor()
    new Vue({
      router
    })
  }
})

function tokenInterceptor () {
  axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
    return config
  }, error => {
    return Promise.reject(error)
  })
}

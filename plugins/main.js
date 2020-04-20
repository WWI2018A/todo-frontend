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
    url: 'https://0f1e94dc-2f46-44c5-8aba-b4cc2da9bfb5.ma.bw-cloud-instance.org/api/v1/auth',
    realm: 'todo-auth',
    clientId: 'todo-frontend'
  },
  logout: {
    redirectUri: 'http://0f1e94dc-2f46-44c5-8aba-b4cc2da9bfb5.ma.bw-cloud-instance.org/*'
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

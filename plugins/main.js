import VueKeycloakJs from '@dsb-norge/vue-keycloak-js'
import Vue from 'vue'
import App from '../pages/index.vue'
import router from './router'

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
  onReady: (keycloak) => {
    new Vue({
      router
    })
  }
})

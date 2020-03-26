<template>

</template>


<script>
    export default {
        name: "login"
    }

    let initOptions = {
      url: 'https://193.196.55.125:8443/auth/', realm: 'todo', clientId: 'vue-test-app', onLoad:'login-required'
    }

    let keycloak = Keycloak(initOptions);

    keycloak.init({ onLoad: initOptions.onLoad }).success((auth) =>{

      if(!auth) {
        window.location.reload();
      } else {
        Vue.$log.info("Authenticated");
      }

      new Vue({
        render: h => h(App),
      }).$mount('#app')


      localStorage.setItem("vue-token", keycloak.token);
      localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

      setTimeout(() =>{
        keycloak.updateToken(70).success((refreshed)=>{
          if (refreshed) {
            Vue.$log.debug('Token refreshed'+ refreshed);
          } else {
            Vue.$log.warn('Token not refreshed, valid for '
              + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
          }
        }).error(()=>{
          Vue.$log.error('Failed to refresh token');
        });


      }, 60000)

    }).error(() =>{
      Vue.$log.error("Authenticated Failed");
    });
</script>

<style scoped>

</style>


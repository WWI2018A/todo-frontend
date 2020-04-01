import * as Keycloak from 'keycloak-js'



var keycloak = new Keycloak({
  url: 'https://193.196.55.125:8443/auth/',
  realm: 'todo',
  clientId: 'vue-test-app'
});

keycloak.init({onLoad: 'login-required'}).then(function(authenticated) {
  alert(authenticated ? 'authenticated' : 'not authenticated');
}).catch(function() {
  alert('failed to initialize');
});

function logout() {
  keycloak.logout('https://193.196.55.125:8443/auth/realms/todo/protocol/openid-connect/logout?redirect_uri=encodedRedirectUri')
}

/*
var loadData = function () {
  document.getElementById('username').innerText = keycloak.subject;
  var url = 'https://193.196.55.125:8443/auth/';
  var req = new XMLHttpRequest();
  req.open('GET', url, true);
  req.setRequestHeader('Accept', 'application/json');
  req.setRequestHeader('Authorization', 'Bearer ' + keycloak.token);
  req.onreadystatechange = function () {
    if (req.readyState == 4) {
      if (req.status == 200) {
        alert('Success');
      } else if (req.status == 403) {
        alert('Forbidden');
      }
    }
  };
  req.send();
};
*/

/*
keycloak.updateToken(6000).then(function() {
  loadData();
}).catch(function() {
  alert('Failed to refresh token');
});
 */

<template>
  <header>
    <div class="navigation">
      <nuxt-link to="/" class="logo">ToDo-App <i class="fas fa-check-double"></i></nuxt-link>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/todoLists" v-if="$keycloak.authenticated">ToDo-Listen</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" v-if="$keycloak.authenticated">About</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="login">
      <ul>
        <li>
          <nuxt-link to="/profiles" v-if="$keycloak.authenticated" v-b-tooltip.hover v-bind:title="$keycloak.userName"><i class='fas fa-user'></i></nuxt-link>
        </li>
        <li>
          <button v-on:click="$keycloak.logoutFn" v-if="$keycloak.authenticated">Logout</button>
          <button v-on:click="$keycloak.login" v-else>Login</button>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
  header, .navigation {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgb(59, 59, 59);
    font-family: Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
  }

  .logo {
    color: white;
    font-size: 25px;
    margin: 0 10px;
    margin-left: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li, i {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }
  
  .login{
    color: white;
    margin-right: 40px;
  }
</style>

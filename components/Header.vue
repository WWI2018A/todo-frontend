<template>
  <header>
    <nuxt-link to="/" class="logo">ToDo-App <i class="fas fa-check-double"></i></nuxt-link>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/todoLists" v-if="$keycloak.authenticated">ToDo-Listen</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" v-if="$keycloak.authenticated">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profiles" v-if="$keycloak.authenticated">Profile</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="logbtn">
    <button  v-on:click="$keycloak.logoutFn" v-if="$keycloak.authenticated">Log out</button>
    <button  v-on:click="$keycloak.login" v-if="!($keycloak.authenticated)">Login</button>
    </div>
  </header>
</template>

<style scoped>
  header {
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

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .logbtn {
    float: right;
    margin-right: 40px;
    text-align:left;
  }
</style>

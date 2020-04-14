<template>
  <header>
    <h1>Logo</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/" >Starting Page</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/recipes" v-if="$keycloak.authenticated">Recipes</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about" v-if="$keycloak.authenticated">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profiles">Profile</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #521751;
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
</style>

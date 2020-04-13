<template>
  <div id="app">
    <h1>Das ist die Login seite</h1>
    <p>Tutorial: https://www.youtube.com/watch?v=nteDXuqBfn0</p>
    <p>Mit 'npm run dev' startet man den Server </p>
    <p>Test</p>
    <p>Test3</p>
    <router-link to="/todoLists">Zur Todo Listen Ansicht</router-link>
    <button v-on:click="$keycloak.logoutFn" v-if="$keycloak.authenticated">Log out</button>
    <button v-on:click="$keycloak.login" v-if="!($keycloak.authenticated)">Login</button>
    <p>{{$keycloak.userName}}</p>
  </div>
</template>


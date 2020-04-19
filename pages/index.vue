<template>
  <div class="background">
    <div class="center">
      <h1>Herzlich Willkommen in der ToDo-App</h1>
      <p>Tutorial: https://www.youtube.com/watch?v=nteDXuqBfn0</p>
      <p>Mit 'npm run dev' startet man den Server </p>
      <p v-if="$keycloak.authenticated">Hallo {{$keycloak.userName}}</p>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: rgb(186, 214, 229);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  width: 55%;
  background-color: rgb(255, 255, 255);
  height: 60vh auto;
  text-align: center;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
  -webkit-box-shadow: 10px 10px 18px 4px rgba(92, 92, 92, 0.78);
  -moz-box-shadow: 10px 10px 18px 4px rgba(92, 92, 92, 0.78);
  box-shadow: 10px 10px 18px 4px rgba(92, 92, 92, 0.78);
}

.center h1 {
  font-weight: 400;
}

.center p {
  font-weight: lighter;
  letter-spacing: 1px;
  width: 70%;
  margin: 10px auto;
}

</style>

<template>
  <div class="background">
    <div class="center">
      <h1>Herzlich Willkommen in der ToDo-App</h1>
      <p>Tutorial: https://www.youtube.com/watch?v=nteDXuqBfn0</p>
      <p>Mit 'npm run dev' startet man den Server </p>
      <p>Hier kann man sich ein-/ ausloggen: </p>
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
  font-family: Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px rgb(59, 59, 59);
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

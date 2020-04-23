<template>
  <div class="background">
    <div class="center">
      <h1 v-if="$keycloak.authenticated">Hallo {{$keycloak.userName}},</h1>
      <h1 v-if="$keycloak.authenticated">herzlich Willkommen in der ToDo-App</h1>
      <h1 v-else>Herzlich Willkommen in der ToDo-App</h1>
      <h2>Write It. Do It. Check It. <i class="fas fa-check-double"></i></h2>
      <p>Unsere ToDo-App ermöglicht das Erstellen einer Vielzahl von unterschiedlichen ToDoListen. Eine übersichtliche Ansicht aller vom User erstellten Listen sowie eine detaillierte Anzeige der verschiedenen ToDos in den jeweiligen Listen, unterstützt Sie im Alltag stets alles im Blick zu haben und genau zu wissen, was bis wann erledigt sein muss.</p>
      <p>Überzeugen Sie sich von unserer benutzerfreundlichen und modern gestalteten App und Sie werden Anderen beim Thema Aufgabenverwaltung immer einen Schritt voraus sein.</p>
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

.center h2 {
  font-size: x-large;
  margin-top: 20px;
  color: rgb(132, 159, 174);
}

.center p {
  font-weight: lighter;
  letter-spacing: 1px;
  width: 70%;
  margin: 10px auto;
  margin-top: 20px;
}

</style>

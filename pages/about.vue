<template>
<section>
    <div class="center">
        <h1>WWI2018A</h1>
        <p>Das Team hinter der ToDo-App</p>
        <h2>{{$keycloak.parsedToken}}</h2>
        <div class="team">
            <div class="teamcard">
                <h3><i class="fas fa-users"></i> Projektleitung</h3>
                <p>Sandina Kecap</p>
                <p>Jan Müller</p>
                <p>Johannes Wiest</p>
                <p>Jannik Wolf</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-archway"></i> API Gateway</h3>
                <p>Julian Börste</p>
                <p>Lea Henrich</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-sign-in-alt"></i> Auth Client</h3>
                <p>Alişan Ataş</p>
                <p>Nils Lachnit</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-sign-out-alt"></i> Auth Service</h3>
                <p>Luca Mancilik</p>
                <p>Chris McQueen</p>
                <p>Steffen Montag</p>
                <p>Jeremias Schneider</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-database"></i> Datenbank Cluster</h3>
                <p>Cara Heck</p>
                <p>Simon Hirsch</p>
                <p>Lars Kraus</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-network-wired"></i> Infrastruktur</h3>
                <p>Janina Kienle</p>
                <p>Nico Kindervater</p>
                <p>Daniel Rehm</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-desktop"></i> Monitoring Service</h3>
                <p>Leon Bossert</p>
                <p>Yannik Walter</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-address-card"></i> Profile Service</h3>
                <p>Angela Hornek</p>
                <p>Daniel Schönfeld</p>
                <p>Marlon Werth</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-list"></i> ToDo Service</h3>
                <p>Benedict Bühler</p>
                <p>Marika Christ</p>
                <p>Anna-Maria Osterroth</p>
            </div>
            <div class="teamcard">
                <h3><i class="fas fa-code"></i> User Interface</h3>
                <p>Vithilaka Chandrabalu</p>
                <p>Nathalie Klingler</p>
                <p>Felix Raff</p>
                <p>Lena Strohmaier</p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
}
</script>

<style scoped>
section {
    background-color: rgb(186, 214, 229);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
}

.center {
  width: 55%;
  background-color: rgb(255, 255, 255);
  height: 60vh auto;
  text-align: center;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px rgb(59, 59, 59);
}

.team {
    display: flex;
    flex-flow: row wrap;
}

.teamcard {
    width: 45%;
    margin: 12px;
    margin-bottom: 23px;
}

h1{
    text-align:center;
}
</style>

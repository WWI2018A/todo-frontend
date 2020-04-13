<template>
  <section>
    <h1>Listenname: </h1>
    <h2>Enthaltene Todos:</h2>
    <ul>
      <Todo v-for="todo in todos" v-bind:key="todo.id"
            v-bind:todo="todo"/>
    </ul>
    <form>
    <button type="button">bearbeiten</button>
    <button type="button">löschen</button>
    <input type="button" value="zurück" onclick="history.go(-1)">
    </form>
  </section>
</template>

<script>
  import axios from 'axios';
  import Todo from "../../components/Todo";

  export default {
    components: {Todo},

    // TodoList um den Namen der jeweiligen Liste über den Todos anzuzeigen --> funzt noch nicht
    props: {
      todoList: {
        id: String,
        createdDate: Date,
        lastModifiedDate: Date,
        userId: String,
        name: String
      },
    },

    asyncData(context) {
      // Todos der jeweiligen Liste abrufen
      return axios.get('http://localhost:3000/todo-mock-json/GET/Todos/GetTodosResponse.json').then((res) => {
        return {
          todos: res.data
        }
      });
    }
    
  }



</script>

<style scoped>

</style>

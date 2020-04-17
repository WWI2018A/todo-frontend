<template>
  <section>
    <h1>Listenname:{{headline}} </h1>
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

  
  const API_URL = 'http://localhost:3000';

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
//axios get request to receive the list name and the todos of the list
     async asyncData({ query, error }) {
    let [listNameRes, toDoRes] = await Promise.all([
      axios.get('/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json'),
      axios.get('/todo-mock-json/GET/Todos/GetTodosResponse.json'),
    ])
    return {
       headline : listNameRes.data.name,
       todos : toDoRes.data
    }
  }
    
  }
/*
https://www.youtube.com/watch?v=y9vJMHjKukQ 
//axios post request to add a new todo
axios.post("https://jsonplaceholder.typicode.com/users",{
  name:"Verteilte system machen",
  dueDate:"28.04.2020"
})
.then(res =>{
  console.log(res.data);
})
*/


</script>

<style scoped>

</style>

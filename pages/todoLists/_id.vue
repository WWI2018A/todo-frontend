<template>
  <section>
    <!--<TodoListItem
                  v-bind:todo-list="todolists">
    </TodoListItem>-->
      <h1>Listenname: {{headline}} </h1>
      <h2>Enthaltene Todos:</h2>
     <ul>
          <!--<Todo v-for="todo in todolists" 
          v-bind:todo="todo"/>-->
      </ul>
      <form>
    <button type="button">todo hinzufügen</button>
    <button type="button" v-on:click="edittodoList">{{buttonLable}}</button>
    <button type="button">löschen</button>
    <input type="button" value="zurück" onclick="history.go(-1)">
    </form>
      
  </section>
</template>
 
<script>
  import axios from 'axios';
  import Todo from "../../components/Todo";
  //import TodoListItem from "../../components/TodoListItem";
  const API_URL = 'http://localhost:3000';
 
  export default {
    name: 'todoLists',
    
    components: {
      Todo,
      //TodoListItem
    },
 
    // TodoList um den Namen der jeweiligen Liste über den Todos anzuzeigen --> funzt noch nicht
    props: {
      //todoLists: {
        id: String,
        createdDate: Date,
        lastModifiedDate: Date,
        userId: String,
        name: String,
        //todos:Todo,
        //headline:String
      //}
    },
    
   
asyncData(context) {
    
     //Listenname herausfinden
      return axios.get('/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json')
      .then(res => {
        return {
         headline : res.data.name
        }
      })
      .catch(error => {
        console.log(error)
      })
      .finally()
}} 
  </script>

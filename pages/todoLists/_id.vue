<template>
<section>
<!--<TodoListItem
 v-bind:todo-list="todolists">
 </TodoListItem>-->
 <lable> Listenname: 
      <input type="text" v-model="headline" id= "listid" disabled>
      </lable>
<h2>Enthaltene Todos:</h2>
<ul>
<!--<Todo v-for="todo in todolists" 
 v-bind:todo="todo"/>-->
</ul>
  <li>
    <div> 
      <form>
    <button type="button">todo hinzufügen</button>
    <button type="button" v-on:click="editListname">{{buttonLabel}}</button>
    <button type="button">löschen</button>
    <input type="button" value="zurück" onclick="history.go(-1)">
    </form>
    </div>
      </li>

</section>
</template>

<script>
import axios from 'axios';
import Todo from "../../components/Todo";
import TodoListItem from "../../components/TodoListItem";
const API_URL = 'http://localhost:3000';

export default {
name:'todoLists',

components: {
Todo,
TodoListItem
 },

// TodoList um den Namen der jeweiligen Liste über den Todos anzuzeigen --> funzt noch nicht
props: {
todoList: {
id:String,
createdDate:Date,
lastModifiedDate:Date,
userId:String,
name:String,
//todos:Todo,
//headline:String
}
 },

 data() {
      return {
        buttonLabel: 'Bearbeiten',
        
      }
    },

    methods: {
      editListname() {
        if (this.buttonLabel === 'Bearbeiten') {
          this.buttonLabel = 'Speichern';
          // enable todo-label
          document.getElementById("listid").disabled = false;
          
        } else {
          // post an to do service schicken
          // Content des to dos ändern
          this.headline = document.getElementById("listid").value;
          console.log(JSON.stringify(this.todoList));
          this.buttonLabel = 'Bearbeiten';
          // disable todo-label
          document.getElementById("listid").disabled = true;
         
        }
      },

      /*deleteTodo() {
        console.log('Send Request to delete the Todo ' + this.todo.content)
      },*/
      
      /*updateCheck() {
        if(document.getElementById('Check' + this.todo.id).checked == true) {
          console.log('Ist erledigt')
          this.todo.status = 'COMLETED';
          console.log(JSON.stringify(this.todo));
        } else {
          console.log('Ist nicht erledigt')
          this.todo.status = 'NONE';
          console.log(JSON.stringify(this.todo));
        }
      },*/
    },



asyncData(context) {

//Listenname herausfinden
return axios.get('/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json')
 .then(res=> {
return {
headline :res.data.name,

 }
 })
 .catch(error=> {
console.log(error)
 })
 .finally()
}} 
</script>


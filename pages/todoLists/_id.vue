<template>
  <section>
    <!--<TodoListItem
 v-bind:todo-list="todolists">
    </TodoListItem>-->
    <h1>
      <label>
        Listenname:
        <input type="text" v-model="todoList.name" id="listid" disabled />
      </label>
    </h1>
    <h2>Enthaltene Todos:</h2>
    <ul>
      <Todo v-for="todo in todolists" v-bind:todo="todo" />
    </ul>
    <li>
      <div>
        <form>
          <button type="button" v-on:click="addTodo">todo hinzufügen </button>
          <button type="button" v-on:click="editListname">{{buttonLabel}}</button>
          <button type="button" v-on:click="deleteList">löschen</button>
          <input type="button" value="zurück" onclick="history.go(-1)" />


        </form>
      </div>
    </li>
  </section>
</template>

<script>
import axios from "axios";
import Todo from "../../components/Todo";
import TodoListItem from "../../components/TodoListItem";
const API_URL = "http://localhost:3000";

export default {
  name: "todoLists",

  components: {
    Todo,
    TodoListItem
  },

  // TodoList um den Namen der jeweiligen Liste über den Todos anzuzeigen --> funzt noch nicht
  /*props: {
    todoList: {
      id: String,
      createdDate: Date,
      lastModifiedDate: Date,
      userId: String,
      name: String
      //todos:Todo,
      //headline: String
    }
  },*/

  data() {
    return {
      buttonLabel: "Bearbeiten",
      todoList: {
      id: String,
      createdDate: Date,
      lastModifiedDate: Date,
      userId: String,
      name: String
      //todos:Todo,
      //headline: String
    }
    };
  },

  methods: {
    editListname() {
      if (this.buttonLabel === "Bearbeiten") {
        this.buttonLabel = "Speichern";
        // enable todo-label
        document.getElementById("listid").disabled = false;
      } else {
        // post an to do service schicken
        // Content des to dos ändern
        this.todoList.name = document.getElementById("listid").value;
        console.log(JSON.stringify(this.todoList));
        this.buttonLabel = "Bearbeiten";
        // disable todo-label
        document.getElementById("listid").disabled = true;
      }
    },

    deleteList() {
        console.log('Send Request to delete the TodoList ' + this.todoList.data)
      },
    
    addTodo() {
      console.log('Send Request to add todo to TodoList ' + this.todo.data)
    }
  },

  /*asyncData(context) {

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
}} */

  async asyncData({ query, error }) {
    let [pageRes, countRes] = await Promise.all([
      axios.get("/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json"),
      axios.get("/todo-mock-json/GET/Todos/GetTodosResponse.json")
    ]);
    return {
      todoList: pageRes.data,
      //headline: pageRes.data.name,
      todolists: countRes.data
    };
  }
};
</script>


}}

</script>


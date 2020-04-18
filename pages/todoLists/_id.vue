<template>
  <section>

    <h1>
      <label>
        Listenname:
        <input type="text" v-model="todoList.name" id="listid" disabled/>
      </label>
    </h1>
    <h2>Enthaltene Todos:</h2>
    <ul>
      <Todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"/>
    </ul>
    <div>
      <form>
        <button type="button" class="btn btn-outline-primary" v-on:click="addTodo"><i class="fas fa-plus"></i></button>
        <button type="button" class="btn btn-outline-primary" v-on:click="editListName">{{buttonLabel}} <i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-outline-primary" v-on:click="deleteList"><i class="fas fa-trash-alt"></i></button>
        <button type="button" class="btn btn-outline-primary" v-on:click="pageBack"><i class="fas fa-arrow-left"></i></button>
      </form>
    </div>
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


    data() {
      return {
        buttonLabel: "Bearbeiten",
        todoList: {
          id: String,
          createdDate: Date,
          lastModifiedDate: Date,
          userId: String,
          name: String
        },
        todos: [],
      };
    },

    methods: {
      editListName() {
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

        // Wenn axio erfolgreich war, dann geh auf Seite davor:
        // open('/todoLists','_self')
      },

      addTodo() {
        let newTodo = {
          userId: 'userXYZ',
          listId: this.todoList.id,
        };
        this.todos.unshift(newTodo);
        console.log(JSON.stringify(newTodo));
      },

      pageBack() {
        open('/todoLists','_self')
      }
    },

    async asyncData({query, error}) {
      let [pageRes, countRes] = await Promise.all([
        axios.get("/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json"),
        axios.get("/todo-mock-json/GET/Todos/GetTodosResponse.json")
      ]);
      return {
        todoList: pageRes.data,
        //headline: pageRes.data.name,
        todos: countRes.data
      };
    }
 
  }

//axios get request to receive the list name and the todos of the list
  //    async asyncData({ query, error }) {
  //   let [listNameRes, toDoRes] = await Promise.all([
  //     axios.get('/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json'),
  //     axios.get('/todo-mock-json/GET/Todos/GetTodosResponse.json'),
  //   ])
  //   return {
  //      headline : listNameRes.data.name,
  //      todos : toDoRes.data
  //   }
  // }
    


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

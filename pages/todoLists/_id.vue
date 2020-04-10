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
      <Todo v-for="todo in todos" v-bind:todo="todo"/>
    </ul>
    <li>
      <div>
        <form>
          <button type="button" class="btn btn-outline-primary" v-on:click="addTodo">todo hinzufügen</button>
          <button type="button" class="btn btn-outline-primary" v-on:click="editListName">{{buttonLabel}}</button>
          <button type="button" class="btn btn-outline-primary" v-on:click="deleteList">löschen</button>
          <input type="button" class="btn btn-outline-primary" value="zurück" onclick="history.go(-1)"/>
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
    // props: {
    //   todoList: {
    //     id: String,
    //     createdDate: Date,
    //     lastModifiedDate: Date,
    //     userId: String,
    //     name: String
    //   },
    // todo: {
    //   id: String,
    //   createdDate: Date,
    //   lastModifiedDate: Date,
    //   userId: String,
    //   dueDate: Date,
    //   status: String,
    //   content: String,
    // }
    // },

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
      },

      addTodo() {
        let newTodo = {
          userId: 'userXYZ',
          listId: this.todoList.id,
        };
        this.todos.push(newTodo);
        console.log(JSON.stringify(newTodo));
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
</script>

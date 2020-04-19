<template>
  <section class="background">
    <button type="button" class="btn editbutton returnbtn" v-on:click="pageBack"><i class="fas fa-arrow-left"></i></button>
    <div class="center">
      <h1>
        <label>
          <input type="text" class="listName" v-model="todoList.name" id="listid" disabled/>
          <button type="button" class="btn editbutton" v-on:click="editListName" v-b-tooltip.hover title="Listenname bearbeiten"><i id='icon' class="fas fa-edit"></i></button>
          <button type="button" class="btn editbutton" v-on:click="deleteList" v-b-tooltip.hover title="Liste löschen"><i class="fas fa-trash-alt"></i></button>
        </label>
      </h1>
      <h2>Enthaltene Todos: </h2>
      <ul>
        <Todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"/>
      </ul>
      <div>
        <form>
          <!-- <button type="button" class="btn editbutton" v-on:click="pageBack"><i class="fas fa-arrow-left"></i></button> -->
          <button type="button" class="btn editbutton" v-on:click="addTodo" v-b-tooltip.hover title="Neues Todo hinzufügen"><i class="fas fa-plus-circle" style="font-size: 20px;"></i></button>
          <!-- <button type="button" class="btn editbutton" v-on:click="editListName"><i id='icon' class="fas fa-edit"></i></button>
          <button type="button" class="btn editbutton" v-on:click="deleteList"><i class="fas fa-trash-alt"></i></button> -->
        </form>
      </div>
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
          document.getElementById('icon').classList.remove('fa-edit');
          document.getElementById('icon').classList.add('fa-save');
          // enable todo-label
          document.getElementById("listid").disabled = false;
        } else {
          // post an to do service schicken
          // Content des to dos ändern
          this.todoList.name = document.getElementById("listid").value;
          console.log(JSON.stringify(this.todoList));
          this.buttonLabel = "Bearbeiten";
          document.getElementById('icon').classList.remove('fa-save');
          document.getElementById('icon').classList.add('fa-edit');
          // disable todo-label
          document.getElementById("listid").disabled = true;
        }
      },

      deleteList() {
        console.log('Send Request to delete the TodoList ' + this.todoList.data)

        // TODO: Wenn axio erfolgreich war, dann geh auf Seite davor:
        // open('/todoLists','_self')
      },

      addTodo() {
        let newTodo = {
          userId: 'userXYZ',
          listId: this.todoList.id,
        };
        // Todo: Todo id von response hinzufügen (im Response Header)
        this.todos.push(newTodo);
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

<style scoped>
.background {
  background-color: rgb(186, 214, 229);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.returnbtn {
  margin-top: 55px;
}

.center {
  width: 70%;
  background-color: rgb(255, 255, 255);
  height: 60vh auto;
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
  margin-bottom: 20px;
}

.listName {
  width: 635px;
}

h2 {
  font-size: x-large;
  margin-bottom: 15px;
}

input {
  border: 0;
  width: fit-content;
}

.center p {
  font-weight: lighter;
  letter-spacing: 1px;
  width: 70%;
  margin: 10px auto;
}

.editbutton {
  color: black;
}

.editbutton:hover {
  transform: scale(1.2);
}

</style>
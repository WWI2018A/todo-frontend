<template>
  <section class="background">
    <button type="button" class="btn editbutton returnbtn" v-on:click="pageBack"><i class="fas fa-arrow-left"></i>
    </button>
    <div class="center">
      <h1>
        <label>
          <input type="text" placeholder="Listenname eingeben" class="listName" v-model="todoList.name" id="listid" :disabled="todoListFormDisabled"/>
          <button type="button" class="btn editbutton" v-on:click="editListName" v-b-tooltip.hover
                  title="Listenname bearbeiten"><i id='icon' class="fas fa-edit"></i>
          </button>
          <button type="button" class="btn editbutton" v-on:click="deleteList" v-b-tooltip.hover title="Liste löschen">
            <i class="fas fa-trash-alt"></i></button>
        </label>
      </h1>
      <h2>Enthaltene Todos: </h2>
      <ul>
        <Todo v-for="todo in todos" v-bind:todo="todo" :key="todo.id"/>
      </ul>
      <div>
        <form>
          <button type="button" class="btn editbutton" v-on:click="addTodo" v-b-tooltip.hover
                  title="Neues Todo hinzufügen"><i class="fas fa-plus-circle" style="font-size: 20px;"></i></button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from "axios";
  import Todo from "../../components/Todo";
  import {routerOptions} from "../../.nuxt/router";

  const API_URL = 'https://0f1e94dc-2f46-44c5-8aba-b4cc2da9bfb5.ma.bw-cloud-instance.org/api/v1/todos/';

  export default {
    name: "todoLists",

    components: {
      Todo
    },

    data() {
      return {
        todoList: {
          id: String,
          createdDate: Date,
          lastModifiedDate: Date,
          userId: String,
          name: String
        },
        todos: [],  // returns an Array with all todos
        todoListFormDisabled: true,
      };
    },

    methods: {
      /* Function for Click on Edit-Button for List-Name
      Change Icon and enable input-field
      Save changes, disable input-field and send value to todo-service */
      editListName() {
        if (this.todoListFormDisabled) {
          this.todoListFormDisabled = false;
          document.getElementById('icon').classList.remove('fa-edit');
          document.getElementById('icon').classList.add('fa-save');
        } else {
          this.todoListFormDisabled = true;
          document.getElementById('icon').classList.add('fa-edit');
          document.getElementById('icon').classList.remove('fa-save');
          //axios put request to modify the list name
          axios.put(API_URL + '/todoLists/' + this.todoList.id, this.todoList, {}
          ).then(res => {
          })
          .catch((error) => {
            alert("Fehler beim Bearbeiten des Listennamen aufgetreten.")
        })
        }
      },

      /* Function for Click on Delete-Button for whole List
      Send Delete-Request to todo-service and return to the Listoverview
      without reloading the whole page */
      deleteList() {
        //axios delete request to delete the list
        //If successful, return to the lists view page
        axios.delete(API_URL + '/todoLists/' + this.todoList.id)
          .then(function (res) {
            history.go(-1);
          })
          .catch((error) => {
            alert("Fehler beim Löschen der Liste aufgetreten.")
        })
      },

      /* Function for Click on Plus-Button to add a new Todo
      Send Post-Request to todo-service and delete add Todo in frontend */
      addTodo() {
        let newTodo = {
          id: undefined,
          listId: this.todoList.id,
          createdDate: undefined,
          lastModifiedDate: undefined,
          userId: undefined,
          dueDate: new Date().toISOString(),
          status: undefined,
          content: undefined,
        };
        //axios post request to add a new todo
        axios.post(API_URL, newTodo)
          .then(res => {
            newTodo.id = res.headers['location'].split('/')[2]
            this.todos.push(newTodo);
          }).catch((error) => {
            alert("Fehler beim Erstellen eines ToDos aufgetreten.")
        })
      },

      /* Function for Click on Arrow-Button to return to Listoverview
      without reloading the whole page */
      pageBack() {
        history.go(-1);
      }
    },

    //axios get request to get the list name and the tasks of the list
    async asyncData({params}) {
      return axios.all([
        axios.get(API_URL + '/todoLists/' + params.id),
        axios.get(API_URL + '/', {params: {listId: params.id}})
      ]).then(axios.spread((...responses) => {
        return {
          todoList: responses[0].data,
          todos: responses[1].data,
        }
      })).catch(errors => {
        alert("Fehler beim Aufruf des Listennamens und/ oder der ToDos aufgetreten.")
      })
    }
  }
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

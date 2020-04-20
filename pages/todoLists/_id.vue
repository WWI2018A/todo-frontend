<template>
  <section class="background">
    <button type="button" class="btn editbutton returnbtn" v-on:click="pageBack"><i class="fas fa-arrow-left"></i>
    </button>
    <div class="center">
      <h1>
        <label>
          <input type="text" class="listName" v-model="todoList.name" id="listid" :disabled="todoListFormDisabled"/>
          <button type="button" class="btn editbutton" v-on:click="editListName" v-b-tooltip.hover
                  title="Listenname bearbeiten"><i id='icon' class="fas"
                                                   :class="todoListFormDisabled ? 'fa-edit' : 'fa-save'"></i>
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
          <!-- <button type="button" class="btn editbutton" v-on:click="pageBack"><i class="fas fa-arrow-left"></i></button> -->
          <button type="button" class="btn editbutton" v-on:click="addTodo" v-b-tooltip.hover
                  title="Neues Todo hinzufügen"><i class="fas fa-plus-circle" style="font-size: 20px;"></i></button>
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
  import {routerOptions} from "../../.nuxt/router";

  const API_URL = 'https://0f1e94dc-2f46-44c5-8aba-b4cc2da9bfb5.ma.bw-cloud-instance.org/api/v1/todos/';

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
        todoListFormDisabled: true,
      };
    },

    methods: {
      editListName() {
        if (this.todoListFormDisabled) {
          this.todoListFormDisabled = false;
          this.buttonLabel = "Speichern";
        } else {
          this.todoListFormDisabled = true;
          // post an to do service schicken
          this.buttonLabel = "Bearbeiten";
          //axios put request to modify the content and the duedate of the todo
          console.log(this.todoList);
          axios.put(API_URL + '/todoLists/' + this.todoList.id, this.todoList, {}
          ).then(res => {
          })
        }
      },

      deleteList() {
        axios.delete(API_URL + '/todoLists/' + this.todoList.id)
          .then(function (res) {
            console.log(res.data.name);
            history.go(-1);
          })
      },

      addTodo() {
        let newTodo = {
          id: undefined,
          listId: this.todoList.id,
          createdDate: undefined,
          lastModifiedDate: undefined,
          userId: undefined,
          dueDate: undefined,
          status: undefined,
          content: undefined,
        };
        console.log(API_URL);
        //axios post request to add a new todo
        axios.post(API_URL, newTodo)
          .then(res => {
            newTodo.id = res.headers['location'].split('/')[0]
            this.todos.push(newTodo);
          }).catch((error) => {
            alert(error)
        })
      },

      pageBack() {
        history.go(-1);
      }
    },

    async asyncData({params}) {
      return axios.all([
        axios.get(API_URL + '/todoLists/' + params.id),
        axios.get(API_URL + '/', {params: {listId: params.id}})
      ]).then(axios.spread((...responses) => {
        return {
          todoList: responses[0].data,
          todos: responses[1].data,
        }
        // use/access the results
      })).catch(errors => {
        // react on errors.
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

<template>
  <section class="todoLists">
    <!--    <ul>-->
    <!--      <TodoListItem v-for="todoList in todoLists" v-bind:todoList="todoList" />-->
    <!--    </ul>-->
    <div class="topRow">
      <button class="btn addbutton" v-on:click="addNewList" v-b-tooltip.hover title="Neue Liste hinzufügen"><i
        class="fas fa-plus" style="font-size: 30px;"></i></button>
    </div>
    <div class="container-fluid">
      <div class="row no-gutters">
        <Kachel
          class="col-4"
          v-for="todoList in todoLists"
          v-bind:todoList="todoList"
          :key="todoList.id"
        />
      </div>
    </div>

  </section>
</template>

<script>
  import Kachel from '@/components/Kachel'
  import axios from 'axios';

  const API_URL = 'https://0f1e94dc-2f46-44c5-8aba-b4cc2da9bfb5.ma.bw-cloud-instance.org/api/v1/todos/';

  export default {

    name: 'todoLists',

    components: {
      Kachel
    },
    data() {
      return {
        todoLists: [],
      }
    },

    methods: {
      //fügt eine neue Liste hinzu
      addNewList() {
        let newTodoListItem = {
          id: undefined,
          name: 'Neue Liste',
        };
        axios.post(API_URL + 'todoLists', newTodoListItem)
          .then(res => {
            newTodoListItem.id = res.headers['location'].split('/')[2];
            console.log(newTodoListItem);
            this.todoLists.push(newTodoListItem);
          })
      }
    },

    //axios get request to get all list names
    asyncData() {
      return axios.get(API_URL + 'todoLists').then(res => {
        console.log(res.data)
        return {
          todoLists: res.data
        };
      });
    }
  }
</script>

<style scoped>
  .todoLists {
    background-color: rgb(186, 214, 229);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    justify-content: center;
    align-items: flex-start;

    margin: 10px 0 0 10px;
    width: 100%;
    float: left;
  }

  .topRow {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;
  }

  .addbutton {
    color: rgb(59, 59, 59);
  }

  .addbutton:hover {
    transform: scale(1.2);
  }

  .Kachel {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
</style>













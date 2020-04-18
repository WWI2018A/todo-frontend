<template>
  <section class="todoLists">
    <!--    <ul>-->
    <!--      <TodoListItem v-for="todoList in todoLists" v-bind:todoList="todoList" />-->
    <!--    </ul>-->
    <button class="btn btn-outline-primary" v-on:click="addNewList">Neue Liste</button>
    <div class="container-fluid">
      <div class="row no-gutters">
        <Kachel
          class="col-3"
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
  import TodoListItem from "../../components/TodoListItem";
  import axios from 'axios';

  export default {

    name: 'todoLists',

    components: {
      Kachel
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
        todoLists: [],
      }
    },
    methods: {
      //fügt eine neue Liste hinzu
      addNewList() {
        let newTodoListItem = {
          userId: 'userXYZ',
          name: 'neueListe',
        };
        this.todoLists.push(newTodoListItem);
        console.log(JSON.stringify(newTodoListItem));
      }
    },


    asyncData() {
      return axios.get('http://localhost:3000/todo-mock-json/GET/TodoLists/GetTodosListsResponse.json').then(res => {
        return {
          todoLists: res.data
        };
      });
    }

    /*return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          todoLists: [
            {
              id: '1',
              title: 'Einkaufsliste',
              previewText: 'Daily List',
              thumbnail: 'https://marckeil.de/wp-content/uploads/2015/08/To-Do-List-Resized.jpg'
            },
            {
              id: '2',
              title: 'List2',
              previewText: 'Buying List',
              thumbnail: 'https://media.cdnandroid.com/2b/84/9a/5d/imagen-bright-todo-0big.jpg'
            },
            {
              id: '3',
              title: 'List3',
              previewText: 'Homework List',
              thumbnail: 'https://marckeil.de/wp-content/uploads/2015/08/To-Do-List-Resized.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://media.cdnandroid.com/2b/84/9a/5d/imagen-bright-todo-0big.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://marckeil.de/wp-content/uploads/2015/08/To-Do-List-Resized.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://media.cdnandroid.com/2b/84/9a/5d/imagen-bright-todo-0big.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://marckeil.de/wp-content/uploads/2015/08/To-Do-List-Resized.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://media.cdnandroid.com/2b/84/9a/5d/imagen-bright-todo-0big.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://marckeil.de/wp-content/uploads/2015/08/To-Do-List-Resized.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://media.cdnandroid.com/2b/84/9a/5d/imagen-bright-todo-0big.jpg'
            },
            {
              id: '4',
              title: 'List4',
              previewText: 'Marlons Liste',
              thumbnail: 'https://marckeil.de/wp-content/uploads/2015/08/To-Do-List-Resized.jpg'
            }
          ]
        })
      }, 1000)
    })
  }*/
  }
</script>

<style scoped>
  .Kachel {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
</style>













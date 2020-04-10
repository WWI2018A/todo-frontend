<template>
  <section class="todoLists">
  <button class="btn btn-outline-primary" v-on:click="addNewList" >Neue Liste</button>
    <div class="container-fluid">
      <div class="row no-gutters">
        <Kachel class="col-3"
          v-for="t in todoLists"
          :key="t.id"
          :thumbnail="t.thumbnail"
          :title="t.title"
          :id="t.id"
          :previewText="t.previewText"/>
      </div>
    </div>
  </section>
</template>

<script>
  import Kachel from '@/components/Kachel'

  export default {
    components: {
      Kachel
    },
    methods:{
      addNewList() {

      }
    },
    asyncData() {
      // hier kommt der HTTP Aufruf hin
      return new Promise((resolve, reject) => {
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
    }
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






 <!--
<script>
  import TodoListItem from "../../components/TodoListItem";
  import axios from 'axios';

  export default {
    name: 'todoLists',

    components: {
      TodoListItem
    },

    // Listen abrufen
    asyncData() {
      return axios.get('http://localhost:3000/todo-mock-json/GET/TodoLists/GetTodosListsResponse.json').then(res => {
        return {
          todoLists: res.data
        };
      });
    }
  }


</script>

<style scoped>

</style>
-->
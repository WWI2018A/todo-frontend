<template>
  <section class="todoLists">
    <Kachel
      v-for="t in todoLists"
      :key="t.id"
      :thumbnail="t.thumbnail"
      :title="t.title"
      :id="t.id"
      :previewText="t.previewText"/>
  </section>
</template>

<script>
  import Kachel from '@/components/Kachel'

  export default {
    components: {
      Kachel
    },
    asyncData() {
      // hier kommt der HTTP Aufruf hin
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            todoLists: [
              {
                id: '1',
                title: 'List1',
                previewText: 'Daily List',
                thumbnail: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?cs=srgb&dl=gemuse-italienisch-pizza-restaurant-2232.jpg&fm=jpg'
              },
              {
                id: '2',
                title: 'List2',
                previewText: 'Buying List',
                thumbnail: 'https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg'
              },
              {
                id: '3',
                title: 'List3',
                previewText: 'Homework List',
                thumbnail: 'https://cdn.pixabay.com/photo/2018/03/06/16/22/burgers-3203841_960_720.jpg'
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
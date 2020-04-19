<template>
  <section class="todoLists">
    <!--    <ul>-->
    <!--      <TodoListItem v-for="todoList in todoLists" v-bind:todoList="todoList" />-->
    <!--    </ul>-->
    <div class="topRow">
    <button class="btn addbutton" v-on:click="addNewList" v-b-tooltip.hover title="Neue Liste hinzufügen"><i class="fas fa-plus" style="font-size: 30px;"></i></button>
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
          name: 'Neue Liste',
        };
        this.todoLists.push(newTodoListItem);
        console.log(JSON.stringify(newTodoListItem));

        //axios post request to add a new list
        axios.post("https://jsonplaceholder.typicode.com/users",this.newTodoListItem,{})
        .then(res =>{
          console.log(res.data);
        })
      }
    },

    //axios get request to get all list names 
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
.todoLists {
  background-color: rgb(186, 214, 229);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  justify-content: center;
  align-items: flex-start;

  margin: 10px 0 0 10px; 
  width:100%; 
  float:left;
}

.topRow {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;
}

.addbutton {
  color: rgb(59,59,59);
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













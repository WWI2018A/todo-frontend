<template>
  <section>
    <TodoListItem v-for='todoListItem in todoLists'
                  v-bind:todo-list="todoListItem">
    </TodoListItem>
  </section>
</template>

<script>
  import TodoListItem from "../../components/TodoListItem";
  import axios from 'axios';

  export default {
    
    components: {
      TodoListItem
    },


    // Listen abrufen
    asyncData() {
      return axios.get('http://localhost:3000/todo-mock-json/GET/TodoLists/GetTodosListsResponse.json').then(res => {
        return {
          todoLists: res.data
        }

      });

    }

  }
      

        /*return axios.get('http://localhost:3000/todo-mock-json/GET/TodoLists/GetTodoListsIdResponse.json').then((res) => {
        return {
          todoLists: res.name

      }
          
        });
      });
        
     */ 
      
  
  


</script>

<style scoped>

</style>

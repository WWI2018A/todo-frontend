<template>
  <section>
    <TodoListItem v-for='todoListItem in todoLists' v-bind:key="todoListItem.id"
                  v-bind:todo-list="todoListItem">
    </TodoListItem>
  </section>
</template>

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

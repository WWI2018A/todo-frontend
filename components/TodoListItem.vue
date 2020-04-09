<template>
  <nuxt-link class="todo-list-item" :to="{path: '/todoLists/' + todoList.id, props: {todoList: this.todoList}}">
    <p>{{todoList.name}}</p>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'TodoListItem',

    props: {
      todoList: {
        id: String,
        //createdDate: Date,
        //lastModifiedDate: Date,
        userId: String,
        name: String
      }
    }
  }
</script>

<style scoped>
  .todo-list-item {
    padding: 2em;
    font-weight: bold;
  }
</style>

<template>
  <li>
    <p>{{todo.content}}</p>
        <p>bis {{todo.dueDate}}</p>
  </li>
</template>

<script>
  export default {
    name: "Todo",

    // props: ['id', 'createdDate', 'lastModifiedDate', 'userId', 'listId', 'dueDate', 'status', 'content']

    props: {
      todo: {
        id: String,
        createdDate: Date,
        lastModifiedDate: Date,
        userId: String,
        dueDate: Date,
        content: String,
      }
    },

  }
</script>

<style scoped>

</style>

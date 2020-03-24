<template>
  <li>
    <p>{{todo.content}}</p>
      <form>
        <input type="checkbox">
        <button type="button">löschen</button>
        <button type="button">bis {{todo.dueDate}}</button>
        <button type="button">bearbeiten</button>
      </form>
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

<template>
  <li>
    <div>
      <p>{{todo.content}}</p>
      <label>
        <input type="checkbox">
      </label>
      <button type="button">löschen</button>
      <button type="button">bis {{todo.dueDate}}</button>
      <button type="button" v-on:click="editTodo">{{buttonLabel}}</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'Todo',

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

    data() {
      return {
        buttonLabel: 'Bearbeiten'
      }
    },

    methods: {
      editTodo() {
        if (this.buttonLabel === 'Bearbeiten') {
          this.buttonLabel = 'Speichern';
        } else {
          // post an to do service schicken
          // Content des to dos ändern hier als Beispiel Test
          this.todo.content = 'Test';
          console.log(JSON.stringify(this.todo));
          this.buttonLabel = 'Bearbeiten';
        }
      }

    },
  }
</script>

<style scoped>

</style>

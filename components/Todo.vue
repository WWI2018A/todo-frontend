<template>
  <li>
    <div>
      <label>
        <input type="text" v-model="todo.content" v-bind:id="'ToDo' + todo.id" disabled>
        bis
      </label>
      <input type="datetime-local" v-model="todoDate" v-bind:id="'Date' + todo.id" disabled/>
      <!-- <button type="button">bis {{todo.dueDate}}</button> -->
      <input type="checkbox" v-if="todo.status === 'COMPLETED'" v-on:click="updateCheck" v-bind:id="'Check' + todo.id"
             checked>
      <input type="checkbox" v-else v-on:click="updateCheck" v-bind:id="'Check' + todo.id">
      <button type="button" v-on:click="editTodo">{{buttonLabel}}</button>
      <button type="button" v-on:click="deleteTodo">löschen</button>
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
        status: String,
        content: String,
      }
    },


    data() {
      return {
        buttonLabel: 'Bearbeiten',
        // todoDate: this.todo.dueDate.substr(0,16)
      }
    },

    methods: {
      editTodo() {
        if (this.buttonLabel === 'Bearbeiten') {
          this.buttonLabel = 'Speichern';
          // enable todo-label
          document.getElementById('ToDo' + this.todo.id).disabled = false;
          // enable todo-date
          document.getElementById('Date' + this.todo.id).disabled = false;
        } else {
          // post an to do service schicken
          // Content des to dos ändern
          this.todo.content = document.getElementById('ToDo' + this.todo.id).value;
          this.todo.dueDate = document.getElementById('Date' + this.todo.id).value + ":00.000+0000";
          console.log(JSON.stringify(this.todo));
          this.buttonLabel = 'Bearbeiten';
          // disable todo-label
          document.getElementById('ToDo' + this.todo.id).disabled = true;
          // disable todo-date
          document.getElementById('Date' + this.todo.id).disabled = true;
        }
      },

      deleteTodo() {
        console.log('Send Request to delete the Todo ' + this.todo.content)
      },

      updateCheck() {
        if (document.getElementById('Check' + this.todo.id).checked == true) {
          console.log('Ist erledigt')
          this.todo.status = 'COMLETED';
          console.log(JSON.stringify(this.todo));
        } else {
          console.log('Ist nicht erledigt')
          this.todo.status = 'NONE';
          console.log(JSON.stringify(this.todo));
        }
      },
    },

  }
</script>

<style scoped>

</style>

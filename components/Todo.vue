<template>
  <li>
    <div>
      <label>
       <input type="text" id="todoID" disabled>
       {{todo.content}}
      </label>
      <input type="checkbox" v-on:click="updateCheck" id="todoCheckID">
      <button type="button" v-on:click="deleteTodo">löschen</button>
      <button type="button">bis {{todo.dueDate}}</button>
      <button type="button" v-on:click="editTodo">{{buttonLabel}}</button>
    </div>
  </li>
</template>

<script>
  // window.onload = onPageLoad();

  // function onPageLoad() {
  //   if (todo.status == "COMPLETED") {
  //     document.getElementById("todoCheckID").checked == true;
  //   } else {
  //     document.getElementById("todoCheckID").checked == false;
  //   }
  // }

  // window.addEventListener("load", function(event) {
  //   if (todo.status == "COMPLETED") {
  //     document.getElementById("todoCheckID").checked == true;
  //   } else {
  //     document.getElementById("todoCheckID").checked == false;
  //   }
  // });
  
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
          document.getElementById("todoID").disabled = false;
        } else {
          // post an to do service schicken
          // Content des to dos ändern hier als Beispiel Test
          this.todo.content = 'Test';
          console.log(JSON.stringify(this.todo));
          this.buttonLabel = 'Bearbeiten';
          document.getElementById("todoID").disabled = true;
        }
      },

      deleteTodo() {
        console.log("Send Request to delete the Todo " + this.todo.content)
      },
      
      updateCheck() {
        if(document.getElementById("todoCheckID").checked == true) {
          console.log("Ist erledigt")
        } else {
          console.log("Ist nicht erledigt")
        }
      }
    },

  }
</script>

<style scoped>

</style>

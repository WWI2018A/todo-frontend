<template>
  <li>
    <p>{{todo.content}}</p>
    <div id="todo-buttons">
      <input type="checkbox">
      <button type="button">löschen</button>
      <button type="button">bis {{todo.dueDate}}</button>
      <button type="button" v-on:click="bearbeiten">{{buttonLabel}}</button>
    </div>
  </li>
</template>

<script>
  import Vue from "vue";

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

  var todoButtons = new Vue({
    el:'#todo-buttons',
    data:{
      buttonLabel: "Bearbeiten"
    },
    methods:{
      bearbeiten: function(event) {
        alert("Hallo");
        console.log("Hallo");
        buttonLabel = "Test";
      }
    }
  })
</script>

<style scoped>

</style>

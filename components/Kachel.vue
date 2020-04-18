<template>
  <nuxt-link :to="{path: '/todoLists/' + todoList.id, props: {todoList: this.todoList}}">
    <article class="todoLists">
      <div class="thumbnail"></div>
      <h3 class="name"> {{ todoList.name }} </h3>

    </article>
  </nuxt-link>
</template>


<script>
  export default {
    props: {
      todoList: {
        id: String,
        createdDate: Date,
        lastModifiedDate: Date,
        userId: String,
        name: String,
      }
    }
  }
</script>

<style scoped>

  a {
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    font-family: Didot;
    color: rgb(0, 0, 0);
    margin: 0px;
  }

  .name {
    background-color: rgb(255, 255, 255);
    text-align: center;
    padding: 0px;
  }

  .todoLists {
    margin: 60px 30px 5px 5px;
    -webkit-box-shadow: 10px 10px 18px 4px rgba(92, 92, 92, 0.78);
    -moz-box-shadow: 10px 10px 18px 4px rgba(92, 92, 92, 0.78);
    box-shadow: 10px 10px 18px 4px rgba(92, 92, 92, 0.78);
  }

  .kachel {
    box-sizing: border-box;
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    margin: 0px;
  }

  .thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 300px;
    margin: 0px;
  }
</style>

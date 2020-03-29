<template>
 <nuxt-link :to="'/todoLists/'+id">
    <article class="todoLists">
            <div class="thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
            <h1>{{ title }}</h1>
            <p>{{previewText}} </p>
        </article>
 </nuxt-link>
</template>


<script>
export default {
  props: ['thumbnail', 'title', 'previewText', 'id']
}
</script>

<style scoped>
a{
    text-decoration: none;
    font-size: 16px;
    color:rgb(255, 0, 0);
    margin: 2%;
}

.kachel{
    box-sizing: border-box;
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #aaa;
    margin: 10px;
}

.thumbnail{
    background-position: center;
    background-size: cover;
    width:100%;
    height: 300px;
    margin: 2%;
}
</style>

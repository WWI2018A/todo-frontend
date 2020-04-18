<template>
  <section class="recipes">
    <Recipe
      v-for="r in recipes"
      :key="r.id"
      :thumbnail="r.thumbnail"
      :title="r.title"
      :id="r.id"
      :previewText="r.previewText"/>
  </section>
</template>

<script>
  import Recipe from '@/components/Recipe'

  export default {
    components: {
      Recipe
    },
    asyncData() {
      // hier kommt der HTTP Aufruf hin
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            recipes: [
              {
                id: '1',
                title: 'Delicious Pizza',
                previewText: 'Awesome Pizza!',
                thumbnail: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?cs=srgb&dl=gemuse-italienisch-pizza-restaurant-2232.jpg&fm=jpg'
              },
              {
                id: '2',
                title: 'Soup',
                previewText: 'Very tasty indeed!',
                thumbnail: 'https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg'
              },
              {
                id: '3',
                title: 'Fantastic Burger',
                previewText: 'Yumiee!',
                thumbnail: 'https://cdn.pixabay.com/photo/2018/03/06/16/22/burgers-3203841_960_720.jpg'
              }
            ]
          })
        }, 1000)
      })
    }
  }
</script>

<style scoped>
  .recipes {
    background-color: rgb(186, 214, 229);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    font-family: Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
  }

</style>

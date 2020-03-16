<template>
    <section class="single-recipe">
    <h1>{{recipe.title}}</h1>
    <div>
        <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
    </div>
    <p>{{recipe.descriptionText}} </p>
    </section>
</template>

<script>
export default {
    asyncData(context){
        //hier kommt der AJAX Call hin
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({
                recipe:[
                    {
                        id:"1",
                        title:"Delicious Pizza",
                        previewText: "Awesome Pizza!",
                        descriptionText:"This is really a delicous meal!",
                        thumbnail:"https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?cs=srgb&dl=gemuse-italienisch-pizza-restaurant-2232.jpg&fm=jpg"
                    },
                    {
                        id:"2",
                        title:"Soup",
                        previewText: "Very tasty indeed!",
                        descriptionText:"This is really a delicous meal!",
                        thumbnail:"https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg"
                    },
                    {
                        id:"3",
                        title:"Fantastic Burger",
                        previewText: "Yumiee!",
                        descriptionText:"This is really a delicous meal!",
                        thumbnail:"https://cdn.pixabay.com/photo/2018/03/06/16/22/burgers-3203841_960_720.jpg"
                    }
                ].find(el => el.id === context.params.id)
            })
            },1000)
        })
    }
}
</script>

<style scoped>
.single-recipe{
    display:flex;
    flex-flow:column;
    justify-content: center;
    align-items:center;
    text-align: center;
    padding: 30px;
}

.recipe-image{
    width:100%;
}
</style>
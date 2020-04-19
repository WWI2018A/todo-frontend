<template>
    <li>
        <div>
            <label>
                <input type="text" class="todoContent" v-model="todo.content" v-bind:id="'ToDo' + todo.id" disabled>
                bis
            </label>
            <!--      <input type="datetime-local" v-if="todo.dueDate === undefined" v-model="todoDateNull" v-bind:id="'Date' + todo.id" disabled/>-->
            <!--      <input type="datetime-local" v-else v-model="todoDate" v-bind:id="'Date' + todo.id" disabled/>-->

            <input type="datetime-local" v-model="todo.dueDate" v-bind:id="'Date' + todo.id" disabled/>

            <input type="checkbox" v-if="todo.status === 'COMPLETED'" v-on:click="updateCheck"
                   v-bind:id="'Check' + todo.id" v-b-tooltip.hover title="Todo abhaken" checked>
            <input type="checkbox" v-else v-on:click="updateCheck" v-bind:id="'Check' + todo.id" v-b-tooltip.hover title="Todo abhaken">
            <button type="button" class="btn editbutton" v-on:click="editTodo" v-bind:id="'edit'+ todo.id" v-b-tooltip.hover title="Todo bearbeiten"><i v-bind:id="'icon'+ todo.id" class='fas fa-edit'></i></button>
            <button type="button" class="btn editbutton" v-on:click="deleteTodo" v-b-tooltip.hover title="Todo löschen"><i
                    class="fas fa-trash-alt"></i></button>
        </div>
    </li>
</template>

<script>
    import axios from 'axios';
    //const API_URL = 'http://localhost:3000'
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
                editInfo: 'Todo bearbeiten',
                //todoDate: this.todo.dueDate.substr(0,19),
                // todoDate: this.todo.dueDate.toLocaleDateString(undefined, {minute: 'numeric', hour: 'numeric', day: 'numeric', weekday: 'numeric', month: 'numeric', year: 'numeric'}),
                // todoDateNull: new Date().toISOString().substr(0,19)

            }
        },

        methods: {
            editTodo() {
                if (this.buttonLabel === 'Bearbeiten') {
                    this.buttonLabel = 'Speichern';
                    document.getElementById('icon' + this.todo.id).classList.remove('fa-edit');
                    document.getElementById('icon' + this.todo.id).classList.add('fa-save');
                   // this.editInfo = 'Speichern';
                    //console.log(document.getElementById('edit' + this.todo.id).title);

                    // enable todo-label
                    document.getElementById('ToDo' + this.todo.id).disabled = false;
                    // enable todo-date
                    document.getElementById('Date' + this.todo.id).disabled = false;
                } else {
                    // post an to do service schicken
                    // Content des to dos ändern
                    this.todo.content = document.getElementById('ToDo' + this.todo.id).value;

                    // TODO: beachten
                    this.todo.dueDate = document.getElementById('Date' + this.todo.id).value + ":00.000+0000";
                    console.log(JSON.stringify(this.todo));
                    this.buttonLabel = 'Bearbeiten';
                    document.getElementById('icon' + this.todo.id).classList.remove('fa-save');
                    document.getElementById('icon' + this.todo.id).classList.add('fa-edit');
                    //this.editInfo = 'Todo bearbeiten';

                    // disable todo-label
                    document.getElementById('ToDo' + this.todo.id).disabled = true;
                    // disable todo-date
                    document.getElementById('Date' + this.todo.id).disabled = true;

                    //axios put request to modify the content and/ or the duedate of the todo
                    axios.put("https://jsonplaceholder.typicode.com/users/1", this.todo, {
                        transformRequest:[todo => {
                            todo.id=undefined
                            todo.userId=undefined
                            todo.lastModifiedDate=undefined
                            todo.createdDate=undefined
                        }]
                    })
                    .then(res => {
                        console.log(res.data)
                    })

                } 

            },

            deleteTodo() {
                console.log('Send Request to delete the Todo ' + this.todo.content)

                //axios delete request to delete the todo
                axios.delete("https://jsonplaceholder.typicode.com/users/4")
                    .then(function (res) {
                        console.log(res.data);
                        this.$el.parentNode.removeChild(this.$el);
                    })
            },

            updateCheck() {
                if (document.getElementById('Check' + this.todo.id).checked === true) {
                    console.log('Ist erledigt')
                    this.todo.status = 'COMLETED';
                    console.log(JSON.stringify(this.todo));
                } else {
                    console.log('Ist nicht erledigt')
                    this.todo.status = 'NONE';
                    console.log(JSON.stringify(this.todo));
                }

                //axios put request to modify the status of the todo
                axios.put("https://jsonplaceholder.typicode.com/users/1",this.todo, {
                    transformRequest:[todo =>{
                        todo.id=undefined
                        todo.userId=undefined
                        todo.lastModifiedDate=undefined
                        todo.createdDate=undefined
                    }]
                })
                    .then(res => {
                        console.log(res.data)
                    })

            },
        }
    }
</script>

<style scoped>
input {
  border: 0;
}

.todoContent {
  width: 340px;
}

.editbutton {
  color: black;
}

.editbutton:hover {
    transform: scale(1.2);
}

input[type="checkbox"] { /* change "blue" browser chrome to yellow */
  filter: invert(100%) hue-rotate(200deg) brightness(1.9);
  /* filter: invert(0%) hue-rotate(360deg) brightness(1.25); */
}

input[type="checkbox"]:hover {
  transform: scale(1.2);
}
</style>

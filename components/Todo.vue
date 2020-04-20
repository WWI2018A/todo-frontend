<template>
    <li>
        <div>
            <label>
                <input type="text" class="todoContent" v-model="todo.content" v-bind:id="'ToDo' + todo.id"
                       :disabled="todoFormDisabled">
                bis
            </label>
            <input type="datetime-local" v-model="todo.dueDate" v-bind:id="'Date' + todo.id"
                   :disabled="todoFormDisabled"/>

            <input type="checkbox" v-if="todo.status === 'COMPLETED'" v-on:click="updateCheck"
                   v-bind:id="'Check' + todo.id" v-b-tooltip.hover title="Todo abhaken" checked>
            <input type="checkbox" v-else v-on:click="updateCheck" v-bind:id="'Check' + todo.id" v-b-tooltip.hover
                   title="Todo abhaken">
            <button type="button" class="btn editbutton" v-on:click="editTodo" v-bind:id="'edit'+ todo.id"
                    v-b-tooltip.hover title="Todo bearbeiten"><i v-bind:id="'icon'+ todo.id"
                                                                 v-bind:class="editTodoBtnIconClass" class='fas'></i>
            </button>
            <button type="button" class="btn editbutton" v-on:click="deleteTodo" v-b-tooltip.hover title="Todo löschen">
                <i
                        class="fas fa-trash-alt"></i></button>
        </div>
    </li>
</template>

<script>
    import axios from 'axios';

    const API_URL = 'https://0f1e94dc-2f46-44c5-8aba-b4cc2da9bfb5.ma.bw-cloud-instance.org/api/v1/todos/';

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
            },
        },

        data() {
            return {
                editInfo: 'Todo bearbeiten',
                todoFormDisabled: true,
                todoChecked: this.todo.status === 'COMPLETED',
                editTodoBtnIconClass: this.todoFormDisabled ? 'fa-edit' : 'fa-save',
            }
        },

        methods: {
            /* Function for Click on Edit-Button for single Todo
            Change Icon and enable input-fields
            Save changes, disable input-fields an send values to todo-service */
            editTodo() {
                if (this.todoFormDisabled) {
                    this.todoFormDisabled = false;
                } else {
                    // post an to do service schicken
                    this.todoFormDisabled = true;
                    //axios put request to modify the content and the duedate of the todo
                    axios.put(API_URL + this.$props.todo.id, this.todo)
                        .then(res => {
                            console.log(res.data)
                        })
                }

            },

            /* Function for Click on Delete-Button for single Todo
            Send Delete-Request to todo-service and delete this Todo in frontend */
            deleteTodo() {
                //axios delete request to delete the todo
                console.log(API_URL + this.todo.id);
                axios.delete(API_URL + this.todo.id)
                    .then(function (res) {
                        console.log(res.data);
                        this.$el.parentNode.removeChild(this.$el);
                    })
            },

            /* Function for Click on Checkbox for single Todo
            Change checked/ unchecked status and send new status to todo-service */
            updateCheck() {
                this.todo.status = this.todoChecked ? 'UNCHECKED' : 'COMPLETED';
                console.log(this.todo);
                axios.put(API_URL + this.$props.todo.id, this.todo)
                    .then((res) => {
                        this. todoChecked = !this.todoChecked;
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

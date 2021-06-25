<template>
  <v-container pa-3 class="grey lighten-5">
    <v-row no-gutters justify="center">
      <v-col md="4">
        <AddTodoInput />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row no-gutters justify="center">
      <v-col md="12">
        <div>
          <v-subheader>Todo</v-subheader>
          <v-simple-table class="grey lighten-5">
            <template v-slot:default>
              <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                  <td width="1%">
                    <v-checkbox
                      v-model="todo.isCompleted"
                      @change="completetodo(todo.isCompleted, todo)"
                    ></v-checkbox>
                  </td>
                  <td width="99%">
                    <span
                      :style="
                        todo.isCompleted ? 'text-decoration:line-through' : ''
                      "
                      >{{ todo.desc }}</span
                    >
                  </td>
                  <td>
                    <v-btn icon color="grey" @click="removeTodo(todo.id)">
                      <v-icon>mdi-delete-circle-outline</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';

import { ITodo, ITodoList } from "@/store/modules/todo";
import AddTodoInput from "../components/AddTodoInput.vue";

@Component({
  components: {
    AddTodoInput
  }
})
export default class TodoListComponent extends Vue {
  todos: ITodoList = [];

  mounted() {
    this.todos = this.$store.getters['todoList/getTodoList'];
  }

  completeTodo(completed: boolean, todo: ITodo) {
    todo.isCompleted = completed;
    this.$store.dispatch('todoList/editTodo', todo).then(res=>{
      this.todos = this.$store.getters.todos;
    })
  }

  removeTodo(id:string){
    this.$store.dispatch('todoList/removeTodo',id)
  }

}
</script>

<template>
  <v-text-field
    v-model="desc"
    label="Add New Task"
    filled
    outlined
    shaped
    dense
    append-icon="mdi-view-grid-plus-outline"
    @click:append="addNewTask"
    @keyup.enter="addNewTask"
  />
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { v4 as uuidv4 } from 'uuid';

@Component({})
export default class AddTaskComponent extends Vue {
  desc: string = "";

  addNewTask(): void {
    if (this.desc === "") return;
    this.$store.dispatch("todoList/addTodo", {
      id: uuidv4(),
      desc: this.desc,
      isCompleted: false,
    });
    this.desc = "";
  }
}
</script>

<style scoped></style>

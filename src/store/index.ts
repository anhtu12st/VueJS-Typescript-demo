import Vue from "vue";
import Vuex from "vuex";

import { ITodoList, todoModule } from "./modules/todo";

Vue.use(Vuex);

export interface IRootState {
  todos: ITodoList;
}

export default new Vuex.Store<IRootState>({
  modules: {
    todoList: todoModule,
  }
});

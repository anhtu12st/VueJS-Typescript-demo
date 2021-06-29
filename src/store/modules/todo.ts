import { Module } from "vuex";
import { IRootState } from "..";

export interface ITodo {
  id: string;
  desc: string;
  isCompleted: boolean;
}

export interface ITodoList extends Array<ITodo>{}

export const todoModule: Module<ITodoList, IRootState> = {
  namespaced: true,
	state: [
		{ id: '1', desc: 'Fist todo (example)', isCompleted: false }
	],
	mutations: {
		addTodo(state: ITodoList, todo: ITodo): void {
			state.push(todo);
		},
		editTodo(state: ITodoList, todo: ITodo): void {
			const todoIdx: number = state.findIndex(t => t.id === todo.id);
			state[todoIdx] = todo;
		},
		removeTodo(state: ITodoList, id: string): void {
			const todoIdx: number = state.findIndex(t => t.id === id);
			todoIdx > -1 ? state.splice(todoIdx, 1) : new Error('Invalid todo id');
		},
	},
	actions: {
		addTodo(context, todo: ITodo): void {
			context.commit('addTodo', todo);
		},
		editTodo(context, todo: ITodo): void {
			context.commit('editTodo', todo);
		},
		removeTodo(context, id: string): void {
			context.commit('removeTodo', id);
		}
	},
	getters: {
		getTodoList(state: ITodoList): ITodoList{
			return state;
		}
	},
};

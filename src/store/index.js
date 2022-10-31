import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  getters: {
    listInfo: state => state.todoList
  },
  mutations: {
    setTodos: (state, todoList) => (state.todoList = todoList),
    addNewTodo: (state, todos) => state.todoList.unshift(todos),
    deleteItemTodo: (state, id) => (state.todoList = state.todoList.filter(todos => todos.id !== id))
  },
  actions: {
    async fetchData({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTodos', res.data)
    },
    async addTodo({ commit }, title) {
      const res = await axios.post('https://jsonplaceholder.typicode.com/todos', { title });
      commit('addNewTodo', res.data)
    },
    async deleteTodos({ commit }, id) {
       await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('deleteItemTodo', id)
    },
    async filterTodoList({ commit }, e) {
     const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
     );
     const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
     commit('setTodos', res.data)
    }
  },
  modules: {
  }
})
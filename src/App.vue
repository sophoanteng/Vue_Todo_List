<template>
  <div id="app">
    <addListTodo />
    <filterTodo />
    <listTodo />
  </div>
</template>

<script>
import listTodo from './components/listTodo.vue'
import addListTodo from './components/addListTodo.vue'
import filterTodo from './components/filterTodo.vue'

export default {
  name: 'App',
  components: {
    listTodo,
    addListTodo,
    filterTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

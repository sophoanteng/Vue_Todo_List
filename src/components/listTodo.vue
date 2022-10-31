<template>
    <div class="todos">
        <div class="todo" v-for="todos in listInfo" :key="todos.id">
            {{todos.title}}
            <button class="delete" style="color: red"  @click="deleteTodos(todos.id)">delete</button>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    created() {
        this.fetchData()
    },
    computed: {
     ...mapGetters(["listInfo"])
    },
    methods: {
     ...mapActions(["fetchData", "deleteTodos"])
    }
}
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-top: 40px;
  text-align: start;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  display: flex;
}

.delete {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
  padding: 7px;
  border: none;
  border-radius: 6px;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>

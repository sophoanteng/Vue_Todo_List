<template>
    <div class="add">
      <form  @submit="clickAdd">
        <input type="text" v-model="title" placeholder="enter to do...">
        <button class="btn-submit" type="submit" alue="Submit">Add</button>
      </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            title: ""
        }
    },
   methods: {
    ...mapActions(["addTodo", "deleteTodos"]),
    clickAdd(e) {
        e.preventDefault();
        this.addTodo(this.title)
        this.title = ""
    }
   }
}
</script>
<style scoped>
.add{
    display: flex;
  align-items: center;
  justify-content: center;
}
.btn-submit{
    width: 60px;
    border: none;
    background: #41b883;
    color: white
}
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
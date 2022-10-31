<template>
    <div>
        <select class="selectStyle" @change="filterTodoList($event)">
            <option value="200">200</option>
            <option value="200">100</option>
            <option value="200">50</option>
            <option value="200">20</option>
            <option value="200">10</option>
            <option value="200">5</option>
        </select>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
     methods: {
      ...mapActions(["filterTodoList"])
     }
}
</script>
<style scoped>
.selectStyle{
    width: 5%;
    padding: 8px;
    margin-top: 25px;
}
</style>
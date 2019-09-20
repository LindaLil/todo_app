<template>
  <div class="todoBox">
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import todoInput from '../components/todoInput'
import todoList from '../components/todoList'
export default {
  name: 'todo',
  components: { todoInput, todoList }
}
</script>

<style scoped lang="stylus">
.todoBox
  width 60vw
  height 40vh
  margin 0 auto
</style>

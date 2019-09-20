<template>
    <ul class="todo-list">
      <todo-li :content="item.content" :idx="index" v-for="(item,index) in this.$store.state.todoList" :key="index" @changeContent="changeContent"></todo-li>
    </ul>
</template>

<script>
import TodoLi from './todoLi'
export default {
  name: 'todoList',
  components: { TodoLi },
  data () {
    return {

    }
  },
  methods: {
    changeContent (obj) {
      console.log(obj)
      this.$store.commit('changeTaskContent', { idx: obj.idx, content: obj.val})
    }
  }
}
</script>

<style scoped lang="stylus">
.todo-list
  margin 0
  padding 0
  font-size 16px
</style>

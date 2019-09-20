<template>
  <div class="todo-input" name="todoInput">
    <el-input placeholder="请输入任务" v-model="input"></el-input>
    <el-button type="success" @click="addTask">添加</el-button>
  </div>
</template>

<script>
export default {
  name: 'todoInput',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    addTask () {
      this.$store.commit('addItemList', {content: this.input , isChecked: false})
      this.input = ''
    }
  }
}
</script>

<style scoped lang="stylus">
.todo-input
  width 100%
  height 10vh
  display flex
  justify-content space-between
  align-items center
  & .el-input
    width 85%
.el-input:focus
    box-shadow none
    border-color red
</style>

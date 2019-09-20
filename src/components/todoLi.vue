<template>
    <li @mouseenter="mouseEnter" @mouseleave="mouseLeave" :class="isChecked?'done':''">
      <el-checkbox v-model="isChecked" @change="changeChecked">
        <span v-if="!isEdit">{{this.content}}</span>
        <el-input ref="itemInput" v-else :value="this.content" @input="changeTask"></el-input>
      </el-checkbox>
      <div>
        <div v-if="isEdit">
          <el-tooltip effect="dark" content="保存" placement="top">
            <el-button type="success" circle size="small" icon="el-icon-check" @click="saveEdit"></el-button>
          </el-tooltip>
          <el-tooltip effect="dark" content="取消" placement="top">
            <el-button circle size="small" icon="el-icon-close" @click="cancelEdit"></el-button>
          </el-tooltip>
        </div>
        <el-button type="primary" round size="small" v-else v-show="!isChecked && isEntered" @click="editTask">编辑</el-button>
        <el-button type="danger" round size="small" v-show="isEntered && !isEdit" @click="deleteTask">删除</el-button>
      </div>
    </li>
</template>

<script>
export default {
  name: 'todoLi',
  props: {
    content: {
      type: String,
      required: true,
      default: '这是一个字符串类型的数据'
    },
    idx: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data () {
    return {
      isChecked: this.$store.state.todoList[this.idx].isChecked,
      isEntered: false,
      isEdit: false
    }
  },
  methods: {
    mouseEnter () {
      this.isEntered = true
    },
    mouseLeave () {
      this.isEntered = false
    },
    changeChecked (checkedVal) {
      let that = this
      this.$store.commit('changeTaskStatus', { idx: that.idx, isChecked: checkedVal })
    },
    deleteTask () {
      this.$store.commit('deleteItemList', this.idx)
    },
    changeTask (value) {
      // console.log(this.idx)
      // console.log(value)
      let that = this
      this.$emit('changeContent', { idx: that.idx, val: value })
    },
    editTask () {
      this.isEdit = true
    },
    cancelEdit () {
      this.isEdit = false
      return false
    },
    saveEdit () {
      let that = this
      this.$store.commit('editItemList', { idx: that.idx, content: that.content, isChecked: this.isChecked })
      this.isEdit = false
    }
  }
}
</script>

<style lang="stylus">
li
  margin-bottom 10px
  height 45px
  text-align left
  list-style none
  border-bottom 1px dashed #efefef
  display flex
  justify-content space-between
  align-items center
  .el-checkbox
    width 60%
    .el-checkbox__label
      width 100%
      text-overflow ellipsis
      overflow hidden
      white-space nowrap
    .el-checkbox__input
      margin-top -11px
  &.done
    .el-checkbox__input.is-checked+.el-checkbox__label
      color #999
      text-decoration  line-through
    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner
      background-color #999
      border-color #999
</style>

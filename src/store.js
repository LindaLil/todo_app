import Vue from 'vue'
import Vuex from 'vuex'
import storageObj from './common/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: storageObj.get('todoList')
    // todoList: [{content:'000', isChecked: false}]
  },
  mutations: {
    addItemList (state, obj) {
      state.todoList.push(obj)
      storageObj.set('todoList', state.todoList)
    },
    deleteItemList (state, index) {
      state.todoList.splice(index, 1)
      storageObj.set('todoList', state.todoList)
    },
    editItemList (state, data) {
      Vue.set(state.todoList, data.idx, { content: data.content, isChecked: data.isChecked })
      storageObj.set('todoList', state.todoList)
    },
    changeTaskStatus (state, data) {
      Vue.set(state.todoList[data.idx], 'isChecked', data.isChecked)
      storageObj.set('todoList', state.todoList)
    },
    changeTaskContent (state, data) {
      Vue.set(state.todoList[data.idx], 'content', data.content)
    }
  },
  actions: {
    addItemList (context, obj) {
      context.commit('addItemList', obj)
    },
    deleteItemList (context, index) {
      context.commit('deleteItemList', index)
    },
    editItemList (context, data) {
      context.commit('editItemList', data)
    }
  }
})

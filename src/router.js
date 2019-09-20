import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/views/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: Todo
    }
  ]
})

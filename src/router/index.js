import Vue from 'vue'
import Router from 'vue-router'
import ShowTime from '@/components/ShowTime'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/time',
      name: 'ShowTime',
      component: ShowTime
    }
  ]
})

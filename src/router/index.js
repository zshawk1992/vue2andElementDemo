import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import data from '@/views/data'
import status from '@/views/status'
import bikes from '@/views/bikes'
import userAdd from '@/views/userAdd'
import userList from '@/views/userList'
import rider from '@/views/rider'
import index from '@/views/index'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history',//去掉#hash模式
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/',
      component: index,
      children:[
        {
          path: '/home',
          component: home
        },
        {
          path: '/status',
          component: status
        },
        {
          path: '/data',
          component: data,
          children:[
            {
              path: '/data/userList',
              component: userList
            },{
              path: '/data/userAdd',
              component: userAdd
            },{
              path: '/data/bikes',
              component: bikes
            },{
              path: '/data/rider',
              component: rider
            }
          ]
        }
      ]
    },{
      path: '/login',
      component: login
    },
    // {
    //   path: '*',
    //   redirect:'/'
    // }

  ]
})

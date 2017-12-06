import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import mainPage from '@/components/mainPage'
import frist from '@/components/frist'
import second from '@/components/second'
Vue.use(Router)

export default new Router({
  base: '/vueTemplate/',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
      redirect: '/HelloWorld',
      children:[
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/frist',
          name: 'frist',
          component: frist
        },
        {
          path: '/second',
          name: 'second',
          component: second
        }
      ],
    }
  ]
})

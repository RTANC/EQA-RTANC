import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: HelloWorld
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

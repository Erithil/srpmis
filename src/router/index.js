import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Pinfo from '@/components/home/Pinfo'
import Pdata from '@/components/home/Pdata'
import Userm from '@/components/home/Userm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },  
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
            path:'/home/',
            name: 'Pinfo',
            component: Pinfo
        },
        {
            path:'/home/data',
            name: 'Pdata',
            component: Pdata
        },
        {
            path:'/home/user',
            name: 'Userm',
            component: Userm
        }
      ]
    }
  ]
})

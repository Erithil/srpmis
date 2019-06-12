import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Homet from '@/components/Homet'
import Homes from '@/components/Homes'
import Sinfo from '@/components/student/Sinfo'
import Sdata from '@/components/student/Sdata'
import Suser from '@/components/student/Suser'
import Tinfo from '@/components/teacher/Tinfo'
import Tdata from '@/components/teacher/Tdata'
import Tuser from '@/components/teacher/Tuser'

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
      path: '/homet',
      name: 'homet',
      component: Homet,
      children:[
      {
          path:'home/',
          name: 'Tinfo',
          component: Tinfo
      },
      {
          path:'home/Tdata',
          name: 'Tdata',
          component: Tdata
      },
      {
          path:'home/Tuser',
          name: 'Tuser',
          component: Tuser
      }
      ]
    },
    {
      path: '/homes',
      name: 'homes',
      component: Homes,
      children:[
      {
          path:'homes/',
          name: 'Sinfo',
          component: Sinfo
      },
      {
          path:'home/Sdata',
          name: 'Sdata',
          component: Sdata
      },
      {
          path:'home/Suser',
          name: 'Suser',
          component: Suser
      }
      ]
    },

  ]
})

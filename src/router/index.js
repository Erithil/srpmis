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
import Tadd from '@/components/teacher/Tadd'
import Tdatam from '@/components/teacher/Tdatam.vue'

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
          path:'homet/:uname',
          name: 'Tinfo',
          component: Tinfo
      },
      {
          path:'homet/Tdata/:uname',
          name: 'Tdata',
          component: Tdata,
          children: [
          {
            path: 'homet/Tdatam/:uname',
            name: 'Tdatam',
            component: Tdatam,
          },
          {
            path: 'homet/Tdata/Tadd/:uname',
            name: 'Tadd',
            component: Tadd,
          },
          ]
      },
      {
          path:'homet/Tuser/:uname',
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
          path:'homes/Sdata',
          name: 'Sdata',
          component: Sdata
      },
      {
          path:'homes/Suser',
          name: 'Suser',
          component: Suser
      }
      ]
    },

  ]
})

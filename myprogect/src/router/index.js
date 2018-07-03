import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import class3 from '@/components/class3'
import class4 from '@/components/class4'
import class5 from '@/components/class5'
import class6 from '@/components/class6'
import class7 from '@/components/class7'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/class3',
      name: 'class3',
      component: class3
    },
    {
      path: '/class4',
      name: 'class4',
      component: class4
    },
    {
      path: '/class5',
      name: 'class5',
      component: class5
    },
    {
      path: '/class6',
      name: 'class6',
      component: class6
    },
    {
      path: '/class7',
      name: 'class7',
      component: class7
    }
  ]
})

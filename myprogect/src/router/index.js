import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import class3 from '@/components/class3'
import class4 from '@/components/class4'
import class5 from '@/components/class5'
import class6 from '@/components/class6'
import class7 from '@/components/class7'
import class8 from '@/components/class8'
import class9 from '@/components/class9'
import class10 from '@/components/class10'
import test from '@/components/test'
import class11 from '@/components/class11'
import class12 from '@/components/class12'

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
    },
    {
      path: '/class8',
      name: 'class8',
      component: class8
    },
    {
      path: '/class9',
      name: 'class9',
      component: class9
    },
    {
      path: '/class10',
      name: 'class10',
      component: class10
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/class11',
      name: 'class11',
      component: class11
    },
    {
      path: '/class12',
      name: 'class12',
      component: class12
    }
  ]
})

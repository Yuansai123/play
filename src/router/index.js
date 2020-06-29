import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Play from '@/components/play'
import Demo from '@/components/demo'
import Luyin from '@/components/luyin'
import Voice from '@/components/voice'
//"____________________________________"
import Table from '@/pages/table'
import Echarts from '@/pages/Echarts'
import Svg from '@/pages/svg'
import H5 from '@/pages/h5'
import Hh5 from '@/pages/hh5'
import Test from '@/pages/test'
// import Aplay from '@/components/aplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/luyin',
      name: 'Luyin',
      component: Luyin
    },
    {
      path: '/voice',
      name: 'Voice',
      component: Voice
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/svg',
      name: 'Svg',
      component: Svg
    },
    {
      path: '/h5',
      name: 'H5',
      component: H5
    },
    {
      path: '/hh5',
      name: 'Hh5',
      component: Hh5
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

import Router from 'vue-router'
import kalendar from '@/components/kalendar'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'kalendar',
      component: kalendar
    }
  ]
})

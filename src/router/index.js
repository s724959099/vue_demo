import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/layout/weather'
import index from '@/components/layout/index'
import unify from '@/components/layout/unify'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/weather',
      component: Weather
    },
    {
      path: '/',
      component: index
    },
    {
      path: '/unify',
      component: unify
    },
  ]
})

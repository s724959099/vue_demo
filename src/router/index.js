import Vue from 'vue'
import Router from 'vue-router'
import Weather from '@/components/layout/weather'
import index from '@/components/layout/index'

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
  ]
})

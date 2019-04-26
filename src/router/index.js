import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/index/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

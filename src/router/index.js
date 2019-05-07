import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/index/home.vue'
import recommend from '@/components/index/subpage/recommend.vue'
import singer from '@/components/index/subpage/singer.vue'
import topList from '@/components/index/subpage/topList.vue'
import search from '@/components/index/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[{
        path:'recommend',
        name:'recommend',
        component:recommend
      },{
        path:'singer',
        name:'singer',
        component:singer
      },{
        path:'topList',
        name:'topList',
        component:topList
      }]
    },{
      path:'/search',
      name:'search',
      component:search
    }

  ]
})

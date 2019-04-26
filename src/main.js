// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//仓库
import store from './store'
//element-ui
import ElementUI from 'element-ui'
Vue.config.productionTip = false;
Vue.use(ElementUI)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

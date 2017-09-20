// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//路由
import routes from './routes'

//引入一些外部插件
import $ from 'jquery'
import '../plugins/ztree/jquery.ztree.core.js'
import '../plugins/ztree/jquery.ztree.excheck-3.5.js'

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  template:`
  	<div>
  		<transition name="fade" mode="out-in">
  			<router-view></router-view>
  		</transition>
  	</div>
  `
}).$mount('#app')

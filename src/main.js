import Vue from 'vue'
import App from './App'
import router from './router'
import configPath from '../config/configPath.js'
import {mapGetters,mapActions} from 'vuex' 
import store from './store.js'
import axios from 'axios'
import swallow from './assets/js/swallow.js'
import {post,postImg,fetch,patch,put} from './ajax.js'
import layer from 'vue-layer'
import i18n from './VueI18n'
import 'babel-polyfill'
Vue.config.productionTip = false
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$postImg = postImg
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$swallow=swallow;
Vue.prototype.$layer = layer(Vue);

Vue.prototype.staticPath = global.staticPath 
router.beforeEach((to, from, next)=>{
	if(to.meta.requireLogin){
		if(swallow.getCookie('yen_u_key_')){
			next();
		}else{
			 next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
		}
	}else{
		next();
	}
})
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})



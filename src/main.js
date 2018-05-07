import Vue from 'vue'
import App from './App'
import router from './router'
import configPath from '../config/configPath.js'
import {mapGetters,mapActions} from 'vuex' 
import store from './store.js'
import $ from 'jquery'
Vue.config.productionTip = false

Vue.prototype.staticPath = global.staticPath 

router.beforeEach((to, from, next)=>{
	var toPath = to.path;
	var Lang = toPath.substring(1,3);
	var path = toPath.substring(3);
	if(Lang == 'en' || Lang == 'vn'){
		store.dispatch('langChange',Lang)
		next();
	}else{
		toPath = '/'+store.state.lang+toPath;
		next(toPath);
	}
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



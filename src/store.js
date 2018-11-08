import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 这里定义初始值
let state = {//lang定义语言,默认En,值只能是En/Cn/Vn
    lang:"en",
    isLogin:false,
    bodyLocking:false,
};
const mutations = {
    langChange(state,lang){
        state.lang = lang
    },
};
// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
    langChange(state,data){
        state.commit('langChange',data)
    },
};

// 返回改变后的数值
const getters = {

};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
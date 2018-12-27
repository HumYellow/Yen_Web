import Vue from 'vue'
import VueI18n from 'vue-i18n'
import swallow from './assets/js/swallow.js'

import LangEn from '../static/lang/en'
import LangCn from '../static/lang/cn'
import LangVn from '../static/lang/vn'

Vue.use(VueI18n)
let lang = swallow.localStorageGet('lang')
const i18n = new VueI18n({
  //定义默认语言
  locale: lang?lang:'VN',
  messages:{
    'EN': LangEn,
    'CN': LangCn,
    'VN': LangVn
  }
})

export default i18n
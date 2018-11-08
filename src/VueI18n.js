import Vue from 'vue'
import VueI18n from 'vue-i18n'

import LangEn from '../static/lang/en'
import LangCn from '../static/lang/cn'
import LangVn from '../static/lang/vn'

Vue.use(VueI18n)
const i18n = new VueI18n({
  //定义默认语言
  locale: 'vn', 
  messages:{
    'en': LangEn,
    'cn': LangCn,
    'vn': LangVn
  }
})

export default i18n
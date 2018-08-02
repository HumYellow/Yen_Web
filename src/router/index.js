import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store.js'

import zero from '@/page/zero'
import home from '@/page/home'
import ourServices from '@/page/ourServices'
import aboutUs from '@/page/aboutUs'
import alphaTownMod from '@/page/alphaTownMod'
import media from '@/page/media'
import contactUs from '@/page/contactUs'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base:'swallow',
  routes: [
    {
      path:'*',
      component: zero,
    },
    {
      path:'/en',
      component: home,
      children:[
          {
            path: '/',
            component: home
          },
          {
            path: 'ourservices',
            component: ourServices
          },
          {
            path: 'aboutus',
            component: aboutUs
          },
          {
            path: 'alphatownMod',
            component: alphaTownMod
          },
          {
            path: 'media',
            component: media
          },
          {
            path: 'contactus',
            component: contactUs
          }
        ],
    },{
      path:'/vn',
      name: 'Vn',
      component: home,
      children:[
          {
            path: '/',
            component: home
          },
          {
            path: 'ourServices',
            component: ourServices
          },
          {
            path: 'aboutUs',
            component: aboutUs
          },
          {
            path: 'alphaTownMod',
            component: alphaTownMod
          },
          {
            path: 'media',
            component: media
          },
          {
            path: 'contactUs',
            component: contactUs
          }
        ],
    },
  ],
})
  
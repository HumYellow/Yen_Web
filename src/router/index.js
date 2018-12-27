import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store.js'

import zero from '@/page/zero'

import home from '@/page/home'
import login from '@/page/login'
import register from '@/page/register'
import forgetPassword from '@/page/forgetPassword'
import design from '@/page/design'
import designType from '@/page/designType'
import designDetails from '@/page/designDetails'
import designerDetails from '@/page/designerDetails'
import company from '@/page/company'
import companyDetails from '@/page/companyDetails'
import strategy from '@/page/strategy'
import strategyList from '@/page/strategyList'
import strategyDetails from '@/page/strategyDetails'
import guarantee from '@/page/guarantee'
import placeOrder from '@/page/placeOrder'

import myCenter from '@/page/myCenter'
import myCenterHome from '@/components/myCenter/MyCenterHome/MyCenterHome'
import collectDesign from '@/components/myCenter/myCenterCollect/collectDesign'
import collectCompany from '@/components/myCenter/myCenterCollect/collectCompany'
import myDesignList from '@/components/myCenter/myDesign/myDesignList'
import myDesignRevise from '@/components/myCenter/myDesign/myDesignRevise'
import modifyPhone from '@/components/myCenter/modifyPhone/modifyPhone'
import modifyPhoneFinish from '@/components/myCenter/modifyPhone/modifyPhoneFinish'

import aboutYen from '@/page/aboutYen'
import termsService from '@/components/aboutYen/termsService'
import aboutUs from '@/components/aboutYen/aboutUs'
import contactUs from '@/components/aboutYen/contactUs'
import businessCooperation from '@/page/footerPage/businessCooperation'

import personalData from '@/components/myCenter/personalData/personalData'


Vue.use(Router)
export default new Router({
  mode: 'history',
  base:'',
  routes: [
    {
      path: '/',
      name:'home',
      meta:{
        type:'home'
      },
      component: home
    },
    {
      path:'/login',
      name:'login',
      component: login
      
    },
    {
      path:'/register',
      name:'register',
      component: register
      
    },
    {
      path:'/forgetPassword',
      name:'forgetPassword',
      component: forgetPassword
      
    },
    {
      path: '/design',
      name:'design',
      meta:{
        type:'design'
      },
      component: design
    },
    {
      path: '/designType',
      name:'designType',
      meta:{
        type:'design'
      },
      component: designType
    },
    {
      path: '/designDetails/:id',
      meta:{
        type:'design'
      },
      component: designDetails
    },
    {
      path: '/designerDetails/:id',
      meta:{
        type:'designerDetails'
      },
      component: designerDetails
    },
    {
      path:'/company',
      name:'company',
      meta:{
        type:'company'
      },
      component: company
      
    },
    {
      path:'/companyDetails/:id',
      meta:{
        type:'company'
      },
      component: companyDetails
    },
    {
      path:'/strategy',
      name:'strategy',
      meta:{
        type:'strategy'
      },
      component: strategy
      
    },
    {
      path:'/strategyList/:id',
      meta:{
        type:'strategy'
      },
      component: strategyList
      
    },
    {
      path:'/strategyDetails/:id',
      meta:{
        type:'strategy'
      },
      component: strategyDetails
      
    },
    {
      path:'/guarantee',
      name:'guarantee',
      meta:{
        type:'guarantee'
      },
      component: guarantee,
      
    },
    {
      path:'/placeOrder',
      name:'placeOrder',
      meta:{
        type:'placeOrder'
      },
      component: placeOrder,
      
    },
    {
      path:'/myCenter',
      component: myCenter,
      children:[{
        path: '/',
        name: 'myCenterHome',
        meta:{
          requireLogin:true,
        },
        component: myCenterHome
      },{
        path: 'collectDesign',
        name: 'collectDesign',
        meta:{
          requireLogin:true,
        },
        component: collectDesign

      },{
        path: 'collectCompany',
        name: 'collectCompany',
        meta:{
          requireLogin:true,
        },
        component: collectCompany

      },{
        path: 'myDesignList',
        name: 'myDesignList',
        meta:{
          requireLogin:true,
        },
        component: myDesignList
      },{
        path: 'myDesignRevise/:id',
        name: 'myDesignRevise',
        meta:{
          requireLogin:true,
          keepAlive:false,
        },
        component: myDesignRevise
      },{
        path: 'personalData',
        name: 'personalData',
        meta:{
          requireLogin:true,
        },
        component: personalData
      },{
        path: 'modifyPhone',
        name: 'modifyPhone',
        meta:{
          requireLogin:true,
        },
        component: modifyPhone
      },{
        path: 'modifyPhoneFinish',
        name: 'modifyPhoneFinish',
        meta:{
          requireLogin:true,
        },
        component: modifyPhoneFinish
      },]
      
    },
    {
      path:'/aboutYen',
      name:'aboutYen',
      meta:{
        type:'aboutYen'
      },
      component: aboutYen,
      children:[{
          path: 'termsService',
          name: 'termsService',
          meta:{
          },
          component: termsService
        },{
          path: 'aboutUs',
          name: 'aboutUs',
          meta:{
          },
          component: aboutUs
        },{
          path: 'contactUs',
          name: 'contactUs',
          meta:{
          },
          component: contactUs
        },
      ]
    },
    {
      path:'/businessCooperation',
      name:'businessCooperation',
      meta:{
        type:'businessCooperation'
      },
      component: businessCooperation,
      
    },
  ],
})
  
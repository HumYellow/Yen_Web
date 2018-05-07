<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {mapGetters,mapActions} from 'vuex' 
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import './assets/css/main.css'
export default {
  name: 'App',
  components:{
    MyHeader,
    MyFooter,
  },
  data () {
    return {

    }
  },
  mounted:function(){
    
  },
  methods:{
  }
}
</script> 

<style>
</style>

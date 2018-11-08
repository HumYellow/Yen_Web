<style>
#app{width:100%;height:100%;background:#f8f8f8;min-width:960px;}
</style>
<template>
  <div id="app"  rel="app">
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import Vue from 'vue'
import {mapGetters,mapActions} from 'vuex' 
import 'swiper/dist/css/swiper.css'

import MyFooter from '@/components/MyFooter'
import './assets/css/main.css'
export default {
  name: 'App',
  data(){
    return{
      bodyLocking:this.$store.state.bodyLocking
    }
  },
  components:{
    MyFooter,
  },
  data () {
    return {

    }
  },
  mounted:function(){
    this.bodyLocking = this.$store.state.bodyLocking
    
  },
  methods:{
  }
}
</script> 


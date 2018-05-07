<template>
	<div class="header" id="header">
		<ul class="menu clear">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/ourservices">Our Services</router-link></li>
			<li><router-link to="/aboutus">About Us</router-link></li>
			<li><router-link to="/alphatownMod">Alpha Town</router-link></li>
			<li><router-link to="/media">Media</router-link></li>
			<li><router-link to="/contactus">Contact Us</router-link></li>
		</ul>
		<div class="langChange clear">
			<div @click="linkTo('en')" class="langMod">En</div>
			<div @click="linkTo('vn')" class="langMod">Vn</div>
			<div @click="look" class="langMod">我看看而已</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import vue from 'vue'
import store from '@/store.js'
import {mapGetters,mapActions} from 'vuex' 
export default{
	name:'myHeader',
	data(){
		return{
			lang:this.$store.state.lang,
			path:{
				home:'',
				ourServices:'',
				aboutUs:'',
				alphaTownMod:'',
				media:'',
				contactUs:'',
			}
		}
	},
	computed:{
		pathBuild:function(){
			for(let i in this.path){
				this.path[i] = '/'+this.lang+'/'+i
			}
			return this.path;
		}
	},
	methods:{
		...mapActions(['langChange']),
		linkTo:function(lang){
			var path = this.$route.path.substring(1,3)
			if(path!=lang){
				path = '/'+lang+this.$route.path.substring(3)
				this.$router.push(path)
			}
			
		},
		look:function(){
			console.info(this.$store.state.lang);
		}
	},
	created:function(){
	}
}
</script>
<style lang="scss" type="text/css">
.header{background:green;height:50px;color:#fff;position:relative}
.menu{text-align:center; width:100%;}
.menu li{display:inline-block;}
.menu li a{color:#fff;}
.langChange{position:absolute;right:20px; top:20px;}
.langMod{float:left; margin:0 5px;}
</style>
<template>
	<div class="header" id="header">
		<div class="loginNav">
			<div class="loginMod"><span>登陆</span>\<span>注册</span></div>
		</div>
		<div class="menu">
			<ul class="clear">
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/ourservices">Our Services</router-link></li>
				<li><router-link to="/aboutus">About Us</router-link></li>
				<li><router-link to="/alphatownMod">Alpha Town</router-link></li>
				<li><router-link to="/media">Media</router-link></li>
				<li><router-link to="/contactus">Contact Us</router-link></li>
			</ul>
		</div>
		<a class="logo"><img width="80" :src="this.logoUrl" /></a>
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
			},
			logoUrl:global.localPath+'/logo.png'
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
.header{position:relative}
.loginNav{background:#444;color:#fff;height:50px; line-height:50px;}
.loginMod{float:right; margin-right:5vw;}
.loginMod span{margin:0 10px;}
.menu{text-align:right; margin-right:5vw; color:#000;height:60px;line-height:60px;}
.menu li{display:inline-block; padding:0 10px;}
.menu li a{}
.logo{position:absolute; left:20px;top:0;}
.langChange{position:absolute;right:20px; top:20px;}
.langMod{float:left; margin:0 5px;}
</style>
<style type="text/css">
#myHeader.header{position:relative; color:#353535;text-align:right; height:62px;line-height:60px;z-index:2;box-shadow: 2px 2px 10px #e9e9e9;background:#fff;padding-bottom:4px;}
.headerCenter{width:1280px;margin:0 auto;position:relative;background:#fff;}
#myHeader ul{display:inline-block;}
#myHeader li{display:inline-block; padding:0 15px;margin:0 15px;border-bottom:2px solid #fff;font-size:14px;}
#myHeader li.select{border-color:#2B9684;}
#myHeader li a{color:#000;}
#myHeader li.select a ,#myHeader li a:hover{color:#2B9684;}
#myHeader .loginMod{color:#333;display:inline-block;font-size:12px;}
#myHeader .loginMod a{margin:0 10px; color:#333;}
#myHeader .logo{position:absolute; left:0;top:0;}
#myHeader .langChange{position:absolute;right:20px; top:20px;}
#myHeader .langMod{margin:0 5px;display: inline-block;font-size:12px;}
#myHeader .langMod a{margin:0 3px;}
#myHeader .langMod .select{color:#3FBB87;}
</style>
<template>
	<div class="header" id="myHeader">
		<div class="headerCenter">
			<ul class="clear">
				<li v-for="link in linkList" :class="typeName == link.name?'select':''"><router-link :to="link.path">{{link.text}}</router-link></li>
			</ul>
			<div v-if="isLogin" class="loginMod">
				<router-link to="/myCenter">{{user.phone}}</router-link>
				<a @click="signOut">{{$t("message.login.logout")}}</a>
			</div>
			<div class="loginMod" v-else>
				<div v-if="showHead">
					<router-link to="/login">{{$t("message.login.login")}}</router-link>
					/<router-link to="/register">{{$t("message.login.register")}}</router-link>
				</div>
			</div>
			<div class="langMod">
				<a :class="lang=='EN'?'select':''" @click="langTabFn('EN')">[EN]</a>
				<a :class="lang=='VN'||lang==null?'select':''" @click="langTabFn('VN')">[VN]</a>
			</div>
			<a href="/" class="logo"><img width="72" :src="this.logoUrl" /></a>
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
			typeName:this.$route.meta.type,
			linkList:[{
				name:'home',
				text:this.$t("message.menu.Home"),
				path:'/'
			},{
				name:'design',
				text:this.$t("message.menu.Design"),
				path:'/design'
			},{
				name:'company',
				text:this.$t("message.menu.Company"),
				path:'/company'
			},{
				name:'strategy',
				text:this.$t("message.menu.Strategy"),
				path:'/strategy'
			},{
				name:'guarantee',
				text:this.$t("message.menu.Guarantee"),
				path:'/guarantee'
			}],
			showHead:true,
			noShowList:[],
			lang:this.$swallow.localStorageGet("lang"),
			contactShow:true,
			path:{
				home:'',
				ourServices:'',
				aboutUs:'',
				alphaTownMod:'',
				media:'',
				contactUs:'',
			},
			logoUrl:global.localPath+'/logo2.png',
			user:{
				id:'',
				username:'',
			},
			isLogin:this.$swallow.isLogin(),
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
			
		},
		showTab:function(){//切换展示
			for(var i = 0;i < this.noShowList.length;i++){
				this.$route.path == this.noShowList[i]?this.showHead = false:this.showHead = true
				if(this.showHead == false)return
			}
		},
		signOut:function(){
			this.$swallow.delCookie('yen_u_key_');
			this.isLogin = this.$swallow.isLogin();
			this.$router.push('/')
		},
		getData:function(){
			this.$fetch('login/info')
			.then((response) => {
				this.user = response.data
			})

		},
		langTabFn:function(lang){
			this.$swallow.localStorageSet("lang",lang)
			window.history.go(0)
		},
	},
	mounted:function(){
		this.showTab()
	},
	watch:{
		"$route": function (to, from) {
			this.getData()
	        this.showTab();
	　　}
	},
	created(){
		this.getData()
	},
}
</script>
<style type="text/css">
#login{background:#fff;height:100vh;width:100%;}
#login .loginPage{max-width:960px;margin:10vw auto;background:#fff;}
#login .loginPage img{float:left;padding:20px 0;}
#login .loginPage .loginBox{width:50%;float:left;padding:30px;box-sizing: border-box;
	background:url('/static/image/loginBg.png') center no-repeat;background-size:90% 100%;}
#login .loginPage .loginTitle{text-align:center; font-size:22px;margin:3vh auto 5vh;color:#3fbb87;}
#login .loginPage .loginMod{text-align:center;}
#login .loginPage .loginBox input{border:0;outline:none;border-bottom:1px solid #cacaca;font-size:16px; line-height:22px;width:80%;padding:5px 10px;box-sizing: border-box;}
#login .loginPage .toLogin{display:block;margin:40px auto 0;width:80%; padding:10px 0; font-size:18px;height:30px;line-height:30px; color:#fff; background:#3FBB87; border-radius:5px;text-align:center;}
#login .forgetPasswordLink{text-align:right;padding:0 40px;margin-top:10px;}
#login .forgetPasswordLink a{color:#CACACA;font-size:12px;}
#login .forgetPasswordLink a:hover{color:#3FBB87;}
#login .toRegister{text-align:center;color:#CACACA;font-size:12px;margin-top:10px;}
#login .toRegister a{color:#3FBB87;}
.loginPage input::-webkit-input-placeholder {
    color: #dbdbdb;
}
.loginPage input:-moz-placeholder {
    color: #dbdbdb;
}
.loginPage input:-ms-input-placeholder {
    color: #dbdbdb;
}
</style>
<template>
	<div id="login">
		<MyHeader></MyHeader>
		<div class="loginPage clear">
			<img width="50%" src="/static/image/loginImg.png" />
			<div class="loginBox">
				<h2 class="loginTitle">{{$t("message.login.login")}}</h2>
				<div class="loginMod" style="padding-bottom:60px;">
					<input @keyup.13="toLogin()" v-model="userName" :placeholder="$t('message.login.phone')" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="10" />
				</div>
				<div class="loginMod">
					<input type="password" @keyup.13="toLogin()" v-model="password" :placeholder="$t('message.login.password')" onKeyUp="value=value.replace(/[\W]/g,'')" />
				</div>
				<div class="forgetPasswordLink"><router-link to="/forgetPassword">{{$t("message.login.forgetPassword")}}?</router-link></div>
				<a class="toLogin" @click="toLogin()">{{$t("message.login.login")}}</a>
				<div class="toRegister">{{$t("message.login.newUse")}}?<router-link to="/register">{{$t("message.login.register")}}</router-link></div>
				<!-- <a @click="test()">testGet</a>
				<a @click="setCookie">写入</a>
				<a @click="getCookie">读取</a>
				<a @click="delCookie">删除</a>
				<a @click="info">info</a> -->
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
export default {
	name:'login',
	components:{
		MyHeader,
	},
	data(){
		return {
			userName:'',
			password:''

		}
	},
	mounted:()=>{
		document.title = 'login'
	},
	methods:{
		toLogin:function(){
			var data = {
				'username':this.userName,
				'password':this.password
			}
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' || a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'password'){
						nullName = this.$t('message.login.password')
					}
					this.$layer.alert(nullName+this.$t('message.tips.contNull'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g
			if (!re.test(this.password)){
				this.$layer.alert(this.$t('message.login.passwordError'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.$post('login/doLogin',data).then((response) => {
		      	if(response.errcode == '0000'){
					this.$layer.msg(this.$t('message.tips.success'))
			      	this.$swallow.setCookie('yen_u_key_',response.data)
			      	let path = this.$route.query.redirect?this.$route.query.redirect:'/';
			      	this.$router.push(path)
		      	}else{
		      		this.$layer.alert(response.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
		      	}
		      })
		},
		test:function(){
			this.$fetch('login/test',{
				test:'test'
			})
		      .then((response) => {
		        console.log(response)
		      })
		},
		setCookie:function(){
			this.$swallow.setCookie('yen_u_key_','B9974BCA9788A90EF33CC52307B2B755F71D5B741E8E61C8@b0612e26')
		},
		getCookie:function(){
			console.info(this.$swallow.getCookie('yen_u_key_'))
		},
		delCookie:function(){
			this.$swallow.delCookie('yen_u_key_')
		},
		info:function(){
			this.$fetch('login/info')
		      .then((response) => {
		        console.log(response)
		      })

		}
	}
}
</script>
<style type="text/css">
#register{background:#fff;height:100vh;width:100%;}
.registerPage{max-width:960px;margin:6vw auto;background:#fff;}
.registerPage img.picLeft{float:left;padding:50px 0;}
.registerPage .loginBox{width:50%;float:left;padding:30px;box-sizing: border-box;
	background:url('/static/image/loginBg.png') center no-repeat;background-size:90% 100%;}
.registerPage .loginTitle{text-align:center; font-size:22px;margin:3vh auto 5vh;color:#3fbb87;}
.registerPage .loginMod{margin:0 40px 60px;text-align:left;border-bottom:1px solid #cacaca;}
.registerPage .loginBox input{border:0;outline:none;font-size:16px; line-height:22px;width:100%;padding:5px 10px;box-sizing: border-box;}
.registerPage .loginMod.verifyMod input{width:75%;float:left;margin-right:2%;}
.registerPage .loginMod.verifyMod a{border:1px solid #3FBB87;color:#3FBB87;border-radius:5px;float:right; width:20%;height:24px;text-align:center; line-height:24px;font-size:12px;}
.registerPage .loginMod.verifyMod a.verifyGeting{border-color:#cacaca;color:#cacaca;}
.registerPage .toLogin{display:block;margin:0 auto;width:80%; padding:10px 0; font-size:18px;height:30px;line-height:30px; color:#fff; background:#3FBB87; border-radius:5px;text-align:center;}
.registerPage input::-webkit-input-placeholder {
    color: #dbdbdb;
}
.registerPage input:-moz-placeholder {
    color: #dbdbdb;
}
.registerPage input:-ms-input-placeholder {
    color: #dbdbdb;
}

.readingProtocol{color:#EBEBEB;margin:10px 40px 30px;color:#666666;font-size:12px;display:flex;align-items: center;}
.readingProtocol p{margin-left:10px;line-height:16px;align-self: flex-start;}
.readingProtocol a.selectMod{width:14px;height:14px;display:block;margin-top:-1px;}
.readingProtocol a{color:#3FBB87;align-self: flex-start;padding:5px 0;}
</style>
<template>
	<div id="register">
		<MyHeader></MyHeader>
		<div class="registerPage clear">
			<img class="picLeft" width="50%" src="/static/image/loginImg.png" />
			<div class="loginBox">
				<h2 class="loginTitle">{{$t("message.login.register")}}</h2>
				<div class="loginMod">
					<input @keyup.13="register()" :class="phone == '' && this.null?'null':''" v-model="phone"  :placeholder="$t('message.login.phone')" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="10" />
				</div>
				<div class="loginMod">
					<input @keyup.13="register()" :class="password1 == '' && this.null?'null':''" v-model="password1"  :placeholder="$t('message.login.password')" type="password" onKeyUp="value=value.replace(/[\W]/g,'')" />
				</div>
				<div class="loginMod">
					<input @keyup.13="register()" :class="password2 == '' && this.null?'null':''" v-model="password2" :placeholder="$t('message.login.againPassword')" type="password" onKeyUp="value=value.replace(/[\W]/g,'')" />
				</div>
				<div class="loginMod verifyMod clear" style="margin-bottom:15px;">
					<input @keyup.13="register()" :class="dynamicCode == '' && this.null?'null':''" v-model="dynamicCode" :placeholder="$t('message.login.inputVerificationCode')" maxlength="4" onkeyup="value=value.replace(/[^\d]/g,'')" />
					<a v-if="!verifyGeting" class="getVerify right" @click="getVerify">{{$t("message.login.get")}}</a>
					<a v-else class="getVerify right verifyGeting">{{countdownData.sec}}S</a>
				</div>
				<div class="readingProtocol clear">
					<a class="selectMod" @click="readTab">
						<img width="100%" :src="readUrl" />
					</a>
					<p>{{$t("message.register.agreementText1")}} 
						<router-link to="/aboutYen/termsService">{{$t("message.register.agreementText2")}}</router-link>
					</p>
				</div>
				<a class="toLogin" @click="register()">{{$t("message.login.register")}}</a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
export default {
	name:'register',
	components:{
		MyHeader
	},
	data(){
		return {
			contSub:true,
			phone:'',
			dynamicCode:'',
			password1:'',
			password2:'',
			null:false,
			verifyGeting:false,
			selectRead:true,
			countdownData:{
				day: 0,
				hr: 0, 
				min: 0, 
				sec: 0
			},
			readUrl:'/static/image/readSelect.png'
		}
	},
	mounted:()=>{
		document.title = 'login'
	},
	methods:{
		register:function(){
			var data = {
				'phone':this.phone,
				'password':this.password1,
				'dynamicCode':this.dynamicCode
			}
			this.contSub = true
			this.null = true
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' || a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'password'){
						nullName = this.$t('message.login.password')
					}else if(a == 'selectRead'){
						this.$layer.alert('Làm ơn đọc người dùng giao thức',{
							title:this.$t('message.tips.titleMsg'),
							btn:this.$t('message.tips.ok')
						})
						return
					}
					this.$layer.alert(nullName+' '+this.$t('message.tips.contNull'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g
			if (!re.test(this.password1)){
				this.$layer.alert(this.$t('message.login.passwordError'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			if(this.password1 != this.password2){
				this.$layer.alert(this.$t('message.tips.passwordDifferent'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			if(this.contSub){
				this.$post('/login/register',data)
				.then((response) => {
					if(response.success){
						this.$layer.msg(this.$t('message.tips.success'))
			      		this.$swallow.setCookie('yen_u_key_',response.data)
				      	this.$router.push('/')
					}else{
						this.$layer.alert(response.msg,{
							title:this.$t('message.tips.titleMsg'),
							btn:this.$t('message.tips.ok')
						})
					}
				})

			}
		},
		getVerify:function(){
			if(this.phone==''){
				this.$layer.alert(this.$t('message.login.phone')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.$post('/login/sendDynamicCode',{
				'phone':this.phone
			}).then((res) => {
				if(res.errcode == '0000'){
					this.verifyGeting = true
					this.$swallow.setCookie('verifyGeting',true,1/60)
					this.countdown(59000)

				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		},
		countdown: function (endDateStr) {
			const msec = parseInt(endDateStr / 1000)
			let day = parseInt(msec / 60 / 60 / 24)
			let hr = parseInt(msec / 60 / 60 % 24)
			let min = parseInt(msec / 60 % 60)
			let sec = parseInt(msec % 60)
			this.$set(this.countdownData,'day',day)
			this.$set(this.countdownData,'hr',hr > 9 ? hr : '0' + hr)
			this.$set(this.countdownData,'min',min > 9 ? min : '0' + min)
			this.$set(this.countdownData,'sec',sec > 9 ? sec : '0' + sec)
			const that = this
			setTimeout(function () {
				if(endDateStr<=0){
					that.verifyGeting = false
					return
				}else{
					that.countdown(endDateStr-1000)
				}
			}, 1000)
		},
		readTab:function(){
			this.selectRead = !this.selectRead
			this.readUrl = this.selectRead?'/static/image/readSelect.png':'/static/image/readNoSelect.png'
		}
	}
}
</script>
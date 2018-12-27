<style type="text/css">
.modifyPhone{min-height:100vh;}
.modifyPhone .modifyPhoneMod{background:#fff;width:100%;padding:10px;margin:15px 0;position:relative;box-sizing: border-box;display: flex;align-items: center}
.modifyPhone .modifyPhoneMod span{width:50%;text-align:right;color:#666;}
.modifyPhone .modifyPhoneMod input{border:1px solid #c9c9c9;margin:0 20px;padding:5px;color:#333;}
.modifyPhone .modifyPhoneMod .getVerify{color:#fff;background:#3FBB87;height:100%;border-radius:5px; line-height:36px;padding:0 10px;font-size:12px;width:110px;text-align:center;}
.modifyPhone .modifyPhoneMod .getVerify.verifyGeting{background:#cacaca;}
.modifyPhone .subBtn{color:#fff;background:#3FBB87;border-radius:5px;padding:10px 20px; width:100px;margin:0 auto;display:block;text-align:center;}
</style>
<template>
	<div class="modifyPhone">
		<div class="modifyPhoneMod">
			<span>{{$t('message.modifyPhone.boundPhone')}}:</span>
			<input v-model="phone" oninput="value=value.replace(/[^\d]/g,'')"  maxlength="10" />
		</div>
		<div class="modifyPhoneMod">
			<span>{{$t('message.modifyPhone.validationCode')}}:</span>
			<input  v-model="dynamicCode" oninput="value=value.replace(/[^\d]/g,'')" placeholder="" maxlength="4" />
			<a v-if="!verifyGeting" class="getVerify" @click="getVerify">{{$t('message.modifyPhone.getCode')}}</a>
			<a v-else class="getVerify verifyGeting">{{countdownData.sec}}S</a>
		</div>
		<a class="subBtn" @click="save">{{$t('message.modifyPhone.verify')}}</a>
	</div>
</template>

<script type="text/javascript">
export default {
	components:{
	},
	data(){
		return {
			phone:'',
			dynamicCode:'',
			verifyGeting:false,
			countdownData:{
				day: 0,
				hr: 0, 
				min: 0, 
				sec: 0
			},
		}
	},
	mounted(){
		
	},
	methods: {
		getVerify:function(){
			if(this.phone==''){
				this.$layer.alert(this.$t('message.login.phone')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.$post('/home/member/sendDynamicCode3',{
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
		save:function(){
			this.$post('/home/member/checkDynamicCode',{
				'phone':this.phone,
				'dynamicCode':this.dynamicCode,
			}).then((res)=>{
				if(res.errcode == '0000'){
					this.$router.push({path: '/myCenter/modifyPhoneFinish', query: { checkCode: res.data}})
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		},
		
	},
	created() {
		

	},
}
</script>
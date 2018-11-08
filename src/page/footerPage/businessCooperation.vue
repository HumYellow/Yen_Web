<style type="text/css">
.businessCooperation{width:500px;margin:0 auto;padding:15vh;}
.businessCooperation input ,.businessCooperation select ,.businessCooperation a{width:380px;border-radius:3px;margin:20px auto;height:40px;line-height:40px;font-size:14px;display:block;padding:0 10px;}
.businessCooperation select{width:400px;}
.businessCooperation input ,.businessCooperation select {border:1px solid #E1E1E1;}
.businessCooperation a{text-align:center;color:#fff;background:#3FBB87;}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="businessCooperation clear">
			<input v-model="data.companyName" :placeholder="$t('message.aboutUs.inputCompanyName')" />
			<select v-model="data.cityId">
    			<option disabled value="">{{$t("message.placeOrder.pleaseChoose")}}</option>
				<option v-for="city in cityList"
					:value="city.id"
					:name="city.name">
					{{city.name}}
				</option>
			</select>
			<input v-model="data.name" :placeholder="$t('message.aboutUs.inputContactName')" />
			<input v-model="data.phone" :placeholder="$t('message.aboutUs.inputTelephoneNumber')" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="10" />
			<a @click="subData">{{$t("message.myFooter.joinImmediately")}}</a>
	    </div>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
export default {
	name: '',
	data() {
	  return {
	  	data:{
			companyName:'',
			cityId:'',
			name:'',
			phone:'',
		},
		cityList:{}
	  }
	},
	components: {
		MyHeader,
	},
	mounted:()=>{
		document.title = 'businessCooperation'
	},
	methods:{
		getCityList:function(){
			this.$fetch('/city/listData')
			.then((res)=>{
				this.cityList = res.data
			})

		},
		subData:function(){
			for(var a in this.data){
				if(this.data[a]==''){
					let nullName;
					if(a == 'companyName'){
						nullName = this.$t('message.company.companyName')
					}else if(a == 'cityId'){
						nullName = this.$t('message.myCenter.personalData.city')
					}else if(a == 'name'){
						nullName = this.$t('message.placeOrder.name')
					}else if(a == 'phone'){
						nullName = this.$t('message.login.phone')
					}
					this.$layer.alert(nullName+this.$t('message.tips.contNull'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			this.$post('/cooperation/apply',this.data)
			.then((res)=>{
				if(res.errcode == '0000'){
					this.$router.go(-1)
				}
				/*	this.$layer.msg('All information can not be empty.',{
						title:'message',
						btn:'OK'
					})*/
			})
		}
	},
	created(){
		this.getCityList()
	}

}
</script>
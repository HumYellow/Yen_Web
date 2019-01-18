<style type="text/css">
.contactWhole{position:fixed;right:0; bottom:0;background:url('/static/image/orderPopup.png') no-repeat;background-position:center; background-size:100% 100%; width:420px;padding:80px 30px 30px;z-index:9999;}
.inputMod{margin:15px auto;width:100%}
.contactWhole .inputMod .keyName ,.contactWhole .inputMod .formBox{float:left;box-sizing: border-box; }
.contactWhole .inputMod span ,.contactWhole .inputMod .formBox{height:24px; line-height:24px;}
.contactWhole .inputMod .houseType span{margin-right:20px;}
.contactWhole .inputMod .keyName{width:30%;text-align:right;display:inline-block;}
.contactWhole .inputMod .formBox{font-size:16px; width:60%; margin-left:5%;}
.contactWhole .inputMod input{border:1px solid #dbdbdb; padding:5px 10px;border-radius:4px;}
.subData{color:#fff; width:50%; margin:0 auto; background:#3fbb87;text-align:center; border-radius:5px; font-size:18px; line-height:36px;cursor:pointer;}
.closeContact{position:absolute; right:10px;top:60px; width:28px; height:28px;}

.contactWhole-enter-active, .contactWhole-leave-active {
  transition: opacity .8s;
}
.contactWhole-enter, .contactWhole-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
		<transition name="contactWhole">
			<div v-if="contactShow" class="contactWhole">
				<div class="center">
					<div class="inputMod clear">
						<span class="keyName">{{$t("message.placeOrder.name")}}:</span>
						<input class="formBox" :placeholder="$t('message.placeOrder.name')" v-model="subData.username" />
					</div>
					<div class="inputMod clear">
						<span class="keyName">{{$t("message.placeOrder.phone")}}:</span>
						<input class="formBox" :placeholder="$t('message.placeOrder.phone')" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="subData.phone" value="" />
					</div>
					<div class="inputMod clear">
						<span class="keyName">{{$t("message.placeOrder.acreage")}}:</span>
						<input class="formBox" placeholder="㎡" v-model="subData.acreage" onkeyup="value=value.replace(/[^\d]/g,'')" value="" :onkeydown='keySub' />
					</div>
					<div class="inputMod clear">
						<span class="keyName">{{$t("message.placeOrder.houseType")}}:</span>
						<div class="formBox">
							<select v-model="subData.houseType1">
								<option selected value="1">1BR</option>
								<option value="2">2BR</option>
								<option value="3">3BR</option>
								<option value="4">4BR</option>
							</select>
							<select v-model="subData.houseType2">
								<option value="1">1LR</option>
								<option value="2">2LR</option>
								<option value="3">3LR</option>
								<option value="4">4LR</option>
							</select>
							<select v-model="subData.houseType3">
								<option value="1">1KIT</option>
								<option value="2">2KIT</option>
								<option value="3">3KIT</option>
								<option value="4">4KIT</option>
							</select>
							<select v-model="subData.houseType4">
								<option value="1">1WC</option>
								<option value="2">2WC</option>
								<option value="3">3WC</option>
								<option value="4">4WC</option>
							</select>
						</div>
					</div>
					<div class="inputMod clear">
						<span class="keyName">{{$t("message.placeOrder.type")}}:</span>
						<div class="formBox houseType">
							<input type="radio" name="houseType" v-model="subData.type" value="1" />
							<span>{{$t("message.placeOrder.newHouse")}}</span>
							<input type="radio" name="houseType" v-model="subData.type" value="2" />
							<span>{{$t("message.placeOrder.rebuild")}}</span>
						</div>
					</div>
				</div>
				<div class="subData" @click="subDataAjax">{{$t("message.placeOrder.toFreeReserve")}}</div>
				<a @click="contactShow = !contactShow" class="closeContact">
					<img width="100%" height="100%" src="/static/image/closeIcon.png"/>
				</a>
			</div>
		</transition>
</template>
<script type="text/javascript">
export default{
	name:'myHeader',
	data(){
		return{
			contactShow:false,
			subData:{
			  	phone:'',
				username:'',
				acreage:'',
				houseType1:'1',
				houseType2:'1',
				houseType3:'1',
				houseType4:'1',
				type:'1',
			},
			initialData:{
			  	phone:'',
				username:'',
				acreage:'',
				houseType1:'1',
				houseType2:'1',
				houseType3:'1',
				houseType4:'1',
				type:'1',
			}
		}
	},
	methods:{
		subDataAjax:function(){
			var data = {
				'phone':this.subData.phone,
				'name':this.subData.username,
				'acreage':this.subData.acreage,
				'houseType':this.subData.houseType1+','+this.subData.houseType2+','+this.subData.houseType3+','+this.subData.houseType4,
				'type':this.subData.type,
			}

			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' || a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'name'){
						nullName = this.$t('message.placeOrder.name')
					}else if(a == 'acreage'){
						nullName = this.$t('message.placeOrder.acreage')
					}else if(a == 'houseType'){
						nullName = this.$t('message.placeOrder.houseType')
					}else if(a == 'type'){
						nullName = this.$t('message.placeOrder.type')
					}
					this.$layer.alert(nullName+this.$t('message.tips.contNull'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			this.$post('/apply/order',data)
			.then((res)=>{
				if(res.errcode == '0000'){
					this.contactShow = !this.contactShow
					this.subData = this.initialData
					this.$layer.msg(this.$t('message.tips.success'))
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		},
		keySub:function(e){
			if (e.keyCode == 13)
			  {
			   
			  }
		}
	},
	mounted(){
		this.contactShow = true
	},
	created(){
	}
}
</script>

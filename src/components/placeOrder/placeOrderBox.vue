<style type="text/css">
#placeOrderBox{background:url('/static/image/vnImage/placeOrderBg.png') center no-repeat;height:712px;min-height:78vh;}
.placeOrderBoxCenter{position:relative;top:200px;width:1060px;margin:0 auto;border-radius:10px;box-shadow: 2px -1px 15px #e9e9e9;background:#fff;}
.placeOrderBox{margin:0 auto;padding:60px 60px 60px 6px;box-sizing: border-box;position:relative;}

.placeOrderBox .placeOrderCity{height:5vw;}
.placeOrderBox .placeOrderCity img{float:left;margin-right:8px;}
.placeOrderModBox{margin:10px 0;}
.placeOrderMod{border:1px solid #d2d2d2;border-radius:5px;width:100%;box-sizing: border-box;overflow:hidden;}
.placeOrderModBoxTitle{float:left;width:30%;height:30px;line-height:30px;text-align:right;box-sizing: border-box;padding-right:20px;}
.placeOrderMod{float:left;width:70%;}
.placeOrderMod input.textBox{border:0;outline:none;padding:5px;width:85%;}
.placeOrderBox .selectMod{padding:5px 10px;}
.placeOrderMod .keyName{float:left;width:30%;color:#777;font-size:13px;margin-top:1px;}
.placeOrderMod .formBox{float:left;width:70%;font-size:14px;}
.placeOrderBox select{background:#fff;border:none;float:left;width:25%;box-sizing: border-box;}
.placeOrderBox .radioSelect{margin:0; margin-top:-2px;}
.placeOrderBox .placeBtn{position:absolute;right:-52px;top:120px; cursor:pointer;display:block;}
#placeOrderBox .placeOrderBox ,#placeOrderBox .gifBox{float:left; width:50%;background:#fff;}
#placeOrderBox .gifBox{height:100%;border-left:1px solid #000;box-sizing: border-box;padding:55px 40px 55px 80px;}
</style>
<template>
	<div id="placeOrderBox">
		<div class="bodyCenter placeOrderBoxCenter clear">
			<div class="placeOrderBox">
				<div class="placeOrderModBox clear">
					<div class="placeOrderModBoxTitle">{{$t("message.placeOrder.phone")}}</div>
					<div class="placeOrderMod">
						<input @keyup.13="placeBtn()" onkeyup="value=value.replace(/[^\d]/g,'')" class="textBox"  v-model="placeData.phone" maxlength="10" />
					</div>
				</div>
				<div class="placeOrderModBox clear">
					<div class="placeOrderModBoxTitle">{{$t("message.placeOrder.name")}}</div>
					<div class="placeOrderMod">
						<input @keyup.13="placeBtn()" class="textBox" v-model="placeData.username" />
					</div>
				</div>
				<div class="placeOrderModBox clear">
					<div class="placeOrderModBoxTitle">{{$t("message.placeOrder.acreage")}}</div>
					<div class="placeOrderMod">
						<input @keyup.13="placeBtn()" onkeyup="value=value.replace(/[^\d]/g,'')" class="textBox" v-model="placeData.acreage" />㎡
					</div>
				</div>
				<div class="placeOrderModBox clear">
					<div class="placeOrderModBoxTitle">{{$t("message.placeOrder.houseType")}}</div>
					<div class="placeOrderMod">
						<div class="selectMod clear">
							<!-- <span class="keyName">{{$t("message.placeOrder.houseType")}}</span> -->
							<div class="formBox">
								<select v-model="placeData.houseType1">
									<option selected value="1">1BR</option>
									<option value="2">2BR</option>
									<option value="3">3BR</option>
									<option value="4">4BR</option>
								</select>
								<select v-model="placeData.houseType2">
									<option value="1">1LR</option>
									<option value="2">2LR</option>
									<option value="3">3LR</option>
									<option value="4">4LR</option>
								</select>
								<select v-model="placeData.houseType3">
									<option value="1">1KIT</option>
									<option value="2">2KIT</option>
									<option value="3">3KIT</option>
									<option value="4">4KIT</option>
								</select>
								<select v-model="placeData.houseType4">
									<option value="1">1WC</option>
									<option value="2">2WC</option>
									<option value="3">3WC</option>
									<option value="4">4WC</option>
								</select>
							</div>
						</div>
					</div>
				</div>

				<div class="placeOrderModBox clear">
					<div class="placeOrderModBoxTitle">{{$t("message.placeOrder.type")}}</div>
					<div class="placeOrderMod">
						<div class="selectMod clear">
							<!-- <span class="keyName">{{$t("message.placeOrder.type")}}</span> -->
							<div class="formBox houseType">
								<input @keyup.13="placeBtn()" v-model="placeData.type" class="radioSelect" type="radio" name="houseType" value="1" />
								<span style="margin-right:30px;">{{$t("message.placeOrder.newHouse")}}</span>
								<input @keyup.13="placeBtn()" v-model="placeData.type" class="radioSelect" type="radio" name="houseType" value="2" />
								<span>{{$t("message.placeOrder.rebuild")}}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="placeBtn" @click="placeBtn">
					<img :src="$t('message.placeOrder.image1')" />
				</div>
			</div>
			<div class="gifBox">
				<img :src="$t('message.placeOrder.image2')" width="100%" />
			</div>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	placeData:{
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
	  	},

	  }
	},
	methods:{
		placeBtn:function(){
			var data = {
				'phone':this.placeData.phone,
				'name':this.placeData.username,
				'acreage':this.placeData.acreage,
				'houseType':this.placeData.houseType1+','+this.placeData.houseType2+','+this.placeData.houseType3+','+this.placeData.houseType4,
				'type':this.placeData.type,
			}
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' && a == 'phone'){
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
			this.$post('apply/order',data)
			.then((res)=>{
				if(res.errcode == '0000'){
					this.placeData = this.initialData
					this.$layer.msg(this.$t('message.tips.success'))
					this.$router.back(-1)
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})

				}
					
			})
		}
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>
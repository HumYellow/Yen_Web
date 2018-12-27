<style type="text/css">
#personalData{padding-top:30px;}
.personalDataMod{margin:20px 0;font-size:14px;}
.personalDataMod .personalDataTitle{float:left;width:200px;text-align:right;color:#666666;height:25px;line-height:25px;}
.personalDataMod .personalDataDesc{float:left;width:300px;color:#333333;margin-left:10px;line-height:25px;}
.personalDataMod[data-width="width"] .personalDataDesc{width:550px;}
.personalDataMod .personalDataDesc select ,.personalDataMod .personalDataDesc input{height:25px;width:100%;}
.personalDataMod .personalDataDesc select{width:98%;border-color:#C9C9C9;padding-left:2%;}
.personalDataMod .acreageDesc{border:1px solid #C9C9C9;width:292px;}
.personalDataMod .acreageDesc span{height:25px;line-height:25px;display:inline-block;}
.personalDataMod .personalDataDesc input{width:87%;height:22px;line-height:22px;float:left;border:none;outline:none;margin-left:2%; }
.personalDataMod.personalDataPhone .personalDataDesc{width:auto;}
.personalDataMod .styleDesc span{float:left;display:inline-block;height:25px;line-height:25px;padding-left:20px;background:url('/static/image/myCenter/scheduleShow.png') left center no-repeat;background-size:15px 15px;margin-right:30px;}
.personalDataMod .styleDesc span.select{background:url('/static/image/myCenter/scheduleShowSelect.png') left center no-repeat;background-size:15px 15px;}
.personalDataMod .fileImageBox{height:auto;}
.personalDataMod .personalDataDesc .headPic{width:80px;height:80px;float:left;}
.personalDataMod .personalDataDesc .showPhone{display: flex;justify-content: flex-start;align-items: center;color:#333;font-size:12px;}
.personalDataMod .personalDataDesc .showPhone span{margin-right:10px;}
.personalDataMod .personalDataDesc .fileImageBtn{float:left;position:relative;border:1px solid #3FBB87;width:140px;height:30px;line-height:30px;text-align:center;border-radius:5px;margin:20px;}
.personalDataMod .personalDataDesc .fileImageBtn a{color:#3FBB87;font-size:12px;}
.personalDataMod .personalDataDesc .fileImageBtn input{opacity: 0;width:100%;height:100%;position:absolute;left:0;top:0;cursor:pointer }
#personalData .subData{color:#fff;background:#3FBB87;margin:50px auto;display:block;width:150px;height:30px;line-height:30px;text-align:center;border-radius:5px;}
</style>
<template>
	<div id="personalData">
		<div class="personalDataMod personalDataPhone clear">
			<div class="personalDataTitle">{{$t("message.myCenter.personalData.phone")}}:</div>
			<div class="personalDataDesc">
				{{this.personalData.phone}}
				<div class="showPhone">
					<span @click="showPhoneTab">
						<img v-if="this.personalData.showPhone==1" width="15" src="/static/image/readSelect.png" />
						<img v-else width="15" src="/static/image/readNoSelect.png" />
					</span>
					{{$t("message.myCenter.personalData.showPhoneText")}}
				</div>
			</div>
		</div>
		<div class="personalDataMod clear">
			<div class="personalDataTitle">{{$t("message.myCenter.personalData.city")}}:</div>
			<div class="personalDataDesc">
				<select class="myDesignSelect" name="carlist" v-model="personalData.selectCityId">
					<option v-for="(cityList,value) in personalData.cityList" 
							:value="cityList.cityId"
							:name="cityList.name">
							{{cityList.name}}
					</option>
				</select>
			</div>
		</div>
		<div class="personalDataMod clear">
			<div class="personalDataTitle">{{$t("message.myCenter.personalData.acreage")}}:</div>
			<div class="personalDataDesc acreageDesc clear">
				<input onkeyup="value=value.replace(/[^\d]/g,'')" v-model="personalData.acreage" />
				<span>m²</span>
			</div>
		</div>
		<div class="personalDataMod clear" :data-width="personalType.designRangeId==4?'width':''" v-for="(personalType,index) in personalTypeData">
			<div class="personalDataTitle">{{personalType.name}}:</div>
			<div v-if="index==0" class="personalDataDesc clear">
				<select class="myDesignSelect" v-model="personalType.selectTypeId">
					<option v-for="(personalTypeMod,value) in personalType.subTypeList" 
							:value="personalTypeMod.designTypeId"
							:name="personalTypeMod.name">
							{{personalTypeMod.name}}
					</option>
				</select>
			</div>
			<div v-else class="personalDataDesc styleDesc clear">
				<span :class="personalTypeMod.select?'select':''" v-for="(personalTypeMod,value) in personalType.subTypeList" @click="personalTypeSelect(personalTypeMod.designTypeId)">{{personalTypeMod.name}}</span>
			</div>
		</div>
		<div class="personalDataMod clear">
			<div class="personalDataTitle">{{$t("message.myCenter.personalData.currentProfilePhoto")}}:</div>
			<div class="personalDataDesc fileImageBox clear">
				<div class="headPic">
					<img width="100%" height="100%" :src="personalData.headImg" />
				</div>
				<div class="fileImageBtn">
					<a>{{$t("message.myCenter.personalData.uploadProfilePhoto")}}</a>
	            	<input v-if="!fileing" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="" id=""  />
				</div>
			</div>
		</div>
		<a class="subData" @click="subData">{{$t("message.myCenter.personalData.save")}}</a>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	fileing:false,
	  	personalData:{},
	  	personalTypeData:{},
	  	personalTypeIds:[],
	  	personalSubData:{},
	  }
	},
	components: {
	},
	methods:{
		getData:function(){
			this.$fetch('/home/member/infoData')
			.then((res)=>{
				console.info(res.data)
				this.personalData = res.data
				/*if(this.personalData.selectCityId){
					this.personalSubData.cityId = this.personalData.selectCityId
				}else{
					for(var i=0;i<this.personalData.cityList.length;i++){
						if(i==0)this.personalSubData.cityId = this.personalData.cityList[i].cityId
					}
				}*/
			})
		},
		getTypeData:function(){
			this.$fetch('/home/design/type/groupData',{selectType:'member'})
			.then((res)=>{
				this.personalTypeData = res.data
				for(var a = 0;a<this.personalTypeData.length;a++){
					for(var i = 0;i<this.personalTypeData[a].selectTypeIdList.length;i++){
						if(i == 0){
							this.personalTypeData[a].selectTypeId = this.personalTypeData[a].selectTypeIdList[i]
						}
					}
				}
			})
		},
		fileImage:function(e){//上传图片
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
				this.$layer.alert(this.$t("message.myCenter.uploadSize"),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
            }else{ 
            	this.fileing = true        
				var file = e.target.files[0];      
				var param = new window.FormData(); //创建form对象
				param.append('file',file);//通过append向form对象添加数据
				param.append('clazz','design')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					this.fileing = false
					this.$set(this.personalData,'headImg',res.data.file)
				})
				//

            }
        },
        personalTypeSelect:function(id){
        	for(var i = 0;i<this.personalTypeData.length;i++){
        		if(i==1){
        			var selectNum = 0
	        		var subType = this.personalTypeData[i].subTypeList;
        			for(var a = 0;a<subType.length;a++){
	        			if(subType[a].select){
	        				selectNum++
	        			}
	        		}
        			for(var a = 0;a<subType.length;a++){
        				if(subType[a].designTypeId == id){
        					if(!subType[a].select && selectNum >=2){
        						this.$layer.alert(this.$t('message.myCenter.personalData.onlyTwo'),{
									title:this.$t('message.tips.titleMsg'),
									btn:this.$t('message.tips.ok')
								})
								return
        					}
							subType[a].select = !subType[a].select

        				}
	        		}
        		}
        		
        	}
        },
        subData:function(){
				console.info(this.personalTypeData)
        	/*this.$post('/home/member/updateHeadImgData',{//发布头像
				headImg:this.personalData.headImg,
			})
			.then((res)=>{

			});
			this.$post('/home/member/updateCityData',{//修改城市
				cityId:this.personalData.selectCityId,
			})
			.then((res)=>{

			});
			this.$post('home/member/updateAcreageData',{//修改面积
				acreage:this.personalData.acreage,
			})
			.then((res)=>{

			});*/
			let designTypeIds = [];
			for(var i = 0;i<this.personalTypeData.length;i++){
				var subTypeList = this.personalTypeData[i].subTypeList
				if(this.personalTypeData[i].designRangeId == 3){
					designTypeIds += this.personalTypeData[i].selectTypeId +','
				}else if(this.personalTypeData[i].designRangeId == 4){
					for(var a = 0;a<subTypeList.length;a++){
						if(subTypeList[a].select)designTypeIds += subTypeList[a].designTypeId +','
					}
				}
			}
			this.$post('/home/member/updateInfoData',{//修改Style
				headImg:this.personalData.headImg,
				cityId:this.personalData.selectCityId,
				acreage:this.personalData.acreage,
				designTypeIds:designTypeIds
			})
			.then((res)=>{
				if(res.errcode=='0000'){
					this.$layer.msg(res.msg)
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			});
		},
		showPhoneTab:function(){
        	var isShowPhone = this.personalData.showPhone?0:1
        	this.$post('/home/member/updateShowPhoneData',{//发布头像
				showPhone:isShowPhone
			})
			.then((res)=>{
        		this.$set(this.personalData,'showPhone', isShowPhone)
				
			})

        }
	},
	mounted() {
	  
	},
	created(){
		this.getData()
		this.getTypeData()
	}
}
</script>
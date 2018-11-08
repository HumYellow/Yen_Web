<style type="text/css">
#myDesignList .myDesignDesc .myDesignDescTitle{float:left;color:#666666;font-size:14px;font-weight:100;height:30px;line-height:30px;margin-right:20px;width:10%;text-align:right;}
#myDesignList .myDesignDesc .myDesignDescMod{margin:10px 0;}
#myDesignList .myDesignDesc .myDesignDescMod input ,#myDesignList .myDesignDesc .myDesignDescMod select{float:left;height:25px;line-height:25px;border:1px solid #C9C9C9;width:40%;padding:0 10px;box-sizing: border-box;}

#myDesignList .myDesignSelect option{border:1px solid #666;}
#myDesignList .myDesignDetailsList{width:100%;box-sizing:border-box;background:#fff; padding:10px 10px 30px;}
#myDesignList .myDesignDetailsList .viewer-backdrop{background-color:rgba(0,0,0,.8) !important;}
#myDesignList .myDesignDetailsList .item {box-sizing: border-box; margin: 5px; width:30%;float:left;overflow:hidden;/* cursor:pointer; */position:relative;}
#myDesignList .myDesignDetailsList .delectPic{background:rgba(0,0,0,.5) url('/static/image/myCenter/delectIcon.png') center no-repeat;position:absolute;right:0px;top:0px;padding:10px;display:block;width:14px;height:14px;}
#myDesignList .myDesignDetailsList .picText{width:100%;padding:10px 5px;box-sizing: border-box;text-align:left;}
#myDesignList .myDesignDetailsList .picText input{background:none;border:none;color:#999999;font-size:12px;}
#myDesignList .myDesignDetailsList .picText ::-webkit-input-placeholder{color:#ffffff;}
#myDesignList .myDesignDetailsList .addPic{background:url('/static/image/myCenter/addPicBox.png') no-repeat;background-size:100%;height:150px;}
#myDesignList .myDesignDetailsList .addPic input{opacity:0;width:100%;height:100%;font-size:12px;}
#myDesignList .saveMod{}
#myDesignList .saveMod a{display:block; width:150px;height:30px;line-height:30px;font-size:14px;color:#fff;background:#3FBB87;border-radius:5px;margin:10px auto;text-align:center;}
</style>
<template>
	<div id="myDesignList" class="designList clear">
		<div class="myDesignDesc"><!-- 分类 -->
			<div class="myDesignDescMod clear">
				<h4 class="myDesignDescTitle">{{$t("message.myCenter.albumTitle")}}</h4>
				<input v-model="dataList.name" type="text" :placeholder="$t('message.myCenter.inputPictureDescription')" maxlength="20" />
			</div>
			<div v-for="(designFilter,value) in designFilterList" class="myDesignDescMod clear">
				<h4 class="myDesignDescTitle">{{designFilter.name}}</h4>
				<select class="myDesignSelect" name="carlist" v-model="designFilter.selectId">
    				<option value="" disabled selected hidden>choose</option>
					<option v-for="(designFilterMod,value) in designFilter.subTypeList" 
							:value="designFilterMod.designTypeId"
							:name="designFilterMod.designTypeId">
							{{designFilterMod.name}}
					</option>
				</select>
			</div>
		</div>
		<div class="myDesignDetailsList clear"><!-- 列表 -->
	    	<ul class="pictures masonry clear">
	            <li class="item addPic">
	            	<input v-if="!fileing" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="" id=""  />
	            </li>
	            <li v-for="(slide ,index) in subDesignList" class="item">
					<img class="item_content" width="100%" height="150" :src="slide.img" :alt="slide.description">
					<div class="delectPic" @click="delectPic(index)"></div>
					<div class="picText">
						<input type="text" v-model="slide.name" :placeholder="placeholderText" maxlength="20" />
					</div>
	            </li>
	        </ul>
	    </div>
	    <div class="saveMod"><a @click="savePic">{{$t("message.myCenter.personalData.save")}}</a></div>
	</div>
</template>
<script type="text/javascript">
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
	components:{
		
	},
	data(){
		return {
			placeholderText:this.$t("message.myCenter.inputPictureDescription"),
			thisN:'6',
			isLogin:this.$swallow.isLogin(),
	  		getDataUrl:'/home/design/atlas/detailData',
	  		fileing:false,
			dataList:{},
			designFilterList:{},
			pushData:{
				designAtlasId:'',
				name:'',
				imgListJson:[],
				designTypeIds:''
			},
			noSub:true,
			subDesignList:[],
		}
	},
	mounted(){
		window.addEventListener('scroll', this.isBottom)
				
	},
	methods: {
		getDesignFilterList:function(){//进入页面执行获取选项
			this.$fetch('/home/design/type/groupData', {designAtlasId:this.$route.params.id=='new'?'':this.$route.params.id})
			.then(res => {
				this.designFilterList =  res.data
				for(var a in this.designFilterList){
					if(this.$route.params.id != 'new'){
						for(var z in this.designFilterList[a].selectTypeList){
							if(z == 0){
								this.designFilterList[a].selectId = this.designFilterList[a].selectTypeList[z].designTypeId
							}
						}
					}else{
						for(var z in this.designFilterList[a].subTypeList){
							if(z == 0){
								this.designFilterList[a].selectId = this.designFilterList[a].subTypeList[z].designTypeId
							}
						}
					}
				}
				
			})
		},
		getData() {
			this.$fetch(this.getDataUrl, {id:this.$route.params.id})
			.then((res)=>{
				this.dataList = res.data
				for(var a in this.dataList.subDesignList){//更换接口名字
					this.dataList.subDesignList[a].url = this.dataList.subDesignList[a].img
				if(this.dataList.subDesignList[a].name == '')this.dataList.subDesignList[a].name=this.$t("message.myCenter.inputPictureDescription")
				}
				this.subDesignList = this.dataList.subDesignList
			})
		},
		fileImage:function(e){//上传图片
			if(this.subDesignList.length>=20){
				this.$layer.alert(this.$t("message.myCenter.noMorePictures"),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
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
					if(!this.dataList.subDesignList)this.dataList.subDesignList = []
					this.subDesignList.unshift({
						"width":res.data.fileWidth,
						"height":res.data.fileHeight,
						"img":res.data.file,
						"url":res.data.file,
						"name":this.$t("message.myCenter.inputPictureDescription")
					})
					this.$set(this.dataList,'subDesignList',this.subDesignList)
				})

            }
        },
        spellDesignTypeIds:function(){//拼接设计图ID
        	this.pushData.designTypeIds = ''
        	for(var a  = 0;a<this.designFilterList.length;a++){
        		this.pushData.designTypeIds += this.designFilterList[a].selectId +','
        		if(this.pushData.designTypeIds.indexOf("all") != -1)this.noSub = false
        	}
        },
		savePic:function(){
			this.pushData.name = this.dataList.name;
			if(this.pushData.name == '' || !this.pushData.name){
				this.$layer.alert(this.$t('message.placeOrder.name')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.noSub = true
			this.spellDesignTypeIds();
			if(!this.noSub){
				this.$layer.alert(this.$t('message.placeOrder.type')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.pushData.designAtlasId = this.dataList.designAtlasId;
			this.pushData.imgListJson = ''
			console.info(this.dataList.subDesignList)
			for(var i =0;i< this.dataList.subDesignList.length;i++){
				if(this.dataList.subDesignList[i].name == this.$t("message.myCenter.inputPictureDescription"))this.dataList.subDesignList[i].name=''
				this.pushData.imgListJson += JSON.stringify(this.dataList.subDesignList[i]) + ','
			}
			this.pushData.imgListJson = '['+this.pushData.imgListJson+']'
			this.$post('/home/design/atlas/saveData',this.pushData)
			.then(res => {
				if(res.errcode == '0000'){
					this.$router.push('/myCenter/myDesignList')
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})

		},
		judgeNew:function(){
			if(this.$route.params.id != 'new'){
				this.getData()
			}
		},
		delectPic:function(index){
			this.subDesignList.splice(index,1)
			this.$set(this.dataList,'subDesignList',this.subDesignList)
		}
	},
	created() {
		this.getDesignFilterList()
		this.judgeNew()
	},
	watch:{
		/*'dataList.subDesignList':'galley',*/
		"$route": function(){
			location.reload()
		},
	}
}
</script>
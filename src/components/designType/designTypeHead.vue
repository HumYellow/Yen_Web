<style type="text/css">
.designTypeList{width:100%;}
.designTypeHead{border:1px solid #EAEAEA;background:#fff;}
.designTypeListMenu{padding:30px;border-bottom:1px solid #EAEAEA}
.designTypeListMenu a{float:left;font-size:12px;color:#999;padding-right:15px;margin-right:15px;}
.designTypeListMenu a.indexRouter{background:url('/static/image/design/rightArrow.png') no-repeat;background-size:auto 70%;background-position:right 70%;}
.designTypeList .designTypeTable{border-bottom:1px solid #dbdbdb;}
.designTypeList .designTypeTable .designTypeTitle ,.designTypeList .designTypeTable .designTypeMenuList{padding:30px;float:left; font-size:14px;}
.designTypeList .designTypeTable .designTypeTitle{border-right:1px solid #dbdbdb;color:#666666;background:#F8F8F8;min-width:50px;text-align:center;width:100px;}
.designTypeList .designTypeTable .designTypeMenuList{color:#999999;}
.designTypeList .designTypeTable .designTypeMenuList a{float:left;margin-right:30px;color:#999999;font-size:12px;}
.designTypeList .designTypeTable .designTypeMenuList a.select{color:#3FBB87;}

/* 收藏 */
.designTypeList .img-inner-box:hover .toPlaceOrder,.designTypeList .img-inner-box:hover .collectBtn{display:block;}
.designTypeList .designDesc .toPlaceOrder{position:absolute;left:10px;bottom:56px;width:240px;color:#fff;background-color:rgba(63,187,135,.8);box-sizing: border-box;padding:5px 0;font-size:14px;display:none;}
.designTypeList .designDesc .collectBtn{position:absolute;right:10px;top:10px;padding:10px;background:rgba(0,0,0,.4);display:none;}

.designTypeList .designTypeListBox{width:100%;height:100%; margin:2vh auto;text-align:center;overflow:hidden;min-height:66vh;}
.designTypeList .vue-waterfall-easy-scroll{overflow:hidden !important;}
.designTypeList .designTypeListBox .designBox{width:24%;margin:0 .5%;height:200px;float:left;box-sizing: border-box;position:relative;overflow:hidden;}
.designTypeList .designTypeListBox .designDesc{padding:15px;border-left:1px solid #eaeaea;border-bottom:1px solid #eaeaea;border-right:1px solid #eaeaea;margin-top:-1px;background:#fff;height:16px;line-height:16px;}

.designTypeList .designTypeListBox .designDesc span{display:block;font-size:13px;}
.designTypeList .designTypeListBox .designDesc .left{width:65%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align:left;}
.designTypeList .designTypeListBox .designDesc .right{width:35%;text-align:right;}
.designTypeList .designTypeListBox .item {break-inside: avoid; box-sizing: border-box; padding: 10px; position:relative;}
.designTypeList .designTypeListBox .masonry { column-count: 1;} 
@media (min-width: 400px) { 
.designTypeList .designTypeListBox .masonry { column-count: 2;} 
} 
@media (min-width: 1200px) { 
.designTypeList .designTypeListBox .masonry { column-count: 3; } 
}
.designTypeList .designTypeListBox .item_content{overflow:hidden;display:block;}
.designTypeList .designTypeListBox .loading{display:none !important;}
.designTypeList .designTypeListBox .ajaxOvere{font-size:16px;padding:0 30px;color:#666;}


.loadState{padding:40px 0;}
.loadingBox .loadingMod{vertical-align: bottom;
    background-color: #999;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 3px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat-data-v-ded6b974 0.7s 0s infinite linear;
    animation: ball-beat-data-v-ded6b974 0.7s 0s infinite linear;}
.loadingBox .loadingMod:nth-child(1){-webkit-animation-delay: 0.35s;
    animation-delay: 0.35s;}
</style>
<template>
	<div class="designTypeList">
		<div v-if="!theType" class="designTypeHead">
			<div class="designTypeListMenu clear">
				<router-link class="indexRouter" to="/design">Design home page</router-link>
				<a @click="$router.go(0)">All design</a>
			</div>
			<div v-for="designFilter in designFilterList" class="designTypeTable clear">
				<div class="designTypeTitle">{{designFilter.name}}</div>
				<div class="designTypeMenuList">
					<a v-for="(subTypeList ,index) in designFilter.subTypeList" 
						:class="subTypeList.designTypeId==designFilter.select?'select':''"
						@click="tabDesignFilter(designFilter.designRangeId,subTypeList.designTypeId)">
						{{subTypeList.name}}
					</a>
				</div>
			</div>
		</div>
		<div class="designTypeListBox clear">
			<div class="waterfall" :style="style" v-if="imgsArr.length > 0">
				<vue-waterfall-easy :imgsArr="imgsArr" :maxCols="maxCols">
					<div class="designDesc clear" slot-scope="props">
						<span class="left">{{props.value.name}}</span>
						<span class="right">{{props.value.designCount}} {{$t("message.design.pictures")}}</span>
						<router-link class="toPlaceOrder" to="/placeOrder">{{$t("message.design.decorateLikeThis")}}</router-link>
						<a :data-id="props.value.designAtlasId" @click="collection(props.value.designAtlasId,props.value.collect)" class="collectBtn">
							<img v-if="!props.value.collect" width="100%" src="/static/image/design/collect.png" />
							<img v-else width="100%" src="/static/image/design/collectFinish.png" />
						</a>
					</div>
				</vue-waterfall-easy>
			</div>
			<div class="loadState">
				<div v-if="imageLoding || getDataing" class="loadingBox">
					<div class="loadingMod"></div>
					<div class="loadingMod"></div>
					<div class="loadingMod"></div>
				</div>
			<div v-if="lastPage && !imageLoding && !getDataing" class="ajaxOvere">{{$t("message.tips.noMore")}}</div>
			</div>
			<!-- <div v-if="maxGroup < group" class="ajaxOvere">It's over</div> -->
		</div>
	</div>
</template>
<script type="text/javascript">
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
	name:'designTypeList',
	props:{
		theType:{
			type:'',
			num:'',
			url:''
		}
	},
	components:{
		vueWaterfallEasy
	},
	data(){
		return {
			designTypeIds:'',
			designFilterList:{},
			designListIds:{},
			thisSrc:this.theType?this.theType.url:'/design/atlas/listData',
			imgsArr:[],
			maxCols:this.theType?this.theType.num:5,
			loadingDotCount:0,
      		group: 1, // request param
      		maxGroup:1,
      		lastPage:false,//是否最后一页
      		groupNamber:10,//请求数量
      		getDataing:false,
      		style:{},
      		height:1000000,
      		ajaxNew:true,
      		ajaxOvere:false,
      		bodyClientWidth:document.body.clientWidth,
      		getHeightArr:false,//是否获取高度超时
      		getHeightTime:0,//获取高度超时次数
      		getHeightMaxTime:20,//获取高度最高超时次数
      		getHeightInterval:500,
      		imagLoded:0,
      		imageLoding:false,

		}
	},
	mounted(){
		var that = this
		window.addEventListener('scroll', this.isBottom)
		
	},
	created() {
			this.getDesignFilterList()

	},
	methods:{
		getDesignFilterList:function(){//进入页面执行获取ID
			this.$fetch('/design/type/groupData')
			.then(res => {
				this.designFilterList =  res.data
				for(var a in this.designFilterList){
					this.designFilterList[a].select = this.designFilterList[a].designRangeId+'_all'
				}
				if(this.$route.query.menuId && this.$route.query.styleId){
					this.tabDesignFilter(this.$route.query.menuId,this.$route.query.styleId)
				}else{
					this.getData()
				}
			})
		},
		tabDesignFilter:function(id,el){
			for(var i in this.designFilterList){
				if(this.designFilterList[i].designRangeId == id){
					this.designFilterList[i].select = el
				}
			}
			this.designTypeIds = ''
			for(var a in this.designFilterList){
				this.designTypeIds += this.designFilterList[a].select+','
			}
			this.ajaxNew = true
			this.group = 1
			this.getData()
		},
		getData() {
			if(this.getDataing) return
			this.getDataing = true
			let data;
			if(this.theType){
				data = this.theType.data;
				data['pageNo'] = this.group
				data['number'] = this.groupNamber
			}else{
				data = {
					'pageNo':this.group,
					'number':this.groupNamber,
					'designTypeIds':this.designTypeIds
				} ;
			}
			this.$fetch(this.thisSrc,data).then(res => {

				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				this.imgsNewArr = res.data
				this.imagLoded = 0
				if(this.imgsNewArr.length == 0){
					this.imagLoadFn()
				}else{
					for(var i =0;i<this.imgsNewArr.length;i++){
						let img = new Image()
		                img.src = this.imgsNewArr[i].img;
		                img.onload = (i)=>{
		                	this.imagLoded++
		                }
					}
				}
			}).catch(function (error) {
				console.log(error);
				this.getDataing = false
			});
		},
		isBottom(){
			if(this.getDataing || this.imageLoding)return
			var scrollTop = this.$swallow.isIE()?document.body.scrollTop:document.documentElement.scrollTop
			if(document.documentElement.scrollHeight - scrollTop <= document.documentElement.clientHeight+40){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
			}
		},
		getHeight(){
			var el = this.$el
			this.imageLoding = true
			setTimeout(()=>{
				var box = el.getElementsByClassName('default-card-animation')
				if(box.length != this.imgsArr.length && this.getHeightTime <= this.getHeightMaxTime){//判断是不是imgdom未加载
					this.getHeightTime++
					setTimeout(()=>{
						this.getHeight()
					},this.getHeightInterval/2)
					return
				}else{
					var lastBox = box[box.length-1]
					var lastBox2 = box.length >= 2?box[box.length-2]:0
					var lastBoxHeight=lastBox.clientHeight
					var lastBox2Height= box.length >=2?lastBox2.clientHeight:0
					var bottomClientHeight = lastBoxHeight > lastBox2Height?lastBoxHeight:lastBox2Height;
					
					var height = lastBox.offsetTop + bottomClientHeight + 30
					//this.waterfallHeight = height
					this.$set(this.style,'height',height+'px')
					this.getDataing = false//解除ajax封印在图片渲染之后
					this.imageLoding = false
				}
			},this.getHeightInterval)
		},
		collection:function(thisId,thisCollect){
			if(this.getDataing)return
			this.getDataing = true
			event.preventDefault()
			var url;
			if(thisCollect == 1){
				url = '/home/collect/deleteData'
			}else if(thisCollect == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'DesignAtlas',
				'relatedId':thisId
			}).then(res => {
				for(var a in this.imgsArr){
					if(this.imgsArr[a].designAtlasId == thisId){
						this.$set(this.imgsArr[a],'collect',thisCollect==1?0:1)
					}
				}
				this.getDataing = false
			})
		},
		imagLoadFn:function(){
			if(this.imagLoded != this.imgsNewArr.length)return
			if(this.ajaxNew){
				this.lastPage = false
				this.imgsArr = this.imgsNewArr
				if(this.imgsNewArr.length == 0){
					this.$layer.msg(this.$t("message.tips.noMore"),{
						title:'tips',
						btn:'OK'
					})
					this.imgsArr = ''
					this.getDataing = false
					this.lastPage = true
					return
				}
			}else{
				this.imgsArr = this.imgsArr.concat(this.imgsNewArr)
			}
			//新图片（为新？替换：追加）至列表
			for(var i in this.imgsArr){//重新赋属性
				this.$set(this.imgsArr[i],'src',this.imgsArr[i].img)
				this.$set(this.imgsArr[i],'href','/designDetails/'+this.imgsArr[i].designAtlasId)
				if(this.theType)this.$set(this.imgsArr[i],'collect',1)
			}
			this.group++
			this.getHeight()
			for(var i = 0;i<this.designFilterList.length;i++){//替换切换赋值
				for(var a = 0;a<this.designFilterList[i].subTypeList.length;a++){
					let arr = this.designTypeIds.split(",")
					if(arr.indexOf(this.designFilterList[i].subTypeList[a].designTypeId) > -1){
						this.designFilterList[i].nameType = this.designFilterList[i].subTypeList[a].name
						if(this.designFilterList[i].nameType =='All'){
							this.designFilterList[i].nameType = this.designFilterList[i].name
						}
					}
				}
			}
		}
	},
	watch:{
		'imagLoded':function(){
			this.imagLoadFn()
		},
		'$route':function(){
			this.$router.go(0)
		}
	}
}
</script>
<style type="text/css">
#designList{width:100%;height:100%; margin:2vh auto;text-align:center;overflow:hidden;min-height:66vh;}
.vue-waterfall-easy-scroll{overflow:hidden !important;}
#designList .designBox{width:24%;margin:0 .5%;height:200px;float:left;box-sizing: border-box;position:relative;overflow:hidden;}
#designList .designDesc{padding:15px;border-left:1px solid #eaeaea;border-bottom:1px solid #eaeaea;border-right:1px solid #eaeaea;margin-top:-1px;background:#fff;height:16px;line-height:16px;}

#designList .designDesc span{display:block;font-size:13px;}
#designList .designDesc .left{width:65%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align:left;}
#designList .designDesc .right{width:35%;text-align:right;}
/* 收藏 */
#designList .img-inner-box:hover .toPlaceOrder,#designList .img-inner-box:hover .collectBtn{display:block;}
#designList .designDesc .toPlaceOrder{position:absolute;left:10px;bottom:56px;width:240px;color:#fff;background-color:rgba(63,187,135,.8);box-sizing: border-box;padding:5px 0;font-size:14px;display:none;}
#designList .designDesc .collectBtn{position:absolute;right:10px;top:10px;padding:10px;background:rgba(0,0,0,.4);display:none;}

#designList .item {break-inside: avoid; box-sizing: border-box; padding: 5px; width:15px;height:15px; position:relative;}
#designList .masonry { column-count: 1;} 
@media (min-width: 400px) { 
#designList .masonry { column-count: 2;} 
} 
@media (min-width: 1200px) { 
#designList .masonry { column-count: 3; } 
}
#designList .item_content{overflow:hidden;display:block;}
#designList .loading{display:none !important;}
#designList .ajaxOvere{font-size:16px;padding:0 30px;color:#666;}

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
	<div id="designList" class="designList clear">
		<div class="waterfall" :style="style">
			<vue-waterfall-easy :imgsArr="imgsArr" :maxCols="maxCols" @scrollLoadImg="getData">
				
				<div class="designDesc clear" slot-scope="props">
					<span class="left">{{props.value.name}}</span>
					<span class="right">{{props.value.designCount}} {{$t("message.design.pictures")}}</span>
					<div style="position:absolute;left:0;top:0"></div>
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
</template>
<script type="text/javascript">
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
	components:{
		vueWaterfallEasy
	},
	data(){
		return {
			isLogin:this.$swallow.isLogin(),
			imgsArr:[],
			maxCols:5,
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
	methods: {
		getData() {
			if(this.getDataing) return
			this.getDataing = true
			this.$fetch('/design/atlas/listData',{
				'pageNo':this.group,
				'number':this.groupNamber
			})
			.then(res => {
				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				this.imgsNewArr = res.data
				this.imagLoded = 0
				for(var i =0;i<this.imgsNewArr.length;i++){
					let img = new Image()
	                img.src = this.imgsNewArr[i].img;
	                img.onload = (i)=>{
	                	this.imagLoded++
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
	},
	watch:{
		imagLoded:function(){
			if(this.imagLoded != this.imgsNewArr.length)return
			this.imgsArr = this.imgsArr.concat(this.imgsNewArr)
			for(var i in this.imgsArr){
				this.imgsArr[i].src = this.imgsArr[i].img
				this.imgsArr[i].href = '/designDetails/'+this.imgsArr[i].id
			}
			this.group++
			this.getHeight()
		},
	},
	created() {
		this.getData()
	},
}
</script>
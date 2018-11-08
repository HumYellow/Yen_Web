<style type="text/css">
#myDesignList{width:100%;height:100%; margin:0 auto;text-align:center;overflow:hidden;min-height:66vh;}
.vue-waterfall-easy-scroll{overflow:hidden !important;}
#myDesignList .designBox{width:24%;margin:0 .5%;height:200px;float:left;box-sizing: border-box;position:relative;overflow:hidden;}

#myDesignList .designDesc span{display:block;font-size:13px;}
#myDesignList .designDesc .left{width:65%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align:left;}
#myDesignList .designDesc .right{width:35%;text-align:right;}

/* #designList .img-inner-box:hover .picDesc,#designList .img-inner-box:hover .picUseBtn{display:block;}
#designList .designDesc .picDesc{position:absolute;left:10px;bottom:10px;width:240px;color:#fff;background-color:rgba(63,187,135,.8);box-sizing: border-box;padding:5px 10px;font-size:14px;display:block;font-size:12px;}
#designList .designDesc .picUseBtn{position:absolute;right:10px;top:10px;padding:10px;background:rgba(0,0,0,.5);display:block;}
#designList .item {break-inside: avoid; box-sizing: border-box; padding: 5px; width:15px;height:15px; position:relative;}
 */
.myDesignList{width:100%;box-sizing:border-box;background:#fff;}
.myDesignList .viewer-backdrop{background-color:rgba(0,0,0,.8) !important;}
.myDesignList .item {box-sizing: border-box; margin: 5px; width:32%;float:left;height:150px;overflow:hidden;cursor:pointer;position:relative;}
.myDesignList .picUseBtn{position:absolute;right:36px;top:0;background:rgba(0,0,0,.5);padding:10px;display:block;}
.myDesignList .delectPic{background:rgba(0,0,0,.5) url('/static/image/myCenter/delectIcon.png') center no-repeat;position:absolute;right:0px;top:0px;padding:10px;display:block;width:14px;height:14px;}
.myDesignList .picText{position:absolute;bottom:0;left:0;width:100%;padding:5px;background:rgba(63,187,135,.8);box-sizing: border-box;color:#fff;font-size:12px;}
.myDesignList .addPic{background:url('/static/image/myCenter/addPicBox.png') no-repeat;background-size:100%;}
.myDesignList .addPic input{opacity:0;width:100%;height:100%;font-size:12px;}

#designList .item_content{overflow:hidden;display:block;}
#designList .loading{display:none !important;}
#designList .ajaxOvere{font-size:20px;padding:0 30px;}
</style>
<template>
	<div id="myDesignList" class="myDesignList clear">
		<div class="waterfall" :style="style">
			<!-- <vue-waterfall-easy :imgsArr="imgsArr" :maxCols="maxCols" @scrollLoadImg="getData">
				<div class="designDesc clear" slot-scope="props">
					<span class="left">{{props.value.name}}</span>
					<span class="right">{{props.value.count}} pictures</span>
					<div style="position:absolute;left:0;top:0"></div>
					<div class="picDesc">
						<div class="left">{{props.value.name}}</div>
						<div class="right">{{props.value.count}} pictures</div>
					</div>
					<router-link :to="'/myCenter/myDesignRevise/'+props.value.designAtlasId" style="right:44px;" class="picUseBtn">
						<img width="100%" src="/static/image/myCenter/editIcon.png" />
					</router-link>
					<a :data-id="props.value.designAtlasId" @click="delectDesign(props.value.designAtlasId,props.value.collect)" class="picUseBtn">
						<img src="/static/image/myCenter/delectIcon.png" />
					</a>
				</div>
			</vue-waterfall-easy>
			 -->
			<div class="myDesignList clear"><!-- 列表 -->
		    	<ul class="pictures">
		            <li v-for="(slide ,index) in imgsArr" class="item">
		            	<router-link :to="'/designDetails/'+slide.designAtlasId">
							<img class="item_content" width="100%" height="100%" :src="slide.img" :alt="slide.description">
							<router-link :to="'/myCenter/myDesignRevise/'+slide.designAtlasId" class="picUseBtn">
								<img width="100%" src="/static/image/myCenter/editIcon.png" />
							</router-link>
							<a class="delectPic" @click="delectDesign(slide.designAtlasId)"></a>
							<div class="picText">
								<div class="left">{{slide.name}}</div>
								<div class="right">{{slide.designCount}} {{$t("message.design.pictures")}}</div>
							</div>
						</router-link>
		            </li>
		        </ul>
		    </div>
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
			maxCols:3,
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
      		getHeightMaxTime:5,//获取高度最高超时次数
      		getHeightInterval:500
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
			this.$fetch('/home/design/atlas/listData',{
				'pageNo':this.group,
				'number':this.groupNamber
			})
			.then(res => {
				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				this.imgsArr = this.imgsArr.concat(res.data)
				for(var i in this.imgsArr){
					this.imgsArr[i].src = this.imgsArr[i].img
					this.imgsArr[i].href = '/designDetails/'+this.imgsArr[i].designAtlasId
				}
				this.group++
				/*this.$nextTick(function(){
					this.getHeight()

				})*/
			}).catch(function (error) {
				console.log(error);
				this.getDataing = false
			});
		},
		isBottom(){
			var scrollTop = this.$swallow.isIE()?document.body.scrollTop:document.documentElement.scrollTop
			if(document.documentElement.scrollHeight - scrollTop <= document.documentElement.clientHeight+50){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
				
			}
		},
		getHeight(){
			var el = this.$el
			setTimeout(()=>{
				var box = el.getElementsByClassName('default-card-animation')
				if(box.length == 0 && this.getHeightTime <= this.getHeightMaxTime){//判断是不是imgdom未加载
					this.getHeightArr = false
					this.getHeightTime++
					setTimeout(()=>{
						this.getHeight()

					},this.getHeightInterval/2)
					return
				}else{
					this.getHeightArr = true
				}
				if(this.getHeightArr){
					var lastBox = box[box.length-1]
					var lastBox2 = box.length >= 2?box[box.length-2]:0
					var lastBoxHeight=lastBox.clientHeight
					var lastBox2Height= box.length >=2?lastBox2.clientHeight:0
					var bottomClientHeight = lastBoxHeight > lastBox2Height?lastBoxHeight:lastBox2Height;
					
					var height = lastBox.offsetTop + bottomClientHeight + 90
					this.$set(this.style,'height',height+'px')
					this.getDataing = false//解除ajax封印在图片渲染之后

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
		delectDesign:function(thisId){
			event.preventDefault()
			var that = this
			let index = this.$layer.confirm(this.$t('message.tips.delectIt'),{
					title:this.$t('message.tips.titleMsg'),
					btn:[this.$t('message.tips.yes'),this.$t('message.tips.no')],
				},()=>{
					that.$post('/home/design/atlas/deleteData',{
						'id':thisId,
					}).then(res => {
						for(var a =0;a<this.imgsArr.length;a++){
							if(this.imgsArr[a].designAtlasId == thisId){
								this.imgsArr.splice(a,1)
							}
						}
						that.getDataing = false
						this.$layer.close(index);
					})
				}
			)
		}
	},
	created() {
		this.getData()
	},
}
</script>
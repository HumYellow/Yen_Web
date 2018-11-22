<style type="text/css">
#designHead{position:relative;}
#designHead .swiper-container{height:500px;}
#designHead .swiperHead .swiper-pagination-bullet-active{background-color:#fff;}
#designHead .swiperHead a{text-align:center;display:block;overflow:hidden;height:100%;width:100%;}
#designHead .swiperHead img{background-position:center;background-repeat:no-repeat;background-size:auto 100%;}
#designHead .swiper-button-white{background-color:rgba(0,0,0,.5);padding:10px 20px;}

.designTypeHeadList{position:absolute;left:8vw;top:0;background:#fff;box-sizing: border-box;z-index:1;padding:0px 15px; width:260px;height:100%;}
.designTypeHeadList .designTypeTable{padding:15px 0;}
.designTypeHeadList .designTypeTitle{color:#333;font-size:18px;height:40px;line-height:40px;background-repeat:no-repeat;background-position:left 10px;background-size:auto;padding-left:30px;}
.designTypeHeadList .designTypeMenuList{padding-left:32px;}
.designTypeHeadList .designTypeTable{border-bottom:1px dashed #D8D8D8;}
.designTypeHeadList .designTypeTable:last-child{border:none;}
.designTypeHeadList .designTypeTable:nth-child(1) .designTypeTitle{background-image:url('/static/image/design/designType_1.png');}
.designTypeHeadList .designTypeTable:nth-child(2) .designTypeTitle{background-image:url('/static/image/design/designType_0.png');}
.designTypeHeadList .designTypeTable:nth-child(3) .designTypeTitle{background-image:url('/static/image/design/designType_2.png');}
.designTypeHeadList .designTypeTable a{display:block;width:50%;float:left;color:#666;font-size:12px;line-height:24px;}
.designTypeHeadList .designTypeTable a:hover{color:#3FBB87;}
</style>
<template>
	<div id="designHead">
		<swiper class="swiperHead" :options="swiperOption">
			<swiper-slide v-for="(slide ,index) in swiperSlides">
				<a :href="slide.link">
					<img :style="'background-image:url('+slide.img+')'" width="100%" height="100%" />
				</a>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
			<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
		</swiper>
		<div class="designTypeHeadList">
			<div v-for="designFilter in designFilterList" class="designTypeTable clear">
				<div class="designTypeTitle">{{designFilter.name}}</div>
				<div class="designTypeMenuList clear">
					<router-link :to="{path: '/designType', query:{menuId:designFilter.designRangeId,styleId:subTypeList.designTypeId}}" v-for="(subTypeList ,index) in designFilter.subTypeList" 
						:class="subTypeList.designTypeId==designFilter.select?'select':''">
						{{subTypeList.name}}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'carrousel',
	data() {
	  return {
	    swiperOption: {
			pagination: {
				el: '.swiper-pagination'
			},
			navigation:{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',

			},
		},
	    swiperSlides: [],
	    designType:{},
	    designFilterList:{}
	  }
	},
	components: {
		swiper,
		swiperSlide
	},
	mounted() {
	  
	},
	methods:{
		getHead:function(){
			this.$fetch('/recommend/bannerListData?type=4')
			.then((res)=>{
				this.swiperSlides = res.data
				if(res.data.length == 0){
					this.$layer.msg(this.$t('message.tips.noMore'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					this.getDataing = false
					return
				}
			})

		},
		getDesignFilterList:function(){//进入页面执行获取ID
			this.$fetch('/design/type/groupData')
			.then(res => {
				this.designFilterList =  res.data
				for(var a in this.designFilterList){
					this.designFilterList[a].select = this.designFilterList[a].designRangeId+'_all'
				}
			})
		},

	},
	created(){
		this.getHead();
		this.getDesignFilterList()

	},
}
</script>
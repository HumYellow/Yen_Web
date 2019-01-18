<style type="text/css">
.homeDesign{margin:40px auto;padding:40px 0;background:#f5f5f5;}
.homeDesign .homeDesignMenu{display:flex;justify-content: center;align-items: center}
.homeDesign .homeDesignMenu .homeDesignMenuMod{ color:#666666;margin-top:20px;display:flex;align-items: center}
.homeDesign .homeDesignMenu .homeDesignMenuMod span{margin:0 20px;color:#C3C3C3;font-size:18px;}
.homeDesign .homeDesignMenu .homeDesignMenuMod a{font-size:14px;color:#666;}
.homeDesign .homeDesignMenu .homeDesignMenuMod a:hover{color:#2B9684;}
.homeDesign .designList{width:100%;min-width:1280px;height:440px;text-align:center;position:relative;margin-top:30px;overflow:hidden;display: flex;align-items: center}
.homeDesign .designList .swiper-container{height:440px;}
.homeDesign .designList .swiper-slide{width:50%;height:440px;}
.homeDesign .designList .slideDescBox{position:absolute;left:calc(25% - 280px);width:300px;top:0;height:440px;background:#fff;z-index:1;box-sizing: border-box;padding:65px 20px;text-align:left;}
.homeDesign .designList .slideTitle{font-size:20px;color:#333;overflow: hidden;flex-direction: row;white-space: nowrap;text-overflow: ellipsis;}
.homeDesign .designList .slideContent{font-size:12px;color:#666;margin-top:35px;line-height:18px;max-height:110px;overflow:hidden;
	display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;}
.homeDesign .designList a.toDesign{border:1px solid #999;color:#666;padding:5px 10px;display:inline-block;float:right;margin-top:40px;}
.homeDesign .designList .swiper-button-prev ,.homeDesign .designList .swiper-button-next{position:absolute;bottom:0;z-index:2;top:auto;background-color:#3FBB87;background-size:20px 20px;width:36px;height:36px;box-sizing: border-box;}
.homeDesign .designList .swiper-button-prev{left:calc(25% - 30px);}
.homeDesign .designList .swiper-button-next{left:calc(25% + 30px);}
/* .homeDesign .designBox:hover .designDesc{transition: all .8s ease;opacity:1}
.homeDesign .designBox{position:absolute;box-sizing: border-box;padding:5px;overflow:hidden;}
.homeDesign .designDesc{box-sizing: border-box;font-size:12px;line-height:18px;background:rgba(0,0,0,.5);color:#fff;height:98.2%;opacity:0;width:99%;align-items: center;justify-content: space-around;flex-direction: column; display: flex;position:absolute;left:10px;top:10px;}
.homeDesign .designBox_0{width:25%;height:100%;left:0;top:0;background-size:auto 100% !important;}
.homeDesign .designBox_0 .designBg{background-size:auto 100% !important;}
.homeDesign .designBox_1{width:50%;height:50%;left:25%;top:0;}
.homeDesign .designBox_1 .designBg{background-size:100% auto !important;}
.homeDesign .designBox_2{width:25%;height:50%;right:0;top:0;}
.homeDesign .designBox_2 .designBg{background-size:100% auto !important;}
.homeDesign .designBox_3{width:75%;height:50%;left:25%;bottom:0;}
.homeDesign .designBox_3 .designBg{background-size:100% auto !important;} */

.homeDesign .designBg{margin:5px;width:100%;height:100%;}
.homeDesign .designDescBox h4{font-size:16px;line-height:20px;}
.homeDesign .designDescBox a{color:#fff;background:#339966;border-radius:5px;display:block;width:135px;height:35px;line-height:35px;text-align:center;margin:20px auto 0;}

</style>
<template>
	<div class="homeDesign">
			<h3 class="homeTitle">{{$t("message.menu.Design")}}</h3>
			<div class="homeDesignMenu">
				<div class="homeDesignMenuMod" v-for="(menuMod,index) in homeDesignMenu" :key="index">
					<span v-if="index != 0">/</span>
					<router-link :to="'/designType?menuId=4&styleId='+menuMod.designTypeId">{{menuMod.name}}</router-link>
				</div>
				<div class="homeDesignMenuMod">
					<span>/</span>
					<router-link to="/designType?menuId=4&styleId=4_all">{{$t("message.strategy.strategType.more")}} &gt;</router-link>
				</div>
			</div>
			<div class="designList clear">
				<!-- <div :class="'designBox '+'designBox_'+index" v-for="(design,index) in designList">
					<div class="designBg" :style="'background:url('+design.img+') no-repeat'">
						<div class="designDesc">
							<div class="designDescBox">
								<h4>{{design.name}}</h4>
								<router-link :to="'/designDetails/'+design.relatedId">{{$t("message.home.clickToView")}}</router-link>
							</div>
						</div>
					</div>
				</div> -->
				<swiper class="swiperHead" :options="swiperOption" v-if='designList.length>1' ref="homeDesignMenuSwiper">
					<swiper-slide v-for="(slide,index) in designList" :key="index">
						<a :href="slide.link">
							<img :src="slide.img" width="100%" height="100%" />
						</a>
					</swiper-slide>
				</swiper>
				<div class="slideDescBox" v-if="index==homeDesignIndex" v-for="(slide,index) in designList" :key="index">
					<h3 class="slideTitle">{{slide.name}}</h3>
					<p class="slideContent">{{slide.description}}</p>
					<router-link class="toDesign" :to="'/designDetails/'+slide.relatedId">{{$t("message.home.clickToView")}}</router-link>

				</div>
				<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
				<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
			</div>
	</div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	components:{
		swiper,
		swiperSlide
	},
	data(){
		return {
			designList:[{

			}],
			homeDesignMenu:'',
			homeDesignIndex:'',
		    swiperOption: {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 15,
				loop:true,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,
				navigation:{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					init:()=>{

					},
					slideChangeTransitionEnd:()=>{
						let thisSwiper = this.$refs.homeDesignMenuSwiper.swiper;
						let realIndex;
						if(thisSwiper){
							this.homeDesignIndex = thisSwiper.realIndex
						}else{
							this.homeDesignIndex = 0
						}
					},
				},
			},

		}
	},
	mounted(){
		
	},
	methods:{
		getHomeDesignMenu:function(){
			this.$fetch('/design/type/listData?number=5')
			.then((res)=>{
				this.homeDesignMenu = res.data
			})
		},
		getData:function(){
			this.$fetch('/recommend/designListData?type=3')
			.then((res)=>{
				this.designList = res.data
			})
		},
		textTab:function(n){
			for(var i = 0;i<this.designList.length;i++){
				if(i == n){
					this.homeDesignText = this.designList[i].description
				}
			}
		}
	},
	created(){
		this.getData()
		this.getHomeDesignMenu()
	}
}
</script>
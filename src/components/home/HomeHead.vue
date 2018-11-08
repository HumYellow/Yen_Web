<style type="text/css">
#homeHead .swiper-container{height:500px;}
#homeHead .swiperHead .swiper-pagination-bullet-active{background-color:#fff;}
#homeHead .swiperHead a{width:100%;height:100%;display:block;}
#homeHead .swiperHead img{background-position:center;background-repeat:no-repeat;background-size:auto 100%;}
#homeHead .swiper-button-white{background-color:rgba(0,0,0,.5);padding:10px 20px;z-index:99;}
.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{pointer-events:auto !important;}
</style>
<template>
	<div id="homeHead">
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
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'

export default {
	name: 'carrousel',
	data() {
	  return {
	    swiperOption: {
			pagination: {
				el: '.swiper-pagination'
			},
			loop:false,
			navigation:{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',

			},
		},
	    swiperSlides: []
	  }
	},
	components: {
		swiper,
		swiperSlide
	},
	mounted(){
	},
	created(){
	  this.$fetch('/recommend/bannerListData?type=1')
		.then((res)=>{
			this.swiperSlides = res.data
		})
	}
}
</script>
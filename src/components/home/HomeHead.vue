<template>
	<div>
		<swiper class="swiperHead" :options="swiperOption">
			<swiper-slide v-for="(slide ,index) in swiperSlides">
				<img width="100%" :src='slide.src' />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
			<div class="swiper-button-next swiper-button-white" slot="button-next"></div>
		</swiper>
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
			loop:true,
			navigation:{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',

			},
		},
	    swiperSlides: [{
	    	src:this.staticPath+"bn_1.jpg"
	    }, {
	    	src:this.staticPath+"bn_2.jpg"
	    }, {
	    	src:this.staticPath+"bn_3.jpg"
	    }]
	  }
	},
	components: {
		swiper,
		swiperSlide
	},
	mounted() {
	  
	}
}
</script>
<style type="text/css">
.swiper-container{height:500px;}
.swiperHead .swiper-pagination-bullet-active{background-color:#fff;}
.swiper-button-white{background-color:rgba(0,0,0,.5);padding:10px 20px;}
</style>
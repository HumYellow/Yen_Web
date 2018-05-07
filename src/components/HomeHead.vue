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
	    	src:this.staticPath+"textimg.jpg"
	    }, {
	    	src:this.staticPath+"textimg.jpg"
	    }, {
	    	src:this.staticPath+"textimg.jpg"
	    }, {
	    	src:this.staticPath+"textimg.jpg"
	    }, {
	    	src:this.staticPath+"textimg.jpg"
	    },{
	    	src:this.staticPath+"textimg.jpg"
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
.swiperHead .swiper-pagination-bullet-active{background-color:#fff;}
</style>
<style type="text/css">
.DesignDetailsList{float:left;width:78%;margin-right:2%;box-sizing:border-box;background:#fff; padding:10px 10px 30px;;min-height:66vh;}
.DesignDetailsList .viewer-backdrop{background-color:rgba(0,0,0,.8) !important;}
.DesignDetailsList .masonry { column-count: 5; column-gap: 0; }
.DesignDetailsList .item { break-inside: avoid; box-sizing: border-box; padding: 10px; }
@media (min-width: 400px) { 
	.DesignDetailsList .masonry { column-count: 2;} 
} 
@media (min-width: 1200px) { 
	.DesignDetailsList .masonry { column-count: 3; } 
}
.item_content{overflow:hidden;}
</style>
<template>
	<div class="DesignDetailsList" id="galley" ref="galley">
    	<ul class="pictures masonry">
            <li v-for="(slide ,index) in swiperSlides" class="item">
               <img class="item_content" width="100%" :src="slide.img" :alt="slide.name">
            </li>
        </ul>
    </div>
</template>
<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
	name: 'designDetails',
	props:{
	    swiperSlides: {},
	},
	data() {
	  return {
	    ajaxed:false,
	    getDataUrl:'/design/atlas/detailData'
	  }
	},
	components: {
	},
	methods:{
		galley:function(){
			setTimeout(function(){
				var galley = document.getElementById('galley');
				var viewer = new Viewer(galley, {
				// 相关配置项,详情参考官网
				});
			},500)
		},
	},
	created(){
		//this.getData()
	},
	mounted() {
	},
	watch:{
		'swiperSlides':'galley',

	}
}
</script>
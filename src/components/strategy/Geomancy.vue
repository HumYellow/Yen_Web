<style type="text/css">
.geomancy h3{border-bottom:1px solid #F0F0F0;color:#333;}
.geomancyMod{width:48%;margin-right:2%;padding:15px 0;float:left;}
.geomancyMod .pic ,.geomancyMod .text{float:left;}
.geomancyMod .pic{width:48%;margin-right:2%;height:145px;overflow:hidden;}
.geomancyMod .text{width:50%;font-size:12px;overflow: hidden;padding:10px 0;}
.geomancyMod .text h4{font-size:16px;line-height:22px;margin-bottom:15px;display: -webkit-box;
-webkit-box-orient: vertical;color:#333;
-webkit-line-clamp: 1;
overflow: hidden}
.geomancyMod .text p{line-height:16px;display: -webkit-box;color:#666;
-webkit-box-orient: vertical;font-size:14px;
-webkit-line-clamp: 6;
overflow: hidden;}
</style>
<template>
	<div v-if="geomancy.length != 0" class="geomancy strategyMod clear">
		<div class="strategyTitle"><h3>{{$t("message.strategy.geomanticCulture")}}</h3></div>
		<div class="geomancyList clear">
			<div v-for="mod in geomancy" class="geomancyMod clear">
				<router-link :to="'/strategyDetails/'+mod.relatedId">
					<div class="pic"><img width="100%" :src="mod.img" /></div>
					<div class="text">
						<h4>{{mod.title}}</h4>
						<p>{{mod.summary}}</p>
					</div>
				</router-link>
			</div>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	geomancy:[]
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/recommend/articleListData?type=7', {number:6})
		.then((res)=>{
			this.geomancy = res.data
		})
	},
}
</script>
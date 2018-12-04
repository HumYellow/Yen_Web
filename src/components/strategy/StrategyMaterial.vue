<style type="text/css">
.strategyMaterial h3{border-bottom:1px solid #F0F0F0;color:#333;}
.strategyMaterialMod{width:48%;margin-right:2%;padding:15px 0;float:left;}
.strategyMaterialMod .pic ,.strategyMaterialMod .text{float:left;}
.strategyMaterialMod .pic{width:48%;margin-right:2%;height:145px;overflow:hidden;}
.strategyMaterialMod .text{width:50%;font-size:12px;overflow: hidden;padding:10px 0;}
.strategyMaterialMod .text h4{font-size:16px;line-height:20px;margin-bottom:15px;display: -webkit-box;
-webkit-box-orient: vertical;color:#333;
-webkit-line-clamp: 1;
overflow: hidden}
.strategyMaterialMod .text p{line-height:16px;display: -webkit-box;color:#666;font-size:14px;
-webkit-box-orient: vertical;
-webkit-line-clamp: 6;
overflow: hidden}


</style>
<template>
	<div v-if="strategyMaterial.length != 0" class="strategyMaterial strategyMod clear">
		<div class="strategyTitle"><h3>{{$t("message.strategy.materialSelectionManual")}}</h3></div>
		<div class="strategyMaterialList clear">
			<router-link :to="'/strategyDetails/'+mod.relatedId" v-for="mod in strategyMaterial" class="strategyMaterialMod clear">
				<div class="pic"><img width="100%" :src="mod.img" /></div>
				<div class="text">
					<h4>{{mod.title}}</h4>
					<p>{{mod.summary}}</p>
				</div>
			</router-link>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	strategyMaterial:[]
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/recommend/articleListData?type=8', {number:6})
		.then((res)=>{
			this.strategyMaterial = res.data
		})
	},
}
</script>
<style type="text/css">
.homeSrategy .srategyList{margin:30px auto 0; padding-bottom:100px;}
.homeSrategy .srategyMod{width:24%;margin:0 .5%;float:left;border:1px solid #e3e3e3;box-sizing: border-box;box-shadow:2px 2px 10px #e9e9e9;}
.homeSrategy .srategyMod:nth-child(2) ,.homeSrategy .srategyMod:nth-child(4){position:relative;top:30px;}
.homeSrategy .srategyMod:nth-child(2) .srategyHead,.homeSrategy .srategyMod:nth-child(4) .srategyHead{background:#fff;border-bottom:1px solid #e3e3e3;}
.homeSrategy .srategyMod .srategyHead{width:100%;height:170px;display:flex;align-items: center; justify-content: space-around;background:#f5f5f5;background-repeat:no-repeat;background-position:center;background-size:100% auto;}
.homeSrategy .srategyMod .srategyBody{box-sizing: border-box;width:100%;padding:16px;}
.homeSrategy .srategyBodyList{font-size:14px;}
.homeSrategy .srategyBodyList p{line-height:18px;color:#999;margin-top:10px;height:90px;display: -webkit-box;
-webkit-box-orient: vertical;font-size:12px;
-webkit-line-clamp: 5;
overflow: hidden;}

</style>
<template>
	<div class="homeSrategy bodyCenter">
		<h3 class="homeTitle">{{$t("message.menu.Strategy")}}</h3>
		<div class="srategyList clear">
			<div v-for="srategyMod in srategyList" class="srategyMod">
				<router-link :to="'/strategyDetails/'+srategyMod.relatedId">
					<div :style="'background-image:url('+srategyMod.img+')'" class="srategyHead">
					</div>
					<div class="srategyBody">
						<div class="srategyBodyList">
							<h3>{{srategyMod.title}}</h3>
							<p>{{srategyMod.summary}}</p>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	components:{

	},
	data(){
		return {
			srategyList:[],

		}
	},
	mounted(){
		
	},
	created(){
		this.$fetch('/recommend/articleListData',{type:12,number:4})
		.then((res)=>{
			this.srategyList = res.data
		})
	}
}
</script>
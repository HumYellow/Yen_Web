<style type="text/css">
.homeSrategy .srategyList{margin:40px auto 0; padding-bottom:100px;}
.homeSrategy .srategyMod{width:24%;margin:0 .5%;float:left;border:1px solid #e3e3e3;box-sizing: border-box;box-shadow:2px 2px 10px #e9e9e9;}
/* .homeSrategy .srategyMod:nth-child(2) ,.homeSrategy .srategyMod:nth-child(4){position:relative;top:30px;} */
.homeSrategy .srategyMod:nth-child(2) .srategyHead,.homeSrategy .srategyMod:nth-child(4) .srategyHead{background:#fff;border-bottom:1px solid #e3e3e3;}
.homeSrategy .srategyMod .srategyHead{width:100%;height:150px;display:flex;align-items: center; justify-content: space-around;background:#f5f5f5;background-repeat:no-repeat;background-position:center;background-size:100% auto;}
.homeSrategy .srategyMod .srategyHead .srategyHeadMod{width:100%;height:100%;background:rgba(0,0,0,.2);display:flex; justify-content: center; flex-direction: column; align-items: center;color:#fff;}
.homeSrategy .srategyMod .srategyHead .srategyHeadMod img{}
.homeSrategy .srategyMod .toMore{border:1px solid #999; margin:0px auto;display:inline-block;padding:4px 10px;text-align:center;font-size:14px;color:#666;}
.homeSrategy .srategyMod .srategyBody{box-sizing: border-box;width:100%;padding:15px 12px;}
.homeSrategy .srategyBodyList{font-size:14px;}
.homeSrategy .srategyBodyList .srategyFirstMod{display:flex;align-items: center;padding-bottom:10px;border-bottom:1px solid #DEDEDE;}
.homeSrategy .srategyBodyList .srategyFirstModPic{height:70px;width:37%;overflow:hidden;}
.homeSrategy .srategyBodyList .srategyFirstModDesc{width:63%;box-sizing: border-box;padding-left:10px;}
.homeSrategy .srategyBodyList .srategyFirstMod h3{color:#333;flex-direction: row;font-weight:100;}
.homeSrategy .srategyBodyList .srategyFirstModDesc p{line-height:16px;color:#666;font-size:12px;margin-top:10px;height:30px;overflow: hidden;}
.homeSrategy .srategyBodyList .srategyBodyListMod{margin:14px 0;display:block;color:#333;font-size:12px;line-height:14px;}
.homeSrategy .srategyBodyList .srategyBodyListMod:hover{color:#3FBB87;}
</style>
<template>
	<div class="homeSrategy bodyCenter">
		<h3 class="homeTitle">{{$t("message.menu.Strategy")}}</h3>
		<div class="srategyList clear">
			<div v-for="(srategyMod,index) in srategyList" :key="index" class="srategyMod">
				<div :style="'background-image:url(https://s3.ap-southeast-1.amazonaws.com/yenstatic/image/homeStrategyHead/'+(index+1)+'.jpg)'" class="srategyHead">
					<div class="srategyHeadMod">
						<img width="40" :src="'/static/image/home/homeSrategy_'+(index+1)+'.png'" />
						<p class="mt10" v-if="index==0">{{$t("message.menu.Strategy")}}</p>
						<p class="mt10" v-if="index==1">{{$t("message.strategy.strategMenu.prepare")}}</p>
						<p class="mt10" v-if="index==2">{{$t("message.strategy.strategMenu.decorating")}}</p>
						<p class="mt10" v-if="index==3">{{$t("message.strategy.strategMenu.finish")}}</p>
					</div>
				</div>
				<div class="srategyBody">
					<div class="srategyBodyList">
						<div class="srategyBodyListBox" v-for="(srategyBodyListMod ,nIndex) in srategyMod" :key="nIndex">
							<router-link :to="'/strategyDetails/'+srategyBodyListMod.relatedId" v-if="nIndex == 0" class="srategyFirstMod">
								<div class="srategyFirstModPic">
									<img width="100%" height="100%" :src="srategyBodyListMod.img" />
								</div>
								<div class="srategyFirstModDesc">
									<h3 class="aloneTextEllipsis">{{srategyBodyListMod.title}}</h3>
									<p>{{srategyBodyListMod.summary}}</p>
								</div>
							</router-link>
							<router-link :to="'/strategyDetails/'+srategyBodyListMod.relatedId" v-else class="srategyBodyListMod aloneTextEllipsis">
								{{srategyBodyListMod.title}}
							</router-link>
						</div>
					</div>
					<div class="textCenter">
						<router-link class="toMore" to="/strategyList/1">{{$t("message.strategy.strategType.more")}}</router-link>
					</div>
				</div>
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
	methods:{
		getData:function(){
			this.$fetch('/recommend/newArticleListData',{number:6})
			.then((res)=>{
				this.srategyList.push(res.data.featuredArticleList)
				this.srategyList.push(res.data.earlyArticleList)
				this.srategyList.push(res.data.metaphaseArticleList)
				this.srategyList.push(res.data.lastArticleList)
			})
		}
	},
	created(){
		/*this.$fetch('/recommend/articleListData',{type:12,number:4})
		.then((res)=>{
			this.srategyList = res.data
		})*/
		this.getData()
	}
}
</script>
<style type="text/css">
.homeMenuMod{width:100%;background:#f5f5f5;padding:20px 0;}
.homeMenuMod .homeMenuModBox{width:24%;margin:0 .5%;float:left;box-sizing: border-box;background:#fff;height:115px;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxText{float:left;width:70%;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxText h3{color:#333333;margin:10px 0;font-size:16px;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxText p{color:#6a6a6a;font-size:12px;}
.homeMenuMod .homeMenuModBox:nth-child(1) .homeMenuModBoxPic{background-image:url('/static/image/homeMenuMod/page_1.png');}
.homeMenuMod .homeMenuModBox:nth-child(2) .homeMenuModBoxPic{background-image:url('/static/image/homeMenuMod/page_2.png');}
.homeMenuMod .homeMenuModBox:nth-child(3) .homeMenuModBoxPic{background-image:url('/static/image/homeMenuMod/page_3.png');}
.homeMenuMod .homeMenuModBox:nth-child(4) .homeMenuModBoxPic{background-image:url('/static/image/homeMenuMod/page_4.png');}
.homeMenuMod .homeMenuModBox .homeMenuModBoxPic{width:100%;height:100%;background-position:right center;background-repeat:no-repeat;display:flex;align-items:center;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxPic .homeMenuModText{margin:0 20px;width:70%;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxPic .homeMenuModText h4{color:#333;font-size:18px;font-weight:100;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxPic .homeMenuModText p{color:#666;font-size:12px;margin-top:5px;}
</style>

<template>
	<div class="homeMenuMod">
		<div class="bodyCenter clear">
			<router-link to="/placeOrder" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<div class="homeMenuModText">
						<h4>{{$t("message.home.homeMenuTitle1")}}</h4>
						<p>{{$t("message.home.homeMenuText1")}}</p>
					</div>
				</div>
			</router-link>
			<router-link to="/placeOrder" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<div class="homeMenuModText">
						<h4>{{$t("message.home.homeMenuTitle2")}}</h4>
						<p>{{$t("message.home.homeMenuText2")}}</p>
					</div>
				</div>
			</router-link>
			<router-link to="/placeOrder" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<div class="homeMenuModText">
						<h4>{{$t("message.home.homeMenuTitle3")}}</h4>
						<p>{{$t("message.home.homeMenuText3")}}</p>
					</div>
				</div>
			</router-link>
			<router-link to="/guarantee" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<div class="homeMenuModText">
						<h4>{{$t("message.home.homeMenuTitle4")}}</h4>
						<p>{{$t("message.home.homeMenuText4")}}</p>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	components:{

	},
	data(){
		return {
			

		}
	},
	mounted(){
		
	},
	created(){
		
	}
}
</script>
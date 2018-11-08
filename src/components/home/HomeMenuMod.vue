<style type="text/css">
.homeMenuMod{width:100%;background:#f5f5f5;padding:20px 0;}
.homeMenuMod .homeMenuModBox{width:23.4%;margin:0 .8%;float:left;box-sizing: border-box;background:#fff;height:115px;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxText{float:left;width:70%;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxText h3{color:#333333;margin:10px 0;font-size:16px;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxText p{color:#6a6a6a;font-size:12px;}
.homeMenuMod .homeMenuModBox .homeMenuModBoxPic{width:100%;}
</style>

<template>
	<div class="homeMenuMod">
		<div class="bodyCenter clear">
			<router-link to="/placeOrder" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<img width="100%" :src="$t('message.home.homeMenuImage1')" />
				</div>
			</router-link>
			<router-link to="/placeOrder" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<img width="100%" :src="$t('message.home.homeMenuImage2')" />
				</div>
			</router-link>
			<router-link to="/placeOrder" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<img width="100%" :src="$t('message.home.homeMenuImage3')" />
				</div>
			</router-link>
			<router-link to="/guarantee" class="homeMenuModBox">
				<div class="homeMenuModBoxPic">
					<img width="100%" :src="$t('message.home.homeMenuImage4')" />
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
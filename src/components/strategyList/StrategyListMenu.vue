<style type="text/css">
.strategyListMenu{width:28%;margin-right:2%;float:left;background:#fff;position:sticky;top:0;padding:10px 0 20px;}
.strategyListMenu .strategyListMenuMod{padding:10px;}
.strategyListMenu .strategyListMenuTitle{color:#000;font-size:18px; text-align:left; height:35px; line-height:35px;padding-left:30px;background-repeat:no-repeat;background-position:left center;background-size:auto 60%;}
.strategyListMenu .strategyListMenuTitle.prepare{background-image:url('/static/image/prepareIcon.png');}
.strategyListMenu .strategyListMenuTitle.decorating{background-image:url('/static/image/decoratingIcon.png');}
.strategyListMenu .strategyListMenuTitle.finish{background-image:url('/static/image/finishIcon.png') ;}
.strategyListMenu .strategyListMenuTitle.all{text-align:center;}
.strategyListMenu .strategyListMenuTitle.all a{border:1px solid #3fbb87;color:#3fbb87;border-radius:5px; width:40%;display:block;margin:20px auto;}
.strategyListMenu .menuList{padding:5px 0;}
.strategyListMenu .menuList li{float:left;width:30%;margin:0 1%;text-align:center;}
.strategyListMenu .menuList li a{color:#676767;display:block;border:1px solid #e8e8e8;padding:7px 0;margin:5px 0;font-size:13px;}
.strategyListMenu .menuList li a.select{color:#3fbb87;border-color:#3fbb87;}
</style>
<template>
	<div class="strategyListMenu clear">
		<div class="strategyListMenuMod">
			<div class="strategyListMenuTitle prepare">{{$t("message.strategy.strategMenu.prepare")}}</div>
			<div class="menuList">
				<ul class="clear">
					<li><router-link :class="this.$route.params.id == 1?'select':''" to="/strategyList/1">{{$t("message.strategy.strategType.takeRoom")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 2?'select':''" to="/strategyList/2">{{$t("message.strategy.strategType.design")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 3?'select':''" to="/strategyList/3">{{$t("message.strategy.strategType.calculator")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 4?'select':''" to="/strategyList/4">{{$t("message.strategy.strategType.contract")}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class="strategyListMenuMod">
			<div class="strategyListMenuTitle decorating">{{$t("message.strategy.strategMenu.decorating")}}</div>
			<div class="menuList">
				<ul class="clear">
					<li><router-link :class="this.$route.params.id == 5?'select':''" to="/strategyList/5">{{$t("message.strategy.strategType.alter")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 6?'select':''" to="/strategyList/6">{{$t("message.strategy.strategType.waterPower")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 7?'select':''" to="/strategyList/7">{{$t("message.strategy.strategType.waterProof")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 8?'select':''" to="/strategyList/8">{{$t("message.strategy.strategType.masonry")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 9?'select':''" to="/strategyList/9">{{$t("message.strategy.strategType.woodwork")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 10?'select':''" to="/strategyList/10">{{$t("message.strategy.strategType.paint")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 11?'select':''" to="/strategyList/11">{{$t("message.strategy.strategType.finish")}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class="strategyListMenuMod">
			<div class="strategyListMenuTitle finish">{{$t("message.strategy.strategMenu.finish")}}</div>
			<div class="menuList">
				<ul class="clear">
					<li><router-link :class="this.$route.params.id == 12?'select':''" to="/strategyList/12">{{$t("message.strategy.strategType.softDc")}}</router-link></li>
					<li><router-link :class="this.$route.params.id == 13?'select':''" to="/strategyList/13">{{$t("message.strategy.strategType.reside")}}</router-link></li>
				</ul>
			</div>
		</div>
		<div class="strategyListMenuTitle all"><router-link to="/strategyList/0">{{$t("message.strategy.strategType.all")}}</router-link></div>
		
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>
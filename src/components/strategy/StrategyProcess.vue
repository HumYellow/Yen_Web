<style type="text/css">
.processMod a .icon{background:url("../../../static/image/strategyProcess.png") no-repeat;width:16px;height:18px;margin:0 auto 10px;}
.processMod{float:left;width:33%;}
.processMod:nth-child(2){margin:0 .5%;}
.processMod .processModBg{height:250px;}
.processMod:nth-child(1) .processModBg{background:url("https://s3.ap-southeast-1.amazonaws.com/yenstatic/image/strategyProcess1.png") no-repeat;background-size:100% 100%;}
.processMod:nth-child(2) .processModBg{background:url("https://s3.ap-southeast-1.amazonaws.com/yenstatic/image/strategyProcess2.png") no-repeat;background-size:100% 100%;}
.processMod:nth-child(3) .processModBg{background:url("https://s3.ap-southeast-1.amazonaws.com/yenstatic/image/strategyProcess3.png") no-repeat;background-size:100% 100%;}

.processMod:nth-child(1){background-color:#fefff4;}
.processMod:nth-child(2){background-color:#f9fffc;}
.processMod:nth-child(3){background-color:#f5fcff;}

.processMod a{border-left:1px solid;border-bottom:1px solid;display:block; float:left;box-sizing: border-box;text-align:center;color:#999;font-size:14px;}
.processMod:nth-child(1) a:hover{color:#ABB357;}
.processMod:nth-child(2) a:hover{color:#449D6F;}
.processMod:nth-child(3) a:hover{color:#4397a4;}
.processMod a:last-child{border-right:1px solid;}
.processMod:nth-child(1) a{width:25%;border-color:#edeee5;padding:53px 0;}
.processMod:nth-child(2) a{width:25%;border-color:#dfece7;padding:15.7px 0;}
.processMod:nth-child(2) a:nth-child(5){border-right:1px solid #dfece7;}
.processMod:nth-child(3) a{width:50%;border-color:#dbe5e6;padding:53px 0;}

.processMod a .text{font-size:14px; height:16px;line-height:16px;}
.processMod:nth-child(1) a:nth-child(2) .icon{background-position:-48px 1px;}
.processMod:nth-child(1) a:nth-child(3) .icon{background-position:-65px 1px;}
.processMod:nth-child(1) a:nth-child(4) .icon{background-position:-82px 1px;}
.processMod:nth-child(1) a:nth-child(5) .icon{background-position:-99px 1px;}

.processMod:nth-child(2) a:nth-child(2) .icon{background-position:-116px 1px;}
.processMod:nth-child(2) a:nth-child(3) .icon{background-position:-134px 1px;}
.processMod:nth-child(2) a:nth-child(4) .icon{background-position:-151px 1px; width:18px;}
.processMod:nth-child(2) a:nth-child(5) .icon{background-position:-170px 1px; width:15px;}
.processMod:nth-child(2) a:nth-child(6) .icon{background-position:-185px 1px;width:20px;}
.processMod:nth-child(2) a:nth-child(7) .icon{background-position:-205px 1px;}
.processMod:nth-child(2) a:nth-child(8) .icon{background-position:-222px 1px;width:20px;}
.processMod:nth-child(2) a:nth-child(9) .icon{background-position:-242px 1px;}

.processMod:nth-child(3) a:nth-child(2) .icon{background-position:-265px 1px;width:18px;}
.processMod:nth-child(3) a:nth-child(3) .icon{background-position:-285px 1px;width:18px;}

</style>
<template>
	<div class="strategyProcess strategyMod clear">
		<div class="process clear">
			<div class="processMod clear">
				<div class="processModBg"></div>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.takeRoom")}}</div>
				</router-link>
				<router-link to="/strategyList/2">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.design")}}</div>
				</router-link>
				<router-link to="/strategyList/3">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.calculator")}}</div>
				</router-link>
				<router-link to="/strategyList/4">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.contract")}}</div>
				</router-link>
			</div>
			<div class="processMod clear">
				<div class="processModBg"></div>
				<router-link to="/strategyList/5">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.alter")}}</div>
				</router-link>
				<router-link to="/strategyList/6">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.waterPower")}}</div>
				</router-link>
				<router-link to="/strategyList/7">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.waterProof")}}</div>
				</router-link>
				<router-link to="/strategyList/8">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.masonry")}}</div>
				</router-link>
				<router-link to="/strategyList/9">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.woodwork")}}</div>
				</router-link>
				<router-link to="/strategyList/10">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.paint")}}</div>
				</router-link>
				<router-link to="/strategyList/11">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.finish")}}</div>
				</router-link>
				<router-link to="/strategyList/0">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.more")}}</div>
				</router-link>
			</div>
			<div class="processMod clear">
				<div class="processModBg"></div>
				<router-link to="/strategyList/12">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.softDc")}}</div>
				</router-link>
				<router-link to="/strategyList/13">
					<div class="icon"></div><div class="text">{{$t("message.strategy.strategType.reside")}}</div>
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
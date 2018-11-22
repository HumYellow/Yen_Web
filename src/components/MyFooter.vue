<style type="text/css">
#footer{background:#fff;z-index:1;padding:40px 0; width:100%;min-width:960px;text-align:center;box-shadow:2px -2px 20px #e9e9e9;}
#footer .footerCenter{width:1200px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center}
.footerCenter .footerLeft{}
.footerCenter .footerRight{}
#footer .footerMod{display:inline-block;padding:0 1%;width:25%;box-sizing: border-box;float:left;}
#footer .footerMod h3{color:#666;text-align:left;line-height:35px;font-size:14px;}
#footer .footerMod p{color:#999;text-align:left;line-height:18px;font-size:12px;}
#footer .footerRouterList a{float:left;margin-right:20px;}
#footer .footerTextBox{text-align:center;color:#999; font-size:12px;margin-top:20px;line-height:20px;}
#footer .linkListMod{font-size:14px;}
#footer .linkListMod a{display:inline-block;padding:0 20px;border-left:1px solid #DADADA;color:#666666;}
#footer .linkListMod a:nth-child(1){border:none;}
</style>
<template>
	<div v-if="showThis" id="footer">
		<div class="footerCenter clear">
			<div class="footerLeft">
				<div class="linkListMod">
					<router-link to="/aboutYen/termsService">{{$t("message.myFooter.termsOfService")}}</router-link>
					<router-link to="/aboutYen/aboutUs">{{$t("message.myFooter.aboutUs")}}</router-link>
					<router-link to="/aboutYen/contactUs">{{$t("message.myFooter.connectUs")}}</router-link>
					<router-link to="/businessCooperation">{{$t("message.myFooter.businessCooperation")}}</router-link>
				</div>
				<p class="footerTextBox" v-html="$t('message.myFooter.disclaimer')"></p>
				<p class="footerTextBox" v-html="$t('message.myFooter.disclaimer2')"></p>
			</div>
			<div class="footerRight">
				<div class="erweiCode">
					<img width="100" height="100" src="/static/image/erwei.png" />
				</div>
			</div>
		</div>
		<Eject @closeEject="closeEject" v-if="ejectShow" :ejectType="ejectType"></Eject>
	</div>
</template>
<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'myFooter',
	data(){
		return{
			showThis:true,
			noShowList:['/login','/register'],
			ejectType:'complaint',
			ejectShow:false,
		}
	},
	components:{
		Eject
	},
	computed:{
	},
	methods:{
		showTab:function(){//切换展示
			for(var i = 0;i < this.noShowList.length;i++){
				if(this.$route.path == this.noShowList[i]){
					this.showThis = false 
					return
				}else this.showThis = true
			}
		},
		showEject:function(){
			this.ejectShow = true
			this.$swallow.stop()
		},
		closeEject:function(){
			this.ejectShow = false
			this.$swallow.move()
		},

	},
	mounted:function(){
		this.showTab();
	},
	watch:{
		"$route":"showTab"
	}
}
</script>
<style type="text/css">
.registrationInformationMod{}
.registrationInformationMod .registrationInformationBox{border-bottom:1px solid #e6e6e6;margin:30px auto;}
.registrationInformationMod .registrationInformationTeam{border:1px solid #e6e6e6;border-bottom:none;font-size:13px;}
.registrationInformationMod .registrationInformationTeam .key ,.registrationInformationTeam .pair{float:left;padding:20px 0;}
.registrationInformationMod .registrationInformationTeam .key{width:20%;background:#f8f8f8;text-align:center;border-right:1px solid #e6e6e6;box-sizing: border-box;}
.registrationInformationMod .registrationInformationTeam .pair{width:80%;text-align:left;text-indent: 20px;}
.introductionBox h4{color:#666;font-size:16px;line-height:26px;}
.introductionBox p{color:#999;font-size:12px;line-height:20px;}
</style>
<template>
	<div class="registrationInformationMod">
		<div class="companyDetailsMod clear" v-if="registrationList.certificateImg">
			<h3>{{$t("message.company.certificate")}}</h3>
			<div class="certificateBox clear" id="galley" ref="galley">
				<img width="30%" :src="registrationList.certificateImg" alt="Giấy phép kinh doanh" />
			</div>
	    </div>
		<div class="companyDetailsMod clear">
			<h3>{{$t("message.company.companyProfile")}}</h3>
			<div class="introductionBox clear" v-if="registrationList.describe">
				<h4>{{$t("message.company.companyIntroduction")}}</h4>
				<p>{{registrationList.describe}}</p>
			</div>
			<div class="introductionBox clear" v-if="registrationList.scale">
				<h4>{{$t("message.company.companySize")}}</h4>
				<p>{{registrationList.scale}}</p>
			</div>
			<div class="introductionBox clear" v-if="registrationList.special">
				<h4>{{$t("message.company.decorationService")}}</h4>
				<p>{{registrationList.special}}</p>
			</div>
	    </div>
		<div class="companyDetailsMod clear" v-if="registrationList.bizfileList !== undefined && registrationList.bizfileList.length >0">
			<h3>{{$t("message.company.registrationInformation")}}</h3>
			<div class="registrationInformationBox clear">
				<div class="registrationInformationTeam clear" v-for="bizfileList in registrationList.bizfileList">
					<span class="key">{{bizfileList.key}}</span>
					<span class="pair">{{bizfileList.value}}</span>
				</div>
			</div>
	    </div>
    </div>
</template>
<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
	name: '',
	data() {
	  return {
	  	registrationList:{},
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
	mounted() {
	  
	},
	created(){
		this.$fetch('/company/profileData', {id:this.$route.params.id})
		.then((res)=>{
			this.registrationList = res.data
			console.info(this.registrationList.bizfileList)
		})
	},
	watch:{
		'registrationList':'galley',

	}
}
</script>
<style type="text/css">
.companyDetailsTeamMod{margin-top:35px;}
.teamMod{width:20%;float:left;text-align:center;}
.teamMod .pic{width:130px;border-radius:50%;margin:0 auto;overflow:hidden;}
.teamMod p{font-size:13px; line-height:24px;}
.teamMod .name{color:#999;margin-top:10px;font-size:16px;}
.teamMod .title{color:#333;font-size:12px}
</style>
<template>
	<div v-if="companyDetailsTeam.length > 0" class="companyDetailsTeam companyDetailsMod clear">
		<h3>{{$t("message.company.designer")}}</h3>
		<div class="companyDetailsTeamMod clear">
			<div v-for="(team,index) in companyDetailsTeam" v-if="index < 5" class="teamMod">
				<div class="pic"><img width="100%" :src="team.img" /></div>
				<p class="name">{{team.name}}</p>
				<p class="title">{{team.title}}</p>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
		companyDetailsTeam:[]
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/designer/listData', {companyId:this.$route.params.id})
		.then((res)=>{
			this.companyDetailsTeam = res.data
		})
	},
}
</script>
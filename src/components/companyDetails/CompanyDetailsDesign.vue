<style type="text/css">
.companyDetailsDesign{}
.companyDetailsDesign .designMod{width:32%;float: left;color:#999;margin:10px 1.3% 10px 0;}
.companyDetailsDesign .designModDesc{font-size:12px; line-height:30px;padding:10px;}
.companyDetailsDesign .designModDesc .left{color:#333333;font-size:16px;}
.companyDetailsDesign .companyDetailsDesignBox{height:220px;overflow:hidden;}
</style>
<template>
	<div v-if="companyDetailsDesign.length > 0" class="companyDetailsDesign companyDetailsMod clear">
		<h3>{{$t("message.company.designCases")}}</h3>
		<div class="companyDetailsDesignMod clear">
			<router-link :to="'/designDetails/'+design.id" v-for="design in companyDetailsDesign" class="designMod">
				<div class="companyDetailsDesignBox"><img width="100%" :src="design.img" /></div>
				<div class="designModDesc">
					<p class="clear">
						<span class="left">{{design.name}}</span>
						<span class="right">{{design.count}} {{$t("message.design.pictures")}}</span>
					</p>
					<!-- <p>90m&nbsp;&nbsp;/&nbsp;&nbsp;two bedrooms&nbsp;&nbsp;/&nbsp;&nbsp;modern</p> -->
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
	  	companyDetailsDesign:[]
	  }
	},
	components: {
		
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/design/atlas/listData',{
			'companyId':this.$route.params.id,
		})
		.then((res)=>{
			this.companyDetailsDesign = res.data
		})
	},
}
</script>
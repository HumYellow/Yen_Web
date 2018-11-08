<style type="text/css">
#companyDetails{min-height:70vh;}
#companyDetails .companyDetails{margin:40px auto;}
#companyDetails .companyDetailsMod{margin:30px 0;padding:50px;background:#fff;}
#companyDetails .companyDetailsMod h3{font-weight: 100;font-size:18px;line-height:30px;padding:0 15px;
	margin-bottom:20px;border-left:2px solid #3fbb87;}
</style>
<template>
	<div id="companyDetails">
		<MyHeader></MyHeader>
		<div class="companyDetails bodyCenter clear">
			<CompanyDetailsDesc></CompanyDetailsDesc>
			<CompanyDetailsDesign></CompanyDetailsDesign>
			<CompanyDetailsTeam></CompanyDetailsTeam>
			<RegistrationInformation></RegistrationInformation>
	    </div>
	</div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import CompanyDetailsDesc from '@/components/companyDetails/CompanyDetailsDesc'
import CompanyDetailsDesign from '@/components/companyDetails/CompanyDetailsDesign'
import CompanyDetailsTeam from '@/components/companyDetails/CompanyDetailsTeam'
import RegistrationInformation from '@/components/companyDetails/RegistrationInformation'


export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
		MyHeader,
		CompanyDetailsDesc,
		CompanyDetailsDesign,
		CompanyDetailsTeam,
		RegistrationInformation
	},
	mounted() {
	  
	}
}
</script>
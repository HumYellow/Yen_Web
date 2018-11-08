<style type="text/css">
#collectCompany{min-height:66vh;}
</style>
<template>
	<div id="collectCompany">
		<CompanyList :theType="collection"></CompanyList>
    </div>
</template>
<script>
import CompanyList from '@/components/company/companyList'
export default {
	name: '',
	data() {
	  return {
	  	collection:{
	  		type:'collection',
	  		url:'/home/collect/listData',
	  		getNumUrl:'/home/collect/total',
	  		tagValue:'Company',
	  		data:{
	  			tagValue:'Company',
	  		}
	  	}
	  }
	},
	components: {
		CompanyList,
	},
	mounted() {
	  
	}
}
</script>
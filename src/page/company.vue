<style type="text/css">
.company{min-width:1200px;max-width:2000px;margin:40px auto 0; padding:0 1vw;}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="company bodyCenter clear">
			<CompanyList></CompanyList>
			<!-- <CompanySidebar></CompanySidebar> -->
			<ContactWhole></ContactWhole>
	    </div>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import CompanyList from '@/components/company/companyList'
import CompanySidebar from '@/components/company/companySidebar'
import ContactWhole from '@/components/ContactWhole'
export default {
	name: '',
	data() {
	  return {
	  }
	},
	components: {
		MyHeader,
		CompanyList,
		CompanySidebar,
		ContactWhole
	},
	mounted() {
	  
	}
}
</script>
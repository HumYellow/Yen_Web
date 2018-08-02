<template>
	<div>
		<HomeHead></HomeHead>
		<HomeCompany></HomeCompany>
		<div class="process"><img width="100%" src="/static/image/process.jpg" /></div>
	</div>
</template>
<script type="text/javascript">
import HomeHead from '@/components/home/HomeHead'
import HomeCompany from '@/components/home/HomeCompany'
export default {
	name:'home',
	components:{
		HomeHead,
		HomeCompany
	},
	data(){
		return {

		}
	},
	mounted:()=>{
		document.title = 'home'
	}
}
</script>
<style type="text/css">
body{background:#fff url('/static/image/bg.png') repeat;}
.process{max-width:1800px;width:100%;margin:0 auto;}
</style>
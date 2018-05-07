<template>
	<div>
		<HomeHead></HomeHead>
	</div>
</template>
<script type="text/javascript">
import HomeHead from '@/components/HomeHead'
import HomeAboutUs from '@/components/HomeAboutUs'
export default {
	name:'home',
	components:{
		HomeHead,
		HomeAboutUs
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
	
</style>
<style type="text/css">

</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<designerDetails></designerDetails>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
import designerDetails from '@/components/designerDetails/designerDetails'
export default {
	name:'designDetails',
	components:{
		MyHeader,
		designerDetails
	},
	data(){
		return {
		}
	},
	mounted:()=>{
		document.title = 'Design details'
	}
}
</script>
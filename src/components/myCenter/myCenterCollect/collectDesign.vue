<style type="text/css">

</style>
<template>
	<div>
		<DesignTypeHead :theType="designType"></DesignTypeHead>
    </div>
</template>
<script>
import DesignTypeHead from '@/components/designType/DesignTypeHead'
export default {
	name: '',
	data() {
	  return {
		designType:{
			type:"collectDesign",
			num:3,
			url:'/home/collect/listData',
	  		data:{
	  			tagValue:'DesignAtlas',
	  		}
		}
	  }
	},
	components: {
		DesignTypeHead,
	},
	mounted() {
	  
	}
}
</script>
<style type="text/css">
.designType{margin-top:30px;}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="designType bodyCenter clear">
			<DesignTypeHead></DesignTypeHead>
		</div>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
import DesignTypeHead from '@/components/designType/DesignTypeHead'
export default {
	name:'design',
	components:{
		MyHeader,
		DesignTypeHead,
	},
	data(){
		return {
		}
	},
	mounted:()=>{
		document.title = 'design'
	}
}
</script>
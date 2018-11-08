<style type="text/css">

</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<DesignHead></DesignHead>
		<DesignList></DesignList>
		<ContactWhole></ContactWhole>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
import DesignHead from '@/components/design/DesignHead'
import DesignList from '@/components/design/DesignList'
import ContactWhole from '@/components/ContactWhole'
export default {
	name:'design',
	components:{
		MyHeader,
		DesignHead,
		DesignList,
		ContactWhole
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
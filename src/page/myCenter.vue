<style>
.myCenter{width:1100px;margin:0 auto;box-sizing: border-box;padding:20px;min-height:80vh;}
.myCenterBox{float:left; width:77%;margin-left:3%;background:#fff;padding:20px;box-sizing: border-box;box-shadow: 2px 1px 10px #B1B1B1}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="myCenter clear">
			<MyCenterSidebar></MyCenterSidebar>
			<div class="myCenterBox">
				<router-view></router-view>
			</div>
	    </div>
	</div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import MyCenterSidebar from '@/components/myCenter/MyCenterSidebar'

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
		MyCenterSidebar,
	},
	mounted() {
		document.title = 'myCenter'
	  
	}
}
</script>
<style type="text/css">
.strategyList{width:1200px;margin:30px auto;}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="strategyList clear">
			<StrategyListMenu></StrategyListMenu>
			<StrategyListCenter></StrategyListCenter>
	    </div>
	</div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import StrategyListMenu from '@/components/strategyList/StrategyListMenu'
import StrategyListCenter from '@/components/strategyList/StrategyListCenter'

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
		StrategyListMenu,
		StrategyListCenter
	},
	mounted() {
	  document.title = 'strategyList'
	}
}
</script>
<style type="text/css">
body{background:#f6f6f6;}
.strategyDetailsPage{width:1200px;margin:30px auto;}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="strategyDetails clear">
			<div class="strategyDetailsPage clear">
				<StrategyCenter></StrategyCenter>
				<!-- <StrategySidebar></StrategySidebar> -->
			</div>
	    </div>
	</div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import StrategyCenter from '@/components/strategyDetails/StrategyCenter'
import StrategySidebar from '@/components/strategyDetails/StrategySidebar'

export default {
	name: 'strategyDetails',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
		MyHeader,
		StrategyCenter,
		StrategySidebar
	},
	mounted() {
		document.title = 'strategyDetails'
	  
	}
}
</script>
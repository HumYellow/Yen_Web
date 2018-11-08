<style type="text/css">
.strategy{background:#fff;padding:40px 0;}
.strategy .strategyMod{padding-bottom:40px;}
.strategy .strategyMod:last-child{padding-bottom:0;}
.strategy .strategyPage{width:1200px;margin:0 auto;}
.strategy .strategyTitle h3{font-size:24px;line-height:40px;font-weight:100;padding-bottom:10px;margin-bottom:10px;position:relative}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="strategy clear">
			<div class="strategyPage">
				<StrategyProcess></StrategyProcess>
				<StrategyMaterial></StrategyMaterial>
				<Geomancy></Geomancy>
				<ContactWhole></ContactWhole>
			</div>
	    </div>
	</div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import StrategyProcess from '@/components/strategy/StrategyProcess'
import StrategyMaterial from '@/components/strategy/StrategyMaterial'
import Geomancy from '@/components/strategy/Geomancy'
import ContactWhole from '@/components/ContactWhole'

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
		StrategyProcess,
		StrategyMaterial,
		Geomancy,
		ContactWhole
	},
	mounted() {
		document.title = 'strategy'
	  
	},
}
</script>
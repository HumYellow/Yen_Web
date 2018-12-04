<style type="text/css">
.homeBox{background:#fff;}
.homeTitle{text-align:center; font-size:24px; line-height:30px; color:#333;}
</style>
<template>
	<div class="homeBox">
		<MyHeader></MyHeader>
		<HomeHead></HomeHead>
		<HomeMenuMod></HomeMenuMod>
		<HomeCompany></HomeCompany>
		<HomeProcess></HomeProcess>
		<HomeDesign></HomeDesign>
		<HomeStrategy></HomeStrategy>
		<ContactWhole></ContactWhole>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
import HomeHead from '@/components/home/HomeHead'
import HomeMenuMod from '@/components/home/HomeMenuMod'
import HomeCompany from '@/components/home/HomeCompany'
import HomeProcess from '@/components/home/HomeProcess'
import HomeDesign from '@/components/home/HomeDesign'
import HomeStrategy from '@/components/home/HomeStrategy'
import ContactWhole from '@/components/ContactWhole'

export default {
	name:'home',
	components:{
		MyHeader,
		HomeHead,
		HomeMenuMod,
		HomeCompany,
		HomeProcess,
		HomeDesign,
		ContactWhole,
		HomeStrategy
	},
	data(){
		return {
		}
	},
	methods:{
	},
	mounted(){
		document.title = 'home';
		
	}
}
</script>
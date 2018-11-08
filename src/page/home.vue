<style type="text/css">
.homeBox{background:#fff;}
.processBox .process{margin-top:40px;width:100%;}
.homeTitle{text-align:center; font-size:24px; line-height:30px; color:#555;}
</style>
<template>
	<div class="homeBox">
		<MyHeader></MyHeader>
		<HomeHead></HomeHead>
		<HomeMenuMod></HomeMenuMod>
		<HomeCompany></HomeCompany>
		<div class="processBox bodyCenter">
			<h3 class="homeTitle">{{$t("message.home.serviceProcess")}}</h3>
			<div class="process bodyCenter">
				<router-link to="/guarantee" target="_blank">
					<img width="100%" :src="$t('message.home.processImage')" />
				</router-link>
			</div>
		</div>
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
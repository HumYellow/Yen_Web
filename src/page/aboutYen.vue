<style type="text/css">
.aboutYenBox{margin-top:40px;}
#aboutYen .aboutSidebarBox{width:20%;float:left;}
#aboutYen .aboutBodyBox{width:80%;float:left;}
.textBody{padding:30px;background:#fff;margin-left:20px;min-height:60vh;box-shadow: 2px 2px 10px #e9e9e9;color:#666666;font-size:14px;line-height:26px;}
</style>
<template>
	<div id="aboutYen">
		<MyHeader></MyHeader>
		<div class="aboutYenBox bodyCenter clear">
			<div class="aboutSidebarBox">
				<aboutSidebar></aboutSidebar>
			</div>
			<div class="aboutBodyBox">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
import aboutSidebar from '@/components/aboutYen/aboutSidebar'
export default {
	name:'designDetails',
	components:{
		MyHeader,
		aboutSidebar
	},
	data(){
		return {
		}
	},
	mounted(){
		
	}
}
</script>
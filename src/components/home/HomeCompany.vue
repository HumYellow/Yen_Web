<template>
	<div class="HomeCompany">
		<h3>Renovation Team</h3>
		<div class="companyList clear">
			<div v-for="company in companyList" class="companyMod">
				<div class="companyBg">
					<div class="companyLogo">
						<img width="100%" src="/static/image/image033.png" />
					</div>
				</div>
				<div class="companyDescribe">
					<h3>{{company.name}}</h3>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	components:{

	},
	data(){
		return {
			companyList:{
				1:{
					name:'zero',
					tel:'13444444'
				},
				2:{
					name:'one',
					tel:'13444444'

				},
				3:{
					name:'two',
					tel:'13444444'
					
				},
				4:{
					name:'three',
					tel:'13444444'
					
				}
			}
		}
	},
	mounted(){
		
	}
}
</script>
<style type="text/css">
.HomeCompany{margin:20px 0;}
.HomeCompany h3{text-align:center; font-size:3vw;}
.companyList{width:100%;}
.companyMod{width:20%;margin:0 2.5%;float:left;border:1px solid #d8d8d8;box-sizing:border-box; -webkit-box-sizing: border-box}
.companyBg{position:relative;height:200px;width:100%;}
.companyLogo{position:absolute;left:50%;margin-left:-25%;bottom:0;border-radius:50%;overflow:hidden;width:50%;}
.companyDescribe{padding:20px; }
</style>
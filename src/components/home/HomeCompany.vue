<style type="text/css">
.HomeCompany{margin:40px auto;}
.HomeCompany .companyList{width:100%; padding:30px 0 0;}
.HomeCompany .companyMod{background:#fff;width:19%;margin:0 .5%;float:left;border:1px solid #d8d8d8;box-sizing:border-box; -webkit-box-sizing: border-box}
.HomeCompany .companyBg{height:180px;width:100%;text-align:center;overflow:hidden;}
.HomeCompany .companyDescribe{padding:25px 10px;position:relative;}
.HomeCompany .companyLogo{position:absolute;left:50%;margin-left:-27px;top:-30px;border-radius:50%;overflow:hidden;width:54px;height:54px;box-shadow: 2px 2px 10px #e9e9e9}
.HomeCompany .companyDescribe p{text-align:center;font-size:12px}
.HomeCompany .companyDescribe p.companyName{align-items: center;height:50px;justify-content: space-around;flex-direction: column; display: flex;font-size:14px;line-height:22px;color:#333;}
.HomeCompany .companyDetails span{display:inline; font-size:12px;}
.HomeCompany .companyDetails .companyDetailsK{color:#999;}
.HomeCompany .companyDetails .companyDetailsV{color:#fc8930;}
.HomeCompany .companyPhone{border:1px solid #ebebeb;font-size:12px;text-align:center;width:100%;height:30px;line-height:30px;margin:20px auto 0;}
.HomeCompany .companyPhone .companyPhoneK{color:#999;}
</style>
<template>
	<div class="HomeCompany bodyCenter">
		<h3 class="homeTitle">{{$t("message.menu.Company")}}</h3>
		<div class="companyList clear">
			<div class="companyMod" v-for="(company,index) in companyList" v-if="index < 5">
				<router-link :to="'/companyDetails/'+company.relatedId">
					<div class="companyBg">
						<img height="100%" :src="company.img" />
					</div>
					<div class="companyDescribe">
						<div class="companyLogo">
							<img width="100%" :src="company.icon" />
						</div>
						<p class="companyName">{{company.name}}</p>
						<p class="companyDetails">
							<span class="companyDetailsK">{{$t("message.home.designScheme")}}:</span>
							<span class="companyDetailsV">{{company.designCount}}</span>
						</p>
						<div class="companyPhone">
							<span class="companyPhoneK">{{$t("message.home.consultingPhone")}}:</span>
							<span>{{company.contact}}</span>
						</div>
					</div>
				</router-link>
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
			companyList:[]
		}
	},
	mounted(){
	},
	created(){
		this.$fetch('/recommend/companyListData?type=2',{"nunmber":"4"})
		.then((res)=>{
			this.companyList = res.data
		})
	}
}
</script>
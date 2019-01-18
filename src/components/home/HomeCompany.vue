<style type="text/css">
.HomeCompany{margin:40px auto;}
.HomeCompany .companyList{width:100%; padding:30px 0 0;}
.HomeCompany .companyMod{background:#fff;width:19%;margin:10px .5%;float:left;border:1px solid #d8d8d8;box-sizing:border-box; -webkit-box-sizing: border-box;border-top:none;}
.HomeCompany .companyMod a{display:block;}
.HomeCompany .companyBg{height:180px;width:100%;overflow:hidden;display:flex; justify-content: center; align-items: center}
.HomeCompany .companyDescribe{padding:25px 10px;position:relative;}
.HomeCompany .companyLogo{position:absolute;left:50%;margin-left:-25px;top:-25px;border-radius:50%;overflow:hidden;width:50px;height:50px;box-shadow: 2px 2px 10px #e9e9e9}
.HomeCompany .companyDescribe p{text-align:center;font-size:12px}
.HomeCompany .companyDescribe p.companyName{font-size:14px;line-height:22px;color:#333;height:50px;align-items: center;justify-content: space-around;flex-direction: column; display: flex;overflow:hidden;}
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
			<div class="companyMod" v-for="(company,index) in companyList">
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
						<!-- <div class="companyPhone">
							<span class="companyPhoneK">{{$t("message.home.consultingPhone")}}:</span>
							<span>{{company.contact}}</span>
						</div> -->
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
		this.$fetch('/recommend/companyListData?type=2',{"number":"10"})
		.then((res)=>{
			this.companyList = res.data
		})
	}
}
</script>
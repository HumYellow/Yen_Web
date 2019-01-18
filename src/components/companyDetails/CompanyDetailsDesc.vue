<style type="text/css">
.companyDetailsDesc{width:100%;padding:30px 50px;box-sizing: border-box;background:#fff;}
.companyDetailsDescBox{position:relative;}
.companyDetailsDesc .companyDetailsDescLeft{position:absolute;left:0;top:0;height:120px;width:120px;}
.companyDetailsDesc .companyDetailsDescRight{box-sizing: border-box;margin-left:20px;padding:10px 20px;height:100%;padding-left:130px;}
.companyDetailsDesc .companyDetailsDescRight .companyDetailsDescText h2{font-size:24px;color:#333;line-height:28px;}
.companyDetailsDesc .designCaseBox{margin-top:20px;}
.companyDetailsDesc .designCaseBox .designCaseMod{text-align:center;margin-right:40px;float:left;}
.companyDetailsDesc .designCaseBox .designCase{font-size:16px;color:#666; margin-top:5px;line-height:20px;}
.companyDetailsDesc .designCaseBox .num{color:#f88533; font-size:22px; position:relative;top:2px;}
.companyDetailsDesc .designCaseBox .collectionMod{border:1px solid #15A166;border-radius:5px;padding:10px;}
.companyDetailsDesc .designCaseBox .collectionMod a{ color:#15A166;}
.companyDetailsDesc .companyDetailsDescBottom{margin-top:10px;}
.companyDetailsDesc .companyDetailsDescBottom p{font-size:16px; color:#999; line-height:28px;}
.companyDetailsDesc .companyDetailsDescBottom p span{font-weight:700;}
</style>
<template>
	<div class="companyDetailsDesc">
		<div class="companyDetailsDescBox">
			<div class="companyDetailsDescLeft">
				<img width="100%" :src="desc.img" />
			</div>
			<div class="companyDetailsDescRight">
				<div class="companyDetailsDescText">
					<h2 class="aloneTextEllipsis">{{desc.name}}</h2>
					<div class="designCaseBox clear">
						<div class="designCaseMod">
							<!-- <p class="num">{{desc.designCount}}</p> -->
							<div class="designCase">{{$t("message.company.designCases")}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">{{desc.designCount}}</span></div>
						</div>
						<div class="designCaseMod collectionMod">
					    	<a v-if="desc.collect" @click="collection">{{$t("message.design.cancelCollection")}}</a>
					    	<a v-else @click="collection">{{$t("message.design.collection")}}</a>
						</div>
						<!-- <div class="designCaseMod left">
							<p class="num">23</p>
							<p>Decoration site</p>
						</div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="companyDetailsDescBottom">
			<p><span>{{$t("message.company.address")}}&nbsp;:&nbsp;</span>{{desc.address}}</p>
			<p><span>{{$t("message.company.companyProfile")}}&nbsp;:&nbsp;</span>{{desc.description}}</p>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	getDataing:false,
	  	desc:{
	  		img:'',
	  		address:'',
	  		description:''

	  	}
	  }
	},
	components: {
		
	},
	methods:{
		getData:function(){
			this.$fetch('/company/detailData',{
				'id':this.$route.params.id
			})
			.then((res)=>{
				this.desc = res.data
			})
		},
		collection:function(){
			if(this.getDataing)return
			this.getDataing = true
			var url;
			if(this.desc.collect){
				url = '/home/collect/deleteData'
			}else{
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'Company',
				'relatedId':this.desc.id
			}).then(res => {
				this.desc.collect = !this.desc.collect
				this.getDataing = false
			})
			
		},
	},
	created(){
		this.getData()
	},
	mounted() {
	  
	}
}
</script>
<style type="text/css">
.homeDesign{margin:40px auto;padding:30px 0;background:#f5f5f5;}
.homeDesign .designList{width:100%;max-width:1400px;width:100%; height:600px;text-align:center;position:relative;margin-top:30px;}
.homeDesign .designBox:hover .designDesc{transition: all .8s ease;opacity:1}
.homeDesign .designBox{position:absolute;box-sizing: border-box;padding:5px;overflow:hidden;}
.homeDesign .designDesc{box-sizing: border-box;font-size:12px;line-height:18px;background:rgba(0,0,0,.5);color:#fff;height:98.2%;opacity:0;width:99%;align-items: center;justify-content: space-around;flex-direction: column; display: flex;position:absolute;left:10px;top:10px;}
.homeDesign .designBox_0{width:25%;height:100%;left:0;top:0;background-size:auto 100% !important;}
.homeDesign .designBox_0 .designBg{background-size:auto 100% !important;}
.homeDesign .designBox_1{width:50%;height:50%;left:25%;top:0;}
.homeDesign .designBox_1 .designBg{background-size:100% auto !important;}
.homeDesign .designBox_2{width:25%;height:50%;right:0;top:0;}
.homeDesign .designBox_2 .designBg{background-size:100% auto !important;}
.homeDesign .designBox_3{width:75%;height:50%;left:25%;bottom:0;}
.homeDesign .designBox_3 .designBg{background-size:100% auto !important;}
.homeDesign .designBg{margin:5px;width:100%;height:100%;}
.homeDesign .designDescBox h4{font-size:16px;line-height:20px;}
.homeDesign .designDescBox a{color:#fff;background:#339966;border-radius:5px;display:block;width:135px;height:35px;line-height:35px;text-align:center;margin:20px auto 0;}

</style>
<template>
	<div class="homeDesign">
		<div class="bodyCenter">
			<h3 class="homeTitle">{{$t("message.menu.Design")}}</h3>
			<div class="designList clear">
				<div :class="'designBox '+'designBox_'+index" v-for="(design,index) in designList">
					<div class="designBg" :style="'background:url('+design.img+') no-repeat'">
						<div class="designDesc">
							<div class="designDescBox">
								<h4>{{design.name}}</h4>
								<router-link :to="'/designDetails/'+design.relatedId">{{$t("message.home.clickToView")}}</router-link>
							</div>
						</div>
					</div>
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
			designList:[{

			}],

		}
	},
	mounted(){
		
	},
	created(){
		this.$fetch('/recommend/designListData?type=3')
		.then((res)=>{
			this.designList = res.data
		})
	}
}
</script>
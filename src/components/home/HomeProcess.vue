<style type="text/css">
.processBox{width:auto;margin:0 auto;}
.processBox .process{margin:40px 0 0;width:100%;overflow:hidden;}
.process a{display:flex;justify-content: center}
.processBox .processMod:nth-child(1){background-image:url('/static/image/process_1.png');}
.processBox .processMod:nth-child(2){background-image:url('/static/image/process_2.png');}
.processBox .processMod:nth-child(3){background-image:url('/static/image/process_3.png');}
.processBox .processMod:nth-child(4){background-image:url('/static/image/process_4.png');}
.processBox .processMod:nth-child(5){background-image:url('/static/image/process_5.png');}
.processBox .processMod:nth-child(6){background-image:url('/static/image/process_6.png');}
.processBox .processMod:nth-child(7){background-image:url('/static/image/process_7.png');}
.processBox .processMod{background-repeat:no-repeat;background-position:center center;width:190px;height:190px;display:flex;text-align:center;align-items: center;align-content: center;justify-content:center;}
.processBox .processMod h4{color:#333;font-size:14px;display:block;}
.processBox .processMod p{color:#666;font-size:12px;display:block;margin-top:10px;}
</style>
<template>
		<div class="processBox">
			<h3 class="homeTitle">{{$t("message.home.serviceProcess")}}</h3>
			<div class="process bodyCenter">
				<router-link to="/guarantee" target="_blank">
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle1")}}</h4>
							<p>{{$t("message.home.homeProcessText1")}}</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle2")}}</h4>
							<p>{{$t("message.home.homeProcessText2")}}</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle3")}}</h4>
							<p>{{$t("message.home.homeProcessText3")}}</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle4")}}</h4>
							<p>{{$t("message.home.homeProcessText4")}}</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle5")}}</h4>
							<p>{{$t("message.home.homeProcessText5")}}</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle6")}}</h4>
							<p>{{$t("message.home.homeProcessText6")}}</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>{{$t("message.home.homeProcessTitle7")}}</h4>
							<p>{{$t("message.home.homeProcessText7")}}</p>
						</div>
					</div>
					<!-- <img width="100%" :src="$t('message.home.processImage')" /> -->
				</router-link>
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
		
	}
}
</script>
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
							<h4>Gửi yêu cầu</h4>
							<p>Đăng ký liên hệ</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>Lên phương án</h4>
							<p>Miễn phí đo đạc thiết kế</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>So sánh</h4>
							<p>So sánh phương án thiết kế</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>Kí hợp đồng</h4>
							<p>Kí hợp đồng</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>Thi công</h4>
							<p>Thi công cải tạo</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>Nghiệm thu</h4>
							<p>Nghiệm thu bàn giao</p>
						</div>
					</div>
					<div class="processMod">
						<div class="processModBox">
							<h4>Bảo đảm</h4>
							<p>Đảm bảo chất lượng</p>
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
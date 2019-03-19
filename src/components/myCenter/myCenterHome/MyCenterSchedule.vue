<style type="text/css">
.myCenterSchedule{margin-top:20px;}
.myCenterSchedule h3{border-left:3px solid #0cb46a;margin:20px 0;padding-left:10px;}
.myCenterSchedule .myCenterScheduleMod h4{padding:10px 30px;display:inline-block;position:relative;bottom:-1px;color:#0cb46a; font-weight:100;cursor:pointer}
.myCenterSchedule .scheduleBox{padding:20px;border:1px solid #eee;}
.myCenterSchedule .scheduleDesc{padding:10px 20px;background:#f8f8f8;}
.myCenterSchedule .scheduleDescMod{float:left;color:#999;margin-right:40px; text-align:left;font-size:12px;}
.myCenterSchedule .scheduleDescMod span{color:#000;}
.myCenterSchedule .downTips{box-sizing: border-box;padding:10px 20px; font-size:12px; background:#f8f8f8; color:#333;}

.scheduleCneter{margin-top:15px;}
.scheduleList{width:100%;}
.scheduleList .agreeToPayBtn{margin-top:30px; height:30px;position:relative;}
.scheduleList .agreeToPayBtn a ,.scheduleList .agreeToPayBtn span{border-radius:5px; color:#fff;display:block;width:25%; text-align:center;height:30px; line-height:30px;}
.scheduleList .agreeToPayBtn input{position:absolute;width:25%;height:30px;left:0;top:0;opacity:0;}
.scheduleList .agreeToPayBtn .agree{background:#3fbb87;}
.scheduleList .agreeToPayBtn .auditting{background:#a2a2a2;}
.scheduleShowCenter{float:left;width:70%;}
.schedulePage span{padding:10px 0;width:25%;display:block;float:left;border:1px solid #eeeeee;box-sizing: border-box;text-align:center;}
.schedulePage span.nowStage{background:url(/static/image/myCenter/nowStage.png) 20px center no-repeat;background-size:14px auto;}
.schedulePage span.select{background-color:#0cb46a;color:#fff;}
.schedulePage span.nowStage.select{background:#0cb46a url(/static/image/myCenter/nowStage_select.png) 20px center no-repeat;background-size:14px auto;}
.scheduleShow{margin-top:20px;}
.scheduleShow li{padding:10px 30px; margin:5px 0;color:#9a9a9a;font-size:13px;background:url(/static/image/myCenter/scheduleShow.png) left 10px no-repeat;}
.scheduleShow li h5{margin-bottom:10px;}
.scheduleShow li.select{background-image: url(/static/image/myCenter/scheduleShowSelect.png)}
.myCenterSchedule .projectBtn{padding:5px 10px;font-size:13px; display:inline-block;}
.myCenterSchedule .projectBtn[data-swich=select]{border:1px solid #f4f4f4;border-top:3px solid #0cb46a;border-bottom-color:#fff;}
.scheduleList .companyList{width:80%;margin-top:10px;}
.scheduleList .companyListBox{float:left;width:33%;text-align:center;}
.scheduleList .companyListBox a{display:block;}
.scheduleList .companyPicBox{overflow:hidden;}
.scheduleList .companyListBox p{margin-top:10px;}
.presentationPicBox{margin-top:10px;}
.noProject{width:30%;width:30%;margin:0 auto;}
.noProject a{color:#fff;background:#0cb46a;border-radius:5px;width:100%;display:block; text-align:center;margin:30px 0 0; height:30px;line-height:30px;}
.scheduleShow .evaluateBtn{padding:8px 25px;border-radius:5px;color:#fff;}
.scheduleShow a.evaluateBtn{background:#3FBB87;}
.scheduleShow span.evaluateBtn{background:#a2a2a2;}
</style>
<template>
	<div class="myCenterSchedule clear">
		<div class="downTips">{{$t("message.myCenter.downTips")}}</div>
		<div v-if="this.scheduleDesc">
			<h3>{{$t("message.myCenter.myOrder")}}</h3>
			<div class="myCenterScheduleMod">
				<h4 class="projectBtn" :data-swich="scheduleDesc.orderId == list.orderId?'select':''" v-for="list in projectList" @click="getProject(list.orderId)">{{$t("message.myCenter.project")}}:{{list.orderId}}</h4>
				<div class="scheduleBox">
					<div class="scheduleDesc clear">
						<div class="scheduleDescMod">{{$t("message.myCenter.projectId")}}：<span>{{scheduleDesc.orderId}}</span></div>
						<div class="scheduleDescMod">{{$t('message.placeOrder.name')}}：<span>{{scheduleDesc.name}}</span></div>
						<div class="scheduleDescMod">{{$t('message.placeOrder.phone')}}：<span>{{scheduleDesc.phone}}</span></div>
					</div>
					<div class="scheduleCneter">
						<div class="schedulePage clear">
							<span v-for="(stageSelectMod ,index) in stageSelectNum" :class="[(index == stage?'select':''),(index == nowStage?'nowStage':'')]" @click="stageSelect(index);">{{$t("message.myCenter.step")}}{{stageSelectMod}}</span>
						</div>
						<div class="scheduleShow clear">
							<div class="scheduleList">
								<ul>
									<li v-for="(scheduleMod,index) in schedule[stage]" 
									:class="scheduleMod.tagId < step ||(scheduleMod.tagId == step && scheduleDesc.fewStepStatus != 'verify')?'select':''">
										<h5>{{scheduleMod.title}}</h5>
										<div v-if="scheduleMod.tagId <= step && scheduleDesc.fewStepStatus != 'verify'">{{scheduleMod['desc3']}}</div>
										<div v-if="scheduleMod.tagId <= step && scheduleDesc.fewStepStatus == 'verify'">{{scheduleMod['desc2']}}</div>
										<div v-if="scheduleMod.tagId > step">{{scheduleMod['desc']}}</div>
										<div v-if="key == 'fewStep'+scheduleMod.tagId"
										 	v-for="(value ,key) in scheduleDesc.orderDetailMap" 
										 	class="companyList clear">
											<div v-if="key == 'fewStep2'" v-for="company in value" class="companyListBox">
												<router-link :to="'/companyDetails/'+company.companyId">
													<div class="companyPicBox">
														<img width="100%" :src="company.companyImg" />
													</div>
													<p>{{company.companyName}}</p>
												</router-link>
											</div>
											<div class="presentationPicBox" v-if="key == 'fewStep3' || key == 'fewStep4' || key == 'fewStep5' || key == 'fewStep6' || key == 'fewStep7' || key == 'fewStep8' || key == 'fewStep9'">
												<img width="100%" :src="value.img" />
											</div>
										</div>
										<div v-if="(scheduleMod.tagId == step && scheduleDesc.fewStepStatus == 'verify') || (scheduleMod.tagId == step+1 && agreeToPayBtn)" class="agreeToPayBtn">
											<a v-if="!agreeToPayState" class="agree" @click="agreeToPay">
												{{$t("message.myCenter.step1.4.title")}}
											</a>
											<input v-if="!agreeToPayState && scheduleMod.tagId != '9' &&scheduleMod.tagId != '10'" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="Agree to pay" id=""  />
											<span v-if="agreeToPayState" class="auditting">{{$t("message.myCenter.auditting")}}</span>
										</div>
										<div class="mt20" v-if="(scheduleMod.tagId == 4 || scheduleMod.tagId == 6 || scheduleMod.tagId == 8 || scheduleMod.tagId == 10) && scheduleMod.tagId<=scheduleDesc.fewStep && scheduleDesc.fewStepStatus != 'verify'">
											<span v-if="scheduleDesc.commentStepList.indexOf(stage+1) > -1" class="evaluateBtn">{{$t("message.myCenter.evaluated")}}</span>
											<a v-else class="evaluateBtn" @click="showEject(stage)">
												{{$t("message.myCenter.evaluate")}}
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="noProject" v-else>
			<img width="100%" src="/static/image/myCenter/noProject.png" />
			<router-link to="/placeOrder">
				{{$t("message.myCenter.orderNow")}}
			</router-link>
		</div>
		<Eject @closeEject="closeEject" v-if="ejectShow" :ejectType="ejectType"></Eject>
    </div>
</template>
<script>
import Eject from '@/components/public/eject/Eject'
export default {
	name: '',
	data() {
	  return {
	  	scheduleDesc:false,
	  	nowProjectId:'',
	  	stageSelectNum:['1','2','3','4'],
	  	nowStage:2,//当前进行的大选项
	  	stage:2,//当前选中的大选项
	  	step:0,//当前小选项
	  	nowState:'',//当前步骤的状态
	  	agreeToPayState:false,//当前步骤审核状态
	  	agreeToPayBtn:false,
	  	projectList:'',
	  	scheduleCurrent:{},
	  	schedule:[
	  		[{
	  			title:this.$t("message.myCenter.step1.1.title"),
	  			modId:'1',
	  			tagId:'1',
	  			desc:this.$t("message.myCenter.step1.1.desc"),
	  			desc2:this.$t("message.myCenter.step1.1.desc2"),
	  			desc3:this.$t("message.myCenter.step1.1.desc3"),

	  		},{
	  			title:this.$t("message.myCenter.step1.2.title"),
	  			modId:'1',
	  			tagId:'2',
	  			desc:this.$t("message.myCenter.step1.2.desc"),
	  			desc2:this.$t("message.myCenter.step1.2.desc2"),
	  			desc3:this.$t("message.myCenter.step1.2.desc3"),
	  		},{
	  			title:this.$t("message.myCenter.step1.3.title"),
	  			modId:'1',
	  			tagId:'3',
	  			desc:this.$t("message.myCenter.step1.3.desc"),
	  			desc2:this.$t("message.myCenter.step1.3.desc2"),
	  			desc3:this.$t("message.myCenter.step1.3.desc3"),
	  		},{
	  			title:this.$t("message.myCenter.step1.4.title"),
	  			modId:'1',
	  			tagId:'4',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step1.4.desc"),
	  			desc2:this.$t("message.myCenter.step1.4.desc2"),
	  			desc3:this.$t("message.myCenter.step1.4.desc3")
	  		}],
	  		[{
	  			title:this.$t("message.myCenter.step2.1.title"),
	  			modId:'2',
	  			tagId:'5',
	  			desc:this.$t("message.myCenter.step2.1.desc"),
	  			desc2:this.$t("message.myCenter.step2.1.desc2"),
	  			desc3:this.$t("message.myCenter.step2.1.desc3")
	  		},{
	  			title:this.$t("message.myCenter.step2.2.title"),
	  			modId:'2',
	  			tagId:'6',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step2.2.desc"),
	  			desc2:this.$t("message.myCenter.step2.2.desc2"),
	  			desc3:this.$t("message.myCenter.step2.2.desc3")
	  		}],
	  		[{
	  			title:this.$t("message.myCenter.step3.1.title"),
	  			modId:'3',
	  			tagId:'7',
	  			desc:this.$t("message.myCenter.step3.1.desc"),
	  			desc2:this.$t("message.myCenter.step3.1.desc2"),
	  			desc3:this.$t("message.myCenter.step3.1.desc3"),
	  		},{
	  			title:this.$t("message.myCenter.step3.2.title"),
	  			modId:'3',
	  			tagId:'8',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step3.2.desc"),
	  			desc2:this.$t("message.myCenter.step3.2.desc2"),
	  			desc3:this.$t("message.myCenter.step3.2.desc3"),
	  		}],
	  		[{
	  			title:this.$t("message.myCenter.step4.1.title"),
	  			modId:'4',
	  			tagId:'9',
	  			desc:this.$t("message.myCenter.step4.1.desc"),
	  			desc2:this.$t("message.myCenter.step4.1.desc2"),
	  			desc3:this.$t("message.myCenter.step4.1.desc3")
	  		},{
	  			title:this.$t("message.myCenter.step4.2.title"),
	  			modId:'4',
	  			tagId:'10',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step4.2.desc"),
	  			desc2:this.$t("message.myCenter.step4.2.desc2"),
	  			desc3:this.$t("message.myCenter.step4.2.desc3")
	  		}],
	  	],
		ejectShow:false,
		ejectType:{
			type:'evaluate',
			data:{
			}
		},
	  }
	},
	components: {
		Eject
	},
	created(){
		this.getProjectList()
	},
	methods:{
		getProjectList:function(projectId){
			this.$fetch('/home/order/listData')
			.then((res)=>{
				this.projectList = res.data
				if(res.data.length > 0){
					if(projectId){
						this.getProject(projectId)
					}else{
						this.getProject(res.data[0].id)
					}
				}
				
			})
		},
		stageSelect:function(select){
			this.stage = select
		},
		stepSelect:function(select){
			/*this.step = select*/
		},
		getProject:function(id){
			this.$fetch('/home/order/detail/listData',{orderId:id})
			.then((res)=>{
				this.scheduleDesc = res.data
				this.scheduleDesc.fewStepStatus == 'verify'?this.agreeToPayState = true:this.agreeToPayState = false
				this.step = this.agreeToPayState?this.scheduleDesc.fewStep:this.scheduleDesc.fewStep;
				this.agreeToPayBtn = false
				if(this.step == '3' || this.step == '5' || this.step == '7' || this.step == '9')this.agreeToPayBtn = true
				if(this.step <=4){
					this.nowStage = 0
					this.stage = 0
				}else if(this.step > 4 && this.step <= 6){
					this.nowStage = 1
					this.stage = 1
				}else if(this.step > 7 && this.step <= 8){
					this.nowStage = 2
					this.stage = 2
				}else if(this.step > 8 && this.step <= 11){
					this.nowStage = 3
					this.stage = 3
				}
				
			})

		},
		agreeToPay:function(url,img){
			var data = {
				'id':this.scheduleDesc.id,
				'imgs':img,
			}
			if(this.step == 9){
				url = '/home/order/lastPaidFinish'
			}
			this.$post(url,data)
			.then((res)=>{
				this.projectList = res.data
				this.getProjectList(this.scheduleDesc.id)
				this.getProject(this.scheduleDesc.id)
			})
		},
		fileImage:function(e){//上传图片
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2000KB的图片')
            }else{         
				var file = e.target.files[0];      
				var param = new window.FormData(); //创建form对象
				param.append('file',file);//通过append向form对象添加数据
				param.append('clazz','order')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					if(this.step == 3){
						this.agreeToPay('/home/order/agreePaid',res.data.file)
					}else if(this.step == 5){
						this.agreeToPay('/home/order/earlyPaid',res.data.file)
					}else if(this.step == 7){
						this.agreeToPay('/home/order/metaphasePaid',res.data.file)
						
					}else if(this.step == 9){
						this.agreeToPay('/home/order/lastPaidFinish',res.data.file)
						
					}
				})

            };
        },
		showEject:function(stage){
			this.ejectShow = true

			this.ejectType.data = {
				orderId:this.scheduleDesc.orderId,
				tagValue:'step'+(stage+1),
			}
			this.$swallow.stop()
		},
		closeEject:function(){
			this.ejectShow = false
			this.$swallow.move()
		},
    }
}
</script>
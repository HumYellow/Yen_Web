<style type="text/css">
.evaluate{width:600px;box-sizing: border-box;height:400px; position:absolute; left:50%; margin-left:-300px; margin-top:-200px;top:50%; font-size:16px;}
.evaluateBox{background:#fff;position:relative;padding:20px;}
.evaluate h3{text-align:center;font-size:18px;}
.evaluateText textarea{resize:none;border:1px solid #CCCCCC;background:#fafafa;padding:10px;width:100%; margin:10px 0;box-sizing: border-box;}
.evaluate .subBtn{background:#3FBB87;color:#fff;width:100%;display:block;padding:10px; box-sizing: border-box;margin-top:20px;border-radius:5px;text-align:center;}
.evaluate .closeBtn{position:absolute;right:10px;top:10px;}
.evaluate .starList{text-align:center;margin:20px 0;}
.evaluate .starList .starBox{display:inline-block;padding:0 5px;cursor:pointer}
.evaluateBox .uploadPicBox{height:50px;position:relative;width:38%;}
.evaluateBox .uploadPicBox .uploadPic{float:left;height:50px;width:50px;overflow:hidden;}
.evaluateBox .uploadPicBox .uploadText{float:left;height:50px;line-height:50px;margin-left:20px;color:#666666;font-size:14px;}
.evaluateBox .uploadPicBox .uploadIndex{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}
</style>
<template>
	<div class="evaluate clear">
		<div class="evaluateBox">
			<div class="starList clear">
				<div class="starBox" v-for="(star ,index) in star" @click="starClick(index)" @mouseenter="starEnter(index)" @mouseleave="starLeave">
					<img v-if="star.select" src="/static/image/myCenter/scoreStarSelect.png" />
					<img v-else src="/static/image/myCenter/scoreStar.png" />
				</div>
			</div>
			<div class="evaluateText">
				<textarea maxlength="50" v-model="evaluateDate.content" rows="10" :placeholder="$t('message.placeOrder.pleaseEvaluation')"></textarea>
			</div>
			<div class="uploadPicBox clear">
				<div class="uploadPic"><img height="100%" :src="nowImg" /></div>
				<div class="uploadText">{{$t('message.placeOrder.uploadPic')}}</div>
				<input class="uploadIndex" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="Agree to pay" id=""  />
			</div>
			<a class="closeBtn" @click="closeEject">
				<img src="/static/image/closeIcon.png"  />
			</a>
		</div>
		<a class="subBtn" @click="subDate">{{$t('message.login.submit')}}</a>
    </div>
</template>
<script>
export default {
	name: 'evaluate',
	props:{
		ejectType:{}
	},
	data() {
	  return {
	  	starClickOver:false,
	  	evaluateDate:{
	  		orderId:'',
	  		content:'',
	  		star:'',
	  		img:'',
	  	},
	  	nowImg:'/static/image/myCenter/scorePic.png',
	  	isLogin:this.$swallow.isLogin(),
	  	star:[{
	  		select:false,
	  	},{
	  		select:false,
	  	},{
	  		select:false,
	  	},{
	  		select:false,
	  	},{
	  		select:false,
	  	}],
	  }
	},
	components: {
	},
	methods:{
  		subDate:function(){
  			if(!this.evaluateDate.star){
  				this.$layer.msg('Please comment on the score',{
					title:'message',
					btn:'OK'
				})
				return
  			}
  			this.evaluateDate.orderId = this.ejectType.data.orderId
  			this.evaluateDate.tagValue = this.ejectType.data.tagValue
  			this.$post('/home/order/comment/addData',this.evaluateDate)
			.then((res)=>{
				if(res.errcode=='0000'){
					this.$router.go(0)
				}else{
	  				this.$layer.alert(res.msg,{
						title:'message',
						btn:'OK'
					})
				}
			})
  		},
		closeEject:function(){
			this.$emit('closeEject')
		},
		starClick:function(index){
			for(var i=0;i<this.star.length;i++){
				this.star[i].select = false
				if(i<=index)this.star[i].select = true
			}
			this.evaluateDate.star = index+1
			this.starClickOver = true
		},
		starEnter:function(index){
			if(!this.starClickOver){
				for(var i=0;i<this.star.length;i++){
					this.star[i].select = false
					if(i<=index)this.star[i].select = true
				}
			}
		},
		starLeave:function(){
			if(!this.starClickOver){
				for(var i=0;i<this.star.length;i++){
					this.star[i].select = false
				}
			}
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
				param.append('clazz','comment')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					this.nowImg = res.data.file
  					this.evaluateDate.img = this.nowImg
				})
			};
        },
	},
	mounted() {
		
	}
}
</script>
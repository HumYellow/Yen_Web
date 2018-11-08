<style type="text/css">
#designerDetails{}
.designerDetailsHead{height:180px;background: center url('/static/image/design/designerDetailsHead.png') no-repeat;background-size:100% 100%;position:relative;margin-bottom:100px;}
.designerDetailsDesc{width:200px;margin:0 auto;text-align:center;position:relative;top:130px;}
.designerDetailsDesc .designerDetailsPic{border:3px solid #fff;border-radius:50%;overflow:hidden;width:90px;height:90px;margin:0 auto;}
.designerDetailsDesc .designerDetailsName{margin-top:10px;}
.designerPicList .designPicListMod{float:left;width:24%;box-sizing: border-box;margin:10px .5%;box-shadow: 2px 2px 10px #e9e9e9}
.designerPicList .designPicListMod img{height:200px;}
.designerPicList .designPicListMod .designName{padding:15px;font-size:12px;}
</style>
<template>
	<div id="designerDetails" class="bodyCenter">
		<div class="designerDetailsHead">
			<div class="designerDetailsDesc">
				<div class="designerDetailsPic"><img height="100%" width="100%" :src="designerDesc.headImg" /></div>
				<div class="designerDetailsName">{{designerDesc.title}}</div>
			</div>
		</div>
		<div class="designerPicList clear">
			<router-link :to="'/designDetails/'+design.designAtlasId" class="designPicListMod" v-for="design in designList">
				<img width="100%" :src="design.img" />
				<div class="designName clear">
					<span class="left">{{design.name}}</span>
					<span class="right">{{design.designCount}} {{$t("message.design.pictures")}}</span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">

export default {
	name:'',
	components:{
		
	},
	data(){
		return {
			thisId:this.$route.params.id,
			designerDesc:{},
			designList:{},
      		group: 1, // 当前页数
      		groupNamber:10,//请求数量
      		getDataing:false,//是否正在亲求
			ajaxNew:true
		}
	},
	methods:{
		getDesignerDesc:function(){
			this.$fetch('/design/atlas/member/designerInfo', {memberId:this.thisId})
			.then((res)=>{
				this.designerDesc = res.data
			})
		},
		getDesignList:function(){
			if(this.getDataing)return
			this.getDataing = true
			var data = {
				'pageNo':this.group,
				'number':this.groupNamber,
				'memberId':this.thisId
			};
			this.$fetch('/design/atlas/member/listData', data)
			.then((res)=>{console.info(this.ajaxNew)
				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				if(this.ajaxNew){
					this.designList = res.data
				}else{
					this.designList = this.designList.concat(res.data)
				}
				this.group++
				console.info(this.designList)
				if(this.getDataing)this.getDataing = false
			})
		},
		isBottom(){
			var scrollTop = document.documentElement.scrollTop
			if(document.body.scrollHeight - scrollTop <= document.body.clientHeight+10){
				if(!this.lastPage && !this.getDataing){
					this.ajaxNew = false
					this.getDesignList()
				}
			}
		},
	},
	created() {
		this.getDesignerDesc()
		this.getDesignList();
	},
	mounted(){
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
		
	}
}
</script>
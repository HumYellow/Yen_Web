<style type="text/css">
.strategyCenter{width:100%; margin-right:2%;float:left;background:#fff; box-sizing: border-box;padding:40px 50px;}
.strategyCenter .strategyCenterTitle{border-bottom:1px solid #e8e8e8;}
.strategyCenter .strategyCenterTitle h3{font-size:18px; font-weight:600; color:#333;}
.strategyCenter .strategyCenterSubtitle{padding:15px 0;font-size:14px; color:#999;}
.strategyCenter .strategyCenterText{padding-top:30px;font-size:14px;}
.strategyCenter .strategyCenterText img{margin:0 auto 20px;}
.strategyCenter .strategyCenterText .summary{padding:20px;background:#f8f8f8;color:#666;line-height:22px;}
.strategyCenter .strategyCenterText p{margin-top:20px;color:#666; line-height:24px;}
</style>
<template>
	<div class="strategyCenter clear">
		<div class="strategyCenterTitle">
			<h3>{{desc.title}}</h3>
			<div class="strategyCenterSubtitle">{{desc.createTime}}</div>
		</div>
		<div class="strategyCenterText">
			<img width="500" :src="this.desc.img" />
			<div class="summary">
				{{desc.summary}}
				
			</div>
			<p v-html="desc.content"></p>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/article/detailData', {id:this.$route.params.id})
		.then((res)=>{console.info(res.data)
			this.desc = res.data
		})
	},
}
</script>
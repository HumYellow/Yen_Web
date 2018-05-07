<template>
	<div class="ourServies clear" :style="{height:theHeight}">
		<div class="left">
			1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>
		</div>
		<div class="right">
			1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>2<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>3<br/>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'ourServices',
	components:{

	},
	data(){
		return {
			theHeight:'auto'
		}
	},
	methods:{
		getScreenHeight:function(){
			let screenH = document.documentElement.clientHeight
			console.info(this.theHeight)
			this.theHeight = (screenH - 150) + 'px'
			/*document.documentElement.body.height = screenH*/
		}
	},
	mounted:function(){
		document.title = 'Our Services';
		this.getScreenHeight();

	}
}
</script>
<style type="text/css">
.ourServies{height:100%;}
.ourServies .left{height:100%;width:50%;background:yellow;overflow:auto;}
.ourServies .right{height:100%;width:50%;background: #9a9a9a;overflow:auto;}
</style>
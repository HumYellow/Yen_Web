<style type="text/css">

</style>
<template>
	<div class="textBody">
		<p v-html="aboutUsData"></p>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'',
	components:{
	},
	data(){
		return {
			aboutUsData:'',
		}
	},
	methods:{
		getData:function(){
			this.$fetch('/article/aboutUsData')
			.then((res)=>{
				this.aboutUsData = res.data
			})
		}
	},
	mounted(){
	},
	created(){
		this.getData()
	}
}
</script>
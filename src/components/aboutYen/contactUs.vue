<style type="text/css">
</style>
<template>
	<div>
		<div class="textBody">
			<p v-html="contactUs"></p>
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
			contactUs:'',
		}
	},
	methods:{
		getData:function(){
			this.$fetch('/article/connectUsData')
			.then((res)=>{
				this.contactUs = res.data
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
<style type="text/css">
.complaint{width:600px;box-sizing: border-box;padding:20px;background:#fff; height:400px; position:absolute; left:50%; margin-left:-300px; margin-top:-200px;top:50%; font-size:16px;}
.complaint h3{text-align:center;font-size:18px;}
.complaint input ,.complaint textarea{width:100%; margin:10px 0;}
.complaint a{background:#0cb46a;color:#fff;}
</style>
<template>
	<div class="complaint clear">
		<h3>Complaint</h3>
		<div v-if="!isLogin"><input v-model="complaintDate.phone" placeholder="phone" /></div>
		<div><textarea v-model="complaintDate.content" rows="8" placeholder="content"></textarea></div>
		<a @click="subDate">submit</a>
    </div>
</template>
<script>
export default {
	name: 'complaint',
	data() {
	  return {
	  	complaintDate:{
	  		phone:'',
	  		content:''
	  	},
	  	isLogin:this.$swallow.isLogin()
	  }
	},
	components: {
	},
	methods:{
  		subDate:function(){
  			if(!this.isLogin && !this.complaintDate.phone){
  				alert('手机号码不能为空')
  				return
  			}
  			this.$post('/complaint/saveData',this.complaintDate)
			.then((res)=>{
				alert('提交成功')
				this.$emit('closeEject')
			})
  		}
	},
	mounted() {
		
	}
}
</script>
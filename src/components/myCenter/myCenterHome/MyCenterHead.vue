<style type="text/css">
.myCenterHead{padding:20px;border:1px solid #eee;}
.myCenterHead .userPic{width:100px;height:100px;float:left;overflow:hidden;border-radius:50%;}
.myCenterHead .userText{width:75%;float:left;margin-left:5%;padding:20px 0;}
.myCenterHead .userText h3{font-size:16px;height:30px;}
.myCenterHead .userText p{font-size:13px; line-height:24px;}
</style>
<template>
	<div class="myCenterHead clear">
		<div class="userDesc">
			<div class="userPic">
				<img width="100%" height="100%" :src="userList.headImg" />
			</div>
			<div class="userText">
				<h3 class="userName">{{userList.phone}}</h3>
				<p class="userid">ID：{{userList.id}}</p>
				<!-- <p class="massage">消息：{{massage}}</p> -->
			</div>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	userList:{},
	  	userName:'',
	  	userid:'',
	  	massage:'3',
	  	headImg:''
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('login/info')
		.then((res)=>{
			this.userList = res.data
			/*this.userName = res.data.username
			this.userid = res.data.id*/
		})
	}
}
</script>
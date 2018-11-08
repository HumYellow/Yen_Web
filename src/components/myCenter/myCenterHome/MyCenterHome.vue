<style type="text/css">
.myCenterBody{padding:20px;border:1px solid #eee;}
.myCenterBody .userPic{width:20%;float:left;overflow:hidden;border-radius:50%;}
.myCenterBody .userText{width:75%;float:left;margin-left:5%;padding:20px 0;}
.myCenterBody .userText h3{font-size:16px;height:30px;}
.myCenterBody .userText p{font-size:13px; line-height:24px;}
</style>
<template>
	<div class="myCenterHome clear">
		<MyCenterHead></MyCenterHead>
		<MyCenterSchedule></MyCenterSchedule>
    </div>
</template>
<script>
import MyCenterHead from '@/components/myCenter/myCenterHome/MyCenterHead'
import MyCenterSchedule from '@/components/myCenter/myCenterHome/MyCenterSchedule'
export default {
	name: '',
	data() {
	  return {
	  }
	},
	components: {
		MyCenterHead,
		MyCenterSchedule
	},
	mounted() {
	  
	}
}
</script>
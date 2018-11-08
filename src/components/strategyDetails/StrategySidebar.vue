<style type="text/css">
.strategySidebar{width:25%;float:left; background:#fff; box-sizing: border-box;padding:30px;}
.strategySidebar .strategySidebarTitle{font-size:18px;line-height:25px;padding-bottom:15px;border-bottom:1px solid #e4e4e4;position:relative;color:#333;}
.strategySidebar .strategySidebarTitle a{color:#999;font-size:12px;position:absolute;right:0;bottom:12px;font-weight:100;}
.strategySidebarBody{padding-top:15px;}
.strategySidebarBody li a{line-height:24px;color:#999;font-size:14px;}
</style>
<template>
	<div class="strategySidebar">
		<h3 class="strategySidebarTitle">Popular strategy<router-link target="_blank" to="/strategy">more</router-link></h3>
		<div class="strategySidebarBody">
			<ul>
				<li><router-link target="_blank" to="/strategy">我怎么才能balabala</router-link></li>
				<li><router-link target="_blank" to="/strategy">我怎么才能balabala</router-link></li>
				<li><router-link target="_blank" to="/strategy">我怎么才能balabala</router-link></li>
			</ul>
		</div>
    </div>
</template>
<script>

export default {
	name: 'strategySidebar',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>
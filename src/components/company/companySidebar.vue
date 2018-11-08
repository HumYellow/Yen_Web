
<style type="text/css">
.companySidebar{background:#fff;width:30%;float:left;padding:10px;box-sizing: border-box;}
.companySidebarMod{border:1px solid #f4f4f4;border-top:none;padding:10px 15px;}
.companySidebarMod:nth-child(1){border-top:1px solid #f4f4f4;}
.companySidebarMod h3{line-height:30px;}
.companySidebarMod li{font-size:13px; line-height:25px;}
</style>
<template>
	<div class="companySidebar">
		<div class="companySidebarMod">
			<h3>深圳装修保价</h3>
			<ul>
				<li v-for="sidebar in companySidebar">{{sidebar.name}}</li>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
	name: 'companySidebar',
	data() {
	  return {
	  	companySidebar:[{
	  		name:'这是一款帅气的设计',
	  	},{
	  		name:'这是一款帅气的设计',
	  	},{
	  		name:'这是一款帅气的设计',
	  	},{
	  		name:'这是一款帅气的设计',
	  	}]
	  }
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>
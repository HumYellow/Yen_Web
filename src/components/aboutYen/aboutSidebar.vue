<style type="text/css">
.aboutSidebar{width:100%;background:#fff;box-shadow: 2px 2px 10px #e9e9e9}
.aboutSidebarPic{margin:0 auto;width:80px;padding:40px 0;text-align:center;}
.aboutSidebarPic img{border-radius:50%;}
.aboutSidebarMenu{border-top:1px dashed #D8D8D8;}
.aboutSidebarMenu a{padding:20px;display:block;color:#666666;}
.aboutSidebarMenu a.select{color:#fff;background:#3FBB87;}
</style>
<template>
	<div class="aboutSidebar">
		<div class="aboutSidebarPic">
			<img width="80" height="80" src="/static/image/logo.png" />
			<p class="mt10">{{$t("message.aboutUs.aboutYEN")}}</p>
		</div>
		<div class="aboutSidebarMenu">
			<router-link :to="link.src" replace :class="thisName == link.name?'select':''" v-for="(link,index) in linkList" :key="index">{{link.title}}</router-link>
			
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
			thisName:this.$route.name,
			linkList:[{
					src:'/aboutYen/termsService',
					name:'termsService',
					title:this.$t("message.myFooter.termsOfService")
				},{
					src:'/aboutYen/aboutUs',
					name:'aboutUs',
					title:this.$t("message.myFooter.aboutUs")
				},{
					src:'/aboutYen/contactUs',
					name:'contactUs',
					title:this.$t("message.myFooter.connectUs")
				}
			]
			
		}
	},
	methods:{
		linkListFn:function(){
			this.thisName = this.$route.name
		}
	},
	mounted(){
	},
	created() {
	},
	watch:{
		'$route':'linkListFn'
	}
}
</script>
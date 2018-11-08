<style type="text/css">
.myCenterSidebar{float:left; width:20%;box-sizing: border-box;padding:10px 0;background:#fff;box-shadow: 2px 1px 10px #B1B1B1}
.myCenterSidebar .goBackCenter{color:#0cb46a;display:block;}
.myCenterSidebar .sidebarMod{text-align:left;box-sizing: border-box;padding:20px 0;border-top:1px dashed #D8D8D8;}
.myCenterSidebar .sidebarMod:nth-child(1){border:none;}
.myCenterSidebar .sidebarMod .sidebarModTitle{color:#666;font-size:14px;background-position:20px 2px;background-size:15px auto;background-repeat:no-repeat;padding:5px 0 5px 50px;margin-bottom:5px;}
.myCenterSidebar .homeMod .sidebarModTitle{background-image:url('/static/image/myCenter/homeIcon.png');}
.myCenterSidebar .designMod .sidebarModTitle{background-image:url('/static/image/myCenter/designIcon.png');}
.myCenterSidebar .collectionMod .sidebarModTitle{background-image:url('/static/image/myCenter/myCollect.png');}
.myCenterSidebar .myInformationMod .sidebarModTitle{background-image:url('/static/image/myCenter/myInformation.png');}
.myCenterSidebar .sidebarMod .linkList{}
.myCenterSidebar .sidebarMod .linkList a{display:block; padding:10px 0 10px 48px;font-size:12px;color:#B1B1B1;border-left:3px solid #fff;}
.myCenterSidebar .sidebarMod .linkList a.select{border-left:3px solid #3FBB87;color:#3FBB87;}
</style>
<template>
	<div class="myCenterSidebar">
		<div class="sidebarMod homeMod">
			<router-link to="/myCenter" class="goBackCenter sidebarModTitle" id="goBackCenter">{{$t("message.myCenter.myCenterSidebar.personalHomePage")}}</router-link>
		</div>
		<div class="sidebarMod designMod">
			<div class="sidebarModTitle">{{$t("message.myCenter.myCenterSidebar.myDesign")}}</div>
			<ul class="linkList">
				<li><router-link :class="thisLinkName == 'myDesignList'?'select':''" to="/myCenter/myDesignList">{{$t("message.myCenter.myCenterSidebar.myDesign")}}</router-link></li>
				<li><router-link :class="thisLinkName == 'myDesignRevise'?'select':''" to="/myCenter/myDesignRevise/new">{{$t("message.myCenter.myCenterSidebar.uploadDesignAlbum")}}</router-link></li>
			</ul>
		</div>
		<div class="sidebarMod collectionMod">
			<div class="sidebarModTitle">{{$t("message.myCenter.myCenterSidebar.myCollection")}}</div>
			<ul class="linkList">
				<li><router-link :class="thisLinkName == 'collectDesign'?'select':''" to="/myCenter/collectDesign">{{$t("message.myCenter.myCenterSidebar.designPicture")}}</router-link></li>
				<li><router-link :class="thisLinkName == 'collectCompany'?'select':''" to="/myCenter/collectCompany">{{$t("message.myCenter.myCenterSidebar.decorationCompany")}}</router-link></li>
			</ul>
		</div>
		<div class="sidebarMod myInformationMod">
			<div class="sidebarModTitle">{{$t("message.myCenter.myCenterSidebar.myInformatio")}}</div>
			<ul class="linkList">
				<li><router-link :class="thisLinkName == 'personalData'?'select':''" to="/myCenter/personalData">{{$t("message.myCenter.myCenterSidebar.personalData")}}</router-link></li>
				<!-- <li><router-link :class="thisLinkName == 'collectCompany'?'select':''" to="/myCenter/collectCompany">Decoration company</router-link></li> -->
			</ul>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	thisLinkName:this.$route.name
	  }
	},
	components: {
	},
	mounted() {
	 
	},
	watch:{
		$route:function(){
			this.thisLinkName = this.$route.name
		}
	}
}
</script>

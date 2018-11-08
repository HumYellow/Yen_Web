<style type="text/css">
.DesignDesc{float:left;width:20%;box-sizing:border-box; padding:10px;background:#fff;}
.DesignDesc .designerHead{padding:30px 0;border-bottom:1px solid #E1E1E1;display:block;}
.DesignDesc .designerHead img{width:70px;height:70px;border-radius:50%;margin:0 auto;}
.DesignDesc .designerHead p{text-align:center;color:#333;margin-top:20px;}

.DesignDesc .descMod{margin-bottom:10px;}
.DesignDesc .descMod h3{font-size:14px;font-weight:500;color:#000;padding:20px 5px 0;}
.DesignDesc .descMod .text{color:#333333;padding:5px;}
.DesignDesc .descMod .text p{font-size:14px;line-height:24px;}
.DesignDesc .descMod .text p span{color:#999;}
.DesignDesc .collectionBtn{text-align:center;}
.DesignDesc .collectionBtn a{padding:0 20px;height:30px;line-height:30px;text-align:center;color:#15A166;border:1px solid #15A166;border-radius:5px;display:inline-block;margin:30px auto 50px;}
</style>
<template>
	<div class="DesignDesc">
		<router-link class="designerHead" :to="upDesc.ownerType == 'Member'?'/designerDetails/'+upDesc.ownerId:'/companyDetails/'+upDesc.ownerId">
			<img :src="upDesc.ownerImg" />
			<p>{{upDesc.ownerTitle}}</p>
		</router-link>
		<div class="descMod">
    		<h3>{{$t("message.design.atlasInformation")}}</h3>
    		<div class="text">
    			<p>{{$t("message.placeOrder.name")}} : <span>{{upDesc.name}}</span></p>
    			<p v-if="upDesc.description">{{$t("message.design.description")}} : <span>{{upDesc.description}}</span></p>
    		</div>
    	</div>
    	<div class="collectionBtn">
	    	<a v-if="upDesc.collect" @click="collectionFn">{{$t("message.design.cancelCollection")}}</a>
	    	<a v-else @click="collectionFn">{{$t("message.design.collection")}}</a>
	    </div>
    </div>
</template>
<script>
export default {
	name: '',
	props:{
	  	upDesc:{
		  	upUser:'',
		  	upUser:'',
		  	description:''
		},
	},
	data() {
	  return {
		getDataing:false,
	  	slides: []
	  }
	},
	components: {
	},
	methods:{
		collectionFn:function(){
			this.$emit('collection')
		}
	},
	mounted() {
	},
	created(){
	},
}
</script>
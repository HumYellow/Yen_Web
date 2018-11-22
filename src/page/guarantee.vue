<style type="text/css">
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="bodyCenter clear">
			<div class="picBox" v-for="pic in picList"><img width="100%" :src="pic.img" /></div>
	    </div>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
export default {
	name: '',
	data() {
	  return {
	  	thisTitle:this.$t('message.menu.Guarantee'),
	  	picList:[]
	  }
	},
	components: {
		MyHeader,
	},
	mounted(){
		document.title = this.thisTitle
		this.getPic()
	},
	methods:{
		getPic:function(){
			this.$fetch('/recommend/protectionListData')
		      .then((res) => {
		        this.picList = res.data
		      })

		}
	}
}
</script>
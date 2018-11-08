<style type="text/css">
.designDetails{margin:30px auto;}
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="designDetails bodyCenter clear">
			<DesignDetailsList :swiperSlides="dataList.subDesignList"></DesignDetailsList>
			<DesignDetailsDesc :upDesc="dataList" @collection="collection"></DesignDetailsDesc>
			<ContactWhole></ContactWhole>
	    </div>
	</div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
import DesignDetailsList from '@/components/designDetails/DesignDetailsList'
import DesignDetailsDesc from '@/components/designDetails/DesignDetailsDesc'
import ContactWhole from '@/components/ContactWhole'
export default {
	name: '',
	data() {
	  return {
	  	getDataUrl:'/design/atlas/detailData',
	  	dataList:{},
	  	getDataing:false
	  }
	},
	components: {
		MyHeader,
		DesignDetailsList,
		DesignDetailsDesc,
		ContactWhole
	},
	methods:{
		getData:function(){
			this.$fetch(this.getDataUrl, {id:this.$route.params.id})
			.then((res)=>{
				this.dataList = res.data
			})

		},
		collection:function(){
			if(this.getDataing)return
			this.getDataing = true
			var url;
			if(this.dataList.collect){
				url = '/home/collect/deleteData'
			}else{
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'DesignAtlas',
				'relatedId':this.dataList.id
			}).then(res => {
				this.dataList.collect = !this.dataList.collect
				this.getDataing = false
			})
			
		},
	},
	created:function(){
		this.getData()

	},
	mounted:()=>{
		document.title = 'design'
	}
}
</script>
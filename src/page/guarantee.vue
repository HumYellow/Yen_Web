<style type="text/css">
</style>
<template>
	<div>
		<MyHeader></MyHeader>
		<div class="bodyCenter clear">
			<img width="100%" src="/static/image/guarantee/guarantee_1.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_2.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_3.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_4.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_5.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_6.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_7.jpg" />
			<img width="100%" src="/static/image/guarantee/guarantee_8.jpg" />
	    </div>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader'
export default {
	name: '',
	data() {
	  return {
	  }
	},
	components: {
		MyHeader,
	},
	mounted:()=>{
		document.title = 'guarantee'
	},
	methods:{

		info:function(){
			this.$fetch('login/info')
		      .then((response) => {
		        console.log(response)
		      })

		}
	}
}
</script>
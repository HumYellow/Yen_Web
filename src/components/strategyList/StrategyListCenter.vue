<style type="text/css">
.strategyListCenter{width:70%;float:left;background:#fff; box-sizing: border-box; padding:30px;}
.strategyListCenterMod{padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #e3e3e3;}
.strategyListCenter .articlePic{float:left;width:28%;margin-right:2%;}
.strategyListCenter .articleText{float:left;width:70%;}
.strategyListCenter .articleTitle{padding:20px 0;color:#404040;}
.strategyListCenter .articleDesc{color:#a3a3a3;font-size:12px;display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 6;
overflow: hidden;}
.strategyListCenter .noStrategy{wdith:100%;text-align:center;border:1px solid #9a9a9a;color:#9a9a9a;height:40px; line-height:40px;}
</style>
<template>
	<div class="strategyListCenter clear">
		<div v-for="center in strategyListCenter" class="strategyListCenterMod clear">
			<router-link :to="'/strategyDetails/'+center.id">
				<div class="articlePic"><img width="100%" :src="center.img" /></div>
				<div class="articleText">
					<h3 class="articleTitle">{{center.title}}</h3>
					<p class="articleDesc">{{center.summary}}</p>
				</div>
			</router-link>
		</div>
		<div class="noStrategy" v-if="strategyListCenter.length == 0">No data is available under this classification</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	strategyListCenter:[],
  		group: 1, // request param
  		maxGroup:1,
  		groupNamber:10,
  		getDataing:false,
	  }
	},
	components: {
	},
	mounted() {
		window.addEventListener('scroll', this.isBottom)
	  
	},
	methods:{
		getData() {
			if(this.getDataing) return
			this.getDataing = true
			var tag = this.$route.params.id == 0 ? '' : this.$route.params.id;
			this.$fetch('/article/listData',{
				'pageNo':this.group,
				'number':this.groupNamber,
				'tag':tag
			})
			.then(res => {
				this.strategyListCenter = this.strategyListCenter.concat(res.data)
				this.group++
				this.getDataing = false
			}).catch(function (error) {
				console.log(error);
				this.getDataing = false
			});
		},
		isBottom(){
			if(document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight+10){
				if(this.maxGroup >= this.group)this.getData()
				
			}
		},
		getNewData(){
			this.group = 1
			this.strategyListCenter = []
			this.getData()
		}
	},
	created(){
		/*this.$fetch('/article/total')
		.then(res => {console.info(res.data)
			this.maxGroup = parseInt(res.data/this.groupNamber) +1;
		}).catch(function (error) {
			console.log(error);
		})*/
		this.getData()
	},
	watch:{
		'$route':'getNewData'
	}
}
</script>
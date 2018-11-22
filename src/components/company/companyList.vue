<style>
#companyList{padding:10px;width:100%;box-sizing: border-box;min-height:66vh;}

.companyTypeListMenu{padding:30px;border-bottom:1px solid #EAEAEA}
.companyTypeListMenu a{float:left;font-size:12px;color:#999;padding-right:15px;margin-right:15px;}
.companyTypeListMenu a.indexRouter{background:url('/static/image/design/rightArrow.png') no-repeat;background-size:auto 70%;background-position:right 70%;}
.companyTypeHead{border:1px solid #EAEAEA;background:#fff;}
.companyTypeHead .companyTypeTable{border-bottom:1px solid #dbdbdb;}
.companyTypeHead .companyTypeTable .companyTypeTitle ,.companyTypeHead .companyTypeTable .companyTypeMenuList{padding:30px;float:left; font-size:14px;}
.companyTypeHead .companyTypeTable .companyTypeTitle{border-right:1px solid #dbdbdb;color:#666666;background:#F8F8F8;min-width:50px;text-align:center;width:100px;}
.companyTypeHead .companyTypeTable .companyTypeMenuList{color:#999999;}
.companyTypeHead .companyTypeTable .companyTypeMenuList a{float:left;margin-right:30px;color:#999999;font-size:12px;}
.companyTypeHead .companyTypeTable .companyTypeMenuList a.select ,.companyTypeHead .companyTypeTable .companyTypeMenuList a:hover{color:#3FBB87;}

#companyList .companyList{margin-top:40px;}
#companyList .companyListMod{margin-bottom:60px;}
#companyList .companyListMod .companyListPicBox{margin-top:30px;}
#companyList .companyListMod .companyListLink{display:block;}
#companyList .companyLogo{float:left;width:90px; height:90px;border:1px solid #f4f4f4;box-shadow: 2px 2px 10px #e9e9e9}
#companyList .companyDesc{margin-left:110px;position:relative;}
#companyList .companyDesc h3{margin:10px 0;font-size:20px; color:#333;}
#companyList .companyDesc .companyNum{font-size:13px;line-height:24px;display:block;text-align:left;}
#companyList .companyDesc .companyNum span{margin-right:20px;}
#companyList .companyDesc p{line-height:20px;font-size:12px;color:#666;padding-right:10px; display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;}
#companyList .companyDesc .collectBtn{position:absolute;right:10px;top:0;}
#companyList .designCase{margin:20px 0 10px;}
#companyList .designCase .num{color:#f88533;font-size:18px;}
#companyList .companyListPaging{padding-top:30px; border-top:1px solid #f4f4f4;text-align:center;}
#companyList .companyListPaging .companyListPagingMod ,.companyListPaging .ellipsis{height:25px;line-height:25px; padding:10px 20px;background:#fff;border-radius:5px;}
#companyList .companyListPaging .companyListPagingMod{display:inline-block;margin:0 2px;text-align:center;border:1px solid #eee; border-left:none;color:#999;font-size:14px;cursor:pointer}
#companyList .companyListPaging .companyListPagingMod:first-child ,.companyListPaging .companyListPagingMod.need{border-left:1px solid #eee;}
#companyList .companyListPaging .ellipsis{color:#999;display:inline-block;border-right:1px solid #eee;}
#companyList .companyListPaging .companyListPagingMod.select{background:#0cb46a;color:#fff;}
#companyList .companyListPicBoxMod{float:left;width:20%;height:140px;box-sizing: border-box;padding-right:10px;overflow:hidden;}
</style>
<template>
	<div id="companyList">
		<div v-if="!theType" class="companyTypeHead">
			<!-- <div class="companyTypeListMenu clear">
				<router-link class="indexRouter" to="/company">company home page</router-link>
				<a @click="$router.go(0)">All company</a>
			</div> -->
			<div v-for="companyFilter in companyFilterList" class="companyTypeTable clear">
				<div class="companyTypeTitle">{{companyFilter.name}}</div>
				<div class="companyTypeMenuList">
					<a v-for="(subTypeList ,index) in companyFilter.subTypeList" 
						:class="subTypeList.companyTypeId==companyFilter.select?'select':''"
						@click="tabCompanyFilter(companyFilter.companyRangeId,subTypeList.companyTypeId)">
						{{subTypeList.name}}
					</a>
				</div>
			</div>
		</div>
		<div v-if="companyList.length != 0" class="companyList">
			<div class="companyListMod clear" v-for="company in companyList">
				<router-link :to="'/companyDetails/'+company.companyId" class="companyListLink clear">
					<div class="companyLogo"><img width="100%" height="100%" :src="company.img" /></div>
					<div class="companyDesc">
						<h3>{{company.name}}</h3>
						<p v-if="theType">Tel&nbsp;:&nbsp;{{company.contact}}</p>
						<div class="designCase">{{$t("message.company.designCases")}}&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">{{company.designCount}}</span></div>
						<p>{{$t("message.company.address")}}&nbsp;:&nbsp;{{company.address}}</p>
						<!-- <p v-if="!theType">{{$t("message.company.companyProfile")}}&nbsp;:&nbsp;{{company.description}}</p> -->
						<div class="designCaseMod">
							<!-- <p class="num">{{desc.designCount}}</p> -->
						</div>
						<a class="collectBtn" @click="collection(company.companyId,company.collect)" :data-id="company.companyId">
							<img v-if="!company.collect" src="/static/image/design/collect.png" />
							<img v-else src="/static/image/design/collectFinish.png" />
						</a>
					</div>
					<div class="companyListPicBox clear">
						<div class="companyListPicBoxMod" v-for="pic in company.subDesignAtlasList">
							<img width="100%" :src="pic.img" />
						</div>
					</div>
				</router-link>
			</div>
			<div class="companyListPaging clear">
				<div v-if="companyListIndex != 1" class="companyListPagingMod" 
				@click="selectPage($event,1)">
					{{$t("message.company.firstPage")}}
				</div>

				<div v-if="companyListIndex != 1" class="companyListPagingMod" 
				@click="selectPage($event,companyListIndex-1)">{{$t("message.company.prevPage")}}</div>

				<div class="" style="display:inline-block;margin:0 -1px;" v-if="companyListNum >= 5">
					<div v-for="num in pagingList" @click="selectPage($event,num)" :class="[(typeof(num) == 'string'?'ellipsis':'companyListPagingMod'),(num == companyListIndex?'select':'')]">{{num}}</div>
				</div>
				<div style="display:inline-block;margin:0 -1px;" v-else>
					<div v-for="pagingMod in companyListNum" @click="selectPage($event,pagingMod)" :class="[(typeof(pagingMod) == 'string'?'ellipsis':'companyListPagingMod'),(pagingMod == companyListIndex?'select':'')]">{{pagingMod}}</div>
				</div>

				<div v-if="companyListIndex != companyListNum" @click="selectPage($event,companyListIndex+1)" class="companyListPagingMod">{{$t("message.company.nextPage")}}</div>
				<div v-if="companyListIndex != companyListNum" class="companyListPagingMod" @click="selectPage($event,companyListNum)">{{$t("message.company.lastPage")}}</div>
			</div>
	    </div>
	</div>
</template>
<script>
export default {
	name: '',
	props:{
		theType:{
			type:'',
			url:'',
			data:{

			}
		}
	},
	data() {
	  return {
	  	companyListIndex:1,//当前页数
	  	companyListNum:1,//总页数
	  	companyListModNum:10,
	  	pagingList:[],//维护页码数组
	  	companyList:[],
	  	subDesignAtlas:5,
	  	companyFilterList:'',
		companyTypeIds:''
	  }
	},
	components: {
	},
	mounted() {
	  this.pagingListBuild();
	},
	methods:{
		getCompanyFilterList:function(){//进入页面执行获取ID
			this.$fetch('/company/type/groupData')
			.then(res => {
				this.companyFilterList =  res.data
				for(var a in this.companyFilterList){
					this.companyFilterList[a].select = this.companyFilterList[a].companyRangeId+'_all'
				}
				if(this.$route.query.menuId && this.$route.query.styleId){
					this.tabCompanyFilter(this.$route.query.menuId,this.$route.query.styleId)
				}else{
					this.getData()
				}
			})
		},
		tabCompanyFilter:function(id,el){
			for(var i in this.companyFilterList){
				if(this.companyFilterList[i].companyRangeId == id){
					this.companyFilterList[i].select = el
				}
			}
			this.companyTypeIds = ''
			for(var a in this.companyFilterList){
				this.companyTypeIds += this.companyFilterList[a].select+','
			}
			this.ajaxNew = true
			this.group = 1
			this.getData()
		},
		pagingListBuild:function(){
			if(this.companyListNum >=5){
				if(this.companyListIndex <= 3){
					this.pagingList = [1,2,3,'...',this.companyListNum]
				}else if(this.companyListIndex > 3 && this.companyListIndex < this.companyListNum-2){
					this.pagingList = [1,'...',this.companyListIndex-1,this.companyListIndex,this.companyListIndex+1,'...',this.companyListNum]
				}else if(this.companyListIndex >= this.companyListNum -3){
					this.pagingList = [1,'...',this.companyListNum-2,this.companyListNum-1,this.companyListNum]
				}

			}
		},
		toPage:function(num){
			this.companyListIndex = num
			this.ajaxCompanyList()
		},
		selectPage:function(e,num){
			if(e.target.className == 'companyListPagingMod'){
				this.toPage(num)
			}
		},
		ajaxCompanyList:function(){
			var url = this.theType?this.theType.url:'/company/listData'
			let data;
			if(this.theType){
				data = this.theType.data;
				data['pageNo'] = this.companyListIndex
				data['number'] = this.companyListModNum
			}else{
				data = {
					'pageNo':this.companyListIndex,
					'number':this.companyListModNum,
					'subDesignAtlas':this.subDesignAtlas,
					'companyTypeIds':this.companyTypeIds
				} ;
			}
			this.$fetch(url,data)
			.then((res)=>{
				this.companyList = res.data
				for(var i in this.companyList){//重新赋属性
					if(this.theType && this.theType.type == 'collection')this.$set(this.companyList[i],'collect',1)
				}
				if(res.data.length == 0){
					this.$layer.msg(this.$t('message.tips.noMore'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					this.getDataing = false
					return
				}
			})
		},
		getData:function(){
			var url = this.theType?this.theType.getNumUrl:'/company/total'
			var data = {
				tagValue:this.theType?this.theType.tagValue:'',
				'companyTypeIds':this.companyTypeIds
			}
			this.$fetch(url,data)
			.then((res)=>{
				this.companyListNum = Math.ceil(res.data/this.companyListModNum)
				this.ajaxCompanyList()
			})
		},
		collection:function(thisId,thisCollect){
			event.preventDefault()
			var url;
			if(thisCollect == 1){
				url = '/home/collect/deleteData'
			}else if(thisCollect == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'Company',
				'relatedId':thisId
			}).then(res => {
				for(var a in this.companyList){
					if(this.companyList[a].companyId == thisId){
						this.$delete(this.companyList[a],'collect')
						this.$set(this.companyList[a],'collect',thisCollect==1?0:1)
					}
				}
			})
			
		}
	},
	created(){
		this.getCompanyFilterList()
	},
	watch:{
		'companyListIndex':'pagingListBuild'
	}
}
</script>
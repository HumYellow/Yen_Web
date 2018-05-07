<template>
	<div>
		<div class="container">   
			<div class="pageMod clear">
				<div class="page page1">   	
					<img :src="pdfList[pdfCurrent-1].src" />   
				</div>
				<transition :name="nextState+'2'" @after-enter="afterNext">
					<div v-if="isShowing" class="page page2">
						<img :src="pdfList[pdfCurrent].src" /> 
					</div>
				</transition>
				<transition :name="nextState+'3'">
					<div v-if="isShowing" class="page page3">
						<img v-if="isShowing" :src="pdfList[pdfCurrent].src" /> 
					</div>
				</transition>
			</div>
		</div>
		<div class="consoleMod">
			<div class="console" @click="prev()">prev</div>
			<div class="console" @click="next()">next</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import pdf from 'vue-pdf'
import $ from 'jquery'
export default {
	name:'media',
	components:{
		pdf,
	},
	data(){
		return {
			pdfSrc : this.staticPath+"test.pdf",
			pdfCurrent:1,
			isShowing:false,
			nextState:'stateNext',
			isFlash:false,
			pdfList:[
				{
					src:'https://www.html5tricks.com/demo/css3-page-flip/page1.jpg',
					state:1
				},{
					src:'https://www.html5tricks.com/demo/css3-page-flip/page2.jpg',
					state:2,
				},{
					src:'https://www.html5tricks.com/demo/css3-page-flip/page3.jpg',
					state:0
				},{
					src:'https://www.html5tricks.com/demo/css3-page-flip/page1.jpg',
					state:0
				},{
					src:'https://www.html5tricks.com/demo/css3-page-flip/page2.jpg',
					state:0
				},{
					src:'https://www.html5tricks.com/demo/css3-page-flip/page3.jpg',
					state:0
				}
			]
		}
	},
	methods:{
		prev:function(){
			if(this.pdfCurrent <= 1 || this.isFlash) return
			this.pdfCurrent--;
			this.nextState="statePrev"
			this.isFlash = true
			this.isShowing = true
		},
		next:function(){
			if(this.pdfCurrent >= this.pdfList.length || this.isFlash) return
			this.nextState="stateNext"
			this.isFlash = true
			this.isShowing = true
		},
		afterNext:function(){
			this.isFlash = false
			if(this.nextState == 'stateNext'){
				this.pdfCurrent++;
				this.isShowing = false
			}else{
				this.isShowing = false
			}
		}
	},
	mounted:()=>{
		document.title = 'Media'
	}
}
</script>
<style lang="scss" type="text/css">  
$pageWidth:286px;
$pageWidthHalf:143px;
.container{   
    position:relative;   
    height:388px;  
    width:$pageWidth;   
    margin:40px auto;   
    -webkit-transform-style: preserve-3d;   
    -moz-transform-style: preserve-3d;   
    -o-transform-style: preserve-3d;   
     transform-style:preserve-3d;   
}  
.pageMod{position:absolute; left:0;top:0;}
.page{
	position:absolute; }
.page1{
	left:0px;   
	width:$pageWidth;    
	overflow:hidden;   
}   
.page2{  width:0;
     overflow:hidden;  
}   
.page3{   width:0;  
	overflow:hidden;   
}
/* .state2-enter{
     width: 0px;left:286px;} */
.stateNext2-enter-active{
	width: 0px;left:$pageWidth;
	-webkit-animation:page2 1s ease 1 alternate;   
	-moz-animation:page2 1s ease 1 alternate;   
	-o-animation:page2 1s ease 1 alternate;   
	animation:page2 1s ease 1 alternate; 
}
.statePrev2-enter-active{
	width: $pageWidthHalf;left:0px;
	-webkit-animation:pagePrev2 1s ease 1 normal;   
	-moz-animation:pagePrev2 1s ease 1 normal;   
	-o-animation:pagePrev2 1s ease 1 normal;   
	animation:pagePrev2 1s ease 1 normal; 
}
/* .state2-enter-to{width: $pageWidthHalf;left:0px;} */
.stateNext3-enter-active{
	width: 0px;left:$pageWidth;
	-webkit-animation:page3 1s ease 1 alternate;   
	-moz-animation:page3 1s ease 1 alternate;   
	-o-animation:page3 1s ease 1 alternate;   
	animation:page3 1s ease 1 alternate;}
.statePrev3-enter-active{
	width: $pageWidthHalf;left:0px;
	-webkit-animation:pagePrev3 1s ease 1 normal;   
	-moz-animation:pagePrev3 1s ease 1 normal;   
	-o-animation:pagePrev3 1s ease 1 normal;   
	animation:pagePrev3 1s ease 1 normal;}
/* .state3-enter-to{width: $pageWidthHalf;left:$pageWidthHalf} */
.stateNext3-enter-active img{   
	margin-left:-$pageWidth;   
	-webkit-animation:pagei3 1s ease 1 alternate;   
	-moz-animation:pagei3 1s ease 1 alternate;   
	-o-animation:pagei3 1s ease 1 alternate;   
	animation:pagei3 1s ease 1 alternate;   
} 
.statePrev3-enter-active img{   
	margin-left:0;   
	-webkit-animation:pageiPrev3 1s ease 1 alternate;   
	-moz-animation:pageiPrev3 1s ease 1 alternate;   
	-o-animation:pageiPrev3 1s ease 1 alternate;   
	animation:pageiPrev3 1s ease 1 alternate;   
} 
/* .state3Img-enter-to{margin-left:-$pageWidthHalf} */
.consoleMod{text-align:center; width:100%;}
.console{display:inline-block; margin:0 30px;}  
@-webkit-keyframes page2 {   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:0px}   
}   
@-moz-keyframes page2 {   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:0px}   
}   
@-o-keyframes page2 {   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:0px}   
}   
@keyframes page2 {   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:0px}   
}   
@-webkit-keyframes pagePrev2 {     
	from {width: $pageWidthHalf;left:0px} 
	to {width: 0px;left:$pageWidth}   
}   
@-moz-keyframes pagePrev2 { 
	from {width: $pageWidthHalf;left:0px} 
	to {width: 0px;left:$pageWidth}   
}   
@-o-keyframes pagePrev2 {
	from {width: $pageWidthHalf;left:0px} 
	to {width: 0px;left:$pageWidth}   
}   
@keyframes pagePrev2 {
	from {width: $pageWidthHalf;left:0px} 
	to {width: 0px;left:$pageWidth}   
}  
@-webkit-keyframes page3 {   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:$pageWidthHalf}   
}   
@-moz-keyframes page3 {   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:$pageWidthHalf}   
}   
@-o-keyframes page3{   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:$pageWidthHalf}   
}   
@keyframes page3{   
	from {width: 0px;left:$pageWidth}   
	to {width: $pageWidthHalf;left:$pageWidthHalf}   
}  

@-webkit-keyframes pagePrev3 {    
	from {width: $pageWidthHalf;left:$pageWidthHalf} 
	to {width: 0px;left:$pageWidth}    
}   
@-moz-keyframes pagePrev3 {    
	from {width: $pageWidthHalf;left:$pageWidthHalf} 
	to {width: 0px;left:$pageWidth}    
}   
@-o-keyframes pagePrev3{    
	from {width: $pageWidthHalf;left:$pageWidthHalf} 
	to {width: 0px;left:$pageWidth}   
}   
@keyframes pagePrev3{    
	from {width: $pageWidthHalf;left:$pageWidthHalf} 
	to {width: 0px;left:$pageWidth}   
}    
@-webkit-keyframes pagei3{   
	from {margin-left:-$pageWidth}   
	to {margin-left:-$pageWidthHalf}   
}   
@-moz-keyframes pagei3 {   
	from {margin-left:-$pageWidth}   
	to {margin-left:-$pageWidthHalf}   
}   
@-o-keyframes pagei3{   
	from {margin-left:-$pageWidth}   
	to {margin-left:-$pageWidthHalf}   
}   
@keyframes pagei3{   
	from {margin-left:-$pageWidth}   
	to {margin-left:-$pageWidthHalf}   
}    
@-webkit-keyframes pageiPrev3{   
	from {margin-left:-$pageWidthHalf}  
	to {margin-left:-$pageWidth}    
}   
@-moz-keyframes pageiPrev3 {
	from {margin-left:-$pageWidthHalf}  
	to {margin-left:-$pageWidth}     
}   
@-o-keyframes pageiPrev3{ 
	from {margin-left:-$pageWidthHalf}  
	to {margin-left:-$pageWidth}     
}   
@keyframes pageiPrev3{
	from {margin-left:-$pageWidthHalf}  
	to {margin-left:-$pageWidth}    
} 
</style>
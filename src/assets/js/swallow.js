var swallow = {};
swallow.popup = {
	
}

swallow.setCookie = function(name,value,hour,path){
	hour?hour = hour:hour = 2;
	var exp = new Date(),cookieData;
	exp.setTime(exp.getTime() + hour*60*60*1000);
    path = path?";path=" + path : "/"
    cookieData = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + path
	document.cookie = cookieData;
}
swallow.getCookie = function (name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
swallow.isLogin = function(){
	if(swallow.getCookie('yen_u_key_'))return true;
	else return false
}
swallow.delCookie = function(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval= this.getCookie(name);
	if(cval!=null)document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    this.setCookie(name, "", -1)
}
swallow.mo=function(e){e.preventDefault();};
/***滑动限制***/
swallow.stop = function(){
	document.body.style.overflow='hidden';
	document.addEventListener("touchmove",swallow.mo,false);//禁止页面滑动
},
/***取消滑动限制***/
swallow.move = function(){
	document.body.style.overflow='';//出现滚动条
	document.removeEventListener("touchmove",swallow.mo,false);
}
swallow.isIE = function() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    }else{
        return false;//不是ie浏览器
    }
}
export default swallow
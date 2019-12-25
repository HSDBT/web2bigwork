var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
var contentLength=document.getElementById("contentspan").offsetWidth;
document.getElementById("demo").style.width=contentLength + "px";
document.getElementById("contentspan").style.width=contentLength + "px";
document.getElementById("contentspan").style.paddingLeft=contentLength + "px";
document.getElementById("contentspan").style.paddingRight=contentLength + "px";
function Marqpuee(){
	if(demo.scrollLeft>=2*contentLength){
		demo.scrollLeft=0;
	}
	else{
		demo.scrollLeft++;
	}
}
setInterval(Marqpuee,10);
//轮播下一张的函数
function next(){
	index++;
	navChange();
	animate(slider,{left:-800*index},function(){
		if(index === 6){
			slider.style.left = "-800px";
			index = 1;
		}
	});
}
function prev(){
	index--;
	navChange();
	animate(slider,{left:-800*index},function(){
		if(index === 0){
			slider.style.left = "-4000px";
			index = 5;
		}
	});
}
var timer = setInterval(next,3000);
//鼠标划入清定时器
box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
//鼠标划出开定时器
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
//小按钮点击事件
for(var i = 0;i < oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-800*index})
	}
}
//小按钮背景色切换
function navChange(){
	for(var i = 0;i < oNavlist.length;i++){
		oNavlist[i].className = 'p';
	}
	if(index === 6){
		oNavlist[0].className = 'active';
	}
	else if(index === 0){
		oNavlist[4].className = 'active';
	}
	else{
		oNavlist[index - 1].className = 'active';
	}
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var pic = document.getElementById("pic");
var imgList = pic.getElementsByTagName("img");
var flag = true;
for(var i = 0;i<imgList.length;i++){
    imgList[i].onmouseover = function(){
        if(flag==true){
            var index = this.getAttribute("title");
            if(index>2){
                var imgSrc = "./images/star2.png";
            }
            else{
                var imgSrc = "./images/star1.png";
            }
            for(var j=0;j<index;j++){
                imgList[j].src = imgSrc;
            }
        }
        else{
            return;
        }
    }
    imgList[i].onmouseout = function(){
        if(flag==true){
            var index = this.getAttribute("title");
            for(var x=0;x<index;x++){
                imgList[x].src = "./images/star0.png";
            }
        }
        else{
            return;
        }
    }
    imgList[i].onclick=function(){
        flag = !flag;
    }
}
var top41 = document.getElementById('_top41');
var top42 = document.getElementById('_top42');
var top43 = document.getElementById('_top43');
var top35 = document.getElementById('_top35');
var top36 = document.getElementById('_top36');
var top37 = document.getElementById('_top37');
top41.className='s0_top31';
top35.className='visible';
top36.className='hidden';
top37.className='hidden';
top41.onmouseout=function function1(){
	top41.className='s0_top31';
	top42.className='s_top31';
	top43.className='s_top31';
	top35.className='visible';
	top36.className='hidden';
	top37.className='hidden';
}
top41.onmouseover=function function2(){		
	top41.className='s0_top31';
	top42.className='s_top31';
	top43.className='s_top31';
	top35.className='visible';
	top36.className='hidden';
	top37.className='hidden';
}
top42.onmouseout=function function1(){
	top41.className='s_top31';
	top42.className='s0_top31';
	top43.className='s_top31';
	top35.className='hidden';
	top36.className='visible';
	top37.className='hidden';
}
top42.onmouseover=function function2(){	
	top41.className='s_top31';	
	top42.className='s0_top31';
	top43.className='s_top31';
	top35.className='hidden';
	top36.className='visible';
	top37.className='hidden';
}
top43.onmouseout=function function1(){
	top41.className='s_top31';
	top42.className='s_top31';
	top43.className='s0_top31';
	top35.className='hidden';
	top36.className='hidden';
	top37.className='visible';
}
top43.onmouseover=function function2(){			    
	top41.className='s_top31';
	top42.className='s_top31';
	top43.className='s0_top31';
	top35.className='hidden';
	top36.className='hidden';
	top37.className='visible';
}	
window.onscroll = function(){
    var distance = document.documentElement.scrollTop ; 
    if( distance >= 200 ) { 
        document.getElementById('to_top').style.display = "";
    } 
    else { 
        document.getElementById('to_top').style.display = "none";
    }
    var toTop = document.getElementById("to_top"); 
    toTop.onclick = function(){ 
        document.documentElement.scrollTop = document.body.scrollTop = 0; 
    }
}
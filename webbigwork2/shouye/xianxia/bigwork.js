var box = document.getElementById("box");
var oNavlist = document.getElementById("nav").children;
var slider = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
var top = document.getElementById('top');
var txt = document.getElementById('txt');
var cnt=540;
var pic = document.getElementById("pic");
var imgList = pic.getElementsByTagName("img");
var txt1 = document.getElementById("txt1");
var btn = document.getElementById("btn");
var comments = ["差","一般","中等","还行","好"];
var flag = true;
var distance = document.documentElement.scrollTop;
var toTop = document.getElementById("to_top"); 
var timer;
var isMoving = false;
setInterval(function(){
	txt.style.left=cnt+"px";
	cnt--;
	if(cnt==-430)
	{
		cnt=540;
	}
},20)
function next() {
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navChange();
	animate(slider,{left:-1200*index},function(){
		if(index > 5){
			slider.style.left = "-1200px";
			index = 1;
		}
		isMoving = false;
	});
}
function prev() {
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navChange();
	animate(slider,{left:-1200*index},function(){
		if(index === 0){
			slider.style.left = -1200*5+"px";
			index = 5;
		}
		isMoving = false;
	});
}
var timer = setInterval(next,2000);
box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(timer);
}
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,2000);
}
right.onclick = next;
left.onclick = prev;
for(var i = 0; i < oNavlist.length; i++) {
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function() {
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-1200*index});
	}
}
function navChange() {
	for(var i = 0; i < oNavlist.length; i++){
		oNavlist[i].className= "";	
	}
	if(index > 5){
		oNavlist[0].className= "active";
	}
	else if(index === 0){
		oNavlist[4].className = "active";	
	}
	else{
		oNavlist[index-1].className= "active";	
	}
}	
var container = document.getElementById("container");
function callback1() {

}
animate(container,{"width": 1520 ,"height": 80,"opacity": 100},callback1);
for(var i = 0; i < imgList.length; i++) {
    imgList[i].onmouseover = function() {
        if(flag == true) {
            var index = this.getAttribute("title");
            if(index > 2) {
                var imgSrc = "images/star2.png";
            }
            else {
                var imgSrc = "images/star1.png";
            }
            for(var j = 0; j < index; j++) {
                imgList[j].src = imgSrc;
            }
            txt1.innerHTML = comments[index-1];
        }
        else {
            return;
        }
    }
    imgList[i].onmouseout = function() {
        if(flag) {
            var index = this.getAttribute("title");
            for(var j = 0; j < index; j++) {
                imgList[j].src = "images/star0.png";
            }
            txt1.innerHTML = "";
        }
        else {
            return;
        }
    }
    imgList[i].onclick = function() {
        flag = !flag;
    }
}
btn.onclick = function() {
	if(txt1.innerHTML != ""){
   		alert("评论成功!");
   	}
}
window.onscroll = function(){ 
    if( distance <= 100 ) { 
        document.getElementById('to_top').style.display = "";
    } 
    else { 
        document.getElementById('to_top').style.display = "none";
    }
    toTop.onclick = function() { 
        document.documentElement.scrollTop = document.body.scrollTop = 0; 
    }
}
function getStyle(obj, attr) {
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback) {
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

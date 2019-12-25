var pic = document.getElementById("pic");
var imgList = pic.getElementsByTagName("img");
var flag = true;
for(var i = 0;i<imgList.length;i++){
    imgList[i].onmouseover = function(){
        if(flag==true){
            var index = this.getAttribute("title");          
            var imgSrc = "./images/star2.png";
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
var btns = document.getElementsByClassName("btn")
var contents = document.getElementsByClassName("content")
for(var i=0;i<btns.length;i++){
    btns[i].index = i;
    btns[i].onclick = function(){
    for(var j=0;j<btns.length;j++){
        btns[j].className = btns[j].className.replace(' active', '').trim();
        contents[j].className = contents[j].className.replace(' show', '').trim();
    }
    this.className = this.className + ' active';
    contents[this.index].className = contents[this.index].className + ' show';
    };
}
var box=document.getElementById("box");
var slider=document.getElementById("slider");
var index=0;
var ind=1;
var isMoving=false; 
setInterval(start,280);
function start() {
    ind++;
    animate(word,{right:-270+10*ind},function(){
    	if(ind===90){
    		word.style.right="-270px";
    		ind=1;
    	}
    });
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
function next(){
	if(index!=3){
        index++;
    }
    if(index!=3){
    	animate(slider,{left:-800*index});
    }
    if(index==3){
        animate(slider,{left:-800*index},function(){
    	   if(index===3){
    		  slider.style.left="-800px";
    		  index=1;
			}
        });
    }
}
var timer=setInterval(next,3000);
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


"use strict"
/*		var el = window.document.body;//声明一个变量，默认值为body
		window.document.body.onmouseover = function(event){
		var el = event.target.nodeName;//鼠标每经过一个元素，就把该元素赋值给变量el
	//	console.log(el);//在控制台中打印该变量
		}*/
let spans = document.querySelectorAll("ul.content >ul>span:first-child");
for(var i in spans){
	var span = spans[i];
		if(!isNaN(i))
			span.onmouseover = function(){
				if(this.className == "open"){
					this.className = "";
				}else{	let openSpan = document.querySelector("ul.content>ul>span:first-child.open");
							if(openSpan != null){
								openSpan.className= "";
							}
								this.className = "open";
				}
			  }
 for(let i in spans){
	let span = spans[i]; 
		 if(!isNaN(i))
			span.onmouseout = function(){
				if(event.toElement.nodeName !== "LI" && event.toElement.nodeName  !== "SPAN"){
					span.className = "";
				}
			  }
}
}
let lis = document.querySelectorAll("ul>ul>ul>li");
for(let i in lis){
		let li = lis[i]; 
		if(!isNaN(i))
	li.onmouseout = function(){
	if(event.toElement.nodeName !== "LI" && event.toElement.nodeName  !== "SPAN"){
			for(let i in spans){
				let span = spans[i];
					if(!isNaN(i))
						span.className = "";
			}	
	}
	}
}
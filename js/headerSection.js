/*******************************header中的第二导航栏的方法******************************/

//landscapebtn
function landscapebtn(){
var section1 = document.getElementById("section1");
ajax({
	type:"get",
	url:"php/index/Landscape.php",
	dataType:"json"
	}).then(con=>{
	var {landscape} = con;
	//console.log(con);
	var html="";
//	console.log(con);
	for(var p of landscape){
//		console.log(p);
	let {pid,url} = p;
		html += `<div >
		<img  id="${pid}" src="${url}"/>
		</div>`;
		}
section1.innerHTML=html;
var imgs = document.querySelectorAll(".section1>div>img");
//console.log(imgs);
for(let i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){
		var id = imgs[i].id;
		console.log(id);
			ajax({
			type:"get",
			data:"pid="+id,
			url:"php/img/img.php",
			dataType:"json"
		}).then(img=>{
			var {img_product} = img;
			var html="";
		for(var p of img_product){
		var {url} = p;
		html += `<div >
		<img src="${url}"/>
		</div>`;
	}document.getElementById("section1").innerHTML=html;		
			})
		}
}
	})
}

//ALL
function ALL(){
var section1 = document.getElementById("section1");
ajax({
	type:"get",
	url:"php/index/getImgIndex.php",
	dataType:"json"
	}).then(con=>{
	var {imgIndex} = con;
	//console.log(con);
	var html="";
//	console.log(con);
	for(var p of imgIndex){
//		console.log(p);
	let {pid,url} = p;
		html += `<div >
		<img  id="${pid}" src="${url}"/>
		</div>`;
		}
section1.innerHTML=html;
var imgs = document.querySelectorAll(".section1>div>img");
//console.log(imgs);
for(let i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){
		var id = imgs[i].id;
		console.log(id);
			ajax({
			type:"get",
			data:"pid="+id,
			url:"php/img/img.php",
			dataType:"json"
		}).then(img=>{
			var {img_product} = img;
			var html="";
		for(var p of img_product){
		var {url} = p;
		html += `<div >
		<img src="${url}"/>
		</div>`;
	}document.getElementById("section1").innerHTML=html;		
			})
		}
}
	})
}

//FISHION
function FISHION(){
var section1 = document.getElementById("section1");
ajax({
	type:"get",
	url:"php/index/fishion.php",
	dataType:"json"
	}).then(con=>{
	var {fishion} = con;
	//console.log(con);
	var html="";
//	console.log(con);
	for(var p of fishion){
//		console.log(p);
	let {pid,url} = p;
		html += `<div >
		<img  id="${pid}" src="${url}"/>
		</div>`;
		}
section1.innerHTML=html;
var imgs = document.querySelectorAll(".section1>div>img");
//console.log(imgs);
for(let i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){
		var id = imgs[i].id;
		console.log(id);
			ajax({
			type:"get",
			data:"pid="+id,
			url:"php/img/img.php",
			dataType:"json"
		}).then(img=>{
			var {img_product} = img;
			var html="";
		for(var p of img_product){
		var {url} = p;
		html += `<div >
		<img src="${url}"/>
		</div>`;
	}document.getElementById("section1").innerHTML=html;		
			})
		}
}
	})

}
//BUSINESS
function BUSINESS(){
var section1 = document.getElementById("section1");
ajax({
	type:"get",
	url:"php/index/business.php",
	dataType:"json"
	}).then(con=>{
	var {business} = con;
	//console.log(con);
	var html="";
//	console.log(con);
	for(var p of business){
//		console.log(p);
	let {pid,url} = p;
		html += `<div >
		<img  id="${pid}" src="${url}"/>
		</div>`;
		}
section1.innerHTML=html;
var imgs = document.querySelectorAll(".section1>div>img");
//console.log(imgs);
for(let i=0;i<imgs.length;i++){
		imgs[i].onclick=function(){
		var id = imgs[i].id;
		console.log(id);
			ajax({
			type:"get",
			data:"pid="+id,
			url:"php/img/img.php",
			dataType:"json"
		}).then(img=>{
			var {img_product} = img;
			var html="";
		for(var p of img_product){
		var {url} = p;
		html += `<div >
		<img src="${url}"/>
		</div>`;
	}document.getElementById("section1").innerHTML=html;		
			})
		}
}
	})}
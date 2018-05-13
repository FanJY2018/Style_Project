(()=>{
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/header.css";
	document.head.appendChild(link);
	ajax({
		type:"get",
		url:"header_little.html"
	})//return Promise()
			//open(xhr.responseText)
	.then(html=>{
		document.getElementById("header").innerHTML=html;
	});
})();
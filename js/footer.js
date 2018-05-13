(()=>{
	var link = document.createElement("link");
	link.setAttribute("rel","stylesheet");
	link.setAttribute("src","css/footer.css");
	document.body.appendChild(link);
	ajax({
	type:"get",
	url:"footer.html"
	}).then(foot=>{
		document.getElementById("footer").innerHTML=foot;
	});
})();
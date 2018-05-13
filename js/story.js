(()=>{
    ajax({
        type:"get",
        url:"php/story/story.php",
        dataType:"json"
    }).then(story=>{
        var {img_story}= story;
       html = "";
       for(var i of img_story){
        var{url,title,story} = i;
        html+=`<div>
    <div><img src="${url}" alt="${title}"></div>
    <div><h4>${title}</h4><p>${story}</p></div></div>`;
       }document.querySelector(".story_container").innerHTML=html;
    }
    )
})()
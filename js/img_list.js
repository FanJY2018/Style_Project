(()=> {
                ajax({
                    type: "get",
                    data: "pid=" + (i + 1),
                    url: "php/img/img.php",
                    dataType: "json"
                }).then(img => {
                    var {img_product} = img;
                    var html = "";
                    for (var p of img_product) {
                        var {url} = p;
                        html += `<img src=${url}>`;
                    }
                    document.querySelector(".container3").innerHTML = html;
                })
    })()

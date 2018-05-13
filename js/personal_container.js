(()=>{
    //点击私人订制图片发送AJAX
    var img = document.querySelectorAll("img");
    img.forEach(function(value,index,arr){
        arr[index].onclick = function(){
                var index_id = index + 1;
            ajax({
                url:'php/personal/personal_container.php',
                data:'pid='+index_id,
                type:'get',
                dataType:'json'
            }).then((result)=>{
                var {personal_container} = result;
                var html = "";
                for(var c of personal_container){
                    var {url,price,title,personal_date,style,pid} = c;
                    html+=`<div class="container">
            <div class="row" id="cookieContent" data-guid="${pid}">
            <div class="col-md-6 col-sm-12">
                <img src="${url}" class="img-responsive" alt="">
            </div>
            <div class="col-md-6 col-sm-12">
                <h3 class="per_title">${title}</h3>
                <h4 class="per_price">￥${price}</h4>
                <hr class="hr">
                <p class="per_con_1">包含19%的增值税，包括运费</p>
                  <p class="per_con_1">相框格式：${style}</p>
                <p class="per_con_1" style="font-size:10px">注意， 您只能购买印刷品。我们会负责为您制作相应大小的框架，您可以在购物车备注中输入您的框架大小</p>
                <p class="per_con_1">交货时间：${personal_date}</p>
                <div >
                    <input type="text" class="per_num" value="1">
                    <button class="cart btn btn-success" id="btn_cart">添加购物车</button>
                    <a href="shopcart.html" class="btn cart btn-primary">去结算</a>
                    <a href="Personal_Tailor.html" class="btn btn_back btn-primary">返回</a>
                </div>
            </div>
        </div> ` }
                var header_img = document.querySelector(".row.head_img");
                var container = document.getElementById("container");
                var personal_details = document.getElementById("personal_details");
                var header_text = document.querySelector('.head_text');
                personal_details.innerHTML = html;
                container.innerHTML = "";
                header_img.className = "";
                header_text.innerHTML='';
                // Cookie事件
                var cookieContent = document.getElementById("cookieContent");
                var carList = [];
                    var cookies = document.cookie.split(";");
                    for(var i=0;i<cookies.length;i++){
                        var arr = cookies[i].split("=");
                        if(arr[0] === 'carList'){
                            carList = JSON.parse(arr[1]);
                        }
                    }
                    //事件委托
                cookieContent.onclick = function(e){
                        e = e || window.event;
                        var target  = e.target || e.srcElement;
                    if(target.tagName.toLowerCase() == 'button'){
                        var currentli = target.parentElement.parentElement.parentElement;
                        var children = currentli.children;
                        var currentGUID = currentli.getAttribute("data-guid");
                        console.log(children);
                        //创建对象保存商品信息
                        var cookieContentObj = {};
                        cookieContentObj.guid = currentGUID;
                        cookieContentObj.url = children[0].children[0].src;
                        cookieContentObj.title = children[1].children[0].innerHTML;
                        cookieContentObj.price = children[1].children[1].innerHTML;
                        cookieContentObj.pdate = children[1].children[6].innerHTML;
                        cookieContentObj.count = children[1].children[7].children[0].value;
                        cookieContentObj.qty = 1;
                        // 如果cookie为空，则直接添加
                        if(carList.length === 0){
                            carList.push(cookieContentObj);
                        }else{
                            // 先判断cookie中有无相同的guid商品
                                for(var i =0 ; i<carList.length;i++){
                                    // 如果商品已经存在cookie中，则数量+1
                                    if(carList[i].guid === currentGUID){
                                        carList[i].qty++;
                                        break;
                                    }
                                }
                            // 如果原cookie中没有当前商品
                                if(i == carList.length){
                                    // 添加到carList
                                    carList.push(cookieContentObj);
                                }
                        }
                        // 存入cookie
                        // 把对象/数组转换诚json字符串：JSON.stringify()
                        document.cookie = 'carList=' + JSON.stringify(carList);
                    }
                }
            })
            /*点击其他中的图片发送AJAX*/
            ajax({
                url:'php/personal/personal_qita.php',
                type:"get",
                dataType:"json"
            }).then((result)=>{
                var {personal_qita} = result;
                var html = "";
                for(var i of personal_qita){
                    var{url,price,personal_date,style,title} = i;
                    html +=` <div class="col-xs-3">
                    <img src="${url}" class="img-responsive" width="100%" alt="">
                    <div class="con_text">
                    <p>${title}-${style}</p>
                    <p>￥${price}</p>
                    <p>包括19%增值税</p>
                    <p>算上运费</p>
                    <p>交货时间：${personal_date}</p>
                </div></div>`;
                }
                var qita = document.getElementById("qita");
                qita.innerHTML = html;
                var qita_h3 = document.querySelector(".qita");
                var headt = document.querySelector('.head_text');

                qita_h3.style.display = "block";

        var imgs = document.querySelectorAll("#qita img");
                var carList2 = [];
                var cookies = document.cookie.split(";");
                imgs.forEach(function(v,i,a){
                    var i_id = i+1;
                    a[i].onclick = function(){
                        ajax({
                            url:'php/personal/personal_container.php',
                            data:'pid='+i_id,
                            type:'get',
                            dataType:'json'
                        }).then((result)=>{
                            var {personal_container} = result;
                            var html1 = "";
                            for(var c of personal_container){
                                var {url,price,title,personal_date,style,pid} = c;
                                html1+=`<div class="container" >
                                    <div class="row" id="cookieContent" data-guid="${pid}">
                                    <div class="col-md-6 col-sm-12">
                                    <img src="${url}" class="img-responsive" alt="">
                                     </div>
                                     <div class="col-md-6 col-sm-12">
                                    <h3 class="per_title">${title}</h3>
                                    <h4 class="per_price">￥${price}</h4>
                                    <hr class="hr">
                                    <p class="per_con_1">包含19%的增值税，包括运费</p>
                                      <p class="per_con_1">相框格式：${style}</p>
                                    <p class="per_con_1" style="font-size:10px">注意， 您只能购买印刷品。我们会负责为您制作相应大小的框架，您可以在购物车备注中输入您的框架大小</p>
                                    <p class="per_con_1">交货时间：${personal_date}</p>
                                    <div >
                                        <input type="text" class="per_num" value="1">
                                        <button class="cart btn btn-success" id="btn_cart">添加购物车</button>
                                             <a href="shopcart.html" class="btn cart btn-primary">去结算</a>
                                          <a href="Personal_Tailor.html" class="btn btn_back btn-primary">返回</a>
                                    </div>
                                </div>
                            </div> `
                            }
                            var qita_h3 = document.querySelector(".qita");
                            qita_h3.style.display = "block";
                            var personal_details = document.getElementById("personal_details");
                            personal_details.innerHTML = html1;

                            // Cookie事件
                         //   console.log(cookies1);
                            var cookieContent1 = document.getElementById("cookieContent");
                            for(var i=0;i<cookies.length;i++){

                                var arr = cookies[i].split("=");
                                //console.log(arr[0])
                                if(arr[1] === 'carList1'){
                                    carList2 = JSON.parse(arr[1]);
                                }
                            }
                            //事件委托
                            cookieContent1.onclick = function(e){
                                e = e || window.event;
                                var target  = e.target || e.srcElement;
                                if(target.tagName.toLowerCase() == 'button'){
                                    var currentli1 = target.parentElement.parentElement.parentElement;
                                    var children = currentli1.children;
                                    var currentGUID = currentli1.getAttribute("data-guid");
                                    //创建对象保存商品信息
                                    var cookieContentObj1 = {};
                                    cookieContentObj1.guid = currentGUID;
                                    cookieContentObj1.url = children[0].children[0].src;
                                    cookieContentObj1.title = children[1].children[0].innerHTML;
                                    cookieContentObj1.price = children[1].children[1].innerHTML;
                                    cookieContentObj1.pdate = children[1].children[6].innerHTML;
                                    cookieContentObj1.count = children[1].children[7].children[0].value;
                                    cookieContentObj1.qty = 1;
                                    // 如果cookie为空，则直接添加
                                    if(carList2.length === 0){
                                        carList2.push(cookieContentObj1);
                                        console.log(carList2)
                                    }else{
                                        console.log(carList2)
                                        // 先判断cookie中有无相同的guid商品
                                        for(var i =0 ; i<carList2.length;i++){
                                                    console.log(carList2[i])
                                            // 如果商品已经存在cookie中，则数量+1

                                        }
                                        // 如果原cookie中没有当前商品
                                        if(i === carList2.length){
                                            console.log(i);

                                            // 添加到carList
                                            carList2.push(cookieContentObj1);
                                            console.log(carList2);
                                        }
                                    }
                                    // 存入cookie
                                    // 把对象/数组转换诚json字符串：JSON.stringify()
                                    document.cookie = 'carList1=' + JSON.stringify(carList2);

                                }
                            }




                        })
                    }
                })
            })

        }
    })

})()
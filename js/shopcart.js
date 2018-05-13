window.onload = function(){
    var con =document.getElementById('con');
    var head = document.getElementById("shopcart-header");
    var container = document.getElementById("shopcart-container");
    var data = document.getElementById("shopcart-data");

    var carList;
    var carList1;
    var cookies = document.cookie.split('; ');
    for(var i=0;i<cookies.length;i++){
        //  console.log(cookies[i].split('='))
        var arr = cookies[i].split('=');
        console.log(arr);
        if(arr[0] === 'carList'){
            //  console.log(JSON.parse(arr[1]));
            carList = JSON.parse(arr[1]);
        }
        if(arr[0] === 'carList1'){
            //  console.log(JSON.parse(arr[1]));
            carList1 = JSON.parse(arr[1]);
        }
    }
    var html2 = '';

    if(carList){
        var zong = 0;
        var Zprice = 0;
        var zong_shang = 0;
        var Zprice_shange = 0
        var xiaoji =0;
        //      console.log(carList);
        for(var i =0;i<carList.length;i++){
            var html1 = '';
            var html3 = '';
            var price = carList[i].price;
            var title = carList[i].title;
            var count =  parseInt(carList[i].count);
            var countl = parseInt(count);
            var url = carList[i].url;
            var date = carList[i].pdate;
            var index = carList[i].price.lastIndexOf("￥");
            var zongprice = price.substring(index+1,);
            var guid = carList[i].guid;
            Zprice += parseInt(zongprice);
            Zprice_shange = parseInt(zongprice);
            var zeng = parseInt(Zprice * 0.19 * countl);
            zong_shang = parseInt(Zprice_shange * countl);
            xiaoji +=  parseInt(zong_shang);
            console.log(xiaoji);
            zong = parseInt(xiaoji + zeng);
            html1 += `<div class="col-xs-4">${title}已经添加到您的购物车</div>
                        <div class="col-xs-4"></div>
                        <div class="col-xs-4"><a href="Personal_Tailor.html">继续购物</a></div>`;

            html2 += `<div class="row" data-guid="${guid}">
                    <div class="col-xs-1"><span class="glyphicon glyphicon-remove" id="del"></span></div>
                    <div class="col-xs-1"><img src="${url}" class="" width="100%" alt=""></div>
                    <div class="col-xs-4">${title} <br> ${date}天</div>
                    <div class="col-xs-2">${price}</div>
                    <div class="col-xs-2">${countl}</div>
                    <div class="col-xs-2">￥${zong_shang}</div>
                    </div>`;

            html3+=`<p> 数据 </p>
                    <p>￥${xiaoji}</p>
                    <p>￥${zeng}</p>
                    <p>￥${zong}</p>`;
        }

        head.innerHTML = html1;
        container.innerHTML = html2;
        data.innerHTML = html3;
    }
    if(carList1){
        var zong = 0;
        var Zprice = 0;
        var zong_shang = 0;
        var Zprice_shange = 0
        var xiaoji =0;
        //      console.log(carList);
        for(var i =0;i<carList1.length;i++){
            var html1 = '';
            var html3 = '';
            var price = carList1[i].price;
            var title = carList1[i].title;
            var count =  parseInt(carList1[i].count);
            var countl = parseInt(count);
            var url = carList1[i].url;
            var date = carList1[i].pdate;
            var index = carList1[i].price.lastIndexOf("￥");
            var zongprice = price.substring(index+1,);
            var guid = carList1[i].guid;
            Zprice += parseInt(zongprice);
            Zprice_shange = parseInt(zongprice);
            var zeng = parseInt(Zprice * 0.19 * countl);
            zong_shang = parseInt(Zprice_shange * countl);
            console.log(zong_shang);
            xiaoji +=  parseInt(zong_shang);
            zong = parseInt(xiaoji + zeng);
            console.log(xiaoji);
            html1 += `<div class="col-xs-4">${title}已经添加到您的购物车</div>
                        <div class="col-xs-4"></div>
                        <div class="col-xs-4"><a href="personal_container.html">继续购物</a></div>`;

            html2 += `<div class="row" data-guid="${guid}" >
                    <div class="col-xs-1"><span class="glyphicon glyphicon-remove" id="del"></span></div>
                    <div class="col-xs-1"><img src="${url}" class="" width="100%" alt=""></div>
                    <div class="col-xs-4">${title} <br> ${date}天</div>
                    <div class="col-xs-2">${price}</div>
                    <div class="col-xs-2">${countl}</div>
                    <div class="col-xs-2">￥${zong_shang}</div>
                    </div>`;

            html3+=`<p> 数据 </p>
                    <p>￥${xiaoji}</p>
                    <p>￥${zeng}</p>
                    <p>￥${zong}</p>`;
        }

        head.innerHTML = html1;
        container.innerHTML = html2;
        data.innerHTML = html3;
    }
    con.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.id === 'del'){
            var parent = target.parentElement.parentElement;
            /// /  parent.innerHTML = '';
            var currentGUID = parent.getAttribute("data-guid");
            console.log(parent);
            if(carList){
                for(var i=0;i<carList.length;i++){
// 找出要删除的商品
                    if(carList[i].guid === currentGUID){
                        carList.splice(i,1);
                        break;
                    }
                }
            }else{
                carList = [];
            }
            if(carList1){
                for(var i=0;i<carList1.length;i++){
// 找出要删除的商品
                    if(carList1[i].guid === currentGUID){
                        carList1.splice(i,1);
                        break;
                    }
                }
            }else{
                carList1=[];
            }
            document.cookie = 'carList=' + JSON.stringify(carList);
            document.cookie = 'carList1=' + JSON.stringify(carList1);
            var sp_cart = parent.parentElement.nextElementSibling.nextElementSibling.children[0].children[0].childNodes[3];
            sp_cart.innerHTML='';
            parent.parentElement.removeChild(parent);

        }
    }

}
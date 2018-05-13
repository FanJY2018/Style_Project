  (()=> {
     ajax({
         type: "get",
         url: "php/index/getImgIndex.php",
         dataType: "json"
     }).then(img => {
         //	console.log(img);
         var {imgIndex} = img;
         var html = "";
         for (var p of imgIndex) {
             var {url,pid} = p;
             var arr = [];
             var x ;
             arr = ["lan","bus","fis"];
             if(pid-1<10 || pid >=23 && pid <26){
                 x = arr[0];
              //   console.log(x);
             }else if(pid-1>=10 && pid-1<23){
                 x=arr[2];
             //    console.log(x);
             }else if(pid >=26 || pid == 30){
                 x=arr[1];
             //    console.log(x);
             }
         //    console.log(pid);
         //    console.log(arr);
         //     console.log(p);
             //     console.log(url);
             html += `<div class="col-md-3 col-sm-4 col-xs-12 mix ${x} all" data-cat="bw">
                                    <a data-toggle="modal" data-target="#portrait1" class="mix-cover">
                                    <img class="horizontal" src="${url}" data-img="" alt="placeholder" style="width:350px !important;height:270px !important">
                                    </a>
                      </div>`;
         }
         document.querySelector("#Grid").innerHTML = html;

         $(function(){
             $('#Grid').mixitup();
         });


         $(function() {
             $('a[href*=#]:not([href=#])').click(function() {
                 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                     || location.hostname == this.hostname) {

                     var target = $(this.hash);
                     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                     if (target.length) {
                         $('html,body').animate({
                             scrollTop: target.offset().top
                         }, 1000);
                         return false;
                     }
                 }
             });
         });



      //  console.log(document.querySelector(".section1").innerHTML = html);
     //    loadImg(imgs);
        // window.onscroll = function () { //滚动条滚动触发
         //     //	console.log(imgs);
         //     loadImg(imgs);
         // };
       var imgs = document.querySelectorAll("#Grid img");
          console.log(imgs);
//          //
//
         for (let i = 0; i < imgs.length; i++) {
             imgs[i].onclick = function () {
                 console.log(i);
                 ajax({
                     type: "get",
                     data: "pid=" + (i + 1),
                     url: "php/img/img.php",
                     dataType: "json",
                 }).then(img => {
                   var {img_product} = img;
                    var html = "";
                     for (var p of img_product) {
                         var {url} = p;
                         html += `<div><img src="${url}" alt="Picture 1" class="col-xs-3"></div>`
                     }

                     document.querySelector('#section1').innerHTML = html;

                     // Get the Viewer.js instance after initialized

                     // View a list of images
                     $('#section1').viewer();
                     document.querySelector("#Grid").innerHTML = "";
                     document.querySelector(".container2").innerHTML = "";

                 })
             }
        }

     }
)






 })()
//  function loadImg(arr) {
//   for(var i = 0, len = arr.length; i < len; i++) {
//     //  console.log(arr[i]);
//
//       if (arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad) {
//           arr[i].isLoad = true; //图片显示标志位
//       }
//        // arr[i].style.cssText = "width:0px";
//      // arr[i].style.cssText = "opacity:0";
//       (function (i) {
//
//               setTimeout(function () {
//                   if (arr[i].dataset) { //兼容不支持data的浏览器
//                       aftLoadImg(arr[i], arr[i].dataset.img);
//
//                   } else {
//                       aftLoadImg(arr[i], arr[i].getAttribute("data-img"));
//
//                   }
//                   console.log(arr[i]);
//                //   arr[i].style.cssText = "opacity:1";
//               }, 1000)
//
//           })(i);
//       }
// }
// function aftLoadImg(obj, url) {
//   var oImg = new Image();
// 	  oImg.onload = function() {
// 		obj.src = oImg.src; //下载完成后将该图片赋给目标obj目标对象
// 	  }
//   oImg.src = url; //oImg对象先下载该图像
// }
//  })()
/*
 function loadImg(arr) {
  for(var i = 0, len = arr.length; i < len; i++) {
   if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad) {
   arr[i].isLoad = true; //图片显示标志位
   //arr[i].style.cssText = "opacity: 0;";
   (function(i) {
    setTimeout(function() {
    if(arr[i].dataset) { //兼容不支持data的浏览器
			aftLoadImg(arr[i], arr[i].dataset.imgurl);
    } else {
		    aftLoadImg(arr[i], arr[i].getAttribute("data-imgurl"));
    }
    arr[i].style.cssText = "transition: 1s; opacity: 1;" //相当于fadein
    }, 500)
   })(i);
   }
  }
}
function aftLoadImg(obj, url) {
  var oImg = new Image();
	  oImg.onload = function() {
		obj.src = oImg.src; //下载完成后将该图片赋给目标obj目标对象
	  }
  oImg.src = url; //oImg对象先下载该图像
}
*/

var element1 = document.getElementById('html'); // 移動させたい位置の要素を取得
    var rect1 = element1.getBoundingClientRect();
    var position1 = rect1.top;    // 一番上からの位置を取得

var element2 = document.getElementById('meta'); // 移動させたい位置の要素を取得
    var rect2 = element2.getBoundingClientRect();
    var position2 = rect2.top;    // 一番上からの位置を取得

var element3 = document.getElementById('style'); // 移動させたい位置の要素を取得
    var rect3 = element3.getBoundingClientRect();
    var position3 = rect3.top;    // 一番上からの位置を取得


function scrollToTop1() {
  scrollTo(0, position1);
}

function scrollToTop2() {
    scrollTo(0, position2);
}

function scrollToTop3() {
    scrollTo(0, position3);
}

// let html=document.getElementById("htmlb");
// let meta=document.getElementById("metab");
// let style=document.getElementById("styleb");
//const inner_style=document.querySelector("#nav_style");
//inner_style="<button rel="#style"> style </button>";
// html.onclick=function (){
//     let htmlrect=html.getBoundingClientRect();
//     let htmlpos=htmlrect.top();
//     window.scrollTo( 0, htmlpos);
// } 
// meta.onclick=function (){
//     let metarect=meta.getBoundingClientRect();
//     let metapos=metarect.top();
//     window.scrollTo( 0, metapos);
// }
// style.onclick=function (){
//     let stylerect=style.getBoundingClientRect();
//     let stylepos=stylerect.top();
//     window.scrollTo( 0, stylepos);
// }


let html=document.getElementById("htmlb");
let meta=document.getElementById("metab");
let style=document.getElementById("styleb");
//const inner_style=document.querySelector("#nav_style");
//inner_style="<button rel="#style"> style </button>";
html.onclick=function (){
    window.scrollTo( 0, 250);
} 
meta.onclick=function (){
    window.scrollTo( 0, 800);
}
style.onclick=function (){
    window.scrollTo( 0, 1200);
}


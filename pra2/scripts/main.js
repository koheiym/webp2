let html=document.getElementById("htmlb");
let meta=document.getElementById("metab");
let style=document.getElementById("styleb");
html.onclick=function (){
    window.scrollTo( 0, html.top);
} 
meta.onclick=function (){
    window.scrollTo( 0, meta.top);
}
style.onclick=function (){
    window.scrollTo( 0, style.top);
} 

//ass9.1
document.querySelector("h1").style.color= "#d41949";

//ass9.2
let hover= document.querySelector("button")

hover.onmouseover=function(){
    hover.style.backgroundColor="#d41949";
}
hover.onmouseout=function(){
    hover.style.backgroundColor="hsl(158, 36%, 37%)";
}

//Header section******************************************************
let body=document.querySelector("body");
body.onscroll=()=>
{
    let header=document.querySelector("#Header");
    if(window.scrollY==0)
    header.style.backgroundColor="transparent";
    else
    header.style.backgroundColor="#676161";
}
//Choose section*******************************************************
let a=["../images/about/about1.webp","../images/about/about2.webp"];
a.push("../images/about/about3.jpg")
a.push("../images/about/about4.jpg")
let x=0;
function sliderMove()
{
    console.log(x);
    let photo0=document.querySelector(".choose-img-photo"+x%2)
    let photo1=document.querySelector(".choose-img-photo"+(x+1)%2)
    photo0.style.animationName="slider-photo1"
    photo1.style.animationName="slider-photo2"
    a.push(a.shift())
    setTimeout(()=>photo0.setAttribute("src",a[0]),4000)
    x++
}
setInterval(sliderMove,4000)